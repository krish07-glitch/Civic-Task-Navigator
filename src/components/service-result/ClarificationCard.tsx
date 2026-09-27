"use client";

import React from "react";
import { ClarificationOption } from "@/types/service";
import { HelpCircleIcon, ArrowRightIcon, CloseIcon } from "../Icons";

interface ClarificationCardProps {
  prompt: string;
  subprompt?: string;
  options: ClarificationOption[];
  originalQuery: string;
  onSelectOption: (option: ClarificationOption) => void;
  onClose: () => void;
}

export function ClarificationCard({
  prompt,
  subprompt,
  options,
  originalQuery,
  onSelectOption,
  onClose,
}: ClarificationCardProps) {
  return (
    <div className="rounded-2xl border border-blue-200/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-blue-500/5 space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0 shadow-xs">
            <HelpCircleIcon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Clarification Needed
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1.5">
              {prompt}
            </h3>
            {subprompt && (
              <p className="text-xs sm:text-sm text-slate-600 mt-1">{subprompt}</p>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Dismiss clarification"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Query echo */}
      <div className="text-xs text-slate-500 bg-slate-50/90 px-3.5 py-2.5 rounded-xl border border-slate-200/70 flex items-center gap-2">
        <span className="font-semibold text-slate-700">Your query:</span>
        <span className="font-mono text-slate-900 truncate">“{originalQuery}”</span>
      </div>

      {/* Selectable Options with Interactive Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
        {options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectOption(opt)}
            className="text-left p-4 rounded-xl border border-slate-200/90 bg-white hover:border-blue-500 hover:bg-blue-50/40 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                {opt.label}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {opt.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>Select this service</span>
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
