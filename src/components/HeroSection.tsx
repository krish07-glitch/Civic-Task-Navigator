"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  SearchIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  CloseIcon,
  MicrophoneIcon,
  MicrophoneOffIcon,
} from "./Icons";
import { INDIAN_STATES, EXAMPLE_TASK_QUERIES } from "@/data/civicData";
import { CivicProcedure, IndianStateId, SupportedLanguage } from "@/types/civic";
import { TRANSLATIONS, getTranslations } from "@/data/translations";
import { InteractiveParticleBackground } from "./animations/InteractiveParticleBackground";
import { getLocalizedOfficialUrl } from "@/lib/localizedUrls";
import { useVoiceSearch, getVoiceRecognitionLang } from "@/lib/useVoiceSearch";

interface HeroSectionProps {
  currentLang: SupportedLanguage;
  selectedState: IndianStateId;
  selectedDistrict: string;
  onStateChange: (stateId: IndianStateId) => void;
  onDistrictChange: (districtId: string) => void;
  onSearch: (query: string, stateId: IndianStateId, districtId: string) => void;
  onSelectProcedure: (procedure: CivicProcedure) => void;
  allProcedures: CivicProcedure[];
}

export function HeroSection({
  currentLang,
  selectedState,
  selectedDistrict,
  onStateChange,
  onDistrictChange,
  onSearch,
  onSelectProcedure,
  allProcedures,
}: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [quickMatches, setQuickMatches] = useState<CivicProcedure[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Staged selection inside the location modal
  const [pendingState, setPendingState] = useState<IndianStateId>(selectedState);
  const [pendingDistrict, setPendingDistrict] = useState<string>(selectedDistrict);
  const [districtError, setDistrictError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scrolling and handle Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLocationModalOpen) {
        setIsLocationModalOpen(false);
      }
    };
    if (isLocationModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLocationModalOpen]);

  const t = getTranslations(currentLang);

  const currentStateObj =
    INDIAN_STATES.find((s) => s.id === selectedState) || INDIAN_STATES[1]; // default Maharashtra

  const currentDistrictObj = currentStateObj.districts.find(
    (d) => d.id === selectedDistrict
  );

  const pendingStateObj =
    INDIAN_STATES.find((s) => s.id === pendingState) || currentStateObj;

  // Open location modal and initialize staged state
  const handleOpenLocationModal = () => {
    setPendingState(selectedState);
    setPendingDistrict(selectedDistrict);
    setDistrictError(null);
    setIsLocationModalOpen(true);
  };

  // When state changes in dropdown, reset district selection
  const handleStateChange = (newStateId: IndianStateId) => {
    setPendingState(newStateId);
    setPendingDistrict("");
    setDistrictError(null);
  };

  // Validation on applying location
  const isSelectionValid =
    pendingState === "all" ||
    (pendingDistrict !== "" && pendingDistrict.trim().length > 0);

  const handleApplyLocation = () => {
    if (!isSelectionValid) {
      setDistrictError(t.selectDistrictWarning || "Please choose your district or select 'State-wide (All Districts)'");
      return;
    }

    onStateChange(pendingState);
    onDistrictChange(pendingDistrict);
    setDistrictError(null);
    setIsLocationModalOpen(false);
  };

  // Update search query and compute quick procedure autocomplete suggestions
  const updateSearchQuery = (val: string) => {
    setSearchQuery(val);

    if (val.trim().length > 1) {
      const q = val.toLowerCase();
      const matches = allProcedures.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
      setQuickMatches(matches.slice(0, 4));
    } else {
      setQuickMatches([]);
    }
  };

  // Handle typing search query
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery(e.target.value);
  };

  // Browser-native speech recognition hook (Strictly English en-IN & Hindi hi-IN)
  const handleSpeechRecognized = useCallback((transcript: string) => {
    if (typeof transcript === "string" && transcript.trim().length > 0) {
      updateSearchQuery(transcript);
    }
  }, [allProcedures]);

  const {
    status: voiceStatus,
    isListening,
    activeLanguage: activeVoiceLang,
    toggleListening,
  } = useVoiceSearch({
    currentLang,
    onSpeechChange: handleSpeechRecognized,
    onSpeechRecognized: handleSpeechRecognized,
  });

  const handleMicClick = () => {
    // Preserve any text that was already manually entered before microphone activation
    toggleListening(searchQuery);
  };

  const triggerSearch = (query: string, stateId: IndianStateId, districtId: string) => {
    setIsSearching(true);
    // Tactile search response animation
    setTimeout(() => {
      onSearch(query, stateId, districtId);
      setIsSearching(false);
    }, 280);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSearch(searchQuery, selectedState, selectedDistrict);
  };

  const handleExampleClick = (exampleQuery: string, stateHint?: IndianStateId) => {
    setSearchQuery(exampleQuery);
    const targetState = stateHint || selectedState;
    if (stateHint) {
      onStateChange(stateHint);
    }
    triggerSearch(exampleQuery, targetState, selectedDistrict);
  };

  return (
    <section
      id="search-section"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-slate-50 border-b border-slate-200/80 transition-colors"
    >
      {/* 1. Interactive Particle Network Background with Cursor Interaction & Radial Glow */}
      <InteractiveParticleBackground particleCount={65} />

      {/* 2. Layered Ambient Civic Tones (Subtle Indian Tricolor Harmony) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-20 blur-3xl z-0"
        aria-hidden="true"
      >
        <div className="w-[420px] h-[220px] bg-orange-400/20 rounded-full absolute -top-8 left-1/4 animate-pulse-glow"></div>
        <div className="w-[380px] h-[220px] bg-blue-600/20 rounded-full absolute top-12 right-1/4"></div>
        <div className="w-[380px] h-[180px] bg-emerald-500/20 rounded-full absolute top-20 left-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust & Role Transparency Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
              {t.badgePublicTech || "CIVIC TASK NAVIGATOR"}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-600 font-medium">
              {t.badgeOfficialVerification || "Direct Official .gov.in Portals"}
            </span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            {t.heroHeadlinePre}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800">
              {t.heroHeadlineHighlight}
            </span>
            {t.heroHeadlinePost ? ` ${t.heroHeadlinePost}` : ""}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.heroSubDesc || t.heroSubtitle}
          </p>
        </div>

        {/* Natural Language Search & Location Box Container */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`relative bg-white/95 backdrop-blur-md rounded-2xl border transition-all duration-300 p-2 sm:p-2.5 ${
              isFocused
                ? "border-blue-600 shadow-xl shadow-blue-500/10 ring-4 ring-blue-500/10 -translate-y-0.5"
                : "border-slate-200/90 shadow-lg shadow-slate-200/70 hover:border-slate-300"
            }`}
          >
            {/* Subtle Scanning Beam indicator during search */}
            {isSearching && (
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-scan-line rounded-t-2xl z-30"
                aria-hidden="true"
              />
            )}

            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 sm:gap-2.5">
              {/* Natural Language Task Input & Native Voice Search */}
              <div className="relative flex-1 flex items-center min-w-0 px-3 py-2">
                <SearchIcon
                  className={`w-5 h-5 mr-3 shrink-0 transition-colors ${
                    isFocused ? "text-blue-700" : "text-slate-400"
                  }`}
                />
                <div className="w-full min-w-0">
                  <label htmlFor="civic-task-input" className="sr-only">
                    {t.searchLabel}
                  </label>
                  <input
                    id="civic-task-input"
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                    placeholder={
                      isListening
                        ? (t.voiceListening || "Listening continuously... speak freely, then click mic to stop")
                        : t.searchPlaceholder
                    }
                    className="w-full text-slate-900 placeholder:text-slate-400 text-sm sm:text-base bg-transparent focus:outline-none font-medium"
                    autoComplete="off"
                  />
                  <span className="text-[11px] text-slate-400 block truncate mt-0.5">
                    {isListening ? (
                      <span className="text-rose-600 font-semibold flex items-center gap-1.5 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                        {t.voiceRecordingActive || "🔴 Listening continuously... speak, pause & click mic when done"}
                      </span>
                    ) : voiceStatus === "permission-denied" ? (
                      <span className="text-rose-600 font-medium truncate">
                        {t.voiceMicDenied || "⚠️ Microphone permission denied. Please allow mic access in your browser."}
                      </span>
                    ) : voiceStatus === "unavailable" ? (
                      <span className="text-slate-500 font-normal truncate">
                        {t.voiceUnavailable || "Voice search is not supported in this browser. Please use Chrome or Edge."}
                      </span>
                    ) : (
                      t.searchHelper
                    )}
                  </span>
                </div>

                {/* Voice Search Microphone Trigger Button (Manual Start / Manual Stop) */}
                <div className="relative shrink-0 ml-2">
                  <button
                    type="button"
                    id="voice-search-mic-btn"
                    onClick={handleMicClick}
                    aria-label={
                      isListening
                        ? (t.voiceMicStop || "Stop recording")
                        : `${t.voiceMicStart || "Voice search"} (${activeVoiceLang})`
                    }
                    title={
                      isListening
                        ? (t.voiceMicStop || "Click to stop recording")
                        : `${t.voiceMicStart || "Voice search"} (${activeVoiceLang})`
                    }
                    className={`relative p-2 sm:p-2.5 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                      isListening
                        ? "bg-rose-50 border-rose-300 text-rose-600 shadow-sm ring-2 ring-rose-400/30 scale-105"
                        : voiceStatus === "permission-denied" || voiceStatus === "unavailable"
                        ? "bg-slate-100 border-slate-200 text-slate-400 hover:text-slate-500"
                        : "bg-slate-50 hover:bg-blue-50 border-slate-200/90 hover:border-blue-200 text-slate-500 hover:text-blue-700"
                    }`}
                  >
                    {/* Subtle pulse animation ring while listening */}
                    {isListening && (
                      <span
                        className="absolute inset-0 rounded-xl bg-rose-400 animate-ping opacity-35 pointer-events-none"
                        aria-hidden="true"
                      />
                    )}

                    {voiceStatus === "unavailable" || voiceStatus === "permission-denied" ? (
                      <MicrophoneOffIcon className="w-4 h-4" />
                    ) : (
                      <MicrophoneIcon
                        className={`w-4 h-4 transition-transform ${
                          isListening ? "text-rose-600 scale-110" : "group-hover:scale-110"
                        }`}
                      />
                    )}

                    <span className="sr-only">
                      {isListening ? "Click to stop recording" : `Search by voice (${activeVoiceLang})`}
                    </span>
                  </button>
                </div>
              </div>

              {/* Location Selector Divider (Desktop) */}
              <div className="hidden lg:block w-[1px] h-10 bg-slate-200"></div>

              {/* State & District Location Trigger */}
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={handleOpenLocationModal}
                  className="w-full lg:w-auto flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 text-left transition-all cursor-pointer group shadow-2xs"
                  aria-haspopup="dialog"
                  aria-expanded={isLocationModalOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MapPinIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="block text-xs font-extrabold text-slate-900 leading-tight truncate">
                          {currentStateObj.name}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100/80 text-emerald-800 border border-emerald-200/80">
                          {selectedState === "all" ? (t.badgeCentral || "Central") : (t.badgeState || "State")}
                        </span>
                      </div>
                      <span className="block text-[11px] font-semibold text-emerald-700 truncate mt-0.5">
                        {selectedState === "all"
                          ? (t.panIndiaCentralServices || "Pan-India Central Services")
                          : selectedDistrict === "statewide"
                          ? (t.allDistrictsStatewide || "📍 State-wide (All Districts)")
                          : currentDistrictObj
                          ? `📍 ${currentDistrictObj.name.split("(")[0].trim()}`
                          : (t.selectDistrictWarning || "⚠️ Select District")}
                      </span>
                    </div>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0" />
                </button>
              </div>

              {/* Prominent Action Button */}
              <button
                type="submit"
                disabled={isSearching}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-sm shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group shrink-0"
              >
                <span>{isSearching ? (t.searchingBtn || "Searching...") : t.findProcedureBtn}</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Autocomplete Suggestions Dropdown when typing */}
            {isFocused && quickMatches.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-30 animate-fade-in-up">
                <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {t.matchingProcedures || "Matching Official Indian Procedures"}
                  </span>
                  <span className="text-[11px] text-blue-700 font-semibold">
                    {t.clickToViewRoadmap || "Click to view complete roadmap"}
                  </span>
                </div>
                <div className="divide-y divide-slate-100">
                  {quickMatches.map((proc) => (
                    <button
                      key={proc.id}
                      type="button"
                      onClick={() => {
                        setSearchQuery(proc.title);
                        triggerSearch(proc.title, selectedState, selectedDistrict);
                        setIsFocused(false);
                      }}
                      className="w-full text-left p-3.5 hover:bg-blue-50/60 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-slate-900 truncate">
                            {proc.title}
                          </p>
                          <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            {proc.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          {t.authorityLabel || "Authority:"} {proc.department}
                        </p>
                      </div>
                      <div className="text-right shrink-0 text-xs text-slate-500">
                        <span className="font-semibold text-slate-800">{proc.estimatedTime}</span>
                        <p className="text-[10px] text-emerald-700 font-bold">{proc.estimatedFee}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </form>

          {/* Example Civic Tasks Users Can Click */}
          <div className="mt-4 pt-1">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold flex items-center gap-1">
                <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
                {t.popularSearchesLabel}
              </span>
              {EXAMPLE_TASK_QUERIES.map((ex) => {
                const pillLabel = ex.localizedLabels?.[currentLang] || (currentLang === "hi" && ex.labelHi ? ex.labelHi : ex.label);
                const pillQuery = ex.localizedQueries?.[currentLang] || (currentLang === "hi" && ex.queryHi ? ex.queryHi : ex.query);
                return (
                  <button
                    key={ex.label}
                    type="button"
                    onClick={() => handleExampleClick(pillQuery, ex.stateHint)}
                    className="px-2.5 py-1 rounded-lg bg-white/90 hover:bg-blue-50/80 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-700 transition-all shadow-2xs hover:shadow-xs hover:-translate-y-0.5 font-medium cursor-pointer"
                  >
                    {pillLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Visible Trust & Safety Notice: Official Government Domains */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white/95 backdrop-blur-md p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {t.trustStripTitle || "Verified Official Government Portals (.gov.in & .nic.in)"}
                </h4>
                <p className="text-xs text-slate-500">
                  {t.trustStripSubtitle || "Always verify that the destination URL ends in an official government domain."}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
              {t.trustZeroMiddlemen || "Zero Middlemen • 100% Free"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                <strong>{t.trustNoToutingTitle || "No Touting:"}</strong> {t.trustNoToutingDesc || "Direct links to UIDAI, Parivahan, Income Tax, GST, and State e-District."}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                <strong>{t.trustEkycTitle || "Aadhaar e-KYC:"}</strong> {t.trustEkycDesc || "Clear indicators when procedures can be completed online via OTP."}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                <strong>{t.trustStatutoryFeesTitle || "Statutory Fees Only:"}</strong> {t.trustStatutoryFeesDesc || "We list only government gazetted charges (e.g. ₹50 UIDAI fee)."}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* State & District Selection Modal Portal (rendered directly onto document.body to properly resolve stacking context) */}
      {mounted &&
        isLocationModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Full Viewport Backdrop Overlay to cover all page content behind */}
            <div
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
              onClick={() => setIsLocationModalOpen(false)}
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="location-modal-title"
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 sm:p-6 z-10 animate-fade-in-up max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="w-4 h-4 text-emerald-600" />
                    <h4 id="location-modal-title" className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      {t.selectStateDistrictTitle || "Select State & District"}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">India → State → District</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLocationModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close location selector"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>

              {/* 1. State Selector */}
              <div className="mt-3.5">
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  {t.stateUtLabel || "1. State / UT (राज्य)"} <span className="text-blue-600">*</span>
                </label>
                <select
                  value={pendingState}
                  onChange={(e) => handleStateChange(e.target.value as IndianStateId)}
                  className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {INDIAN_STATES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.regionalName})
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. District Selector */}
              {pendingState === "all" ? (
                <div className="mt-3.5 p-3 rounded-lg bg-blue-50 border border-blue-200/80 text-[11px] text-blue-900">
                  <span className="font-bold block mb-0.5">{t.centralGovServicesHeader || "🌐 Central Government Services"}</span>
                  {t.centralServicesNote || "Central portals (UIDAI Aadhaar, Passport Seva, PAN, Voter ID) apply nationwide. Specific district selection is not required."}
                </div>
              ) : (
                <div className="mt-3.5">
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-700">
                      {t.districtJurisdictionLabel || "2. District / Jurisdiction (जिल्हा)"} <span className="text-blue-600">*</span>
                    </label>
                    <span className="text-[10px] text-slate-500">
                      {pendingStateObj.districts.length} {t.districtsInLabel || "districts in"} {pendingStateObj.name}
                    </span>
                  </div>
                  <select
                    value={pendingDistrict}
                    onChange={(e) => {
                      setPendingDistrict(e.target.value);
                      setDistrictError(null);
                    }}
                    className={`w-full text-xs font-semibold bg-slate-50 border rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                      districtError || !pendingDistrict
                        ? "border-amber-400 bg-amber-50/30"
                        : "border-slate-300"
                    }`}
                  >
                    <option value="">{t.selectDistrictPlaceholder || "-- Please Select District / Municipal Area --"}</option>
                    <option value="statewide">{t.statewideOption || "State-wide (All Districts / State-Level Service)"}</option>
                    {pendingStateObj.districts.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>

                  {(!pendingDistrict || districtError) && (
                    <p className="text-[11px] text-amber-700 font-medium mt-1 flex items-center gap-1">
                      <span>⚠️</span>
                      <span>{districtError || (t.selectDistrictWarning || "Please select a district or choose 'State-wide'")}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Official Portal indicator & Action Footer */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 truncate min-w-0">
                  <span className="block text-[10px] text-slate-400">{t.officialPortalLabel || "Official Portal:"}</span>
                  <a
                    href={getLocalizedOfficialUrl(pendingStateObj.portalUrl, currentLang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-bold hover:underline truncate block"
                  >
                    {pendingStateObj.portalName}
                  </a>
                </div>

                <button
                  type="button"
                  disabled={!isSelectionValid}
                  onClick={handleApplyLocation}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                    !isSelectionValid
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                      : "bg-blue-700 hover:bg-blue-800 text-white shadow-md shadow-blue-700/20 hover:-translate-y-0.5 active:translate-y-0"
                  }`}
                >
                  {t.applyLocationBtn || "Apply Location"}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
