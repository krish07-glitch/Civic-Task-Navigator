import React from "react";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";
import { CheckCircleIcon } from "../Icons";

interface EligibilitySectionProps {
  eligibility: string[];
  currentLang?: SupportedLanguage;
}

export function EligibilitySection({ eligibility, currentLang = "en" }: EligibilitySectionProps) {
  const t = getTranslations(currentLang);
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
        <span>{t.eligibilityCriteria || "Eligibility Criteria"}</span>
        <span className="text-[10px] text-slate-500 font-normal">{t.whoCanApply || "Who can apply"}</span>
      </h3>

      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 space-y-2.5">
        {eligibility.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircleIcon className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
