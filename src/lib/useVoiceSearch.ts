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

export interface UseVoiceSearchOptions {
  currentLang: string;
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
  startListening: () => void;
  stopListening: () => void;
  toggleListening: () => void;
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
  onSpeechChange,
  onSpeechRecognized,
}: UseVoiceSearchOptions): UseVoiceSearchResult {
  const [status, setStatus] = useState<VoiceSearchStatus>("idle");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentTranscript, setCurrentTranscript] = useState<string>("");

  // Point 12: Use an explicit ref to distinguish automatic browser ending vs user stop
  const isListeningRef = useRef<boolean>(false);

  // Track active recognition state to prevent creating new instances during re-renders (Points 8 & 9)
  const isRecognizingRef = useRef<boolean>(false);

  // Stable references for props and callbacks to prevent closure stalls
  const currentLangRef = useRef<string>(currentLang);
  currentLangRef.current = currentLang;

  const onSpeechChangeRef = useRef(onSpeechChange);
  onSpeechChangeRef.current = onSpeechChange;

  const onSpeechRecognizedRef = useRef(onSpeechRecognized);
  onSpeechRecognizedRef.current = onSpeechRecognized;

  // Point 9: Store the recognition instance in useRef rather than recreating it on render
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Buffer accumulated across automatic pause-restarts
  const accumulatedTranscriptRef = useRef<string>("");
  const currentSessionFinalRef = useRef<string>("");
  const currentSessionInterimRef = useRef<string>("");

  const activeLanguage = getVoiceRecognitionLang(currentLang);

  // Check support on mount
  useEffect(() => {
    const supported = isSpeechRecognitionSupported();
    setIsSupported(supported);
    if (!supported) {
      console.warn("[VOICE] Speech recognition is not supported in this browser environment.");
    }
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

  // Starts a clean native SpeechRecognition session
  const startRecognitionSession = useCallback(() => {
    // Point 11: If user is not in voice mode, do not start
    if (!isListeningRef.current) {
      console.log("[VOICE] startRecognitionSession aborted: isListeningRef is false.");
      return;
    }

    // Point 8: Prevent creating a duplicate instance if one is already actively recognizing
    if (isRecognizingRef.current && recognitionRef.current) {
      console.log("[VOICE] startRecognitionSession: recognition is already active, reusing existing instance.");
      return;
    }

    // Clean up any ended/stale recognition instance
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

    // Point 1: Determine SpeechRecognition constructor
    const SpeechRecognitionConstructor =
      (window as unknown as { SpeechRecognition?: new () => SpeechRecognitionInstance }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognitionInstance }).webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) {
      console.warn("[VOICE] No SpeechRecognition constructor found in window.");
      isListeningRef.current = false;
      setIsListening(false);
      setStatus("unavailable");
      setErrorMessage("Voice search is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    try {
      const recognition = new SpeechRecognitionConstructor();
      recognitionRef.current = recognition;

      // Point 2 & 3: Configure language, continuous mode, and interim results
      const chosenLang = getVoiceRecognitionLang(currentLangRef.current);
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.lang = chosenLang;

      // Point 17: Diagnostic logging
      console.log(`[VOICE] start: using lang="${chosenLang}", continuous=true, interimResults=true`);

      // Point 10: Assign event handlers directly to prevent duplicate attachments
      recognition.onstart = () => {
        console.log("[VOICE] onstart: recognition session started actively listening.");
        isRecognizingRef.current = true;
        if (isListeningRef.current) {
          setIsListening(true);
          setStatus("listening");
          setErrorMessage(null);
        }
      };

      // Point 4 & 7: onresult handler with full diagnostic logging and transcript accumulation
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        if (!isListeningRef.current) return;

        // Point 4: Log event metrics
        console.log(`[VOICE] result: length=${event.results.length}, resultIndex=${event.resultIndex}`);

        let sessionFinal = "";
        let sessionInterim = "";

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

          // Point 4: Log individual result items
          console.log(`[VOICE] result item[${i}]: transcript="${transcript}", isFinal=${res.isFinal}`);

          if (res.isFinal) {
            sessionFinal += (sessionFinal ? " " : "") + transcript;
          } else {
            sessionInterim += (sessionInterim ? " " : "") + transcript;
          }
        }

        currentSessionFinalRef.current = sessionFinal;
        currentSessionInterimRef.current = sessionInterim;

        // Combine session finalized text with current interim stream
        const currentSessionCombined = (
          sessionFinal + (sessionFinal && sessionInterim ? " " : "") + sessionInterim
        ).trim();

        // Combine previously accumulated text with current session text
        const base = accumulatedTranscriptRef.current.trim();
        const fullTranscript = base
          ? (currentSessionCombined ? `${base} ${currentSessionCombined}` : base)
          : currentSessionCombined;

        // Point 5 & 6: Deliver non-empty transcript to React state
        if (fullTranscript.trim().length > 0) {
          const text = fullTranscript.trim();
          console.log(`[VOICE] transcript: "${text}"`);
          if (sessionFinal && !sessionInterim) {
            console.log(`[VOICE] final: "${text}"`);
          }
          setCurrentTranscript(text);
          onSpeechChangeRef.current?.(text);
          onSpeechRecognizedRef.current?.(text);
        }
      };

      // Point 13 & 14: Comprehensive onerror handling with diagnostics
      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        const error = event.error;
        console.warn(`[VOICE] error: ${error}`, event.message || "");

        // Point 14: Pauses during speech are expected; do not disable voice mode
        if (error === "no-speech") {
          console.log("[VOICE] error: 'no-speech' received (pause in speech); retaining voice mode.");
          return;
        }

        if (error === "aborted") {
          console.log("[VOICE] error: 'aborted' (recognition instance stopped/restarting).");
          return;
        }

        // Fatal permission denial
        if (error === "not-allowed" || error === "service-not-allowed") {
          console.error("[VOICE] error: microphone permission denied by browser or system.");
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
          console.error("[VOICE] error: no audio capture device found.");
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
          console.warn("[VOICE] error: temporary network error during speech recognition.");
          return;
        }
      };

      // Point 11 & 12: onend handler distinguishes between user stop and silence auto-restart
      recognition.onend = () => {
        console.log(`[VOICE] end: isListeningRef=${isListeningRef.current}`);
        isRecognizingRef.current = false;

        // Point 6 & 7: Commit any finalized or interim speech from this session into persistent buffer
        const sessionCompletedText = (
          currentSessionFinalRef.current.trim() ||
          currentSessionInterimRef.current.trim()
        );

        if (sessionCompletedText) {
          const prev = accumulatedTranscriptRef.current.trim();
          if (!prev.endsWith(sessionCompletedText)) {
            accumulatedTranscriptRef.current = prev
              ? `${prev} ${sessionCompletedText}`
              : sessionCompletedText;
          }
          console.log(
            `[VOICE] end: committed session text "${sessionCompletedText}". accumulated="${accumulatedTranscriptRef.current}"`
          );
        }

        currentSessionFinalRef.current = "";
        currentSessionInterimRef.current = "";

        // If user is still in voice mode, automatically restart recognition (Test 3)
        if (isListeningRef.current) {
          console.log("[VOICE] end: restarting recognition because user is still in listening mode...");
          if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
          restartTimeoutRef.current = setTimeout(() => {
            if (isListeningRef.current) {
              startRecognitionSession();
            }
          }, 150);
        } else {
          console.log("[VOICE] end: session ended normally by user manual click.");
          setIsListening(false);
          setStatus("idle");
        }
      };

      recognition.start();
      console.log("[VOICE] start: recognition.start() executed.");
    } catch (err: unknown) {
      console.error("[VOICE] error: exception starting recognition:", err);
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
  }, []);

  const startListening = useCallback(() => {
    console.log("[VOICE] startListening triggered by user.");
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }

    setErrorMessage(null);
    accumulatedTranscriptRef.current = "";
    currentSessionFinalRef.current = "";
    currentSessionInterimRef.current = "";
    setCurrentTranscript("");

    if (!isSpeechRecognitionSupported()) {
      console.warn("[VOICE] Cannot start: SpeechRecognition not supported.");
      setStatus("unavailable");
      setIsListening(false);
      setErrorMessage("Voice search is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    // User explicitly began voice session
    isListeningRef.current = true;
    setIsListening(true);
    setStatus("listening");

    startRecognitionSession();
  }, [startRecognitionSession]);

  const stopListening = useCallback(() => {
    console.log("[VOICE] stopListening triggered by user.");
    // Point 11: Mark user intention as stopped so onend does NOT restart
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

    // Point 6: Deliver final accumulated transcript without clearing it
    const prev = accumulatedTranscriptRef.current.trim();
    const curr = (
      currentSessionFinalRef.current.trim() ||
      currentSessionInterimRef.current.trim()
    );
    const full = prev ? (curr ? `${prev} ${curr}` : prev) : curr;
    if (full) {
      console.log(`[VOICE] final transcript on stop: "${full}"`);
      setCurrentTranscript(full);
      onSpeechChangeRef.current?.(full);
      onSpeechRecognizedRef.current?.(full);
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (isListeningRef.current || isListening) {
      stopListening();
    } else {
      startListening();
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
    accumulatedTranscriptRef.current = "";
    currentSessionFinalRef.current = "";
    currentSessionInterimRef.current = "";
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
