export interface RegionalDocItem {
  name: string;
  type: string;
  description: string;
  commonExamples: string;
  isMandatory: boolean;
}

export interface RegionalStepItem {
  stepNumber: number;
  title: string;
  description: string;
  agencyOrPortal: string;
  isOnline: boolean;
  estimatedDuration: string;
  mode: "online" | "offline" | "hybrid";
  officialSource?: string;
  sourceReference?: string;
  officialTip?: string;
}

export interface RegionalServiceTranslation {
  title?: string;
  category?: string;
  shortDescription?: string;
  fullOverview?: string;
  authority?: string;
  department?: string;
  eligibility?: string[];
  requiredDocuments?: RegionalDocItem[];
  steps?: RegionalStepItem[];
  fees?: {
    amountText: string;
    verificationSource?: string;
  };
  processingTime?: {
    timeText: string;
    statutoryAct?: string;
  };
  officialPortal?: {
    name: string;
    notes?: string;
  };
}
