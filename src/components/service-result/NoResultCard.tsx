"use client";

import React from "react";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";
import { AlertCircleIcon, SearchIcon, SparklesIcon, CloseIcon } from "../Icons";

interface NoResultCardProps {
  originalQuery: string;
  suggestions: string[];
  onSelectSuggestion: (query: string) => void;
  onClose: () => void;
  currentLang?: SupportedLanguage;
}

export function NoResultCard({
  originalQuery,
  suggestions,
  onSelectSuggestion,
  onClose,
  currentLang = "en",
}: NoResultCardProps) {
  const t = getTranslations(currentLang);
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 space-y-6 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
            <AlertCircleIcon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/80">
              {t.serviceNotRecognized || "Service Not Recognized"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1.5">
              {t.couldNotIdentifyExact || "We couldn't identify the exact government service"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {(t.couldNotFindMatching || "We could not find an authentic government procedure matching")} &ldquo;<span className="font-semibold text-slate-800 dark:text-slate-200">{originalQuery}</span>&rdquo;. {(t.neverDisplayFabricated || "We never display inaccurate or fabricated government procedures.")}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Dismiss message"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Helpful Guidance Advice */}
      <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-2">
        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs uppercase tracking-wide">
          {t.tipsForFinding || "Tips for finding your procedure:"}
        </h4>
        <ul className="space-y-1.5 pl-4 list-disc text-slate-600 dark:text-slate-300">
          <li>
            {t.tipDescribe || "Describe what you want to do: e.g., 'I want to apply for a driving licence' or 'How to change Aadhaar address'."}
          </li>
          <li>
            {t.tipState || "Include your state: e.g., 'I want to apply for an income certificate in Maharashtra'."}
          </li>
          <li>
            {t.tipLocationDropdown || "Ensure State/UT is selected: Check the location dropdown in the search box to filter state-specific services (like Aaple Sarkar)."}
          </li>
        </ul>
      </div>

      {/* Suggested Searches */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
          <SparklesIcon className="w-4 h-4 text-amber-500" />
          <span>{t.tryVerifiedSearches || "Try one of these verified searches:"}</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((sug, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectSuggestion(sug)}
              className="text-left px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 transition-all cursor-pointer flex items-center gap-2 group shadow-2xs"
            >
              <SearchIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 shrink-0" />
              <span>{sug}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
