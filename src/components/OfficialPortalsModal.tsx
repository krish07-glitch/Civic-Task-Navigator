"use client";

import React, { useState } from "react";
import { SupportedLanguage } from "@/types/civic";
import { getLocalizedOfficialUrl } from "@/lib/localizedUrls";
import { getTranslations } from "@/data/translations";
import { getLocalizedText } from "@/types/service";
import { CloseIcon, ShieldCheckIcon, ExternalLinkIcon, SearchIcon } from "./Icons";

interface OfficialPortalsModalProps {
  isOpen: boolean;
  currentLang?: SupportedLanguage;
  onClose: () => void;
}

interface PortalItem {
  name: { en: string; hi: string };
  domain: string;
  category: { en: string; hi: string };
  url: string;
  description: { en: string; hi: string };
}

const PORTALS_LIST: PortalItem[] = [
  {
    name: {
      en: "Unique Identification Authority of India (UIDAI)",
      hi: "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)",
    },
    domain: "uidai.gov.in / myaadhaar.uidai.gov.in",
    category: { en: "Aadhaar & Identity", hi: "आधार एवं पहचान" },
    url: "https://uidai.gov.in/",
    description: {
      en: "Official portal for Aadhaar enrollment, demographic updates, downloading e-Aadhaar, PVC card orders, and lock/unlock biometrics.",
      hi: "आधार नामांकन, जनसांख्यिकीय अपडेट, ई-आधार डाउनलोड, पीवीसी कार्ड ऑर्डर और बायोमेट्रिक्स लॉक/अनलॉक के लिए आधिकारिक पोर्टल।",
    },
  },
  {
    name: {
      en: "Parivahan Sewa (Ministry of Road Transport & Highways)",
      hi: "परिवहन सेवा (सड़क परिवहन और राजमार्ग मंत्रालय)",
    },
    domain: "parivahan.gov.in / sarathi.parivahan.gov.in",
    category: { en: "Transport (DL & RC)", hi: "परिवहन (DL एवं RC)" },
    url: "https://parivahan.gov.in/",
    description: {
      en: "Centralized national portal for Learner's Licence, Driving Licence renewal, Vehicle Registration (RC), Fitness Certificate, and e-Challan payment.",
      hi: "लर्नर लाइसेंस, ड्राइविंग लाइसेंस नवीनीकरण, वाहन पंजीकरण (RC), फिटनेस प्रमाण पत्र और ई-चालान भुगतान हेतु केंद्रीकृत राष्ट्रीय पोर्टल।",
    },
  },
  {
    name: {
      en: "Passport Seva (Ministry of External Affairs)",
      hi: "पासपोर्ट सेवा (विदेश मंत्रालय)",
    },
    domain: "passportindia.gov.in",
    category: { en: "Passport & Travel", hi: "पासपोर्ट एवं यात्रा" },
    url: "https://passportindia.gov.in/",
    description: {
      en: "Only official government portal to apply for fresh Indian passport, renewal, Tatkaal passport, and schedule PSK/POPSK appointments.",
      hi: "नए भारतीय पासपोर्ट, नवीनीकरण, तत्काल पासपोर्ट और पीएसके/पीओपीएसके अपॉइंटमेंट शेड्यूल करने के लिए एकमात्र आधिकारिक सरकारी पोर्टल।",
    },
  },
  {
    name: {
      en: "Aaple Sarkar (Government of Maharashtra)",
      hi: "आपले सरकार (महाराष्ट्र शासन)",
    },
    domain: "aaplesarkar.mahaonline.gov.in",
    category: { en: "Maharashtra State Services", hi: "महाराष्ट्र राज्य सेवाएं" },
    url: "https://aaplesarkar.mahaonline.gov.in/",
    description: {
      en: "Right to Public Services (RTS) portal for Maharashtra: Income certificates, Domicile, Caste certificates, Non-Creamy Layer, and Revenue services.",
      hi: "महाराष्ट्र लोक सेवा अधिकार (RTS) पोर्टल: आय प्रमाण पत्र, अधिवास (डोमिसाइल), जाति प्रमाण पत्र, नॉन-क्रीमी लेयर एवं राजस्व सेवाएं।",
    },
  },
  {
    name: {
      en: "Voters' Service Portal (Election Commission of India)",
      hi: "मतदाता सेवा पोर्टल (भारत निर्वाचन आयोग)",
    },
    domain: "voters.eci.gov.in",
    category: { en: "Voter Services", hi: "मतदाता सेवाएं" },
    url: "https://voters.eci.gov.in/",
    description: {
      en: "Official portal for new voter registration (Form 6), downloading digital e-EPIC, checking electoral roll, and shifting assembly constituency.",
      hi: "नए मतदाता पंजीकरण (प्रपत्र 6), डिजिटल ई-एपिक डाउनलोड, मतदाता सूची जांच और विधानसभा क्षेत्र परिवर्तन हेतु आधिकारिक पोर्टल।",
    },
  },
  {
    name: {
      en: "Udyam MSME Registration (Ministry of MSME)",
      hi: "उद्यम एमएसएमई पंजीकरण (सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय)",
    },
    domain: "udyamregistration.gov.in",
    category: { en: "Tax & Business", hi: "कर एवं व्यवसाय" },
    url: "https://udyamregistration.gov.in/",
    description: {
      en: "100% Free permanent registration for Micro, Small and Medium Enterprises to access priority bank credit and government subsidies.",
      hi: "प्राथमिकता प्राप्त बैंक ऋण और सरकारी सब्सिडी प्राप्त करने हेतु सूक्ष्म, लघु और मध्यम उद्यमों के लिए 100% निःशुल्क स्थायी पंजीकरण।",
    },
  },
  {
    name: {
      en: "Goods & Services Tax (GST) Portal",
      hi: "वस्तु एवं सेवा कर (GST) पोर्टल",
    },
    domain: "gst.gov.in",
    category: { en: "Tax & Business", hi: "कर एवं व्यवसाय" },
    url: "https://www.gst.gov.in/",
    description: {
      en: "Official portal for GST registration, filing monthly/quarterly GST returns (GSTR-1, GSTR-3B), and GSTIN verification.",
      hi: "जीएसटी पंजीकरण, मासिक/त्रैमासिक जीएसटी रिटर्न दाखिल करने (GSTR-1, GSTR-3B) और जीएसटीआईएन सत्यापन हेतु आधिकारिक पोर्टल।",
    },
  },
  {
    name: {
      en: "Income Tax Department e-Filing Portal",
      hi: "आयकर विभाग ई-फाइलिंग पोर्टल",
    },
    domain: "incometax.gov.in",
    category: { en: "Tax & Business", hi: "कर एवं व्यवसाय" },
    url: "https://www.incometax.gov.in/",
    description: {
      en: "Official portal for filing Income Tax Returns (ITR-1 to 7), e-verifying returns, PAN-Aadhaar linkage, and downloading Form 26AS/AIS.",
      hi: "आयकर रिटर्न (ITR-1 से 7) दाखिल करने, ई-सत्यापन, पैन-आधार लिंक करने और फॉर्म 26AS/AIS डाउनलोड करने हेतु आधिकारिक पोर्टल।",
    },
  },
  {
    name: {
      en: "Ministry of Corporate Affairs (MCA V3 Portal)",
      hi: "कॉर्पोरेट कार्य मंत्रालय (MCA V3 पोर्टल)",
    },
    domain: "mca.gov.in",
    category: { en: "Tax & Business", hi: "कर एवं व्यवसाय" },
    url: "https://www.mca.gov.in/",
    description: {
      en: "Official portal for registering Private Limited companies, LLPs, Director Identification Number (DIN), and annual MCA compliance filings.",
      hi: "प्राइवेट लिमिटेड कंपनियों, एलएलपी, निदेशक पहचान संख्या (DIN) के पंजीकरण और वार्षिक एमसीए अनुपालन दाखिल करने हेतु आधिकारिक पोर्टल।",
    },
  },
  {
    name: {
      en: "National Scholarship Portal (NSP)",
      hi: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)",
    },
    domain: "scholarships.gov.in",
    category: { en: "Education", hi: "शिक्षा एवं छात्रवृत्ति" },
    url: "https://scholarships.gov.in/",
    description: {
      en: "One-stop application system for Central & State scholarships with direct benefit transfer (DBT) into verified student bank accounts.",
      hi: "सत्यापित छात्र बैंक खातों में प्रत्यक्ष लाभ अंतरण (DBT) के साथ केंद्रीय और राज्य छात्रवृत्तियों हेतु वन-स्टॉप आवेदन प्रणाली।",
    },
  },
  {
    name: {
      en: "myScheme (National Citizen Schemes Aggregator)",
      hi: "माईस्कीम (राष्ट्रीय नागरिक योजना पोर्टल)",
    },
    domain: "myscheme.gov.in",
    category: { en: "Government Schemes", hi: "सरकारी योजनाएं" },
    url: "https://www.myscheme.gov.in/",
    description: {
      en: "Official multi-ministry portal to discover targeted central and state welfare schemes matching your age, caste, state, and occupation.",
      hi: "आपकी आयु, जाति, राज्य और व्यवसाय के अनुसार लक्षित केंद्रीय और राज्य कल्याणकारी योजनाओं को खोजने हेतु आधिकारिक बहु-मंत्रालयी पोर्टल।",
    },
  },
  {
    name: {
      en: "DigiLocker (National Digital Document Wallet)",
      hi: "डिजिलॉकर (राष्ट्रीय डिजिटल दस्तावेज़ वॉलेट)",
    },
    domain: "digilocker.gov.in",
    category: { en: "Document Storage & Verification", hi: "दस्तावेज़ संग्रहण एवं सत्यापन" },
    url: "https://www.digilocker.gov.in/",
    description: {
      en: "Legally valid digital wallet (IT Act 2000) for Aadhaar, Driving Licence, Vehicle RC, Marksheets, and insurance certificates.",
      hi: "आधार, ड्राइविंग लाइसेंस, वाहन आरसी, मार्कशीट और बीमा प्रमाण पत्रों हेतु कानूनी रूप से मान्य डिजिटल वॉलेट (आईटी अधिनियम 2000)।",
    },
  },
  {
    name: {
      en: "National Government Services Portal (India.gov.in)",
      hi: "राष्ट्रीय सरकारी सेवा पोर्टल (India.gov.in)",
    },
    domain: "services.india.gov.in",
    category: { en: "National Directory", hi: "राष्ट्रीय निर्देशिका" },
    url: "https://services.india.gov.in/",
    description: {
      en: "Master catalog of over 12,000+ online citizen services provided by Central and State Government departments across India.",
      hi: "पूरे भारत में केंद्र और राज्य सरकार के विभागों द्वारा प्रदान की जाने वाली 12,000+ से अधिक ऑनलाइन नागरिक सेवाओं की मुख्य निर्देशिका।",
    },
  },
  {
    name: {
      en: "CPGRAMS (Centralized Public Grievance Portal)",
      hi: "सीपीजीआरएएमएस (केंद्रीकृत लोक शिकायत पोर्टल)",
    },
    domain: "pgportal.gov.in",
    category: { en: "Local Civic Services", hi: "स्थानीय नागरिक सेवाएं" },
    url: "https://pgportal.gov.in/",
    description: {
      en: "Government grievance redressal mechanism for citizens to lodge complaints against any Central or State government ministry with tracked resolution.",
      hi: "नागरिकों द्वारा किसी भी केंद्रीय या राज्य मंत्रालय के विरुद्ध ट्रैक किए गए समाधान के साथ शिकायत दर्ज करने हेतु सरकारी लोक शिकायत निवारण प्रणाली।",
    },
  },
];

