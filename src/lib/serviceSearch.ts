import { GovernmentService, SearchOutcome, ClarificationOption, ExtractedEntities, getLocalizedText } from "@/types/service";
import { GOVERNMENT_SERVICES } from "@/data/services";
import { IndianStateId } from "@/types/civic";

export type { ExtractedEntities };

// Known Indian States dictionary for intent recognition
export const STATE_SYNONYMS: Record<string, IndianStateId> = {
  maharashtra: "maharashtra",
  mumbai: "maharashtra",
  pune: "maharashtra",
  thane: "maharashtra",
  nagpur: "maharashtra",
  nashik: "maharashtra",
  delhi: "delhi",
  noida: "uttar-pradesh",
  karnataka: "karnataka",
  bangalore: "karnataka",
  bengaluru: "karnataka",
  gujarat: "gujarat",
  ahmedabad: "gujarat",
  surat: "gujarat",
  "tamil nadu": "tamil-nadu",
  chennai: "tamil-nadu",
  telangana: "telangana",
  hyderabad: "telangana",
  "west bengal": "west-bengal",
  kolkata: "west-bengal",
  rajasthan: "rajasthan",
  jaipur: "rajasthan",
  "uttar pradesh": "uttar-pradesh",
  up: "uttar-pradesh",
  lucknow: "uttar-pradesh",
  kanpur: "uttar-pradesh",
  "madhya pradesh": "madhya-pradesh",
  mp: "madhya-pradesh",
  indore: "madhya-pradesh",
  bhopal: "madhya-pradesh",
};


/**
 * Normalizes user text for intent extraction
 */
export function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts entities such as action, state, city, and purpose
 */
