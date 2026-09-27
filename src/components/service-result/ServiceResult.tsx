"use client";

import React, { useMemo } from "react";
import { SearchOutcome, ClarificationOption, GovernmentService } from "@/types/service";
import { SupportedLanguage } from "@/types/civic";
import { getLocalizedOfficialUrl } from "@/lib/localizedUrls";
import { getLocalizedService } from "@/data/services";
import { getTranslations } from "@/data/translations";
import { ServiceHeader } from "./ServiceHeader";
import { EligibilitySection } from "./EligibilitySection";
import { DocumentsSection } from "./DocumentsSection";
import { StepsSection } from "./StepsSection";
import { OfficialPortalCard } from "./OfficialPortalCard";
import { ServiceDisclaimer } from "./ServiceDisclaimer";
import { ClarificationCard } from "./ClarificationCard";
import { NoResultCard } from "./NoResultCard";
import { PrinterIcon, CloseIcon, ArrowRightIcon } from "../Icons";

interface ServiceResultProps {
  outcome: SearchOutcome;
  currentLang?: SupportedLanguage;
  onClear: () => void;
  onSelectClarification: (option: ClarificationOption) => void;
  onSelectAlternative: (service: GovernmentService) => void;
  onSelectSuggestion: (query: string) => void;
}

export function ServiceResult({
  outcome,
  currentLang = "en",
  onClear,
  onSelectClarification,
  onSelectAlternative,
  onSelectSuggestion,
}: ServiceResultProps) {
  const t = getTranslations(currentLang);

  const handlePrint = () => {
    window.print();
  };

  // Case 1: Clarification prompt required
  if (outcome.type === "CLARIFICATION") {
    return (
      <div id="search-result-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8 scroll-mt-24">
        <ClarificationCard
          prompt={outcome.prompt}
          subprompt={outcome.subprompt}
          options={outcome.options}
          originalQuery={outcome.originalQuery}
          currentLang={currentLang}
          onSelectOption={onSelectClarification}
          onClose={onClear}
        />
      </div>
    );
  }

  // Case 2: No match recognized
  if (outcome.type === "NO_RESULT") {
    return (
      <div id="search-result-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8 scroll-mt-24">
        <NoResultCard
          originalQuery={outcome.originalQuery}
          suggestions={outcome.suggestions}
          currentLang={currentLang}
          onSelectSuggestion={onSelectSuggestion}
          onClose={onClear}
        />
      </div>
    );
  }

  // Case 3: Valid Government Service Found
  const { service: rawService, matchedState, stateMatchedFromQuery, alternativeServices } = outcome;

  // Resolve service for currently selected language immediately
  const service = useMemo(() => getLocalizedService(rawService, currentLang), [rawService, currentLang]);

  // Resolve alternative services in selected language
  const localizedAlts = useMemo(
    () => alternativeServices?.map((alt) => getLocalizedService(alt, currentLang)),
    [alternativeServices, currentLang]
  );

  return (
    <section
      id="search-result-view"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 scroll-mt-24 animate-fade-in-up"
    >
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 space-y-8 relative">
        {/* Top Dismiss & Print Controls */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={t.printTitle || "Print Procedure Roadmap"}
          >
            <PrinterIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>{t.printRoadmap || "Print"}</span>
          </button>
          <button
            onClick={onClear}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={t.closeResult || "Close result"}
            title={t.closeResult || "Close result"}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Service Identity Header (Reveals First) */}
        <div className="animate-fade-in-up stagger-1">
          <ServiceHeader
            service={service}
            matchedState={matchedState}
            matchedCityOrDistrict={outcome.matchedCityOrDistrict}
            stateMatchedFromQuery={stateMatchedFromQuery}
            extractedEntities={outcome.extractedEntities}
            currentLang={currentLang}
          />
        </div>

        {/* 2. Official Portal & Statutory Metrics Card (Reveals Second) */}
        <div className="animate-fade-in-up stagger-2">
          <OfficialPortalCard
            portal={service.officialPortal}
            fees={service.fees}
            processingTime={service.processingTime}
            onlineAvailability={service.onlineAvailable}
            currentLang={currentLang}
          />
        </div>

        {/* 3. Eligibility Criteria */}
        <div className="animate-fade-in-up stagger-3">
          <EligibilitySection eligibility={service.eligibility} currentLang={currentLang} />
        </div>

        {/* 4. Required Documents Pre-Check */}
        <div className="animate-fade-in-up stagger-3">
          <DocumentsSection documents={service.requiredDocuments} currentLang={currentLang} />
        </div>

        {/* 5. Sequential Step-by-Step Procedure */}
        <div className="animate-fade-in-up stagger-4">
          <StepsSection steps={service.steps} currentLang={currentLang} />
        </div>

        {/* Warnings & Legal Notes (If any) */}
        {service.warnings && service.warnings.length > 0 && (
          <div className="animate-fade-in-up stagger-4 p-4 sm:p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/90 dark:border-amber-800/80 space-y-2 text-xs text-amber-900 dark:text-amber-200">
            <h4 className="font-bold text-amber-950 dark:text-amber-100 uppercase tracking-wide">
              {t.importantWarnings || "Important Official Warnings & Notes:"}
            </h4>
            <ul className="space-y-1.5 pl-4 list-disc text-amber-900 dark:text-amber-200">
              {service.warnings.map((warn, wIdx) => (
                <li key={wIdx} className="leading-relaxed">
                  {warn}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Alternative Services (If any) */}
        {localizedAlts && localizedAlts.length > 0 && (
          <div className="animate-fade-in-up stagger-5 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.relatedServices || "Related Official Services you might also need:"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {localizedAlts.map((alt) => (
                <button
                  key={alt.id}
                  type="button"
                  onClick={() => onSelectAlternative(alt)}
                  className="text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-800/60 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-slate-800 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 truncate">
                      {alt.title}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{alt.category}</p>
                  </div>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-blue-700 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 6. Independent Platform Transparency Disclaimer */}
        <div className="animate-fade-in-up stagger-5">
          <ServiceDisclaimer currentLang={currentLang} />
        </div>

        {/* Bottom Actions Footer */}
        <div className="animate-fade-in-up stagger-5 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClear}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer hover:-translate-y-0.5"
          >
            {t.searchAnotherBtn || "← Search Another Procedure"}
          </button>

          {service.officialPortal.url ? (
            <a
              href={getLocalizedOfficialUrl(service.officialPortal, currentLang)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30 transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>
                {t.proceedToDomain ? `${t.proceedToDomain} ` : "Proceed to "}
                {service.officialPortal.domain}
              </span>
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <span className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold">
              {t.jurisdictionalServiceNotice || "Jurisdictional Local Authority Service"}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
