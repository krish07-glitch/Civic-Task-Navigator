import { GOVERNMENT_SERVICES, getLocalizedService } from "../src/data/services";
import { SupportedLanguage } from "../src/types/civic";
import { getTranslations, TRANSLATIONS, SUPPORTED_LANGUAGES } from "../src/data/translations";

console.log("==================================================");
console.log("COMPREHENSIVE MULTI-LANGUAGE LOCALIZATION AUDIT");
console.log("==================================================");

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition: boolean, msg: string) {
  totalChecks++;
  if (condition) {
    passedChecks++;
  } else {
    failedChecks++;
    console.error(`❌ FAIL: ${msg}`);
  }
}

// 1. Verify all 10 supported languages
console.log("\n[1] Verifying Supported Languages List:");
const langCodes = SUPPORTED_LANGUAGES.map((l) => l.code);
console.log(`Configured languages (${langCodes.length}):`, langCodes.join(", "));
assert(langCodes.length === 10, "Exact 10 supported languages configured");

// 2. Verify UI Translations for every language
console.log("\n[2] Verifying UI Translations across all 10 languages:");
const criticalUiKeys = [
  "eligibilityCriteria",
  "requiredDocuments",
  "officialProcedureTitle",
  "officialSource",
  "officialTip",
  "processingTimeLabel",
  "expectedOfficialFee",
  "onlineAvailabilityLabel",
  "deptWindow",
  "estTime",
  "officialGovPortal",
  "visitPortalBtn",
  "whoCanApply",
  "markAsDone",
  "done",
] as const;

for (const lang of langCodes) {
  const dict = getTranslations(lang);
  assert(!!dict, `UI dictionary exists for '${lang}'`);

  for (const key of criticalUiKeys) {
    const val = dict[key as keyof typeof dict];
    assert(typeof val === "string" && val.trim().length > 0, `Language '${lang}' has valid key '${key}' -> "${val}"`);
  }

  // Count total valid string keys in dictionary
  const keys = Object.keys(dict);
  const populated = keys.filter((k) => typeof dict[k as keyof typeof dict] === "string");
  console.log(`- Language '${lang}': ${populated.length}/${keys.length} keys populated.`);
  assert(populated.length === keys.length, `All keys populated for '${lang}'`);
}

// 3. Verify Dynamic Service Localization across all 22 services x 10 languages
console.log("\n[3] Verifying Dynamic Service Localization across all 22 services x 10 languages (220 combinations):");
console.log(`Total services in registry: ${GOVERNMENT_SERVICES.length}`);

for (const service of GOVERNMENT_SERVICES) {
  for (const lang of langCodes) {
    const loc = getLocalizedService(service, lang);

    assert(!!loc.title && loc.title.trim().length > 0, `Service ${service.id} [${lang}] has title`);
    assert(!!loc.description && loc.description.trim().length > 0, `Service ${service.id} [${lang}] has description`);
    assert(Array.isArray(loc.eligibility) && loc.eligibility.length > 0, `Service ${service.id} [${lang}] has eligibility`);
    assert(Array.isArray(loc.requiredDocuments) && loc.requiredDocuments.length > 0, `Service ${service.id} [${lang}] has requiredDocuments`);
    assert(Array.isArray(loc.steps) && loc.steps.length > 0, `Service ${service.id} [${lang}] has steps`);
    assert(!!loc.fees?.amountText, `Service ${service.id} [${lang}] has fee text`);
    assert(!!loc.processingTime?.timeText, `Service ${service.id} [${lang}] has processing time text`);
    assert(!!loc.officialPortal?.name, `Service ${service.id} [${lang}] has official portal name`);

    // Verify Government URL preservation (must never corrupt official URLs)
    if (loc.officialPortal?.url) {
      assert(
        loc.officialPortal.url.startsWith("http://") || loc.officialPortal.url.startsWith("https://"),
        `Service ${service.id} [${lang}] portal URL must be valid HTTP/HTTPS: ${loc.officialPortal.url}`
      );
    }

    // Verify all steps have title, description, agencyOrPortal, estimatedDuration
    for (const step of loc.steps) {
      assert(!!step.title && step.title.trim().length > 0, `Service ${service.id} Step ${step.stepNumber} [${lang}] has title`);
      assert(!!step.description && step.description.trim().length > 0, `Service ${service.id} Step ${step.stepNumber} [${lang}] has description`);
      assert(!!step.agencyOrPortal && step.agencyOrPortal.trim().length > 0, `Service ${service.id} Step ${step.stepNumber} [${lang}] has agencyOrPortal`);
      assert(!!step.estimatedDuration && step.estimatedDuration.trim().length > 0, `Service ${service.id} Step ${step.stepNumber} [${lang}] has estimatedDuration`);
    }

    // Verify all documents have name, type, description
    for (const doc of loc.requiredDocuments) {
      assert(!!doc.name && doc.name.trim().length > 0, `Service ${service.id} Doc [${lang}] has name`);
      assert(!!doc.description && doc.description.trim().length > 0, `Service ${service.id} Doc [${lang}] has description`);
    }
  }
}

// 4. Test Language Switching Flow Simulation
console.log("\n[4] Simulating Language Switching Flow on 'driving-licence':");
const targetService = GOVERNMENT_SERVICES.find((s) => s.id === "driving-licence")!;
const titlesByLang: Record<string, string> = {};

for (const lang of langCodes) {
  const loc = getLocalizedService(targetService, lang);
  titlesByLang[lang] = loc.title;
  console.log(`  [${lang.padEnd(2, " ")}] Title: ${loc.title}`);
  console.log(`       Step 1: ${loc.steps[0].title}`);
  console.log(`       Fee:    ${loc.fees.amountText}`);
  console.log(`       Portal: ${loc.officialPortal.name} (${loc.officialPortal.url})`);
}

// Verify that regional titles are distinct and in native script
assert(titlesByLang["en"] === "Driving Licence (Learner's & Permanent)", "English title is correct");
assert(titlesByLang["hi"].includes("ड्राइविंग"), "Hindi title has Devanagari script");
assert(titlesByLang["mr"].includes("ड्रायव्हिंग"), "Marathi title has Devanagari script");
assert(titlesByLang["gu"].includes("ડ્રાઇવિંગ"), "Gujarati title has Gujarati script");
assert(titlesByLang["ta"].includes("ஓட்டுநர்"), "Tamil title has Tamil script");
assert(titlesByLang["te"].includes("డ్రైవింగ్"), "Telugu title has Telugu script");
assert(titlesByLang["bn"].includes("ড্রাইভিং"), "Bengali title has Bengali script");
assert(titlesByLang["kn"].includes("ಡ್ರೈವಿಂಗ್"), "Kannada title has Kannada script");
assert(titlesByLang["ml"].includes("ഡ്രൈവിംഗ്"), "Malayalam title has Malayalam script");
assert(titlesByLang["pa"].includes("ਡਰਾਈਵਿੰਗ"), "Punjabi title has Gurmukhi script");

console.log("\n==================================================");
console.log(`RESULTS: TOTAL CHECKS: ${totalChecks} | PASSED: ${passedChecks} | FAILED: ${failedChecks}`);
console.log("==================================================");

if (failedChecks > 0) {
  process.exit(1);
}
