import { SupportedLanguage } from "@/types/civic";
import { RegionalServiceTranslation } from "./types";
import { mrServiceTranslations } from "./mr";
import { guServiceTranslations } from "./gu";
import { taServiceTranslations } from "./ta";
import { teServiceTranslations } from "./te";
import { bnServiceTranslations } from "./bn";
import { knServiceTranslations } from "./kn";
import { mlServiceTranslations } from "./ml";
import { paServiceTranslations } from "./pa";

export * from "./types";

const REGIONAL_REGISTRY: Partial<Record<SupportedLanguage, Record<string, RegionalServiceTranslation>>> = {
  mr: mrServiceTranslations,
  gu: guServiceTranslations,
  ta: taServiceTranslations,
  te: teServiceTranslations,
  bn: bnServiceTranslations,
  kn: knServiceTranslations,
  ml: mlServiceTranslations,
  pa: paServiceTranslations,
};

/**
 * Retrieve specialized regional service translations (Marathi, Gujarati, Tamil, Telugu, Bengali, Kannada, Malayalam, Punjabi)
 * @param serviceId Canonical service ID (e.g., "driving-licence", "aadhaar-update")
 * @param lang Supported language code
 */
export function getRegionalServiceTranslation(
  serviceId: string,
  lang: SupportedLanguage
): RegionalServiceTranslation | undefined {
  const langMap = REGIONAL_REGISTRY[lang];
  if (!langMap) return undefined;
  return langMap[serviceId];
}
