"use client";

import React from "react";
import { SearchIcon, DocumentCheckIcon, ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon } from "./Icons";
import { SupportedLanguage } from "@/types/civic";
import { TRANSLATIONS } from "@/data/translations";

export function HowItWorks({ currentLang = "en" }: { currentLang?: SupportedLanguage }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const steps = [
    {
      step: "01",
      title: "Tell us what you need in plain words",
      description:
        "No need to know bureaucratic jargon, statutory act sections, or complex department codes. Simply describe your goal in natural language (e.g., 'I want to start a small clothing shop in Mumbai' or 'I want to apply for an income certificate').",
      tag: "Plain Language Intent",
      preview: {
        badge: "Intent Identification",
        query: '"I want to start a small clothing business in Mumbai"',
        detected: [
          "Udyam MSME Registration (Free)",
          "Maharashtra Shop & Establishment (Gumasta)",
          "GST Registration (gst.gov.in)",
        ],
      },
    },
    {
      step: "02",
      title: "Get your verified requirements checklist",
      description:
        "Receive a transparent breakdown of required identity proofs (Aadhaar, PAN, Electricity bill), verified government statutory fees, and prerequisite steps before you apply.",
      tag: "Zero-Surprise Checklist",
      preview: {
        badge: "Document Pre-Check",
        items: [
          { name: "Aadhaar Card (Active Mobile OTP)", done: true },
          { name: "PAN Card of Proprietor", done: true },
          { name: "Electricity Bill of Premises (< 2 months)", done: true },
          { name: "Shopfront Photo (Marathi Board)", done: false },
        ],
      },
    },
    {
      step: "03",
      title: "Submit on verified .gov.in portals",
      description:
        "Know whether the service can be completed 100% online through Aadhaar e-KYC or requires an appointment at an official center (PSK, RTO, or Aaple Sarkar Seva Kendra).",
      tag: "Verified .gov.in / .nic.in Routing",
      preview: {
        badge: "Official Routing",
        action: "Direct Official .gov.in Submission",
        turnaround: "Est. Turnaround: 3 - 7 Working Days",
        guarantee: "Zero Middleman Surcharges",
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-xl hover:shadow-slate-200/60 hover:border-blue-300 hover:-translate-y-1 group"
            >
              {/* Step Number & Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black tracking-tight text-slate-300 group-hover:text-blue-700/40 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Visual Preview Box */}
              <div className="mt-4 pt-4 border-t border-slate-200/80">
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
                  {idx === 0 && item.preview.query && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-500 uppercase">User Query</span>
                        <span className="text-emerald-700 font-bold">Services Identified</span>
                      </div>
                      <p className="text-xs font-mono bg-slate-100 p-2 rounded text-slate-800 border border-slate-200/60 truncate">
                        {item.preview.query}
                      </p>
                      <div className="flex flex-col gap-1 pt-1">
                        {item.preview.detected?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium border border-blue-100 flex items-center gap-1.5"
                          >
                            <span className="text-emerald-600 font-bold">✓</span> {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {idx === 1 && item.preview.items && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-slate-500 uppercase">Documents Pre-Check</span>
                        <span className="text-indigo-700 font-bold text-[10px]">3 of 4 Ready</span>
                      </div>
                      {item.preview.items.map((doc, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 px-2.5 py-1.5 rounded border border-slate-100"
                        >
                          <CheckCircleIcon
                            className={`w-4 h-4 shrink-0 ${
                              doc.done ? "text-emerald-600" : "text-slate-300"
                            }`}
                          />
                          <span className={`truncate ${doc.done ? "font-medium" : "text-slate-500"}`}>
                            {doc.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-emerald-700 flex items-center gap-1">
                          <ShieldCheckIcon className="w-3.5 h-3.5" /> Official .gov.in Routing
                        </span>
                        <span className="text-slate-500 text-[10px]">Safe Destination</span>
                      </div>
                      <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-lg p-2.5">
                        <p className="text-xs font-bold text-emerald-900">
                          {item.preview.action}
                        </p>
                        <p className="text-[11px] text-emerald-700 mt-0.5">
                          {item.preview.turnaround}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-1 italic">
                          Protected by Official Digital Signature
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-lg font-bold">Starting a business or need an urgent state certificate?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select Maharashtra or your state above to explore certified statutory procedures, from Aaple Sarkar revenue services to Udyam MSME and GST registrations.
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-md"
          >
            <span>Explore All 10 Categories</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