export function extractEntities(normalizedQuery: string): ExtractedEntities {
  const entities: ExtractedEntities = {};

  // Extract action
  if (/\b(renew|renewal)\b/.test(normalizedQuery)) {
    entities.actionType = "renew";
  } else if (/\b(update|change|correction|modify|shift)\b/.test(normalizedQuery)) {
    entities.actionType = "update";
  } else if (/\b(register|registration|start|open|form)\b/.test(normalizedQuery)) {
    entities.actionType = "register";
  } else if (/\b(apply|application|want to get|need|create)\b/.test(normalizedQuery)) {
    entities.actionType = "apply";
  } else if (/\b(transfer|name change)\b/.test(normalizedQuery)) {
    entities.actionType = "transfer";
  } else if (/\b(download|duplicate|copy)\b/.test(normalizedQuery)) {
    entities.actionType = "download";
  }

  // Extract State & City
  for (const [keyword, stateId] of Object.entries(STATE_SYNONYMS)) {
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    if (regex.test(normalizedQuery)) {
      entities.state = stateId;
      entities.locationSpecifiedInQuery = true;
      if ([
        "mumbai",
        "pune",
        "thane",
        "nagpur",
        "nashik",
        "bangalore",
        "bengaluru",
        "mysuru",
        "ahmedabad",
        "surat",
        "vadodara",
        "gandhinagar",
        "chennai",
        "hyderabad",
        "kolkata",
        "jaipur",
        "lucknow",
        "kanpur",
        "noida",
        "indore",
        "bhopal",
        "delhi"
      ].includes(keyword)) {
        entities.cityOrDistrict = keyword;
      }
      break;
    }
  }

  // Extract likely service type, applicant type & purpose
  if (/\b(food cart|street vendor|thela|hawker|roadside|sell food on roadside|handcart|tea stall|pm svanidhi|food stall|vending card|vending certificate)\b|ठेला|फूड कार्ट/i.test(normalizedQuery)) {
    entities.serviceType = "street_vendor_food_cart";
    entities.applicantType = "Street Food Vendor / Hawker";
    entities.purpose = "Municipal Vending Certificate & PM SVANidhi Credit";
  } else if (/\b(driving licence|driving license|driver license|driver licence|renew driving licence|renew my driving licence|learner|learning licence|rto test|sarathi|drive a car|drive a bike)\b|ड्राइविंग लाइसेंस|ड्राइविंग लाइसेन्स|लाइसेंस बनवाना/i.test(normalizedQuery)) {
    entities.serviceType = "driving_licence";
    entities.applicantType = "Driver / Citizen";
    entities.purpose = "Motor Driving Permit Authorization (Sarathi)";
  } else if (/\b(apply for (an? )?aadhaar|apply for aadhaar card|apply for an aadhaar card|apply aadhaar|new aadhaar|first aadhaar|fresh aadhaar|enroll aadhaar|aadhaar enrollment|get aadhaar)\b|आधार कार्ड|आधार|आधार पंजीकरण/i.test(normalizedQuery)) {
    entities.serviceType = "fresh_aadhaar_enrollment";
    entities.applicantType = "Resident Citizen";
    entities.purpose = "Initial Aadhaar 12-Digit Identity Enrollment";
  } else if (/\b(update aadhaar|aadhaar address|change aadhaar|myaadhaar|aadhaar card address|update address in aadhaar|change address)\b|आधार में पता|आधार अपडेट/i.test(normalizedQuery)) {
    entities.serviceType = "aadhaar_address_update";
    entities.applicantType = "Aadhaar Cardholder";
    entities.purpose = "Demographic Address Correction via UIDAI";
  } else if (/\b(birth certificate|janam praman|birth registration|child birth certificate|crs certificate)\b|जन्म प्रमाण पत्र|जन्म प्रमाण/i.test(normalizedQuery)) {
    entities.serviceType = "birth_certificate";
    entities.applicantType = "Parent / Citizen";
    entities.purpose = "Official Vital Record of Birth Registration";
  } else if (/\b(death certificate|death registration|mrityu praman|mccd|death proof|death record)\b|मृत्यु प्रमाण पत्र|मृत्यु प्रमाण/i.test(normalizedQuery)) {
    entities.serviceType = "death_certificate";
    entities.applicantType = "Legal Heir / Family Member";
    entities.purpose = "Official Vital Record of Death Registration";
  } else if (/\b(caste certificate|caste validity|jaati praman|sc certificate|st certificate|obc certificate|vjnt certificate)\b|जाति प्रमाण पत्र|जाति प्रमाण/i.test(normalizedQuery)) {
    entities.serviceType = "caste_certificate";
    entities.applicantType = "Reserved Category Applicant";
    entities.purpose = "Statutory Social Category & Quota Reservation";
  } else if (/\b(domicile certificate|domicile|residence certificate|adhivas praman|niwas praman|dakhla|state quota domicile)\b|निवास प्रमाण पत्र|अधिवास प्रमाण पत्र/i.test(normalizedQuery)) {
    entities.serviceType = "domicile_certificate";
    entities.applicantType = "Permanent State Resident";
    entities.purpose = "Proof of Continuous Residence for State Quota";
  } else if (/\b(income certificate|income proof|aay praman|utpann dakhla|tehsildar income)\b|आय प्रमाण पत्र|आय प्रमाण|आय प्रमाणपत्र/i.test(normalizedQuery)) {
    entities.serviceType = "income_certificate";
    entities.applicantType = "Citizen / Student Family";
    entities.purpose = "Statutory Annual Family Income Certification";
  } else if (/\b(pan card|pan|instant pan|e-pan|apply pan|get pan|pan card application|form 49a)\b|पैन कार्ड|पैन/i.test(normalizedQuery)) {
    entities.serviceType = "pan_card";
    entities.applicantType = "Individual / Taxpayer";
    entities.purpose = "Permanent Account Number for Financial KYC";
  } else if (/\b(gumasta|shop act|register a shop|register shop|open a shop|mumbai shop|pune shop|bangalore shop|bengaluru shop|delhi shop|shop license|shop licence|ekarmika|e-karmika)\b/.test(normalizedQuery)) {
    entities.serviceType = "shop_establishment";
    entities.applicantType = "Retail Shopkeeper / Business Owner";
    entities.purpose = "Shop & Commercial Establishment Intimation / Registration";
  } else if (/\b(private limited|pvt ltd|incorporate (a )?company|register (a )?company|company incorporation|company registration|mca spice|spice)\b/i.test(normalizedQuery)) {
    entities.serviceType = "private_limited_company";
    entities.applicantType = "Corporate Director / Founder";
    entities.purpose = "Private Limited Company Incorporation via MCA SPICe+";
  } else if (/\b(small business|msme|udyam|register small business|register my small business)\b/.test(normalizedQuery)) {
    entities.serviceType = "msme_small_business";
    entities.applicantType = "Micro / Small Enterprise Owner";
    entities.purpose = "Udyam Central MSME Enterprise Registration";
  } else if (/\b(business registration|start a business|new business|register a business|register business|start business|how to start a business)\b/.test(normalizedQuery)) {
    entities.serviceType = "generic_business";
    entities.applicantType = "Entrepreneur / Business Owner";
    entities.purpose = "Commercial Business Registration";
  } else if (/\b(marriage certificate|marriage registration|vivah nondani|wedding certificate|marry|spouse certificate)\b/.test(normalizedQuery)) {
    entities.serviceType = "marriage_certificate";
    entities.applicantType = "Legally Married Couple";
    entities.purpose = "Statutory Marriage Legal Proof";
  } else if (/\b(passport|fresh passport|passport seva|psk|tatkaal passport|renew passport|passport renewal)\b/.test(normalizedQuery)) {
    entities.serviceType = "passport";
    entities.applicantType = "Indian Citizen";
    entities.purpose = "International Travel Document & Citizenship Proof";
  } else if (/\b(voter id|voter|form 6|e-epic|election card|voting card|voter registration|new voter)\b/.test(normalizedQuery)) {
    entities.serviceType = "voter_id";
    entities.applicantType = "Indian Citizen (18+ Years)";
    entities.purpose = "Electoral Roll Inclusion & Voter ID";
  } else if (/\b(scholarship|scholarships|nsp|mahadbt|student aid|college fees waiver|post matric)\b/.test(normalizedQuery)) {
    entities.serviceType = "scholarship";
    entities.applicantType = "Eligible Student / Scholar";
    entities.purpose = "Post-Matric Financial Aid & Tuition Fee Waiver";
  } else if (/\b(vehicle registration|rc book|rc transfer|car transfer|bike transfer|vahan rc|transfer of ownership)\b/.test(normalizedQuery)) {
    entities.serviceType = "vehicle_rc";
    entities.applicantType = "Vehicle Buyer / Owner";
    entities.purpose = "Motor Vehicle Certificate of Registration Title";
  } else if (/\b(gst|gstin|gst registration|goods and services tax)\b/.test(normalizedQuery)) {
    entities.serviceType = "gst";
    entities.applicantType = "Commercial Business Operator";
    entities.purpose = "Goods and Services Tax Identification Number";
  } else if (/\b(income tax|itr|tax return|itr filing|file income tax|e-filing)\b/.test(normalizedQuery)) {
    entities.serviceType = "income_tax";
    entities.applicantType = "Salaried / Business Taxpayer";
    entities.purpose = "Annual Direct Tax Return Declaration";
  }

  return entities;
}

