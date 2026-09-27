import { LanguageOption, SupportedLanguage } from "@/types/civic";
import { enTranslations } from "./translations/en";
import { hiTranslations } from "./translations/hi";
import { mrTranslations } from "./translations/mr";
import { guTranslations } from "./translations/gu";
import { taTranslations } from "./translations/ta";
import { teTranslations } from "./translations/te";
import { bnTranslations } from "./translations/bn";
import { knTranslations } from "./translations/kn";
import { mlTranslations } from "./translations/ml";
import { paTranslations } from "./translations/pa";

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
];

export interface UiDictionary {
  brandTagline: string;
  badgePublicTech: string;
  badgeOfficialVerification: string;
  heroHeadlinePre: string;
  heroHeadlineHighlight: string;
  heroHeadlinePost: string;
  heroSubtitle: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchHelper: string;
  locationLabel: string;
  locationAllIndia: string;
  selectState: string;
  selectDistrict: string;
  findProcedureBtn: string;
  popularSearchesLabel: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  commonServicesTitle: string;
  commonServicesSubtitle: string;
  officialPortalsBtn: string;
  disclaimerNote: string;
  allCategories: string;
  filterByState: string;
  verifiedGovBadge: string;

  // Additional complete localization keys:
  navHowItWorks?: string;
  navServices?: string;
  navTrust?: string;
  navFaq?: string;
  navAdvisory?: string;
  navCountryBadge?: string;

  heroSubDesc?: string;
  searchingBtn?: string;
  matchingProcedures?: string;
  clickToViewRoadmap?: string;
  selectDistrictPrompt?: string;
  statewideOption?: string;
  centralServicesNote?: string;
  centralGovServicesHeader?: string;
  applyLocationBtn?: string;
  selectStateDistrictTitle?: string;
  stateUtLabel?: string;
  districtJurisdictionLabel?: string;
  districtsInLabel?: string;
  officialPortalLabel?: string;
  selectDistrictWarning?: string;
  selectDistrictPlaceholder?: string;
  allDistrictsStatewide?: string;
  panIndiaCentralServices?: string;
  badgeCentral?: string;
  badgeState?: string;

  voiceListening?: string;
  voiceRecordingActive?: string;
  voiceMicDenied?: string;
  voiceUnavailable?: string;
  voiceMicStop?: string;
  voiceMicStart?: string;

  trustStripTitle?: string;
  trustStripSubtitle?: string;
  trustZeroMiddlemen?: string;
  trustNoToutingTitle?: string;
  trustNoToutingDesc?: string;
  trustEkycTitle?: string;
  trustEkycDesc?: string;
  trustStatutoryFeesTitle?: string;
  trustStatutoryFeesDesc?: string;

  printRoadmap?: string;
  printTitle?: string;
  closeResult?: string;
  centralGovService?: string;
  stateGovService?: string;
  municipalGovService?: string;
  verifiedOn?: string;
  identifiedIntent?: string;
  actionLabel?: string;
  roleLabel?: string;
  purposeLabel?: string;
  authorityLabel?: string;
  statutoryBasis?: string;
  fromQuery?: string;

  officialGovPortal?: string;
  verifiedPortalBadge?: string;
  jurisdictionalPortalBadge?: string;
  visitPortalBtn?: string;
  applyViaJurisdictional?: string;
  expectedOfficialFee?: string;
  processingTimeLabel?: string;
  onlineAvailabilityLabel?: string;
  feeSourceLabel?: string;
  statutoryActLabel?: string;
  aadhaarEkycSub?: string;
  domainSafetyNoteTitle?: string;
  domainSafetyNoteText?: string;
  infoWillBeVerified?: string;

  eligibilityCriteria?: string;
  whoCanApply?: string;
  requiredDocuments?: string;
  inHandCount?: string;
  clickToCheckDocs?: string;
  readiness?: string;
  mandatoryBadge?: string;
  optionalBadge?: string;
  acceptableDocs?: string;

  officialProcedureTitle?: string;
  stepsCount?: string;
  stepCountSingular?: string;
  stepsVerifiedSubtitle?: string;
  completedCount?: string;
  inPersonAttendance?: string;
  hybridAttendance?: string;
  onlinePortalOtp?: string;
  markAsDone?: string;
  done?: string;
  deptWindow?: string;
  estTime?: string;
  officialSource?: string;
  officialTip?: string;

  importantWarnings?: string;
  relatedServices?: string;
  searchAnotherBtn?: string;
  proceedToDomain?: string;
  jurisdictionalServiceNotice?: string;
  publicAdvisoryTitle?: string;
  publicAdvisoryText?: string;

  clarificationNeeded?: string;
  yourQuery?: string;
  selectThisService?: string;
  dismissClarification?: string;

  serviceNotRecognized?: string;
  couldNotIdentifyExact?: string;
  couldNotFindMatching?: string;
  neverDisplayFabricated?: string;
  tipsForFinding?: string;
  tipDescribe?: string;
  tipState?: string;
  tipLocationDropdown?: string;
  tryVerifiedSearches?: string;

  portalsModalTitle?: string;
  portalsModalSubtitle?: string;
  searchPortals?: string;
  closeModal?: string;
  estimatedTime?: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, UiDictionary> = {
  en: enTranslations,
  hi: hiTranslations,
  mr: mrTranslations,
  gu: guTranslations,
  ta: taTranslations,
  te: teTranslations,
  bn: bnTranslations,
  kn: knTranslations,
  ml: mlTranslations,
  pa: paTranslations,
};

export function getTranslations(lang: SupportedLanguage = "en"): UiDictionary {
  const current = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return {
    ...TRANSLATIONS.en,
    ...current,
  };
}
