"use client";

import React from "react";
import { ShieldCheckIcon, DocumentCheckIcon, ClockIcon, LandmarkIcon } from "./Icons";
import { SupportedLanguage } from "@/types/civic";

export function TrustStats({ currentLang = "en" }: { currentLang?: SupportedLanguage }) {
  const stats = [
    { value: "10 Sectors", label: "National Civic Coverage", sublabel: "Aadhaar, Transport, Tax, Passports, Schemes" },
    { value: "28 States & UTs", label: "State e-District Portals", sublabel: "Aaple Sarkar, Seva Sindhu, e-Mitra & more" },
    { value: "₹0.00", label: "Citizen Fee", sublabel: "Free public advisory. No middleman charges." },
    { value: "100%", label: "Verified .gov.in Domains", sublabel: "Direct redirection to official Indian ministries" },
  ];

  const pillars = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-blue-700" />,
      title: "Eliminating Unofficial Agents & Touts",
      description:
        "Citizens often get charged ₹500 - ₹3,000 by unauthorized agents for free government services like Udyam MSME, Voter ID, or Aadhaar updates. We link you directly to genuine government portals.",
    },
    {
      icon: <DocumentCheckIcon className="w-6 h-6 text-emerald-700" />,
      title: "Plain Language, Zero Legalese",
      description:
        "We translate dense gazette notifications, Right to Public Services Act (RTS) guidelines, and statutory forms into simple, step-by-step roadmaps accessible in regional Indian languages.",
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-indigo-700" />,
      title: "Pre-Flight Document Checklist",
      description:
        "Know whether you need self-attested photocopies, an MBBS doctor medical certificate (Form 1A), an electricity bill under 2 months old, or Aadhaar OTP before you visit the office.",
    },
    {
      icon: <LandmarkIcon className="w-6 h-6 text-purple-700" />,
      title: "Right to Services (RTS) Timelines",
      description:
        "Track legally guaranteed service delivery timelines enacted under State Right to Public Services Acts (e.g. Maharashtra Public Services Guarantee) for timely certificate issuances.",
    },
  ];

  return (
    <section id="trust" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {stats.map((item, idx) => (
              <div key={idx} className={`${idx !== 0 ? "pt-6 lg:pt-0 lg:pl-8" : ""}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-1">
                  {item.value}
                </p>
                <p className="text-sm font-bold text-blue-300">{item.label}</p>
                <p className="text-xs text-slate-400 mt-1">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Citizen Safety & Transparency
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight">
            How we protect citizens navigating public bureaucracy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Civic procedures should be accessible to all. Civic Task Navigator does not collect fees, store sensitive passwords, or replace government departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-2xs">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
