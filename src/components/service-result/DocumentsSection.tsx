"use client";

import React, { useState } from "react";
import { ServiceDocument } from "@/types/service";
import { DocumentCheckIcon, CheckCircleIcon } from "../Icons";

interface DocumentsSectionProps {
  documents: ServiceDocument[];
}

export function DocumentsSection({ documents }: DocumentsSectionProps) {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  const toggleCheck = (name: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const completedCount = Object.values(checkedMap).filter(Boolean).length;
  const totalCount = documents.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <span>Required Documents</span>
            <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-bold border border-blue-200">
              {completedCount} of {totalCount} in hand
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Click to check off the documents you have prepared before applying.
          </p>
        </div>

        {totalCount > 0 && (
          <div className="w-full sm:w-44">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-1">
              <span>Readiness</span>
              <span className="text-blue-700">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
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
                  ? "bg-emerald-50/70 border-emerald-300 text-slate-900 shadow-2xs"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                    isChecked
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {isChecked && <CheckCircleIcon className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                  <span
                    className={`text-xs font-bold ${
                      isChecked ? "line-through text-slate-500" : "text-slate-900"
                    }`}
                  >
                    {doc.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {doc.type}
                  </span>
                  {doc.isMandatory ? (
                    <span className="text-[9px] font-bold text-red-600 uppercase">Mandatory</span>
                  ) : (
                    <span className="text-[9px] font-medium text-slate-400 uppercase">Optional</span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{doc.description}</p>
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  Acceptable: {doc.commonExamples}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
