import { SupportedLanguage } from "@/types/civic";
import { OfficialPortalInfo, GovernmentService } from "@/types/service";
import { CivicProcedure } from "@/types/civic";

/**
 * Interface representing a verified official Indian government portal entry with language-aware routing.
 */
export interface LocalizedPortalEntry {
  portalId: string;
  name: string;
  defaultUrl: string;
  defaultDomain: string;
  isVerifiedOfficial: boolean;
  /**
   * Verified official language-specific URLs only.
   * Blindly constructed URLs (e.g. adding /ta or /kn where not officially provided) are strictly avoided.
   */
  localizedUrls: Partial<Record<SupportedLanguage | string, string>>;
  notes?: string;
}

/**
 * Centralized registry of Indian government portals and verified language-specific routes.
 */
export const LOCALIZED_OFFICIAL_PORTALS: Record<string, LocalizedPortalEntry> = {
  // 1. UIDAI Main Portal (Aadhaar)
  "uidai": {
    portalId: "uidai",
    name: "Unique Identification Authority of India (UIDAI)",
    defaultUrl: "https://uidai.gov.in/",
    defaultDomain: "uidai.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      hi: "https://uidai.gov.in/hi/",
      en: "https://uidai.gov.in/en/",
    },
    notes: "UIDAI hosts a verified dedicated Hindi portal at /hi/.",
  },

  // 2. UIDAI myAadhaar Portal
  "myaadhaar": {
    portalId: "myaadhaar",
    name: "UIDAI myAadhaar Self Service Portal",
    defaultUrl: "https://myaadhaar.uidai.gov.in/",
    defaultDomain: "myaadhaar.uidai.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      hi: "https://uidai.gov.in/hi/",
      en: "https://myaadhaar.uidai.gov.in/",
    },
    notes: "Directs Hindi users to UIDAI's verified Hindi official portal.",
  },

  // 3. Parivahan Sewa (MoRTH - Driving Licence & RC)
  "parivahan": {
    portalId: "parivahan",
    name: "Parivahan Sewa (Ministry of Road Transport & Highways)",
    defaultUrl: "https://parivahan.gov.in/",
    defaultDomain: "parivahan.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      hi: "https://parivahan.gov.in/parivahan//hi",
      en: "https://parivahan.gov.in/parivahan//en",
    },
    notes: "MoRTH Parivahan portal hosts verified /hi and /en endpoints.",
  },

  // 4. Aaple Sarkar (Government of Maharashtra)
  "aaplesarkar": {
    portalId: "aaplesarkar",
    name: "Aaple Sarkar (Government of Maharashtra RTS)",
    defaultUrl: "https://aaplesarkar.mahaonline.gov.in/",
    defaultDomain: "aaplesarkar.mahaonline.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      mr: "https://aaplesarkar.mahaonline.gov.in/mr/Login/Login",
      en: "https://aaplesarkar.mahaonline.gov.in/en/Login/Login",
    },
    notes: "Maharashtra Aaple Sarkar natively provides /mr/Login/Login (Marathi) and /en/Login/Login (English).",
  },

  // 5. National Portal of India (india.gov.in / services.india.gov.in)
  "india-gov": {
    portalId: "india-gov",
    name: "National Portal of India",
    defaultUrl: "https://services.india.gov.in/",
    defaultDomain: "services.india.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      hi: "https://www.india.gov.in/hi",
      en: "https://services.india.gov.in/",
    },
    notes: "National Portal of India hosts an official verified Hindi portal at /hi.",
  },

  // 6. TNeGA e-Sevai (Government of Tamil Nadu)
  "tnesevai": {
    portalId: "tnesevai",
    name: "TNeGA e-Sevai (Government of Tamil Nadu)",
    defaultUrl: "https://www.tnesevai.tn.gov.in/",
    defaultDomain: "tnesevai.tn.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      ta: "https://www.tnesevai.tn.gov.in/",
      en: "https://www.tnesevai.tn.gov.in/",
    },
    notes: "Tamil Nadu e-Sevai is natively deployed with full Tamil interface support.",
  },

  // 7. Passport Seva (Ministry of External Affairs)
  "passportindia": {
    portalId: "passportindia",
    name: "Passport Seva (Ministry of External Affairs)",
    defaultUrl: "https://passportindia.gov.in/",
    defaultDomain: "passportindia.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {}, // Bilingual on-page selection; falls back to default URL
    notes: "No separate subpath exists; on-page bilingual toggle.",
  },

  // 8. Voters' Service Portal (Election Commission of India)
  "voters-eci": {
    portalId: "voters-eci",
    name: "Voters' Service Portal (Election Commission of India)",
    defaultUrl: "https://voters.eci.gov.in/",
    defaultDomain: "voters.eci.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {}, // Multilingual SPA; falls back to default URL
  },

  // 9. Udyam MSME Registration (Ministry of MSME)
  "udyam": {
    portalId: "udyam",
    name: "Udyam MSME Registration (Ministry of MSME)",
    defaultUrl: "https://udyamregistration.gov.in/",
    defaultDomain: "udyamregistration.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {}, // Single official registration gateway
  },

  // 10. Goods & Services Tax (GST) Portal
  "gst": {
    portalId: "gst",
    name: "Goods & Services Tax (GST) Portal",
    defaultUrl: "https://www.gst.gov.in/",
    defaultDomain: "gst.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 11. Income Tax Department e-Filing Portal
  "incometax": {
    portalId: "incometax",
    name: "Income Tax Department e-Filing Portal",
    defaultUrl: "https://www.incometax.gov.in/",
    defaultDomain: "incometax.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 12. Ministry of Corporate Affairs (MCA V3)
  "mca": {
    portalId: "mca",
    name: "Ministry of Corporate Affairs (MCA V3 Portal)",
    defaultUrl: "https://www.mca.gov.in/",
    defaultDomain: "mca.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      hi: "https://www.mca.gov.in/content/mca/global/hi/home.html",
      en: "https://www.mca.gov.in/",
    },
    notes: "Official MCA SPICe+ company incorporation portal.",
  },

  // 13. National Scholarship Portal (NSP)
  "scholarships": {
    portalId: "scholarships",
    name: "National Scholarship Portal (NSP)",
    defaultUrl: "https://scholarships.gov.in/",
    defaultDomain: "scholarships.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 14. myScheme (National Citizen Schemes Aggregator)
  "myscheme": {
    portalId: "myscheme",
    name: "myScheme (National Citizen Schemes Aggregator)",
    defaultUrl: "https://www.myscheme.gov.in/",
    defaultDomain: "myscheme.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {}, // 15 languages toggled dynamically on single URL
  },

  // 15. DigiLocker (National Digital Document Wallet)
  "digilocker": {
    portalId: "digilocker",
    name: "DigiLocker (National Digital Document Wallet)",
    defaultUrl: "https://www.digilocker.gov.in/",
    defaultDomain: "digilocker.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 16. CPGRAMS / PGPortal
  "pgportal": {
    portalId: "pgportal",
    name: "CPGRAMS Public Grievance Portal",
    defaultUrl: "https://pgportal.gov.in/",
    defaultDomain: "pgportal.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 17. Maharashtra Labour Management System (Gumasta / Shop Act)
  "lms-maha": {
    portalId: "lms-maha",
    name: "Maharashtra Labour Management System (Shop Act)",
    defaultUrl: "https://lms.mahaonline.gov.in/",
    defaultDomain: "lms.mahaonline.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 18. Delhi e-District
  "edistrict-delhi": {
    portalId: "edistrict-delhi",
    name: "Delhi e-District Portal",
    defaultUrl: "https://edistrict.delhigovt.nic.in/",
    defaultDomain: "edistrict.delhigovt.nic.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 19. Karnataka Seva Sindhu
  "sevasindhu": {
    portalId: "sevasindhu",
    name: "Karnataka Seva Sindhu Portal",
    defaultUrl: "https://sevasindhu.karnataka.gov.in/",
    defaultDomain: "sevasindhu.karnataka.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 20. Digital Gujarat
  "digitalgujarat": {
    portalId: "digitalgujarat",
    name: "Digital Gujarat Portal",
    defaultUrl: "https://www.digitalgujarat.gov.in/",
    defaultDomain: "digitalgujarat.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 21. Uttar Pradesh e-District
  "edistrict-up": {
    portalId: "edistrict-up",
    name: "Uttar Pradesh e-District Portal",
    defaultUrl: "https://edistrict.up.gov.in/",
    defaultDomain: "edistrict.up.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 22. Rajasthan e-Mitra
  "emitra-rajasthan": {
    portalId: "emitra-rajasthan",
    name: "Rajasthan e-Mitra Portal",
    defaultUrl: "https://emitra.rajasthan.gov.in/",
    defaultDomain: "emitra.rajasthan.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 23. West Bengal e-District
  "edistrict-wb": {
    portalId: "edistrict-wb",
    name: "West Bengal e-District Portal",
    defaultUrl: "https://edistrict.wb.gov.in/",
    defaultDomain: "edistrict.wb.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 24. Telangana MeeSeva
  "meeseva-telangana": {
    portalId: "meeseva-telangana",
    name: "Telangana MeeSeva Portal",
    defaultUrl: "https://tg.meeseva.gov.in/",
    defaultDomain: "tg.meeseva.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 25. Kerala e-District
  "edistrict-kerala": {
    portalId: "edistrict-kerala",
    name: "Kerala e-District Portal",
    defaultUrl: "https://edistrict.kerala.gov.in/",
    defaultDomain: "edistrict.kerala.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 26. Punjab e-Sewa
  "esewa-punjab": {
    portalId: "esewa-punjab",
    name: "Punjab e-Sewa Portal",
    defaultUrl: "https://esewa.punjab.gov.in/",
    defaultDomain: "esewa.punjab.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 27. Madhya Pradesh e-District
  "mpedistrict": {
    portalId: "mpedistrict",
    name: "Madhya Pradesh e-District Portal",
    defaultUrl: "https://mpedistrict.gov.in/",
    defaultDomain: "mpedistrict.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {},
  },

  // 28. e-Karmika Karnataka (Department of Labour)
  "ekarmika": {
    portalId: "ekarmika",
    name: "e-Karmika Karnataka (Department of Labour)",
    defaultUrl: "https://ekarmika.karnataka.gov.in/",
    defaultDomain: "ekarmika.karnataka.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      kn: "https://ekarmika.karnataka.gov.in/",
      en: "https://ekarmika.karnataka.gov.in/",
    },
    notes: "Karnataka official shop and commercial establishment registration portal.",
  },

  // 29. Labour CIS Delhi (Government of NCT of Delhi)
  "delhi-labour": {
    portalId: "delhi-labour",
    name: "Labour CIS Delhi (Government of NCT of Delhi)",
    defaultUrl: "https://labourcis.delhi.gov.in/",
    defaultDomain: "labourcis.delhi.gov.in",
    isVerifiedOfficial: true,
    localizedUrls: {
      en: "https://labourcis.delhi.gov.in/",
    },
    notes: "Delhi official shop and establishment registration portal.",
  },
};

/**
 * Validates that a destination URL belongs strictly to an authentic Indian official government domain.
 */
export function isOfficialGovernmentUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    return (
      host.endsWith(".gov.in") ||
      host.endsWith(".nic.in") ||
      host === "services.india.gov.in" ||
      host === "india.gov.in" ||
      host === "www.india.gov.in" ||
      host.endsWith(".mahaonline.gov.in") ||
      host.endsWith(".delhigovt.nic.in")
    );
  } catch {
    return false;
  }
}

/**
 * Helper to match an input URL, domain or service ID to an entry in the centralized portal registry.
 */
export function findPortalEntry(
  rawUrlOrIdentifier: string,
  serviceId?: string
): LocalizedPortalEntry | null {
  if (!rawUrlOrIdentifier && !serviceId) return null;

  const needle = (rawUrlOrIdentifier || "").toLowerCase().trim();
  const sId = (serviceId || "").toLowerCase().trim();

  // 1. Direct portalId match
  if (LOCALIZED_OFFICIAL_PORTALS[needle]) {
    return LOCALIZED_OFFICIAL_PORTALS[needle];
  }
  if (sId && LOCALIZED_OFFICIAL_PORTALS[sId]) {
    return LOCALIZED_OFFICIAL_PORTALS[sId];
  }

  // 2. Parse hostname if URL
  try {
    const urlStr = needle.startsWith("http://") || needle.startsWith("https://") ? needle : `https://${needle}`;
    const parsed = new URL(urlStr);
    const host = parsed.hostname.toLowerCase();

    // Check specific domains
    if (host === "myaadhaar.uidai.gov.in") return LOCALIZED_OFFICIAL_PORTALS["myaadhaar"];
    if (host === "uidai.gov.in" || host.endsWith(".uidai.gov.in")) return LOCALIZED_OFFICIAL_PORTALS["uidai"];
    if (host === "parivahan.gov.in" || host.endsWith(".parivahan.gov.in")) return LOCALIZED_OFFICIAL_PORTALS["parivahan"];
    if (host === "aaplesarkar.mahaonline.gov.in") return LOCALIZED_OFFICIAL_PORTALS["aaplesarkar"];
    if (host === "tnesevai.tn.gov.in") return LOCALIZED_OFFICIAL_PORTALS["tnesevai"];
    if (host === "services.india.gov.in" || host === "india.gov.in" || host === "www.india.gov.in") return LOCALIZED_OFFICIAL_PORTALS["india-gov"];
    if (host === "passportindia.gov.in" || host.endsWith(".passportindia.gov.in")) return LOCALIZED_OFFICIAL_PORTALS["passportindia"];

    const entries = Object.values(LOCALIZED_OFFICIAL_PORTALS);
    for (const entry of entries) {
      if (host === entry.defaultDomain || host.endsWith("." + entry.defaultDomain)) {
        return entry;
      }
    }
  } catch {
    // If not a parseable URL, fall back to exact match in registry
    const entries = Object.values(LOCALIZED_OFFICIAL_PORTALS);
    for (const entry of entries) {
      if (needle === entry.portalId || needle === entry.defaultDomain) {
        return entry;
      }
    }
  }

  return null;
}

/**
 * Returns the verified localized official government URL if one exists for the requested language.
 * Otherwise gracefully returns the verified default official URL.
 *
 * Guaranteed to NEVER redirect to third-party translators, proxies, or fabricated subpaths.
 *
 * @param serviceOrPortal GovernmentService, CivicProcedure, OfficialPortalInfo, URL string, or portal ID
 * @param selectedLanguage Active user-selected language (e.g. "hi", "mr", "ta", "en")
 * @returns Verified official government URL
 */
export function getLocalizedOfficialUrl(
  serviceOrPortal:
    | GovernmentService
    | CivicProcedure
    | OfficialPortalInfo
    | string
    | null
    | undefined,
  selectedLanguage: SupportedLanguage | string = "en"
): string {
  if (!serviceOrPortal) {
    return "https://services.india.gov.in/";
  }

  let rawUrl = "";
  let serviceId = "";

  if (typeof serviceOrPortal === "string") {
    rawUrl = serviceOrPortal;
  } else if ("officialPortal" in serviceOrPortal && serviceOrPortal.officialPortal) {
    rawUrl = serviceOrPortal.officialPortal.url || "";
    serviceId = serviceOrPortal.id || "";
  } else if ("officialPortalUrl" in serviceOrPortal && typeof (serviceOrPortal as CivicProcedure).officialPortalUrl === "string") {
    rawUrl = (serviceOrPortal as CivicProcedure).officialPortalUrl;
    serviceId = (serviceOrPortal as CivicProcedure).id || "";
  } else if ("url" in serviceOrPortal && typeof serviceOrPortal.url === "string") {
    rawUrl = serviceOrPortal.url;
  }

  const entry = findPortalEntry(rawUrl, serviceId);
  const langKey = (selectedLanguage || "en").toLowerCase().trim();

  if (entry) {
    // If a verified localized URL exists for this language and passes domain check, return it
    if (entry.localizedUrls && entry.localizedUrls[langKey]) {
      const candidate = entry.localizedUrls[langKey]!;
      if (isOfficialGovernmentUrl(candidate)) {
        return candidate;
      }
    }
    // Fall back to verified default portal URL
    return entry.defaultUrl;
  }

  // If URL is already a valid official government URL not in registry, return it safely
  if (isOfficialGovernmentUrl(rawUrl)) {
    return rawUrl;
  }

  return "https://services.india.gov.in/";
}

/**
 * Returns statistics about the localized portal registry.
 */
export function getLocalizedPortalRegistryStats() {
  const all = Object.values(LOCALIZED_OFFICIAL_PORTALS);
  const withLocalized = all.filter((p) => Object.keys(p.localizedUrls).length > 0);
  const languages = new Set<string>();

  withLocalized.forEach((p) => {
    Object.keys(p.localizedUrls).forEach((lang) => languages.add(lang));
  });

  const defaultFallbackOnly = all.filter((p) => Object.keys(p.localizedUrls).length === 0);

  return {
    totalPortals: all.length,
    portalsWithLocalizedUrls: withLocalized.length,
    supportedLanguages: Array.from(languages),
    portalsUsingDefaultFallback: defaultFallbackOnly.length,
  };
}
