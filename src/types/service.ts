import { IndianStateId, SupportedLanguage } from "./civic";

export type LocalizedStringObj = {
  [lang in SupportedLanguage]?: string;
} & {
  en: string;
  [lang: string]: string | undefined;
};

export type LocalizedString = string | LocalizedStringObj;

export function getLocalizedText(
  value: LocalizedString | undefined | null,
  lang: SupportedLanguage = "en",
  fallback = ""
): string {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value[lang] || value.en || value.hi || (Object.values(value).find(Boolean) as string) || fallback;
  }
  return fallback;
}

export interface ServiceDocument {
  name: LocalizedString;
  type: LocalizedString; // e.g. "Aadhaar e-KYC", "Original", "Self-Attested Copy", "Digital (DigiLocker)"
  description: LocalizedString;
  commonExamples: LocalizedString;
  isMandatory: boolean;
}

export interface ServiceStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
  agencyOrPortal: LocalizedString;
  isOnline: boolean;
  estimatedDuration: LocalizedString;
  mode?: "online" | "offline" | "hybrid";
  officialSource?: LocalizedString;
  sourceReference?: LocalizedString;
  officialTip?: LocalizedString;
}

export interface ServiceFee {
  amountText: LocalizedString; // e.g. "₹50 (Statutory UIDAI fee)" or "Free (₹0)"
  isVerified: boolean;
  verificationSource?: LocalizedString;
}

export interface ServiceProcessingTime {
  timeText: LocalizedString; // e.g. "7 - 15 Working Days (Right to Services Guarantee)"
  isVerified: boolean;
  statutoryAct?: LocalizedString;
}

export interface OfficialPortalInfo {
  name: LocalizedString;
  url: string | null; // Verified .gov.in/.nic.in URL or null for jurisdictional placeholders
  domain: string;
  isVerified: boolean;
  portalType?: "central" | "state" | "municipal" | "placeholder";
  notes?: LocalizedString;
}

export interface GovernmentService {
  id: string;
  name: LocalizedString; // Official service name
  title: LocalizedString; // Display title
  category: LocalizedString;
  description: LocalizedString; // Concise description
  shortDescription: LocalizedString;
  fullOverview: LocalizedString;
  keywords: string[]; // Search keywords & synonyms
  tags: string[]; // Category tags
  authority: LocalizedString; // Issuing government body / department
  department: LocalizedString; // Compatible with existing UI components
  centralOrState: "central" | "state" | "municipal" | "concurrent";
  stateScope: "national" | "state" | "municipal"; // Compatible with existing UI components
  locationRequired: boolean; // Whether State / City / Local Authority is needed to determine the correct portal/process
  applicableStates?: IndianStateId[]; // If empty or undefined, applicable across India
  states?: IndianStateId[]; // State availability
  availability?: LocalizedString; // Human-readable availability (e.g. "Pan-India" or "Maharashtra")
  eligibility: LocalizedString[];
  requiredDocuments: ServiceDocument[];
  applicationSteps: ServiceStep[]; // Canonical steps array
  steps: ServiceStep[]; // Compatible with existing UI components
  fees: ServiceFee;
  feeInfo?: LocalizedString; // Human-readable fee summary
  processingTime: ServiceProcessingTime;
  processingInfo?: LocalizedString; // Human-readable processing time summary
  onlineAvailable: LocalizedString;
  officialPortal: OfficialPortalInfo;
  officialPortalUrlPlaceholder?: string;
  source: LocalizedString; // Verified government source reference / legal act
  officialSource: LocalizedString; // Compatible with existing UI components
  lastVerified: string; // Date of official source verification
  lastVerifiedDate: string; // Compatible with existing UI components
  disclaimer?: LocalizedString;
  warnings?: LocalizedString[];
}

export interface LocalizedGovernmentService {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  fullOverview: string;
  keywords: string[];
  tags: string[];
  authority: string;
  department: string;
  centralOrState: "central" | "state" | "municipal" | "concurrent";
  stateScope: "national" | "state" | "municipal";
  locationRequired: boolean;
  applicableStates?: IndianStateId[];
  states?: IndianStateId[];
  availability?: string;
  eligibility: string[];
  requiredDocuments: {
    name: string;
    type: string;
    description: string;
    commonExamples: string;
    isMandatory: boolean;
  }[];
  applicationSteps: {
    stepNumber: number;
    title: string;
    description: string;
    agencyOrPortal: string;
    isOnline: boolean;
    estimatedDuration: string;
    mode?: "online" | "offline" | "hybrid";
    officialSource?: string;
    sourceReference?: string;
    officialTip?: string;
  }[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    agencyOrPortal: string;
    isOnline: boolean;
    estimatedDuration: string;
    mode?: "online" | "offline" | "hybrid";
    officialSource?: string;
    sourceReference?: string;
    officialTip?: string;
  }[];
  fees: {
    amountText: string;
    isVerified: boolean;
    verificationSource?: string;
  };
  feeInfo?: string;
  processingTime: {
    timeText: string;
    isVerified: boolean;
    statutoryAct?: string;
  };
  processingInfo?: string;
  onlineAvailable: string;
  officialPortal: {
    name: string;
    url: string | null;
    domain: string;
    isVerified: boolean;
    portalType?: "central" | "state" | "municipal" | "placeholder";
    notes?: string;
  };
  officialPortalUrlPlaceholder?: string;
  source: string;
  officialSource: string;
  lastVerified: string;
  lastVerifiedDate: string;
  disclaimer?: string;
  warnings?: string[];
}

export interface ClarificationOption {
  label: LocalizedString;
  description: LocalizedString;
  queryOverride: string;
  stateOverride?: IndianStateId;
  cityOverride?: string;
}

export interface ExtractedEntities {
  serviceType?: string;
  actionType?: "apply" | "renew" | "update" | "register" | "get" | "download" | "transfer";
  state?: IndianStateId;
  cityOrDistrict?: string;
  locationSpecifiedInQuery?: boolean;
  applicantType?: string;
  purpose?: string;
}

export type SearchOutcome =
  | {
      type: "FOUND";
      service: GovernmentService;
      matchedState: IndianStateId;
      matchedCityOrDistrict?: string;
      stateMatchedFromQuery: boolean;
      confidence: "high" | "medium";
      extractedEntities?: ExtractedEntities;
      mappedCategory?: string;
      alternativeServices?: GovernmentService[];
    }
  | {
      type: "CLARIFICATION";
      prompt: string;
      subprompt?: string;
      reason: "ambiguous_service" | "ambiguous_business_type" | "missing_state" | "missing_location";
      options: ClarificationOption[];
      originalQuery: string;
      selectedState: IndianStateId;
      extractedEntities?: ExtractedEntities;
      mappedCategory?: string;
    }
  | {
      type: "NO_RESULT";
      originalQuery: string;
      selectedState: IndianStateId;
      suggestions: string[];
      extractedEntities?: ExtractedEntities;
      mappedCategory?: string;
    };

