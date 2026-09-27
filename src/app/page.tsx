"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CommonServices } from "@/components/CommonServices";
import { TrustStats } from "@/components/TrustStats";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { ProcedureModal } from "@/components/ProcedureModal";
import { OfficialPortalsModal } from "@/components/OfficialPortalsModal";
import { searchCivicService } from "@/lib/serviceSearch";
import { ServiceResult } from "@/components/service-result/ServiceResult";
import { CIVIC_PROCEDURES } from "@/data/civicData";
import { CivicProcedure, IndianStateId, SupportedLanguage } from "@/types/civic";
import { SearchOutcome, ClarificationOption, GovernmentService } from "@/types/service";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>("en");
  const [selectedState, setSelectedState] = useState<IndianStateId>("maharashtra");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedProcedure, setSelectedProcedure] = useState<CivicProcedure | null>(null);
  const [searchOutcome, setSearchOutcome] = useState<SearchOutcome | null>(null);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);

  // Natural Language Search Matcher using the robust Service Intent Resolution Engine
  const handleSearch = (query: string, stateId: IndianStateId, districtId?: string) => {
    const outcome = searchCivicService(query, stateId, districtId);
    setSearchOutcome(outcome);

    // Smoothly scroll down to the search result card
    setTimeout(() => {
      const el = document.getElementById("search-result-view");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-blue-700 selection:text-white">
      {/* Top Navbar with Vernacular Language Selector */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section: Natural Language Query, State/District Selector, Example Pills */}
        <HeroSection
          currentLang={currentLang}
          selectedState={selectedState}
          selectedDistrict={selectedDistrict}
          onStateChange={(s) => setSelectedState(s)}
          onDistrictChange={(d) => setSelectedDistrict(d)}
          onSearch={handleSearch}
          onSelectProcedure={(proc) => setSelectedProcedure(proc)}
          allProcedures={CIVIC_PROCEDURES}
        />

        {/* 1.5. Dynamic Service Search Result / Clarification / No-Result View */}
        {searchOutcome && (
          <ServiceResult
            outcome={searchOutcome}
            currentLang={currentLang}
            onClear={() => setSearchOutcome(null)}
            onSelectClarification={(option: ClarificationOption) => {
              if (option.stateOverride) {
                setSelectedState(option.stateOverride);
              }
              if (option.cityOverride) {
                setSelectedDistrict(option.cityOverride);
              }
              handleSearch(
                option.queryOverride,
                option.stateOverride || selectedState,
                option.cityOverride || selectedDistrict
              );
            }}
            onSelectAlternative={(alt: GovernmentService) => {
              setSearchOutcome({
                type: "FOUND",
                service: alt,
                matchedState: selectedState,
                stateMatchedFromQuery: false,
                confidence: "high",
                mappedCategory: alt.category,
              });
              setTimeout(() => {
                const el = document.getElementById("search-result-view");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 50);
            }}
            onSelectSuggestion={(sug: string) => {
              handleSearch(sug, selectedState, selectedDistrict);
            }}
          />
        )}

        {/* 2. How It Works in 3 Simple Steps (India Focus) */}
        <HowItWorks currentLang={currentLang} />

        {/* 3. Common Indian Civic Services Directory (10 Categories) */}
        <CommonServices
          currentLang={currentLang}
          procedures={CIVIC_PROCEDURES}
          selectedState={selectedState}
          onSelectProcedure={(proc) => setSelectedProcedure(proc)}
        />

        {/* 4. Citizen Trust & Safety: Verified .gov.in Portals */}
        <TrustStats currentLang={currentLang} />

        {/* 5. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Interactive Procedure Roadmap Modal with Checkable Pre-Flight Documents */}
      <ProcedureModal
        procedure={selectedProcedure}
        currentLang={currentLang}
        onClose={() => setSelectedProcedure(null)}
      />

      {/* Verified Official Indian Government Portals Reference Directory */}
      <OfficialPortalsModal
        isOpen={isPortalModalOpen}
        currentLang={currentLang}
        onClose={() => setIsPortalModalOpen(false)}
      />
    </div>
  );
}
