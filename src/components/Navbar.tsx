"use client";

import React, { useState } from "react";
import { CompassIcon, MenuIcon, CloseIcon, ShieldCheckIcon } from "./Icons";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenPortalModal: () => void;
}

export function Navbar({ currentLang, onLanguageChange, onOpenPortalModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getTranslations(currentLang);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all dark:border-slate-800 dark:bg-slate-900/95">
      {/* Top Government Portal Disclaimer Strip */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 text-center border-b border-slate-800 flex items-center justify-center gap-2 dark:bg-slate-950 dark:border-slate-850">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span>
          {t.navAdvisory || "Citizen Advisory: Civic Task Navigator directs you to official Indian government portals (.gov.in / .nic.in). We never collect government fees."}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          {/* Logo & Platform Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-800 via-blue-700 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:scale-105 group-hover:shadow-lg transition-all duration-200">
              <CompassIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors dark:text-white dark:group-hover:text-blue-400">
                  Civic Task Navigator
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-200/90 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/80">
                  {t.navCountryBadge || "INDIA 🇮🇳"}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-none hidden sm:block dark:text-slate-400">
                {t.brandTagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-xs font-semibold text-slate-600 hover:text-blue-700 hover:-translate-y-0.5 transition-all dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t.navHowItWorks || "How It Works"}
            </a>
            <a
              href="#services"
              className="text-xs font-semibold text-slate-600 hover:text-blue-700 hover:-translate-y-0.5 transition-all dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t.navServices || "Indian Civic Services"}
            </a>
            <a
              href="#trust"
              className="text-xs font-semibold text-slate-600 hover:text-blue-700 hover:-translate-y-0.5 transition-all dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t.navTrust || "Official Portals Guarantee"}
            </a>
            <a
              href="#faq"
              className="text-xs font-semibold text-slate-600 hover:text-blue-700 hover:-translate-y-0.5 transition-all dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t.navFaq || "FAQ"}
            </a>
          </nav>

          {/* Action Area: Theme Toggle + Language Switcher + Official Portals Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp-style Manual Theme Toggle */}
            <ThemeToggle />

            {/* Language Selector */}
            <LanguageSelector
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />

            <button
              onClick={onOpenPortalModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200 transition-all hover:-translate-y-0.5 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.officialPortalsBtn}</span>
            </button>

            <a
              href="#search-section"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 shadow-sm shadow-blue-700/30 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              {t.findProcedureBtn}
            </a>
          </div>

          {/* Mobile Menu, Theme Toggle & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle showLabel={false} />
            <LanguageSelector
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Animation */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in-up dark:border-slate-800 dark:bg-slate-900/95">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.navHowItWorks || "How It Works"}
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.navServices || "Indian Civic Services"}
          </a>
          <a
            href="#trust"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.navTrust || "Official Portals Guarantee"}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.navFaq || "FAQ"}
          </a>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortalModal();
              }}
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 cursor-pointer dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
            >
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.officialPortalsBtn}</span>
            </button>
            <a
              href="#search-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 shadow-sm cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              {t.findProcedureBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
