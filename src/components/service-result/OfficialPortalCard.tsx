import React from "react";
import { OfficialPortalInfo, ServiceFee, ServiceProcessingTime } from "@/types/service";
import { SupportedLanguage } from "@/types/civic";
import { getLocalizedOfficialUrl } from "@/lib/localizedUrls";
import { ShieldCheckIcon, ExternalLinkIcon, ClockIcon, DollarSignIcon } from "../Icons";

interface OfficialPortalCardProps {
  portal: OfficialPortalInfo;
  fees: ServiceFee;
  processingTime: ServiceProcessingTime;
  onlineAvailability: string;
  currentLang?: SupportedLanguage;
}

export function OfficialPortalCard({
  portal,
  fees,
  processingTime,
  onlineAvailability,
  currentLang = "en",
}: OfficialPortalCardProps) {
  const targetUrl = portal.url ? getLocalizedOfficialUrl(portal, currentLang) : null;
  return (
    <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/60 via-white to-slate-50/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-5">
      {/* Top Portal Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-100">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-700/20">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Official Government Portal
              </span>
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                  portal.isVerified
                    ? "text-emerald-800 bg-emerald-100/80 border-emerald-200"
                    : "text-amber-800 bg-amber-100/80 border-amber-200"
                }`}
              >
                {portal.isVerified ? "✓ Verified .gov.in Portal" : "Jurisdictional Authority"}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              {portal.name}
            </h4>
            <p className="text-xs font-mono text-blue-700 font-semibold mt-0.5">
              {portal.domain}
            </p>
          </div>
        </div>

        {portal.url && targetUrl ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-700/25 hover:shadow-lg hover:shadow-blue-700/35 transition-all duration-200 hover:-translate-y-0.5 group shrink-0 cursor-pointer"
          >
            <span>Visit Official Government Portal</span>
            <ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold shrink-0">
            Apply via Jurisdictional Portal
          </span>
        )}
      </div>

      {/* Metrics Row: Fees, Processing Time, Online Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
            <DollarSignIcon className="w-4 h-4 text-emerald-600" />
            <span>Expected Official Fee</span>
          </div>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900">
            {fees.isVerified
              ? fees.amountText
              : "Information will be verified from the official government source."}
          </p>
          {fees.isVerified && fees.verificationSource && (
            <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
              Source: {fees.verificationSource}
            </p>
          )}
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
            <ClockIcon className="w-4 h-4 text-blue-600" />
            <span>Processing Time</span>
          </div>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900">
            {processingTime.isVerified
              ? processingTime.timeText
              : "Information will be verified from the official government source."}
          </p>
          {processingTime.isVerified && processingTime.statutoryAct && (
            <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
              Act: {processingTime.statutoryAct}
            </p>
          )}
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
            <ShieldCheckIcon className="w-4 h-4 text-purple-600" />
            <span>Online Availability</span>
          </div>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900">
            {onlineAvailability}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            Aadhaar e-KYC or portal submission
          </p>
        </div>
      </div>

      <div className="text-[11px] text-slate-500 bg-white/80 p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-2">
        <span className="text-blue-700 font-bold">ℹ️</span>
        <span>
          <strong>Domain Safety Note:</strong> Always verify that the destination URL in your browser ends in <strong>.gov.in</strong> or <strong>.nic.in</strong>. Civic Task Navigator never asks for government fees or passwords.
        </span>
      </div>
    </div>
  );
}
