"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export type VoiceSearchStatus =
  | "idle"
  | "listening"
  | "permission-denied"
  | "unavailable"
  | "error";

export type SupportedVoiceLang = "en-IN" | "hi-IN";

/**
 * Determines the speech recognition language strictly per requirements:
 * - English UI -> en-IN
 * - Hindi UI -> hi-IN
 * Any other UI language defaults to en-IN.
 */
export function getVoiceRecognitionLang(uiLang: string): SupportedVoiceLang {
  return uiLang === "hi" ? "hi-IN" : "en-IN";
}

/**
 * Checks if the browser supports native SpeechRecognition.
 */
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(
    (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition
  );
}

/**
 * Robustly stitches two speech transcript segments without duplicating words.
 * Handles:
 * - Direct prefix/containment overlaps (e.g. restarts that repeat earlier text)
 * - Word-level boundary overlaps (e.g. Android Chrome boundary repeats across sessions)
 * - Identical phrases or sub-phrases
 */
export function stitchTranscripts(prevText: string = "", currText: string = ""): string {
  const p = prevText.trim();
  const c = currText.trim();

  if (!p) return c;
  if (!c) return p;

  const pLower = p.toLowerCase();
  const cLower = c.toLowerCase();

  // If curr already contains prev entirely or is identical, return curr
  if (cLower === pLower) return c;
  if (cLower.startsWith(pLower + " ") || cLower.startsWith(pLower)) return c;

  // If prev already ends with curr or curr is completely contained at the end of prev
  if (pLower.endsWith(" " + cLower) || pLower === cLower) return p;

  const pWords = p.split(/\s+/);
  const cWords = c.split(/\s+/);

  // Check for word-level boundary overlap (up to min length)
  const maxOverlap = Math.min(pWords.length, cWords.length);
  for (let overlap = maxOverlap; overlap >= 1; overlap--) {
    const pSuffix = pWords.slice(pWords.length - overlap).map((w) => w.toLowerCase()).join(" ");
    const cPrefix = cWords.slice(0, overlap).map((w) => w.toLowerCase()).join(" ");

    if (pSuffix === cPrefix) {
      // Overlap matched! Keep previous and append only the new remainder
      const remainingC = cWords.slice(overlap).join(" ");
      return remainingC ? `${p} ${remainingC}` : p;
    }
  }

  // No overlap found, join with space
  return `${p} ${c}`;
}

export interface UseVoiceSearchOptions {
  currentLang: string;
  initialQuery?: string;
  onSpeechChange?: (transcript: string) => void;
  onSpeechRecognized?: (transcript: string) => void;
}

export interface UseVoiceSearchResult {
  status: VoiceSearchStatus;
  isListening: boolean;
  isSupported: boolean;
  activeLanguage: SupportedVoiceLang;
  errorMessage: string | null;
  currentTranscript: string;
  startListening: (initialText?: string) => void;
  stopListening: () => void;
  toggleListening: (initialText?: string) => void;
  resetStatus: () => void;
}

// Browser Web Speech API interfaces
interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: ((this: SpeechRecognitionInstance, ev: Event) => void) | null;
  onresult: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionEvent) => void) | null;
  onerror: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionErrorEvent) => void) | null;
  onend: ((this: SpeechRecognitionInstance, ev: Event) => void) | null;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  };
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

