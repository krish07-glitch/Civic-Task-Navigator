"use client";

import React, { useState } from "react";
import { SupportedLanguage } from "@/types/civic";
import { SUPPORTED_LANGUAGES } from "@/data/translations";
import { ChevronDownIcon } from "./Icons";

interface LanguageSelectorProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/90 shadow-2xs transition-colors cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-sm">🌐</span>
        <span className="font-bold text-slate-800">{currentObj.nativeName}</span>
        <span className="text-slate-400 font-normal">({currentObj.name})</span>
        <ChevronDownIcon className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 border-b border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Select Language / भाषा निवडा
            </span>
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-blue-50 transition-colors ${
                  currentLang === lang.code
                    ? "bg-blue-50/80 font-bold text-blue-700"
                    : "text-slate-700"
                }`}
              >
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-[10px] text-slate-400">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
