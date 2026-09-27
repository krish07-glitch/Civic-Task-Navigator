"use client";

import React, { useState } from "react";
import { LocalizedGovernmentService } from "@/types/service";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";
import { DocumentCheckIcon, CheckCircleIcon } from "../Icons";

interface DocumentsSectionProps {
  documents: LocalizedGovernmentService["requiredDocuments"];
  currentLang?: SupportedLanguage;
}

export function DocumentsSection({ documents, currentLang = "en" }: DocumentsSectionProps) {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const t = getTranslations(currentLang);

  const toggleCheck = (name: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const completedCount = Object.values(checkedMap).filter(Boolean).length;
  const totalCount = documents.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span>{t.requiredDocuments || "Required Documents"}</span>
            <span className="text-[10px] text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded font-bold border border-blue-200 dark:border-blue-800/80">
              {completedCount} / {totalCount} {t.inHandCount || "in hand"}
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {t.clickToCheckDocs || "Click to check off the documents you have prepared before applying."}
          </p>
        </div>

        {totalCount > 0 && (
          <div className="w-full sm:w-44">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
              <span>{t.readiness || "Readiness"}</span>
              <span className="text-blue-700 dark:text-blue-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-700 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {documents.map((doc, idx) => {
          const isChecked = !!checkedMap[doc.name];
          return (
            <div
              key={idx}
              onClick={() => toggleCheck(doc.name)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                isChecked
                  ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/80 text-slate-900 dark:text-emerald-100 shadow-2xs"
                  : "bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-800/60"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                    isChecked
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                  }`}
                >
                  {isChecked && <CheckCircleIcon className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                  <span
                    className={`text-xs font-bold ${
                      isChecked ? "line-through text-slate-500 dark:text-slate-400" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {doc.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {doc.type}
                  </span>
                  {doc.isMandatory ? (
                    <span className="text-[9px] font-bold text-red-600 dark:text-red-400 uppercase">
                      {t.mandatoryBadge || "Mandatory"}
                    </span>
                  ) : (
                    <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500 uppercase">
                      {t.optionalBadge || "Optional"}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{doc.description}</p>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-1 italic">
                  {t.acceptableDocs || "Acceptable:"} {doc.commonExamples}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
