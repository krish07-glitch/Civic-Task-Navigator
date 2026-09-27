"use client";

import React, { useState } from "react";
import { LocalizedGovernmentService } from "@/types/service";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";
import { AlertCircleIcon, CheckCircleIcon, ShieldCheckIcon } from "../Icons";

interface StepsSectionProps {
  steps: LocalizedGovernmentService["steps"];
  currentLang?: SupportedLanguage;
}

export function StepsSection({ steps, currentLang = "en" }: StepsSectionProps) {
  // Track "Mark as done" state per step number
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const t = getTranslations(currentLang);

  const toggleStepDone = (stepNumber: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const completedCount = steps.filter((s) => completedSteps[s.stepNumber]).length;
  const totalCount = steps.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Header with Dynamic Step Count & Live Progress Tracker */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 shadow-2xs dark:shadow-slate-950/40 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {t.officialProcedureTitle || "Official Step-by-Step Procedure"}
              </h3>
              <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
                {totalCount} {totalCount === 1 ? (t.stepCountSingular || "Step") : (t.stepsCount || "Steps")}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {t.stepsVerifiedSubtitle || "Verified milestones cross-referenced with authoritative official government portal manuals."}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {completedCount} / {totalCount} {t.completedCount || "completed"}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200/80 dark:border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Sequential Dynamic Steps List */}
      <div className="space-y-3.5">
        {steps.map((step) => {
          const isDone = Boolean(completedSteps[step.stepNumber]);

          return (
            <div
              key={step.stepNumber}
              className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-3 ${
                isDone
                  ? "bg-emerald-50/40 dark:bg-emerald-950/30 border-emerald-300/90 dark:border-emerald-800/80 shadow-xs"
                  : "bg-white dark:bg-slate-850 border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {/* Step Header: Number, Title, Mode, and Mark-As-Done Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-2.5 min-w-0">
                  <span
                    className={`w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 shadow-xs transition-colors ${
                      isDone
                        ? "bg-emerald-600 text-white"
                        : "bg-blue-700 text-white"
                    }`}
                  >
                    {isDone ? "✓" : step.stepNumber}
                  </span>
                  <div className="min-w-0">
                    <h4
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isDone ? "text-emerald-950 dark:text-emerald-200 line-through decoration-emerald-500/60" : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 pl-9 sm:pl-0">
                  {/* Mode Badge (Online / Offline / Hybrid) */}
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      step.mode === "offline" || !step.isOnline
                        ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80"
                        : step.mode === "hybrid"
                        ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80"
                        : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80"
                    }`}
                  >
                    {step.mode === "offline" || !step.isOnline
                      ? (t.inPersonAttendance || "In-Person Attendance")
                      : step.mode === "hybrid"
                      ? (t.hybridAttendance || "Hybrid (Online + Physical)")
                      : (t.onlinePortalOtp || "Online (Portal / OTP)")}
                  </span>

                  {/* Explicit "Mark as done" Button / Checkbox */}
                  <button
                    type="button"
                    onClick={() => toggleStepDone(step.stepNumber)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      isDone
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs hover:bg-emerald-700"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                    aria-label={`Mark step ${step.stepNumber} as ${isDone ? "incomplete" : "done"}`}
                  >
                    <CheckCircleIcon className={`w-3.5 h-3.5 ${isDone ? "text-white" : "text-slate-400"}`} />
                    <span>{isDone ? (t.done || "✓ Done") : (t.markAsDone || "Mark as done")}</span>
                  </button>
                </div>
              </div>

              {/* Step Short Explanation */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                {step.description}
              </p>

              {/* Authoritative Details: Official Portal & Estimated Duration */}
              <div className="flex flex-wrap items-center gap-3 pl-9 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                  <span className="text-slate-400">{t.deptWindow || "Department / Window:"}</span> {step.agencyOrPortal}
                </span>

                {step.estimatedDuration && (
                  <>
                    <span>•</span>
                    <span className="text-blue-700 dark:text-blue-400 font-medium">
                      {t.estTime || "Est. Time:"} {step.estimatedDuration}
                    </span>
                  </>
                )}
              </div>

              {/* Official Source Reference Citation */}
              {(step.officialSource || step.sourceReference) && (
                <div className="ml-9 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <ShieldCheckIcon className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400 shrink-0" />
                  <span className="truncate">
                    <strong>{t.officialSource || "Official Source:"}</strong>{" "}
                    {step.officialSource || step.sourceReference}
                  </span>
                </div>
              )}

              {/* Official Verification Tip (If any) */}
              {step.officialTip && (
                <div className="ml-9 p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 flex items-start gap-2 text-xs text-amber-900 dark:text-amber-200">
                  <AlertCircleIcon className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.officialTip || "Official Tip:"}</strong> {step.officialTip}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
