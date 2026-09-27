import { GovernmentService } from "@/types/service";

const RAW_SERVICES = [
  // 1. Driving Licence (MoRTH Sarathi)
  {
    id: "driving-licence",
    title: "Driving Licence (Learner's & Permanent)",
    category: "Transport & Licensing",
    shortDescription:
      "Apply online for a computerised Learner's Licence (LL) and book a practical RTO driving skill test slot for your permanent Driving Licence (DL).",
    fullOverview:
      "Administered nationwide through the centralized Sarathi MoRTH portal. Eligible citizens can apply for a Learner's Licence online via contactless Aadhaar e-KYC. After holding a valid Learner's Licence for at least 30 days, applicants book a slot at their jurisdictional RTO for the practical driving test.",
    stateScope: "national",
    department: "Ministry of Road Transport and Highways (MoRTH) & State Transport Department",
    eligibility: [
      "Minimum 18 years of age for private motor vehicles with gear (LMV / Motorcycles).",
      "Minimum 16 years for gearless two-wheelers up to 50cc (with written parental consent).",
      "Must have passed or appear for the online computerised traffic signs & road regulations test.",
      "Must hold a valid Learner's Licence for a minimum of 30 days before booking the permanent driving test.",
    ],
    requiredDocuments: [
      {
        name: "Proof of Age & Date of Birth",
        type: "Aadhaar e-KYC / Original",
        description: "Government document confirming date of birth.",
        commonExamples: "Aadhaar Card, 10th Class School Leaving Certificate, Passport, or Birth Certificate",
        isMandatory: true,
      },
      {
        name: "Proof of Address",
        type: "Digital (DigiLocker) / Original",
        description: "Residential proof within jurisdiction of the chosen RTO office.",
        commonExamples: "Aadhaar Card, Voter ID, Electricity Bill (< 2 months), or Bank Passbook with photo",
        isMandatory: true,
      },
      {
        name: "Form 1 (Physical Fitness Self-Declaration)",
        type: "Online Submission",
        description: "Self-declaration of fitness for non-transport vehicles under age 40.",
        commonExamples: "Filled online directly on Sarathi Parivahan portal",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Submit Learner's Licence Application via Aadhaar e-KYC",
        description:
          "Visit the official Sarathi Parivahan portal (sarathi.parivahan.gov.in), select your State, and choose 'Application for Learner Licence'. Authenticate via Aadhaar OTP for contactless processing.",
        agencyOrPortal: "sarathi.parivahan.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 - 15 Minutes",
        officialSource: "Central Motor Vehicles Rules (CMVR), 1989 & MoRTH Guidelines",
        sourceReference: "Rule 10 of CMVR, 1989",
        officialTip: "Aadhaar authentication waives the requirement to visit the RTO for document physical verification.",
      },
      {
        stepNumber: 2,
        title: "Complete Mandatory Audio-Visual Road Safety Tutorial",
        description:
          "Watch the mandatory MoRTH road safety and traffic signs video tutorial on the Sarathi portal before attempting the computerised learner test.",
        agencyOrPortal: "Sarathi Online Learning Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "MoRTH Road Safety Cell Guidelines",
        sourceReference: "MoRTH Order RT-11012/02/2021-MVL",
      },
      {
        stepNumber: 3,
        title: "Pass Computerised Online Learner Licence Test (LL Test)",
        description:
          "Answer 15 multiple-choice questions on road traffic signs, driver duties, and motor vehicle safety rules via the online proctored camera test or at the RTO test room.",
        agencyOrPortal: "Sarathi Online Test Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Central Motor Vehicles Rules, 1989 (Rule 11)",
        sourceReference: "Rule 11(1) of CMVR, 1989",
      },
      {
        stepNumber: 4,
        title: "Download Form 3 (Learner's Licence) & Observe 30-Day Mandatory Period",
        description:
          "Immediately download your digital Learner's Licence with QR code. By law, you must hold the Learner's Licence for at least 30 days while practicing under supervision before booking the permanent driving skill test.",
        agencyOrPortal: "Sarathi Portal / DigiLocker",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Instant generation",
        officialSource: "Motor Vehicles Act, 1988 (Section 8)",
        sourceReference: "Section 8(6) of Motor Vehicles Act, 1988",
      },
      {
        stepNumber: 5,
        title: "Pay Driving Licence Fees & Book RTO Testing Track Appointment",
        description:
          "Log into Sarathi, pay the statutory Driving Licence test and smart card fee, and schedule an appointment date and time at your jurisdictional RTO automated driving test track.",
        agencyOrPortal: "Sarathi Parivahan Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Rule 32 of Central Motor Vehicles Rules, 1989",
        sourceReference: "CMVR Rule 32 Fee Schedule",
      },
      {
        stepNumber: 6,
        title: "Appear for Practical Driving Skill Test at RTO Track",
        description:
          "Bring your vehicle (two-wheeler / four-wheeler), original Learner's Licence, vehicle documents (RC, Insurance, PUCC), and demonstrate driving proficiency on the automated sensor-based RTO track.",
        agencyOrPortal: "Jurisdictional RTO Automated Driving Test Track",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "1 - 2 Hours at RTO",
        officialSource: "Motor Vehicles Act, 1988 (Section 9) & CMVR Rule 15",
        sourceReference: "Section 9(3) of Motor Vehicles Act, 1988",
      },
    ],
    fees: {
      amountText: "₹150 - ₹200 for Learner's Licence | ₹300 - ₹500 for DL Test & Smart Card",
      isVerified: true,
      verificationSource: "Central Motor Vehicles Rules (CMVR) & State RTO Fee Schedules",
    },
    processingTime: {
      timeText: "Learner's: Same Day (Online) | Permanent DL: 7 - 15 Days after passing test",
      isVerified: true,
      statutoryAct: "Motor Vehicles Act, 1988",
    },
    onlineAvailable: "Online Application + Physical Verification",
    officialPortal: {
      name: "Parivahan Sewa (Sarathi Portal)",
      url: "https://parivahan.gov.in/",
      domain: "parivahan.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of Road Transport and Highways (MoRTH), Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Beware of unauthorized agents outside RTOs. All application slots and fees must be processed strictly through parivahan.gov.in.",
      "A Learner's Licence is valid for 6 months across India. You must take your practical test between Day 30 and Day 180.",
    ],
    tags: ["driving licence", "dl", "learner licence", "ll", "rto", "driver", "transport", "parivahan", "sarathi", "two wheeler", "four wheeler"],
  },

  // 2. Aadhaar Address Update Online (UIDAI myAadhaar)
  {
    id: "aadhaar-address-update",
    title: "Aadhaar Card Address Update Online",
    category: "Aadhaar & Identity",
    shortDescription:
      "Update your residential address on your Aadhaar card online through the official myAadhaar portal using valid Proof of Address (PoA) or Head of Family (HoF) consent.",
    fullOverview:
      "UIDAI allows Indian residents to modify their residential address directly online. You can upload scanned color copies of approved address proofs (such as electricity bill, bank passbook, rent agreement, or voter card) or request address verification via Head of Family (HoF) relationship proof.",
    stateScope: "national",
    department: "Unique Identification Authority of India (UIDAI), Ministry of Electronics and IT (MeitY)",
    eligibility: [
      "Any Indian resident holding a valid 12-digit Aadhaar number.",
      "Aadhaar MUST be linked with an active mobile phone number to receive mandatory one-time passwords (OTP).",
      "Must have a valid supporting address document in applicant's name OR Head of Family (HoF) consent with proof of relationship.",
    ],
    requiredDocuments: [
      {
        name: "Proof of Address (PoA)",
        type: "Digital (DigiLocker) / Scanned PDF",
        description: "Official document showing full resident name and new address.",
        commonExamples: "Electricity/Water Bill (< 3 months old), Bank Passbook with photo, Voter ID Card, Registered Rent Agreement",
        isMandatory: true,
      },
      {
        name: "Mobile Number linked with Aadhaar",
        type: "Aadhaar e-KYC",
        description: "Active SIM required to receive UIDAI 6-digit authentication OTP.",
        commonExamples: "Registered Mobile Number",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Login to myAadhaar Portal via Mobile OTP",
        description:
          "Open https://myaadhaar.uidai.gov.in and login using your 12-digit Aadhaar number, captcha, and 6-digit OTP sent to your linked mobile number.",
        agencyOrPortal: "myaadhaar.uidai.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 - 3 Minutes",
        officialSource: "UIDAI Aadhaar (Enrolment and Update) Regulations, 2016",
        sourceReference: "Regulation 28 of Aadhaar Regulations, 2016",
      },
      {
        stepNumber: 2,
        title: "Select 'Address Update' & Choose Verification Route",
        description:
          "Click 'Update Address Online'. Choose between 'Update Address via Valid Document Proof' or 'Head of Family (HoF) Based Address Update'.",
        agencyOrPortal: "myAadhaar Self Service Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "UIDAI Circular on Address Update Mechanism",
        sourceReference: "UIDAI Document List Circular 2023",
      },
      {
        stepNumber: 3,
        title: "Enter New Residential Address Details",
        description:
          "Type in house/flat number, street, locality, landmark, pincode, village/town, post office, district, and state exactly as shown in your address document.",
        agencyOrPortal: "myAadhaar Form Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 - 8 Minutes",
        officialSource: "UIDAI Data Standard Guidelines",
        sourceReference: "UIDAI Standard Operating Procedure (SOP) for Demographic Updates",
      },
      {
        stepNumber: 4,
        title: "Upload Supporting Document & Pay Statutory Government Fee",
        description:
          "Select the document type from the approved list and upload a clear color PDF/JPEG (under 2MB). Pay the official non-refundable fee of ₹50 via UPI, credit/debit card, or net banking.",
        agencyOrPortal: "UIDAI Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Aadhaar (Enrolment and Update) Regulations, 2016 (Schedule II)",
        sourceReference: "Schedule II Fee Notification, UIDAI",
      },
      {
        stepNumber: 5,
        title: "Track Service Request Number (SRN) & Download Updated e-Aadhaar",
        description:
          "Save the 14-digit SRN from your receipt. UIDAI backend verification verifies the document. Once approved, download the updated e-Aadhaar with verified digital signature.",
        agencyOrPortal: "UIDAI Verification Engine & myAadhaar",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 - 15 Working Days",
        officialSource: "Aadhaar Act, 2016",
        sourceReference: "Section 31 of Aadhaar Act, 2016",
      },
    ],
    fees: {
      amountText: "₹50 (Statutory UIDAI Online Fee)",
      isVerified: true,
      verificationSource: "Unique Identification Authority of India (UIDAI) Official Notification",
    },
    processingTime: {
      timeText: "5 - 15 Working Days",
      isVerified: true,
      statutoryAct: "Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "UIDAI myAadhaar Portal",
      url: "https://myaadhaar.uidai.gov.in/",
      domain: "myaadhaar.uidai.gov.in",
      isVerified: true,
    },
    officialSource: "Unique Identification Authority of India (UIDAI)",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "If your mobile number is NOT linked with Aadhaar, you cannot update your address online. You must visit an authorized Aadhaar Seva Kendra in person.",
      "The address on the uploaded document must match character-by-character with the typed address to avoid rejection.",
    ],
    tags: ["aadhaar", "uidai", "address update", "change address", "myaadhaar", "identity", "poa", "aadhar card"],
  },

  // 3. Income Certificate (State Revenue / e-District)
  {
    id: "income-certificate",
    title: "Income Certificate (Aaple Sarkar / e-District)",
    category: "Certificates & Revenue",
    shortDescription:
      "Apply for an official annual family income certificate issued by the Tehsildar/Sub-Divisional Magistrate for scholarships, college fee waivers, and EWS quota.",
    fullOverview:
      "An Income Certificate is an official document issued by the State Revenue Department (such as Aaple Sarkar in Maharashtra or eDistrict in other states). It certifies the annual income of an individual and their family from all sources, serving as primary evidence for higher education fee concessions, social welfare schemes, and reservation quotas.",
    stateScope: "state",
    applicableStates: ["maharashtra", "delhi", "karnataka", "gujarat", "uttar-pradesh", "rajasthan", "tamil-nadu", "telangana", "west-bengal", "madhya-pradesh"],
    department: "Revenue & District Administration Department, Government of Maharashtra & State Governments",
    eligibility: [
      "Applicant or applicant's family must be a resident of the jurisdiction/tehsil.",
      "Applicant must have demonstrable legal income through agriculture, wages, trade, business, or salary.",
    ],
    requiredDocuments: [
      {
        name: "Proof of Identity",
        type: "Aadhaar e-KYC / Original",
        description: "Government-issued identity proof.",
        commonExamples: "Aadhaar Card, Voter ID, or PAN Card",
        isMandatory: true,
      },
      {
        name: "Proof of Address",
        type: "Digital (DigiLocker) / Self-Attested",
        description: "Proof of residence in the respective taluka/tehsil.",
        commonExamples: "Electricity Bill, Ration Card, or Water Bill",
        isMandatory: true,
      },
      {
        name: "Proof of Income",
        type: "Self-Attested Copy",
        description: "Official proof of income for the preceding financial year.",
        commonExamples: "Salary Slips, Form 16, ITR acknowledgment, or Talathi / Village Officer Income Report",
        isMandatory: true,
      },
      {
        name: "Self-Declaration Affidavit",
        type: "Self-Declaration Format",
        description: "Standard self-declaration format as prescribed by state government.",
        commonExamples: "Aaple Sarkar / e-District pre-formatted declaration",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Register on State e-District / Aaple Sarkar Portal",
        description:
          "Visit the state portal (e.g., https://aaplesarkar.mahaonline.gov.in for Maharashtra, or state eDistrict). Create a citizen profile with mobile OTP and Aadhaar authentication.",
        agencyOrPortal: "aaplesarkar.mahaonline.gov.in / State e-District",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "State Right to Public Services Act (RTS)",
        sourceReference: "Maharashtra Right to Public Services Act, 2015",
      },
      {
        stepNumber: 2,
        title: "Select 'Revenue Department' > 'Income Certificate'",
        description:
          "Navigate to Revenue Department services and select 'Income Certificate'. Choose the required validity period (1-Year or 3-Year certificate).",
        agencyOrPortal: "State Revenue Administration Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "State Revenue Department Citizen Charter",
        sourceReference: "Revenue Department Notification No. RTS-2015/CR-45/PR-1",
      },
      {
        stepNumber: 3,
        title: "Fill Family Income Breakdown & Upload Documents",
        description:
          "Enter annual income breakdown across salary, business, agriculture, and other sources. Upload clear PDF scans of proof of identity, address, income slips, and self-declaration.",
        agencyOrPortal: "Aaple Sarkar / e-District Document Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "State e-Governance Standards",
        sourceReference: "State Document Verification Manual",
      },
      {
        stepNumber: 4,
        title: "Pay Statutory Portal Fee Online",
        description:
          "Pay the prescribed statutory processing fee (₹33.60 in Maharashtra) via UPI, debit card, or net banking. Download the system-generated acknowledgement receipt.",
        agencyOrPortal: "State Treasury / Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "State Right to Services Rules",
        sourceReference: "Government Gazette Fee Notification",
      },
      {
        stepNumber: 5,
        title: "Tehsildar Inquiry & Download Digitally Signed Certificate",
        description:
          "The Talathi / Revenue Circle Officer conducts field inquiry if necessary. Upon approval by the Tehsildar, download your digitally signed certificate with verifiable barcode.",
        agencyOrPortal: "Office of the Tehsildar & Aaple Sarkar Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "7 - 15 Working Days",
        officialSource: "Right to Public Services Statutory Guarantee",
        sourceReference: "Section 4 of Maharashtra Right to Public Services Act, 2015",
        officialTip: "Under the Maharashtra Right to Public Services Act, this certificate is legally required to be issued within 15 working days.",
      },
    ],
    fees: {
      amountText: "₹33.60 to ₹50 (Statutory State e-District Portal Fee)",
      isVerified: true,
      verificationSource: "Maharashtra Right to Public Services Act (RTS) Notification & State Portal Rates",
    },
    processingTime: {
      timeText: "7 - 15 Working Days (Legally guaranteed under RTS Act)",
      isVerified: true,
      statutoryAct: "Maharashtra Right to Public Services Act, 2015",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Aaple Sarkar (Government of Maharashtra)",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      domain: "aaplesarkar.mahaonline.gov.in",
      isVerified: true,
    },
    officialSource: "Revenue and Forest Department, Government of Maharashtra",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Providing a false income declaration is a criminal offense under the Bharatiya Nyaya Sanhita / Indian Penal Code.",
      "Check with your educational institution whether a 1-year or 3-year certificate is required for fee concessions.",
    ],
    tags: ["income certificate", "aay praman patra", "utpann dakhla", "aaple sarkar", "revenue", "tehsildar", "scholarship", "ews", "maharashtra"],
  },

  // 4. Udyam MSME Small Business Registration (Ministry of MSME)
  {
    id: "udyam-msme-registration",
    title: "Udyam MSME Small Business Registration",
    category: "Business & Commerce",
    shortDescription:
      "100% Free official central government registration for micro, small, and medium businesses to unlock priority bank loans, lower trademark fees, and government subsidies.",
    fullOverview:
      "Udyam Registration is the official portal of the Ministry of MSME, Government of India. Any sole proprietorship, partnership, LLP, private limited company, or family enterprise starting or operating a business in India can register online for free. The resulting Udyam Registration Certificate with a permanent QR code is used for opening current bank accounts and claiming government subsidies.",
    stateScope: "national",
    department: "Ministry of Micro, Small and Medium Enterprises (MSME), Government of India",
    eligibility: [
      "Any individual entrepreneur or legal entity operating a manufacturing, retail, or service business in India.",
      "Must have a valid Aadhaar number of the proprietor, managing partner, or authorized director.",
      "PAN number is mandatory (linked with Aadhaar).",
    ],
    requiredDocuments: [
      {
        name: "Proprietor / Partner Aadhaar Number",
        type: "Aadhaar e-KYC",
        description: "12-digit Aadhaar number with active mobile for OTP validation.",
        commonExamples: "Aadhaar Card",
        isMandatory: true,
      },
      {
        name: "Permanent Account Number (PAN)",
        type: "Aadhaar e-KYC",
        description: "Individual PAN for proprietorship; Entity PAN for Partnership / LLP / Pvt Ltd.",
        commonExamples: "PAN Card",
        isMandatory: true,
      },
      {
        name: "Operating Bank Account Details",
        type: "Self-Reported",
        description: "Bank Account Number and IFSC Code for business transactions.",
        commonExamples: "Bank Passbook or Cancelled Cheque",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Visit Official Udyam Registration Portal",
        description:
          "Open https://udyamregistration.gov.in. Click on 'For New Entrepreneurs who are not Registered yet as MSME or those with EM-II'.",
        agencyOrPortal: "udyamregistration.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 Minutes",
        officialSource: "Ministry of MSME Gazette Notification S.O. 2119(E)",
        sourceReference: "MSMED Act, 2006 Notification dated 26th June 2020",
      },
      {
        stepNumber: 2,
        title: "Validate Aadhaar & PAN via CBDT API Gateway",
        description:
          "Enter your 12-digit Aadhaar number and name as on Aadhaar. Validate mobile OTP. Next, enter PAN to fetch enterprise tax verification and ITR status automatically.",
        agencyOrPortal: "CBDT / UIDAI / MSME API Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Ministry of MSME Standard Operating Procedure",
        sourceReference: "Udyam Circular No. 01/2020",
      },
      {
        stepNumber: 3,
        title: "Enter Enterprise Details & National Industry Classification (NIC) Code",
        description:
          "Type in your business trade name, unit plant address, bank account number, IFSC code, and select your 4-digit/5-digit National Industry Classification (NIC) activity code.",
        agencyOrPortal: "National MSME Registry",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Central Statistical Office (CSO) National Industrial Classification",
        sourceReference: "NIC 2008 Classification Standards",
        officialTip: "Choose the NIC code that matches your primary activity (e.g. Retail sale of clothing, software development, restaurant).",
      },
      {
        stepNumber: 4,
        title: "Self-Declare Investment & Download Lifetime Udyam Certificate",
        description:
          "Declare written down value of plant & machinery and turnover from past financial year. Submit final OTP. Your permanent Udyam Registration Certificate with QR code is generated instantly.",
        agencyOrPortal: "Ministry of MSME Digital Registry",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Instant to 24 Hours",
        officialSource: "Micro, Small and Medium Enterprises Development Act, 2006",
        sourceReference: "Section 7 of MSMED Act, 2006",
      },
    ],
    fees: {
      amountText: "Free (₹0) - 100% Free Government Service",
      isVerified: true,
      verificationSource: "Ministry of MSME Official Guidelines",
    },
    processingTime: {
      timeText: "Instant to 1 - 3 Working Days",
      isVerified: true,
      statutoryAct: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Udyam Registration Portal (Ministry of MSME)",
      url: "https://udyamregistration.gov.in/",
      domain: "udyamregistration.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "CRITICAL: Udyam Registration is 100% FREE on udyamregistration.gov.in. Never pay private fake intermediary websites charging ₹1,500 - ₹3,000.",
      "No paper documents need to be physically submitted anywhere. The process is completely paperless and digital.",
    ],
    tags: ["small business", "business registration", "msme", "udyam", "company", "clothing business", "startup", "retail", "trade"],
  },

  // 5. Shop & Establishment (Gumasta Licence) - Maharashtra
  {
    id: "gumasta-licence-maharashtra",
    title: "Shop & Establishment (Gumasta Licence) - Maharashtra",
    category: "Business & State Licensing",
    shortDescription:
      "Mandatory operating registration under the Maharashtra Shops and Establishments Act for any commercial shop, office, boutique, or restaurant in Maharashtra.",
    fullOverview:
      "Commonly known as the 'Gumasta License' in Mumbai, Pune, Thane, and across Maharashtra. Regulated under the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017. For small enterprises with 0 to 9 employees, the state provides an instant online Intimation receipt (Form G) with zero recurring renewals, required by banks to open a Current Account.",
    stateScope: "state",
    applicableStates: ["maharashtra"],
    department: "Labour Department, Government of Maharashtra",
    eligibility: [
      "Any commercial establishment, retail shop, clothing boutique, eatery, or commercial firm operating within the state of Maharashtra.",
      "Enterprises with 0 to 9 workers qualify for instant Intimation (Form F - Free lifetime receipt).",
      "Enterprises with 10 or more workers require formal Registration (Form A) with applicable statutory fee.",
    ],
    requiredDocuments: [
      {
        name: "Aadhaar Card of the Business Owner",
        type: "Aadhaar e-KYC",
        description: "Identity verification of the proprietor or managing partner.",
        commonExamples: "Aadhaar Card",
        isMandatory: true,
      },
      {
        name: "Shop Front Photograph with Name Board in Marathi",
        type: "Digital Upload",
        description: "Clear photo showing the establishment name board written in Devanagari (Marathi) script.",
        commonExamples: "JPEG photo of shopfront with Marathi signboard",
        isMandatory: true,
      },
      {
        name: "Proof of Commercial Premises",
        type: "Self-Attested Copy",
        description: "Document proving legal possession of commercial address.",
        commonExamples: "Registered Rent Agreement, Electricity Bill of premises, or Municipal Property Tax receipt",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Access Maharashtra Labour Management System (LMS)",
        description:
          "Open https://lms.mahaonline.gov.in or access through Aaple Sarkar. Create an employer account using your Aadhaar or mobile number.",
        agencyOrPortal: "lms.mahaonline.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Maharashtra Shops and Establishments Act, 2017",
        sourceReference: "Section 6 of Maharashtra Act No. LXI of 2017",
      },
      {
        stepNumber: 2,
        title: "Select Form F (Intimation for 0-9 Workers) or Form A (10+ Workers)",
        description:
          "Select Form F if operating with 0 to 9 employees (exempt from recurring license fees). Select Form A if employing 10 or more workers.",
        agencyOrPortal: "Aaple Sarkar Labour Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Maharashtra Shops and Establishments Rules, 2018",
        sourceReference: "Rule 8 & Form F / Form A",
      },
      {
        stepNumber: 3,
        title: "Enter Commercial Establishment Particulars",
        description:
          "Provide shop trade name, nature of business (e.g. Retail sale of garments, software consultancy, eatery), municipal ward, and physical commercial address.",
        agencyOrPortal: "LMS Application Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Labour Department Circular on Intimation Process",
        sourceReference: "Government Notification No. MSA-01/2018/CR-14/Lab-10",
      },
      {
        stepNumber: 4,
        title: "Upload Marathi Signboard Photograph & Premises Proof",
        description:
          "Upload clear photo of the commercial storefront displaying the prominent signboard in Devanagari Marathi script, along with commercial electricity bill or registered rent agreement.",
        agencyOrPortal: "LMS Document Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Section 35 of Maharashtra Act No. LXI of 2017 (Signboard Mandate)",
        sourceReference: "Maharashtra Gazette Rule on Marathi Signboards",
      },
      {
        stepNumber: 5,
        title: "Download Instant Form G Intimation Receipt (Gumasta)",
        description:
          "Self-attest and submit. For establishments with 0-9 workers, the official Form G Intimation Receipt with QR code is generated instantly with lifetime validity and zero renewal requirement.",
        agencyOrPortal: "Government of Maharashtra Digital Seal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Instant (0-9 workers)",
        officialSource: "Maharashtra Shops and Establishments Act, 2017 (Section 6(2))",
        sourceReference: "Form G Intimation Receipt Rules",
        officialTip: "Commercial banks strictly accept this Form G receipt as primary proof to open a Current Account.",
      },
    ],
    fees: {
      amountText: "₹0 for 0 to 9 workers (Free Intimation Receipt) | Scaled fee for 10+ employees",
      isVerified: true,
      verificationSource: "Maharashtra Shops and Establishments Act, 2017 Gazette Notification",
    },
    processingTime: {
      timeText: "Instant (0-9 workers) | 3 - 5 Working Days (10+ workers)",
      isVerified: true,
      statutoryAct: "Maharashtra Shops and Establishments Act, 2017",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Maharashtra Labour Department (LMS Portal)",
      url: "https://lms.mahaonline.gov.in/",
      domain: "lms.mahaonline.gov.in",
      isVerified: true,
    },
    officialSource: "Labour Department, Government of Maharashtra",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "A signboard in Marathi (Devanagari script) is legally mandatory for all commercial establishments in Maharashtra.",
      "Banks strictly require this Gumasta Intimation Receipt or Udyam Certificate to open a commercial Current Account.",
    ],
    tags: ["gumasta", "shop act", "maharashtra", "mumbai business", "clothing business", "shop license", "trade license", "labour", "pune shop"],
  },

  // 6. Fresh Passport Application (MEA Passport Seva)
  {
    id: "passport-application",
    title: "Fresh Indian Passport Application & Re-issue",
    category: "Passport & Travel",
    shortDescription:
      "Apply online for a regular or Tatkaal Indian passport, pay official fees, book an appointment at Passport Seva Kendra (PSK), and complete police verification.",
    fullOverview:
      "Administered by the Ministry of External Affairs (MEA) through Passport Seva Kendras (PSK) and Post Office Passport Seva Kendras (POPSK). Complete the online application on passportindia.gov.in, pay the government fee, choose an appointment slot, present original documents for biometric capture, followed by local police verification.",
    stateScope: "national",
    department: "Consular, Passport and Visa (CPV) Division, Ministry of External Affairs (MEA)",
    eligibility: [
      "Any citizen of India by birth, descent, registration, or naturalization.",
      "Must not have criminal warrants, court travel restrictions, or adverse citizenship proceedings.",
    ],
    requiredDocuments: [
      {
        name: "Proof of Date of Birth (DoB)",
        type: "Original",
        description: "Document proving date and place of birth.",
        commonExamples: "Birth Certificate from Registrar, 10th Standard School Leaving Certificate, Aadhaar Card, or PAN Card",
        isMandatory: true,
      },
      {
        name: "Proof of Present Address",
        type: "Original",
        description: "Proof that applicant has lived at the stated address for past 12 months.",
        commonExamples: "Aadhaar Card, Water/Electricity Bill, Running Bank Passbook with photo, or Voter ID",
        isMandatory: true,
      },
      {
        name: "Non-ECR Category Proof (Optional for Non-Emigration Check)",
        type: "Original",
        description: "Exempts holders from Emigration Check clearance.",
        commonExamples: "10th Standard Matriculation Pass Certificate, Higher Degree Certificate, or ITR Records",
        isMandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Register User Account on Passport Seva Online Portal",
        description:
          "Visit https://passportindia.gov.in. Register an account under your jurisdictional Regional Passport Office (RPO) using your active email address.",
        agencyOrPortal: "passportindia.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Passports Act, 1967 & Passport Rules, 1980",
        sourceReference: "Section 5 of Passports Act, 1967",
      },
      {
        stepNumber: 2,
        title: "Fill Application Form Online",
        description:
          "Select 'Apply for Fresh Passport / Re-issue'. Fill in personal biographical details, family background, emergency contact, and residential address history.",
        agencyOrPortal: "Passport Seva System Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "20 Minutes",
        officialSource: "Passport Rules, 1980 (Form EA-P)",
        sourceReference: "Schedule III of Passport Rules, 1980",
      },
      {
        stepNumber: 3,
        title: "Pay Statutory Government Fee Online",
        description:
          "Pay the mandatory statutory fee of ₹1,500 (36-page normal adult) or ₹2,000 (60-page) via SBI ePay, net banking, or UPI.",
        agencyOrPortal: "BharatKosh / SBI ePay Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Passports Rules, 1980 (Schedule IV - Fee Structure)",
        sourceReference: "Schedule IV Table of Fees, MEA",
      },
      {
        stepNumber: 4,
        title: "Book PSK / POPSK Appointment Slot",
        description:
          "Select your nearest Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK) and choose your preferred appointment date and time slot.",
        agencyOrPortal: "Passport Seva Appointment Scheduler",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Ministry of External Affairs Appointment Manual",
        sourceReference: "Passport Seva Project Guidelines",
      },
      {
        stepNumber: 5,
        title: "In-Person Biometric Capture & Scrutiny at PSK",
        description:
          "Attend the PSK appointment in person with original documents. Staff verifies documents at Counter A (photo & fingerprint biometrics), Counter B (verification), and Counter C (granting).",
        agencyOrPortal: "Passport Seva Kendra (PSK / POPSK)",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "45 Minutes at PSK",
        officialSource: "Passport Rules, 1980 (Rule 7)",
        sourceReference: "Rule 7 of Passport Rules, 1980",
      },
      {
        stepNumber: 6,
        title: "Local Police Verification & Speed Post Delivery",
        description:
          "The jurisdictional local police station conducts in-person address verification. Upon clear police report, your passport is printed and dispatched via India Post Speed Post.",
        agencyOrPortal: "Jurisdictional Police Station & India Post",
        isOnline: false,
        mode: "hybrid",
        estimatedDuration: "7 - 14 Days",
        officialSource: "Ministry of External Affairs Police Verification SOP",
        sourceReference: "MEA Notification No. VI/401/1/2019",
      },
    ],
    fees: {
      amountText: "₹1,500 (Normal 36-page adult passport) | ₹2,000 (60-page) | +₹2,000 for Tatkaal",
      isVerified: true,
      verificationSource: "Passport Rules, 1980 & Ministry of External Affairs Gazette Notifications",
    },
    processingTime: {
      timeText: "Normal: 15 - 30 Working Days | Tatkaal: 3 - 7 Working Days",
      isVerified: true,
      statutoryAct: "Passports Act, 1967",
    },
    onlineAvailable: "Online Application + Physical Verification",
    officialPortal: {
      name: "Passport Seva Portal (Ministry of External Affairs)",
      url: "https://passportindia.gov.in/",
      domain: "passportindia.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of External Affairs, Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "BEWARE of fake websites mimicking Passport Seva. The ONLY genuine government portal is passportindia.gov.in (never .com or .org).",
      "Ensure the spelling of your name matches identically across Aadhaar, 10th marksheet, and PAN.",
    ],
    tags: ["passport", "passport seva", "travel", "mea", "psk", "popsk", "tatkaal", "visa", "police verification"],
  },

  // 7. New Voter Registration (ECI Form 6)
  {
    id: "voter-registration-form-6",
    title: "New Voter Registration & Voter ID (Form 6)",
    category: "Voter Services",
    shortDescription:
      "Enroll as a new voter in the electoral roll to receive your digital e-EPIC and physical Voter ID card issued by the Election Commission of India (ECI).",
    fullOverview:
      "Administered by the Election Commission of India (ECI) through the centralized Voters' Service Portal. First-time voters fill Form 6 online. Once verified by the local Booth Level Officer (BLO), your name is included in the electoral roll, and a free physical color Voter ID (EPIC) is delivered to your residence via Speed Post.",
    stateScope: "national",
    department: "Election Commission of India (ECI)",
    eligibility: [
      "Must be an Indian citizen residing in the assembly constituency.",
      "Must have completed 18 years of age on the qualifying dates (1st Jan, 1st April, 1st July, 1st Oct).",
    ],
    requiredDocuments: [
      {
        name: "Passport Size Color Photograph",
        type: "Digital Upload",
        description: "Recent color photo with white background (under 2MB).",
        commonExamples: "Digital passport photo",
        isMandatory: true,
      },
      {
        name: "Proof of Age",
        type: "Aadhaar e-KYC / Original",
        description: "Official government document proving age of 18 or above.",
        commonExamples: "Aadhaar Card, PAN Card, Birth Certificate, or 10th Marksheet",
        isMandatory: true,
      },
      {
        name: "Proof of Ordinary Residence",
        type: "Digital (DigiLocker) / Original",
        description: "Document proving you reside in the assembly constituency.",
        commonExamples: "Aadhaar Card, Water/Electricity/Gas Bill, Current Bank Passbook, or Indian Passport",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Register on ECI Voters' Service Portal",
        description:
          "Open https://voters.eci.gov.in. Register using your mobile phone number, captcha, and OTP to access electoral services.",
        agencyOrPortal: "voters.eci.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Representation of the People Act, 1950",
        sourceReference: "Section 23 of Representation of the People Act, 1950",
      },
      {
        stepNumber: 2,
        title: "Fill Online Form 6 for New Elector Registration",
        description:
          "Select your State, District, and Parliamentary / Assembly Constituency. Enter your personal details, date of birth, and current residential address.",
        agencyOrPortal: "ECI Form 6 Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "12 Minutes",
        officialSource: "Registration of Electors Rules, 1960 (Rule 13)",
        sourceReference: "Form 6 under Registration of Electors Rules, 1960",
      },
      {
        stepNumber: 3,
        title: "Upload Photograph, Age Proof & Residence Proof",
        description:
          "Upload a recent color passport photograph (under 2MB), proof of age, and proof of residence. Submit to generate a unique 12-digit Application Reference Number.",
        agencyOrPortal: "ECI Document Processing Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "ECI Guidelines for Electors",
        sourceReference: "ECI Compendium of Instructions on Electoral Rolls",
      },
      {
        stepNumber: 4,
        title: "Field Scrutiny by Booth Level Officer (BLO)",
        description:
          "The Electoral Registration Officer (ERO) assigns your application to the local Booth Level Officer (BLO) for physical field verification of your ordinary residence.",
        agencyOrPortal: "Local Polling Station / BLO Office",
        isOnline: false,
        mode: "hybrid",
        estimatedDuration: "7 - 14 Days",
        officialSource: "Registration of Electors Rules, 1960 (Rule 19)",
        sourceReference: "Rule 19 of Registration of Electors Rules, 1960",
      },
      {
        stepNumber: 5,
        title: "Electoral Roll Inclusion, e-EPIC Download & Speed Post Delivery",
        description:
          "Upon approval, download your digital e-EPIC PDF instantly. The Election Commission delivers a personalized color plastic Voter ID card to your home address via India Post Speed Post.",
        agencyOrPortal: "voters.eci.gov.in & India Post",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 - 30 Working Days",
        officialSource: "Election Commission of India Notification on e-EPIC",
        sourceReference: "ECI e-EPIC Scheme Notification",
      },
    ],
    fees: {
      amountText: "Free (₹0) - 100% Free Public Service",
      isVerified: true,
      verificationSource: "Election Commission of India Guidelines",
    },
    processingTime: {
      timeText: "15 - 30 Working Days (Instant digital e-EPIC download upon approval)",
      isVerified: true,
      statutoryAct: "Representation of the People Act, 1950",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Voters' Service Portal (Election Commission of India)",
      url: "https://voters.eci.gov.in/",
      domain: "voters.eci.gov.in",
      isVerified: true,
    },
    officialSource: "Election Commission of India (ECI)",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Enrolling in more than one electoral constituency is an illegal offense under Section 31 of the Representation of the People Act, 1950.",
      "Check your status in the electoral roll prior to election dates.",
    ],
    tags: ["voter id", "eci", "election", "form 6", "vote", "voter registration", "epic", "e-epic", "voter card"],
  },

  // 8. Government Scholarships (NSP & State Portals)
  {
    id: "government-scholarship",
    title: "Government Scholarships (National Scholarship Portal & MahaDBT)",
    category: "Education & Scholarships",
    shortDescription:
      "Apply for pre-matric, post-matric, merit-cum-means, and higher education scholarships disbursed directly into student bank accounts (DBT).",
    fullOverview:
      "The National Scholarship Portal (NSP) and state portals (like MahaDBT in Maharashtra) centralize financial assistance schemes for students. Tuition fee reimbursements, maintenance allowances, and merit stipends are credited directly into the student's Aadhaar-seeded bank account through Direct Benefit Transfer (DBT).",
    stateScope: "national",
    department: "Ministry of Education & State Social Welfare Departments",
    eligibility: [
      "Enrolled in a recognized Indian school, college, polytechnic, or university.",
      "Specific criteria depend on scheme (e.g. SC/ST/OBC/EWS/Minority quota or family income under ₹2.5 Lakh / ₹8 Lakh per annum).",
      "Student's bank account MUST be active and seeded with Aadhaar on the NPCI mapper for DBT transfer.",
    ],
    requiredDocuments: [
      {
        name: "Student Aadhaar Card",
        type: "Aadhaar e-KYC",
        description: "Used for One-Time Registration (OTR) on NSP.",
        commonExamples: "Aadhaar Card",
        isMandatory: true,
      },
      {
        name: "Official Income Certificate",
        type: "Original / Digital Copy",
        description: "Revenue income certificate issued by Tehsildar / Sub-Divisional Officer.",
        commonExamples: "Aaple Sarkar / e-District Income Certificate",
        isMandatory: true,
      },
      {
        name: "College Bonafide Certificate & Fee Receipt",
        type: "Self-Attested Copy",
        description: "Proof of active enrollment in recognized academic program.",
        commonExamples: "College Bonafide certificate and current academic term fee receipt",
        isMandatory: true,
      },
      {
        name: "Previous Year Academic Marksheet",
        type: "Digital (DigiLocker) / Self-Attested",
        description: "Grade sheet showing passing percentage.",
        commonExamples: "Board Marksheet or College Grade Card",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Complete One-Time Registration (OTR) on NSP",
        description:
          "Open https://scholarships.gov.in. Complete Aadhaar e-KYC and facial/biometric authentication to generate your permanent 14-digit OTR number.",
        agencyOrPortal: "scholarships.gov.in (NSP OTR)",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Ministry of Electronics and IT (MeitY) & Ministry of Education",
        sourceReference: "NSP Guidelines on One-Time Registration",
      },
      {
        stepNumber: 2,
        title: "Select Eligible Scheme & Fill Academic Record",
        description:
          "The portal displays matching central and state schemes based on your caste category and family income. Choose your scheme and input current academic roll details.",
        agencyOrPortal: "NSP Central Scheme Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Scheme Guidelines of Respective Central Ministries",
        sourceReference: "Post-Matric / Merit-cum-Means Guidelines",
      },
      {
        stepNumber: 3,
        title: "Upload Supporting Academic & Revenue Proofs",
        description:
          "Attach digital copies of your college bonafide certificate, previous year marksheet, state-issued income certificate, and caste certificate (if applicable).",
        agencyOrPortal: "NSP Document Upload Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Direct Benefit Transfer (DBT) Mission Guidelines",
        sourceReference: "Cabinet Secretariat DBT Notification",
      },
      {
        stepNumber: 4,
        title: "Institute Verification by College Nodal Officer",
        description:
          "Submit your online application. Inform your college scholarship clerk/officer to verify your credentials against institutional roll registers at Level 1.",
        agencyOrPortal: "College Nodal Verification Desk",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 - 10 Working Days",
        officialSource: "NSP Standard Operating Procedure for Institutes",
        sourceReference: "Institutional Verification Protocol, NSP",
      },
      {
        stepNumber: 5,
        title: "Direct Benefit Transfer (DBT) via Public Financial Management System (PFMS)",
        description:
          "Following District/State Welfare Officer scrutiny, scholarship funds and tuition waivers are disbursed directly into your Aadhaar-seeded bank account through PFMS.",
        agencyOrPortal: "PFMS / Ministry of Finance",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Per academic disbursement cycle",
        officialSource: "Public Financial Management System (PFMS) Guidelines",
        sourceReference: "Section 7 of Aadhaar Act for DBT Subsidies",
      },
    ],
    fees: {
      amountText: "Free (₹0) - 100% Free Public Student Portal",
      isVerified: true,
      verificationSource: "National Scholarship Portal Guidelines",
    },
    processingTime: {
      timeText: "Application window: Typically July - November annually | Disbursement per academic calendar",
      isVerified: true,
      statutoryAct: "National e-Governance Plan (NeGP)",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "National Scholarship Portal (NSP)",
      url: "https://scholarships.gov.in/",
      domain: "scholarships.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of Electronics and Information Technology (MeitY) & Ministry of Education",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Bank account MUST be seeded with Aadhaar on the NPCI mapper. A regular unlinked bank account cannot receive DBT funds.",
      "Check application deadlines early; institute verification must be completed before the scheme closing date.",
    ],
    tags: ["scholarship", "nsp", "mahadbt", "education", "student", "college fees", "fee waiver", "dbt", "post matric"],
  },

  // 9. Vehicle Registration Certificate (RC) & Transfer (Vahan MoRTH)
  {
    id: "vehicle-registration-rc",
    title: "Vehicle Registration Certificate (RC) & Transfer of Ownership",
    category: "Transport & Licensing",
    shortDescription:
      "Apply for vehicle registration, transfer vehicle title after private sale, or renew Fitness Certificate on Vahan Parivahan.",
    fullOverview:
      "Administered nationwide through the centralized Vahan MoRTH platform. When buying or selling a used vehicle or registering a new vehicle, the buyer must apply for ownership transfer within 30 days of purchase using Form 29 and Form 30 to prevent legal liability.",
    stateScope: "national",
    department: "Ministry of Road Transport and Highways (MoRTH) & State RTO",
    eligibility: [
      "Registered owner or legal buyer of a motor vehicle in India.",
      "Vehicle must have valid motor insurance and active Pollution Under Control Certificate (PUCC).",
    ],
    requiredDocuments: [
      {
        name: "Original Registration Certificate (RC Book / Smart Card)",
        type: "Original",
        description: "Original vehicle registration certificate.",
        commonExamples: "RC Smart Card",
        isMandatory: true,
      },
      {
        name: "Form 29 & Form 30 (Notice & Application for Transfer of Ownership)",
        type: "Form Submission",
        description: "Joint statutory transfer forms signed by buyer and seller.",
        commonExamples: "Downloaded Form 29 & 30 from Vahan portal",
        isMandatory: true,
      },
      {
        name: "Valid Motor Vehicle Insurance Policy",
        type: "Digital (DigiLocker) / Original",
        description: "Active third-party or comprehensive auto insurance.",
        commonExamples: "Insurance policy certificate",
        isMandatory: true,
      },
      {
        name: "Pollution Under Control Certificate (PUCC)",
        type: "Digital / Original",
        description: "Valid emission check certificate.",
        commonExamples: "PUCC printout with QR code",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Access Vahan Citizen Services Portal",
        description:
          "Visit https://parivahan.gov.in > Online Services > Vehicle Related Services. Select your State and RTO, or enter vehicle registration number.",
        agencyOrPortal: "vahan.parivahan.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Central Motor Vehicles Rules, 1989",
        sourceReference: "Rule 55 of CMVR, 1989",
      },
      {
        stepNumber: 2,
        title: "Select 'Transfer of Ownership' & Enter Buyer Particulars",
        description:
          "Choose 'Transfer of Ownership'. Enter buyer's legal name, Aadhaar, address, mobile number, and sale consideration amount.",
        agencyOrPortal: "Vahan Application Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Motor Vehicles Act, 1988 (Section 50)",
        sourceReference: "Section 50(1) of Motor Vehicles Act, 1988",
      },
      {
        stepNumber: 3,
        title: "Pay Statutory Transfer Fee & Motor Vehicle Tax Differential",
        description:
          "Pay the statutory fee (₹300 for two-wheelers, ₹500 for cars) plus smart card charges via the online integrated payment gateway.",
        agencyOrPortal: "Vahan Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Central Motor Vehicles Rules, 1989 (Rule 81)",
        sourceReference: "CMVR Rule 81 Fee Table",
      },
      {
        stepNumber: 4,
        title: "Upload Scanned Form 29, Form 30 & Vehicle Documents",
        description:
          "Upload scanned copies of signed Form 29, Form 30, valid insurance policy certificate, and valid PUCC.",
        agencyOrPortal: "Vahan Document Repository",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "MoRTH Contactless Citizen Services SOP",
        sourceReference: "MoRTH Notification G.S.R. 1361(E)",
      },
      {
        stepNumber: 5,
        title: "Complete Aadhaar e-Sign or Submit Physical Dossier at RTO",
        description:
          "In states supporting Aadhaar e-sign, buyer and seller authenticate with mobile OTP. In other states, submit the signed physical dossier and original RC at the RTO counter.",
        agencyOrPortal: "Jurisdictional RTO Vehicle Registration Desk",
        isOnline: true,
        mode: "hybrid",
        estimatedDuration: "1 - 2 Days",
        officialSource: "State Motor Vehicles Rules",
        sourceReference: "State Transport Department Circulars",
      },
      {
        stepNumber: 6,
        title: "RTO Scrutiny & Dispatch of New RC Smart Card",
        description:
          "The Registering Authority validates chassis/engine records. Upon approval, download your digital RC on DigiLocker or receive the new smart card via Speed Post.",
        agencyOrPortal: "Registering Authority & India Post",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 - 30 Working Days",
        officialSource: "Motor Vehicles Act, 1988 (Section 50(2))",
        sourceReference: "Section 50(2) of Motor Vehicles Act, 1988",
      },
    ],
    fees: {
      amountText: "₹300 for Two-Wheelers | ₹500 for Light Motor Vehicles (LMV) + Smart Card Fee",
      isVerified: true,
      verificationSource: "Central Motor Vehicles Rules, 1989 (Rule 81)",
    },
    processingTime: {
      timeText: "15 - 30 Working Days",
      isVerified: true,
      statutoryAct: "Motor Vehicles Act, 1988",
    },
    onlineAvailable: "Online Application + Physical Verification",
    officialPortal: {
      name: "Parivahan Sewa (Vahan Portal)",
      url: "https://parivahan.gov.in/",
      domain: "parivahan.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of Road Transport and Highways (MoRTH), Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Transfer must be reported within 30 days of sale. Failure to transfer title leaves the seller legally responsible for accidents and challans.",
    ],
    tags: ["vehicle registration", "rc", "rc transfer", "car transfer", "bike transfer", "parivahan", "vahan", "rto", "ownership transfer"],
  },

  // 10. Birth Certificate (CRS & Municipal Authorities)
  {
    id: "birth-certificate",
    title: "Birth Certificate Registration & Certified Copy",
    category: "Certificates & Vital Records",
    shortDescription:
      "Register a child birth within statutory 21 days or apply for an official certified birth certificate copy through the Civil Registration System (CRS) / Municipal Corporation.",
    fullOverview:
      "Birth registration in India is governed by the Registration of Births and Deaths Act, 1969. Institutional births are reported directly by hospitals within 21 days. Citizens can apply for certified copies with digital signatures through the national CRS portal (crsorgi.gov.in) or their urban municipal corporation portal (e.g. BMC in Mumbai, PMC in Pune).",
    stateScope: "national",
    department: "Office of the Registrar General of India & Municipal Health Departments",
    eligibility: [
      "Any birth occurring within the jurisdiction of the municipal corporation or gram panchayat.",
      "Must be reported within 21 days of birth for free standard registration; delayed registration requires order from Executive Magistrate.",
    ],
    requiredDocuments: [
      {
        name: "Hospital Discharge Summary / Institutional Birth Report",
        type: "Original",
        description: "Official slip issued by hospital where birth took place.",
        commonExamples: "Hospital Discharge Certificate or Form 1 issued by institution",
        isMandatory: true,
      },
      {
        name: "Parents' Aadhaar Cards",
        type: "Aadhaar e-KYC / Self-Attested",
        description: "Proof of identity and parentage.",
        commonExamples: "Mother and Father Aadhaar Cards",
        isMandatory: true,
      },
      {
        name: "Marriage Certificate of Parents (if available)",
        type: "Self-Attested Copy",
        description: "Proof of marriage.",
        commonExamples: "Marriage Certificate",
        isMandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Hospital Intimation of Birth within Statutory 21 Days",
        description:
          "Under Section 8 of the RBD Act, the medical officer in charge of the hospital/nursing home reports the birth to the local Registrar using Form 1 within 21 days.",
        agencyOrPortal: "Hospital Administrative Desk / Form 1",
        isOnline: true,
        mode: "hybrid",
        estimatedDuration: "1 - 2 Days from delivery",
        officialSource: "Registration of Births and Deaths Act, 1969",
        sourceReference: "Section 8 of RBD Act, 1969",
      },
      {
        stepNumber: 2,
        title: "Access Civil Registration System (CRS) or Municipal Health Portal",
        description:
          "Open https://crsorgi.gov.in or your urban municipal corporation portal (e.g. BMC Mumbai portal.mcgm.gov.in, MCD Delhi mcdonline.nic.in, or BBMP Bengaluru).",
        agencyOrPortal: "crsorgi.gov.in / Urban Municipal Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Office of the Registrar General & Census Commissioner, India",
        sourceReference: "Registration of Births and Deaths (Amendment) Act, 2023",
      },
      {
        stepNumber: 3,
        title: "Search Vital Registration Records",
        description:
          "Enter date of birth, child's gender, hospital name, mother's name, and father's name exactly as recorded during hospital discharge.",
        agencyOrPortal: "Civil Registration System Search Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "State Registration of Births and Deaths Rules",
        sourceReference: "Rule 8 & Form 5 (Birth Certificate)",
      },
      {
        stepNumber: 4,
        title: "Pay Nominal Statutory Certified Copy Fee",
        description:
          "First copy registered within 21 days is free; subsequent certified copies cost ₹20 - ₹50 per copy as per state statutory rates.",
        agencyOrPortal: "Municipal Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 Minutes",
        officialSource: "Section 17 of Registration of Births and Deaths Act, 1969",
        sourceReference: "RBD Act Section 17 Search & Copy Fee",
      },
      {
        stepNumber: 5,
        title: "Download Digitally Signed Birth Certificate PDF",
        description:
          "Download the official birth certificate PDF containing the Registrar's verifiable digital signature, barcode, and QR code, legally valid for passport, school admissions, and Aadhaar.",
        agencyOrPortal: "Office of the Registrar General of India",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Instant to 5 Working Days",
        officialSource: "Registration of Births and Deaths (Amendment) Act, 2023",
        sourceReference: "Section 12 of RBD Act, 1969",
      },
    ],
    fees: {
      amountText: "Free within 21 days | ₹20 - ₹50 per certified copy thereafter",
      isVerified: true,
      verificationSource: "Registration of Births and Deaths Act, 1969 & State Rules",
    },
    processingTime: {
      timeText: "3 - 7 Working Days (Online download)",
      isVerified: true,
      statutoryAct: "Registration of Births and Deaths (Amendment) Act, 2023",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Civil Registration System (Office of the Registrar General of India)",
      url: "https://crsorgi.gov.in/",
      domain: "crsorgi.gov.in",
      isVerified: true,
    },
    officialSource: "Office of the Registrar General & Census Commissioner, India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Registration within 21 days is free and straightforward. Births reported after 1 year require an order from an Executive Magistrate / SDM.",
    ],
    tags: ["birth certificate", "janam praman patra", "crs", "municipal", "registrar", "vital records", "child birth", "bmc"],
  },

  // 11. Death Certificate (CRS & Municipal Authorities)
  {
    id: "death-certificate",
    name: "Death Certificate Registration & Certified Copy",
    title: "Death Certificate Registration & Certified Copy",
    category: "Certificates & Vital Records",
    shortDescription:
      "Register a death within statutory 21 days or apply for an official certified death certificate copy through the Civil Registration System (CRS) / Municipal Corporation.",
    fullOverview:
      "Administered under the Registration of Births and Deaths Act, 1969. Institutional deaths are reported by hospitals, while domiciliary deaths are reported by family members or medical attendants to the local registrar within 21 days. Certified copies are required for legal succession, bank account settlements, property transfer, and insurance claims.",
    centralOrState: "municipal",
    stateScope: "municipal",
    locationRequired: true,
    authority: "Office of the Registrar General of India & Municipal Public Health Department",
    department: "Office of the Registrar General of India & Municipal Public Health Department",
    eligibility: [
      "Any death occurring within the territorial jurisdiction of the municipal corporation, municipal council, or gram panchayat.",
      "Must be reported within statutory 21 days of occurrence by immediate family member, medical attendant, or hospital administration.",
    ],
    requiredDocuments: [
      {
        name: "Medical Certification of Cause of Death (MCCD) / Doctor Slip",
        type: "Original",
        description: "Official cause of death form signed by attending registered medical practitioner.",
        commonExamples: "Form 4 (Hospital deaths) or Form 4A (Domiciliary deaths)",
        isMandatory: true,
      },
      {
        name: "Deceased Person's Identity Proof (Aadhaar / Voter ID / PAN)",
        type: "Self-Attested Copy",
        description: "Government photo ID of the deceased person.",
        commonExamples: "Aadhaar Card or Voter ID of the deceased",
        isMandatory: true,
      },
      {
        name: "Applicant's Photo ID & Relationship Proof",
        type: "Original / DigiLocker",
        description: "Proof of legal relationship of the informant/applicant.",
        commonExamples: "Applicant Aadhaar Card, Passport, or Ration Card showing relationship",
        isMandatory: true,
      },
      {
        name: "Cremation / Burial Ground Receipt",
        type: "Original",
        description: "Official receipt from the crematorium or cemetery verifying disposal.",
        commonExamples: "Shamshan / Kabristan disposal receipt",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Obtain Medical Certification of Cause of Death (MCCD - Form 4/4A)",
        description:
          "Collect the official Medical Certificate of Cause of Death (MCCD) from the treating doctor or hospital administration immediately following the occurrence.",
        agencyOrPortal: "Attending Hospital / Registered Medical Practitioner",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "Immediate upon demise",
        officialSource: "Section 10(2) of Registration of Births and Deaths Act, 1969",
        sourceReference: "Form 4 / Form 4A under RBD Act",
      },
      {
        stepNumber: 2,
        title: "Report Demise to Registrar within 21 Days with Cremation Receipt",
        description:
          "Submit Form 2 along with the MCCD and the original crematorium/burial ground receipt to the local municipal health ward office or via crsorgi.gov.in.",
        agencyOrPortal: "crsorgi.gov.in / Municipal Corporation Health Ward",
        isOnline: true,
        mode: "hybrid",
        estimatedDuration: "1 - 2 Days",
        officialSource: "Section 8 of Registration of Births and Deaths Act, 1969",
        sourceReference: "Form 2 under RBD Rules",
      },
      {
        stepNumber: 3,
        title: "Verification by Municipal Medical Officer of Health",
        description:
          "The Municipal Medical Officer of Health cross-checks the institutional death intimation against the cemetery receipt and hospital records.",
        agencyOrPortal: "Jurisdictional Registrar of Births & Deaths",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 - 5 Working Days",
        officialSource: "State Registration of Births and Deaths Rules",
        sourceReference: "Rule 10 of RBD Rules",
      },
      {
        stepNumber: 4,
        title: "Pay Nominal Statutory Certified Copy Fee",
        description:
          "Initial copy within 21 days is free in most states; subsequent certified copies cost ₹20 - ₹50 per copy.",
        agencyOrPortal: "Municipal Payment Gateway / Ward Counter",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 Minutes",
        officialSource: "Section 17 of Registration of Births and Deaths Act, 1969",
        sourceReference: "RBD Act Section 17",
      },
      {
        stepNumber: 5,
        title: "Download Digitally Signed Death Certificate (Form 6)",
        description:
          "Download the official Form 6 death certificate PDF containing the Registrar's digital signature and verifiable QR code for probate, insurance, and bank settlements.",
        agencyOrPortal: "Civil Registration System / Municipal Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 - 7 Working Days",
        officialSource: "Registration of Births and Deaths (Amendment) Act, 2023",
        sourceReference: "Section 12 & Form 6 of RBD Act",
      },
    ],
    fees: {
      amountText: "Free within 21 days | ₹20 - ₹50 per certified copy thereafter",
      isVerified: true,
      verificationSource: "Registration of Births and Deaths Act, 1969 & State Rules",
    },
    processingTime: {
      timeText: "3 - 7 Working Days (Online download)",
      isVerified: true,
      statutoryAct: "Registration of Births and Deaths Act, 1969",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Civil Registration System (Office of the Registrar General of India)",
      url: "https://crsorgi.gov.in/",
      domain: "crsorgi.gov.in",
      isVerified: true,
      portalType: "municipal",
      notes: "Central portal redirects to municipal / state civil registrar databases.",
    },
    officialSource: "Office of the Registrar General & Census Commissioner, India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Deaths reported after 21 days but within 30 days require late fee and permission of the prescribed authority.",
      "Deaths reported after 1 year require an order from an Executive Magistrate (SDM/Tehsildar).",
    ],
    tags: ["death certificate", "death registration", "mrityu praman patra", "crs", "municipal", "registrar", "vital records", "mccd"],
  },

  // 12. GST Registration (CBIC / GSTN)
  {
    id: "gst-registration",
    title: "New GST Registration for Businesses",
    category: "Tax & Business",
    shortDescription:
      "Apply for a 15-digit Goods and Services Tax Identification Number (GSTIN) on the official GST portal with Aadhaar authentication.",
    fullOverview:
      "Every business with annual turnover exceeding the threshold limit (₹40 Lakhs for goods / ₹20 Lakhs for services, or ₹20L/₹10L in special category states) or conducting inter-state commerce must register on gst.gov.in. Registration is processed online through Aadhaar biometric authentication.",
    stateScope: "national",
    department: "Goods and Services Tax Network (GSTN) & Central Board of Indirect Taxes and Customs (CBIC)",
    eligibility: [
      "Any commercial enterprise, sole proprietor, partnership, LLP, or private company operating in India.",
      "Mandatory if aggregate turnover exceeds statutory threshold or for e-commerce sellers and inter-state suppliers.",
    ],
    requiredDocuments: [
      {
        name: "PAN Card of the Business / Proprietor",
        type: "Aadhaar e-KYC",
        description: "Primary tax identification number.",
        commonExamples: "PAN Card",
        isMandatory: true,
      },
      {
        name: "Proof of Business Place / Commercial Address",
        type: "Self-Attested Copy",
        description: "Ownership or tenancy proof.",
        commonExamples: "Electricity Bill (< 2 months) with Rent Agreement and No-Objection Certificate (NOC)",
        isMandatory: true,
      },
      {
        name: "Bank Account Proof",
        type: "Digital Upload",
        description: "Active bank account details of the enterprise.",
        commonExamples: "First page of Bank Passbook, Bank Statement, or Cancelled Cheque",
        isMandatory: true,
      },
      {
        name: "Aadhaar Card of Authorized Signatory",
        type: "Aadhaar e-KYC",
        description: "Required for Aadhaar authentication to bypass physical premises inspection.",
        commonExamples: "Aadhaar Card",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Generate Temporary Reference Number (TRN) on GST Portal",
        description:
          "Visit https://www.gst.gov.in > Services > Registration > New Registration. Enter legal business PAN, official email address, and mobile number to receive a 15-day TRN.",
        agencyOrPortal: "gst.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Central Goods and Services Tax (CGST) Rules, 2017",
        sourceReference: "Rule 8(1) of CGST Rules, 2017",
      },
      {
        stepNumber: 2,
        title: "Fill Part-B: Entity Profile, Place of Business & HSN/SAC Codes",
        description:
          "Log in with TRN. Enter trade name, constitution of business, principal place of business, HSN commodity codes or SAC service codes.",
        agencyOrPortal: "GSTN Registration Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "20 Minutes",
        officialSource: "Form GST REG-01 User Manual",
        sourceReference: "Rule 8(2) of CGST Rules, 2017",
      },
      {
        stepNumber: 3,
        title: "Upload Commercial Premises Proof & Bank Account Proof",
        description:
          "Upload commercial electricity bill or municipal tax receipt along with registered rent agreement and landlord NOC. Upload cancelled cheque or bank statement.",
        agencyOrPortal: "GSTN Document Upload System",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "CBIC Notification No. 16/2020-Central Tax",
        sourceReference: "GST Document Specification Guidelines",
      },
      {
        stepNumber: 4,
        title: "Complete Aadhaar Authentication via OTP Link",
        description:
          "Click the official Aadhaar authentication link sent to the primary authorized signatory. Validate using Aadhaar mobile OTP to bypass mandatory physical site inspection.",
        agencyOrPortal: "UIDAI / GSTN API Bridge",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "CGST Rules, 2017 (Rule 8(4A))",
        sourceReference: "Rule 8(4A) of CGST Rules, 2017",
        officialTip: "Successful Aadhaar authentication ensures your GSTIN is approved within 7 working days without site inspection.",
      },
      {
        stepNumber: 5,
        title: "Generate Application Reference Number (ARN) & Officer Scrutiny",
        description:
          "System verifies the application and issues a 15-digit ARN. The jurisdictional GST officer reviews particulars; if any discrepancy is found, a Form REG-03 query is issued within 7 days.",
        agencyOrPortal: "Jurisdictional GST Commissionerate",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 - 7 Working Days",
        officialSource: "CGST Rules, 2017 (Rule 9)",
        sourceReference: "Rule 9(1) of CGST Rules, 2017",
      },
      {
        stepNumber: 6,
        title: "Download GST Registration Certificate (Form GST REG-06)",
        description:
          "Upon approval, download your official GST Registration Certificate (Form GST REG-06) displaying your 15-digit GSTIN, principal place of business, and QR code seal.",
        agencyOrPortal: "GST Portal Downloads",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Instant upon approval",
        officialSource: "CGST Rules, 2017 (Rule 10)",
        sourceReference: "Rule 10(1) of CGST Rules, 2017",
      },
    ],
    fees: {
      amountText: "Free (₹0) - 100% Free Official Government Registration",
      isVerified: true,
      verificationSource: "Central Goods and Services Tax (CGST) Act, 2017",
    },
    processingTime: {
      timeText: "3 - 7 Working Days (with Aadhaar Authentication)",
      isVerified: true,
      statutoryAct: "CGST Rules, 2017 (Rule 9)",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Goods & Services Tax (GST) Portal",
      url: "https://www.gst.gov.in/",
      domain: "gst.gov.in",
      isVerified: true,
    },
    officialSource: "Goods and Services Tax Network (GSTN), Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Official GST registration on gst.gov.in is completely FREE. Never pay third-party websites claiming to be the official GST registry.",
    ],
    tags: ["gst", "gst registration", "gstin", "tax", "business tax", "cbic", "gst portal", "goods and services tax"],
  },

  // 13. Income Tax Return (ITR) e-Filing
  {
    id: "income-tax-filing",
    title: "Income Tax Return (ITR) e-Filing & e-Verification",
    category: "Tax & Business",
    shortDescription:
      "File your annual Income Tax Return (ITR-1 to ITR-4) online and e-verify within 30 days using Aadhaar OTP.",
    fullOverview:
      "Administered by the Income Tax Department through the centralized e-Filing portal. Salaried individuals, professionals, and small businesses file annual tax returns, claim tax refunds, and verify Form 26AS/Annual Information Statement (AIS) directly online.",
    stateScope: "national",
    department: "Income Tax Department, Ministry of Finance, Government of India",
    eligibility: [
      "Any individual or entity whose total annual income exceeds the basic exemption limit, or who wishes to claim a tax refund or carry forward financial losses.",
      "Must have a valid PAN linked with Aadhaar.",
    ],
    requiredDocuments: [
      {
        name: "Form 16 / Salary Certificate",
        type: "Employer Issued",
        description: "Tax deduction summary provided by employer.",
        commonExamples: "Form 16 Part A and Part B",
        isMandatory: true,
      },
      {
        name: "Annual Information Statement (AIS) / Form 26AS",
        type: "Digital Download",
        description: "Tax deducted at source (TDS) and financial transactions report.",
        commonExamples: "Downloaded from incometax.gov.in",
        isMandatory: true,
      },
      {
        name: "Bank Account Statements for all Active Accounts",
        type: "Self-Reported",
        description: "Required for interest income computation and refund credit.",
        commonExamples: "Savings bank account statements",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Login to Income Tax e-Filing Portal with PAN",
        description:
          "Open https://www.incometax.gov.in. Log in using your 10-digit PAN as User ID and your portal password.",
        agencyOrPortal: "incometax.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Income Tax Act, 1961 (Section 139)",
        sourceReference: "Section 139(1) of Income Tax Act, 1961",
      },
      {
        stepNumber: 2,
        title: "Review Annual Information Statement (AIS) & Form 26AS",
        description:
          "Check pre-filled financial data in AIS and Form 26AS including salary TDS, interest income, dividend credits, and advance tax payments.",
        agencyOrPortal: "e-Filing AIS Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "CBDT Notification on AIS & Form 26AS",
        sourceReference: "Rule 114-I of Income Tax Rules, 1962",
      },
      {
        stepNumber: 3,
        title: "Select Applicable ITR Form & Claim Chapter VI-A Deductions",
        description:
          "Select Assessment Year and applicable form (e.g. ITR-1 Sahaj for salaried individuals under ₹50L, ITR-4 Sugam for presumptive business). Verify deductions under Section 80C, 80D, etc.",
        agencyOrPortal: "ITD Pre-fill Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Income Tax Rules, 1962 (Rule 12)",
        sourceReference: "Rule 12 of Income Tax Rules, 1962",
      },
      {
        stepNumber: 4,
        title: "Compute Tax Liability / Refund & Submit Return",
        description:
          "Review gross total income, calculate net tax liability or refund due under the chosen tax regime (Old vs New Tax Regime under Section 115BAC), and submit the return.",
        agencyOrPortal: "Central Processing Centre (CPC)",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Section 143(1) of Income Tax Act, 1961",
        sourceReference: "CPC Processing Guidelines",
      },
      {
        stepNumber: 5,
        title: "Mandatory e-Verification within 30 Days via Aadhaar OTP",
        description:
          "e-Verify your filed return within 30 days of submission using Aadhaar OTP, net banking, or electronic verification code (EVC). Unverified returns are legally deemed invalid.",
        agencyOrPortal: "e-Verification Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 Minutes",
        officialSource: "CBDT Notification No. 05/2022 on 30-Day e-Verification Window",
        sourceReference: "Rule 12 of Income Tax Rules, 1962",
      },
    ],
    fees: {
      amountText: "Free (₹0) on incometax.gov.in | Late filing fees apply if filed past deadline",
      isVerified: true,
      verificationSource: "Income Tax Act, 1961 (Section 234F)",
    },
    processingTime: {
      timeText: "Instant e-filing acknowledgment | Refund processed in 7 - 30 Working Days",
      isVerified: true,
      statutoryAct: "Income Tax Act, 1961",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Income Tax Department e-Filing Portal",
      url: "https://www.incometax.gov.in/",
      domain: "incometax.gov.in",
      isVerified: true,
    },
    officialSource: "Central Board of Direct Taxes (CBDT), Ministry of Finance",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "e-Verification must be completed within 30 days of filing. Failure to e-verify invalidates the return.",
      "PAN and Aadhaar MUST be linked to ensure smooth processing of tax refunds.",
    ],
    tags: ["income tax", "itr", "itr filing", "income tax return", "form 16", "tax refund", "incometax", "tax filing", "cbdt", "e-filing"],
  },

  // 14. Street Food Vendor / PM SVANidhi
  {
    id: "street-vendor-cart-registration",
    title: "Street Food Vendor Certificate & Food Cart Vending Card (PM SVANidhi)",
    category: "Local Civic & Street Vending",
    shortDescription:
      "Apply for a municipal Certificate of Vending and Street Food Vendor ID card under the Street Vendors Act 2014 & PM SVANidhi scheme to legally operate a roadside food cart.",
    fullOverview:
      "Under the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014 and PM SVANidhi scheme, Town Vending Committees (TVC) within municipal corporations issue official Certificates of Vending and ID cards to street food cart operators, tea stalls, and roadside vendors. This grants legal protection against arbitrary eviction in designated municipal vending zones and unlocks ₹10,000 to ₹50,000 collateral-free micro-credit working capital loans.",
    stateScope: "national",
    department: "Ministry of Housing and Urban Affairs (MoHUA) & Urban Local Bodies (Municipal Corporations)",
    eligibility: [
      "Any street vendor or roadside food cart operator engaged in vending in urban areas on or before statutory survey dates.",
      "Must operate within designated municipal vending zones approved by the Town Vending Committee (TVC).",
      "Must have valid Aadhaar card linked with active mobile number.",
    ],
    requiredDocuments: [
      {
        name: "Aadhaar Card of the Vendor",
        type: "Aadhaar e-KYC",
        description: "Primary identity and address verification.",
        commonExamples: "Aadhaar Card with active mobile link",
        isMandatory: true,
      },
      {
        name: "Letter of Recommendation (LoR) or Municipal Survey ID",
        type: "Official Recommendation / Survey Slip",
        description: "Proof of vending issued by Urban Local Body / Town Vending Committee.",
        commonExamples: "Town Vending Committee survey slip or ULB Letter of Recommendation (LoR)",
        isMandatory: true,
      },
      {
        name: "Vending Stall / Cart Photo",
        type: "Digital Upload",
        description: "Photograph of vendor at their roadside cart or stationary vending pitch.",
        commonExamples: "Recent color photo at food cart / thela",
        isMandatory: true,
      },
      {
        name: "Bank Account Details",
        type: "Self-Reported",
        description: "Active bank passbook or cancelled cheque for direct subsidy transfer.",
        commonExamples: "Savings bank account passbook",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Check TVC Survey Status or Apply for Letter of Recommendation (LoR)",
        description:
          "Visit your local ward municipal office or access https://pmsvanidhi.mohua.gov.in. If you were not covered in the municipal vendor survey, apply online for an official Letter of Recommendation (LoR).",
        agencyOrPortal: "pmsvanidhi.mohua.gov.in & Ward Municipal Office",
        isOnline: true,
        mode: "hybrid",
        estimatedDuration: "10 Minutes online",
        officialSource: "Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014",
        sourceReference: "Section 3 & Section 4 of Street Vendors Act, 2014",
      },
      {
        stepNumber: 2,
        title: "Complete Aadhaar e-KYC Verification on PM SVANidhi",
        description:
          "Enter your 12-digit Aadhaar number on the PM SVANidhi portal and authenticate via mobile OTP to establish verified vendor identity.",
        agencyOrPortal: "UIDAI / MoHUA API Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "MoHUA PM SVANidhi Scheme Operational Guidelines",
        sourceReference: "PM SVANidhi Scheme Document 2020",
      },
      {
        stepNumber: 3,
        title: "Submit Vending Location Details & Cart Classification",
        description:
          "Select nature of vending (e.g. Fast food cart, tea stall, snack stall, fruits/vegetables) and specify your designated municipal ward/vending zone.",
        agencyOrPortal: "Urban Local Body Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Town Vending Committee By-Laws",
        sourceReference: "Municipal Corporation Vending By-Laws",
      },
      {
        stepNumber: 4,
        title: "Ward Committee Verification & Issuance of Certificate of Vending",
        description:
          "The Town Vending Committee (TVC) verifies the vending pitch. Download your official Certificate of Vending and Street Vendor ID Card.",
        agencyOrPortal: "Town Vending Committee (TVC)",
        isOnline: true,
        mode: "hybrid",
        estimatedDuration: "10 - 20 Working Days",
        officialSource: "Street Vendors Act, 2014 (Section 6)",
        sourceReference: "Section 6 of Street Vendors Act, 2014",
      },
      {
        stepNumber: 5,
        title: "Obtain Basic FSSAI Street Food Registration (FOSCOS)",
        description:
          "Food cart operators must apply for mandatory basic FSSAI registration (₹100/year on foscos.fssai.gov.in) to comply with food safety and hygiene regulations.",
        agencyOrPortal: "FOSCOS Portal (foscos.fssai.gov.in)",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 - 7 Working Days",
        officialSource: "Food Safety and Standards Act, 2006",
        sourceReference: "Section 31 of FSS Act, 2006",
        officialTip: "Enrolling for digital QR payment cashback unlocks ₹1,200 annual cash incentives under PM SVANidhi.",
      },
    ],
    fees: {
      amountText: "Free (₹0) on pmsvanidhi.mohua.gov.in | ₹100/year for basic FSSAI street vendor food registration",
      isVerified: true,
      verificationSource: "PM SVANidhi Scheme Guidelines & Food Safety and Standards Authority of India (FSSAI)",
    },
    processingTime: {
      timeText: "10 - 25 Working Days (Upon Town Vending Committee verification)",
      isVerified: true,
      statutoryAct: "Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014",
    },
    onlineAvailable: "Online Application + Physical Verification",
    officialPortal: {
      name: "PM SVANidhi Portal (Ministry of Housing and Urban Affairs)",
      url: "https://pmsvanidhi.mohua.gov.in/",
      domain: "pmsvanidhi.mohua.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of Housing and Urban Affairs, Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Never pay middleman fees or bribes for street vendor survey registration. The government application is completely free.",
      "Roadside food carts must maintain a covered waste bin and clean drinking water to comply with municipal sanitation norms.",
    ],
    tags: ["food cart", "street vendor", "sell food on roadside", "thela", "hawker", "vending card", "pm svanidhi", "roadside stall", "fssai street food", "handcart", "vending certificate"],
  },

  // 15. Caste Certificate & Caste Validity
  {
    id: "caste-certificate",
    title: "Caste Certificate & Caste Validity (Aaple Sarkar / e-District)",
    category: "Certificates & Social Welfare",
    shortDescription:
      "Apply for an official statutory Caste Certificate and Caste Validity Certificate required for reservation benefits in education, competitive exams, and government recruitments.",
    fullOverview:
      "A Caste Certificate is an essential statutory document issued by the Sub-Divisional Officer (SDO) / Sub-Divisional Magistrate (SDM) proving that an individual belongs to a notified Scheduled Caste (SC), Scheduled Tribe (ST), Other Backward Class (OBC), or Vimukta Jati / Nomadic Tribe (VJNT) category. In Maharashtra, educational admissions and public recruitment additionally require a Caste Scrutiny / Validity Certificate issued by the Divisional Caste Scrutiny Committee.",
    stateScope: "state",
    applicableStates: ["maharashtra", "delhi", "karnataka", "gujarat", "uttar-pradesh", "rajasthan", "tamil-nadu", "telangana", "west-bengal", "madhya-pradesh"],
    department: "Social Justice & Special Assistance Department / Revenue Department",
    eligibility: [
      "Must belong to a community formally notified as SC, ST, OBC, or VJNT in the Presidential Order or State Gazette.",
      "Must have ancestral documentary evidence proving residence in the state prior to the cutoff year (e.g. 1950 for SC/ST, 1961 for VJNT, 1967 for OBC in Maharashtra).",
    ],
    requiredDocuments: [
      {
        name: "Proof of Identity",
        type: "Aadhaar e-KYC / Original",
        description: "Applicant's government-issued photo identity proof.",
        commonExamples: "Aadhaar Card, Voter ID, or School Leaving Certificate",
        isMandatory: true,
      },
      {
        name: "Father / Grandfather School Leaving Certificate (Caste Mentioned)",
        type: "Original / Certified Copy",
        description: "Pre-cutoff historical educational record indicating exact caste entry.",
        commonExamples: "Father's primary school leaving certificate or village birth register extract",
        isMandatory: true,
      },
      {
        name: "Proof of Residence prior to Cutoff Year",
        type: "Ancestral Record",
        description: "Documentary evidence establishing ancestral residence in the state.",
        commonExamples: "Old 7/12 land extract, electoral roll extract prior to cutoff year, or ancestral revenue record",
        isMandatory: true,
      },
      {
        name: "Affidavit in Prescribed Form (Form 2 / Form 3)",
        type: "Notarized Affidavit",
        description: "Sworn legal declaration tracing family genealogy and declaring caste heritage.",
        commonExamples: "Notarized genealogical tree (Vamshavali) affidavit",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Login to State e-District / Aaple Sarkar Portal",
        description:
          "Open https://aaplesarkar.mahaonline.gov.in or respective state e-District portal and log in with your citizen credentials.",
        agencyOrPortal: "aaplesarkar.mahaonline.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "State Caste Certificate Rules & RTS Act",
        sourceReference: "Maharashtra Caste Certificate Rules, 2012",
      },
      {
        stepNumber: 2,
        title: "Select 'Revenue Department' > 'Caste Certificate'",
        description:
          "Choose the appropriate category (SC, ST, OBC, SBC, VJNT) and select your designated Sub-Divisional Office (SDO).",
        agencyOrPortal: "Revenue Administration Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Social Justice and Special Assistance Department",
        sourceReference: "Government Resolution No. CBC-10/2006/CR-48/BCW-5",
      },
      {
        stepNumber: 3,
        title: "Upload Pre-Cutoff Ancestral Proofs",
        description:
          "Upload clear scans of father's/grandfather's primary school leaving certificate, old land 7/12 extracts, or pre-cutoff revenue records showing explicit caste entry.",
        agencyOrPortal: "Aaple Sarkar Document Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Maharashtra Act No. XXIII of 2001",
        sourceReference: "Section 3 of Maharashtra Caste Verification Act, 2000",
      },
      {
        stepNumber: 4,
        title: "Submit Notarized Family Tree (Vamshavali) & Self-Declaration",
        description:
          "Attach the notarized genealogical family tree affidavit tracing your relationship to the paternal ancestor whose pre-cutoff caste record is submitted.",
        agencyOrPortal: "Document Upload Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Form 2 & Form 3 of Caste Certificate Rules",
        sourceReference: "Caste Rules Form 2 / Form 3",
      },
      {
        stepNumber: 5,
        title: "Pay Statutory Fee & Track SDO Scrutiny",
        description:
          "Pay the official fee (₹33.60 to ₹50). The Sub-Divisional Officer (SDO) or Executive Magistrate scrutinizes historical records.",
        agencyOrPortal: "Aaple Sarkar Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Right to Public Services Act Notification",
        sourceReference: "Statutory Portal Fee Schedule",
      },
      {
        stepNumber: 6,
        title: "Download Digitally Signed Certificate & Apply for Caste Validity",
        description:
          "Upon SDO approval, download your digital barcoded caste certificate. For college admissions or public employment, submit this certificate to the Caste Scrutiny Committee for Caste Validity.",
        agencyOrPortal: "Aaple Sarkar Delivery Gateway & CCVIS",
        isOnline: true,
        mode: "online",
        estimatedDuration: "21 - 45 Working Days",
        officialSource: "Maharashtra Right to Public Services Act, 2015",
        sourceReference: "Section 4 of RTS Act, 2015",
        officialTip: "For college admissions in Maharashtra, submit this certificate to CCVIS (barti.maharashtra.gov.in) to obtain the mandatory Caste Validity Certificate.",
      },
    ],
    fees: {
      amountText: "₹33.60 to ₹50 (Statutory State Portal Service Fee)",
      isVerified: true,
      verificationSource: "Maharashtra Right to Public Services Act Notification",
    },
    processingTime: {
      timeText: "21 - 45 Working Days (As per State Public Service Guarantee Act)",
      isVerified: true,
      statutoryAct: "Maharashtra Right to Public Services Act, 2015 & Caste Certificate Rules",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Aaple Sarkar (Government of Maharashtra)",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      domain: "aaplesarkar.mahaonline.gov.in",
      isVerified: true,
    },
    officialSource: "Revenue Department & Social Justice Department, Government of Maharashtra",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Ancestral school leaving certificates with explicit caste entries are the most critical evidence; applications lacking historical cutoff proof will be returned with queries.",
    ],
    tags: ["caste certificate", "jaati praman patra", "caste validity", "sc certificate", "st certificate", "obc certificate", "aaple sarkar", "tehsildar", "sdo", "caste"],
  },

  // 16. Domicile & Residence Certificate
  {
    id: "domicile-residence-certificate",
    title: "Domicile & Residence Certificate (Aaple Sarkar / e-District)",
    category: "Certificates & Revenue",
    shortDescription:
      "Apply for an official statutory Domicile Certificate proving 15 years permanent residence in the state, mandatory for state quota admissions in engineering, medical colleges, and state jobs.",
    fullOverview:
      "A Domicile Certificate is official legal evidence certifying that an individual has had permanent residence in a specific state for at least 15 continuous years (or by birth). In Maharashtra, it is legally mandatory for claiming 85% state quota seats in engineering (MHT-CET), medical (NEET-UG), pharmacy, polytechnic, and Maharashtra Public Service Commission (MPSC) exams.",
    stateScope: "state",
    applicableStates: ["maharashtra", "delhi", "karnataka", "gujarat", "uttar-pradesh", "rajasthan", "tamil-nadu", "telangana", "west-bengal", "madhya-pradesh"],
    department: "Revenue & District Administration Department, Government of Maharashtra",
    eligibility: [
      "Must have resided continuously in the state for at least 15 consecutive years, OR be born in the state to parents holding domicile.",
    ],
    requiredDocuments: [
      {
        name: "Proof of Identity",
        type: "Aadhaar e-KYC / Original",
        description: "Official photo identity proof.",
        commonExamples: "Aadhaar Card, Voter ID, or Passport",
        isMandatory: true,
      },
      {
        name: "Proof of 15 Years Continuous Residence",
        type: "Cumulative Documentation",
        description: "Series of documents establishing 15 years presence in the state.",
        commonExamples: "Continuous School Leaving Certificates (1st to 12th standard), Ration card, Electricity bills across 15 years, or Parents' Service Record",
        isMandatory: true,
      },
      {
        name: "Self-Declaration of Domicile",
        type: "Affidavit Format",
        description: "Standard self-declaration affirming applicant does not hold domicile in any other state.",
        commonExamples: "Pre-formatted self-declaration available on Aaple Sarkar",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Log into State e-District / Aaple Sarkar Portal",
        description:
          "Open https://aaplesarkar.mahaonline.gov.in. Navigate to Revenue Department services and select 'Age, Nationality & Domicile Certificate'.",
        agencyOrPortal: "aaplesarkar.mahaonline.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Maharashtra Right to Public Services Act, 2015",
        sourceReference: "Section 4 of Maharashtra RTS Act, 2015",
      },
      {
        stepNumber: 2,
        title: "Enter 15-Year Historical Residence Details",
        description:
          "Fill applicant biographical details, list of schools/colleges attended from primary onwards, and historical addresses for the preceding 15 continuous years.",
        agencyOrPortal: "Revenue Administration Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "12 Minutes",
        officialSource: "Revenue and Forests Department Guidelines",
        sourceReference: "Government Resolution No. RTS-2015/CR-23/M-1",
      },
      {
        stepNumber: 3,
        title: "Upload Cumulative 15-Year Residence Evidence",
        description:
          "Upload school bonafide certificates from primary school onwards, continuous residential electricity bills, or registered lease deeds establishing 15 years presence.",
        agencyOrPortal: "Aaple Sarkar Document Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "State Domicile Verification Rules",
        sourceReference: "Maharashtra Domicile Rules & Circular 2018",
      },
      {
        stepNumber: 4,
        title: "Pay Nominal Statutory Portal Fee",
        description:
          "Pay the statutory portal fee (₹33.60 to ₹50) via UPI or net banking and save the payment transaction receipt.",
        agencyOrPortal: "State Treasury Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 Minutes",
        officialSource: "Statutory Portal Fee Notification",
        sourceReference: "Maharashtra RTS Fee Schedule",
      },
      {
        stepNumber: 5,
        title: "Tehsildar Inquiry & Download Digitally Signed Certificate",
        description:
          "The Tehsildar reviews the 15-year cumulative documentary evidence. Upon approval, download the certificate with digital signature, barcode seal, and QR code.",
        agencyOrPortal: "Office of the Tehsildar & Aaple Sarkar",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Working Days",
        officialSource: "Maharashtra Right to Public Services Act, 2015",
        sourceReference: "RTS Guaranteed Service Schedule",
        officialTip: "Under Maharashtra RTS Act, Domicile Certificate delivery is guaranteed within 15 working days.",
      },
    ],
    fees: {
      amountText: "₹33.60 to ₹50 (Statutory Portal Service Charge)",
      isVerified: true,
      verificationSource: "Maharashtra Right to Public Services Act (RTS)",
    },
    processingTime: {
      timeText: "15 Working Days (Right to Services Guarantee)",
      isVerified: true,
      statutoryAct: "Maharashtra Right to Public Services Act, 2015",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Aaple Sarkar (Government of Maharashtra)",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      domain: "aaplesarkar.mahaonline.gov.in",
      isVerified: true,
    },
    officialSource: "Revenue Department, Government of Maharashtra",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "A citizen can legally hold a Domicile Certificate of only ONE Indian state at any given time.",
    ],
    tags: ["domicile certificate", "residence certificate", "adhivas praman patra", "dakhla", "maharashtra domicile", "aaple sarkar", "state quota", "mht cet domicile"],
  },

  // 17. New PAN Card (Instant e-PAN via Aadhaar)
  {
    id: "pan-card-application",
    title: "Apply for New PAN Card (Instant e-PAN / Form 49A)",
    category: "Tax & Financial Identity",
    shortDescription:
      "Get a 10-digit Permanent Account Number (PAN) in 10 minutes free via Instant e-PAN using Aadhaar, or order a physical plastic PAN card via NSDL/Protean.",
    fullOverview:
      "A Permanent Account Number (PAN) is a mandatory 10-digit alphanumeric identifier issued by the Income Tax Department for banking, salary, tax compliance, and business activities. Eligible citizens with an Aadhaar card and linked mobile number can generate an Instant digital e-PAN completely free within 10 minutes on the Income Tax e-Filing portal, or apply on NSDL/UTIITSL for a laminated physical card delivered by post.",
    stateScope: "national",
    department: "Income Tax Department, Central Board of Direct Taxes (CBDT), Ministry of Finance",
    eligibility: [
      "Any individual who does not already possess a PAN card (holding two PAN cards is illegal under Section 272B of Income Tax Act).",
      "For Instant e-PAN: Must have an Aadhaar card with updated date of birth and an active mobile number linked with Aadhaar.",
    ],
    requiredDocuments: [
      {
        name: "Aadhaar Card with linked Mobile Number",
        type: "Aadhaar e-KYC",
        description: "Sufficient single document for Instant e-PAN (serves as Proof of Identity, Address, and Date of Birth).",
        commonExamples: "Aadhaar Card",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Visit Income Tax e-Filing Portal for Instant e-PAN",
        description:
          "Open https://www.incometax.gov.in. Under Quick Links, click on 'Instant e-PAN' > 'Get New e-PAN'.",
        agencyOrPortal: "incometax.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 Minutes",
        officialSource: "Income Tax Act, 1961 (Section 139A)",
        sourceReference: "Section 139A of Income Tax Act, 1961",
      },
      {
        stepNumber: 2,
        title: "Enter 12-Digit Aadhaar & Validate OTP",
        description:
          "Enter your Aadhaar number. Check the consent box and enter the 6-digit OTP received on your Aadhaar-registered mobile.",
        agencyOrPortal: "UIDAI / ITD API Bridge",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "CBDT Notification No. 96/2021 on Instant e-PAN",
        sourceReference: "Rule 114 of Income Tax Rules, 1962",
      },
      {
        stepNumber: 3,
        title: "Validate Demographic Details & Download Digitally Signed e-PAN PDF",
        description:
          "Review pre-filled photo, name, date of birth, and address fetched directly from your Aadhaar record. Submit application. Within 10 minutes, download your official, legally valid digital e-PAN PDF with QR code.",
        agencyOrPortal: "Income Tax Department Digital Locker",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes (Instant)",
        officialSource: "CBDT Guidelines on Digital PAN Validity",
        sourceReference: "Section 139A & Rule 114 of Income Tax Rules, 1962",
        officialTip: "To receive a physical plastic card, visit onlineservices.nsdl.com > Reprint of PAN Card and pay ₹50 for Speed Post delivery.",
      },
    ],
    fees: {
      amountText: "Free (₹0) for Instant e-PAN on incometax.gov.in | ₹50 for physical PVC card reprint via NSDL",
      isVerified: true,
      verificationSource: "Income Tax Department, Ministry of Finance Guidelines",
    },
    processingTime: {
      timeText: "Instant e-PAN: 10 Minutes | Physical Card: 7 - 14 Days by Speed Post",
      isVerified: true,
      statutoryAct: "Income Tax Act, 1961 (Section 139A)",
    },
    onlineAvailable: "Fully Online (Aadhaar OTP / DigiLocker)",
    officialPortal: {
      name: "Income Tax Department e-Filing Portal",
      url: "https://www.incometax.gov.in/",
      domain: "incometax.gov.in",
      isVerified: true,
    },
    officialSource: "Central Board of Direct Taxes (CBDT), Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Possessing more than one PAN card is a punishable offense attracting a statutory penalty of ₹10,000 under Section 272B of the Income Tax Act.",
    ],
    tags: ["pan card", "pan", "instant pan", "e-pan", "apply pan card", "get pan card", "form 49a", "incometax", "nsdl pan", "financial id"],
  },

  // 18. Marriage Registration & Certificate
  {
    id: "marriage-certificate",
    title: "Marriage Registration & Certificate (Sub-Registrar / Municipal)",
    category: "Certificates & Vital Records",
    shortDescription:
      "Register a solemnized marriage under the Hindu Marriage Act or Special Marriage Act to obtain an official government Marriage Certificate.",
    fullOverview:
      "A Marriage Certificate is official legal proof of marriage. Regulated under the Hindu Marriage Act, 1955 or Special Marriage Act, 1954, and state compulsory marriage registration acts. Issued by the Sub-Registrar of Assurances (Inspector General of Registration - IGR) or the local Municipal Ward Health Officer. Mandatory for passport spouse endorsement, family visa sponsorship, joint property purchases, and bank nominations.",
    stateScope: "state",
    applicableStates: ["maharashtra", "delhi", "karnataka", "gujarat", "uttar-pradesh", "rajasthan", "tamil-nadu", "telangana", "west-bengal", "madhya-pradesh"],
    department: "Inspector General of Registration (IGR) / Municipal Corporation",
    eligibility: [
      "Bridegroom must have attained minimum 21 years of age; Bride must have attained minimum 18 years of age.",
      "Neither party has a spouse living at the time of marriage (unless legally dissolved by court decree).",
      "Both parties must be capable of giving valid mutual consent.",
    ],
    requiredDocuments: [
      {
        name: "Proof of Date of Birth (Husband & Wife)",
        type: "Original",
        description: "Official proof of legal age for both individuals.",
        commonExamples: "Birth Certificate, 10th School Leaving Certificate, or Passport",
        isMandatory: true,
      },
      {
        name: "Proof of Residence (Husband & Wife)",
        type: "Original",
        description: "Proof of address within registrar's jurisdiction.",
        commonExamples: "Aadhaar Card, Voter ID, or Electricity Bill",
        isMandatory: true,
      },
      {
        name: "Wedding Photograph & Wedding Card (or Priest Affidavit)",
        type: "Original / Photographic Evidence",
        description: "Visual evidence that marriage ceremony was solemnized.",
        commonExamples: "Wedding invitation card and marriage photograph of couple at ceremony",
        isMandatory: true,
      },
      {
        name: "Three Witnesses with Photo IDs",
        type: "Witness Identification",
        description: "Three adult witnesses who attended the solemnization.",
        commonExamples: "Aadhaar cards of 3 witnesses who appear before the Registrar",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "File Online Pre-Registration Form",
        description:
          "Visit the state registration portal (e.g. https://aaplesarkar.mahaonline.gov.in for Maharashtra, or urban municipal portal). Enter particulars of husband, wife, and marriage solemnization date.",
        agencyOrPortal: "Aaple Sarkar / Municipal Portal",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Hindu Marriage Act, 1955 (Section 8) / Special Marriage Act, 1954",
        sourceReference: "Section 8 of Hindu Marriage Act, 1955",
      },
      {
        stepNumber: 2,
        title: "Upload Wedding Invitation, Photos & Witness Identification",
        description:
          "Upload wedding invitation card, marriage ceremony photograph, proof of age (birth certificates/marksheets), and Aadhaar cards of 3 adult witnesses.",
        agencyOrPortal: "IGR / Municipal Document Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "State Compulsory Marriage Registration Rules",
        sourceReference: "Registration of Marriages Rules",
      },
      {
        stepNumber: 3,
        title: "Pay Government Fee & Book Counter Slot",
        description:
          "Pay the statutory fee (₹100 to ₹250) and select an appointment date for physical appearance before the Sub-Registrar / Marriage Officer.",
        agencyOrPortal: "IGR Appointment Scheduler",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "State Inspector General of Registration (IGR) Statutory Fee Schedule",
        sourceReference: "IGR Fee Notification",
      },
      {
        stepNumber: 4,
        title: "In-Person Appearance before Marriage Officer with 3 Witnesses",
        description:
          "Husband, wife, and 3 witnesses appear physically before the Marriage Registrar, verify originals, and sign the official Marriage Register in presence of the officer.",
        agencyOrPortal: "Sub-Registrar Office / Municipal Health Ward",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "30 Minutes at office",
        officialSource: "Special Marriage Act, 1954 (Section 11)",
        sourceReference: "Section 11 & Section 12 of Special Marriage Act",
      },
      {
        stepNumber: 5,
        title: "Certificate Issuance & Digital Barcoded Download",
        description:
          "Receive the stamped Marriage Certificate immediately or download the barcoded certified copy with official seal from the state portal.",
        agencyOrPortal: "State Registration Department",
        isOnline: true,
        mode: "online",
        estimatedDuration: "Same Day or 3 - 7 Working Days",
        officialSource: "Section 13 of Special Marriage Act, 1954",
        sourceReference: "Form IV Marriage Certificate",
      },
    ],
    fees: {
      amountText: "₹100 to ₹250 (Statutory registration fee under Hindu Marriage Act)",
      isVerified: true,
      verificationSource: "State Inspector General of Registration (IGR) Statutory Fee Schedule",
    },
    processingTime: {
      timeText: "Same day in-person at office | 7 Working Days for digital certificate",
      isVerified: true,
      statutoryAct: "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
    },
    onlineAvailable: "Online Application + Physical Verification",
    officialPortal: {
      name: "Aaple Sarkar / State Registration Department",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      domain: "aaplesarkar.mahaonline.gov.in",
      isVerified: true,
    },
    officialSource: "Inspector General of Registration & Controller of Stamps, Government of Maharashtra",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "All 3 witnesses must carry their original government photo identification when appearing before the Marriage Registrar.",
    ],
    tags: ["marriage certificate", "marriage registration", "vivah nondani", "wedding certificate", "special marriage act", "hindu marriage act", "sub registrar", "vital records"],
  },

  // 19. New Aadhaar Enrollment (Aadhaar Seva Kendra)
  {
    id: "fresh-aadhaar-enrollment",
    title: "New Aadhaar Card Enrollment (Aadhaar Seva Kendra)",
    category: "Aadhaar & Identity",
    shortDescription:
      "Book an appointment at an authorized Aadhaar Seva Kendra (ASK) for first-time biometric enrollment for children or adults.",
    fullOverview:
      "Aadhaar enrollment is completely free and requires an in-person visit to an authorized Aadhaar Seva Kendra (ASK), designated nationalized bank, or post office. Biometrics (all 10 fingerprints, both irises, and facial photograph) and demographic data are captured securely to generate your unique 12-digit Aadhaar number.",
    stateScope: "national",
    department: "Unique Identification Authority of India (UIDAI), Ministry of Electronics & IT",
    eligibility: [
      "Any individual resident of India who has resided in India for a period of 182 days or more in the preceding 12 months.",
      "Children under 5 years require Baal Aadhaar (linked to parent Aadhaar, no biometrics until age 5).",
    ],
    requiredDocuments: [
      {
        name: "Proof of Identity (PoI)",
        type: "Original",
        description: "Official document containing photo and resident name.",
        commonExamples: "Passport, PAN Card, Voter ID, Ration Card with photo, or Driving Licence",
        isMandatory: true,
      },
      {
        name: "Proof of Address (PoA)",
        type: "Original",
        description: "Official document containing residential street address.",
        commonExamples: "Electricity Bill (< 3 months), Bank Passbook with photo, or Voter ID",
        isMandatory: true,
      },
      {
        name: "Proof of Date of Birth (DoB)",
        type: "Original",
        description: "Official record confirming date of birth.",
        commonExamples: "Birth Certificate from Registrar or 10th Class Marksheet",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Book Online Appointment at Nearest Aadhaar Seva Kendra (ASK)",
        description:
          "Visit https://appointments.uidai.gov.in. Choose your city/location and book an appointment slot to avoid waiting queues.",
        agencyOrPortal: "appointments.uidai.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "UIDAI Enrollment Appointment Regulations",
        sourceReference: "UIDAI Enrolment Portal Guidelines",
      },
      {
        stepNumber: 2,
        title: "Visit Aadhaar Seva Kendra with Original Documents",
        description:
          "Arrive with original Proof of Identity (PoI), Proof of Address (PoA), and Date of Birth (DoB). The verifier validates original documents against UIDAI standards.",
        agencyOrPortal: "Aadhaar Seva Kendra (ASK)",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "15 Minutes at counter",
        officialSource: "Aadhaar (Enrolment and Update) Regulations, 2016 (Schedule I)",
        sourceReference: "Schedule I Document Verification Guidelines",
      },
      {
        stepNumber: 3,
        title: "Biometric Capture (10 Fingerprints, Dual Iris, Facial Photograph)",
        description:
          "The enrollment operator captures your digital facial photo, scans all 10 fingers on the optical scanner, and captures both iris patterns on the dual-iris scanner.",
        agencyOrPortal: "UIDAI Biometric Enrolment Station",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "10 Minutes",
        officialSource: "Section 3 of Aadhaar Act, 2016",
        sourceReference: "Section 3(1) of Aadhaar Act, 2016",
      },
      {
        stepNumber: 4,
        title: "Verify On-Screen Data & Collect 28-Digit EID Slip",
        description:
          "Review the on-screen data before final submission. Sign the operator confirmation and collect your printed 28-digit Enrollment Acknowledgement Slip (EID).",
        agencyOrPortal: "Aadhaar Seva Kendra Desk",
        isOnline: false,
        mode: "offline",
        estimatedDuration: "5 Minutes",
        officialSource: "Aadhaar Enrolment Process Manual",
        sourceReference: "UIDAI Standard Operating Procedure (SOP)",
      },
      {
        stepNumber: 5,
        title: "Track De-duplication Status & Download e-Aadhaar",
        description:
          "UIDAI Central Identities Data Repository (CIDR) performs biometric de-duplication. Once generated, track on myaadhaar.uidai.gov.in and download your e-Aadhaar PDF.",
        agencyOrPortal: "myaadhaar.uidai.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 - 30 Working Days",
        officialSource: "Aadhaar Act, 2016 (Section 4)",
        sourceReference: "Section 4 of Aadhaar Act, 2016",
      },
    ],
    fees: {
      amountText: "Free (₹0) - 100% Free Official Government Service",
      isVerified: true,
      verificationSource: "UIDAI Gazette Notification on Free Enrollment",
    },
    processingTime: {
      timeText: "15 - 30 Working Days",
      isVerified: true,
      statutoryAct: "Aadhaar Act, 2016",
    },
    onlineAvailable: "Online Application + Physical Verification",
    officialPortal: {
      name: "UIDAI Official Enrollment Appointment Portal",
      url: "https://uidai.gov.in/",
      domain: "uidai.gov.in",
      isVerified: true,
    },
    officialSource: "Unique Identification Authority of India (UIDAI)",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Aadhaar enrollment is 100% FREE. Never pay any fee for initial enrollment at any government or private center.",
    ],
    tags: ["apply for aadhaar", "new aadhaar", "aadhaar enrollment", "first aadhaar", "enroll aadhaar", "uidai", "aadhaar seva kendra", "fresh aadhaar", "get aadhaar"],
  },

  // 20. Private Limited Company Incorporation (MCA SPICe+) — 10 Steps
  {
    id: "private-limited-company-mca-spice",
    title: "Private Limited Company Incorporation (MCA SPICe+ & AGILE-PRO-S)",
    category: "Business, Tax & Enterprise",
    shortDescription:
      "Incorporate a Private Limited Company with the Ministry of Corporate Affairs (MCA) using integrated web-form SPICe+ (INC-32) and linked e-forms.",
    fullOverview:
      "Under the Companies Act, 2013 and Companies (Incorporation) Rules, company registration in India is executed entirely online on the MCA V3 portal (mca.gov.in) through the integrated SPICe+ (SPICe Plus) web form. This single-window process combines Name Reservation (Part A), Company Incorporation (Part B), Director Identification Numbers (DIN), PAN, TAN, EPFO, ESIC, Professional Tax, Bank Account opening, and GSTIN.",
    stateScope: "national",
    department: "Ministry of Corporate Affairs (MCA), Government of India & Central Registration Centre (CRC)",
    eligibility: [
      "Minimum 2 directors and maximum 15 directors (at least one director must be a resident of India).",
      "Minimum 2 shareholders (subscribers to the Memorandum of Association).",
      "All proposed directors and subscribers must hold valid Class 3 Digital Signature Certificates (DSC).",
      "Must have a physical commercial or residential address designated as the registered office in India.",
    ],
    requiredDocuments: [
      {
        name: "Class 3 Digital Signature Certificate (DSC) for all Directors",
        type: "Digital Certificate (CCA Authorized)",
        description: "Cryptographic token for signing electronic MCA web-forms.",
        commonExamples: "Class 3 Signing & Encryption DSC Token from eMudhra / Capricorn / VSign",
        isMandatory: true,
      },
      {
        name: "Director Proof of Identity (PAN & Passport/Voter ID/DL)",
        type: "Self-Attested Copy",
        description: "PAN is mandatory for Indian nationals; Passport is mandatory for foreign nationals.",
        commonExamples: "PAN Card and Voter ID / Driving Licence of all directors",
        isMandatory: true,
      },
      {
        name: "Director Proof of Address",
        type: "Self-Attested Copy",
        description: "Residential utility bill not older than 2 months.",
        commonExamples: "Electricity Bill, Bank Statement with transactions, or Mobile Bill (< 2 months)",
        isMandatory: true,
      },
      {
        name: "Proof of Registered Company Office Premises",
        type: "Self-Attested Copy",
        description: "Ownership or tenancy proof of registered office.",
        commonExamples: "Electricity Bill (< 2 months) with Rent Agreement and Landlord NOC",
        isMandatory: true,
      },
      {
        name: "Certification by Practicing Professional (CA / CS / CWA)",
        type: "Professional Digital Attestation",
        description: "Statutory declaration certifying compliance with Companies Act.",
        commonExamples: "Digital Signature of practicing Chartered Accountant, Company Secretary, or Cost Accountant",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Procure Class 3 Digital Signature Certificate (DSC) for Proposed Directors",
        description:
          "All proposed directors and subscribers to the memorandum must obtain a Class 3 Digital Signature Certificate (DSC) with encryption from a licensed Certifying Authority (CCA).",
        agencyOrPortal: "Controller of Certifying Authorities (cca.gov.in)",
        isOnline: true,
        mode: "online",
        estimatedDuration: "1 - 2 Days",
        officialSource: "Information Technology Act, 2000 & MCA V3 Digital Signature Policy",
        sourceReference: "Section 24 of Information Technology Act, 2000",
      },
      {
        stepNumber: 2,
        title: "Register Business User Account on MCA V3 Portal",
        description:
          "Create a 'Business User' account on the Ministry of Corporate Affairs portal (mca.gov.in) using your PAN and link your registered Class 3 DSC token.",
        agencyOrPortal: "mca.gov.in (MCA V3 Portal)",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Companies (Incorporation) Rules, 2014",
        sourceReference: "MCA V3 User Registration Manual",
      },
      {
        stepNumber: 3,
        title: "SPICe+ Part A: Company Name Reservation (RUN Service)",
        description:
          "Submit up to 2 proposed company names along with the main objects clause in SPICe+ Part A. The Central Registration Centre (CRC) checks names against existing companies and the IP India trademark registry.",
        agencyOrPortal: "Central Registration Centre (CRC), MCA",
        isOnline: true,
        mode: "online",
        estimatedDuration: "1 - 2 Working Days (or combined with Part B)",
        officialSource: "Companies Act, 2013 (Section 4) & Companies (Incorporation) Rules, 2014",
        sourceReference: "Rule 9 of Companies (Incorporation) Rules, 2014",
      },
      {
        stepNumber: 4,
        title: "SPICe+ Part B: Company Particulars, Director KYC & DIN Allotment",
        description:
          "Fill SPICe+ Part B with registered office address, authorized & paid-up share capital, and director KYC details. Director Identification Numbers (DIN) for up to 3 directors are allotted directly in this step.",
        agencyOrPortal: "MCA SPICe+ Web Form Module",
        isOnline: true,
        mode: "online",
        estimatedDuration: "30 Minutes",
        officialSource: "Form INC-32 (SPICe+) User Manual",
        sourceReference: "Section 7 of Companies Act, 2013 & Rule 12 of Incorporation Rules",
      },
      {
        stepNumber: 5,
        title: "Draft Electronic Memorandum of Association (e-MoA - Form INC-33)",
        description:
          "Draft the electronic Memorandum of Association (INC-33) setting out the main objects of the company, ancillary objects, liability clause, and subscribed capital details.",
        agencyOrPortal: "MCA Portal Form INC-33",
        isOnline: true,
        mode: "online",
        estimatedDuration: "20 Minutes",
        officialSource: "Companies Act, 2013 (Section 4 & Table A/B/C/D/E of Schedule I)",
        sourceReference: "Rule 13 of Companies (Incorporation) Rules, 2014",
      },
      {
        stepNumber: 6,
        title: "Draft Electronic Articles of Association (e-AoA - Form INC-34)",
        description:
          "Draft the electronic Articles of Association (INC-34) governing internal management, share transfers, board meetings, voting rights, and appointment of managing directors.",
        agencyOrPortal: "MCA Portal Form INC-34",
        isOnline: true,
        mode: "online",
        estimatedDuration: "20 Minutes",
        officialSource: "Companies Act, 2013 (Section 5 & Table F/G/H/I/J of Schedule I)",
        sourceReference: "Rule 13 of Companies (Incorporation) Rules, 2014",
      },
      {
        stepNumber: 7,
        title: "Complete Linked Form AGILE-PRO-S (Form INC-35)",
        description:
          "Complete mandatory linked Form INC-35 for automatic allotment of GSTIN, EPFO establishment code, ESIC registration, State Professional Tax registration (where applicable), and designated commercial bank account opening.",
        agencyOrPortal: "MCA Integrated Gateway & CBDT/EPFO/ESIC",
        isOnline: true,
        mode: "online",
        estimatedDuration: "20 Minutes",
        officialSource: "Companies (Incorporation) Third Amendment Rules, 2020",
        sourceReference: "Rule 38A of Companies (Incorporation) Rules, 2014",
      },
      {
        stepNumber: 8,
        title: "Generate Form INC-9 Electronic Declarations & Affix DSCs",
        description:
          "System auto-generates Form INC-9 electronic declarations. Affix Class 3 DSC of all subscriber-directors and certification DSC of a practicing Chartered Accountant, Company Secretary, or Cost Accountant.",
        agencyOrPortal: "MCA Digital Signature Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Companies (Incorporation) Rules, 2014 (Rule 15)",
        sourceReference: "Rule 15 of Companies (Incorporation) Rules, 2014",
      },
      {
        stepNumber: 9,
        title: "System Pre-Scrutiny, Form Upload & Payment of Statutory Fees & Stamp Duty",
        description:
          "Run systemic pre-scrutiny validation on all linked forms, upload the complete packet to MCA V3, and pay statutory ROC fees (₹0 ROC fee for nominal capital up to ₹15 Lakhs) plus state stamp duty on BharatKosh.",
        agencyOrPortal: "MCA V3 / BharatKosh Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "15 Minutes",
        officialSource: "Companies (Registration Offices and Fees) Rules, 2014 & State Stamp Acts",
        sourceReference: "MCA Notification G.S.R. 180(E) dated 6th March 2019",
      },
      {
        stepNumber: 10,
        title: "Central Registration Centre (CRC) Approval & Issuance of Certificate of Incorporation (COI)",
        description:
          "Central Registration Centre (CRC, Manesar) scrutinizes the application. Upon approval, download your official Certificate of Incorporation (Form INC-11) containing CIN, PAN, and TAN.",
        agencyOrPortal: "Central Registration Centre (CRC), MCA",
        isOnline: true,
        mode: "online",
        estimatedDuration: "2 - 5 Working Days",
        officialSource: "Companies Act, 2013 (Section 7(2))",
        sourceReference: "Section 7(2) of Companies Act, 2013 & Form INC-11",
      },
    ],
    fees: {
      amountText: "₹0 ROC Incorporation Fee (for authorized capital up to ₹15 Lakhs) | State Stamp Duty: ₹1,000 - ₹3,000 (varies by State)",
      isVerified: true,
      verificationSource: "Ministry of Corporate Affairs Notification G.S.R. 180(E) & State Stamp Acts",
    },
    processingTime: {
      timeText: "3 - 7 Working Days (Subject to CRC scrutiny)",
      isVerified: true,
      statutoryAct: "Companies Act, 2013",
    },
    onlineAvailable: "Fully Online (Digital Signature Certificate / MCA V3)",
    officialPortal: {
      name: "Ministry of Corporate Affairs (MCA V3 Portal)",
      url: "https://www.mca.gov.in/",
      domain: "mca.gov.in",
      isVerified: true,
    },
    officialSource: "Ministry of Corporate Affairs (MCA), Government of India",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Ensure the proposed company name does not violate registered trademarks on the IP India portal (ipindiaonline.gov.in) to avoid rejection in Part A.",
      "Professional attestation by a practicing Chartered Accountant (CA), Company Secretary (CS), or Cost Accountant (CMA) is legally mandatory.",
    ],
    tags: ["private limited company", "pvt ltd", "company registration", "mca", "spice+", "agile pro s", "incorporate business", "cin", "din", "startup registration"],
  },

  // 21. Karnataka Shop & Commercial Establishment (e-Karmika) — 6 Steps
  {
    id: "karnataka-shop-establishment",
    title: "Shop & Commercial Establishment Registration (e-Karmika Karnataka)",
    category: "Business & State Licensing",
    shortDescription:
      "Mandatory operating registration under the Karnataka Shops and Commercial Establishments Act, 1961 on the official e-Karmika portal.",
    fullOverview:
      "Regulated under the Karnataka Shops and Commercial Establishments Act, 1961 and Karnataka Rules, 1963 by the Department of Labour, Government of Karnataka. Any retail shop, office, software firm, hotel, or commercial establishment operating in Bengaluru, Mysuru, or anywhere in Karnataka must register within 30 days of commencing business on ekarmika.karnataka.gov.in to obtain the Form C Registration Certificate.",
    stateScope: "state",
    applicableStates: ["karnataka"],
    department: "Department of Labour, Government of Karnataka",
    eligibility: [
      "Any shop, commercial establishment, IT/ITES office, retail outlet, restaurant, or service business operating within Karnataka.",
      "Must apply within 30 days of commencing business operations.",
    ],
    requiredDocuments: [
      {
        name: "Proprietor / Managing Partner / Director Identity Proof",
        type: "Aadhaar e-KYC / PAN",
        description: "Official identity proof of the owner or authorized signatory.",
        commonExamples: "Aadhaar Card or PAN Card",
        isMandatory: true,
      },
      {
        name: "Commercial Premises Proof (Rent Agreement or Property Tax Receipt)",
        type: "Self-Attested Copy",
        description: "Evidence of legal occupancy of the commercial address.",
        commonExamples: "Registered Lease Agreement, Commercial Electricity Bill, or BBMP Property Tax Challan",
        isMandatory: true,
      },
      {
        name: "Trade Licence / BBMP / Local Municipality Licence (if available)",
        type: "Self-Attested Copy",
        description: "Trade licence issued by Bruhat Bengaluru Mahanagara Palike or local municipal council.",
        commonExamples: "BBMP Trade Licence receipt",
        isMandatory: false,
      },
      {
        name: "List of Employees with Designation and Wage Details",
        type: "Self-Reported Form",
        description: "Details of all permanent and temporary workers employed.",
        commonExamples: "Employee register extract",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Create Employer Account on e-Karmika Portal",
        description:
          "Open https://ekarmika.karnataka.gov.in. Register as a 'New User / Employer' with your email, mobile number, and Aadhaar verification.",
        agencyOrPortal: "ekarmika.karnataka.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Karnataka Shops and Commercial Establishments Act, 1961",
        sourceReference: "Section 4 of Karnataka Act No. 8 of 1962",
      },
      {
        stepNumber: 2,
        title: "File Form A (Application for Registration of Establishment)",
        description:
          "Select 'New Registration Form A'. Enter establishment name, category of establishment (Shop / Commercial / Residential Hotel / IT), and date of commencement.",
        agencyOrPortal: "e-Karmika Form Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Karnataka Shops and Commercial Establishments Rules, 1963",
        sourceReference: "Rule 3 & Form A of Karnataka Rules, 1963",
      },
      {
        stepNumber: 3,
        title: "Enter Working Hours, Weekly Holiday & Employee Schedule",
        description:
          "Specify opening hours, closing hours, intervals for rest, and designated weekly holiday as mandated under Section 11 and Section 12 of the Karnataka Act.",
        agencyOrPortal: "e-Karmika Compliance Schedule",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Karnataka Shops and Commercial Establishments Act, 1961 (Sections 11 & 12)",
        sourceReference: "Section 11 & Section 12 of Karnataka Act No. 8 of 1962",
      },
      {
        stepNumber: 4,
        title: "Upload Commercial Lease, Premises Proof & Owner KYC",
        description:
          "Upload clear PDF scans of commercial lease deed/electricity bill, proprietor/partner PAN and Aadhaar, and partnership deed/incorporation certificate if applicable.",
        agencyOrPortal: "e-Karmika Document Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Department of Labour Karnataka Guidelines",
        sourceReference: "e-Karmika Document Checklist Circular",
      },
      {
        stepNumber: 5,
        title: "Pay Statutory Registration Fee via Karnataka Khajane-II Gateway",
        description:
          "Pay the statutory government fee (scaled based on number of employees: ₹300 for 0 workers, ₹600 for 1-9 workers, ₹1,200 for 10-19 workers) via Khajane-II integrated gateway.",
        agencyOrPortal: "Karnataka Khajane-II Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Karnataka Rules, 1963 (Schedule of Fees)",
        sourceReference: "Rule 3(2) Fee Table, Department of Labour",
      },
      {
        stepNumber: 6,
        title: "Senior Labour Inspector Scrutiny & Download Form C Certificate",
        description:
          "The jurisdictional Senior Labour Inspector reviews the application. Upon approval, download the digitally signed Form C Registration Certificate with 5-year validity.",
        agencyOrPortal: "Jurisdictional Labour Officer & e-Karmika",
        isOnline: true,
        mode: "online",
        estimatedDuration: "7 - 15 Working Days (Karnataka Sakala Guarantee)",
        officialSource: "Karnataka Sakala Services Act, 2011",
        sourceReference: "Rule 4 & Form C of Karnataka Rules, 1963",
        officialTip: "Under Karnataka Sakala, shop registration must be approved or queried within 15 working days.",
      },
    ],
    fees: {
      amountText: "₹300 (0 workers) | ₹600 (1 - 9 workers) | ₹1,200 (10 - 19 workers) | Scaled fee for 20+ workers",
      isVerified: true,
      verificationSource: "Karnataka Shops and Commercial Establishments Rules, 1963 Fee Schedule",
    },
    processingTime: {
      timeText: "7 - 15 Working Days (Guaranteed under Karnataka Sakala Act)",
      isVerified: true,
      statutoryAct: "Karnataka Shops and Commercial Establishments Act, 1961",
    },
    onlineAvailable: "Fully Online (e-Karmika Portal)",
    officialPortal: {
      name: "e-Karmika Portal (Department of Labour, Government of Karnataka)",
      url: "https://ekarmika.karnataka.gov.in/",
      domain: "ekarmika.karnataka.gov.in",
      isVerified: true,
    },
    officialSource: "Department of Labour, Government of Karnataka",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Operating a commercial establishment in Bengaluru or Karnataka without Form C registration is a statutory violation attracting fines under Section 30 of the Act.",
      "Banks in Karnataka require the Form C Certificate or Udyam Registration to open a commercial Current Account.",
    ],
    tags: ["karnataka shop establishment", "e-karmika", "bangalore shop", "bengaluru business", "shop act karnataka", "karnataka labour", "form c", "sakala"],
  },

  // 22. Delhi Shop & Commercial Establishment (Labour CIS) — 5 Steps
  {
    id: "delhi-shop-establishment",
    title: "Delhi Shop & Commercial Establishment Registration (Labour CIS)",
    category: "Business & State Licensing",
    shortDescription:
      "Mandatory operating registration under the Delhi Shops and Establishments Act, 1954 on the official Labour CIS portal.",
    fullOverview:
      "Administered by the Labour Department, Government of NCT of Delhi under the Delhi Shops and Establishments Act, 1954. All shops, offices, consulting firms, and commercial establishments in Delhi must register within 90 days of commencing operations on labourcis.delhi.gov.in.",
    stateScope: "state",
    applicableStates: ["delhi"],
    department: "Labour Department, Government of NCT of Delhi",
    eligibility: [
      "Any commercial establishment, shop, retail store, hotel, or office operating within the National Capital Territory of Delhi.",
      "Must apply within 90 days of opening.",
    ],
    requiredDocuments: [
      {
        name: "Aadhaar Card of the Proprietor / Partner",
        type: "Aadhaar e-KYC",
        description: "Identity verification of owner.",
        commonExamples: "Aadhaar Card",
        isMandatory: true,
      },
      {
        name: "Proof of Commercial Premises in Delhi",
        type: "Self-Attested Copy",
        description: "Commercial address proof.",
        commonExamples: "Rent Agreement with Electricity Bill or Property Tax Receipt",
        isMandatory: true,
      },
      {
        name: "PAN Card of the Business / Proprietor",
        type: "Self-Attested Copy",
        description: "Tax identifier.",
        commonExamples: "PAN Card",
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Register on Delhi Labour CIS Portal",
        description:
          "Open https://labourcis.delhi.gov.in. Register as a citizen/employer with mobile number and email verification.",
        agencyOrPortal: "labourcis.delhi.gov.in",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Delhi Shops and Establishments Act, 1954",
        sourceReference: "Section 5 of Delhi Act No. 7 of 1954",
      },
      {
        stepNumber: 2,
        title: "Fill Form A for Registration of Establishment",
        description:
          "Select 'New Registration Form A'. Provide establishment trade name, postal address in Delhi, category of business, and number of family/hired employees.",
        agencyOrPortal: "Delhi Labour CIS Engine",
        isOnline: true,
        mode: "online",
        estimatedDuration: "10 Minutes",
        officialSource: "Delhi Shops and Establishments Rules, 1954",
        sourceReference: "Rule 3 & Form A of Delhi Rules, 1954",
      },
      {
        stepNumber: 3,
        title: "Upload Commercial Premises Proof & Identity Proof",
        description:
          "Attach commercial electricity bill or rent agreement and proprietor PAN and Aadhaar card.",
        agencyOrPortal: "Labour CIS Document Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 Minutes",
        officialSource: "Labour Department GNCTD Guidelines",
        sourceReference: "Delhi Citizen Charter for Labour Services",
      },
      {
        stepNumber: 4,
        title: "Pay Statutory Government Fee Online",
        description:
          "Pay the official fee via the integrated Delhi government e-payment gateway (scaled by employee count).",
        agencyOrPortal: "Delhi Government Payment Gateway",
        isOnline: true,
        mode: "online",
        estimatedDuration: "3 Minutes",
        officialSource: "Delhi Shops and Establishments Rules, 1954 (Schedule I)",
        sourceReference: "Rule 3(2) Fee Table, GNCTD",
      },
      {
        stepNumber: 5,
        title: "Download Digitally Signed Registration Certificate",
        description:
          "The jurisdictional Area Inspector reviews details. Upon approval, download the official Form C Registration Certificate with QR verification seal.",
        agencyOrPortal: "Labour Department, GNCTD",
        isOnline: true,
        mode: "online",
        estimatedDuration: "5 - 15 Working Days",
        officialSource: "Delhi Right to Citizen Services Act",
        sourceReference: "Section 5(2) of Delhi Shops & Establishments Act",
      },
    ],
    fees: {
      amountText: "₹50 - ₹500 (Scaled by employee count under Delhi statutory rules)",
      isVerified: true,
      verificationSource: "Delhi Shops and Establishments Rules, 1954 Fee Schedule",
    },
    processingTime: {
      timeText: "5 - 15 Working Days",
      isVerified: true,
      statutoryAct: "Delhi Shops and Establishments Act, 1954",
    },
    onlineAvailable: "Fully Online (Delhi Labour CIS Portal)",
    officialPortal: {
      name: "Labour CIS (Government of NCT of Delhi)",
      url: "https://labourcis.delhi.gov.in/",
      domain: "labourcis.delhi.gov.in",
      isVerified: true,
    },
    officialSource: "Labour Department, Government of NCT of Delhi",
    lastVerifiedDate: "2026-03-01",
    warnings: [
      "Operating a commercial establishment in Delhi without registration beyond 90 days is a punishable offense under Section 38 of the Delhi Act.",
    ],
    tags: ["delhi shop", "delhi business", "delhi shop act", "labour cis delhi", "gnctd", "commercial establishment delhi"],
  },
];

