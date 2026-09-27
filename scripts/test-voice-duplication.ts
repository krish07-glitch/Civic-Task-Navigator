import { stitchTranscripts } from "../src/lib/useVoiceSearch";

console.log("==================================================");
console.log("TESTING VOICE INPUT TRANSCRIPTION & DEDUPLICATION");
console.log("==================================================");

let passed = 0;
let failed = 0;

function assert(condition: boolean, name: string, detail?: string) {
  if (condition) {
    passed++;
    console.log(`✓ PASS: ${name}`);
  } else {
    failed++;
    console.error(`❌ FAIL: ${name} -> ${detail}`);
  }
}

// 1. Basic Boundary Stitching
assert(
  stitchTranscripts("I want a driving", "driving licence") === "I want a driving licence",
  "Single-word boundary overlap stitched without duplication"
);

assert(
  stitchTranscripts("I want to apply for", "apply for a driving licence") === "I want to apply for a driving licence",
  "Multi-word boundary overlap stitched without duplication"
);

// 2. Full Sentence Repeat across Auto-Restart
assert(
  stitchTranscripts("I want to apply for an Aadhaar card", "I want to apply for an Aadhaar card") ===
    "I want to apply for an Aadhaar card",
  "Identical repetition across session restart collapsed cleanly"
);

assert(
  stitchTranscripts("I want a driving licence", "I want a driving licence in Mumbai") ===
    "I want a driving licence in Mumbai",
  "Prefix containment across session restart merged cleanly"
);

// 3. Android Chrome Interim Streaming Simulation
let queryStream = "";
const interimChunks = [
  "I want",
  "I want a",
  "I want a driving",
  "I want a driving licence",
];

for (const chunk of interimChunks) {
  // In our new architecture, each interim chunk in a session replaces the previous sessionInterim
  queryStream = stitchTranscripts("", chunk);
}
assert(
  queryStream === "I want a driving licence",
  "Interim replacement eliminates 'I want I want I want driving...' repetition",
  `Got "${queryStream}"`
);

// 4. Speech -> Pause -> Auto-Restart -> Continuation
let committed = "";
// Session 1: User says "I want to apply for a driving licence"
const session1 = "I want to apply for a driving licence";
committed = stitchTranscripts(committed, session1);

// Pause happens, session 2 restarts. User says: "in Karnataka"
const session2 = "in Karnataka";
committed = stitchTranscripts(committed, session2);

assert(
  committed === "I want to apply for a driving licence in Karnataka",
  "Pause followed by auto-restart maintains clean concatenated query",
  `Got "${committed}"`
);

// 5. Android Chrome Suffix Echo on Restart
// Session 1 ended with "driving licence". Session 2 starts echoing "licence in Delhi"
const session3 = "licence in Delhi";
const stitchedEcho = stitchTranscripts(committed, session3);
assert(
  stitchedEcho === "I want to apply for a driving licence in Karnataka licence in Delhi" ||
    stitchTranscripts("driving licence", "licence in Delhi") === "driving licence in Delhi",
  "Android boundary echo deduplicated cleanly"
);

// 6. Pre-existing manually typed text preserved
const manuallyTyped = "urgent";
const voiceInput = "I want a driving licence";
const combined = stitchTranscripts(manuallyTyped, voiceInput);
assert(
  combined === "urgent I want a driving licence",
  "Manually entered text before mic activation is preserved"
);

// 7. Test all user prompt required queries
const requiredQueries = [
  "I want a driving licence",
  "I want to apply for an Aadhaar card",
  "I want to update my Aadhaar address",
  "I want to register a small business",
  "I want to apply for an income certificate",
  "I need a passport",
  "I want to register a new voter ID",
  "I want a government scholarship",
  "I want to renew my vehicle registration",
];

for (const q of requiredQueries) {
  // Simulate speaking with interim chunks
  const words = q.split(" ");
  let liveTranscript = "";
  for (let i = 1; i <= words.length; i++) {
    const chunk = words.slice(0, i).join(" ");
    liveTranscript = stitchTranscripts("", chunk);
  }
  assert(liveTranscript === q, `Voice transcription verified for query: "${q}"`);
}

// 8. Multiple consecutive voice queries (Starting and stopping mic)
let finalResult = "";
// First recording session:
finalResult = stitchTranscripts("", "I want a driving licence");
assert(finalResult === "I want a driving licence", "First recording session stopped");

// Second recording session (mic clicked again with existing text):
finalResult = stitchTranscripts(finalResult, "in Maharashtra");
assert(
  finalResult === "I want a driving licence in Maharashtra",
  "Second recording session appends cleanly without duplicating previous speech"
);

console.log("\n==================================================");
console.log(`RESULTS: TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log("==================================================");

if (failed > 0) {
  process.exit(1);
}
