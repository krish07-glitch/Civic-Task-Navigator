import React from "react";
import { ShieldCheckIcon } from "../Icons";

export function ServiceDisclaimer() {
  return (
    <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-600 text-xs flex items-start gap-3">
      <ShieldCheckIcon className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
      <p className="leading-relaxed">
        <strong>Public Advisory:</strong> Civic Task Navigator is an independent information and navigation platform. It is not a government website. Always verify important information, eligibility criteria, and fee schedules on the linked official government portal.
      </p>
    </div>
  );
}