export function useVoiceSearch({
  currentLang,
  initialQuery = "",
  onSpeechChange,
  onSpeechRecognized,
}: UseVoiceSearchOptions): UseVoiceSearchResult {
  const [status, setStatus] = useState<VoiceSearchStatus>("idle");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentTranscript, setCurrentTranscript] = useState<string>("");

  // Explicit ref to distinguish user-triggered stop vs browser-triggered onend
  const isListeningRef = useRef<boolean>(false);
  const isRecognizingRef = useRef<boolean>(false);

  // Stable references for callbacks to prevent stale closure captures
  const currentLangRef = useRef<string>(currentLang);
  currentLangRef.current = currentLang;

  const onSpeechChangeRef = useRef(onSpeechChange);
  onSpeechChangeRef.current = onSpeechChange;

  const onSpeechRecognizedRef = useRef(onSpeechRecognized);
  onSpeechRecognizedRef.current = onSpeechRecognized;

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-existing text typed before mic was activated
  const initialTextRef = useRef<string>(initialQuery);

  // Finalized speech accumulated across auto-restart sessions
  const committedFinalRef = useRef<string>("");

  // Transcripts within the active recognition session
  const currentSessionFinalRef = useRef<string>("");
  const currentSessionInterimRef = useRef<string>("");

  const activeLanguage = getVoiceRecognitionLang(currentLang);

  // Check support on mount
  useEffect(() => {
    const supported = isSpeechRecognitionSupported();
    setIsSupported(supported);
  }, []);

  // Compute full query combining initial text + committed final + current session
  const computeFullQuery = useCallback((): string => {
    const sessionText = currentSessionFinalRef.current
      ? (currentSessionInterimRef.current
          ? `${currentSessionFinalRef.current} ${currentSessionInterimRef.current}`
          : currentSessionFinalRef.current)
      : currentSessionInterimRef.current;

    const fullVoice = stitchTranscripts(committedFinalRef.current, sessionText);
    return stitchTranscripts(initialTextRef.current, fullVoice);
  }, []);

  // Starts a clean native SpeechRecognition session
  const startRecognitionSession = useCallback(() => {
    if (!isListeningRef.current) return;

    if (isRecognizingRef.current && recognitionRef.current) {
      return;
    }

    // Clean up previous instance
    if (recognitionRef.current) {
      try {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.abort();
      } catch {
        // Ignore abort errors
      }
      recognitionRef.current = null;
      isRecognizingRef.current = false;
    }

    const SpeechRecognitionConstructor =
      (window as unknown as { SpeechRecognition?: new () => SpeechRecognitionInstance }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognitionInstance }).webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) {
      isListeningRef.current = false;
      setIsListening(false);
      setStatus("unavailable");
      setErrorMessage("Voice search is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    try {
      const recognition = new SpeechRecognitionConstructor();
      recognitionRef.current = recognition;

      const chosenLang = getVoiceRecognitionLang(currentLangRef.current);
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.lang = chosenLang;

      recognition.onstart = () => {
        isRecognizingRef.current = true;
        if (isListeningRef.current) {
          setIsListening(true);
          setStatus("listening");
          setErrorMessage(null);
        }
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        if (!isListeningRef.current) return;

        let sessionFinal = "";
        let sessionInterim = "";

        // Iterate through all results in the current session
        for (let i = 0; i < event.results.length; i++) {
          const res =
            event.results[i] ||
            (event.results as unknown as { item?: (idx: number) => SpeechRecognitionResult }).item?.(i);
          if (!res) continue;

          const alt =
            res[0] ||
            (res as unknown as { item?: (idx: number) => SpeechRecognitionAlternative }).item?.(0);
          if (!alt || typeof alt.transcript !== "string") continue;

          const transcript = alt.transcript.trim();
          if (!transcript) continue;

          if (res.isFinal) {
            sessionFinal += (sessionFinal ? " " : "") + transcript;
          } else {
            // Interim results ALWAYS replace the previous interim value, never append
            sessionInterim += (sessionInterim ? " " : "") + transcript;
          }
        }

        currentSessionFinalRef.current = sessionFinal;
        currentSessionInterimRef.current = sessionInterim;

        const fullQuery = computeFullQuery();

        if (fullQuery.trim().length > 0) {
          const text = fullQuery.trim();
          setCurrentTranscript(text);
          onSpeechChangeRef.current?.(text);
          if (sessionFinal && !sessionInterim) {
            onSpeechRecognizedRef.current?.(text);
          }
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        const error = event.error;

        // Pauses during speech are expected; do not disable voice mode
        if (error === "no-speech") {
          return;
        }

        if (error === "aborted") {
          return;
        }

        // Fatal permission denial
        if (error === "not-allowed" || error === "service-not-allowed") {
          isListeningRef.current = false;
          isRecognizingRef.current = false;
          setIsListening(false);
          setStatus("permission-denied");
          setErrorMessage(
            currentLangRef.current === "hi"
              ? "माइक्रोफ़ोन अनुमति अस्वीकृत। कृपया ब्राउज़र सेटिंग्स में अनुमति दें।"
              : "Microphone permission denied. Please allow microphone access in your browser."
          );
          return;
        }

        if (error === "audio-capture") {
          isListeningRef.current = false;
          isRecognizingRef.current = false;
          setIsListening(false);
          setStatus("error");
          setErrorMessage(
            currentLangRef.current === "hi"
              ? "माइक्रोफ़ोन नहीं मिला। कृपया माइक्रोफ़ोन कनेक्ट करें।"
              : "No microphone detected. Please connect a microphone."
          );
          return;
        }

        if (error === "network") {
          return;
        }
      };

      recognition.onend = () => {
        isRecognizingRef.current = false;

        // Commit this session's speech into committedFinalRef before restarting
        const sessionCompletedText = (
          currentSessionFinalRef.current.trim() ||
          currentSessionInterimRef.current.trim()
        );

        if (sessionCompletedText) {
          committedFinalRef.current = stitchTranscripts(
            committedFinalRef.current,
            sessionCompletedText
          );
        }

        currentSessionFinalRef.current = "";
        currentSessionInterimRef.current = "";

        // If user is still in voice mode, automatically restart recognition
        if (isListeningRef.current) {
          if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
          restartTimeoutRef.current = setTimeout(() => {
            if (isListeningRef.current) {
              startRecognitionSession();
            }
          }, 150);
        } else {
          setIsListening(false);
          setStatus("idle");
        }
      };

      recognition.start();
    } catch (err: unknown) {
      isRecognizingRef.current = false;
      if (isListeningRef.current) {
        if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = setTimeout(() => {
          if (isListeningRef.current) {
            startRecognitionSession();
          }
        }, 250);
      } else {
        setIsListening(false);
        setStatus("error");
        setErrorMessage("Could not initialize microphone. Please check browser permissions.");
      }
    }
  }, [computeFullQuery]);

  const startListening = useCallback((initialText?: string) => {
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }

    setErrorMessage(null);
    initialTextRef.current = (initialText ?? initialQuery ?? "").trim();
    committedFinalRef.current = "";
    currentSessionFinalRef.current = "";
    currentSessionInterimRef.current = "";
    setCurrentTranscript(initialTextRef.current);

    if (!isSpeechRecognitionSupported()) {
      setStatus("unavailable");
      setIsListening(false);
      setErrorMessage("Voice search is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    isListeningRef.current = true;
    setIsListening(true);
    setStatus("listening");

    startRecognitionSession();
  }, [initialQuery, startRecognitionSession]);

  const stopListening = useCallback(() => {
    isListeningRef.current = false;
    isRecognizingRef.current = false;
    setIsListening(false);
    setStatus("idle");

    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.onend = null;
        recognitionRef.current.stop();
      } catch {
        // Ignore
      }
      recognitionRef.current = null;
    }

    // Deliver final combined transcript
    const sessionCompletedText = (
      currentSessionFinalRef.current.trim() ||
      currentSessionInterimRef.current.trim()
    );
    const fullVoice = stitchTranscripts(committedFinalRef.current, sessionCompletedText);
    const fullQuery = stitchTranscripts(initialTextRef.current, fullVoice);

    if (fullQuery) {
      setCurrentTranscript(fullQuery);
      onSpeechChangeRef.current?.(fullQuery);
      onSpeechRecognizedRef.current?.(fullQuery);
    }
  }, []);

  const toggleListening = useCallback((initialText?: string) => {
    if (isListeningRef.current || isListening) {
      stopListening();
    } else {
      startListening(initialText);
    }
  }, [isListening, startListening, stopListening]);

  const resetStatus = useCallback(() => {
    isListeningRef.current = false;
    isRecognizingRef.current = false;
    setIsListening(false);
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.abort();
      } catch {
        // Ignore
      }
      recognitionRef.current = null;
    }
    setStatus("idle");
    setErrorMessage(null);
    setCurrentTranscript("");
    initialTextRef.current = "";
    committedFinalRef.current = "";
    currentSessionFinalRef.current = "";
    currentSessionInterimRef.current = "";
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isListeningRef.current = false;
      isRecognizingRef.current = false;
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.onstart = null;
          recognitionRef.current.onresult = null;
          recognitionRef.current.onerror = null;
          recognitionRef.current.onend = null;
          recognitionRef.current.abort();
        } catch {
          // Ignore
        }
        recognitionRef.current = null;
      }
    };
  }, []);

  return {
    status,
    isListening,
    isSupported,
    activeLanguage,
    errorMessage,
    currentTranscript,
    startListening,
    stopListening,
    toggleListening,
    resetStatus,
  };
}
