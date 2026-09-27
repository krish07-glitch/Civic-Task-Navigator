export type IndianStateId =
  | "all"
  | "maharashtra"
  | "delhi"
  | "karnataka"
  | "gujarat"
  | "tamil-nadu"
  | "uttar-pradesh"
  | "rajasthan"
  | "west-bengal"
  | "telangana"
  | "kerala"
  | "punjab"
  | "madhya-pradesh";

export interface IndianDistrict {
  id: string;
  name: string;
}

export interface IndianState {
  id: IndianStateId;
  name: string;
  regionalName: string;
  portalName: string;
  portalUrl: string;
  districts: IndianDistrict[];
}

export type CivicServiceCategory =
  | "Aadhaar & Identity"
  | "Tax & Business"
  | "Transport"
  | "Passport & Travel"
  | "Voter Services"
  | "Certificates & Documents"
  | "Government Schemes & Benefits"
  | "Education"
  | "Maharashtra / State Services"
  | "Local Civic Services";

export interface ProcedureStep {
  stepNumber: number;
  title: string;
  description: string;
  agencyOrPortal: string;
  estimatedDuration: string;
  onlineAvailable: boolean;
  mode?: "online" | "offline" | "hybrid";
  officialSource?: string;
  sourceReference?: string;
  officialTip?: string;
}

export interface RequiredDocument {
  name: string;
  type: "Aadhaar / e-KYC" | "Original" | "Self-Attested Copy" | "Affidavit / Notarized" | "Digital Upload (DigiLocker)";
  description: string;
  commonExamples: string;
}

export interface CivicProcedure {
  id: string;
  title: string;
  category: CivicServiceCategory;
  level: "Central / National" | "State" | "Municipal / Local";
  stateApplicability?: IndianStateId[]; // undefined means applicable nationwide
  department: string;
  officialPortalUrl: string; // must be verified .gov.in or .nic.in
  portalDomainName: string;
  shortDescription: string;
  eligibility: string[];
  fullOverview: string;
  estimatedTime: string;
  estimatedFee: string; // e.g., "₹50 (Statutory UIDAI fee)" or "Free"
  onlineAvailability: "100% Online (OTP / DigiLocker)" | "Online Application + Physical Verification" | "Offline / In-Person at Office / CSC";
  difficulty: "Simple" | "Moderate" | "Multi-Stage";
  requiredDocuments: RequiredDocument[];
  steps: ProcedureStep[];
  importantWarnings: string[];
  tags: string[];
}

export interface ExampleTaskQuery {
  label: string;
  query: string;
  category: CivicServiceCategory;
  stateHint?: IndianStateId;
}

export type SupportedLanguage =
  | "en" // English
  | "hi" // Hindi
  | "mr" // Marathi
  | "gu" // Gujarati
  | "ta" // Tamil
  | "te" // Telugu
  | "bn" // Bengali
  | "kn" // Kannada
  | "ml" // Malayalam
  | "pa"; // Punjabi

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
}
