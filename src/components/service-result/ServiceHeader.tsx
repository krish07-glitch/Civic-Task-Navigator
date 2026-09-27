import { GovernmentService, ExtractedEntities } from "@/types/service";
import { IndianStateId } from "@/types/civic";
import { INDIAN_STATES } from "@/data/civicData";
import { ShieldCheckIcon, LandmarkIcon, SparklesIcon } from "../Icons";

interface ServiceHeaderProps {
  service: GovernmentService;
  matchedState: IndianStateId;
  matchedCityOrDistrict?: string;
  stateMatchedFromQuery: boolean;
  extractedEntities?: ExtractedEntities;
}

export function ServiceHeader({
  service,
  matchedState,
  matchedCityOrDistrict,
  stateMatchedFromQuery,
  extractedEntities,
}: ServiceHeaderProps) {
  const stateObj = INDIAN_STATES.find((s) => s.id === matchedState) || INDIAN_STATES[0];

  const rawCity = matchedCityOrDistrict || extractedEntities?.cityOrDistrict;
  const cityName = rawCity ? rawCity.charAt(0).toUpperCase() + rawCity.slice(1) : null;
  const locationLabel = cityName ? `${cityName}, ${stateObj.name}` : stateObj.name;

  return (
    <div className="space-y-3 pb-6 border-b border-slate-200">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
          {service.category}
        </span>

        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
          📍 {locationLabel} {stateMatchedFromQuery && "(from query)"}
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          <ShieldCheckIcon className="w-3.5 h-3.5" />
          {service.centralOrState === "central"
            ? "Central Government Service"
            : service.centralOrState === "municipal"
            ? "Municipal Corporation Service"
            : "State Government Service"}
        </span>

        <span className="text-[11px] text-slate-400 ml-auto">
          Verified: {service.lastVerified || service.lastVerifiedDate}
        </span>
      </div>

      {extractedEntities && (extractedEntities.actionType || extractedEntities.applicantType || extractedEntities.purpose) && (
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-blue-950 bg-blue-50/80 border border-blue-200/80 px-3 py-1.5 rounded-xl font-medium">
          <SparklesIcon className="w-3.5 h-3.5 text-blue-700 shrink-0" />
          <span className="font-bold text-blue-800">Identified Intent:</span>
          {extractedEntities.actionType && (
            <span className="bg-white px-2 py-0.5 rounded border border-blue-200 capitalize">
              Action: <strong>{extractedEntities.actionType}</strong>
            </span>
          )}
          {extractedEntities.applicantType && (
            <span className="bg-white px-2 py-0.5 rounded border border-blue-200">
              Role: <strong>{extractedEntities.applicantType}</strong>
            </span>
          )}
          {extractedEntities.purpose && (
            <span className="bg-white px-2 py-0.5 rounded border border-blue-200 truncate max-w-xs">
              Purpose: <strong>{extractedEntities.purpose}</strong>
            </span>
          )}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        {service.title || service.name}
      </h2>

      <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
        {service.shortDescription || service.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 pt-1">
        <div className="flex items-center gap-1.5">
          <LandmarkIcon className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Authority: <strong className="text-slate-800">{service.authority || service.department}</strong>
          </span>
        </div>
        {service.source && (
          <div className="text-[11px] text-slate-500 border-l border-slate-200 pl-3">
            Statutory Basis: <strong className="text-slate-700">{service.source}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
