"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "./Icons";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = true }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* WhatsApp-style Pill Segmented Switch */}
      <div
        role="radiogroup"
        aria-label="Theme selection"
        className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 transition-colors"
      >
        <button
          type="button"
          id="theme-toggle-light"
          role="radio"
          aria-checked={!isDark}
          onClick={() => setTheme("light")}
          title="Light Mode"
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
            !isDark
              ? "bg-white text-amber-700 dark:text-amber-500 shadow-2xs font-bold border border-slate-200/60"
              : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-medium"
          }`}
        >
          <SunIcon className={`w-3.5 h-3.5 ${!isDark ? "text-amber-500" : "text-slate-400"}`} />
          {showLabel && <span className="hidden sm:inline">Light</span>}
        </button>

        <button
          type="button"
          id="theme-toggle-dark"
          role="radio"
          aria-checked={isDark}
          onClick={() => setTheme("dark")}
          title="Dark Mode"
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
            isDark
              ? "bg-slate-900 text-blue-400 shadow-2xs border border-slate-700 font-bold"
              : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-medium"
          }`}
        >
          <MoonIcon className={`w-3.5 h-3.5 ${isDark ? "text-blue-400" : "text-slate-400"}`} />
          {showLabel && <span className="hidden sm:inline">Dark</span>}
        </button>
      </div>
    </div>
  );
}
