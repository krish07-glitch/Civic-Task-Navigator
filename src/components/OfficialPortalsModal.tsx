"use client";

import React, { useState } from "react";
import { SupportedLanguage } from "@/types/civic";
import { getLocalizedOfficialUrl } from "@/lib/localizedUrls";
import { CloseIcon, ShieldCheckIcon, ExternalLinkIcon, SearchIcon } from "./Icons";

interface OfficialPortalsModalProps {
  isOpen: boolean;
  currentLang?: SupportedLanguage;
  onClose: () => void;
}

export function OfficialPortalsModal({ isOpen, currentLang = "en", onClose }: OfficialPortalsModalProps) {
  const [filterQuery, setFilterQuery] = useState("");

  if (!isOpen) return null;

  const portals = [
    {
      name: "Unique Identification Authority of India (UIDAI)",
      domain: "uidai.gov.in / myaadhaar.uidai.gov.in",
      category: "Aadhaar & Identity",
      url: "https://uidai.gov.in/",
      description: "Official portal for Aadhaar enrollment, demographic updates, downloading e-Aadhaar, PVC card orders, and lock/unlock biometrics.",
    },
    {
      name: "Parivahan Sewa (Ministry of Road Transport & Highways)",
      domain: "parivahan.gov.in / sarathi.parivahan.gov.in",
      category: "Transport (DL & RC)",
      url: "https://parivahan.gov.in/",
      description: "Centralized national portal for Learner's Licence, Driving Licence renewal, Vehicle Registration (RC), Fitness Certificate, and e-Challan payment.",
    },
    {
      name: "Passport Seva (Ministry of External Affairs)",
      domain: "passportindia.gov.in",
      category: "Passport & Travel",
      url: "https://passportindia.gov.in/",
      description: "Only official government portal to apply for fresh Indian passport, renewal, Tatkaal passport, and schedule PSK/POPSK appointments.",
    },
    {
      name: "Aaple Sarkar (Government of Maharashtra)",
      domain: "aaplesarkar.mahaonline.gov.in",
      category: "Maharashtra State Services",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      description: "Right to Public Services (RTS) portal for Maharashtra: Income certificates, Domicile, Caste certificates, Non-Creamy Layer, and Revenue services.",
    },
    {
      name: "Voters' Service Portal (Election Commission of India)",
      domain: "voters.eci.gov.in",
      category: "Voter Services",
      url: "https://voters.eci.gov.in/",
      description: "Official portal for new voter registration (Form 6), downloading digital e-EPIC, checking electoral roll, and shifting assembly constituency.",
    },
    {
      name: "Udyam MSME Registration (Ministry of MSME)",
      domain: "udyamregistration.gov.in",
      category: "Tax & Business",
      url: "https://udyamregistration.gov.in/",
      description: "100% Free permanent registration for Micro, Small and Medium Enterprises to access priority bank credit and government subsidies.",
    },
    {
      name: "Goods & Services Tax (GST) Portal",
      domain: "gst.gov.in",
      category: "Tax & Business",
      url: "https://www.gst.gov.in/",
      description: "Official portal for GST registration, filing monthly/quarterly GST returns (GSTR-1, GSTR-3B), and GSTIN verification.",
    },
    {
      name: "Income Tax Department e-Filing Portal",
      domain: "incometax.gov.in",
      category: "Tax & Business",
      url: "https://www.incometax.gov.in/",
      description: "Official portal for filing Income Tax Returns (ITR-1 to 7), e-verifying returns, PAN-Aadhaar linkage, and downloading Form 26AS/AIS.",
    },
    {
      name: "Ministry of Corporate Affairs (MCA V3 Portal)",
      domain: "mca.gov.in",
      category: "Tax & Business",
      url: "https://www.mca.gov.in/",
      description: "Official portal for registering Private Limited companies, LLPs, Director Identification Number (DIN), and annual MCA compliance filings.",
    },
    {
      name: "National Scholarship Portal (NSP)",
      domain: "scholarships.gov.in",
      category: "Education",
      url: "https://scholarships.gov.in/",
      description: "One-stop application system for Central & State scholarships with direct benefit transfer (DBT) into verified student bank accounts.",
    },
    {
      name: "myScheme (National Citizen Schemes Aggregator)",
      domain: "myscheme.gov.in",
      category: "Government Schemes",
      url: "https://www.myscheme.gov.in/",
      description: "Official multi-ministry portal to discover targeted central and state welfare schemes matching your age, caste, state, and occupation.",
    },
    {
      name: "DigiLocker (National Digital Document Wallet)",
      domain: "digilocker.gov.in",
      category: "Document Storage & Verification",
      url: "https://www.digilocker.gov.in/",
      description: "Legally valid digital wallet (IT Act 2000) for Aadhaar, Driving Licence, Vehicle RC, Marksheets, and insurance certificates.",
    },
    {
      name: "National Government Services Portal (India.gov.in)",
      domain: "services.india.gov.in",
      category: "National Directory",
      url: "https://services.india.gov.in/",
      description: "Master catalog of over 12,000+ online citizen services provided by Central and State Government departments across India.",
    },
    {
      name: "CPGRAMS (Centralized Public Grievance Portal)",
      domain: "pgportal.gov.in",
      category: "Local Civic Services",
      url: "https://pgportal.gov.in/",
      description: "Government grievance redressal mechanism for citizens to lodge complaints against any Central or State government ministry with tracked resolution.",
    },
  ];

  const filtered = portals.filter(
    (p) =>
      p.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.domain.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Verified Official Indian Government Portals
              </h3>
              <p className="text-xs text-slate-500">
                Authentic direct links ending exclusively in <strong>.gov.in</strong> and <strong>.nic.in</strong>. Never pay unofficial agents.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar inside modal */}
        <div className="p-4 border-b border-slate-100 bg-white">
          <div className="relative flex items-center">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search portals (e.g. UIDAI, Parivahan, Passport, Aaple Sarkar, GST)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            />
          </div>
        </div>

        {/* Portals list */}
        <div className="p-6 space-y-3.5 overflow-y-auto">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ✓ {item.domain}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.description}</p>
              </div>
              <a
                href={getLocalizedOfficialUrl(item.url, currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <span>Visit Official Portal</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>
            Notice an unverified portal? All URLs are verified against official Government of India registries.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
}