/**
 * Maps service identifier to standardized Indian civic category
 */
export function mapCategoryFromService(serviceId: string): string {
  switch (serviceId) {
    case "street-vendor-cart-registration":
      return "Local Civic & Street Vending";
    case "driving-licence":
    case "vehicle-registration-rc":
      return "Transport & Licensing";
    case "fresh-aadhaar-enrollment":
    case "aadhaar-address-update":
    case "pan-card-application":
    case "passport-application":
    case "voter-registration-form-6":
      return "Identity & Citizenship";
    case "birth-certificate":
    case "death-certificate":
    case "caste-certificate":
    case "domicile-residence-certificate":
    case "income-certificate":
    case "marriage-certificate":
      return "Certificates & Revenue Records";
    case "private-limited-company-mca-spice":
      return "Business, Tax & Enterprise";
    case "karnataka-shop-establishment":
    case "delhi-shop-establishment":
    case "gumasta-licence-maharashtra":
      return "Business & State Licensing";
    case "udyam-msme-registration":
    case "gst-registration":
    case "income-tax-filing":
      return "Business, Tax & Enterprise";
    case "government-scholarship":
      return "Education & Social Welfare";
    default:
      return "Indian Government Services";
  }
}

/**
 * Checks for ambiguous requests that require citizen clarification
 */
