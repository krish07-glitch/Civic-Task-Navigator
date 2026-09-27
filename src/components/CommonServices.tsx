"use client";

import React, { useState } from "react";
import { CivicProcedure, CivicServiceCategory, IndianStateId, SupportedLanguage } from "@/types/civic";
import {
  ClockIcon,
  DollarSignIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "./Icons";
import { getTranslations } from "@/data/translations";
import { SERVICE_TRANSLATIONS } from "@/data/serviceTranslations";
import { getLocalizedText } from "@/types/service";

interface CommonServicesProps {
  currentLang?: SupportedLanguage;
  procedures: CivicProcedure[];
  selectedState: IndianStateId;
  onSelectProcedure: (procedure: CivicProcedure) => void;
}

const CATEGORY_NAMES: Record<CivicServiceCategory | "All", Record<SupportedLanguage, string>> = {
  All: {
    en: "All Categories",
    hi: "सभी श्रेणियां",
    mr: "सर्व श्रेणी",
    gu: "બધી શ્રેણીઓ",
    ta: "அனைத்து வகைகள்",
    te: "అన్ని వర్గాలు",
    bn: "সকল বিভাগ",
    kn: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    ml: "എല്ലാ വിഭാഗങ്ങളും",
    pa: "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ",
  },
  "Aadhaar & Identity": {
    en: "Aadhaar & Identity",
    hi: "आधार एवं पहचान",
    mr: "आधार आणि ओळख",
    gu: "આધાર અને ઓળખ",
    ta: "ஆதார் மற்றும் அடையாளம்",
    te: "ఆధార్ & గుర్తింపు",
    bn: "আধার ও পরিচয়",
    kn: "ಆಧಾರ್ ಮತ್ತು ಗುರುತು",
    ml: "ആധാർ & തിരിച്ചറിയൽ",
    pa: "ਆਧਾਰ ਅਤੇ ਪਛਾਣ",
  },
  "Tax & Business": {
    en: "Tax & Business",
    hi: "कर एवं व्यवसाय",
    mr: "कर आणि व्यवसाय",
    gu: "કર અને વ્યવસાય",
    ta: "வரி மற்றும் வணிகம்",
    te: "పన్ను & వ్యాపారం",
    bn: "কর ও ব্যবসা",
    kn: "ತೆರಿಗೆ ಮತ್ತು ವ್ಯವಹಾರ",
    ml: "നികുതിയും ബിസിനസ്സും",
    pa: "ਟੈਕਸ ਅਤੇ ਵਪਾਰ",
  },
  Transport: {
    en: "Transport (DL & RC)",
    hi: "परिवहन (DL एवं RC)",
    mr: "वाहतूक (DL आणि RC)",
    gu: "વાહનવ્યવહાર (DL અને RC)",
    ta: "போக்குவரத்து (DL & RC)",
    te: "రవాణా (DL & RC)",
    bn: "পরিবহন (DL এবং RC)",
    kn: "ಸಾರಿಗೆ (DL ಮತ್ತು RC)",
    ml: "ഗതാഗതം (DL & RC)",
    pa: "ਆਵਾਜਾਈ (DL ਅਤੇ RC)",
  },
  "Passport & Travel": {
    en: "Passport & Travel",
    hi: "पासपोर्ट एवं यात्रा",
    mr: "पासपोर्ट आणि प्रवास",
    gu: "પાસપોર્ટ અને મુસાફરી",
    ta: "பாஸ்போர்ட் & பயணம்",
    te: "పాస్‌పోర్ట్ & ప్రయాణం",
    bn: "পাসপোর্ট ও ভ্রমণ",
    kn: "ಪಾಸ್‌ಪೋರ್ಟ್ ಮತ್ತು ಪ್ರಯಾಣ",
    ml: "പാസ്പോർട്ട് & യാത്ര",
    pa: "ਪਾਸਪੋਰਟ ਅਤੇ ਯਾਤਰਾ",
  },
  "Voter Services": {
    en: "Voter Services",
    hi: "मतदाता सेवाएं",
    mr: "मतदार सेवा",
    gu: "મતદાર સેવાઓ",
    ta: "வாக்காளர் சேவைகள்",
    te: "ఓటరు సేవలు",
    bn: "ভোটার পরিষেবা",
    kn: "ಮತದಾರರ ಸೇವೆಗಳು",
    ml: "വോട്ടർ സേവനങ്ങൾ",
    pa: "ਵੋਟਰ ਸੇਵਾਵਾਂ",
  },
  "Certificates & Documents": {
    en: "Certificates & Documents",
    hi: "प्रमाण पत्र एवं दस्तावेज़",
    mr: "प्रमाणपत्रे आणि कागदपत्रे",
    gu: "પ્રમાણપત્રો અને દસ્તાવેજો",
    ta: "சான்றிதழ்கள் & ஆவணங்கள்",
    te: "ధృవీకరణ పత్రాలు & పత్రాలు",
    bn: "শংসাপত্র ও নথি",
    kn: "ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ದಾಖಲೆಗಳು",
    ml: "സർട്ടിഫിക്കറ്റുകളും രേഖകളും",
    pa: "ਸਰਟੀਫਿਕੇਟ ਅਤੇ ਦਸਤਾਵੇਜ਼",
  },
  "Government Schemes & Benefits": {
    en: "Schemes & Benefits",
    hi: "सरकारी योजनाएं",
    mr: "सरकारी योजना व लाभ",
    gu: "સરકારી યોજનાઓ અને લાભો",
    ta: "அரசு திட்டங்கள் & பலன்கள்",
    te: "ప్రభుత్వ పథకాలు & ప్రయోజనాలు",
    bn: "সরকারি প্রকল্প ও সুবিধা",
    kn: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಪ್ರಯೋಜನಗಳು",
    ml: "സർക്കാർ പദ്ധതികളും ആനുകൂല്യങ്ങളും",
    pa: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਅਤੇ ਲਾਭ",
  },
  Education: {
    en: "Education & Scholarships",
    hi: "शिक्षा एवं छात्रवृत्ति",
    mr: "शिक्षण आणि शिष्यवृत्ती",
    gu: "શિક્ષણ અને શિષ્યવૃત્તિ",
    ta: "கல்வி & உதவித்தொகை",
    te: "విద్య & స్కాలర్‌షిప్‌లు",
    bn: "শিক্ষা ও বৃত্তি",
    kn: "ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ",
    ml: "വിദ്യാഭ്യാസവും സ്കോളർഷിപ്പും",
    pa: "ਸਿੱਖਿਆ ਅਤੇ ਵਜ਼ੀਫ਼ੇ",
  },
  "Maharashtra / State Services": {
    en: "State Services",
    hi: "राज्य सेवाएं",
    mr: "राज्य सेवा",
    gu: "રાજ્ય સેવાઓ",
    ta: "மாநில சேவைகள்",
    te: "రాష్ట్ర సేవలు",
    bn: "রাজ্য পরিষেবা",
    kn: "ರಾಜ್ಯ ಸೇವೆಗಳು",
    ml: "സംസ്ഥാന സേവനങ്ങൾ",
    pa: "ਰਾਜ ਸੇਵਾਵਾਂ",
  },
  "Local Civic Services": {
    en: "Local Civic & Municipal",
    hi: "स्थानीय नागरिक सेवाएं",
    mr: "स्थानिक नागरी सेवा",
    gu: "સ્થાનિક નાગરિક સેવાઓ",
    ta: "உள்ளூர் குடிமை சேவைகள்",
    te: "స్థానిక పౌర సేవలు",
    bn: "স্থানীয় পৌর পরিষেবা",
    kn: "ಸ್ಥಳೀಯ ನಾಗರಿಕ ಸೇವೆಗಳು",
    ml: "പ്രാദേശിക പൗര സേവനങ്ങൾ",
    pa: "ਸਥਾਨਕ ਨਾਗਰਿਕ ਸੇਵਾਵਾਂ",
  },
};

const CATEGORY_LIST: { value: CivicServiceCategory | "All"; emoji: string }[] = [
  { value: "All", emoji: "✨" },
  { value: "Aadhaar & Identity", emoji: "🪪" },
  { value: "Tax & Business", emoji: "💼" },
  { value: "Transport", emoji: "🚗" },
  { value: "Passport & Travel", emoji: "✈️" },
  { value: "Voter Services", emoji: "🗳️" },
  { value: "Certificates & Documents", emoji: "📜" },
  { value: "Government Schemes & Benefits", emoji: "🏛️" },
  { value: "Education", emoji: "🎓" },
  { value: "Maharashtra / State Services", emoji: "🚩" },
  { value: "Local Civic Services", emoji: "🏙️" },
];

const DIFFICULTY_MAP: Record<CivicProcedure["difficulty"], Record<SupportedLanguage, string>> = {
  Simple: {
    en: "Simple",
    hi: "सरल",
    mr: "सोपे",
    gu: "સરળ",
    ta: "எளிய",
    te: "సులభం",
    bn: "সহজ",
    kn: "ಸುಲಭ",
    ml: "ലളിതം",
    pa: "ਸਰਲ",
  },
  Moderate: {
    en: "Moderate",
    hi: "मध्यम",
    mr: "मध्यम",
    gu: "મધ્યમ",
    ta: "நடுத்தர",
    te: "మధ్యస్థం",
    bn: "মাঝারি",
    kn: "ಮಧ್ಯಮ",
    ml: "മിതമായത്",
    pa: "ਦਰਮਿਆਨਾ",
  },
  "Multi-Stage": {
    en: "Multi-Stage",
    hi: "बहु-चरणीय",
    mr: "बहु-टप्प्यांचे",
    gu: "બહુ-તબક્કાવાર",
    ta: "பல நிலைகள்",
    te: "బహుళ-దశల",
    bn: "বহু-পর্যায়",
    kn: "ಬಹು-ಹಂತದ",
    ml: "ബഹുഘട്ടങ്ങൾ",
    pa: "ਬਹੁ-ਪੜਾਵੀ",
  },
};

export function CommonServices({
  currentLang = "en",
  procedures,
  selectedState,
  onSelectProcedure,
}: CommonServicesProps) {
  const [activeCategory, setActiveCategory] = useState<CivicServiceCategory | "All">("All");

  const t = getTranslations(currentLang);

  const categories = CATEGORY_LIST.map((c) => ({
    ...c,
    label: CATEGORY_NAMES[c.value]?.[currentLang] || CATEGORY_NAMES[c.value]?.en || c.value,
  }));

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
        return "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/80";
      case "Moderate":
        return "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/80";
      case "Multi-Stage":
        return "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/80";
    }
  };

  const getCategoryColor = (cat: CivicServiceCategory) => {
    switch (cat) {
      case "Aadhaar & Identity":
        return "text-indigo-800 bg-indigo-50 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/80";
      case "Tax & Business":
        return "text-blue-800 bg-blue-50 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/80";
      case "Transport":
        return "text-teal-800 bg-teal-50 border-teal-200 dark:bg-teal-950/70 dark:text-teal-300 dark:border-teal-800/80";
      case "Passport & Travel":
        return "text-cyan-800 bg-cyan-50 border-cyan-200 dark:bg-cyan-950/70 dark:text-cyan-300 dark:border-cyan-800/80";
      case "Voter Services":
        return "text-purple-800 bg-purple-50 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800/80";
      case "Certificates & Documents":
        return "text-emerald-800 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/80";
      case "Government Schemes & Benefits":
        return "text-rose-800 bg-rose-50 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800/80";
      case "Education":
        return "text-sky-800 bg-sky-50 border-sky-200 dark:bg-sky-950/70 dark:text-sky-300 dark:border-sky-800/80";
      case "Maharashtra / State Services":
        return "text-orange-800 bg-orange-50 border-orange-200 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-800/80";
      case "Local Civic Services":
        return "text-slate-800 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
    }
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800">
              {t.verifiedGovBadge || "Verified Government Procedures"}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              {t.commonServicesTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              {t.commonServicesSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              {t.badgeOfficialVerification || "Directing to official .gov.in / .nic.in portals"}
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-blue-800 text-white shadow-md shadow-blue-800/20 dark:bg-blue-600 dark:text-white dark:shadow-blue-600/30"
                  : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 dark:bg-slate-850 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 dark:border-slate-750"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProcedures.map((proc) => {
            const sTrans = SERVICE_TRANSLATIONS[proc.id];
            const procTitle = sTrans?.title ? getLocalizedText(sTrans.title, currentLang) : proc.title;
            const procDesc = sTrans?.shortDescription ? getLocalizedText(sTrans.shortDescription, currentLang) : proc.shortDescription;
            const procDept = sTrans?.department ? getLocalizedText(sTrans.department, currentLang) : proc.department;

            return (
              <div
                key={proc.id}
                onClick={() => onSelectProcedure(proc)}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/70 dark:hover:shadow-slate-950/80 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 cursor-pointer relative"
              >
                <div>
                  {/* Badges Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryColor(
                        proc.category
                      )}`}
                    >
                      {CATEGORY_NAMES[proc.category]?.[currentLang] || proc.category}
                    </span>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${getDifficultyBadge(
                        proc.difficulty
                      )}`}
                    >
                      {DIFFICULTY_MAP[proc.difficulty]?.[currentLang] || proc.difficulty}
                    </span>
                  </div>

                  {/* Procedure Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1 mb-2 dark:text-white dark:group-hover:text-blue-400">
                    {procTitle}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {procDesc}
                  </p>

                  {/* Authority / Ministry info */}
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 mb-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">
                      {t.authorityLabel || "Competent Authority:"}
                    </span>
                    <span className="truncate block text-slate-600 dark:text-slate-400">{procDept}</span>
                  </div>
                </div>

                {/* Procedure Key Metrics */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50/80 dark:bg-slate-850 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">
                        <ClockIcon className="w-3 h-3 text-slate-400 dark:text-slate-400" />
                        <span>{t.estimatedTime || "Time"}</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
                        {proc.estimatedTime.split("(")[0]}
                      </span>
                    </div>

                    <div className="bg-slate-50/80 dark:bg-slate-850 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">
                        <DollarSignIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>{t.expectedOfficialFee || "Fee"}</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 line-clamp-1">
                        {proc.estimatedFee.split("(")[0]}
                      </span>
                    </div>

                    <div className="bg-slate-50/80 dark:bg-slate-850 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">
                        <DocumentCheckIcon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                        <span>{t.requiredDocuments || "Docs"}</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {proc.requiredDocuments.length}
                      </span>
                    </div>
                  </div>

                  {/* Official Portal indicator & Action */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate max-w-[170px]">
                      🌐 {proc.portalDomainName}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:underline">
                      <span>{t.selectThisService || "View Roadmap"}</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
