import React from "react";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";
import { ShieldCheckIcon } from "../Icons";

interface ServiceDisclaimerProps {
  currentLang?: SupportedLanguage;
}

export function ServiceDisclaimer({ currentLang = "en" }: ServiceDisclaimerProps) {
  const t = getTranslations(currentLang);
  return (
    <div className="p-4 rounded-xl bg-slate-100/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs flex items-start gap-3">
      <ShieldCheckIcon className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
      <p className="leading-relaxed">
        <strong>{t.publicAdvisoryTitle || "Public Advisory:"}</strong>{" "}
        {t.publicAdvisoryText || "Civic Task Navigator is an independent information and navigation platform. It is not a government website. Always verify important information, eligibility criteria, and fee schedules on the linked official government portal."}
      </p>
    </div>
  );
}
