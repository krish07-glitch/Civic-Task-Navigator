import { GovernmentService, ExtractedEntities, LocalizedGovernmentService } from "@/types/service";
import { IndianStateId, SupportedLanguage } from "@/types/civic";
import { INDIAN_STATES } from "@/data/civicData";
import { getTranslations } from "@/data/translations";
import { ShieldCheckIcon, LandmarkIcon, SparklesIcon } from "../Icons";

interface ServiceHeaderProps {
  service: LocalizedGovernmentService;
  matchedState: IndianStateId;
  matchedCityOrDistrict?: string;
  stateMatchedFromQuery: boolean;
  extractedEntities?: ExtractedEntities;
  currentLang?: SupportedLanguage;
}

export function ServiceHeader({
  service,
  matchedState,
  matchedCityOrDistrict,
  stateMatchedFromQuery,
  extractedEntities,
  currentLang = "en",
}: ServiceHeaderProps) {
  const t = getTranslations(currentLang);
  const stateObj = INDIAN_STATES.find((s) => s.id === matchedState) || INDIAN_STATES[0];

  const rawCity = matchedCityOrDistrict || extractedEntities?.cityOrDistrict;
  const cityName = rawCity ? rawCity.charAt(0).toUpperCase() + rawCity.slice(1) : null;
  const locationLabel = cityName ? `${cityName}, ${stateObj.name}` : stateObj.name;

  return (
    <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
          {service.category}
        </span>

        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
          📍 {locationLabel} {stateMatchedFromQuery && (t.fromQuery || "(from query)")}
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
          <ShieldCheckIcon className="w-3.5 h-3.5" />
          {service.centralOrState === "central"
            ? t.centralGovService || "Central Government Service"
            : service.centralOrState === "municipal"
            ? t.municipalGovService || "Municipal Corporation Service"
            : t.stateGovService || "State Government Service"}
        </span>

        <span className="text-[11px] text-slate-400 dark:text-slate-500 ml-auto">
          {(t.verifiedOn || "Verified:")} {service.lastVerified || service.lastVerifiedDate}
        </span>
      </div>

      {extractedEntities && (extractedEntities.actionType || extractedEntities.applicantType || extractedEntities.purpose) && (
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-blue-950 dark:text-blue-200 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 px-3 py-1.5 rounded-xl font-medium">
          <SparklesIcon className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400 shrink-0" />
          <span className="font-bold text-blue-800 dark:text-blue-300">{t.identifiedIntent || "Identified Intent:"}</span>
          {extractedEntities.actionType && (
            <span className="bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900/80 capitalize">
              {t.actionLabel || "Action:"} <strong>{extractedEntities.actionType}</strong>
            </span>
          )}
          {extractedEntities.applicantType && (
            <span className="bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900/80">
              {t.roleLabel || "Role:"} <strong>{extractedEntities.applicantType}</strong>
            </span>
          )}
          {extractedEntities.purpose && (
            <span className="bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900/80 truncate max-w-xs">
              {t.purposeLabel || "Purpose:"} <strong>{extractedEntities.purpose}</strong>
            </span>
          )}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {service.title || service.name}
      </h2>

      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
        {service.shortDescription || service.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400 pt-1">
        <div className="flex items-center gap-1.5">
          <LandmarkIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <span>
            {t.authorityLabel || "Authority:"}{" "}
            <strong className="text-slate-800 dark:text-slate-200">{service.authority || service.department}</strong>
          </span>
        </div>
        {service.source && (
          <div className="text-[11px] text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-3">
            {t.statutoryBasis || "Statutory Basis:"}{" "}
            <strong className="text-slate-700 dark:text-slate-300">{service.source}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
