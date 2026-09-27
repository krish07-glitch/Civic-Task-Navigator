"use client";

import React, { useState } from "react";
import { CivicProcedure, SupportedLanguage } from "@/types/civic";
import { getLocalizedOfficialUrl } from "@/lib/localizedUrls";
import { getTranslations } from "@/data/translations";
import { SERVICE_TRANSLATIONS } from "@/data/serviceTranslations";
import { getLocalizedText } from "@/types/service";
import {
  CloseIcon,
  ClockIcon,
  DollarSignIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  PrinterIcon,
  LandmarkIcon,
  ExternalLinkIcon,
} from "./Icons";

interface ProcedureModalProps {
  procedure: CivicProcedure | null;
  currentLang?: SupportedLanguage;
  onClose: () => void;
}

export function ProcedureModal({ procedure, onClose, currentLang = "en" }: ProcedureModalProps) {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const t = getTranslations(currentLang);

  if (!procedure) return null;

  const sTrans = SERVICE_TRANSLATIONS[procedure.id];
  const procTitle = sTrans?.title ? getLocalizedText(sTrans.title, currentLang) : procedure.title;
  const procDept = sTrans?.department ? getLocalizedText(sTrans.department, currentLang) : procedure.department;
  const procEligibility = sTrans?.eligibility && sTrans.eligibility.length > 0
    ? sTrans.eligibility.map((e) => getLocalizedText(e, currentLang))
    : procedure.eligibility;
  const procDocs = sTrans?.requiredDocuments && sTrans.requiredDocuments.length > 0
    ? sTrans.requiredDocuments.map((d) => ({
        name: getLocalizedText(d.name, currentLang),
        type: getLocalizedText(d.type, currentLang),
        description: getLocalizedText(d.description, currentLang),
        commonExamples: getLocalizedText(d.commonExamples, currentLang),
        isMandatory: d.isMandatory,
      }))
    : procedure.requiredDocuments;
  const procSteps = sTrans?.steps && sTrans.steps.length > 0
    ? sTrans.steps.map((st) => ({
        stepNumber: st.stepNumber,
        title: getLocalizedText(st.title, currentLang),
        description: getLocalizedText(st.description, currentLang),
        agencyOrPortal: getLocalizedText(st.agencyOrPortal, currentLang),
        isOnline: st.isOnline,
        mode: st.mode,
        estimatedDuration: getLocalizedText(st.estimatedDuration, currentLang),
        officialSource: st.officialSource ? getLocalizedText(st.officialSource, currentLang) : undefined,
        sourceReference: st.sourceReference ? getLocalizedText(st.sourceReference, currentLang) : undefined,
        officialTip: st.officialTip ? getLocalizedText(st.officialTip, currentLang) : undefined,
      }))
    : procedure.steps;

  const targetPortalUrl = getLocalizedOfficialUrl(procedure.officialPortalUrl, currentLang);

  const toggleDoc = (docName: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docName]: !prev[docName],
    }));
  };

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const totalDocs = procDocs.length;
  const completedDocsCount = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = totalDocs > 0 ? Math.round((completedDocsCount / totalDocs) * 100) : 0;

  const totalSteps = procSteps.length;
  const completedStepsCount = procSteps.filter((s) => completedSteps[s.stepNumber]).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/80">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {procedure.category}
              </span>
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                {procedure.level}
              </span>
              <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <ShieldCheckIcon className="w-3.5 h-3.5" /> {t.badgeOfficialVerification || "Verified Official Guide"}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {procTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
              <LandmarkIcon className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{t.authorityLabel || "Authority:"} <strong className="text-slate-700">{procDept}</strong></span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label={t.closeResult || "Close"}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Official Verification Banner with Direct Link */}
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <ShieldCheckIcon className="w-5 h-5 text-blue-700 shrink-0" />
              <div>
                <span className="text-[11px] font-bold text-blue-900 block">
                  {t.officialGovPortal || "Official Government Portal"}:
                </span>
                <span className="text-xs font-mono text-blue-700 font-bold">
                  {procedure.portalDomainName}
                </span>
              </div>
            </div>
            <a
              href={targetPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
            >
              <span>{t.visitPortalBtn || "Visit Official Portal"}</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Metrics: Fees, Turnaround, Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  {t.processingTimeLabel || "Processing Time"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {procedure.estimatedTime}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <DollarSignIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  {t.expectedOfficialFee || "Expected Official Fee"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-900">
                  {procedure.estimatedFee}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 block">
                  {t.onlineAvailabilityLabel || "Online Availability"}
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {procedure.onlineAvailability}
                </span>
              </div>
            </div>
          </div>

          {/* 1. Eligibility Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              1. {t.eligibilityCriteria || "Eligibility Criteria"}
            </h3>
            <ul className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              {procEligibility.map((el, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-blue-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Interactive Document Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  2. {t.requiredDocuments || "Required Documents"}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {t.clickToCheckDocs || "Check off the documents you have ready before applying"} ({completedDocsCount} / {totalDocs} {t.inHandCount || "prepared"}):
                </p>
              </div>
              <span className="text-xs font-bold text-blue-700">{progressPercent}% {t.readiness || "Ready"}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3.5">
              <div
                className="bg-blue-700 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            {/* Documents List */}
            <div className="space-y-2.5">
              {procDocs.map((doc, idx) => {
                const isChecked = !!checkedDocs[doc.name];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDoc(doc.name)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? "bg-emerald-50/70 border-emerald-300 text-slate-900"
                        : "bg-white border-slate-200 hover:border-slate-300"
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
                        {isChecked && <CheckCircleIcon className="w-4 h-4" />}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${isChecked ? "line-through text-slate-500" : "text-slate-900"}`}>
                          {doc.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {doc.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{doc.description}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 italic">
                        {t.acceptableDocs || "Acceptable:"} {doc.commonExamples}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Step-by-Step Procedure */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  3. {t.officialProcedureTitle || "Official Step-by-Step Procedure"}
                </h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  {totalSteps} {t.stepsCount || "Steps"}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-600">
                {completedStepsCount} / {totalSteps} {t.completedCount || "completed"}
              </span>
            </div>

            <div className="space-y-3">
              {procSteps.map((st) => {
                const isStepDone = Boolean(completedSteps[st.stepNumber]);

                return (
                  <div
                    key={st.stepNumber}
                    className={`p-4 rounded-xl border transition-all space-y-2.5 ${
                      isStepDone
                        ? "bg-emerald-50/50 border-emerald-300 shadow-xs"
                        : "bg-white border-slate-200/90 shadow-2xs hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                            isStepDone ? "bg-emerald-600 text-white" : "bg-blue-700 text-white"
                          }`}
                        >
                          {isStepDone ? "✓" : st.stepNumber}
                        </span>
                        <h4
                          className={`text-sm font-bold transition-colors ${
                            isStepDone ? "text-emerald-950 line-through decoration-emerald-500/60" : "text-slate-900"
                          }`}
                        >
                          {st.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {(() => {
                          const isOffline = st.mode === "offline" || (("isOnline" in st && !st.isOnline) || ("onlineAvailable" in st && !(st as any).onlineAvailable));
                          return (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                isOffline
                                  ? "bg-amber-50 text-amber-800 border border-amber-200"
                                  : st.mode === "hybrid"
                                  ? "bg-indigo-50 text-indigo-800 border border-indigo-200"
                                  : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                              }`}
                            >
                              {isOffline
                                ? (t.inPersonAttendance || "In-Person Attendance")
                                : st.mode === "hybrid"
                                ? (t.hybridAttendance || "Hybrid Mode")
                                : (t.onlinePortalOtp || "Online (Portal / OTP)")}
                            </span>
                          );
                        })()}


                        <button
                          type="button"
                          onClick={() => toggleStep(st.stepNumber)}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer border ${
                            isStepDone
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs hover:bg-emerald-700"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          <CheckCircleIcon className={`w-3.5 h-3.5 ${isStepDone ? "text-white" : "text-slate-400"}`} />
                          <span>{isStepDone ? (t.done || "Done") : (t.markAsDone || "Mark as done")}</span>
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {st.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pl-8 pt-0.5 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">{t.deptWindow || "Department / Window:"} {st.agencyOrPortal}</span>
                      {st.estimatedDuration && (
                        <>
                          <span>•</span>
                          <span className="text-blue-700 font-medium">{t.estTime || "Est:"} {st.estimatedDuration}</span>
                        </>
                      )}
                    </div>

                    {st.officialSource && (
                      <div className="ml-8 p-1.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-1.5 text-[10px] text-slate-600">
                        <ShieldCheckIcon className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span><strong>{t.officialSource || "Official Source:"}</strong> {st.officialSource}</span>
                      </div>
                    )}

                    {st.officialTip && (
                      <div className="ml-8 p-2 rounded-lg bg-amber-50/80 border border-amber-200 flex items-start gap-2 text-[11px] text-amber-900">
                        <AlertCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>{t.officialTip || "Official Tip:"}</strong> {st.officialTip}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Important Warnings & Notes */}
          {procedure.importantWarnings && procedure.importantWarnings.length > 0 && (
            <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-red-900">
                <AlertCircleIcon className="w-4 h-4 text-red-600 shrink-0" />
                <span>{t.importantWarnings || "Important Warnings & Notes:"}</span>
              </div>
              <ul className="space-y-1 pl-6 list-disc text-xs text-red-800">
                {procedure.importantWarnings.map((warn, wIdx) => (
                  <li key={wIdx}>{warn}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold shadow-2xs transition-colors cursor-pointer"
          >
            <PrinterIcon className="w-4 h-4 text-slate-500" />
            <span>{t.printTitle || "Print Procedure Checklist"}</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <a
              href={targetPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>{t.proceedToDomain || "Proceed to"} {procedure.portalDomainName}</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              {t.closeResult || "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
