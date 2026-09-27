"use client";

import React, { useState } from "react";
import { CivicProcedure, CivicServiceCategory, IndianStateId, SupportedLanguage } from "@/types/civic";
import {
  ClockIcon,
  DollarSignIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  LandmarkIcon,
} from "./Icons";
import { TRANSLATIONS } from "@/data/translations";

interface CommonServicesProps {
  currentLang?: SupportedLanguage;
  procedures: CivicProcedure[];
  selectedState: IndianStateId;
  onSelectProcedure: (procedure: CivicProcedure) => void;
}

export function CommonServices({
  currentLang = "en",
  procedures,
  selectedState,
  onSelectProcedure,
}: CommonServicesProps) {
  const [activeCategory, setActiveCategory] = useState<CivicServiceCategory | "All">("All");

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const categories: { label: string; value: CivicServiceCategory | "All"; emoji: string }[] = [
    { label: t.allCategories, value: "All", emoji: "✨" },
    { label: "Aadhaar & Identity", value: "Aadhaar & Identity", emoji: "🪪" },
    { label: "Tax & Business", value: "Tax & Business", emoji: "💼" },
    { label: "Transport (DL & RC)", value: "Transport", emoji: "🚗" },
    { label: "Passport & Travel", value: "Passport & Travel", emoji: "✈️" },
    { label: "Voter Services", value: "Voter Services", emoji: "🗳️" },
    { label: "Certificates & Documents", value: "Certificates & Documents", emoji: "📜" },
    { label: "Schemes & Benefits", value: "Government Schemes & Benefits", emoji: "🏛️" },
    { label: "Education & Scholarships", value: "Education", emoji: "🎓" },
    { label: "Maharashtra / State Services", value: "Maharashtra / State Services", emoji: "🚩" },
    { label: "Local Civic & Municipal", value: "Local Civic Services", emoji: "🏙️" },
  ];

  // Filter procedures by category and by state applicability if relevant
  const filteredProcedures = procedures.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesState =
      !p.stateApplicability ||
      selectedState === "all" ||
      p.stateApplicability.includes(selectedState);
    return matchesCategory && matchesState;
  });

  const getDifficultyBadge = (difficulty: CivicProcedure["difficulty"]) => {
    switch (difficulty) {
      case "Simple":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Moderate":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Multi-Stage":
        return "bg-amber-50 text-amber-900 border-amber-200";
    }
  };

  const getCategoryColor = (cat: CivicServiceCategory) => {
    switch (cat) {
      case "Aadhaar & Identity":
        return "text-indigo-800 bg-indigo-50 border-indigo-200";
      case "Tax & Business":
        return "text-blue-800 bg-blue-50 border-blue-200";
      case "Transport":
        return "text-teal-800 bg-teal-50 border-teal-200";
      case "Passport & Travel":
        return "text-cyan-800 bg-cyan-50 border-cyan-200";
      case "Voter Services":
        return "text-purple-800 bg-purple-50 border-purple-200";
      case "Certificates & Documents":
        return "text-emerald-800 bg-emerald-50 border-emerald-200";
      case "Government Schemes & Benefits":
        return "text-rose-800 bg-rose-50 border-rose-200";
      case "Education":
        return "text-sky-800 bg-sky-50 border-sky-200";
      case "Maharashtra / State Services":
        return "text-orange-800 bg-orange-50 border-orange-200";
      case "Local Civic Services":
        return "text-slate-800 bg-slate-100 border-slate-200";
    }
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
              Verified Government Procedures
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.commonServicesTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {t.commonServicesSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Directing to official .gov.in / .nic.in portals</span>
          </div>
        </div>

        {/* Category Filter Tabs (10 Indian Categories) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-blue-800 text-white shadow-md shadow-blue-800/20"
                  : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProcedures.map((proc) => (
            <div
              key={proc.id}
              onClick={() => onSelectProcedure(proc)}
              className="group bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/70 hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer relative"
            >
              <div>
                {/* Badges Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryColor(
                      proc.category
                    )}`}
                  >
                    {proc.category}
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${getDifficultyBadge(
                      proc.difficulty
                    )}`}
                  >
                    {proc.difficulty}
                  </span>
                </div>

                {/* Procedure Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1 mb-2">
                  {proc.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {proc.shortDescription}
                </p>

                {/* Authority / Ministry info */}
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-4">
                  <span className="font-bold text-slate-800 block mb-0.5">Competent Authority:</span>
                  <span className="truncate block text-slate-600">{proc.department}</span>
                </div>
              </div>

              {/* Procedure Key Metrics */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 mb-0.5">
                      <ClockIcon className="w-3 h-3 text-slate-400" />
                      <span>Time</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 line-clamp-1">
                      {proc.estimatedTime.split("(")[0]}
                    </span>
                  </div>

                  <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 mb-0.5">
                      <DollarSignIcon className="w-3 h-3 text-emerald-600" />
                      <span>Gov Fee</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 line-clamp-1">
                      {proc.estimatedFee.split("(")[0]}
                    </span>
                  </div>

                  <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 mb-0.5">
                      <DocumentCheckIcon className="w-3 h-3 text-blue-600" />
                      <span>Docs</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-800">
                      {proc.requiredDocuments.length} Required
                    </span>
                  </div>
                </div>

                {/* Official Portal indicator & Action */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                    🌐 {proc.portalDomainName}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:underline">
                    <span>View Roadmap</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200">
          <p className="text-xs text-slate-600">
            Looking for a specific Maharashtra revenue service or Central government scheme not listed above?{" "}
            <a href="#search-section" className="text-blue-700 font-bold hover:underline">
              Type your task into the natural-language search bar above
            </a>{" "}
            to explore our complete Indian civic directory.
          </p>
        </div>
      </div>
    </section>
  );
}
