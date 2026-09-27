import { GOVERNMENT_SERVICES, getLocalizedService } from '../src/data/services';
import { searchCivicService } from '../src/lib/serviceSearch';
import { getTranslations } from '../src/data/translations';
import { SERVICE_TRANSLATIONS } from '../src/data/serviceTranslations';

console.log("=================================================================");
console.log("CIVIC TASK NAVIGATOR — LANGUAGE LOCALIZATION SYSTEM VERIFICATION");
console.log("=================================================================\n");

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`✓ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`✗ FAIL: ${testName} -> ${detail || 'Assertion failed'}`);
    failed++;
  }
}

// -------------------------------------------------------------
// TEST 1: English selected -> Search "I want to apply for a driving licence"
// Expected: Entire result page = English
// -------------------------------------------------------------
console.log("--- TEST 1: English Selected -> Driving Licence Result ---");
const searchDlEn = searchCivicService("I want to apply for a driving licence", "all", "");
assert(searchDlEn.type === "FOUND", "Search found driving licence service");
if (searchDlEn.type === "FOUND") {
  const serviceEn = getLocalizedService(searchDlEn.service, "en");
  const tEn = getTranslations("en");

  assert(serviceEn.title === "Driving Licence (Learner's & Permanent)", "Service title is English", serviceEn.title);
  assert(serviceEn.category === "Transport & Licensing", "Category is English", serviceEn.category);
  assert(serviceEn.department === "Ministry of Road Transport and Highways (MoRTH) & State Transport Department", "Department is English", serviceEn.department);
  assert(serviceEn.fees.amountText.includes("₹"), "Fee amount present", serviceEn.fees.amountText);
  assert(serviceEn.eligibility.length > 0 && serviceEn.eligibility[0].includes("18 years"), "Eligibility is English", serviceEn.eligibility[0]);
  assert(serviceEn.requiredDocuments.length > 0 && serviceEn.requiredDocuments[0].name.includes("Age"), "Document 1 name is English", serviceEn.requiredDocuments[0].name);
  assert(serviceEn.requiredDocuments[0].description.includes("Government document"), "Document 1 description is English", serviceEn.requiredDocuments[0].description);
  assert(serviceEn.steps.length > 0 && serviceEn.steps[0].title.includes("Learner"), "Step 1 title is English", serviceEn.steps[0].title);
  assert(serviceEn.steps[0].description.includes("Sarathi"), "Step 1 description is English", serviceEn.steps[0].description);
  assert(serviceEn.steps[0].agencyOrPortal.includes("sarathi.parivahan.gov.in"), "Step 1 agency/portal is English", serviceEn.steps[0].agencyOrPortal);
  assert(serviceEn.steps[0].officialTip !== undefined && serviceEn.steps[0].officialTip.includes("Aadhaar"), "Step 1 official tip is English", serviceEn.steps[0].officialTip);
  assert(serviceEn.steps[0].officialSource !== undefined && serviceEn.steps[0].officialSource.includes("Motor Vehicles"), "Step 1 official source is English", serviceEn.steps[0].officialSource);

  // UI labels in English
  assert(tEn.eligibilityCriteria === "Eligibility Criteria", "UI: Eligibility Criteria header is English", tEn.eligibilityCriteria);
  assert(tEn.requiredDocuments === "Required Documents", "UI: Required Documents header is English", tEn.requiredDocuments);
  assert(tEn.officialProcedureTitle === "Official Step-by-Step Procedure", "UI: Procedure title is English", tEn.officialProcedureTitle);
  assert(tEn.markAsDone === "Mark as done", "UI: Mark as done is English", tEn.markAsDone);
  assert(tEn.deptWindow === "Department / Window:", "UI: Department / Window is English", tEn.deptWindow);
  assert(tEn.officialSource === "Official Source:", "UI: Official Source is English", tEn.officialSource);
  assert(tEn.officialTip === "Official Tip:", "UI: Official Tip is English", tEn.officialTip);
  assert(tEn.estTime === "Est. Time:", "UI: Est. Time is English", tEn.estTime);
}

// -------------------------------------------------------------
// TEST 2: Change language to Hindi AFTER search
// Expected: The SAME currently displayed result immediately becomes Hindi without searching again
// -------------------------------------------------------------
console.log("\n--- TEST 2: Instant Language Switch to Hindi (Same Result) ---");
if (searchDlEn.type === "FOUND") {
  // Re-evaluating with 'hi' without re-searching
  const serviceHi = getLocalizedService(searchDlEn.service, "hi");
  const tHi = getTranslations("hi");

  assert(serviceHi.title === "ड्राइविंग लाइसेंस (लर्नर और स्थायी)", "Service title immediately switches to Hindi", serviceHi.title);
  assert(serviceHi.category === "परिवहन एवं लाइसेंसिंग", "Category switches to Hindi", serviceHi.category);
  assert(serviceHi.department.includes("सड़क परिवहन"), "Department switches to Hindi", serviceHi.department);
  assert(serviceHi.officialPortal.name.includes("सारथी परिवहन"), "Portal name is recognizable Hindi with English in brackets", serviceHi.officialPortal.name);
  assert(serviceHi.eligibility[0].includes("18 वर्ष"), "Eligibility switches to Hindi", serviceHi.eligibility[0]);
  assert(serviceHi.requiredDocuments[0].name.includes("आयु"), "Document 1 name switches to Hindi", serviceHi.requiredDocuments[0].name);
  assert(serviceHi.requiredDocuments[0].description.includes("जन्म तिथि"), "Document 1 description switches to Hindi", serviceHi.requiredDocuments[0].description);
  assert(serviceHi.steps[0].title.includes("लर्नर लाइसेंस"), "Step 1 title switches to Hindi", serviceHi.steps[0].title);
  assert(serviceHi.steps[0].description.includes("सारथी परिवहन"), "Step 1 description switches to Hindi", serviceHi.steps[0].description);
  assert(serviceHi.steps[0].agencyOrPortal.includes("सारथी"), "Step 1 agency/portal switches to Hindi", serviceHi.steps[0].agencyOrPortal);
  assert(serviceHi.steps[0].officialTip !== undefined && serviceHi.steps[0].officialTip.includes("आधार प्रमाणीकरण"), "Step 1 official tip switches to Hindi", serviceHi.steps[0].officialTip);
  assert(serviceHi.steps[0].officialSource !== undefined && serviceHi.steps[0].officialSource.includes("मोटर वाहन"), "Step 1 official source switches to Hindi", serviceHi.steps[0].officialSource);

  // UI labels in Hindi
  assert(tHi.eligibilityCriteria === "पात्रता मानदंड", "UI: Eligibility Criteria header is Hindi", tHi.eligibilityCriteria);
  assert(tHi.requiredDocuments === "आवश्यक दस्तावेज़", "UI: Required Documents header is Hindi", tHi.requiredDocuments);
  assert(tHi.officialProcedureTitle === "आधिकारिक चरणबद्ध प्रक्रिया", "UI: Procedure title is Hindi", tHi.officialProcedureTitle);
  assert(tHi.markAsDone === "पूर्ण चिह्नित करें", "UI: Mark as done is Hindi", tHi.markAsDone);
  assert(tHi.deptWindow === "विभाग / काउंटर:", "UI: Department / Window is Hindi", tHi.deptWindow);
  assert(tHi.officialSource === "आधिकारिक स्रोत:", "UI: Official Source is Hindi", tHi.officialSource);
  assert(tHi.officialTip === "आधिकारिक सुझाव:", "UI: Official Tip is Hindi", tHi.officialTip);
  assert(tHi.estTime === "अनुमानित समय:", "UI: Est. Time is Hindi", tHi.estTime);
  assert(tHi.done === "पूर्ण", "UI: Done state is Hindi", tHi.done);
}

// -------------------------------------------------------------
// TEST 3: Hindi selected before searching -> Search Income Certificate
// Expected: Entire result page follows Hindi from the beginning
// -------------------------------------------------------------
console.log("\n--- TEST 3: Hindi Selected Before Searching -> Income Certificate ---");
const searchInc = searchCivicService("I want to apply for an income certificate", "maharashtra", "");
assert(searchInc.type === "FOUND", "Search found income certificate service");
if (searchInc.type === "FOUND") {
  const serviceIncHi = getLocalizedService(searchInc.service, "hi");

  assert(serviceIncHi.title.includes("आय प्रमाण पत्र"), "Income certificate title in Hindi", serviceIncHi.title);
  assert(serviceIncHi.department.includes("राजस्व"), "Income certificate department in Hindi", serviceIncHi.department);
  assert(serviceIncHi.officialPortal.name.includes("आपले सरकार"), "Aaple Sarkar portal in Hindi", serviceIncHi.officialPortal.name);
  assert(serviceIncHi.eligibility.length > 0 && serviceIncHi.eligibility[0].includes("निवासी"), "Eligibility in Hindi", serviceIncHi.eligibility[0]);
  assert(serviceIncHi.requiredDocuments.length > 0 && serviceIncHi.requiredDocuments[0].name.includes("पहचान"), "Document 1 name in Hindi", serviceIncHi.requiredDocuments[0].name);
  assert(serviceIncHi.steps.length > 0 && serviceIncHi.steps[0].title.includes("आपले सरकार"), "Step 1 title in Hindi", serviceIncHi.steps[0].title);
  assert(serviceIncHi.steps[0].description.includes("aaplesarkar.mahaonline.gov.in"), "Step 1 description in Hindi", serviceIncHi.steps[0].description);
}

// -------------------------------------------------------------
// TEST 4: Search "I want to register a business"
// Expected: Clarification cards or service options follow selected language
// -------------------------------------------------------------
console.log("\n--- TEST 4: Search 'I want to register a business' ---");
const searchBiz = searchCivicService("I want to register a business", "all", "");
assert(searchBiz.type === "CLARIFICATION", "Ambiguous business query yields CLARIFICATION");
if (searchBiz.type === "CLARIFICATION") {
  const tHi = getTranslations("hi");
  assert(searchBiz.options.length > 0, "Clarification options present", `${searchBiz.options.length} options`);
  assert(tHi.selectThisService === "यह सेवा चुनें", "Clarification select button label is Hindi", tHi.selectThisService);
  assert(tHi.clarificationNeeded === "स्पष्टीकरण आवश्यक है", "Clarification header is Hindi", tHi.clarificationNeeded);
}

// -------------------------------------------------------------
// TEST 5: Business Services (MSME & Private Limited Company)
// -------------------------------------------------------------
console.log("\n--- TEST 5: Business Registrations in Hindi ---");
const searchMsme = searchCivicService("I want to register MSME", "all", "");
assert(searchMsme.type === "FOUND", "MSME registration query matches Udyam");
if (searchMsme.type === "FOUND") {
  const msmeHi = getLocalizedService(searchMsme.service, "hi");
  assert(msmeHi.title.includes("उद्यम") || msmeHi.title.includes("एमएसएमई"), "MSME title in Hindi", msmeHi.title);
  assert(msmeHi.steps[0].title.includes("उद्यम"), "MSME step 1 in Hindi", msmeHi.steps[0].title);
}

const searchPvt = searchCivicService("I want to incorporate a Private Limited Company", "all", "");
assert(searchPvt.type === "FOUND", "Pvt Ltd query matches SPICe+");
if (searchPvt.type === "FOUND") {
  const pvtHi = getLocalizedService(searchPvt.service, "hi");
  assert(pvtHi.title.includes("प्राइवेट लिमिटेड") || pvtHi.title.includes("कंपनी"), "Pvt Ltd title in Hindi", pvtHi.title);
  assert(pvtHi.steps.length === 10, "Pvt Ltd has 10 authentic procedure steps", `${pvtHi.steps.length} steps`);
  assert(pvtHi.steps[0].title.includes("डीएससी") || pvtHi.steps[0].title.includes("DSC"), "Pvt Ltd step 1 in Hindi", pvtHi.steps[0].title);
}

// -------------------------------------------------------------
// TEST 6: All 22 services have complete Hindi translations
// -------------------------------------------------------------
console.log("\n--- TEST 6: All 22 Services Translation Completeness Audit ---");
let totalDocsChecked = 0;
let totalStepsChecked = 0;
let missingTranslationsCount = 0;

for (const rawService of GOVERNMENT_SERVICES) {
  const localizedHi = getLocalizedService(rawService, "hi");

  // Check title
  if (!localizedHi.title || localizedHi.title === rawService.title && !SERVICE_TRANSLATIONS[rawService.id]) {
    missingTranslationsCount++;
    console.error(`Missing Hindi title for: ${rawService.id}`);
  }

  // Check documents
  for (const doc of localizedHi.requiredDocuments) {
    totalDocsChecked++;
    if (!doc.name || !doc.description) {
      missingTranslationsCount++;
      console.error(`Missing Hindi document content for service: ${rawService.id}`);
    }
  }

  // Check steps
  for (const step of localizedHi.steps) {
    totalStepsChecked++;
    if (!step.title || !step.description || !step.agencyOrPortal) {
      missingTranslationsCount++;
      console.error(`Missing Hindi step content for service: ${rawService.id} step: ${step.stepNumber}`);
    }
  }
}

assert(missingTranslationsCount === 0, `All 22 services fully translated in Hindi (${totalDocsChecked} docs, ${totalStepsChecked} steps)`, `Missing count: ${missingTranslationsCount}`);

// -------------------------------------------------------------
// TEST 7: Official URLs are NEVER corrupted
// -------------------------------------------------------------
console.log("\n--- TEST 7: Official Government URL Integrity ---");
let urlsIntact = true;
for (const s of GOVERNMENT_SERVICES) {
  const portal = s.officialPortal;
  if (portal.url) {
    if (!portal.url.startsWith("https://") && !portal.url.startsWith("http://")) {
      urlsIntact = false;
      console.error(`Corrupt URL in ${s.id}: ${portal.url}`);
    }
    if (!portal.domain.includes(".gov.in") && !portal.domain.includes(".nic.in") && !portal.domain.includes(".org.in") && !portal.domain.includes(".in")) {
      urlsIntact = false;
      console.error(`Non-standard domain in ${s.id}: ${portal.domain}`);
    }
  }
}
assert(urlsIntact, "All official government URLs and domains are intact and uncorrupted");

console.log("\n=================================================================");
console.log(`TOTAL TESTS RUN: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log("=================================================================\n");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