function checkForClarification(
  normalizedQuery: string,
  selectedState: IndianStateId,
  entities: ExtractedEntities
): SearchOutcome | null {
  // Case 0: Generic government document/papers inquiry (e.g. "I need some government document")
  const isGenericDocumentQuery =
    /^(i need some government document|i need a government document|government document|government documents|government certificate|apply for document|government papers|sarkari document|sarkari kagaz)$/i.test(
      normalizedQuery
    ) ||
    (/\b(government document|government documents|some government document)\b/i.test(normalizedQuery) &&
      !/\b(birth|death|caste|income|domicile|driving|licence|license|aadhaar|pan|passport|voter|business|shop|vendor)\b/i.test(
        normalizedQuery
      ));

  if (isGenericDocumentQuery) {
    const options: ClarificationOption[] = [
      {
        label: "Birth Certificate (CRS / Municipal)",
        description: "Official vital birth registration certificate issued by municipal health department.",
        queryOverride: "I need a birth certificate in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "Income Certificate (Revenue / e-District)",
        description: "Annual family income certificate for fee concessions and government schemes.",
        queryOverride: "I need an income certificate in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "Caste Certificate & Validity",
        description: "Statutory proof of social category for educational and public employment reservations.",
        queryOverride: "I need a caste certificate in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "Domicile & Residence Certificate",
        description: "Proof of permanent continuous state residence required for state quota admissions.",
        queryOverride: "I want to apply for a domicile certificate in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "Driving Licence (Sarathi Parivahan)",
        description: "Learner's and Permanent Driving Licence issued by jurisdictional RTO.",
        queryOverride: "I want to apply for a driving licence in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "New PAN Card (Instant e-PAN)",
        description: "Permanent Account Number issued by Income Tax Department for financial KYC.",
        queryOverride: "How do I get a PAN card?",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "Which government document or certificate do you need?",
      subprompt: "Different Indian authorities issue certificates for civil records, identity, taxation, and licensing.",
      reason: "ambiguous_service",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Indian Government Services",
    };
  }

  // Case 0B: Ambiguous "register a business" query without specifying structure
  const isGenericBusinessQuery =
    /^(i want to register a business|how to register a business|register a business|i want to start a business|start a business|how to start a business|business registration|start business|register business)$/i.test(
      normalizedQuery
    ) ||
    (/\b(register a business|start a business|business registration)\b/i.test(normalizedQuery) &&
      !/\b(small|msme|udyam|private limited|pvt ltd|company|llp|partnership|sole proprietorship|proprietor|shop|gumasta|karmika|vendor|food cart|thela)\b/i.test(
        normalizedQuery
      ));

  if (isGenericBusinessQuery) {
    const options: ClarificationOption[] = [
      {
        label: "Private Limited Company",
        description: "Official incorporation with Ministry of Corporate Affairs (MCA) via SPICe+ and AGILE-PRO-S linked forms.",
        queryOverride: "Register Private Limited Company via MCA SPICe+",
      },
      {
        label: "LLP",
        description: "Limited Liability Partnership registration with Ministry of Corporate Affairs via FiLLiP portal.",
        queryOverride: "Register an LLP with MCA",
      },
      {
        label: "Partnership",
        description: "Registration of Partnership Firm with State Registrar of Firms (RoF) under Indian Partnership Act, 1932.",
        queryOverride: "Register a partnership firm",
      },
      {
        label: "Sole Proprietorship",
        description: "100% Free lifetime central registration on Udyam portal for single-owner micro & small enterprises.",
        queryOverride: "I want to register a small business",
      },
      {
        label: "Not sure",
        description: "Explore the most suitable business structure for your investment size and liability requirements.",
        queryOverride: "Register Private Limited Company via MCA SPICe+",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "What type of business are you planning to register?",
      subprompt: "Different Indian authorities register corporate companies (MCA), partnerships (State RoF), and micro-enterprises (MSME).",
      reason: "ambiguous_business_type",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Business, Tax & Enterprise",
    };
  }

  // Case 1: Ambiguous "licence" / "license" without vehicle, driver, or shop qualifiers
  const isGenericLicenseQuery =
    /\b(licence|license)\b/.test(normalizedQuery) &&
    !/\b(driving|driver|vehicle|car|bike|two wheeler|four wheeler|dl|learner|learning|motor)\b/.test(normalizedQuery) &&
    !/\b(trade|shop|business|gumasta|fssai|food cart|vendor)\b/.test(normalizedQuery);

  if (isGenericLicenseQuery) {
    const options: ClarificationOption[] = [
      {
        label: "Driving Licence (Vehicle Driving Permit)",
        description: "Learner's Licence and Permanent Driving Licence issued by RTO via Sarathi Parivahan.",
        queryOverride: "I want to apply for a driving licence in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "Business / Shop Licence (Gumasta in Maharashtra)",
        description: "Shop & Establishment registration required for retail shops, offices, and commercial establishments.",
        queryOverride: "Register shop and establishment gumasta licence",
        stateOverride: "maharashtra",
      },
      {
        label: "Vehicle Registration Certificate (RC)",
        description: "Vehicle registration, ownership title transfer, or fitness renewal.",
        queryOverride: "Vehicle registration certificate RC transfer",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "What type of licence are you looking for?",
      subprompt: "Different government departments issue licences for driving, commercial establishments, and vehicle registrations.",
      reason: "ambiguous_service",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Licences & Registrations",
    };
  }

  // Case 2: Ambiguous "certificate" without specifying type (e.g. "I need a certificate")
  const isGenericCertificateQuery =
    /^(i need a certificate|apply for certificate|how to get certificate|certificate)$/.test(normalizedQuery) ||
    (/\bcertificate\b/.test(normalizedQuery) &&
      !/\b(birth|caste|income|domicile|residence|marriage|death|driving|vending|school|marksheet|bonafide)\b/.test(normalizedQuery));

  if (isGenericCertificateQuery) {
    const options: ClarificationOption[] = [
      {
        label: "Income Certificate (Aaple Sarkar / e-District)",
        description: "Annual family revenue certificate for college fee concessions, scholarships, and EWS quota.",
        queryOverride: "I need an income certificate",
      },
      {
        label: "Caste Certificate & Validity",
        description: "Statutory proof of social category (SC/ST/OBC/VJNT) for educational and job reservations.",
        queryOverride: "I need a caste certificate",
      },
      {
        label: "Domicile / Residence Certificate",
        description: "Proof of 15 years permanent residence in the state required for state quota admissions.",
        queryOverride: "I want to apply for a domicile certificate",
      },
      {
        label: "Birth Certificate",
        description: "Certified copy of birth registration issued by municipal corporation or CRS.",
        queryOverride: "I need a birth certificate",
      },
      {
        label: "Marriage Certificate",
        description: "Official legal registration of solemnized marriage under Special or Hindu Marriage Act.",
        queryOverride: "I need a marriage certificate",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "What type of certificate do you need?",
      subprompt: "Select the specific government certificate you wish to apply for or download.",
      reason: "ambiguous_service",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Certificates & Revenue Records",
    };
  }

  const hasLocation = entities.locationSpecifiedInQuery === true;

  // Case 4A: Birth Certificate when location was not provided in the query
  if (entities.serviceType === "birth_certificate" && !hasLocation) {
    const options: ClarificationOption[] = [
      {
        label: "Mumbai, Maharashtra (BMC Municipal Portal)",
        description: "Brihanmumbai Municipal Corporation Public Health Dept portal.",
        queryOverride: "I want a birth certificate in Mumbai",
        stateOverride: "maharashtra",
        cityOverride: "mumbai",
      },
      {
        label: "Delhi (MCD / NDMC / e-District Delhi)",
        description: "Municipal Corporation of Delhi vital statistics registrar gateway.",
        queryOverride: "I want a birth certificate in Delhi",
        stateOverride: "delhi",
        cityOverride: "delhi",
      },
      {
        label: "Bengaluru, Karnataka (BBMP / Seva Sindhu)",
        description: "Bruhat Bengaluru Mahanagara Palike & Seva Sindhu civil registry.",
        queryOverride: "I want a birth certificate in Bengaluru",
        stateOverride: "karnataka",
        cityOverride: "bengaluru",
      },
      {
        label: "Gujarat (Ahmedabad / Surat / Digital Gujarat)",
        description: "Municipal corporations and Digital Gujarat urban civil registry.",
        queryOverride: "I want a birth certificate in Gujarat",
        stateOverride: "gujarat",
      },
      {
        label: "Uttar Pradesh (Nagar Nigam / e-District UP)",
        description: "UP Municipal Corporations and Department of Revenue civil registry.",
        queryOverride: "I want a birth certificate in Uttar Pradesh",
        stateOverride: "uttar-pradesh",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "Which State or City do you need the Birth Certificate for?",
      subprompt: "Birth certificates are issued by local Municipal Corporations (e.g. BMC Mumbai, MCD Delhi, BBMP Bengaluru) or State Civil Registration authorities.",
      reason: "missing_location",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Certificates & Vital Records",
    };
  }

  // Case 4B: Death Certificate when location was not provided in query
  if (entities.serviceType === "death_certificate" && !hasLocation) {
    const options: ClarificationOption[] = [
      {
        label: "Mumbai, Maharashtra (BMC Municipal Portal)",
        description: "Registration under Brihanmumbai Municipal Corporation Health Department.",
        queryOverride: "I want a death certificate in Mumbai",
        stateOverride: "maharashtra",
        cityOverride: "mumbai",
      },
      {
        label: "Delhi (MCD / e-District Delhi)",
        description: "Municipal Corporation of Delhi vital statistics registrar.",
        queryOverride: "I want a death certificate in Delhi",
        stateOverride: "delhi",
        cityOverride: "delhi",
      },
      {
        label: "Bengaluru, Karnataka (BBMP / Seva Sindhu)",
        description: "Bruhat Bengaluru Mahanagara Palike & Seva Sindhu portal.",
        queryOverride: "I want a death certificate in Bengaluru",
        stateOverride: "karnataka",
        cityOverride: "bengaluru",
      },
      {
        label: "Gujarat (Ahmedabad / Surat Municipal)",
        description: "Urban municipal corporations and Digital Gujarat civil registry.",
        queryOverride: "I want a death certificate in Gujarat",
        stateOverride: "gujarat",
      },
      {
        label: "Uttar Pradesh (Nagar Nigam / e-District UP)",
        description: "UP Nagar Nigam and District Registrar of Births & Deaths.",
        queryOverride: "I want a death certificate in Uttar Pradesh",
        stateOverride: "uttar-pradesh",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "Which State or City do you need the Death Certificate for?",
      subprompt: "Death certificates are issued by the local Municipal Corporation ward office or State Civil Registrar where the death occurred.",
      reason: "missing_location",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Certificates & Vital Records",
    };
  }

  // Case 4C: Food Cart / Street Vendor when location was not provided in query
  if (entities.serviceType === "street_vendor_food_cart" && !hasLocation) {
    const options: ClarificationOption[] = [
      {
        label: "Mumbai, Maharashtra (BMC Town Vending Committee)",
        description: "Brihanmumbai Municipal Corporation Street Vendors Vending Certificate & PM SVANidhi.",
        queryOverride: "I want to apply for a food cart in Mumbai",
        stateOverride: "maharashtra",
        cityOverride: "mumbai",
      },
      {
        label: "Delhi (MCD / NDMC Town Vending Committee)",
        description: "Municipal Corporation of Delhi vending zone authorization & ID card.",
        queryOverride: "I want to apply for a food cart in Delhi",
        stateOverride: "delhi",
        cityOverride: "delhi",
      },
      {
        label: "Bengaluru, Karnataka (BBMP / Urban Local Bodies)",
        description: "Bruhat Bengaluru Mahanagara Palike street vendor identity card and licensing.",
        queryOverride: "I want to apply for a food cart in Bengaluru",
        stateOverride: "karnataka",
        cityOverride: "bengaluru",
      },
      {
        label: "Gujarat (Ahmedabad / Surat Municipal Corporation)",
        description: "Urban local body hawker zone certificate and PM SVANidhi credit authorization.",
        queryOverride: "I want to apply for a food cart in Gujarat",
        stateOverride: "gujarat",
      },
      {
        label: "Uttar Pradesh (Nagar Nigam / Urban Local Bodies)",
        description: "State urban development and municipal town vending committee authorization.",
        queryOverride: "I want to apply for a food cart in Uttar Pradesh",
        stateOverride: "uttar-pradesh",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "Which State or City do you plan to operate your food cart in?",
      subprompt: "Street vending certificates and PM SVANidhi vending cards are issued by local Municipal Town Vending Committees (TVC).",
      reason: "missing_location",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Local Civic & Street Vending",
    };
  }

  // Case 4D: Driving Licence Renewal when location was not provided in query
  if (entities.serviceType === "driving_licence" && entities.actionType === "renew" && !hasLocation) {
    const options: ClarificationOption[] = [
      {
        label: "Maharashtra (Sarathi Maharashtra RTO)",
        description: "Jurisdictional RTO under Maharashtra Motor Vehicles Department on Sarathi.",
        queryOverride: "I want to renew my driving licence in Maharashtra",
        stateOverride: "maharashtra",
      },
      {
        label: "Delhi (Sarathi Delhi Transport RTO)",
        description: "Government of NCT of Delhi Transport Department RTO office.",
        queryOverride: "I want to renew my driving licence in Delhi",
        stateOverride: "delhi",
      },
      {
        label: "Karnataka (Sarathi Karnataka RTO)",
        description: "Karnataka State Transport Department RTO jurisdiction.",
        queryOverride: "I want to renew my driving licence in Karnataka",
        stateOverride: "karnataka",
      },
      {
        label: "Gujarat (Sarathi Gujarat RTO)",
        description: "Gujarat State Road Transport Authority RTO jurisdiction.",
        queryOverride: "I want to renew my driving licence in Gujarat",
        stateOverride: "gujarat",
      },
      {
        label: "Uttar Pradesh (Sarathi UP RTO)",
        description: "Uttar Pradesh Transport Commissioner RTO jurisdiction.",
        queryOverride: "I want to renew my driving licence in Uttar Pradesh",
        stateOverride: "uttar-pradesh",
      },
    ];

    return {
      type: "CLARIFICATION",
      prompt: "Which State RTO was your driving licence issued in?",
      subprompt: "Driving licence renewals are processed by jurisdictional State Transport Departments on the Sarathi Parivahan portal.",
      reason: "missing_location",
      options,
      originalQuery: normalizedQuery,
      selectedState,
      extractedEntities: entities,
      mappedCategory: "Transport & Licensing",
    };
  }

  return null;
}

/**
 * Primary Civic Service Search & Intent Resolution Engine
 */
export function searchCivicService(
  rawQuery: string,
  userSelectedState: IndianStateId = "maharashtra",
  userSelectedDistrict?: string
): SearchOutcome {
  const normalized = normalizeQuery(rawQuery);

  // 1. Entity Extraction
  const entities = extractEntities(normalized);

  // If user explicitly selected a district (e.g. from the location dropdown)
  let districtDisplayName: string | undefined = undefined;
  if (
    userSelectedDistrict &&
    userSelectedDistrict !== "statewide" &&
    userSelectedDistrict !== "" &&
    userSelectedDistrict !== "all"
  ) {
    districtDisplayName = userSelectedDistrict
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    // If query didn't specify a different city/district, apply the user's selected district
    if (!entities.cityOrDistrict) {
      entities.cityOrDistrict = districtDisplayName;
      entities.locationSpecifiedInQuery = true;
    }
  }

  const effectiveState: IndianStateId = entities.state || userSelectedState;
  const stateMatchedFromQuery = entities.state !== undefined;

  if (!normalized) {
    return {
      type: "FOUND",
      service: GOVERNMENT_SERVICES[0], // Driving Licence flagship
      matchedState: userSelectedState,
      matchedCityOrDistrict: districtDisplayName,
      stateMatchedFromQuery: false,
      confidence: "high",
      extractedEntities: entities,
      mappedCategory: mapCategoryFromService(GOVERNMENT_SERVICES[0].id),
    };
  }

  // 2. Clarification Check for Ambiguous Queries
  const clarification = checkForClarification(normalized, effectiveState, entities);
  if (clarification) {
    return clarification;
  }

  // 3. Domain Scoring Matrix
  interface ScoredCandidate {
    service: GovernmentService;
    score: number;
  }

  const scored: ScoredCandidate[] = [];

  for (const service of GOVERNMENT_SERVICES) {
    let score = 0;

    // Check tags matching
    for (const tag of service.tags) {
      if (normalized.includes(tag)) {
        score += 30;
      }
    }

    // Title match
    const titleText = getLocalizedText(service.title, "en");
    const titleLower = titleText.toLowerCase();
    if (normalized.includes(titleLower) || titleLower.includes(normalized)) {
      score += 60;
    }

    // Domain Specific Intent Patterns:

    // 1. Street Food Vendor / Food Cart / Roadside
    if (service.id === "street-vendor-cart-registration") {
      if (/\b(food cart|street vendor|roadside|thela|hawker|vending card|vending certificate|sell food on roadside|handcart|tea stall|pm svanidhi)\b|ठेला|फूड कार्ट/i.test(normalized)) {
        score += 90;
      }
    }

    // 2. Driving Licence (Sarathi Parivahan)
    if (service.id === "driving-licence") {
      if (/\b(driving licence|driving license|driver license|driver licence|renew driving licence|renew my driving licence|apply dl|learner|learning licence|rto test|sarathi|drive a car|drive a bike)\b|ड्राइविंग लाइसेंस|ड्राइविंग लाइसेन्स|लाइसेंस बनवाना/i.test(normalized)) {
        score += 85;
      }
    }

    // 3. Caste Certificate
    if (service.id === "caste-certificate") {
      if (/\b(caste certificate|caste validity|jaati praman|sc certificate|st certificate|obc certificate|vjnt certificate|caste)\b|जाति प्रमाण पत्र|जाति प्रमाण/i.test(normalized)) {
        score += 90;
      }
    }

    // 4. Domicile & Residence Certificate
    if (service.id === "domicile-residence-certificate") {
      if (/\b(domicile certificate|domicile|residence certificate|adhivas praman|dakhla|state quota domicile|mht cet domicile)\b|निवास प्रमाण पत्र|अधिवास/i.test(normalized)) {
        score += 90;
      }
    }

    // 5. PAN Card
    if (service.id === "pan-card-application") {
      if (/\b(pan card|pan|instant pan|e-pan|apply pan|get pan|pan card application|form 49a)\b|पैन कार्ड/i.test(normalized)) {
        score += 90;
      }
    }

    // 6. Marriage Certificate
    if (service.id === "marriage-certificate") {
      if (/\b(marriage certificate|marriage registration|vivah nondani|wedding certificate|marry|spouse certificate)\b|विवाह प्रमाण पत्र|विवाह पंजीकरण/i.test(normalized)) {
        score += 90;
      }
    }

    // 7. Birth Certificate & Death Certificate
    if (service.id === "birth-certificate") {
      if (/\b(birth certificate|janam praman|birth registration|child birth certificate|crs certificate)\b|जन्म प्रमाण पत्र|जन्म प्रमाण/i.test(normalized)) {
        score += 90;
      }
    }

    if (service.id === "death-certificate") {
      if (/\b(death certificate|death registration|mrityu praman|mccd|death proof|death record)\b|मृत्यु प्रमाण पत्र|मृत्यु प्रमाण/i.test(normalized)) {
        score += 90;
      }
    }

    // 8. Aadhaar: Fresh Enrollment vs Address Update
    if (service.id === "fresh-aadhaar-enrollment") {
      if (/\b(apply for (an? )?aadhaar|apply for aadhaar card|apply for an aadhaar card|apply aadhaar|new aadhaar|first aadhaar|aadhaar enrollment|get aadhaar|enroll aadhaar|fresh aadhaar)\b|आधार कार्ड|आधार पंजीकरण|नया आधार/i.test(normalized)) {
        score += 85;
      }
    }

    if (service.id === "aadhaar-address-update") {
      if (/\b(update aadhaar|aadhaar address|change aadhaar|aadhaar card address|myaadhaar|update address in aadhaar|change address)\b|आधार में पता|आधार अपडेट/i.test(normalized)) {
        score += 85;
      } else if (/\b(aadhaar|aadhar|uidai)\b|आधार/i.test(normalized) && !/\b(apply for aadhaar|new aadhaar|first aadhaar)\b|नया आधार/i.test(normalized)) {
        score += 50; // generic aadhaar
      }
    }

    // 9. Income Certificate
    if (service.id === "income-certificate") {
      if (/\b(income certificate|income proof|aay praman|utpann dakhla|tehsildar income)\b|आय प्रमाण पत्र|आय प्रमाण|आय प्रमाणपत्र/i.test(normalized)) {
        score += 90;
      }
    }

    // 10A. Private Limited Company Incorporation (MCA SPICe+)
    if (service.id === "private-limited-company-mca-spice") {
      if (
        /\b(private limited|pvt ltd|incorporate (a )?company|register (a )?company|company incorporation|company registration|mca spice|spice|mca portal|inc 32|agile pro)\b/i.test(
          normalized
        )
      ) {
        score += 95;
      }
    }

    // 10B. Shop & Commercial Establishment (State-Specific Localization)
    const isShopQuery =
      /\b(register a shop|register shop|open a shop|shop license|shop licence|shop act|commercial establishment)\b|दुकान पंजीकरण/i.test(
        normalized
      );

    if (service.id === "gumasta-licence-maharashtra") {
      if (/\b(gumasta|clothing business in mumbai|mumbai shop|pune shop)\b/i.test(normalized)) {
        score += 90;
      } else if (isShopQuery) {
        if (effectiveState === "maharashtra") {
          score += 90;
        } else if (effectiveState === "all") {
          score += 50;
        } else {
          score -= 100; // Do not return Maharashtra when another state is selected!
        }
      } else if (/\b(clothing business|retail store)\b/.test(normalized) && effectiveState === "maharashtra") {
        score += 40;
      }
    }

    if (service.id === "karnataka-shop-establishment") {
      if (/\b(ekarmika|e-karmika|bangalore shop|bengaluru shop|mysuru shop|karnataka shop)\b/i.test(normalized)) {
        score += 95;
      } else if (isShopQuery) {
        if (effectiveState === "karnataka") {
          score += 95;
        } else if (effectiveState === "all") {
          score += 45;
        } else {
          score -= 100; // Do not return Karnataka when another state is selected!
        }
      }
    }

    if (service.id === "delhi-shop-establishment") {
      if (/\b(delhi shop|delhi commercial|labour cis)\b/i.test(normalized)) {
        score += 95;
      } else if (isShopQuery) {
        if (effectiveState === "delhi") {
          score += 95;
        } else if (effectiveState === "all") {
          score += 45;
        } else {
          score -= 100;
        }
      }
    }

    // 10C. Udyam MSME Small Business
    if (service.id === "udyam-msme-registration") {
      if (/\b(small business|msme|udyam|register small business|register my small business)\b/i.test(normalized)) {
        score += 85;
      }
    }

    // 11. Passport
    if (service.id === "passport-application") {
      if (/\b(passport|fresh passport|passport seva|psk|tatkaal passport|renew passport|passport renewal)\b/.test(normalized)) {
        score += 85;
      }
    }

    // 12. Voter ID (Form 6)
    if (service.id === "voter-registration-form-6") {
      if (/\b(voter id|voter|form 6|e-epic|election card|voting card|voter registration|new voter)\b/.test(normalized)) {
        score += 85;
      }
    }

    // 13. Scholarships
    if (service.id === "government-scholarship") {
      if (/\b(scholarship|scholarships|nsp|mahadbt|student aid|college fees waiver|post matric)\b/.test(normalized)) {
        score += 85;
      }
    }

    // 14. Vehicle Registration (RC)
    if (service.id === "vehicle-registration-rc") {
      if (/\b(vehicle registration|rc book|rc transfer|car transfer|bike transfer|vahan rc|transfer of ownership)\b/.test(normalized)) {
        score += 85;
      }
    }

    // 15. GST Registration
    if (service.id === "gst-registration") {
      if (/\b(gst|gstin|gst registration|goods and services tax)\b/.test(normalized)) {
        score += 85;
      }
    }

    // 16. Income Tax (ITR)
    if (service.id === "income-tax-filing") {
      if (/\b(income tax|itr|tax return|itr filing|file income tax|e-filing)\b/.test(normalized)) {
        score += 85;
      }
    }

    // State relevance modifier: boost matching state, penalize non-matching state
    if (service.applicableStates && service.applicableStates.includes(effectiveState)) {
      score += 15;
    } else if (
      service.applicableStates &&
      service.applicableStates.length > 0 &&
      effectiveState !== "all" &&
      !service.applicableStates.includes(effectiveState)
    ) {
      score -= 60; // Strictly penalize services belonging to a different state
    }

    // High bar: Score must be at least 35 to qualify as a relevant match
    if (score >= 35) {
      scored.push({ service, score });
    }
  }

  // Sort candidates by relevance score descending
  scored.sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    const topMatch = scored[0];
    const alternatives = scored.slice(1, 3).map((item) => item.service);

    return {
      type: "FOUND",
      service: topMatch.service,
      matchedState: effectiveState,
      matchedCityOrDistrict: entities.cityOrDistrict,
      stateMatchedFromQuery,
      confidence: topMatch.score >= 60 ? "high" : "medium",
      extractedEntities: entities,
      mappedCategory: mapCategoryFromService(topMatch.service.id),
      alternativeServices: alternatives.length > 0 ? alternatives : undefined,
    };
  }

  // 4. No Result State:
  // Strictly return NO_RESULT when no genuine civic match exists.
  // Never guess or return a random default like Aadhaar!
  const defaultSuggestions = [
    "I want to apply for a driving licence in Maharashtra",
    "How do I update my Aadhaar address?",
    "I want to apply for a food cart",
    "I need a birth certificate",
    "How can I register my small business?",
    "I need a caste certificate",
    "I want to apply for a domicile certificate",
    "How do I get a PAN card?",
    "I want to register a shop in Maharashtra",
    "I need a marriage certificate",
  ];

  return {
    type: "NO_RESULT",
    originalQuery: rawQuery,
    selectedState: effectiveState,
    suggestions: defaultSuggestions,
    extractedEntities: entities,
  };
}