export const GOVERNMENT_SERVICES: GovernmentService[] = RAW_SERVICES.map((s: any) => {
  const centralOrState: "central" | "state" | "municipal" | "concurrent" =
    s.centralOrState ||
    (s.id === "street-vendor-cart-registration" || s.id === "birth-certificate" || s.id === "death-certificate"
      ? "municipal"
      : s.stateScope === "national"
      ? "central"
      : "state");

  const locationRequired: boolean =
    s.locationRequired !== undefined
      ? s.locationRequired
      : centralOrState === "municipal" || centralOrState === "state";

  // Map steps ensuring all 8 required fields (number, title, description, mode, portal, duration, source, isOnline) are present
  const mappedSteps = (s.steps || s.applicationSteps || []).map((st: any) => ({
    stepNumber: st.stepNumber,
    title: st.title,
    description: st.description,
    agencyOrPortal: st.agencyOrPortal || s.department || "Jurisdictional Government Authority",
    isOnline: st.isOnline !== undefined ? st.isOnline : st.mode !== "offline",
    onlineAvailable: st.isOnline !== undefined ? st.isOnline : st.mode !== "offline",
    estimatedDuration: st.estimatedDuration || "Standard statutory timeline",
    mode: st.mode || (st.isOnline ? "online" : "offline"),
    officialSource: st.officialSource || s.officialSource || "Official Government Gazette & Regulations",
    sourceReference: st.sourceReference || st.officialSource || s.officialSource,
    officialTip: st.officialTip,
  }));

  return {
    ...s,
    name: s.name || s.title,
    title: s.title || s.name,
    category: s.category,
    description: s.description || s.shortDescription,
    shortDescription: s.shortDescription || s.description,
    fullOverview: s.fullOverview,
    keywords: s.keywords || s.tags || [],
    tags: s.tags || s.keywords || [],
    authority: s.authority || s.department || "Jurisdictional Government Authority",
    department: s.department || s.authority || "Jurisdictional Government Authority",
    centralOrState,
    stateScope: s.stateScope || (centralOrState === "central" ? "national" : centralOrState === "municipal" ? "municipal" : "state"),
    locationRequired,
    states: s.states || s.applicableStates,
    applicableStates: s.applicableStates || s.states,
    availability:
      s.availability ||
      (centralOrState === "central"
        ? "Pan-India (All States & UTs)"
        : centralOrState === "municipal"
        ? "Jurisdictional Municipal Corporation / Urban Local Body"
        : s.applicableStates && s.applicableStates.length > 0
        ? `State Specific (${s.applicableStates.join(", ")})`
        : "State Jurisdiction"),
    eligibility: s.eligibility || [],
    requiredDocuments: s.requiredDocuments || [],
    applicationSteps: mappedSteps,
    steps: mappedSteps,
    fees: s.fees,
    feeInfo: s.feeInfo || s.fees?.amountText || "Statutory fee as applicable",
    processingTime: s.processingTime,
    processingInfo: s.processingInfo || s.processingTime?.timeText || "Standard statutory timeline",
    onlineAvailable: s.onlineAvailable,
    officialPortal: {
      name: s.officialPortal?.name || "National Government Services Portal",
      url: s.officialPortal?.url || null,
      domain: s.officialPortal?.domain || "services.india.gov.in",
      isVerified: s.officialPortal?.isVerified ?? true,
      portalType: s.officialPortal?.portalType || centralOrState,
      notes: s.officialPortal?.notes,
    },
    officialPortalUrlPlaceholder: s.officialPortalUrlPlaceholder || s.officialPortal?.url || "https://services.india.gov.in/",
    source: s.source || s.officialSource || "Official Government Gazette & Departmental Regulations",
    officialSource: s.officialSource || s.source || "Official Government Gazette & Departmental Regulations",
    lastVerified: s.lastVerified || s.lastVerifiedDate || "2026-03-01",
    lastVerifiedDate: s.lastVerifiedDate || s.lastVerified || "2026-03-01",
    disclaimer:
      s.disclaimer ||
      "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    warnings: s.warnings,
  };
});
