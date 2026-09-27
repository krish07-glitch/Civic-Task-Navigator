import { IndianStateId } from "./civic";

export interface ServiceDocument {
  name: string;
  type: string; // e.g. "Aadhaar e-KYC", "Original", "Self-Attested Copy", "Digital (DigiLocker)"
  description: string;
  commonExamples: string;
  isMandatory: boolean;
}

export interface ServiceStep {
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
}

export interface ServiceFee {
  amountText: string; // e.g. "₹50 (Statutory UIDAI fee)" or "Free (₹0)"
  isVerified: boolean;
  verificationSource?: string;
}

export interface ServiceProcessingTime {
  timeText: string; // e.g. "7 - 15 Working Days (Right to Services Guarantee)"
  isVerified: boolean;
  statutoryAct?: string;
}

export interface OfficialPortalInfo {
  name: string;
  url: string | null; // Verified .gov.in/.nic.in URL or null for jurisdictional placeholders
  domain: string;
  isVerified: boolean;
  portalType?: "central" | "state" | "municipal" | "placeholder";
  notes?: string;
}

export interface GovernmentService {
  id: string;
  name: string; // Official service name
  title: string; // Display title
  category: string;
  description: string; // Concise description
  shortDescription: string;
  fullOverview: string;
  keywords: string[]; // Search keywords & synonyms
  tags: string[]; // Category tags
  authority: string; // Issuing government body / department
  department: string; // Compatible with existing UI components
  centralOrState: "central" | "state" | "municipal" | "concurrent";
  stateScope: "national" | "state" | "municipal"; // Compatible with existing UI components
  locationRequired: boolean; // Whether State / City / Local Authority is needed to determine the correct portal/process
  applicableStates?: IndianStateId[]; // If empty or undefined, applicable across India
  states?: IndianStateId[]; // State availability
  availability?: string; // Human-readable availability (e.g. "Pan-India" or "Maharashtra")
  eligibility: string[];
  requiredDocuments: ServiceDocument[];
  applicationSteps: ServiceStep[]; // Canonical steps array
  steps: ServiceStep[]; // Compatible with existing UI components
  fees: ServiceFee;
  feeInfo?: string; // Human-readable fee summary
  processingTime: ServiceProcessingTime;
  processingInfo?: string; // Human-readable processing time summary
  onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)" | "Online Application + Physical Verification" | "In-Person Verification Required";
  officialPortal: OfficialPortalInfo;
  officialPortalUrlPlaceholder?: string;
  source: string; // Verified government source reference / legal act
  officialSource: string; // Compatible with existing UI components
  lastVerified: string; // Date of official source verification
  lastVerifiedDate: string; // Compatible with existing UI components
  disclaimer?: string;
  warnings?: string[];
}

export interface ClarificationOption {
  label: string;
  description: string;
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