export function OfficialPortalsModal({ isOpen, currentLang = "en", onClose }: OfficialPortalsModalProps) {
  const [filterQuery, setFilterQuery] = useState("");

  if (!isOpen) return null;

  const t = getTranslations(currentLang);

  const filtered = PORTALS_LIST.filter((p) => {
    const q = filterQuery.toLowerCase();
    const nameEn = (p.name.en || "").toLowerCase();
    const nameHi = (p.name.hi || "").toLowerCase();
    const catEn = (p.category.en || "").toLowerCase();
    const catHi = (p.category.hi || "").toLowerCase();
    const domain = p.domain.toLowerCase();
    return nameEn.includes(q) || nameHi.includes(q) || catEn.includes(q) || catHi.includes(q) || domain.includes(q);
  });

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t.portalsModalTitle || "Verified Official Indian Government Portals"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.portalsModalSubtitle || (
                  <>
                    Authentic direct links ending exclusively in <strong>.gov.in</strong> and <strong>.nic.in</strong>. Never pay unofficial agents.
                  </>
                )}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar inside modal */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="relative flex items-center">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={t.searchPortals || "Filter portals (e.g. UIDAI, Parivahan, Passport, Aaple Sarkar, GST)..."}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Portals list */}
        <div className="p-6 space-y-3.5 overflow-y-auto">
          {filtered.map((item, idx) => {
            const itemName = getLocalizedText(item.name, currentLang);
            const itemCat = getLocalizedText(item.category, currentLang);
            const itemDesc = getLocalizedText(item.description, currentLang);

            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/20 dark:hover:bg-slate-800/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800">
                      {itemCat}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800">
                      ✓ {item.domain}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{itemName}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">{itemDesc}</p>
                </div>
                <a
                  href={getLocalizedOfficialUrl(item.url, currentLang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-800 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <span>{t.visitPortalBtn || "Visit Official Portal"}</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>
            {t.publicAdvisoryText || "All URLs are verified against official Government of India registries."}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-200 font-bold transition-colors cursor-pointer"
          >
            {t.closeModal || "Close Directory"}
          </button>
        </div>
      </div>
    </div>
  );
}

