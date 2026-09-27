import { LocalizedString } from "@/types/service";

export interface LocalizedDocItem {
  name: LocalizedString;
  type: LocalizedString;
  description: LocalizedString;
  commonExamples: LocalizedString;
  isMandatory: boolean;
}

export interface LocalizedStepItem {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
  agencyOrPortal: LocalizedString;
  isOnline: boolean;
  estimatedDuration: LocalizedString;
  mode: "online" | "offline" | "hybrid";
  officialSource?: LocalizedString;
  sourceReference?: LocalizedString;
  officialTip?: LocalizedString;
}

export interface ServiceTranslationItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  shortDescription: LocalizedString;
  fullOverview: LocalizedString;
  authority: LocalizedString;
  department: LocalizedString;
  source: LocalizedString;
  officialSource: LocalizedString;
  availability?: LocalizedString;
  onlineAvailable: LocalizedString;
  officialPortal: {
    name: LocalizedString;
    notes?: LocalizedString;
  };
  fees: {
    amountText: LocalizedString;
    verificationSource?: LocalizedString;
  };
  feeInfo?: LocalizedString;
  processingTime: {
    timeText: LocalizedString;
    statutoryAct?: LocalizedString;
  };
  processingInfo?: LocalizedString;
  eligibility: LocalizedString[];
  requiredDocuments: LocalizedDocItem[];
  steps: LocalizedStepItem[];
  warnings?: LocalizedString[];
  disclaimer?: LocalizedString;
}

export const SERVICE_TRANSLATIONS: Record<string, ServiceTranslationItem> = {
  "driving-licence": {
  "id": "driving-licence",
  "title": {
    "en": "Driving Licence (Learner's & Permanent)",
    "hi": "ड्राइविंग लाइसेंस (लर्नर और स्थायी)"
  },
  "category": {
    "en": "Transport & Licensing",
    "hi": "परिवहन एवं लाइसेंसिंग"
  },
  "shortDescription": {
    "en": "Apply online for a computerised Learner's Licence (LL) and book a practical RTO driving skill test slot for your permanent Driving Licence (DL).",
    "hi": "कंप्यूटरीकृत शिक्षार्थी (लर्नर) लाइसेंस के लिए ऑनलाइन आवेदन करें और स्थायी ड्राइविंग लाइसेंस (DL) के लिए आरटीओ ड्राइविंग कौशल परीक्षा स्लॉट बुक करें।"
  },
  "fullOverview": {
    "en": "Administered nationwide through the centralized Sarathi MoRTH portal. Eligible citizens can apply for a Learner's Licence online via contactless Aadhaar e-KYC. After holding a valid Learner's Licence for at least 30 days, applicants book a slot at their jurisdictional RTO for the practical driving test.",
    "hi": "केंद्रीकृत सारथी सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) पोर्टल के माध्यम से राष्ट्रव्यापी संचालित। नागरिक संपर्क रहित आधार ई-केवाईसी द्वारा लर्नर लाइसेंस हेतु ऑनलाइन आवेदन कर सकते हैं। वैध लर्नर लाइसेंस प्राप्त करने के 30 दिनों बाद, आवेदक स्थायी ड्राइविंग टेस्ट के लिए अपने आरटीओ में स्लॉट बुक करते हैं।"
  },
  "authority": {
    "en": "Ministry of Road Transport and Highways (MoRTH) & State Transport Department",
    "hi": "सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) एवं राज्य परिवहन विभाग"
  },
  "department": {
    "en": "Ministry of Road Transport and Highways (MoRTH) & State Transport Department",
    "hi": "सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) एवं राज्य परिवहन विभाग"
  },
  "source": {
    "en": "Ministry of Road Transport and Highways (MoRTH), Government of India",
    "hi": "केंद्रीय मोटर वाहन नियम (CMVR), 1989 एवं मोटर वाहन अधिनियम, 1988"
  },
  "officialSource": {
    "en": "Ministry of Road Transport and Highways (MoRTH), Government of India",
    "hi": "सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (सभी राज्य एवं केंद्र शासित प्रदेश)"
  },
  "onlineAvailable": {
    "en": "Online Application + Physical Verification",
    "hi": "ऑनलाइन आवेदन + भौतिक ड्राइविंग परीक्षण"
  },
  "officialPortal": {
    "name": {
      "en": "Parivahan Sewa (Sarathi Portal)",
      "hi": "सारथी परिवहन सेवा पोर्टल (Sarathi Parivahan)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹150 - ₹200 for Learner's Licence | ₹300 - ₹500 for DL Test & Smart Card",
      "hi": "₹150 - ₹200 लर्नर लाइसेंस हेतु | ₹300 - ₹500 डीएल टेस्ट एवं स्मार्ट कार्ड हेतु"
    },
    "verificationSource": {
      "en": "Central Motor Vehicles Rules (CMVR) & State RTO Fee Schedules",
      "hi": "केंद्रीय मोटर वाहन नियम (CMVR) एवं राज्य आरटीओ शुल्क अनुसूची"
    }
  },
  "feeInfo": {
    "en": "₹150 - ₹200 for Learner's Licence | ₹300 - ₹500 for DL Test & Smart Card",
    "hi": "₹150 - ₹200 लर्नर लाइसेंस हेतु | ₹300 - ₹500 डीएल टेस्ट एवं स्मार्ट कार्ड हेतु"
  },
  "processingTime": {
    "timeText": {
      "en": "Learner's: Same Day (Online) | Permanent DL: 7 - 15 Days after passing test",
      "hi": "लर्नर लाइसेंस: उसी दिन (ऑनलाइन) | स्थायी डीएल: टेस्ट पास करने के 7 - 15 दिनों में"
    },
    "statutoryAct": {
      "en": "Motor Vehicles Act, 1988",
      "hi": "मोटर वाहन अधिनियम, 1988"
    }
  },
  "processingInfo": {
    "en": "Learner's: Same Day (Online) | Permanent DL: 7 - 15 Days after passing test",
    "hi": "लर्नर लाइसेंस: उसी दिन (ऑनलाइन) | स्थायी डीएल: टेस्ट पास करने के 7 - 15 दिनों में"
  },
  "eligibility": [
    {
      "en": "Minimum 18 years of age for private motor vehicles with gear (LMV / Motorcycles).",
      "hi": "गियर वाले निजी मोटर वाहनों (LMV / मोटरसाइकिल) के लिए न्यूनतम 18 वर्ष की आयु।"
    },
    {
      "en": "Minimum 16 years for gearless two-wheelers up to 50cc (with written parental consent).",
      "hi": "50cc तक के बिना गियर वाले दोपहिया वाहनों के लिए न्यूनतम 16 वर्ष (अभिभावक की लिखित सहमति आवश्यक)।"
    },
    {
      "en": "Must have passed or appear for the online computerised traffic signs & road regulations test.",
      "hi": "ऑनलाइन कंप्यूटरीकृत यातायात संकेत एवं सड़क सुरक्षा परीक्षा उत्तीर्ण होना आवश्यक।"
    },
    {
      "en": "Must hold a valid Learner's Licence for a minimum of 30 days before booking the permanent driving test.",
      "hi": "स्थायी ड्राइविंग टेस्ट बुक करने से पहले न्यूनतम 30 दिनों तक वैध लर्नर लाइसेंस होना अनिवार्य।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Age & Date of Birth",
        "hi": "आयु एवं जन्म तिथि का प्रमाण"
      },
      "type": {
        "en": "Aadhaar e-KYC / Original",
        "hi": "आधार ई-केवाईसी / मूल प्रति"
      },
      "description": {
        "en": "Government document confirming date of birth.",
        "hi": "जन्म तिथि की पुष्टि करने वाला सरकारी दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, 10th Class School Leaving Certificate, Passport, or Birth Certificate",
        "hi": "आधार कार्ड, 10वीं कक्षा का स्कूल लीविंग सर्टिफिकेट, पासपोर्ट, या जन्म प्रमाण पत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Address",
        "hi": "पते का प्रमाण"
      },
      "type": {
        "en": "Digital (DigiLocker) / Original",
        "hi": "डिजिटल (डिजिलॉकर) / मूल प्रति"
      },
      "description": {
        "en": "Residential proof within jurisdiction of the chosen RTO office.",
        "hi": "चुने गए आरटीओ कार्यालय के क्षेत्राधिकार के भीतर आवासीय प्रमाण।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Voter ID, Electricity Bill (< 2 months), or Bank Passbook with photo",
        "hi": "आधार कार्ड, मतदाता पहचान पत्र, बिजली बिल (< 2 महीने पुराना), या फोटो युक्त बैंक पासबुक"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Form 1 (Physical Fitness Self-Declaration)",
        "hi": "फॉर्म 1 (शारीरिक फिटनेस स्व-घोषणा)"
      },
      "type": {
        "en": "Online Submission",
        "hi": "ऑनलाइन आवेदन"
      },
      "description": {
        "en": "Self-declaration of fitness for non-transport vehicles under age 40.",
        "hi": "40 वर्ष से कम आयु के लिए गैर-परिवहन वाहनों हेतु फिटनेस की स्व-घोषणा।"
      },
      "commonExamples": {
        "en": "Filled online directly on Sarathi Parivahan portal",
        "hi": "सारथी परिवहन पोर्टल पर सीधे ऑनलाइन भरा जाता है"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Submit Learner's Licence Application via Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी द्वारा लर्नर लाइसेंस आवेदन जमा करें"
      },
      "description": {
        "en": "Visit the official Sarathi Parivahan portal (sarathi.parivahan.gov.in), select your State, and choose 'Application for Learner Licence'. Authenticate via Aadhaar OTP for contactless processing.",
        "hi": "आधिकारिक सारथी परिवहन पोर्टल (sarathi.parivahan.gov.in) पर जाएं, अपना राज्य चुनें और 'Application for Learner Licence' चुनें। संपर्क रहित प्रक्रिया हेतु आधार ओटीपी से प्रमाणित करें।"
      },
      "agencyOrPortal": {
        "en": "sarathi.parivahan.gov.in",
        "hi": "सारथी परिवहन पोर्टल (sarathi.parivahan.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 - 15 Minutes",
        "hi": "10 - 15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Central Motor Vehicles Rules (CMVR), 1989 & MoRTH Guidelines",
        "hi": "केंद्रीय मोटर वाहन नियम (CMVR), 1989 (नियम 10)"
      },
      "sourceReference": {
        "en": "Rule 10 of CMVR, 1989",
        "hi": "Rule 10 of CMVR, 1989"
      },
      "officialTip": {
        "en": "Aadhaar authentication waives the requirement to visit the RTO for document physical verification.",
        "hi": "आधार प्रमाणीकरण से आरटीओ जाकर दस्तावेज़ सत्यापन कराने की आवश्यकता समाप्त हो जाती है।"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Complete Mandatory Audio-Visual Road Safety Tutorial",
        "hi": "अनिवार्य ऑडियो-विजुअल सड़क सुरक्षा ट्यूटोरियल पूरा करें"
      },
      "description": {
        "en": "Watch the mandatory MoRTH road safety and traffic signs video tutorial on the Sarathi portal before attempting the computerised learner test.",
        "hi": "कंप्यूटरीकृत शिक्षार्थी परीक्षा देने से पहले सारथी पोर्टल पर अनिवार्य MoRTH सड़क सुरक्षा और यातायात संकेतों का वीडियो ट्यूटोरियल देखें।"
      },
      "agencyOrPortal": {
        "en": "Sarathi Online Learning Portal",
        "hi": "सारथी ऑनलाइन लर्निंग पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "MoRTH Road Safety Cell Guidelines",
        "hi": "सड़क सुरक्षा प्रकोष्ठ दिशानिर्देश"
      },
      "sourceReference": {
        "en": "MoRTH Order RT-11012/02/2021-MVL",
        "hi": "MoRTH Order RT-11012/02/2021-MVL"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Pass Computerised Online Learner Licence Test (LL Test)",
        "hi": "ऑनलाइन कंप्यूटरीकृत लर्नर टेस्ट (LL Test) उत्तीर्ण करें"
      },
      "description": {
        "en": "Answer 15 multiple-choice questions on road traffic signs, driver duties, and motor vehicle safety rules via the online proctored camera test or at the RTO test room.",
        "hi": "ऑनलाइन कैमरे की निगरानी में या आरटीओ परीक्षण कक्ष में यातायात संकेतों, चालक कर्तव्यों और मोटर वाहन नियमों पर 15 बहुविकल्पीय प्रश्नों के उत्तर दें।"
      },
      "agencyOrPortal": {
        "en": "Sarathi Online Test Gateway",
        "hi": "सारथी ऑनलाइन टेस्ट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Central Motor Vehicles Rules, 1989 (Rule 11)",
        "hi": "केंद्रीय मोटर वाहन नियम, 1989 (नियम 11)"
      },
      "sourceReference": {
        "en": "Rule 11(1) of CMVR, 1989",
        "hi": "Rule 11(1) of CMVR, 1989"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Download Form 3 (Learner's Licence) & Observe 30-Day Mandatory Period",
        "hi": "फॉर्म 3 (लर्नर लाइसेंस) डाउनलोड करें एवं 30-दिवसीय अनिवार्य अवधि का पालन करें"
      },
      "description": {
        "en": "Immediately download your digital Learner's Licence with QR code. By law, you must hold the Learner's Licence for at least 30 days while practicing under supervision before booking the permanent driving skill test.",
        "hi": "क्यूआर कोड युक्त अपना डिजिटल लर्नर लाइसेंस तुरंत डाउनलोड करें। कानूनन स्थायी ड्राइविंग टेस्ट बुक करने से पहले कम से कम 30 दिनों तक देखरेख में अभ्यास करना अनिवार्य है।"
      },
      "agencyOrPortal": {
        "en": "Sarathi Portal / DigiLocker",
        "hi": "सारथी पोर्टल / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Instant generation",
        "hi": "तुरंत जारी"
      },
      "mode": "online",
      "officialSource": {
        "en": "Motor Vehicles Act, 1988 (Section 8)",
        "hi": "मोटर वाहन अधिनियम, 1988 (धारा 8)"
      },
      "sourceReference": {
        "en": "Section 8(6) of Motor Vehicles Act, 1988",
        "hi": "Section 8(6) of Motor Vehicles Act, 1988"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Pay Driving Licence Fees & Book RTO Testing Track Appointment",
        "hi": "ड्राइविंग लाइसेंस शुल्क का भुगतान करें एवं आरटीओ ट्रैक अपॉइंटमेंट बुक करें"
      },
      "description": {
        "en": "Log into Sarathi, pay the statutory Driving Licence test and smart card fee, and schedule an appointment date and time at your jurisdictional RTO automated driving test track.",
        "hi": "सारथी में लॉगिन करें, वैधानिक ड्राइविंग टेस्ट और स्मार्ट कार्ड शुल्क का भुगतान करें, और अपने अधिकार क्षेत्र के आरटीओ ऑटोमेटेड ड्राइविंग टेस्ट ट्रैक पर स्लॉट बुक करें।"
      },
      "agencyOrPortal": {
        "en": "Sarathi Parivahan Payment Gateway",
        "hi": "सारथी परिवहन पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Rule 32 of Central Motor Vehicles Rules, 1989",
        "hi": "CMVR नियम 32 शुल्क अनुसूची"
      },
      "sourceReference": {
        "en": "CMVR Rule 32 Fee Schedule",
        "hi": "CMVR Rule 32 Fee Schedule"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "Appear for Practical Driving Skill Test at RTO Track",
        "hi": "आरटीओ ट्रैक पर व्यावहारिक ड्राइविंग कौशल परीक्षा में उपस्थित हों"
      },
      "description": {
        "en": "Bring your vehicle (two-wheeler / four-wheeler), original Learner's Licence, vehicle documents (RC, Insurance, PUCC), and demonstrate driving proficiency on the automated sensor-based RTO track.",
        "hi": "अपना वाहन (दोपहिया/चौपहिया), मूल लर्नर लाइसेंस और वाहन दस्तावेज़ (RC, बीमा, PUCC) लेकर आएं और सेंसर-आधारित आरटीओ ट्रैक पर ड्राइविंग दक्षता प्रदर्शित करें।"
      },
      "agencyOrPortal": {
        "en": "Jurisdictional RTO Automated Driving Test Track",
        "hi": "क्षेत्रीय परिवहन कार्यालय (RTO) ऑटोमेटेड ड्राइविंग ट्रैक"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "1 - 2 Hours at RTO",
        "hi": "आरटीओ में 1 - 2 घंटे"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Motor Vehicles Act, 1988 (Section 9) & CMVR Rule 15",
        "hi": "मोटर वाहन अधिनियम, 1988 (धारा 9) एवं CMVR नियम 15"
      },
      "sourceReference": {
        "en": "Section 9(3) of Motor Vehicles Act, 1988",
        "hi": "Section 9(3) of Motor Vehicles Act, 1988"
      }
    }
  ],
  "warnings": [
    {
      "en": "Beware of unauthorized agents outside RTOs. All application slots and fees must be processed strictly through parivahan.gov.in.",
      "hi": "आरटीओ के बाहर अनधिकृत एजेंटों/दलालों से सावधान रहें। सभी आवेदन स्लॉट और शुल्क केवल parivahan.gov.in पर ही जमा करें।"
    },
    {
      "en": "A Learner's Licence is valid for 6 months across India. You must take your practical test between Day 30 and Day 180.",
      "hi": "लर्नर लाइसेंस पूरे भारत में 6 महीने के लिए वैध होता है। आपको 30वें दिन से 180वें दिन के बीच व्यावहारिक परीक्षा देनी होगी।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र नागरिक मार्गदर्शन मंच है। ड्राइविंग लाइसेंस केवल आधिकारिक परिवहन विभाग द्वारा जारी किया जाता है।"
  }
},
  "aadhaar-address-update": {
  "id": "aadhaar-address-update",
  "title": {
    "en": "Aadhaar Card Address Update Online",
    "hi": "आधार कार्ड में पता ऑनलाइन अपडेट"
  },
  "category": {
    "en": "Aadhaar & Identity",
    "hi": "आधार एवं पहचान"
  },
  "shortDescription": {
    "en": "Update your residential address on your Aadhaar card online through the official myAadhaar portal using valid Proof of Address (PoA) or Head of Family (HoF) consent.",
    "hi": "मान्य पता प्रमाण (PoA) या परिवार के मुखिया (HoF) की सहमति का उपयोग करके आधिकारिक myAadhaar पोर्टल पर अपने आधार कार्ड का पता ऑनलाइन अपडेट करें।"
  },
  "fullOverview": {
    "en": "UIDAI allows Indian residents to modify their residential address directly online. You can upload scanned color copies of approved address proofs (such as electricity bill, bank passbook, rent agreement, or voter card) or request address verification via Head of Family (HoF) relationship proof.",
    "hi": "यूआईडीएआई भारतीय निवासियों को अपना आवासीय पता सीधे ऑनलाइन संशोधित करने की अनुमति देता है। आप स्वीकृत पता प्रमाण (जैसे बिजली बिल, बैंक पासबुक, किराया समझौता, या मतदाता कार्ड) अपलोड कर सकते हैं या परिवार के मुखिया के संबंध प्रमाण द्वारा सत्यापन कर सकते हैं।"
  },
  "authority": {
    "en": "Unique Identification Authority of India (UIDAI), Ministry of Electronics and IT (MeitY)",
    "hi": "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)"
  },
  "department": {
    "en": "Unique Identification Authority of India (UIDAI), Ministry of Electronics and IT (MeitY)",
    "hi": "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI), इलेक्ट्रॉनिक्स एवं आईटी मंत्रालय"
  },
  "source": {
    "en": "Unique Identification Authority of India (UIDAI)",
    "hi": "आधार (नामांकन एवं अद्यतन) विनियम, 2016"
  },
  "officialSource": {
    "en": "Unique Identification Authority of India (UIDAI)",
    "hi": "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (सभी राज्य एवं केंद्र शासित प्रदेश)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आधार ओटीपी / डिजिलॉकर)"
  },
  "officialPortal": {
    "name": {
      "en": "UIDAI myAadhaar Portal",
      "hi": "माई आधार पोर्टल (myAadhaar - UIDAI)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹50 (Statutory UIDAI Online Fee)",
      "hi": "₹50 (वैधानिक यूआईडीएआई ऑनलाइन शुल्क)"
    },
    "verificationSource": {
      "en": "Unique Identification Authority of India (UIDAI) Official Notification",
      "hi": "यूआईडीएआई आधिकारिक शुल्क अनुसूची"
    }
  },
  "feeInfo": {
    "en": "₹50 (Statutory UIDAI Online Fee)",
    "hi": "₹50 (वैधानिक यूआईडीएआई ऑनलाइन शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "5 - 15 Working Days",
      "hi": "3 - 7 कार्य दिवस (अधिकतम 15 दिन)"
    },
    "statutoryAct": {
      "en": "Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016",
      "hi": "आधार अधिनियम, 2016"
    }
  },
  "processingInfo": {
    "en": "5 - 15 Working Days",
    "hi": "3 - 7 कार्य दिवस (अधिकतम 15 दिन)"
  },
  "eligibility": [
    {
      "en": "Any Indian resident holding a valid 12-digit Aadhaar number.",
      "hi": "वैध 12-अंकीय आधार संख्या रखने वाला कोई भी भारतीय निवासी।"
    },
    {
      "en": "Aadhaar MUST be linked with an active mobile phone number to receive mandatory one-time passwords (OTP).",
      "hi": "अनिवार्य ओटीपी प्राप्त करने के लिए आधार सक्रिय मोबाइल नंबर से लिंक होना चाहिए।"
    },
    {
      "en": "Must have a valid supporting address document in applicant's name OR Head of Family (HoF) consent with proof of relationship.",
      "hi": "आवेदक के नाम पर वैध पता प्रमाण या परिवार के मुखिया (HoF) की सहमति आवश्यक।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Address (PoA)",
        "hi": "पते का प्रमाण (PoA)"
      },
      "type": {
        "en": "Digital (DigiLocker) / Scanned PDF",
        "hi": "डिजिटल (डिजिलॉकर) / स्कैन की गई प्रति"
      },
      "description": {
        "en": "Official document showing full resident name and new address.",
        "hi": "निवासी का पूरा नाम और नया आवासीय पता दर्शाने वाला आधिकारिक दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Electricity/Water Bill (< 3 months old), Bank Passbook with photo, Voter ID Card, Registered Rent Agreement",
        "hi": "बिजली/पानी बिल (< 3 माह), फोटो युक्त बैंक पासबुक, मतदाता पहचान पत्र, पंजीकृत किराया समझौता"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Mobile Number linked with Aadhaar",
        "hi": "आधार से लिंक मोबाइल नंबर"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी"
      },
      "description": {
        "en": "Active SIM required to receive UIDAI 6-digit authentication OTP.",
        "hi": "यूआईडीएआई 6-अंकीय प्रमाणीकरण ओटीपी प्राप्त करने हेतु सक्रिय सिम।"
      },
      "commonExamples": {
        "en": "Registered Mobile Number",
        "hi": "पंजीकृत मोबाइल नंबर"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Login to myAadhaar Portal via Mobile OTP",
        "hi": "मोबाइल ओटीपी द्वारा myAadhaar पोर्टल में लॉगिन करें"
      },
      "description": {
        "en": "Open https://myaadhaar.uidai.gov.in and login using your 12-digit Aadhaar number, captcha, and 6-digit OTP sent to your linked mobile number.",
        "hi": "https://myaadhaar.uidai.gov.in खोलें और अपना 12-अंकीय आधार नंबर, कैप्चा और मोबाइल पर आए 6-अंकीय ओटीपी दर्ज करके लॉगिन करें।"
      },
      "agencyOrPortal": {
        "en": "myaadhaar.uidai.gov.in",
        "hi": "myAadhaar पोर्टल (myaadhaar.uidai.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 - 3 Minutes",
        "hi": "2 - 3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "UIDAI Aadhaar (Enrolment and Update) Regulations, 2016",
        "hi": "आधार विनियम, 2016 (विनियम 28)"
      },
      "sourceReference": {
        "en": "Regulation 28 of Aadhaar Regulations, 2016",
        "hi": "Regulation 28 of Aadhaar Regulations, 2016"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Select 'Address Update' & Choose Verification Route",
        "hi": "'Address Update' चुनें और सत्यापन माध्यम चुनें"
      },
      "description": {
        "en": "Click 'Update Address Online'. Choose between 'Update Address via Valid Document Proof' or 'Head of Family (HoF) Based Address Update'.",
        "hi": "'Update Address Online' पर क्लिक करें। 'दस्तावेज़ प्रमाण द्वारा पता अपडेट' या 'परिवार के मुखिया (HoF) आधारित अपडेट' में से चुनें।"
      },
      "agencyOrPortal": {
        "en": "myAadhaar Self Service Portal",
        "hi": "myAadhaar सेल्फ सर्विस पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "UIDAI Circular on Address Update Mechanism",
        "hi": "यूआईडीएआई दस्तावेज़ सूची परिपत्र"
      },
      "sourceReference": {
        "en": "UIDAI Document List Circular 2023",
        "hi": "UIDAI Document List Circular 2023"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Enter New Residential Address Details",
        "hi": "नया पता विवरण दर्ज करें और सहायक दस्तावेज़ अपलोड करें"
      },
      "description": {
        "en": "Type in house/flat number, street, locality, landmark, pincode, village/town, post office, district, and state exactly as shown in your address document.",
        "hi": "घर का नंबर, गली, इलाका, लैंडमार्क और पिन कोड भरें। ड्रॉपडाउन से दस्तावेज़ प्रकार चुनें और स्पष्ट रंगीन पीडीएफ या जेपीजी अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "myAadhaar Form Engine",
        "hi": "myAadhaar ऑनलाइन अपलोड सिस्टम"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 - 8 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "UIDAI Data Standard Guidelines",
        "hi": "यूआईडीएआई पता सत्यापन मानक"
      },
      "sourceReference": {
        "en": "UIDAI Standard Operating Procedure (SOP) for Demographic Updates",
        "hi": "UIDAI Standard Operating Procedure (SOP) for Demographic Updates"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Upload Supporting Document & Pay Statutory Government Fee",
        "hi": "₹50 वैधानिक यूआईडीएआई शुल्क का ऑनलाइन भुगतान करें"
      },
      "description": {
        "en": "Select the document type from the approved list and upload a clear color PDF/JPEG (under 2MB). Pay the official non-refundable fee of ₹50 via UPI, credit/debit card, or net banking.",
        "hi": "यूपीआई, नेट बैंकिंग, या डेबिट/क्रेडिट कार्ड के माध्यम से ₹50 गैर-वापसी योग्य सरकारी शुल्क का भुगतान करें।"
      },
      "agencyOrPortal": {
        "en": "UIDAI Payment Gateway",
        "hi": "यूआईडीएआई पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Aadhaar (Enrolment and Update) Regulations, 2016 (Schedule II)",
        "hi": "यूआईडीएआई राजपत्र अधिसूचना"
      },
      "sourceReference": {
        "en": "Schedule II Fee Notification, UIDAI",
        "hi": "Schedule II Fee Notification, UIDAI"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Track Service Request Number (SRN) & Download Updated e-Aadhaar",
        "hi": "पावती पर्ची (URN) सहेजें और स्थिति ट्रैक करें"
      },
      "description": {
        "en": "Save the 14-digit SRN from your receipt. UIDAI backend verification verifies the document. Once approved, download the updated e-Aadhaar with verified digital signature.",
        "hi": "28-अंकीय सेवा अनुरोध संख्या (URN) वाली पावती रसीद डाउनलोड करें। अनुमोदन के बाद अद्यतन ई-आधार तुरंत डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "UIDAI Verification Engine & myAadhaar",
        "hi": "myAadhaar स्थिति ट्रैकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 - 15 Working Days",
        "hi": "तुरंत पावती"
      },
      "mode": "online",
      "officialSource": {
        "en": "Aadhaar Act, 2016",
        "hi": "यूआईडीएआई सेवा स्तर गारंटी"
      },
      "sourceReference": {
        "en": "Section 31 of Aadhaar Act, 2016",
        "hi": "Section 31 of Aadhaar Act, 2016"
      }
    }
  ],
  "warnings": [
    {
      "en": "If your mobile number is NOT linked with Aadhaar, you cannot update your address online. You must visit an authorized Aadhaar Seva Kendra in person.",
      "hi": "आधार में पता अपडेट करने के लिए कभी भी फर्जी या संपादित दस्तावेज़ अपलोड न करें। धारा 34 के तहत गलत जानकारी देना दंडनीय अपराध है।"
    },
    {
      "en": "The address on the uploaded document must match character-by-character with the typed address to avoid rejection.",
      "hi": "यदि आपका मोबाइल नंबर आधार में लिंक नहीं है, तो आपको नजदीकी आधार सेवा केंद्र पर व्यक्तिगत रूप से जाना होगा।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र नागरिक गाइड है। आधार केवल यूआईडीएआई द्वारा प्रबंधित किया जाता है।"
  }
},
  "income-certificate": {
  "id": "income-certificate",
  "title": {
    "en": "Income Certificate (Aaple Sarkar / e-District)",
    "hi": "आय प्रमाण पत्र (आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "category": {
    "en": "Certificates & Revenue",
    "hi": "प्रमाण पत्र एवं राजस्व अभिलेख"
  },
  "shortDescription": {
    "en": "Apply for an official annual family income certificate issued by the Tehsildar/Sub-Divisional Magistrate for scholarships, college fee waivers, and EWS quota.",
    "hi": "सरकारी योजनाओं, कॉलेज शुल्क प्रतिपूर्ति, छात्रवृत्ति और आरक्षण लाभों के लिए राजस्व विभाग (तहसीलदार) से आधिकारिक वार्षिक आय प्रमाण पत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "An Income Certificate is an official document issued by the State Revenue Department (such as Aaple Sarkar in Maharashtra or eDistrict in other states). It certifies the annual income of an individual and their family from all sources, serving as primary evidence for higher education fee concessions, social welfare schemes, and reservation quotas.",
    "hi": "राज्य सरकार के राजस्व विभाग द्वारा जारी किया जाने वाला एक वैधानिक प्रमाण पत्र जो पिछले वित्तीय वर्ष में किसी व्यक्ति या परिवार की वार्षिक कुल आय को प्रमाणित करता है। महाराष्ट्र में यह सेवा 'सेवा का अधिकार अधिनियम' के तहत आपले सरकार पोर्टल पर प्रदान की जाती है।"
  },
  "authority": {
    "en": "Revenue & District Administration Department, Government of Maharashtra & State Governments",
    "hi": "तहसीलदार / उप-विभागीय मजिस्ट्रेट (SDM), राजस्व विभाग"
  },
  "department": {
    "en": "Revenue & District Administration Department, Government of Maharashtra & State Governments",
    "hi": "राजस्व विभाग, संबंधित राज्य सरकार (महाराष्ट्र आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "source": {
    "en": "Revenue and Forest Department, Government of Maharashtra",
    "hi": "महाराष्ट्र लोक सेवा गारंटी अधिनियम, 2015 एवं राज्य राजस्व संहिता"
  },
  "officialSource": {
    "en": "Revenue and Forest Department, Government of Maharashtra",
    "hi": "राजस्व विभाग, महाराष्ट्र सरकार (Aaple Sarkar)"
  },
  "availability": {
    "en": "State Specific (maharashtra, delhi, karnataka, gujarat, uttar-pradesh, rajasthan, tamil-nadu, telangana, west-bengal, madhya-pradesh)",
    "hi": "राज्य क्षेत्राधिकार (महाराष्ट्र एवं अन्य राज्य)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "officialPortal": {
    "name": {
      "en": "Aaple Sarkar (Government of Maharashtra)",
      "hi": "आपले सरकार पोर्टल (Aaple Sarkar Maharashtra)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹33.60 to ₹50 (Statutory State e-District Portal Fee)",
      "hi": "₹33.60 (सेवा का अधिकार वैधानिक शुल्क + जीएसटी)"
    },
    "verificationSource": {
      "en": "Maharashtra Right to Public Services Act (RTS) Notification & State Portal Rates",
      "hi": "महाराष्ट्र लोक सेवा हक्क अधिनियम नियम एवं दर तालिका"
    }
  },
  "feeInfo": {
    "en": "₹33.60 to ₹50 (Statutory State e-District Portal Fee)",
    "hi": "₹33.60 (सेवा का अधिकार वैधानिक शुल्क + जीएसटी)"
  },
  "processingTime": {
    "timeText": {
      "en": "7 - 15 Working Days (Legally guaranteed under RTS Act)",
      "hi": "7 - 15 कार्य दिवस (सेवा का अधिकार कानूनन गारंटी)"
    },
    "statutoryAct": {
      "en": "Maharashtra Right to Public Services Act, 2015",
      "hi": "महाराष्ट्र लोक सेवा गारंटी अधिनियम, 2015"
    }
  },
  "processingInfo": {
    "en": "7 - 15 Working Days (Legally guaranteed under RTS Act)",
    "hi": "7 - 15 कार्य दिवस (सेवा का अधिकार कानूनन गारंटी)"
  },
  "eligibility": [
    {
      "en": "Applicant or applicant's family must be a resident of the jurisdiction/tehsil.",
      "hi": "संबंधित राज्य/ज़िले का स्थायी निवासी।"
    },
    {
      "en": "Applicant must have demonstrable legal income through agriculture, wages, trade, business, or salary.",
      "hi": "सत्यापन योग्य वैध आय स्रोत (वेतन पर्ची, आईटीआर, फॉर्म 16, तलाठी रिपोर्ट, या कृषि आय)।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Identity",
        "hi": "आवेदक की पहचान का प्रमाण (PoI)"
      },
      "type": {
        "en": "Aadhaar e-KYC / Original",
        "hi": "स्व-सत्यापित प्रति / ई-केवाईसी"
      },
      "description": {
        "en": "Government-issued identity proof.",
        "hi": "सरकारी पहचान प्रमाण पत्र।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Voter ID, or PAN Card",
        "hi": "आधार कार्ड, मतदाता पहचान पत्र, पैन कार्ड, या पासपोर्ट"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Address",
        "hi": "आवासीय पता प्रमाण (PoA)"
      },
      "type": {
        "en": "Digital (DigiLocker) / Self-Attested",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Proof of residence in the respective taluka/tehsil.",
        "hi": "तहसील क्षेत्राधिकार में पते का प्रमाण।"
      },
      "commonExamples": {
        "en": "Electricity Bill, Ration Card, or Water Bill",
        "hi": "राशन कार्ड, बिजली बिल, अधिवास प्रमाण पत्र, या संपत्ति कर रसीद"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Income",
        "hi": "आय का प्रमाण"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "मूल प्रति / नियोक्ता प्रमाण पत्र"
      },
      "description": {
        "en": "Official proof of income for the preceding financial year.",
        "hi": "सभी स्रोतों से वार्षिक आय की पुष्टि करने वाला दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Salary Slips, Form 16, ITR acknowledgment, or Talathi / Village Officer Income Report",
        "hi": "फॉर्म 16 / वेतन पर्ची, आईटीआर रसीद, तलाठी आय रिपोर्ट, या तहसीलदार हलफनामा"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Self-Declaration Affidavit",
        "hi": "स्व-घोषणा पत्र (फॉर्म 1)"
      },
      "type": {
        "en": "Self-Declaration Format",
        "hi": "हस्ताक्षरित प्रपत्र"
      },
      "description": {
        "en": "Standard self-declaration format as prescribed by state government.",
        "hi": "वार्षिक पारिवारिक आय की वैधानिक स्व-घोषणा।"
      },
      "commonExamples": {
        "en": "Aaple Sarkar / e-District pre-formatted declaration",
        "hi": "आपले सरकार पोर्टल से डाउनलोड किया गया हस्ताक्षरित प्रपत्र"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Register on State e-District / Aaple Sarkar Portal",
        "hi": "आपले सरकार / राज्य ई-डिस्ट्रिक्ट पोर्टल पर नागरिक खाता बनाएं"
      },
      "description": {
        "en": "Visit the state portal (e.g., https://aaplesarkar.mahaonline.gov.in for Maharashtra, or state eDistrict). Create a citizen profile with mobile OTP and Aadhaar authentication.",
        "hi": "https://aaplesarkar.mahaonline.gov.in पर जाएं और आधार ओटीपी या मोबाइल नंबर का उपयोग करके नागरिक प्रोफाइल पंजीकृत करें।"
      },
      "agencyOrPortal": {
        "en": "aaplesarkar.mahaonline.gov.in / State e-District",
        "hi": "आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 - 10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Right to Public Services Act (RTS)",
        "hi": "महाराष्ट्र आरटीएस नियम 2015"
      },
      "sourceReference": {
        "en": "Maharashtra Right to Public Services Act, 2015",
        "hi": "Maharashtra Right to Public Services Act, 2015"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Select 'Revenue Department' > 'Income Certificate'",
        "hi": "राजस्व विभाग चुनें और 'Income Certificate' चुनें"
      },
      "description": {
        "en": "Navigate to Revenue Department services and select 'Income Certificate'. Choose the required validity period (1-Year or 3-Year certificate).",
        "hi": "राजस्व विभाग सेवाओं में जाएं, 'प्रमाणपत्र' चुनें और 1-वर्षीय या 3-वर्षीय आय प्रमाण पत्र आवेदन चुनें।"
      },
      "agencyOrPortal": {
        "en": "State Revenue Administration Module",
        "hi": "राजस्व प्रशासन सेवा विंडो"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Revenue Department Citizen Charter",
        "hi": "राजस्व विभाग कार्यविधि"
      },
      "sourceReference": {
        "en": "Revenue Department Notification No. RTS-2015/CR-45/PR-1",
        "hi": "Revenue Department Notification No. RTS-2015/CR-45/PR-1"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Fill Family Income Breakdown & Upload Documents",
        "hi": "आवेदक विवरण भरें और आवश्यक दस्तावेज़ अपलोड करें"
      },
      "description": {
        "en": "Enter annual income breakdown across salary, business, agriculture, and other sources. Upload clear PDF scans of proof of identity, address, income slips, and self-declaration.",
        "hi": "पारिवारिक आय विवरण, व्यवसाय भरें और आवेदक की फोटो, पहचान प्रमाण, पता प्रमाण और तलाठी/आईटीआर आय प्रमाण पत्र अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar / e-District Document Engine",
        "hi": "आपले सरकार दस्तावेज़ रिपोजिटरी"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "10 - 15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State e-Governance Standards",
        "hi": "महाराष्ट्र लोक सेवा नियम"
      },
      "sourceReference": {
        "en": "State Document Verification Manual",
        "hi": "State Document Verification Manual"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Pay Statutory Portal Fee Online",
        "hi": "आरटीएस वैधानिक सरकारी शुल्क का भुगतान करें"
      },
      "description": {
        "en": "Pay the prescribed statutory processing fee (₹33.60 in Maharashtra) via UPI, debit card, or net banking. Download the system-generated acknowledgement receipt.",
        "hi": "नेट बैंकिंग, यूपीआई या डेबिट कार्ड के माध्यम से ₹33.60 का ऑनलाइन भुगतान करें और पावती रसीद प्राप्त करें।"
      },
      "agencyOrPortal": {
        "en": "State Treasury / Payment Gateway",
        "hi": "महाऑनलाइन पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Right to Services Rules",
        "hi": "महाराष्ट्र शासन निर्णय (GR)"
      },
      "sourceReference": {
        "en": "Government Gazette Fee Notification",
        "hi": "Government Gazette Fee Notification"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Tehsildar Inquiry & Download Digitally Signed Certificate",
        "hi": "तहसीलदार स्तर पर सत्यापन एवं डिजिटल हस्ताक्षरित प्रमाणपत्र डाउनलोड करें"
      },
      "description": {
        "en": "The Talathi / Revenue Circle Officer conducts field inquiry if necessary. Upon approval by the Tehsildar, download your digitally signed certificate with verifiable barcode.",
        "hi": "तहसीलदार कार्यालय द्वारा अनुमोदन के बाद बारकोड और डिजिटल हस्ताक्षर युक्त आधिकारिक आय प्रमाण पत्र डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Office of the Tehsildar & Aaple Sarkar Portal",
        "hi": "आपले सरकार डाउनलोड विंडो / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "7 - 15 Working Days",
        "hi": "7 - 15 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Right to Public Services Statutory Guarantee",
        "hi": "डिजिटल हस्ताक्षर कानून (IT Act 2000)"
      },
      "sourceReference": {
        "en": "Section 4 of Maharashtra Right to Public Services Act, 2015",
        "hi": "Section 4 of Maharashtra Right to Public Services Act, 2015"
      },
      "officialTip": {
        "en": "Under the Maharashtra Right to Public Services Act, this certificate is legally required to be issued within 15 working days.",
        "hi": "Under the Maharashtra Right to Public Services Act, this certificate is legally required to be issued within 15 working days."
      }
    }
  ],
  "warnings": [
    {
      "en": "Providing a false income declaration is a criminal offense under the Bharatiya Nyaya Sanhita / Indian Penal Code.",
      "hi": "गलत आय दर्शाने पर प्रमाण पत्र रद्द हो सकता है और कानूनी कार्रवाई हो सकती है।"
    },
    {
      "en": "Check with your educational institution whether a 1-year or 3-year certificate is required for fee concessions.",
      "hi": "छात्रवृत्ति और प्रवेश के लिए प्रमाण पत्र की वित्तीय वर्ष वैधता अवश्य जांच लें।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र नागरिक सूचना पोर्टल है। प्रमाण पत्र तहसीलदार द्वारा जारी किया जाता है।"
  }
},
  "udyam-msme-registration": {
  "id": "udyam-msme-registration",
  "title": {
    "en": "Udyam MSME Small Business Registration",
    "hi": "उद्यम एमएसएमई लघु व्यवसाय पंजीकरण"
  },
  "category": {
    "en": "Business & Commerce",
    "hi": "कर एवं व्यापार"
  },
  "shortDescription": {
    "en": "100% Free official central government registration for micro, small, and medium businesses to unlock priority bank loans, lower trademark fees, and government subsidies.",
    "hi": "सरकारी सब्सिडी, संपार्श्विक-मुक्त ऋण, और प्राथमिकता क्षेत्र ऋण प्राप्त करने के लिए एमएसएमई मंत्रालय से निःशुल्क स्थायी उद्यम पंजीकरण प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Udyam Registration is the official portal of the Ministry of MSME, Government of India. Any sole proprietorship, partnership, LLP, private limited company, or family enterprise starting or operating a business in India can register online for free. The resulting Udyam Registration Certificate with a permanent QR code is used for opening current bank accounts and claiming government subsidies.",
    "hi": "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय (MoMSME) द्वारा प्रदान किया जाने वाला 100% निःशुल्क और पेपरलेस ऑनलाइन स्थायी पंजीकरण। यह किसी भी कागजी दस्तावेज़ को अपलोड किए बिना केवल आधार और पैन के आधार पर तुरंत जारी किया जाता है।"
  },
  "authority": {
    "en": "Ministry of Micro, Small and Medium Enterprises (MSME), Government of India",
    "hi": "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MoMSME)"
  },
  "department": {
    "en": "Ministry of Micro, Small and Medium Enterprises (MSME), Government of India",
    "hi": "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MoMSME), भारत सरकार"
  },
  "source": {
    "en": "Ministry of Micro, Small and Medium Enterprises, Government of India",
    "hi": "एमएसएमई विकास अधिनियम, 2006 एवं भारत का राजपत्र S.O. 2119(E)"
  },
  "officialSource": {
    "en": "Ministry of Micro, Small and Medium Enterprises, Government of India",
    "hi": "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय, भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (सभी राज्य एवं केंद्र शासित प्रदेश)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आधार ओटीपी / डिजिलॉकर)"
  },
  "officialPortal": {
    "name": {
      "en": "Udyam Registration Portal (Ministry of MSME)",
      "hi": "उद्यम पंजीकरण पोर्टल (Udyam Registration Portal)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) - 100% Free Government Service",
      "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
    },
    "verificationSource": {
      "en": "Ministry of MSME Official Guidelines",
      "hi": "एमएसएमई मंत्रालय राजपत्र अधिसूचना संख्या S.O. 2119(E)"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) - 100% Free Government Service",
    "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "Instant to 1 - 3 Working Days",
      "hi": "तुरंत पावती | 1 - 3 दिनों में डिजिटल प्रमाणपत्र"
    },
    "statutoryAct": {
      "en": "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006",
      "hi": "एमएसएमई विकास अधिनियम, 2006"
    }
  },
  "processingInfo": {
    "en": "Instant to 1 - 3 Working Days",
    "hi": "तुरंत पावती | 1 - 3 दिनों में डिजिटल प्रमाणपत्र"
  },
  "eligibility": [
    {
      "en": "Any individual entrepreneur or legal entity operating a manufacturing, retail, or service business in India.",
      "hi": "एकल स्वामित्व (Proprietorship), साझेदारी, एलएलपी, या प्राइवेट लिमिटेड कंपनी।"
    },
    {
      "en": "Must have a valid Aadhaar number of the proprietor, managing partner, or authorized director.",
      "hi": "मालिक, प्रबंध भागीदार, या निदेशक के पास वैध आधार और पैन होना आवश्यक।"
    },
    {
      "en": "PAN number is mandatory (linked with Aadhaar).",
      "hi": "संयंत्र और मशीनरी में निवेश: सूक्ष्म (< ₹1 करोड़), लघु (< ₹10 करोड़), मध्यम (< ₹50 करोड़)।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proprietor / Partner Aadhaar Number",
        "hi": "मालिक / निदेशक का आधार कार्ड"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी"
      },
      "description": {
        "en": "12-digit Aadhaar number with active mobile for OTP validation.",
        "hi": "उद्यमी के आधार पर सक्रिय मोबाइल नंबर होना आवश्यक है।"
      },
      "commonExamples": {
        "en": "Aadhaar Card",
        "hi": "आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Permanent Account Number (PAN)",
        "hi": "व्यवसाय का स्थायी खाता संख्या (पैन)"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आयकर डेटाबेस सत्यापन"
      },
      "description": {
        "en": "Individual PAN for proprietorship; Entity PAN for Partnership / LLP / Pvt Ltd.",
        "hi": "एकल स्वामित्व के लिए व्यक्तिगत पैन, कंपनियों के लिए व्यावसायिक पैन।"
      },
      "commonExamples": {
        "en": "PAN Card",
        "hi": "पैन कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Operating Bank Account Details",
        "hi": "बैंक खाता विवरण"
      },
      "type": {
        "en": "Self-Reported",
        "hi": "डिजिटल प्रविष्टि"
      },
      "description": {
        "en": "Bank Account Number and IFSC Code for business transactions.",
        "hi": "व्यवसाय का बैंक खाता नंबर और आईएफएससी कोड।"
      },
      "commonExamples": {
        "en": "Bank Passbook or Cancelled Cheque",
        "hi": "बैंक पासबुक या चेक की प्रति"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Visit Official Udyam Registration Portal",
        "hi": "उद्यम आधिकारिक पोर्टल पर जाएं और 'For New Entrepreneurs' चुनें"
      },
      "description": {
        "en": "Open https://udyamregistration.gov.in. Click on 'For New Entrepreneurs who are not Registered yet as MSME or those with EM-II'.",
        "hi": "https://udyamregistration.gov.in पर जाएं और 'For New Entrepreneurs who are not Registered yet as MSME' पर क्लिक करें।"
      },
      "agencyOrPortal": {
        "en": "udyamregistration.gov.in",
        "hi": "उद्यम पंजीकरण पोर्टल (udyamregistration.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Ministry of MSME Gazette Notification S.O. 2119(E)",
        "hi": "एमएसएमई मंत्रालय अधिसूचना"
      },
      "sourceReference": {
        "en": "MSMED Act, 2006 Notification dated 26th June 2020",
        "hi": "MSMED Act, 2006 Notification dated 26th June 2020"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Validate Aadhaar & PAN via CBDT API Gateway",
        "hi": "मालिक के आधार नंबर और नाम को ओटीपी से सत्यापित करें"
      },
      "description": {
        "en": "Enter your 12-digit Aadhaar number and name as on Aadhaar. Validate mobile OTP. Next, enter PAN to fetch enterprise tax verification and ITR status automatically.",
        "hi": "आधार नंबर और उद्यमी का नाम दर्ज करें। आधार से जुड़े मोबाइल पर आए 6-अंकीय ओटीपी से प्रमाणीकरण पूरा करें।"
      },
      "agencyOrPortal": {
        "en": "CBDT / UIDAI / MSME API Gateway",
        "hi": "यूआईडीएआई आधार प्रमाणीकरण गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Ministry of MSME Standard Operating Procedure",
        "hi": "आधार ई-केवाईसी मानक"
      },
      "sourceReference": {
        "en": "Udyam Circular No. 01/2020",
        "hi": "Udyam Circular No. 01/2020"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Enter Enterprise Details & National Industry Classification (NIC) Code",
        "hi": "पैन सत्यापन और इकाई प्रकार का चयन करें"
      },
      "description": {
        "en": "Type in your business trade name, unit plant address, bank account number, IFSC code, and select your 4-digit/5-digit National Industry Classification (NIC) activity code.",
        "hi": "इकाई का प्रकार (Proprietorship, Partnership, Pvt Ltd) चुनें और पैन दर्ज करें। आयकर विभाग से पैन डेटा स्वचालित सत्यापित होगा।"
      },
      "agencyOrPortal": {
        "en": "National MSME Registry",
        "hi": "सीबीडीटी पैन सत्यापन गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Central Statistical Office (CSO) National Industrial Classification",
        "hi": "आयकर अधिनियम, 1961"
      },
      "sourceReference": {
        "en": "NIC 2008 Classification Standards",
        "hi": "NIC 2008 Classification Standards"
      },
      "officialTip": {
        "en": "Choose the NIC code that matches your primary activity (e.g. Retail sale of clothing, software development, restaurant).",
        "hi": "Choose the NIC code that matches your primary activity (e.g. Retail sale of clothing, software development, restaurant)."
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Self-Declare Investment & Download Lifetime Udyam Certificate",
        "hi": "इकाई का विवरण, एनआईसी कोड और बैंक खाता दर्ज करें"
      },
      "description": {
        "en": "Declare written down value of plant & machinery and turnover from past financial year. Submit final OTP. Your permanent Udyam Registration Certificate with QR code is generated instantly.",
        "hi": "व्यवसाय का नाम, कारखाना/कार्यालय का पता, बैंक खाता विवरण और राष्ट्रीय औद्योगिक वर्गीकरण (NIC) कोड दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "Ministry of MSME Digital Registry",
        "hi": "उद्यम ऑनलाइन फॉर्म"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Instant to 24 Hours",
        "hi": "5 - 10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Micro, Small and Medium Enterprises Development Act, 2006",
        "hi": "राष्ट्रीय औद्योगिक वर्गीकरण (NIC) 2008"
      },
      "sourceReference": {
        "en": "Section 7 of MSMED Act, 2006",
        "hi": "Section 7 of MSMED Act, 2006"
      }
    }
  ],
  "warnings": [
    {
      "en": "CRITICAL: Udyam Registration is 100% FREE on udyamregistration.gov.in. Never pay private fake intermediary websites charging ₹1,500 - ₹3,000.",
      "hi": "उद्यम पंजीकरण 100% निःशुल्क है। किसी भी फर्जी वेबसाइट को ₹1,000 - ₹3,000 'परामर्श शुल्क' न दें। केवल udyamregistration.gov.in का उपयोग करें।"
    },
    {
      "en": "No paper documents need to be physically submitted anywhere. The process is completely paperless and digital.",
      "hi": "उद्यम पोर्टल पर किसी भी भौतिक दस्तावेज़ को स्कैन करके अपलोड करने की आवश्यकता नहीं होती।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित तकनीकी मंच है। उद्यम पंजीकरण भारत सरकार द्वारा निःशुल्क प्रदान किया जाता है।"
  }
},
  "gumasta-licence-maharashtra": {
  "id": "gumasta-licence-maharashtra",
  "title": {
    "en": "Shop & Establishment (Gumasta Licence) - Maharashtra",
    "hi": "दुकान एवं स्थापना (गुमास्ता लाइसेंस) - महाराष्ट्र"
  },
  "category": {
    "en": "Business & State Licensing",
    "hi": "व्यापार एवं राज्य लाइसेंसिंग"
  },
  "shortDescription": {
    "en": "Mandatory operating registration under the Maharashtra Shops and Establishments Act for any commercial shop, office, boutique, or restaurant in Maharashtra.",
    "hi": "महाराष्ट्र में कोई भी दुकान, खुदरा व्यापार या वाणिज्यिक कार्यालय चलाने के लिए श्रम विभाग से अनिवार्य गुमास्ता पंजीकरण प्रमाणपत्र (फॉर्म एफ) प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Commonly known as the 'Gumasta License' in Mumbai, Pune, Thane, and across Maharashtra. Regulated under the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017. For small enterprises with 0 to 9 employees, the state provides an instant online Intimation receipt (Form G) with zero recurring renewals, required by banks to open a Current Account.",
    "hi": "महाराष्ट्र दुकान एवं प्रतिष्ठान (रोजगार एवं सेवा की शर्तों का विनियमन) अधिनियम, 2017 के तहत अनिवार्य। 10 से कम कर्मचारियों वाली दुकानों को केवल ऑनलाइन सूचना (Intimation - Form F) की आवश्यकता होती है, जबकि 10 या अधिक कर्मचारियों वाले प्रतिष्ठानों को पूर्ण पंजीकरण मिलता है।"
  },
  "authority": {
    "en": "Labour Department, Government of Maharashtra",
    "hi": "दुकान निरीक्षक, श्रम विभाग, महाराष्ट्र सरकार"
  },
  "department": {
    "en": "Labour Department, Government of Maharashtra",
    "hi": "श्रम आयुक्त कार्यालय एवं स्थानीय नगर निगम (बीएमसी / मनपा), महाराष्ट्र सरकार"
  },
  "source": {
    "en": "Labour Department, Government of Maharashtra",
    "hi": "महाराष्ट्र दुकान एवं प्रतिष्ठान अधिनियम, 2017 (अधिनियम सं. LXI 2017)"
  },
  "officialSource": {
    "en": "Labour Department, Government of Maharashtra",
    "hi": "श्रम विभाग, महाराष्ट्र सरकार (Aaple Sarkar / BMC CIS)"
  },
  "availability": {
    "en": "State Specific (maharashtra)",
    "hi": "राज्य क्षेत्राधिकार (महाराष्ट्र राज्य)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आपले सरकार / बीएमसी)"
  },
  "officialPortal": {
    "name": {
      "en": "Maharashtra Labour Department (LMS Portal)",
      "hi": "आपले सरकार / बीएमसी पोर्टल (Aaple Sarkar / BMC)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹0 for 0 to 9 workers (Free Intimation Receipt) | Scaled fee for 10+ employees",
      "hi": "10 से कम कर्मचारी: निःशुल्क (₹0) | 10+ कर्मचारी: ₹1,000 - ₹5,000"
    },
    "verificationSource": {
      "en": "Maharashtra Shops and Establishments Act, 2017 Gazette Notification",
      "hi": "महाराष्ट्र दुकान एवं प्रतिष्ठान नियम 2018 दर अनुसूची"
    }
  },
  "feeInfo": {
    "en": "₹0 for 0 to 9 workers (Free Intimation Receipt) | Scaled fee for 10+ employees",
    "hi": "10 से कम कर्मचारी: निःशुल्क (₹0) | 10+ कर्मचारी: ₹1,000 - ₹5,000"
  },
  "processingTime": {
    "timeText": {
      "en": "Instant (0-9 workers) | 3 - 5 Working Days (10+ workers)",
      "hi": "< 10 कर्मचारी: तुरंत रसीद | 10+ कर्मचारी: 3 - 7 कार्य दिवस"
    },
    "statutoryAct": {
      "en": "Maharashtra Shops and Establishments Act, 2017",
      "hi": "महाराष्ट्र दुकान एवं प्रतिष्ठान अधिनियम, 2017"
    }
  },
  "processingInfo": {
    "en": "Instant (0-9 workers) | 3 - 5 Working Days (10+ workers)",
    "hi": "< 10 कर्मचारी: तुरंत रसीद | 10+ कर्मचारी: 3 - 7 कार्य दिवस"
  },
  "eligibility": [
    {
      "en": "Any commercial establishment, retail shop, clothing boutique, eatery, or commercial firm operating within the state of Maharashtra.",
      "hi": "महाराष्ट्र के भीतर संचालित कोई भी दुकान, वाणिज्यिक कार्यालय, होटल, रेस्तरां, या सेवा प्रदाता।"
    },
    {
      "en": "Enterprises with 0 to 9 workers qualify for instant Intimation (Form F - Free lifetime receipt).",
      "hi": "व्यावसायिक परिसर पर वास्तविक कानूनी कब्जा (स्वामित्व या वैध रेंट एग्रीमेंट)।"
    },
    {
      "en": "Enterprises with 10 or more workers require formal Registration (Form A) with applicable statutory fee.",
      "hi": "दुकान के साइनबोर्ड पर मराठी (देवनागरी लिपि) का अनिवार्य प्रदर्शन।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Aadhaar Card of the Business Owner",
        "hi": "मालिक / साझेदार / निदेशक का आधार एवं पैन"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Identity verification of the proprietor or managing partner.",
        "hi": "पहचान और पते का प्रमाण।"
      },
      "commonExamples": {
        "en": "Aadhaar Card",
        "hi": "आधार कार्ड, पैन कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Shop Front Photograph with Name Board in Marathi",
        "hi": "परिसर का कानूनी कब्जा प्रमाण"
      },
      "type": {
        "en": "Digital Upload",
        "hi": "पंजीकृत प्रति / उपयोगिता बिल"
      },
      "description": {
        "en": "Clear photo showing the establishment name board written in Devanagari (Marathi) script.",
        "hi": "व्यावसायिक परिसर का कानूनी स्वामित्व या किराया समझौता।"
      },
      "commonExamples": {
        "en": "JPEG photo of shopfront with Marathi signboard",
        "hi": "पंजीकृत रेंट एग्रीमेंट, हालिया बिजली बिल (< 2 माह), संपत्ति कर रसीद"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Commercial Premises",
        "hi": "दुकान के साइनबोर्ड की स्पष्ट फोटो (मराठी अनिवार्य)"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "रंगीन फोटोग्राफ"
      },
      "description": {
        "en": "Document proving legal possession of commercial address.",
        "hi": "दुकान के सामने की फोटो जिसमें दुकान का नाम देवनागरी (मराठी) लिपि में स्पष्ट दिखे।"
      },
      "commonExamples": {
        "en": "Registered Rent Agreement, Electricity Bill of premises, or Municipal Property Tax receipt",
        "hi": "दुकान के अग्रभाग की स्पष्ट जेपीजी फोटो"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Access Maharashtra Labour Management System (LMS)",
        "hi": "आपले सरकार या बीएमसी सिटीजन पोर्टल पर लॉगिन करें"
      },
      "description": {
        "en": "Open https://lms.mahaonline.gov.in or access through Aaple Sarkar. Create an employer account using your Aadhaar or mobile number.",
        "hi": "मुंबई के लिए बीएमसी पोर्टल (portal.mcgm.gov.in) या शेष महाराष्ट्र के लिए आपले सरकार पर श्रम विभाग सेवा चुनें।"
      },
      "agencyOrPortal": {
        "en": "lms.mahaonline.gov.in",
        "hi": "आपले सरकार / बीएमसी पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Shops and Establishments Act, 2017",
        "hi": "महाराष्ट्र दुकान अधिनियम नियम"
      },
      "sourceReference": {
        "en": "Section 6 of Maharashtra Act No. LXI of 2017",
        "hi": "Section 6 of Maharashtra Act No. LXI of 2017"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Select Form F (Intimation for 0-9 Workers) or Form A (10+ Workers)",
        "hi": "कर्मचारी संख्या के आधार पर श्रेणी चुनें (< 10 या 10+ कर्मचारी)"
      },
      "description": {
        "en": "Select Form F if operating with 0 to 9 employees (exempt from recurring license fees). Select Form A if employing 10 or more workers.",
        "hi": "यदि कर्मचारी 0 से 9 हैं, तो 'Form F Intimation' चुनें (निःशुल्क)। यदि 10 या अधिक हैं, तो पूर्ण 'Form A Registration' चुनें।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar Labour Portal",
        "hi": "श्रम ई-सेवा गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Shops and Establishments Rules, 2018",
        "hi": "अधिनियम 2017 की धारा 6 एवं 7"
      },
      "sourceReference": {
        "en": "Rule 8 & Form F / Form A",
        "hi": "Rule 8 & Form F / Form A"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Enter Commercial Establishment Particulars",
        "hi": "व्यावसायिक विवरण भरें और परिसर का पता दर्ज करें"
      },
      "description": {
        "en": "Provide shop trade name, nature of business (e.g. Retail sale of garments, software consultancy, eatery), municipal ward, and physical commercial address.",
        "hi": "मालिक का नाम, व्यापार का स्वरूप, कर्मचारियों की संख्या (पुरुष/महिला), और स्थानीय वार्ड क्षेत्राधिकार दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "LMS Application Module",
        "hi": "दुकान पंजीकरण ऑनलाइन फॉर्म"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Labour Department Circular on Intimation Process",
        "hi": "श्रम विभाग मानक"
      },
      "sourceReference": {
        "en": "Government Notification No. MSA-01/2018/CR-14/Lab-10",
        "hi": "Government Notification No. MSA-01/2018/CR-14/Lab-10"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Upload Marathi Signboard Photograph & Premises Proof",
        "hi": "आवश्यक दस्तावेज़ और मराठी साइनबोर्ड फोटो अपलोड करें"
      },
      "description": {
        "en": "Upload clear photo of the commercial storefront displaying the prominent signboard in Devanagari Marathi script, along with commercial electricity bill or registered rent agreement.",
        "hi": "आधार, पैन, बिजली बिल/रेंट एग्रीमेंट और मराठी बोर्ड वाली दुकान की फोटो अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "LMS Document Engine",
        "hi": "दस्तावेज़ अपलोड मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Section 35 of Maharashtra Act No. LXI of 2017 (Signboard Mandate)",
        "hi": "महाराष्ट्र साइनबोर्ड नियम 2022"
      },
      "sourceReference": {
        "en": "Maharashtra Gazette Rule on Marathi Signboards",
        "hi": "Maharashtra Gazette Rule on Marathi Signboards"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Download Instant Form G Intimation Receipt (Gumasta)",
        "hi": "डिजिटल हस्ताक्षरित गुमास्ता पावती / प्रमाणपत्र तुरंत डाउनलोड करें"
      },
      "description": {
        "en": "Self-attest and submit. For establishments with 0-9 workers, the official Form G Intimation Receipt with QR code is generated instantly with lifetime validity and zero renewal requirement.",
        "hi": "< 10 कर्मचारियों के लिए डिजिटल रूप से हस्ताक्षरित फॉर्म एफ तुरंत डाउनलोड करें, जो व्यवसायिक चालू बैंक खाता खोलने हेतु मान्य है।"
      },
      "agencyOrPortal": {
        "en": "Government of Maharashtra Digital Seal",
        "hi": "आपले सरकार / बीएमसी डाउनलोड विंडो"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Instant (0-9 workers)",
        "hi": "तुरंत जारी (< 10 कर्मचारी)"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Shops and Establishments Act, 2017 (Section 6(2))",
        "hi": "महाराष्ट्र लोक सेवा गारंटी"
      },
      "sourceReference": {
        "en": "Form G Intimation Receipt Rules",
        "hi": "Form G Intimation Receipt Rules"
      },
      "officialTip": {
        "en": "Commercial banks strictly accept this Form G receipt as primary proof to open a Current Account.",
        "hi": "Commercial banks strictly accept this Form G receipt as primary proof to open a Current Account."
      }
    }
  ],
  "warnings": [
    {
      "en": "A signboard in Marathi (Devanagari script) is legally mandatory for all commercial establishments in Maharashtra.",
      "hi": "दुकान के साइनबोर्ड पर मराठी भाषा में नाम अन्य भाषाओं से बड़े या समान आकार में होना अनिवार्य है। उल्लंघन पर भारी जुर्माना हो सकता है।"
    },
    {
      "en": "Banks strictly require this Gumasta Intimation Receipt or Udyam Certificate to open a commercial Current Account.",
      "hi": "व्यवसाय शुरू करने के 30 दिनों के भीतर पंजीकरण या सूचना दर्ज करना अनिवार्य है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। गुमास्ता लाइसेंस स्थानीय नगर निगम और श्रम विभाग द्वारा जारी किया जाता है।"
  }
},
  "passport-application": {
  "id": "passport-application",
  "title": {
    "en": "Fresh Indian Passport Application & Re-issue",
    "hi": "नया भारतीय पासपोर्ट आवेदन एवं पुनर्जारी"
  },
  "category": {
    "en": "Passport & Travel",
    "hi": "पहचान एवं नागरिकता"
  },
  "shortDescription": {
    "en": "Apply online for a regular or Tatkaal Indian passport, pay official fees, book an appointment at Passport Seva Kendra (PSK), and complete police verification.",
    "hi": "पासपोर्ट सेवा पोर्टल (PSP) के माध्यम से नए भारतीय सामान्य पासपोर्ट (36/60 पृष्ठ) या नवीनीकरण हेतु ऑनलाइन आवेदन करें और पीएसके/पीओपीएसके में अपॉइंटमेंट बुक करें।"
  },
  "fullOverview": {
    "en": "Administered by the Ministry of External Affairs (MEA) through Passport Seva Kendras (PSK) and Post Office Passport Seva Kendras (POPSK). Complete the online application on passportindia.gov.in, pay the government fee, choose an appointment slot, present original documents for biometric capture, followed by local police verification.",
    "hi": "विदेश मंत्रालय (MEA) द्वारा केंद्रीय पासपोर्ट संगठन के माध्यम से संचालित। नागरिक ऑनलाइन आवेदन भरते हैं, शुल्क का भुगतान करते हैं, और बायोमेट्रिक्स, फोटो और मूल दस्तावेज़ सत्यापन के लिए पासपोर्ट सेवा केंद्र (PSK) में अपॉइंटमेंट शेड्यूल करते हैं।"
  },
  "authority": {
    "en": "Consular, Passport and Visa (CPV) Division, Ministry of External Affairs (MEA)",
    "hi": "क्षेत्रीय पासपोर्ट कार्यालय (RPO), विदेश मंत्रालय"
  },
  "department": {
    "en": "Consular, Passport and Visa (CPV) Division, Ministry of External Affairs (MEA)",
    "hi": "विदेश मंत्रालय (MEA), भारत सरकार (CPV प्रभाग)"
  },
  "source": {
    "en": "Ministry of External Affairs, Government of India",
    "hi": "पासपोर्ट अधिनियम, 1967 एवं पासपोर्ट नियम, 1980"
  },
  "officialSource": {
    "en": "Ministry of External Affairs, Government of India",
    "hi": "विदेश मंत्रालय (MEA), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (सभी राज्य एवं केंद्र शासित प्रदेश)"
  },
  "onlineAvailable": {
    "en": "Online Application + Physical Verification",
    "hi": "ऑनलाइन आवेदन + पीएसके में भौतिक सत्यापन"
  },
  "officialPortal": {
    "name": {
      "en": "Passport Seva Portal (Ministry of External Affairs)",
      "hi": "पासपोर्ट सेवा पोर्टल (Passport Seva - MEA)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹1,500 (Normal 36-page adult passport) | ₹2,000 (60-page) | +₹2,000 for Tatkaal",
      "hi": "सामान्य (36 पृष्ठ): ₹1,500 | सामान्य (60 पृष्ठ): ₹2,000 | तत्काल: ₹3,500 - ₹4,000"
    },
    "verificationSource": {
      "en": "Passport Rules, 1980 & Ministry of External Affairs Gazette Notifications",
      "hi": "पासपोर्ट नियम, 1980 अनुसूची IV शुल्क तालिका"
    }
  },
  "feeInfo": {
    "en": "₹1,500 (Normal 36-page adult passport) | ₹2,000 (60-page) | +₹2,000 for Tatkaal",
    "hi": "सामान्य (36 पृष्ठ): ₹1,500 | सामान्य (60 पृष्ठ): ₹2,000 | तत्काल: ₹3,500 - ₹4,000"
  },
  "processingTime": {
    "timeText": {
      "en": "Normal: 15 - 30 Working Days | Tatkaal: 3 - 7 Working Days",
      "hi": "सामान्य: 15 - 30 दिन (पुलिस सत्यापन सहित) | तत्काल: 3 - 7 कार्य दिवस"
    },
    "statutoryAct": {
      "en": "Passports Act, 1967",
      "hi": "पासपोर्ट अधिनियम, 1967"
    }
  },
  "processingInfo": {
    "en": "Normal: 15 - 30 Working Days | Tatkaal: 3 - 7 Working Days",
    "hi": "सामान्य: 15 - 30 दिन (पुलिस सत्यापन सहित) | तत्काल: 3 - 7 कार्य दिवस"
  },
  "eligibility": [
    {
      "en": "Any citizen of India by birth, descent, registration, or naturalization.",
      "hi": "जन्म या पंजीकरण द्वारा कोई भी भारतीय नागरिक।"
    },
    {
      "en": "Must not have criminal warrants, court travel restrictions, or adverse citizenship proceedings.",
      "hi": "नाबालिग (18 वर्ष से कम) माता-पिता की सहमति और दस्तावेज़ों के साथ आवेदन कर सकते हैं।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Date of Birth (DoB)",
        "hi": "जन्म तिथि का प्रमाण (DoB Proof)"
      },
      "type": {
        "en": "Original",
        "hi": "मूल प्रति + स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Document proving date and place of birth.",
        "hi": "आधिकारिक जन्म प्रमाण पत्र या मान्यता प्राप्त बोर्ड की अंकतालिका।"
      },
      "commonExamples": {
        "en": "Birth Certificate from Registrar, 10th Standard School Leaving Certificate, Aadhaar Card, or PAN Card",
        "hi": "नगर निगम जन्म प्रमाण पत्र, 10वीं पास प्रमाणपत्र, या आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Present Address",
        "hi": "वर्तमान आवासीय पते का प्रमाण"
      },
      "type": {
        "en": "Original",
        "hi": "मूल प्रति + प्रतिलिपि / डिजिलॉकर"
      },
      "description": {
        "en": "Proof that applicant has lived at the stated address for past 12 months.",
        "hi": "वर्तमान पते पर पिछले 1 वर्ष से रहने का वैध प्रमाण।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Water/Electricity Bill, Running Bank Passbook with photo, or Voter ID",
        "hi": "आधार कार्ड, फोटो युक्त बैंक पासबुक, मतदाता पहचान पत्र, या बिजली बिल"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Non-ECR Category Proof (Optional for Non-Emigration Check)",
        "hi": "गैर-ईसीआर (Non-ECR) शैक्षणिक प्रमाण"
      },
      "type": {
        "en": "Original",
        "hi": "मूल प्रमाण पत्र"
      },
      "description": {
        "en": "Exempts holders from Emigration Check clearance.",
        "hi": "इमिग्रेशन चेक रिक्वायर्ड (ECR) छूट के लिए 10वीं कक्षा या उससे उच्च डिग्री।"
      },
      "commonExamples": {
        "en": "10th Standard Matriculation Pass Certificate, Higher Degree Certificate, or ITR Records",
        "hi": "10वीं कक्षा उत्तीर्ण प्रमाणपत्र या स्नातक डिग्री"
      },
      "isMandatory": false
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Register User Account on Passport Seva Online Portal",
        "hi": "पासपोर्ट सेवा पोर्टल पर खाता पंजीकृत करें"
      },
      "description": {
        "en": "Visit https://passportindia.gov.in. Register an account under your jurisdictional Regional Passport Office (RPO) using your active email address.",
        "hi": "https://www.passportindia.gov.in पर जाएं और अपने अधिकार क्षेत्र के क्षेत्रीय पासपोर्ट कार्यालय (RPO) का चयन करके खाता बनाएं।"
      },
      "agencyOrPortal": {
        "en": "passportindia.gov.in",
        "hi": "पासपोर्ट सेवा पोर्टल (passportindia.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Passports Act, 1967 & Passport Rules, 1980",
        "hi": "पासपोर्ट सेवा दिशानिर्देश"
      },
      "sourceReference": {
        "en": "Section 5 of Passports Act, 1967",
        "hi": "Section 5 of Passports Act, 1967"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Fill Application Form Online",
        "hi": "'Apply for Fresh Passport / Re-issue' ऑनलाइन फॉर्म भरें"
      },
      "description": {
        "en": "Select 'Apply for Fresh Passport / Re-issue'. Fill in personal biographical details, family background, emergency contact, and residential address history.",
        "hi": "व्यक्तिगत विवरण, माता-पिता/पति-पत्नी का नाम, वर्तमान और स्थायी पता, और 2 स्थानीय संदर्भों के संपर्क विवरण भरें।"
      },
      "agencyOrPortal": {
        "en": "Passport Seva System Engine",
        "hi": "पासपोर्ट ऑनलाइन आवेदन प्रणाली"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "20 Minutes",
        "hi": "15 - 20 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Passport Rules, 1980 (Form EA-P)",
        "hi": "पासपोर्ट नियम, 1980"
      },
      "sourceReference": {
        "en": "Schedule III of Passport Rules, 1980",
        "hi": "Schedule III of Passport Rules, 1980"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Pay Statutory Government Fee Online",
        "hi": "ऑनलाइन शुल्क का भुगतान करें और पीएसके / पीओपीएसके अपॉइंटमेंट बुक करें"
      },
      "description": {
        "en": "Pay the mandatory statutory fee of ₹1,500 (36-page normal adult) or ₹2,000 (60-page) via SBI ePay, net banking, or UPI.",
        "hi": "एसबीआई ई-पे, यूपीआई या इंटरनेट बैंकिंग द्वारा ₹1,500 का भुगतान करें और निकटतम पासपोर्ट सेवा केंद्र (PSK) में तारीख और समय स्लॉट चुनें।"
      },
      "agencyOrPortal": {
        "en": "BharatKosh / SBI ePay Gateway",
        "hi": "पासपोर्ट सेवा पेमेंट व शेड्यूलिंग गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Passports Rules, 1980 (Schedule IV - Fee Structure)",
        "hi": "विदेश मंत्रालय आधिकारिक शुल्क दिशानिर्देश"
      },
      "sourceReference": {
        "en": "Schedule IV Table of Fees, MEA",
        "hi": "Schedule IV Table of Fees, MEA"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Book PSK / POPSK Appointment Slot",
        "hi": "मूल दस्तावेज़ों के साथ पीएसके (PSK) में व्यक्तिगत रूप से उपस्थित हों"
      },
      "description": {
        "en": "Select your nearest Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK) and choose your preferred appointment date and time slot.",
        "hi": "सभी मूल दस्तावेज़ और स्व-सत्यापित प्रतियां लेकर पीएसके जाएं। काउंटर ए पर फोटो/बायोमेट्रिक्स दें, काउंटर बी पर दस्तावेज़ जांचें और काउंटर सी पर अधिकारी से मिलें।"
      },
      "agencyOrPortal": {
        "en": "Passport Seva Appointment Scheduler",
        "hi": "पासपोर्ट सेवा केंद्र (PSK / Post Office PSK)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "केंद्र में 1.5 - 2 घंटे"
      },
      "mode": "online",
      "officialSource": {
        "en": "Ministry of External Affairs Appointment Manual",
        "hi": "पासपोर्ट सत्यापन कार्यविधि"
      },
      "sourceReference": {
        "en": "Passport Seva Project Guidelines",
        "hi": "Passport Seva Project Guidelines"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "In-Person Biometric Capture & Scrutiny at PSK",
        "hi": "स्थानीय पुलिस थाने द्वारा भौतिक पुलिस सत्यापन (PVR)"
      },
      "description": {
        "en": "Attend the PSK appointment in person with original documents. Staff verifies documents at Counter A (photo & fingerprint biometrics), Counter B (verification), and Counter C (granting).",
        "hi": "स्थानीय पुलिस अधिकारी आपके पते पर भौतिक रूप से आएंगे या आपको सत्यापन हेतु पहचान/पते के दस्तावेज़ लेकर थाने बुलाएंगे।"
      },
      "agencyOrPortal": {
        "en": "Passport Seva Kendra (PSK / POPSK)",
        "hi": "स्थानीय क्षेत्राधिकार पुलिस थाना"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "45 Minutes at PSK",
        "hi": "7 - 14 कार्य दिवस"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Passport Rules, 1980 (Rule 7)",
        "hi": "गृह मंत्रालय पुलिस सत्यापन मानक"
      },
      "sourceReference": {
        "en": "Rule 7 of Passport Rules, 1980",
        "hi": "Rule 7 of Passport Rules, 1980"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "Local Police Verification & Speed Post Delivery",
        "hi": "पासपोर्ट मुद्रण एवं स्पीड पोस्ट द्वारा सुरक्षित होम डिलीवरी"
      },
      "description": {
        "en": "The jurisdictional local police station conducts in-person address verification. Upon clear police report, your passport is printed and dispatched via India Post Speed Post.",
        "hi": "सुरक्षा जांच पूरी होने के बाद पासपोर्ट इंडिया सिक्योरिटी प्रेस नासिक में छपेगा और स्पीड पोस्ट द्वारा आपके पंजीकृत पते पर भेजा जाएगा।"
      },
      "agencyOrPortal": {
        "en": "Jurisdictional Police Station & India Post",
        "hi": "भारतीय डाक (स्पीड पोस्ट) / विदेश मंत्रालय"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "7 - 14 Days",
        "hi": "3 - 5 दिन डिस्पैच के बाद"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "Ministry of External Affairs Police Verification SOP",
        "hi": "डाक विभाग सुरक्षित वितरण"
      },
      "sourceReference": {
        "en": "MEA Notification No. VI/401/1/2019",
        "hi": "MEA Notification No. VI/401/1/2019"
      }
    }
  ],
  "warnings": [
    {
      "en": "BEWARE of fake websites mimicking Passport Seva. The ONLY genuine government portal is passportindia.gov.in (never .com or .org).",
      "hi": "केवल passportindia.gov.in पर ही आवेदन करें। नाम से मिलती-जुलती फर्जी .org या .com वेबसाइटों पर कभी पैसे न दें।"
    },
    {
      "en": "Ensure the spelling of your name matches identically across Aadhaar, 10th marksheet, and PAN.",
      "hi": "पुलिस सत्यापन के दौरान कभी भी आपराधिक मामले या पुराने पासपोर्ट की जानकारी न छुपाएं। यह कानूनन दंडनीय अपराध है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। पासपोर्ट केवल भारत सरकार के विदेश मंत्रालय द्वारा जारी किया जाता है।"
  }
},
  "voter-registration-form-6": {
  "id": "voter-registration-form-6",
  "title": {
    "en": "New Voter Registration & Voter ID (Form 6)",
    "hi": "नया मतदाता पंजीकरण एवं वोटर आईडी (फॉर्म 6)"
  },
  "category": {
    "en": "Voter Services",
    "hi": "पहचान एवं नागरिकता"
  },
  "shortDescription": {
    "en": "Enroll as a new voter in the electoral roll to receive your digital e-EPIC and physical Voter ID card issued by the Election Commission of India (ECI).",
    "hi": "भारतीय निर्वाचन आयोग (ECI) के मतदाता सेवा पोर्टल पर नए मतदाता के रूप में पंजीकरण (फॉर्म 6) कराएं और डिजिटल ई-एपिक (e-EPIC) डाउनलोड करें।"
  },
  "fullOverview": {
    "en": "Administered by the Election Commission of India (ECI) through the centralized Voters' Service Portal. First-time voters fill Form 6 online. Once verified by the local Booth Level Officer (BLO), your name is included in the electoral roll, and a free physical color Voter ID (EPIC) is delivered to your residence via Speed Post.",
    "hi": "18 वर्ष या उससे अधिक आयु के भारतीय नागरिक निर्वाचन नामावली में अपना नाम दर्ज कराने के लिए ऑनलाइन फॉर्म 6 जमा कर सकते हैं। बूथ लेवल ऑफिसर (BLO) द्वारा सत्यापन के बाद मतदाता पहचान पत्र स्पीड पोस्ट से घर भेजा जाता है और ई-एपिक तुरंत डाउनलोड किया जा सकता है।"
  },
  "authority": {
    "en": "Election Commission of India (ECI)",
    "hi": "निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO), भारत निर्वाचन आयोग"
  },
  "department": {
    "en": "Election Commission of India (ECI)",
    "hi": "भारत निर्वाचन आयोग (ECI) एवं मुख्य निर्वाचन अधिकारी (CEO)"
  },
  "source": {
    "en": "Election Commission of India (ECI)",
    "hi": "लोक प्रतिनिधित्व अधिनियम, 1950 एवं निर्वाचकों का रजिस्ट्रीकरण नियम, 1960"
  },
  "officialSource": {
    "en": "Election Commission of India (ECI)",
    "hi": "भारत निर्वाचन आयोग (ECI), नई दिल्ली"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (सभी राज्य एवं केंद्र शासित प्रदेश)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (मतदाता सेवा पोर्टल / ईसीआई)"
  },
  "officialPortal": {
    "name": {
      "en": "Voters' Service Portal (Election Commission of India)",
      "hi": "मतदाता सेवा पोर्टल (Voters' Service Portal - ECI)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) - 100% Free Public Service",
      "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
    },
    "verificationSource": {
      "en": "Election Commission of India Guidelines",
      "hi": "भारत निर्वाचन आयोग कानूनी नियम"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) - 100% Free Public Service",
    "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "15 - 30 Working Days (Instant digital e-EPIC download upon approval)",
      "hi": "15 - 30 दिन (BLO सत्यापन एवं अनुमोदन)"
    },
    "statutoryAct": {
      "en": "Representation of the People Act, 1950",
      "hi": "लोक प्रतिनिधित्व अधिनियम, 1950"
    }
  },
  "processingInfo": {
    "en": "15 - 30 Working Days (Instant digital e-EPIC download upon approval)",
    "hi": "15 - 30 दिन (BLO सत्यापन एवं अनुमोदन)"
  },
  "eligibility": [
    {
      "en": "Must be an Indian citizen residing in the assembly constituency.",
      "hi": "भारत का नागरिक जो संबंधित वर्ष की अर्हक तिथि को 18 वर्ष की आयु पूरी कर चुका हो।"
    },
    {
      "en": "Must have completed 18 years of age on the qualifying dates (1st Jan, 1st April, 1st July, 1st Oct).",
      "hi": "संबंधित विधानसभा निर्वाचन क्षेत्र का सामान्य निवासी।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Passport Size Color Photograph",
        "hi": "पासपोर्ट आकार का रंगीन फोटो"
      },
      "type": {
        "en": "Digital Upload",
        "hi": "डिजिटल जेपीजी अपलोड"
      },
      "description": {
        "en": "Recent color photo with white background (under 2MB).",
        "hi": "सफेद पृष्ठभूमि वाला हालिया पासपोर्ट आकार का फोटो।"
      },
      "commonExamples": {
        "en": "Digital passport photo",
        "hi": "रंगीन पासपोर्ट फोटो (< 2 MB)"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Age",
        "hi": "आयु का प्रमाण"
      },
      "type": {
        "en": "Aadhaar e-KYC / Original",
        "hi": "स्व-सत्यापित प्रति / आधार"
      },
      "description": {
        "en": "Official government document proving age of 18 or above.",
        "hi": "जन्म तिथि की पुष्टि करने वाला सरकारी दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, PAN Card, Birth Certificate, or 10th Marksheet",
        "hi": "आधार कार्ड, पैन कार्ड, 10वीं कक्षा की मार्कशीट, जन्म प्रमाण पत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Ordinary Residence",
        "hi": "वर्तमान सामान्य निवास का प्रमाण"
      },
      "type": {
        "en": "Digital (DigiLocker) / Original",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Document proving you reside in the assembly constituency.",
        "hi": "विधानसभा क्षेत्र में निवास का प्रमाण।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Water/Electricity/Gas Bill, Current Bank Passbook, or Indian Passport",
        "hi": "आधार कार्ड, बिजली/पानी बिल, बैंक पासबुक, या पंजीकृत रेंट एग्रीमेंट"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Register on ECI Voters' Service Portal",
        "hi": "ईसीआई मतदाता सेवा पोर्टल (voters.eci.gov.in) पर जाएं"
      },
      "description": {
        "en": "Open https://voters.eci.gov.in. Register using your mobile phone number, captcha, and OTP to access electoral services.",
        "hi": "https://voters.eci.gov.in खोलें और अपने मोबाइल नंबर और ओटीपी का उपयोग करके एक निःशुल्क नागरिक खाता पंजीकृत करें।"
      },
      "agencyOrPortal": {
        "en": "voters.eci.gov.in",
        "hi": "मतदाता सेवा पोर्टल (voters.eci.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "2 - 3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Representation of the People Act, 1950",
        "hi": "ईसीआई मतदाता पंजीकरण नियम"
      },
      "sourceReference": {
        "en": "Section 23 of Representation of the People Act, 1950",
        "hi": "Section 23 of Representation of the People Act, 1950"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Fill Online Form 6 for New Elector Registration",
        "hi": "'New registration for general electors (Form 6)' चुनें"
      },
      "description": {
        "en": "Select your State, District, and Parliamentary / Assembly Constituency. Enter your personal details, date of birth, and current residential address.",
        "hi": "फॉर्म 6 पर क्लिक करें, अपना राज्य, ज़िला और संबंधित विधानसभा निर्वाचन क्षेत्र (AC) चुनें।"
      },
      "agencyOrPortal": {
        "en": "ECI Form 6 Engine",
        "hi": "ईसीआई फॉर्म 6 मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "12 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Registration of Electors Rules, 1960 (Rule 13)",
        "hi": "निर्वाचकों का रजिस्ट्रीकरण नियम, 1960"
      },
      "sourceReference": {
        "en": "Form 6 under Registration of Electors Rules, 1960",
        "hi": "Form 6 under Registration of Electors Rules, 1960"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Upload Photograph, Age Proof & Residence Proof",
        "hi": "व्यक्तिगत विवरण भरें और फोटो तथा आयु/पता प्रमाण अपलोड करें"
      },
      "description": {
        "en": "Upload a recent color passport photograph (under 2MB), proof of age, and proof of residence. Submit to generate a unique 12-digit Application Reference Number.",
        "hi": "अपना पूरा नाम, रिश्तेदारों का विवरण, संपर्क जानकारी, जन्म तिथि और निवास का पूरा पता भरें तथा दस्तावेज़ अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "ECI Document Processing Gateway",
        "hi": "ईसीआई ऑनलाइन आवेदन"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "ECI Guidelines for Electors",
        "hi": "ईसीआई दस्तावेज़ दिशानिर्देश"
      },
      "sourceReference": {
        "en": "ECI Compendium of Instructions on Electoral Rolls",
        "hi": "ECI Compendium of Instructions on Electoral Rolls"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Field Scrutiny by Booth Level Officer (BLO)",
        "hi": "फॉर्म जमा करें और संदर्भ संख्या (Reference Number) सहेजें"
      },
      "description": {
        "en": "The Electoral Registration Officer (ERO) assigns your application to the local Booth Level Officer (BLO) for physical field verification of your ordinary residence.",
        "hi": "सभी विवरणों की जांच करें और फाइनल सबमिट करें। आवेदन की स्थिति ट्रैक करने के लिए 16-अंकीय संदर्भ संख्या नोट करें।"
      },
      "agencyOrPortal": {
        "en": "Local Polling Station / BLO Office",
        "hi": "ईसीआई ट्रैकिंग सिस्टम"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "7 - 14 Days",
        "hi": "तुरंत पावती"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "Registration of Electors Rules, 1960 (Rule 19)",
        "hi": "ईसीआई पारदर्शी निगरानी"
      },
      "sourceReference": {
        "en": "Rule 19 of Registration of Electors Rules, 1960",
        "hi": "Rule 19 of Registration of Electors Rules, 1960"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Electoral Roll Inclusion, e-EPIC Download & Speed Post Delivery",
        "hi": "बीएलओ (BLO) फील्ड सत्यापन एवं डिजिटल ई-एपिक डाउनलोड"
      },
      "description": {
        "en": "Upon approval, download your digital e-EPIC PDF instantly. The Election Commission delivers a personalized color plastic Voter ID card to your home address via India Post Speed Post.",
        "hi": "बूथ लेवल ऑफिसर (BLO) द्वारा सत्यापन और ERO द्वारा अनुमोदन के बाद तुरंत डिजिटल e-EPIC कार्ड डाउनलोड करें। भौतिक कार्ड डाक से आएगा।"
      },
      "agencyOrPortal": {
        "en": "voters.eci.gov.in & India Post",
        "hi": "मतदाता सेवा पोर्टल / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 - 30 Working Days",
        "hi": "15 - 30 दिन"
      },
      "mode": "online",
      "officialSource": {
        "en": "Election Commission of India Notification on e-EPIC",
        "hi": "ईसीआई डिजिटल ई-एपिक दिशानिर्देश"
      },
      "sourceReference": {
        "en": "ECI e-EPIC Scheme Notification",
        "hi": "ECI e-EPIC Scheme Notification"
      }
    }
  ],
  "warnings": [
    {
      "en": "Enrolling in more than one electoral constituency is an illegal offense under Section 31 of the Representation of the People Act, 1950.",
      "hi": "एक से अधिक स्थानों पर मतदाता के रूप में पंजीकरण कराना लोक प्रतिनिधित्व अधिनियम, 1950 की धारा 31 के तहत एक दंडनीय अपराध है।"
    },
    {
      "en": "Check your status in the electoral roll prior to election dates.",
      "hi": "मतदाता पहचान पत्र पूर्णतः निःशुल्क बनता है। किसी भी अनधिकृत व्यक्ति या साइबर कैफे को सरकारी शुल्क के नाम पर पैसे न दें।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। मतदाता सूची केवल भारत निर्वाचन आयोग द्वारा प्रबंधित की जाती है।"
  }
},
  "government-scholarship": {
  "id": "government-scholarship",
  "title": {
    "en": "Government Scholarships (National Scholarship Portal & MahaDBT)",
    "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) - पोस्ट-मैट्रिक स्कॉलरशिप"
  },
  "category": {
    "en": "Education & Scholarships",
    "hi": "शिक्षा एवं सामाजिक कल्याण"
  },
  "shortDescription": {
    "en": "Apply for pre-matric, post-matric, merit-cum-means, and higher education scholarships disbursed directly into student bank accounts (DBT).",
    "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) और महाडीबीटी (MahaDBT) पर केंद्रीय और राज्य सरकार की पोस्ट-मैट्रिक छात्रवृत्तियों के लिए आवेदन करें।"
  },
  "fullOverview": {
    "en": "The National Scholarship Portal (NSP) and state portals (like MahaDBT in Maharashtra) centralize financial assistance schemes for students. Tuition fee reimbursements, maintenance allowances, and merit stipends are credited directly into the student's Aadhaar-seeded bank account through Direct Benefit Transfer (DBT).",
    "hi": "पात्र एससी/एसटी/ओबीसी, अल्पसंख्यक, ईडब्ल्यूएस और मेधावी छात्रों को ट्यूशन फीस प्रतिपूर्ति और मासिक वजीफा प्रदान करने वाली एक एकीकृत सरकारी प्रणाली। छात्रवृत्ति की राशि सीधे छात्र के आधार-सीडेड बैंक खाते में डीबीटी द्वारा भेजी जाती है।"
  },
  "authority": {
    "en": "Ministry of Education & State Social Welfare Departments",
    "hi": "राज्य छात्रवृत्ति संवितरण प्राधिकरण एवं नोडल अधिकारी"
  },
  "department": {
    "en": "Ministry of Education & State Social Welfare Departments",
    "hi": "सामाजिक न्याय एवं अधिकारिता मंत्रालय एवं संबंधित राज्य पिछड़ा वर्ग कल्याण विभाग"
  },
  "source": {
    "en": "Ministry of Electronics and Information Technology (MeitY) & Ministry of Education",
    "hi": "केंद्र प्रायोजित पोस्ट-मैट्रिक छात्रवृत्ति योजना दिशानिर्देश"
  },
  "officialSource": {
    "en": "Ministry of Electronics and Information Technology (MeitY) & Ministry of Education",
    "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (राष्ट्रीय एवं राज्य विशिष्ट)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (एनएसपी / महाडीबीटी)"
  },
  "officialPortal": {
    "name": {
      "en": "National Scholarship Portal (NSP)",
      "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल (National Scholarship Portal - NSP)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) - 100% Free Public Student Portal",
      "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
    },
    "verificationSource": {
      "en": "National Scholarship Portal Guidelines",
      "hi": "डीबीटी भारत एवं एनएसपी आधिकारिक नियम"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) - 100% Free Public Student Portal",
    "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "Application window: Typically July - November annually | Disbursement per academic calendar",
      "hi": "30 - 60 दिन (संस्थान एवं ज़िला नोडल अधिकारी सत्यापन)"
    },
    "statutoryAct": {
      "en": "National e-Governance Plan (NeGP)",
      "hi": "प्रत्यक्ष लाभ अंतरण (DBT) मिशन दिशानिर्देश"
    }
  },
  "processingInfo": {
    "en": "Application window: Typically July - November annually | Disbursement per academic calendar",
    "hi": "30 - 60 दिन (संस्थान एवं ज़िला नोडल अधिकारी सत्यापन)"
  },
  "eligibility": [
    {
      "en": "Enrolled in a recognized Indian school, college, polytechnic, or university.",
      "hi": "मान्यता प्राप्त स्कूल, कॉलेज या विश्वविद्यालय में 11वीं, 12वीं, आईटीआई, डिप्लोमा, डिग्री या पीजी पाठ्यक्रम में अध्ययनरत।"
    },
    {
      "en": "Specific criteria depend on scheme (e.g. SC/ST/OBC/EWS/Minority quota or family income under ₹2.5 Lakh / ₹8 Lakh per annum).",
      "hi": "पारिवारिक वार्षिक आय सीमा योजनानुसार सामान्यतः ₹2.5 लाख से ₹8 लाख के बीच।"
    },
    {
      "en": "Student's bank account MUST be active and seeded with Aadhaar on the NPCI mapper for DBT transfer.",
      "hi": "पिछली योग्यता परीक्षा में न्यूनतम आवश्यक अंक (आमतौर पर 50% या उत्तीर्ण)।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Student Aadhaar Card",
        "hi": "छात्र का आधार कार्ड (बैंक से सीडेड)"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी / एनपीसीआई मैपर"
      },
      "description": {
        "en": "Used for One-Time Registration (OTR) on NSP.",
        "hi": "छात्र का बैंक खाता आधार से एनपीसीआई पर मैप होना अनिवार्य है।"
      },
      "commonExamples": {
        "en": "Aadhaar Card",
        "hi": "आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Official Income Certificate",
        "hi": "सक्षम प्राधिकारी से आय प्रमाण पत्र"
      },
      "type": {
        "en": "Original / Digital Copy",
        "hi": "मूल राजस्व प्रमाण पत्र"
      },
      "description": {
        "en": "Revenue income certificate issued by Tehsildar / Sub-Divisional Officer.",
        "hi": "तहसीलदार या सक्षम राजस्व अधिकारी द्वारा जारी चालू वर्ष का आय प्रमाण पत्र।"
      },
      "commonExamples": {
        "en": "Aaple Sarkar / e-District Income Certificate",
        "hi": "तहसीलदार आय प्रमाण पत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "College Bonafide Certificate & Fee Receipt",
        "hi": "जाति प्रमाण पत्र (आरक्षित श्रेणियों हेतु)"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "सत्यापित प्रति / डिजिटल बारकोड"
      },
      "description": {
        "en": "Proof of active enrollment in recognized academic program.",
        "hi": "एससी, एसटी, ओबीसी, वीजेएनटी श्रेणियों के लिए अनिवार्य।"
      },
      "commonExamples": {
        "en": "College Bonafide certificate and current academic term fee receipt",
        "hi": "सक्षम अधिकारी द्वारा जारी जाति प्रमाण पत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Previous Year Academic Marksheet",
        "hi": "वर्तमान कॉलेज प्रवेश रसीद एवं बोनाफाइड प्रमाण पत्र"
      },
      "type": {
        "en": "Digital (DigiLocker) / Self-Attested",
        "hi": "संस्थान द्वारा सत्यापित प्रति"
      },
      "description": {
        "en": "Grade sheet showing passing percentage.",
        "hi": "वर्तमान शैक्षणिक वर्ष में नियमित प्रवेश का प्रमाण।"
      },
      "commonExamples": {
        "en": "Board Marksheet or College Grade Card",
        "hi": "कॉलेज फीस रसीद, आईडी कार्ड, बोनाफाइड प्रमाण पत्र"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Complete One-Time Registration (OTR) on NSP",
        "hi": "NSP या MahaDBT पोर्टल पर छात्र वन-टाइम रजिस्ट्रेशन (OTR) करें"
      },
      "description": {
        "en": "Open https://scholarships.gov.in. Complete Aadhaar e-KYC and facial/biometric authentication to generate your permanent 14-digit OTR number.",
        "hi": "scholarships.gov.in पर जाएं और आधार प्रमाणीकरण द्वारा 14-अंकीय वन-टाइम रजिस्ट्रेशन (OTR) नंबर प्राप्त करें।"
      },
      "agencyOrPortal": {
        "en": "scholarships.gov.in (NSP OTR)",
        "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल (scholarships.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "5 - 10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Ministry of Electronics and IT (MeitY) & Ministry of Education",
        "hi": "एनएसपी ओटीआर दिशानिर्देश"
      },
      "sourceReference": {
        "en": "NSP Guidelines on One-Time Registration",
        "hi": "NSP Guidelines on One-Time Registration"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Select Eligible Scheme & Fill Academic Record",
        "hi": "छात्रवृत्ति योजना चुनें और ऑनलाइन आवेदन पत्र भरें"
      },
      "description": {
        "en": "The portal displays matching central and state schemes based on your caste category and family income. Choose your scheme and input current academic roll details.",
        "hi": "अपनी जाति, आय और पाठ्यक्रम के आधार पर लागू योजना चुनें और शैक्षणिक व व्यक्तिगत विवरण दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "NSP Central Scheme Engine",
        "hi": "एनएसपी आवेदन गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Scheme Guidelines of Respective Central Ministries",
        "hi": "मंत्रालय छात्रवृत्ति नियम"
      },
      "sourceReference": {
        "en": "Post-Matric / Merit-cum-Means Guidelines",
        "hi": "Post-Matric / Merit-cum-Means Guidelines"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Upload Supporting Academic & Revenue Proofs",
        "hi": "आवश्यक दस्तावेज़ अपलोड करें (आय, जाति, फीस रसीद, अंकतालिका)"
      },
      "description": {
        "en": "Attach digital copies of your college bonafide certificate, previous year marksheet, state-issued income certificate, and caste certificate (if applicable).",
        "hi": "प्रमाणित आय प्रमाण पत्र, जाति प्रमाण पत्र, कॉलेज फीस रसीद और पिछली अंकतालिका स्पष्ट रूप से अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "NSP Document Upload Module",
        "hi": "एनएसपी दस्तावेज़ अपलोड मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Direct Benefit Transfer (DBT) Mission Guidelines",
        "hi": "एनएसपी सत्यापन मानक"
      },
      "sourceReference": {
        "en": "Cabinet Secretariat DBT Notification",
        "hi": "Cabinet Secretariat DBT Notification"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Institute Verification by College Nodal Officer",
        "hi": "कॉलेज / संस्थान नोडल अधिकारी स्तर पर सत्यापन (Level 1)"
      },
      "description": {
        "en": "Submit your online application. Inform your college scholarship clerk/officer to verify your credentials against institutional roll registers at Level 1.",
        "hi": "आपके कॉलेज के छात्रवृत्ति नोडल अधिकारी आपके मूल अभिलेखों की जांच करके पोर्टल पर आवेदन को अग्रेषित करेंगे।"
      },
      "agencyOrPortal": {
        "en": "College Nodal Verification Desk",
        "hi": "संस्थान स्तर (स्कूल / कॉलेज नोडल अधिकारी)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 - 10 Working Days",
        "hi": "7 - 15 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "NSP Standard Operating Procedure for Institutes",
        "hi": "संस्थान सत्यापन नियमावली"
      },
      "sourceReference": {
        "en": "Institutional Verification Protocol, NSP",
        "hi": "Institutional Verification Protocol, NSP"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Direct Benefit Transfer (DBT) via Public Financial Management System (PFMS)",
        "hi": "ज़िला नोडल अधिकारी अनुमोदन एवं सीधे बैंक खाते में डीबीटी (DBT)"
      },
      "description": {
        "en": "Following District/State Welfare Officer scrutiny, scholarship funds and tuition waivers are disbursed directly into your Aadhaar-seeded bank account through PFMS.",
        "hi": "ज़िला कल्याण अधिकारी द्वारा अनुमोदन के बाद छात्रवृत्ति की राशि सीधे छात्र के आधार-लिंक्ड बैंक खाते में क्रेडिट की जाती है।"
      },
      "agencyOrPortal": {
        "en": "PFMS / Ministry of Finance",
        "hi": "सार्वजनिक वित्तीय प्रबंधन प्रणाली (PFMS) / DBT"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Per academic disbursement cycle",
        "hi": "30 - 45 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Public Financial Management System (PFMS) Guidelines",
        "hi": "डीबीटी भारत मिशन"
      },
      "sourceReference": {
        "en": "Section 7 of Aadhaar Act for DBT Subsidies",
        "hi": "Section 7 of Aadhaar Act for DBT Subsidies"
      }
    }
  ],
  "warnings": [
    {
      "en": "Bank account MUST be seeded with Aadhaar on the NPCI mapper. A regular unlinked bank account cannot receive DBT funds.",
      "hi": "सुनिश्चित करें कि आपका बैंक खाता सक्रिय है और एनपीसीआई (NPCI) मैपर पर आधार से जुड़ा हुआ है। ऐसा न होने पर डीबीटी राशि विफल हो जाएगी।"
    },
    {
      "en": "Check application deadlines early; institute verification must be completed before the scheme closing date.",
      "hi": "एक शैक्षणिक वर्ष में एक ही स्तर की दो अलग-अलग सरकारी छात्रवृत्तियां लेना नियमों के विरुद्ध है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र नागरिक गाइड है। छात्रवृत्ति का संवितरण संबंधित मंत्रालय द्वारा पीएफएमएस के माध्यम से किया जाता है।"
  }
},
  "vehicle-registration-rc": {
  "id": "vehicle-registration-rc",
  "title": {
    "en": "Vehicle Registration Certificate (RC) & Transfer of Ownership",
    "hi": "वाहन पंजीकरण एवं आरसी स्वामित्व हस्तांतरण (वाहन)"
  },
  "category": {
    "en": "Transport & Licensing",
    "hi": "परिवहन एवं लाइसेंसिंग"
  },
  "shortDescription": {
    "en": "Apply for vehicle registration, transfer vehicle title after private sale, or renew Fitness Certificate on Vahan Parivahan.",
    "hi": "वाहन सिटीजन पोर्टल पर प्रयुक्त वाहन की खरीद-बिक्री के बाद वाहन स्वामित्व हस्तांतरण (फॉर्म 29/30) और नई आरसी स्मार्ट कार्ड के लिए आवेदन करें।"
  },
  "fullOverview": {
    "en": "Administered nationwide through the centralized Vahan MoRTH platform. When buying or selling a used vehicle or registering a new vehicle, the buyer must apply for ownership transfer within 30 days of purchase using Form 29 and Form 30 to prevent legal liability.",
    "hi": "सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) के राष्ट्रीय वाहन डेटाबेस द्वारा प्रबंधित। वाहन के खरीदार और विक्रेता ऑनलाइन फॉर्म 29 और 30 जमा करते हैं, वैधानिक हस्तांतरण शुल्क का भुगतान करते हैं, और आरटीओ सत्यापन के बाद अद्यतन पंजीकरण प्रमाण पत्र (RC) प्राप्त करते हैं।"
  },
  "authority": {
    "en": "Ministry of Road Transport and Highways (MoRTH) & State RTO",
    "hi": "क्षेत्रीय परिवहन अधिकारी (RTO), राज्य परिवहन विभाग"
  },
  "department": {
    "en": "Ministry of Road Transport and Highways (MoRTH) & State RTO",
    "hi": "सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) एवं राज्य परिवहन विभाग"
  },
  "source": {
    "en": "Ministry of Road Transport and Highways (MoRTH), Government of India",
    "hi": "केंद्रीय मोटर वाहन नियम (CMVR), 1989 (नियम 55, 56 एवं 57)"
  },
  "officialSource": {
    "en": "Ministry of Road Transport and Highways (MoRTH), Government of India",
    "hi": "सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (राष्ट्रीय स्तर)"
  },
  "onlineAvailable": {
    "en": "Online Application + Physical Verification",
    "hi": "ऑनलाइन आवेदन + भौतिक फाइल जमा"
  },
  "officialPortal": {
    "name": {
      "en": "Parivahan Sewa (Vahan Portal)",
      "hi": "वाहन नागरिक सेवा पोर्टल (Vahan Citizen Portal - MoRTH)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹300 for Two-Wheelers | ₹500 for Light Motor Vehicles (LMV) + Smart Card Fee",
      "hi": "दोपहिया: ₹150 - ₹300 | कार/LMV: ₹300 - ₹600 + स्मार्ट कार्ड शुल्क"
    },
    "verificationSource": {
      "en": "Central Motor Vehicles Rules, 1989 (Rule 81)",
      "hi": "केंद्रीय मोटर वाहन नियम (CMVR) नियम 81 शुल्क तालिका"
    }
  },
  "feeInfo": {
    "en": "₹300 for Two-Wheelers | ₹500 for Light Motor Vehicles (LMV) + Smart Card Fee",
    "hi": "दोपहिया: ₹150 - ₹300 | कार/LMV: ₹300 - ₹600 + स्मार्ट कार्ड शुल्क"
  },
  "processingTime": {
    "timeText": {
      "en": "15 - 30 Working Days",
      "hi": "15 - 30 कार्य दिवस (आरटीओ सत्यापन के बाद)"
    },
    "statutoryAct": {
      "en": "Motor Vehicles Act, 1988",
      "hi": "मोटर वाहन अधिनियम, 1988 (धारा 50)"
    }
  },
  "processingInfo": {
    "en": "15 - 30 Working Days",
    "hi": "15 - 30 कार्य दिवस (आरटीओ सत्यापन के बाद)"
  },
  "eligibility": [
    {
      "en": "Registered owner or legal buyer of a motor vehicle in India.",
      "hi": "मोटर वाहन का पंजीकृत मालिक (विक्रेता) और वास्तविक खरीदार।"
    },
    {
      "en": "Vehicle must have valid motor insurance and active Pollution Under Control Certificate (PUCC).",
      "hi": "वाहन पर कोई लंबित ट्रैफिक ई-चालान या पुलिस चोरी का मामला न हो।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Original Registration Certificate (RC Book / Smart Card)",
        "hi": "मूल पंजीकरण प्रमाण पत्र (RC Book / Smart Card)"
      },
      "type": {
        "en": "Original",
        "hi": "मूल प्रति जमा"
      },
      "description": {
        "en": "Original vehicle registration certificate.",
        "hi": "वर्तमान मालिक के नाम वाला मूल आरसी कार्ड।"
      },
      "commonExamples": {
        "en": "RC Smart Card",
        "hi": "मूल आरसी बुक या स्मार्ट कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Form 29 & Form 30 (Notice & Application for Transfer of Ownership)",
        "hi": "फॉर्म 29 एवं फॉर्म 30 (स्वामित्व हस्तांतरण आवेदन)"
      },
      "type": {
        "en": "Form Submission",
        "hi": "हस्ताक्षरित वैधानिक प्रपत्र"
      },
      "description": {
        "en": "Joint statutory transfer forms signed by buyer and seller.",
        "hi": "क्रेता और विक्रेता दोनों द्वारा विधिवत हस्ताक्षरित प्रपत्र।"
      },
      "commonExamples": {
        "en": "Downloaded Form 29 & 30 from Vahan portal",
        "hi": "वाहन पोर्टल से डाउनलोड किया गया हस्ताक्षरित फॉर्म 29 और 30"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Valid Motor Vehicle Insurance Policy",
        "hi": "वैध मोटर वाहन बीमा पॉलिसी"
      },
      "type": {
        "en": "Digital (DigiLocker) / Original",
        "hi": "सत्यापित प्रति"
      },
      "description": {
        "en": "Active third-party or comprehensive auto insurance.",
        "hi": "खरीदार के नाम या चालू वैध व्यापक/थर्ड-पार्टी बीमा।"
      },
      "commonExamples": {
        "en": "Insurance policy certificate",
        "hi": "वाहन बीमा पॉलिसी प्रमाणपत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Pollution Under Control Certificate (PUCC)",
        "hi": "प्रदूषण नियंत्रण प्रमाण पत्र (PUCC)"
      },
      "type": {
        "en": "Digital / Original",
        "hi": "डिजिटल सत्यापन / मूल प्रति"
      },
      "description": {
        "en": "Valid emission check certificate.",
        "hi": "अधिकृत प्रदूषण जांच केंद्र द्वारा जारी वैध प्रमाण पत्र।"
      },
      "commonExamples": {
        "en": "PUCC printout with QR code",
        "hi": "वैध पीयूसी रसीद"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Access Vahan Citizen Services Portal",
        "hi": "वाहन नागरिक सेवा पोर्टल (vahan.parivahan.gov.in) पर जाएं"
      },
      "description": {
        "en": "Visit https://parivahan.gov.in > Online Services > Vehicle Related Services. Select your State and RTO, or enter vehicle registration number.",
        "hi": "वाहन पोर्टल पर जाएं, वाहन पंजीकरण संख्या दर्ज करें और 'Online Services' में जाएं।"
      },
      "agencyOrPortal": {
        "en": "vahan.parivahan.gov.in",
        "hi": "वाहन नागरिक पोर्टल (vahan.parivahan.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Central Motor Vehicles Rules, 1989",
        "hi": "वाहन नागरिक सेवा नियमावली"
      },
      "sourceReference": {
        "en": "Rule 55 of CMVR, 1989",
        "hi": "Rule 55 of CMVR, 1989"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Select 'Transfer of Ownership' & Enter Buyer Particulars",
        "hi": "'Transfer of Ownership' चुनें और खरीदार का विवरण दर्ज करें"
      },
      "description": {
        "en": "Choose 'Transfer of Ownership'. Enter buyer's legal name, Aadhaar, address, mobile number, and sale consideration amount.",
        "hi": "स्वामित्व हस्तांतरण विकल्प चुनें, खरीदार का आधार, नाम, स्थायी व वर्तमान पता और मोबाइल नंबर दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "Vahan Application Module",
        "hi": "वाहन ऑनलाइन पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Motor Vehicles Act, 1988 (Section 50)",
        "hi": "मोटर वाहन अधिनियम धारा 50"
      },
      "sourceReference": {
        "en": "Section 50(1) of Motor Vehicles Act, 1988",
        "hi": "Section 50(1) of Motor Vehicles Act, 1988"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Pay Statutory Transfer Fee & Motor Vehicle Tax Differential",
        "hi": "वैधानिक हस्तांतरण शुल्क और मोटर वाहन कर का भुगतान करें"
      },
      "description": {
        "en": "Pay the statutory fee (₹300 for two-wheelers, ₹500 for cars) plus smart card charges via the online integrated payment gateway.",
        "hi": "नेट बैंकिंग या यूपीआई द्वारा सरकारी आरसी हस्तांतरण शुल्क और स्मार्ट कार्ड शुल्क का ऑनलाइन भुगतान करें।"
      },
      "agencyOrPortal": {
        "en": "Vahan Payment Gateway",
        "hi": "वाहन पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Central Motor Vehicles Rules, 1989 (Rule 81)",
        "hi": "CMVR नियम 81 शुल्क तालिका"
      },
      "sourceReference": {
        "en": "CMVR Rule 81 Fee Table",
        "hi": "CMVR Rule 81 Fee Table"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Upload Scanned Form 29, Form 30 & Vehicle Documents",
        "hi": "हस्ताक्षरित फॉर्म 29, फॉर्म 30 और वाहन दस्तावेज़ अपलोड करें"
      },
      "description": {
        "en": "Upload scanned copies of signed Form 29, Form 30, valid insurance policy certificate, and valid PUCC.",
        "hi": "क्रेता-विक्रेता हस्ताक्षरित फॉर्म 29, 30, बीमा और चेसिस पेंसिल प्रिंट की स्पष्ट प्रति अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Vahan Document Repository",
        "hi": "वाहन दस्तावेज़ अपलोड सिस्टम"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "MoRTH Contactless Citizen Services SOP",
        "hi": "परिवहन विभाग दिशानिर्देश"
      },
      "sourceReference": {
        "en": "MoRTH Notification G.S.R. 1361(E)",
        "hi": "MoRTH Notification G.S.R. 1361(E)"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Complete Aadhaar e-Sign or Submit Physical Dossier at RTO",
        "hi": "आधार ई-हस्ताक्षर करें या आरटीओ में भौतिक फाइल जमा करें"
      },
      "description": {
        "en": "In states supporting Aadhaar e-sign, buyer and seller authenticate with mobile OTP. In other states, submit the signed physical dossier and original RC at the RTO counter.",
        "hi": "यदि दोनों पक्षों का आधार लिंक है तो आधार ओटीपी से ई-साइन करें अन्यथा आरटीओ काउंटर पर मूल आरसी सहित फाइल जमा करें।"
      },
      "agencyOrPortal": {
        "en": "Jurisdictional RTO Vehicle Registration Desk",
        "hi": "क्षेत्रीय परिवहन कार्यालय (RTO) काउंटर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "1 - 2 Days",
        "hi": "1 - 2 घंटे (भौतिक जमा करने पर)"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "State Motor Vehicles Rules",
        "hi": "राज्य परिवहन आयुक्त कार्यविधि"
      },
      "sourceReference": {
        "en": "State Transport Department Circulars",
        "hi": "State Transport Department Circulars"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "RTO Scrutiny & Dispatch of New RC Smart Card",
        "hi": "आरटीओ सत्यापन एवं नई आरसी स्मार्ट कार्ड की डाक द्वारा डिलीवरी"
      },
      "description": {
        "en": "The Registering Authority validates chassis/engine records. Upon approval, download your digital RC on DigiLocker or receive the new smart card via Speed Post.",
        "hi": "आरटीओ अधीक्षक द्वारा अनुमोदन के बाद नई आरसी स्पीड पोस्ट द्वारा खरीदार के आवासीय पते पर भेजी जाती है।"
      },
      "agencyOrPortal": {
        "en": "Registering Authority & India Post",
        "hi": "भारतीय डाक / आरटीओ डिस्पैच"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 - 30 Working Days",
        "hi": "15 - 20 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Motor Vehicles Act, 1988 (Section 50(2))",
        "hi": "नागरिक चार्टर समय-सीमा"
      },
      "sourceReference": {
        "en": "Section 50(2) of Motor Vehicles Act, 1988",
        "hi": "Section 50(2) of Motor Vehicles Act, 1988"
      }
    }
  ],
  "warnings": [
    {
      "en": "Transfer must be reported within 30 days of sale. Failure to transfer title leaves the seller legally responsible for accidents and challans.",
      "hi": "वाहन बेचने के 14 दिनों के भीतर आरटीओ को सूचना देना कानूनी रूप से अनिवार्य है। ऐसा न करने पर किसी दुर्घटना की स्थिति में मूल मालिक जिम्मेदार हो सकता है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। आरसी हस्तांतरण केवल संबंधित राज्य परिवहन विभाग द्वारा किया जाता है।"
  }
},
  "birth-certificate": {
  "id": "birth-certificate",
  "title": {
    "en": "Birth Certificate Registration & Certified Copy",
    "hi": "जन्म प्रमाण पत्र पंजीकरण एवं प्रमाणित प्रति (सीआरएस)"
  },
  "category": {
    "en": "Certificates & Vital Records",
    "hi": "प्रमाण पत्र एवं राजस्व अभिलेख"
  },
  "shortDescription": {
    "en": "Register a child birth within statutory 21 days or apply for an official certified birth certificate copy through the Civil Registration System (CRS) / Municipal Corporation.",
    "hi": "नागरिक पंजीकरण प्रणाली (CRS) या स्थानीय नगर निगम (BMC/मनपा) से वैधानिक जन्म प्रमाण पत्र और बारकोडेड प्रमाणित प्रति प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Birth registration in India is governed by the Registration of Births and Deaths Act, 1969. Institutional births are reported directly by hospitals within 21 days. Citizens can apply for certified copies with digital signatures through the national CRS portal (crsorgi.gov.in) or their urban municipal corporation portal (e.g. BMC in Mumbai, PMC in Pune).",
    "hi": "जन्म और मृत्यु पंजीकरण अधिनियम, 1969 के तहत अनिवार्य। जन्म की घटना के 21 दिनों के भीतर अस्पताल या अभिभावक द्वारा स्थानीय रजिस्ट्रार (नगर निगम या ग्राम पंचायत) को सूचना दी जाती है और आधिकारिक जन्म प्रमाण पत्र जारी किया जाता है।"
  },
  "authority": {
    "en": "Office of the Registrar General of India & Municipal Health Departments",
    "hi": "जन्म एवं मृत्यु रजिस्ट्रार, नगर निगम / ग्राम पंचायत"
  },
  "department": {
    "en": "Office of the Registrar General of India & Municipal Health Departments",
    "hi": "स्वास्थ्य विभाग, संबंधित नगर निगम / नागरिक पंजीकरण प्रणाली (CRS)"
  },
  "source": {
    "en": "Office of the Registrar General & Census Commissioner, India",
    "hi": "जन्म और मृत्यु पंजीकरण अधिनियम, 1969 (1969 का अधिनियम 18)"
  },
  "officialSource": {
    "en": "Office of the Registrar General & Census Commissioner, India",
    "hi": "भारत के महारजिस्ट्रार (ORGI) एवं राज्य स्वास्थ्य विभाग"
  },
  "availability": {
    "en": "Jurisdictional Municipal Corporation / Urban Local Body",
    "hi": "स्थानीय क्षेत्राधिकार (नगर निगम / ग्राम पंचायत)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (सीआरएस / नगर निगम पोर्टल)"
  },
  "officialPortal": {
    "name": {
      "en": "Civil Registration System (Office of the Registrar General of India)",
      "hi": "नागरिक पंजीकरण प्रणाली (Civil Registration System - CRS)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free within 21 days | ₹20 - ₹50 per certified copy thereafter",
      "hi": "21 दिनों के भीतर: निःशुल्क (₹0) | विलंब शुल्क: ₹2 - ₹10 | प्रमाणित प्रति: ₹5 - ₹30"
    },
    "verificationSource": {
      "en": "Registration of Births and Deaths Act, 1969 & State Rules",
      "hi": "जन्म और मृत्यु पंजीकरण नियम दर तालिका"
    }
  },
  "feeInfo": {
    "en": "Free within 21 days | ₹20 - ₹50 per certified copy thereafter",
    "hi": "21 दिनों के भीतर: निःशुल्क (₹0) | विलंब शुल्क: ₹2 - ₹10 | प्रमाणित प्रति: ₹5 - ₹30"
  },
  "processingTime": {
    "timeText": {
      "en": "3 - 7 Working Days (Online download)",
      "hi": "7 - 14 कार्य दिवस (डिजिटल प्रति तुरंत उपलब्ध)"
    },
    "statutoryAct": {
      "en": "Registration of Births and Deaths (Amendment) Act, 2023",
      "hi": "जन्म और मृत्यु पंजीकरण अधिनियम, 1969"
    }
  },
  "processingInfo": {
    "en": "3 - 7 Working Days (Online download)",
    "hi": "7 - 14 कार्य दिवस (डिजिटल प्रति तुरंत उपलब्ध)"
  },
  "eligibility": [
    {
      "en": "Any birth occurring within the jurisdiction of the municipal corporation or gram panchayat.",
      "hi": "संबंधित नगर निगम/पंचायत क्षेत्राधिकार में हुआ बच्चे का जन्म।"
    },
    {
      "en": "Must be reported within 21 days of birth for free standard registration; delayed registration requires order from Executive Magistrate.",
      "hi": "अस्पताल के संस्थागत जन्म रिकॉर्ड या घर पर जन्म होने पर अधिकृत सूचना।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Hospital Discharge Summary / Institutional Birth Report",
        "hi": "अस्पताल डिस्चार्ज सारांश / संस्थागत जन्म रिपोर्ट"
      },
      "type": {
        "en": "Original",
        "hi": "मूल प्रति / फॉर्म 1"
      },
      "description": {
        "en": "Official slip issued by hospital where birth took place.",
        "hi": "अस्पताल द्वारा जारी जन्म रिपोर्ट जिसमें बच्चे का लिंग, जन्म समय और माता-पिता का नाम हो।"
      },
      "commonExamples": {
        "en": "Hospital Discharge Certificate or Form 1 issued by institution",
        "hi": "अस्पताल डिस्चार्ज स्लिप या फॉर्म 1"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Parents' Aadhaar Cards",
        "hi": "माता-पिता के आधार कार्ड"
      },
      "type": {
        "en": "Aadhaar e-KYC / Self-Attested",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Proof of identity and parentage.",
        "hi": "माता और पिता दोनों की पहचान और पते का प्रमाण।"
      },
      "commonExamples": {
        "en": "Mother and Father Aadhaar Cards",
        "hi": "माता-पिता के आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Marriage Certificate of Parents (if available)",
        "hi": "माता-पिता का विवाह प्रमाण पत्र (यदि उपलब्ध हो)"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "सत्यापित प्रति"
      },
      "description": {
        "en": "Proof of marriage.",
        "hi": "अभिलेखों में उपनाम और माता-पिता के संबंध की पुष्टि हेतु।"
      },
      "commonExamples": {
        "en": "Marriage Certificate",
        "hi": "विवाह प्रमाण पत्र या राशन कार्ड"
      },
      "isMandatory": false
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Hospital Intimation of Birth within Statutory 21 Days",
        "hi": "21 दिनों के भीतर अस्पताल द्वारा रजिस्ट्रार को जन्म की सूचना"
      },
      "description": {
        "en": "Under Section 8 of the RBD Act, the medical officer in charge of the hospital/nursing home reports the birth to the local Registrar using Form 1 within 21 days.",
        "hi": "संस्थागत प्रसव में अस्पताल सीधे स्थानीय नगर निगम या सीआरएस पोर्टल पर प्रपत्र 1 जमा करता है।"
      },
      "agencyOrPortal": {
        "en": "Hospital Administrative Desk / Form 1",
        "hi": "अस्पताल / नागरिक पंजीकरण प्रणाली (CRS)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "1 - 2 Days from delivery",
        "hi": "21 दिनों के भीतर अनिवार्य"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "Registration of Births and Deaths Act, 1969",
        "hi": "आरबीडी अधिनियम 1969 (धारा 8)"
      },
      "sourceReference": {
        "en": "Section 8 of RBD Act, 1969",
        "hi": "Section 8 of RBD Act, 1969"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Access Civil Registration System (CRS) or Municipal Health Portal",
        "hi": "सीआरएस (crsorgi.gov.in) या नगर निगम स्वास्थ्य पोर्टल पर जाएं"
      },
      "description": {
        "en": "Open https://crsorgi.gov.in or your urban municipal corporation portal (e.g. BMC Mumbai portal.mcgm.gov.in, MCD Delhi mcdonline.nic.in, or BBMP Bengaluru).",
        "hi": "आधिकारिक जन्म पोर्टल पर जाएं और अपने बच्चे के जन्म का वर्ष, लिंग, अस्पताल का नाम और माता का नाम दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "crsorgi.gov.in / Urban Municipal Portal",
        "hi": "सीआरएस पोर्टल / नगर निगम स्वास्थ्य पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Office of the Registrar General & Census Commissioner, India",
        "hi": "डिजिटल नागरिक पंजीकरण मानक"
      },
      "sourceReference": {
        "en": "Registration of Births and Deaths (Amendment) Act, 2023",
        "hi": "Registration of Births and Deaths (Amendment) Act, 2023"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Search Vital Registration Records",
        "hi": "पंजीकरण अभिलेख खोजें और बच्चे का नाम जोड़ें (यदि आवश्यक हो)"
      },
      "description": {
        "en": "Enter date of birth, child's gender, hospital name, mother's name, and father's name exactly as recorded during hospital discharge.",
        "hi": "जन्म रिकॉर्ड खोजें। यदि अस्पताल ने नाम नहीं जोड़ा था, तो बच्चे का नाम जोड़ने के लिए माता-पिता के घोषणा पत्र के साथ आवेदन करें।"
      },
      "agencyOrPortal": {
        "en": "Civil Registration System Search Engine",
        "hi": "रजिस्ट्रार रिकॉर्ड सर्च गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 - 10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Registration of Births and Deaths Rules",
        "hi": "आरबीडी नियम 10 (नामकरण नियम)"
      },
      "sourceReference": {
        "en": "Rule 8 & Form 5 (Birth Certificate)",
        "hi": "Rule 8 & Form 5 (Birth Certificate)"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Pay Nominal Statutory Certified Copy Fee",
        "hi": "प्रमाणित प्रति के लिए नाममात्र वैधानिक सरकारी शुल्क का भुगतान करें"
      },
      "description": {
        "en": "First copy registered within 21 days is free; subsequent certified copies cost ₹20 - ₹50 per copy as per state statutory rates.",
        "hi": "सरकारी प्रमाणित प्रति हेतु ₹5 से ₹30 के सांकेतिक शुल्क का यूपीआई या नेट बैंकिंग द्वारा भुगतान करें।"
      },
      "agencyOrPortal": {
        "en": "Municipal Payment Gateway",
        "hi": "पोर्टल पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Section 17 of Registration of Births and Deaths Act, 1969",
        "hi": "राज्य पंजीकरण नियम"
      },
      "sourceReference": {
        "en": "RBD Act Section 17 Search & Copy Fee",
        "hi": "RBD Act Section 17 Search & Copy Fee"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Download Digitally Signed Birth Certificate PDF",
        "hi": "डिजिटल हस्ताक्षरित एवं क्यूआर कोड युक्त जन्म प्रमाण पत्र डाउनलोड करें"
      },
      "description": {
        "en": "Download the official birth certificate PDF containing the Registrar's verifiable digital signature, barcode, and QR code, legally valid for passport, school admissions, and Aadhaar.",
        "hi": "रजिस्ट्रार के डिजिटल हस्ताक्षर और अद्वितीय पंजीकरण संख्या वाला जन्म प्रमाण पत्र पीडीएफ डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Office of the Registrar General of India",
        "hi": "सीआरएस डाउनलोड विंडो / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Instant to 5 Working Days",
        "hi": "तुरंत डाउनलोड"
      },
      "mode": "online",
      "officialSource": {
        "en": "Registration of Births and Deaths (Amendment) Act, 2023",
        "hi": "आईटी अधिनियम 2000 डिजिटल प्रमाणन"
      },
      "sourceReference": {
        "en": "Section 12 of RBD Act, 1969",
        "hi": "Section 12 of RBD Act, 1969"
      }
    }
  ],
  "warnings": [
    {
      "en": "Registration within 21 days is free and straightforward. Births reported after 1 year require an order from an Executive Magistrate / SDM.",
      "hi": "जन्म के 21 दिनों के भीतर पंजीकरण कराना निःशुल्क और अनिवार्य है। 30 दिनों के बाद पंजीकरण पर लेट फीस लगती है और 1 वर्ष बाद प्रथम श्रेणी मजिस्ट्रेट के आदेश की आवश्यकता होती है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। जन्म प्रमाण पत्र केवल अधिकृत स्थानीय निकाय रजिस्ट्रार द्वारा जारी किया जाता है।"
  }
},
  "death-certificate": {
  "id": "death-certificate",
  "title": {
    "en": "Death Certificate Registration & Certified Copy",
    "hi": "मृत्यु प्रमाण पत्र पंजीकरण एवं प्रमाणित प्रति (सीआरएस)"
  },
  "category": {
    "en": "Certificates & Vital Records",
    "hi": "प्रमाण पत्र एवं राजस्व अभिलेख"
  },
  "shortDescription": {
    "en": "Register a death within statutory 21 days or apply for an official certified death certificate copy through the Civil Registration System (CRS) / Municipal Corporation.",
    "hi": "बैंक खाता निपटान, बीमा दावों, और संपत्ति नामांतरण के लिए स्थानीय रजिस्ट्रार (नगर निगम / सीआरएस) से आधिकारिक मृत्यु प्रमाण पत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Administered under the Registration of Births and Deaths Act, 1969. Institutional deaths are reported by hospitals, while domiciliary deaths are reported by family members or medical attendants to the local registrar within 21 days. Certified copies are required for legal succession, bank account settlements, property transfer, and insurance claims.",
    "hi": "जन्म और मृत्यु पंजीकरण अधिनियम, 1969 के तहत अनिवार्य। किसी व्यक्ति की मृत्यु के 21 दिनों के भीतर श्मशान/कब्रिस्तान रसीद और चिकित्सा प्रमाण पत्र (MCCD) के साथ सूचना दर्ज की जाती है और आधिकारिक मृत्यु प्रमाण पत्र जारी किया जाता है।"
  },
  "authority": {
    "en": "Office of the Registrar General of India & Municipal Public Health Department",
    "hi": "जन्म एवं मृत्यु रजिस्ट्रार, नगर निगम / ग्राम पंचायत"
  },
  "department": {
    "en": "Office of the Registrar General of India & Municipal Public Health Department",
    "hi": "स्वास्थ्य विभाग, संबंधित नगर निगम / नागरिक पंजीकरण प्रणाली (CRS)"
  },
  "source": {
    "en": "Office of the Registrar General & Census Commissioner, India",
    "hi": "जन्म और मृत्यु पंजीकरण अधिनियम, 1969 (धारा 12 एवं 17)"
  },
  "officialSource": {
    "en": "Office of the Registrar General & Census Commissioner, India",
    "hi": "भारत के महारजिस्ट्रार (ORGI) एवं राज्य स्वास्थ्य विभाग"
  },
  "availability": {
    "en": "Jurisdictional Municipal Corporation / Urban Local Body",
    "hi": "स्थानीय क्षेत्राधिकार (नगर निगम / ग्राम पंचायत)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (सीआरएस / नगर निगम पोर्टल)"
  },
  "officialPortal": {
    "name": {
      "en": "Civil Registration System (Office of the Registrar General of India)",
      "hi": "नागरिक पंजीकरण प्रणाली (Civil Registration System - CRS)"
    },
    "notes": {
      "en": "Central portal redirects to municipal / state civil registrar databases.",
      "hi": "Central portal redirects to municipal / state civil registrar databases."
    }
  },
  "fees": {
    "amountText": {
      "en": "Free within 21 days | ₹20 - ₹50 per certified copy thereafter",
      "hi": "21 दिनों के भीतर: निःशुल्क (₹0) | विलंब शुल्क: ₹2 - ₹10 | प्रमाणित प्रति: ₹5 - ₹30"
    },
    "verificationSource": {
      "en": "Registration of Births and Deaths Act, 1969 & State Rules",
      "hi": "जन्म और मृत्यु पंजीकरण नियम दर तालिका"
    }
  },
  "feeInfo": {
    "en": "Free within 21 days | ₹20 - ₹50 per certified copy thereafter",
    "hi": "21 दिनों के भीतर: निःशुल्क (₹0) | विलंब शुल्क: ₹2 - ₹10 | प्रमाणित प्रति: ₹5 - ₹30"
  },
  "processingTime": {
    "timeText": {
      "en": "3 - 7 Working Days (Online download)",
      "hi": "7 - 14 कार्य दिवस (सत्यापन के बाद)"
    },
    "statutoryAct": {
      "en": "Registration of Births and Deaths Act, 1969",
      "hi": "जन्म और मृत्यु पंजीकरण अधिनियम, 1969"
    }
  },
  "processingInfo": {
    "en": "3 - 7 Working Days (Online download)",
    "hi": "7 - 14 कार्य दिवस (सत्यापन के बाद)"
  },
  "eligibility": [
    {
      "en": "Any death occurring within the territorial jurisdiction of the municipal corporation, municipal council, or gram panchayat.",
      "hi": "संबंधित नगर निगम/ग्राम पंचायत क्षेत्राधिकार में हुई मृत्यु।"
    },
    {
      "en": "Must be reported within statutory 21 days of occurrence by immediate family member, medical attendant, or hospital administration.",
      "hi": "मृतक का निकटतम रिश्तेदार या कानूनी उत्तराधिकारी।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Medical Certification of Cause of Death (MCCD) / Doctor Slip",
        "hi": "मृत्यु के कारण का चिकित्सा प्रमाण पत्र (MCCD - Form 4/4A)"
      },
      "type": {
        "en": "Original",
        "hi": "मूल प्रति"
      },
      "description": {
        "en": "Official cause of death form signed by attending registered medical practitioner.",
        "hi": "अस्पताल या पंजीकृत डॉक्टर द्वारा जारी मृत्यु प्रमाण प्रपत्र।"
      },
      "commonExamples": {
        "en": "Form 4 (Hospital deaths) or Form 4A (Domiciliary deaths)",
        "hi": "फॉर्म 4 (अस्पताल) या फॉर्म 4A (घर पर मृत्यु)"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Deceased Person's Identity Proof (Aadhaar / Voter ID / PAN)",
        "hi": "मृतक का पहचान प्रमाण (आधार / वोटर आईडी / पैन)"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "प्रतिलिपि"
      },
      "description": {
        "en": "Government photo ID of the deceased person.",
        "hi": "मृतक व्यक्ति का सरकारी पहचान पत्र।"
      },
      "commonExamples": {
        "en": "Aadhaar Card or Voter ID of the deceased",
        "hi": "मृतक का आधार कार्ड या मतदाता पहचान पत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Applicant's Photo ID & Relationship Proof",
        "hi": "आवेदक का फोटो पहचान पत्र एवं संबंध प्रमाण"
      },
      "type": {
        "en": "Original / DigiLocker",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Proof of legal relationship of the informant/applicant.",
        "hi": "मृतक से संबंध साबित करने वाला दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Applicant Aadhaar Card, Passport, or Ration Card showing relationship",
        "hi": "राशन कार्ड, आधार कार्ड, या कानूनी वारिस हलफनामा"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Cremation / Burial Ground Receipt",
        "hi": "श्मशान / कब्रिस्तान की रसीद"
      },
      "type": {
        "en": "Original",
        "hi": "मूल रसीद"
      },
      "description": {
        "en": "Official receipt from the crematorium or cemetery verifying disposal.",
        "hi": "दाह संस्कार या दफन की पुष्टि करने वाली आधिकारिक रसीद।"
      },
      "commonExamples": {
        "en": "Shamshan / Kabristan disposal receipt",
        "hi": "श्मशान भूमि पर्ची या कब्रिस्तान पावती"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Obtain Medical Certification of Cause of Death (MCCD - Form 4/4A)",
        "hi": "मृत्यु के कारण का चिकित्सा प्रमाण पत्र (MCCD) प्राप्त करें"
      },
      "description": {
        "en": "Collect the official Medical Certificate of Cause of Death (MCCD) from the treating doctor or hospital administration immediately following the occurrence.",
        "hi": "अस्पताल से फॉर्म 4 या घर पर मृत्यु होने पर डॉक्टर से फॉर्म 4A प्राप्त करें।"
      },
      "agencyOrPortal": {
        "en": "Attending Hospital / Registered Medical Practitioner",
        "hi": "उपचार करने वाला अस्पताल / डॉक्टर"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "Immediate upon demise",
        "hi": "मृत्यु के समय तुरंत"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Section 10(2) of Registration of Births and Deaths Act, 1969",
        "hi": "आरबीडी अधिनियम धारा 10(2)"
      },
      "sourceReference": {
        "en": "Form 4 / Form 4A under RBD Act",
        "hi": "Form 4 / Form 4A under RBD Act"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Report Demise to Registrar within 21 Days with Cremation Receipt",
        "hi": "श्मशान रसीद के साथ 21 दिनों के भीतर रजिस्ट्रार को सूचना दें"
      },
      "description": {
        "en": "Submit Form 2 along with the MCCD and the original crematorium/burial ground receipt to the local municipal health ward office or via crsorgi.gov.in.",
        "hi": "स्थानीय नगर निगम स्वास्थ्य कार्यालय या सीआरएस पोर्टल पर श्मशान रसीद और डॉक्टर पर्ची जमा करें।"
      },
      "agencyOrPortal": {
        "en": "crsorgi.gov.in / Municipal Corporation Health Ward",
        "hi": "स्थानीय नागरिक रजिस्ट्रार कार्यालय"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "1 - 2 Days",
        "hi": "21 दिनों के भीतर अनिवार्य"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "Section 8 of Registration of Births and Deaths Act, 1969",
        "hi": "आरबीडी अधिनियम धारा 8"
      },
      "sourceReference": {
        "en": "Form 2 under RBD Rules",
        "hi": "Form 2 under RBD Rules"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Verification by Municipal Medical Officer of Health",
        "hi": "नगर निगम स्वास्थ्य चिकित्सा अधिकारी द्वारा सत्यापन"
      },
      "description": {
        "en": "The Municipal Medical Officer of Health cross-checks the institutional death intimation against the cemetery receipt and hospital records.",
        "hi": "स्वास्थ्य अधिकारी द्वारा श्मशान रिकॉर्ड और डॉक्टर रिपोर्ट का मिलान करके मृत्यु रजिस्टर में प्रविष्टि की जाती है।"
      },
      "agencyOrPortal": {
        "en": "Jurisdictional Registrar of Births & Deaths",
        "hi": "स्वास्थ्य विभाग (MOH)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 - 5 Working Days",
        "hi": "3 - 5 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Registration of Births and Deaths Rules",
        "hi": "मृत्यु पंजीकरण नियमावली"
      },
      "sourceReference": {
        "en": "Rule 10 of RBD Rules",
        "hi": "Rule 10 of RBD Rules"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Pay Nominal Statutory Certified Copy Fee",
        "hi": "प्रमाणित प्रति के लिए सांकेतिक सरकारी शुल्क का भुगतान करें"
      },
      "description": {
        "en": "Initial copy within 21 days is free in most states; subsequent certified copies cost ₹20 - ₹50 per copy.",
        "hi": "सरकारी प्रमाणित प्रति हेतु ₹5 से ₹30 का ऑनलाइन या काउंटर पर भुगतान करें।"
      },
      "agencyOrPortal": {
        "en": "Municipal Payment Gateway / Ward Counter",
        "hi": "पोर्टल पेमेंट गेटवे / नगर निगम काउंटर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Section 17 of Registration of Births and Deaths Act, 1969",
        "hi": "राज्य पंजीकरण नियम"
      },
      "sourceReference": {
        "en": "RBD Act Section 17",
        "hi": "RBD Act Section 17"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Download Digitally Signed Death Certificate (Form 6)",
        "hi": "डिजिटल हस्ताक्षरित मृत्यु प्रमाण पत्र (फॉर्म 6) डाउनलोड करें"
      },
      "description": {
        "en": "Download the official Form 6 death certificate PDF containing the Registrar's digital signature and verifiable QR code for probate, insurance, and bank settlements.",
        "hi": "बारकोड और डिजिटल हस्ताक्षर युक्त आधिकारिक मृत्यु प्रमाण पत्र डाउनलोड करें, जो कानूनी व वित्तीय दावों हेतु मान्य है।"
      },
      "agencyOrPortal": {
        "en": "Civil Registration System / Municipal Portal",
        "hi": "सीआरएस पोर्टल / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 - 7 Working Days",
        "hi": "तुरंत डाउनलोड"
      },
      "mode": "online",
      "officialSource": {
        "en": "Registration of Births and Deaths (Amendment) Act, 2023",
        "hi": "डिजिटल हस्ताक्षर कानून (IT Act 2000)"
      },
      "sourceReference": {
        "en": "Section 12 & Form 6 of RBD Act",
        "hi": "Section 12 & Form 6 of RBD Act"
      }
    }
  ],
  "warnings": [
    {
      "en": "Deaths reported after 21 days but within 30 days require late fee and permission of the prescribed authority.",
      "hi": "21 दिनों के बाद मृत्यु की सूचना देने पर विलंब शुल्क और कार्यपालक मजिस्ट्रेट के अनुमति आदेश की आवश्यकता होती है।"
    },
    {
      "en": "Deaths reported after 1 year require an order from an Executive Magistrate (SDM/Tehsildar).",
      "hi": "मृत्यु प्रमाण पत्र बीमा दावों, बैंक खाता क्लेम और संपत्ति हस्तांतरण के लिए सबसे महत्वपूर्ण कानूनी दस्तावेज़ है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। मृत्यु प्रमाण पत्र केवल अधिकृत स्थानीय निकाय रजिस्ट्रार द्वारा जारी किया जाता है।"
  }
},
  "gst-registration": {
  "id": "gst-registration",
  "title": {
    "en": "New GST Registration for Businesses",
    "hi": "नया जीएसटी पंजीकरण (वस्तु एवं सेवा कर - फॉर्म REG-01)"
  },
  "category": {
    "en": "Tax & Business",
    "hi": "कर एवं व्यापार"
  },
  "shortDescription": {
    "en": "Apply for a 15-digit Goods and Services Tax Identification Number (GSTIN) on the official GST portal with Aadhaar authentication.",
    "hi": "जीएसटी पोर्टल (gst.gov.in) पर 15-अंकीय माल एवं सेवा कर पहचान संख्या (GSTIN) प्राप्त करने के लिए आधार प्रमाणीकरण द्वारा ऑनलाइन पंजीकरण करें।"
  },
  "fullOverview": {
    "en": "Every business with annual turnover exceeding the threshold limit (₹40 Lakhs for goods / ₹20 Lakhs for services, or ₹20L/₹10L in special category states) or conducting inter-state commerce must register on gst.gov.in. Registration is processed online through Aadhaar biometric authentication.",
    "hi": "केंद्रीय वस्तु एवं सेवा कर अधिनियम, 2017 के तहत संचालित। ₹40 लाख (वस्तु) या ₹20 लाख (सेवा) से अधिक वार्षिक टर्नओवर वाले व्यवसायों, या ई-कॉमर्स और अंतर-राज्यीय बिक्री करने वाले व्यापारियों के लिए अनिवार्य।"
  },
  "authority": {
    "en": "Goods and Services Tax Network (GSTN) & Central Board of Indirect Taxes and Customs (CBIC)",
    "hi": "जीएसटी परिषद, केंद्रीय अप्रत्यक्ष कर एवं सीमा शुल्क बोर्ड (CBIC) एवं राज्य कर विभाग"
  },
  "department": {
    "en": "Goods and Services Tax Network (GSTN) & Central Board of Indirect Taxes and Customs (CBIC)",
    "hi": "केंद्रीय अप्रत्यक्ष कर एवं सीमा शुल्क बोर्ड (CBIC), वित्त मंत्रालय"
  },
  "source": {
    "en": "Goods and Services Tax Network (GSTN), Government of India",
    "hi": "केंद्रीय माल एवं सेवा कर (CGST) अधिनियम, 2017 एवं नियम 2017 (नियम 8)"
  },
  "officialSource": {
    "en": "Goods and Services Tax Network (GSTN), Government of India",
    "hi": "जीएसटी परिषद, भारत सरकार (gst.gov.in)"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (राष्ट्रीय स्तर)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आधार ओटीपी / जीएसटीएन)"
  },
  "officialPortal": {
    "name": {
      "en": "Goods & Services Tax (GST) Portal",
      "hi": "जीएसटी पोर्टल (GST Common Portal - gst.gov.in)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) - 100% Free Official Government Registration",
      "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
    },
    "verificationSource": {
      "en": "Central Goods and Services Tax (CGST) Act, 2017",
      "hi": "सीजीएसटी नियम, 2017 (पंजीकरण हेतु कोई सरकारी शुल्क नहीं)"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) - 100% Free Official Government Registration",
    "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "3 - 7 Working Days (with Aadhaar Authentication)",
      "hi": "आधार प्रमाणीकरण के साथ: 3 - 7 कार्य दिवस | भौतिक सत्यापन: 21 - 30 दिन"
    },
    "statutoryAct": {
      "en": "CGST Rules, 2017 (Rule 9)",
      "hi": "केंद्रीय माल एवं सेवा कर (CGST) अधिनियम, 2017"
    }
  },
  "processingInfo": {
    "en": "3 - 7 Working Days (with Aadhaar Authentication)",
    "hi": "आधार प्रमाणीकरण के साथ: 3 - 7 कार्य दिवस | भौतिक सत्यापन: 21 - 30 दिन"
  },
  "eligibility": [
    {
      "en": "Any commercial enterprise, sole proprietor, partnership, LLP, or private company operating in India.",
      "hi": "वैध स्थायी खाता संख्या (पैन) रखने वाला कोई भी व्यक्ति या व्यावसायिक इकाई।"
    },
    {
      "en": "Mandatory if aggregate turnover exceeds statutory threshold or for e-commerce sellers and inter-state suppliers.",
      "hi": "सत्यापन योग्य वाणिज्यिक व्यावसायिक पता (स्वामित्व या वैध रेंट एग्रीमेंट)।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "PAN Card of the Business / Proprietor",
        "hi": "व्यवसाय / मालिक का स्थायी खाता संख्या (पैन)"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आयकर डेटाबेस सत्यापन"
      },
      "description": {
        "en": "Primary tax identification number.",
        "hi": "व्यापार या प्रोपराइटर का वैध पैन कार्ड।"
      },
      "commonExamples": {
        "en": "PAN Card",
        "hi": "पैन कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Business Place / Commercial Address",
        "hi": "व्यावसायिक परिसर / पते का प्रमाण"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "पंजीकृत प्रति / उपयोगिता बिल"
      },
      "description": {
        "en": "Ownership or tenancy proof.",
        "hi": "व्यावसायिक पते का कानूनी स्वामित्व या वैध किराया समझौता।"
      },
      "commonExamples": {
        "en": "Electricity Bill (< 2 months) with Rent Agreement and No-Objection Certificate (NOC)",
        "hi": "हालिया बिजली बिल (< 2 माह) + पंजीकृत रेंट एग्रीमेंट / एनओसी"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Bank Account Proof",
        "hi": "बैंक खाता प्रमाण"
      },
      "type": {
        "en": "Digital Upload",
        "hi": "डिजिटल प्रति"
      },
      "description": {
        "en": "Active bank account details of the enterprise.",
        "hi": "व्यवसाय के नाम का रद्द चेक या बैंक स्टेटमेंट।"
      },
      "commonExamples": {
        "en": "First page of Bank Passbook, Bank Statement, or Cancelled Cheque",
        "hi": "रद्द चेक (Cancelled Cheque), बैंक पासबुक प्रथम पृष्ठ"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Aadhaar Card of Authorized Signatory",
        "hi": "अधिकृत हस्ताक्षरकर्ता का आधार कार्ड"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी"
      },
      "description": {
        "en": "Required for Aadhaar authentication to bypass physical premises inspection.",
        "hi": "ओटीपी प्रमाणीकरण के लिए सक्रिय मोबाइल लिंक आधार।"
      },
      "commonExamples": {
        "en": "Aadhaar Card",
        "hi": "आधार कार्ड"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Generate Temporary Reference Number (TRN) on GST Portal",
        "hi": "जीएसटी पोर्टल पर अस्थायी संदर्भ संख्या (TRN) उत्पन्न करें (Part A)"
      },
      "description": {
        "en": "Visit https://www.gst.gov.in > Services > Registration > New Registration. Enter legal business PAN, official email address, and mobile number to receive a 15-day TRN.",
        "hi": "gst.gov.in पर जाएं, 'Services' > 'Registration' > 'New Registration' चुनें और पैन, ईमेल और मोबाइल ओटीपी से TRN बनाएं।"
      },
      "agencyOrPortal": {
        "en": "gst.gov.in",
        "hi": "जीएसटी कॉमन पोर्टल (gst.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Central Goods and Services Tax (CGST) Rules, 2017",
        "hi": "सीजीएसटी नियम 8(1)"
      },
      "sourceReference": {
        "en": "Rule 8(1) of CGST Rules, 2017",
        "hi": "Rule 8(1) of CGST Rules, 2017"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Fill Part-B: Entity Profile, Place of Business & HSN/SAC Codes",
        "hi": "पार्ट-बी भरें: इकाई का विवरण, व्यवसाय स्थल और एचएसएन कोड"
      },
      "description": {
        "en": "Log in with TRN. Enter trade name, constitution of business, principal place of business, HSN commodity codes or SAC service codes.",
        "hi": "TRN से लॉगिन करें। व्यापार का नाम, साझेदारी/निदेशक विवरण, मुख्य व्यापारिक गतिविधियां और वस्तुओं/सेवाओं के HSN/SAC कोड भरें।"
      },
      "agencyOrPortal": {
        "en": "GSTN Registration Engine",
        "hi": "जीएसटी ऑनलाइन फॉर्म REG-01"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "20 Minutes",
        "hi": "15 - 20 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Form GST REG-01 User Manual",
        "hi": "सीजीएसटी नियम 8(2)"
      },
      "sourceReference": {
        "en": "Rule 8(2) of CGST Rules, 2017",
        "hi": "Rule 8(2) of CGST Rules, 2017"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Upload Commercial Premises Proof & Bank Account Proof",
        "hi": "वाणिज्यिक परिसर का प्रमाण और बैंक विवरण अपलोड करें"
      },
      "description": {
        "en": "Upload commercial electricity bill or municipal tax receipt along with registered rent agreement and landlord NOC. Upload cancelled cheque or bank statement.",
        "hi": "बिजली बिल, रेंट एग्रीमेंट, एनओसी और अधिकृत हस्ताक्षरकर्ता का फोटो और रद्द चेक अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "GSTN Document Upload System",
        "hi": "जीएसटी दस्तावेज़ अपलोड मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "CBIC Notification No. 16/2020-Central Tax",
        "hi": "जीएसटी पंजीकरण दिशानिर्देश"
      },
      "sourceReference": {
        "en": "GST Document Specification Guidelines",
        "hi": "GST Document Specification Guidelines"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Complete Aadhaar Authentication via OTP Link",
        "hi": "ओटीपी लिंक के माध्यम से आधार प्रमाणीकरण पूरा करें"
      },
      "description": {
        "en": "Click the official Aadhaar authentication link sent to the primary authorized signatory. Validate using Aadhaar mobile OTP to bypass mandatory physical site inspection.",
        "hi": "पंजीकृत मोबाइल पर आए लिंक पर क्लिक करके आधार ओटीपी दर्ज करें। आधार सत्यापन से भौतिक साइट निरीक्षण की आवश्यकता नहीं होती।"
      },
      "agencyOrPortal": {
        "en": "UIDAI / GSTN API Bridge",
        "hi": "जीएसटीएन आधार सत्यापन गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "CGST Rules, 2017 (Rule 8(4A))",
        "hi": "सीजीएसटी नियम 8(4A) आधार प्रमाणीकरण"
      },
      "sourceReference": {
        "en": "Rule 8(4A) of CGST Rules, 2017",
        "hi": "Rule 8(4A) of CGST Rules, 2017"
      },
      "officialTip": {
        "en": "Successful Aadhaar authentication ensures your GSTIN is approved within 7 working days without site inspection.",
        "hi": "Successful Aadhaar authentication ensures your GSTIN is approved within 7 working days without site inspection."
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Generate Application Reference Number (ARN) & Officer Scrutiny",
        "hi": "आवेदन संदर्भ संख्या (ARN) जनरेट करें और अधिकारी समीक्षा"
      },
      "description": {
        "en": "System verifies the application and issues a 15-digit ARN. The jurisdictional GST officer reviews particulars; if any discrepancy is found, a Form REG-03 query is issued within 7 days.",
        "hi": "सफलतापूर्वक जमा करने पर 15-अंकीय ARN प्राप्त होगा। क्षेत्राधिकार कर अधिकारी 7 कार्य दिवसों में आवेदन की जांच करते हैं।"
      },
      "agencyOrPortal": {
        "en": "Jurisdictional GST Commissionerate",
        "hi": "जीएसटी क्षेत्राधिकार कर कार्यालय"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 - 7 Working Days",
        "hi": "3 - 7 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "CGST Rules, 2017 (Rule 9)",
        "hi": "सीजीएसटी नियम 9"
      },
      "sourceReference": {
        "en": "Rule 9(1) of CGST Rules, 2017",
        "hi": "Rule 9(1) of CGST Rules, 2017"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "Download GST Registration Certificate (Form GST REG-06)",
        "hi": "जीएसटी पंजीकरण प्रमाणपत्र (Form GST REG-06) डाउनलोड करें"
      },
      "description": {
        "en": "Upon approval, download your official GST Registration Certificate (Form GST REG-06) displaying your 15-digit GSTIN, principal place of business, and QR code seal.",
        "hi": "अनुमोदन के बाद जीएसटी पोर्टल से 15-अंकीय जीएसटीएन (GSTIN) युक्त आधिकारिक डिजिटल प्रमाण पत्र डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "GST Portal Downloads",
        "hi": "जीएसटी पोर्टल डाउनलोड विंडो"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Instant upon approval",
        "hi": "तुरंत जारी अनुमोदन पर"
      },
      "mode": "online",
      "officialSource": {
        "en": "CGST Rules, 2017 (Rule 10)",
        "hi": "सीजीएसटी नियम 10(1)"
      },
      "sourceReference": {
        "en": "Rule 10(1) of CGST Rules, 2017",
        "hi": "Rule 10(1) of CGST Rules, 2017"
      }
    }
  ],
  "warnings": [
    {
      "en": "Official GST registration on gst.gov.in is completely FREE. Never pay third-party websites claiming to be the official GST registry.",
      "hi": "जीएसटी पंजीकरण सरकार द्वारा पूर्णतः निःशुल्क (₹0) है। किसी भी बिचौलिये को सरकारी शुल्क न दें।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। जीएसटी पंजीकरण केवल जीएसटीएन पोर्टल (gst.gov.in) पर किया जाता है।"
  }
},
  "income-tax-filing": {
  "id": "income-tax-filing",
  "title": {
    "en": "Income Tax Return (ITR) e-Filing & e-Verification",
    "hi": "आयकर रिटर्न (आईटीआर) ई-फाइलिंग - फॉर्म 1 एवं 4"
  },
  "category": {
    "en": "Tax & Business",
    "hi": "कर एवं व्यापार"
  },
  "shortDescription": {
    "en": "File your annual Income Tax Return (ITR-1 to ITR-4) online and e-verify within 30 days using Aadhaar OTP.",
    "hi": "वेतनभोगी व्यक्तियों (ITR-1 सहज) और छोटे व्यवसायों/पेशेवरों (ITR-4 सुगम) के लिए आयकर ई-फाइलिंग पोर्टल पर अपना वार्षिक रिटर्न ऑनलाइन दाखिल करें।"
  },
  "fullOverview": {
    "en": "Administered by the Income Tax Department through the centralized e-Filing portal. Salaried individuals, professionals, and small businesses file annual tax returns, claim tax refunds, and verify Form 26AS/Annual Information Statement (AIS) directly online.",
    "hi": "आयकर अधिनियम, 1961 के तहत संचालित। करदाता अपनी कुल वार्षिक आय घोषित करते हैं, धारा 80C/80D कटौतियों का दावा करते हैं, टीडीएस रिफंड का दावा करते हैं और आधार ओटीपी द्वारा अपने रिटर्न को ई-सत्यापित करते हैं।"
  },
  "authority": {
    "en": "Income Tax Department, Ministry of Finance, Government of India",
    "hi": "केंद्रीय प्रत्यक्ष कर बोर्ड (CBDT), आयकर विभाग, वित्त मंत्रालय"
  },
  "department": {
    "en": "Income Tax Department, Ministry of Finance, Government of India",
    "hi": "आयकर विभाग, भारत सरकार"
  },
  "source": {
    "en": "Central Board of Direct Taxes (CBDT), Ministry of Finance",
    "hi": "आयकर अधिनियम, 1961 (धारा 139) एवं आयकर नियम, 1962"
  },
  "officialSource": {
    "en": "Central Board of Direct Taxes (CBDT), Ministry of Finance",
    "hi": "आयकर विभाग, वित्त मंत्रालय, भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (राष्ट्रीय स्तर)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आयकर ई-फाइलिंग पोर्टल)"
  },
  "officialPortal": {
    "name": {
      "en": "Income Tax Department e-Filing Portal",
      "hi": "आयकर ई-फाइलिंग पोर्टल (Income Tax e-Filing Portal)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) on incometax.gov.in | Late filing fees apply if filed past deadline",
      "hi": "समय पर दाखिल करने पर: निःशुल्क (₹0) | देर से दाखिल करने पर धारा 234F शुल्क: ₹1,000 - ₹5,000"
    },
    "verificationSource": {
      "en": "Income Tax Act, 1961 (Section 234F)",
      "hi": "आयकर अधिनियम, 1961 की धारा 234F"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) on incometax.gov.in | Late filing fees apply if filed past deadline",
    "hi": "समय पर दाखिल करने पर: निःशुल्क (₹0) | देर से दाखिल करने पर धारा 234F शुल्क: ₹1,000 - ₹5,000"
  },
  "processingTime": {
    "timeText": {
      "en": "Instant e-filing acknowledgment | Refund processed in 7 - 30 Working Days",
      "hi": "ई-सत्यापन के 7 - 30 दिनों के भीतर सीपीसी प्रसंस्करण एवं रिफंड"
    },
    "statutoryAct": {
      "en": "Income Tax Act, 1961",
      "hi": "आयकर अधिनियम, 1961"
    }
  },
  "processingInfo": {
    "en": "Instant e-filing acknowledgment | Refund processed in 7 - 30 Working Days",
    "hi": "ई-सत्यापन के 7 - 30 दिनों के भीतर सीपीसी प्रसंस्करण एवं रिफंड"
  },
  "eligibility": [
    {
      "en": "Any individual or entity whose total annual income exceeds the basic exemption limit, or who wishes to claim a tax refund or carry forward financial losses.",
      "hi": "पैन और सक्रिय आधार संख्या रखने वाला कोई भी भारतीय निवासी या इकाई।"
    },
    {
      "en": "Must have a valid PAN linked with Aadhaar.",
      "hi": "आयकर छूट सीमा से अधिक सकल कुल आय, या टीडीएस रिफंड का दावा करने वाले व्यक्ति।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Form 16 / Salary Certificate",
        "hi": "फॉर्म 16 / वेतन प्रमाण पत्र"
      },
      "type": {
        "en": "Employer Issued",
        "hi": "नियोक्ता द्वारा जारी टीडीएस प्रमाणपत्र"
      },
      "description": {
        "en": "Tax deduction summary provided by employer.",
        "hi": "कटौती किए गए कर और वेतन संरचना का वार्षिक विवरण।"
      },
      "commonExamples": {
        "en": "Form 16 Part A and Part B",
        "hi": "पार्ट ए और पार्ट बी युक्त फॉर्म 16"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Annual Information Statement (AIS) / Form 26AS",
        "hi": "वार्षिक सूचना विवरण (AIS) / फॉर्म 26AS"
      },
      "type": {
        "en": "Digital Download",
        "hi": "आयकर पोर्टल से डाउनलोड"
      },
      "description": {
        "en": "Tax deducted at source (TDS) and financial transactions report.",
        "hi": "बैंक ब्याज, शेयर लाभांश और टीडीएस कटौतियों का एकीकृत कर रिकॉर्ड।"
      },
      "commonExamples": {
        "en": "Downloaded from incometax.gov.in",
        "hi": "पोर्टल से डाउनलोड किया गया AIS / TIS पीडीएफ"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Bank Account Statements for all Active Accounts",
        "hi": "सभी सक्रिय बैंक खातों का विवरण"
      },
      "type": {
        "en": "Self-Reported",
        "hi": "खाता संख्या एवं आईएफएससी"
      },
      "description": {
        "en": "Required for interest income computation and refund credit.",
        "hi": "रिफंड प्राप्त करने के लिए पूर्व-मान्य (Pre-validated) बैंक खाता।"
      },
      "commonExamples": {
        "en": "Savings bank account statements",
        "hi": "बैंक पासबुक या चेक"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Login to Income Tax e-Filing Portal with PAN",
        "hi": "पैन का उपयोग करके आयकर ई-फाइलिंग पोर्टल पर लॉगिन करें"
      },
      "description": {
        "en": "Open https://www.incometax.gov.in. Log in using your 10-digit PAN as User ID and your portal password.",
        "hi": "https://www.incometax.gov.in पर जाएं और अपने पैन (User ID) और पासवर्ड से लॉगिन करें।"
      },
      "agencyOrPortal": {
        "en": "incometax.gov.in",
        "hi": "आयकर ई-फाइलिंग पोर्टल (incometax.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "2 - 3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Income Tax Act, 1961 (Section 139)",
        "hi": "सीबीडीटी ई-फाइलिंग दिशानिर्देश"
      },
      "sourceReference": {
        "en": "Section 139(1) of Income Tax Act, 1961",
        "hi": "Section 139(1) of Income Tax Act, 1961"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Review Annual Information Statement (AIS) & Form 26AS",
        "hi": "वार्षिक सूचना विवरण (AIS) और फॉर्म 26AS की समीक्षा करें"
      },
      "description": {
        "en": "Check pre-filled financial data in AIS and Form 26AS including salary TDS, interest income, dividend credits, and advance tax payments.",
        "hi": "'Services' > 'Annual Information Statement (AIS)' में जाएं और बैंक ब्याज, लाभांश और टीडीएस कटौतियों का मिलान करें।"
      },
      "agencyOrPortal": {
        "en": "e-Filing AIS Gateway",
        "hi": "एआईएस / 26AS अनुपालन पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "5 - 10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "CBDT Notification on AIS & Form 26AS",
        "hi": "आयकर नियम 114-I"
      },
      "sourceReference": {
        "en": "Rule 114-I of Income Tax Rules, 1962",
        "hi": "Rule 114-I of Income Tax Rules, 1962"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Select Applicable ITR Form & Claim Chapter VI-A Deductions",
        "hi": "लागू आईटीआर फॉर्म चुनें और कटौतियों का दावा करें"
      },
      "description": {
        "en": "Select Assessment Year and applicable form (e.g. ITR-1 Sahaj for salaried individuals under ₹50L, ITR-4 Sugam for presumptive business). Verify deductions under Section 80C, 80D, etc.",
        "hi": "वेतनभोगी के लिए ITR-1 या छोटे व्यवसाय के लिए ITR-4 चुनें। पुरानी/नई कर व्यवस्था चुनें और धारा 80C/80D छूट दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "ITD Pre-fill Engine",
        "hi": "ऑनलाइन आईटीआर फाइलिंग यूटिलिटी"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "15 - 20 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Income Tax Rules, 1962 (Rule 12)",
        "hi": "आयकर अधिनियम धारा 139(1)"
      },
      "sourceReference": {
        "en": "Rule 12 of Income Tax Rules, 1962",
        "hi": "Rule 12 of Income Tax Rules, 1962"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Compute Tax Liability / Refund & Submit Return",
        "hi": "कर देयता / रिफंड की गणना करें और रिटर्न सबमिट करें"
      },
      "description": {
        "en": "Review gross total income, calculate net tax liability or refund due under the chosen tax regime (Old vs New Tax Regime under Section 115BAC), and submit the return.",
        "hi": "कुल कर गणना की जांच करें। यदि कोई कर शेष है तो ई-पे टैक्स से भुगतान करें, अन्यथा रिफंड क्लेम के साथ फॉर्म सबमिट करें।"
      },
      "agencyOrPortal": {
        "en": "Central Processing Centre (CPC)",
        "hi": "सीपीसी कर गणना इंजन"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Section 143(1) of Income Tax Act, 1961",
        "hi": "आयकर नियम 12"
      },
      "sourceReference": {
        "en": "CPC Processing Guidelines",
        "hi": "CPC Processing Guidelines"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Mandatory e-Verification within 30 Days via Aadhaar OTP",
        "hi": "आधार ओटीपी के माध्यम से 30 दिनों के भीतर अनिवार्य ई-सत्यापन"
      },
      "description": {
        "en": "e-Verify your filed return within 30 days of submission using Aadhaar OTP, net banking, or electronic verification code (EVC). Unverified returns are legally deemed invalid.",
        "hi": "सबमिट करने के बाद आधार ओटीपी द्वारा तुरंत रिटर्न को ई-सत्यापित करें। सत्यापन के बिना रिटर्न अमान्य माना जाता है।"
      },
      "agencyOrPortal": {
        "en": "e-Verification Gateway",
        "hi": "आधार ई-वेरिफिकेशन गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "CBDT Notification No. 05/2022 on 30-Day e-Verification Window",
        "hi": "सीबीडीटी अधिसूचना 2/2022 (30-दिवसीय सत्यापन सीमा)"
      },
      "sourceReference": {
        "en": "Rule 12 of Income Tax Rules, 1962",
        "hi": "Rule 12 of Income Tax Rules, 1962"
      }
    }
  ],
  "warnings": [
    {
      "en": "e-Verification must be completed within 30 days of filing. Failure to e-verify invalidates the return.",
      "hi": "रिटर्न दाखिल करने के 30 दिनों के भीतर ई-सत्यापन (e-Verify) करना अनिवार्य है, अन्यथा रिटर्न को दाखिल नहीं माना जाएगा।"
    },
    {
      "en": "PAN and Aadhaar MUST be linked to ensure smooth processing of tax refunds.",
      "hi": "आय या बैंक खातों को छुपाना आयकर अधिनियम की धारा 270A के तहत भारी जुर्माना आकर्षित कर सकता है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। आयकर रिटर्न केवल आयकर विभाग के आधिकारिक पोर्टल पर दाखिल किया जाता है।"
  }
},
  "street-vendor-cart-registration": {
  "id": "street-vendor-cart-registration",
  "title": {
    "en": "Street Food Vendor Certificate & Food Cart Vending Card (PM SVANidhi)",
    "hi": "स्ट्रीट फूड वेंडर सर्टिफिकेट एवं फूड कार्ट वेंडिंग कार्ड (पीएम स्वनिधि)"
  },
  "category": {
    "en": "Local Civic & Street Vending",
    "hi": "स्थानीय नागरिक एवं पथ विक्रेता"
  },
  "shortDescription": {
    "en": "Apply for a municipal Certificate of Vending and Street Food Vendor ID card under the Street Vendors Act 2014 & PM SVANidhi scheme to legally operate a roadside food cart.",
    "hi": "पीएम स्वनिधि और स्थानीय नगर निगम (ULB) के तहत स्ट्रीट वेंडिंग सर्टिफिकेट (CoV), वेंडिंग आईडी कार्ड और ₹10,000 - ₹50,000 का संपार्श्विक-मुक्त कार्यशील पूंजी ऋण प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Under the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014 and PM SVANidhi scheme, Town Vending Committees (TVC) within municipal corporations issue official Certificates of Vending and ID cards to street food cart operators, tea stalls, and roadside vendors. This grants legal protection against arbitrary eviction in designated municipal vending zones and unlocks ₹10,000 to ₹50,000 collateral-free micro-credit working capital loans.",
    "hi": "स्ट्रीट वेंडर्स (आजीविका संरक्षण और स्ट्रीट वेंडिंग विनियमन) अधिनियम, 2014 के तहत कानूनी संरक्षण। नगर निगम की टाउन वेंडिंग कमेटी (TVC) द्वारा सर्वेक्षण के बाद वेंडिंग सर्टिफिकेट जारी किया जाता है जिससे अनधिकृत निष्कासन से सुरक्षा मिलती है।"
  },
  "authority": {
    "en": "Ministry of Housing and Urban Affairs (MoHUA) & Urban Local Bodies (Municipal Corporations)",
    "hi": "टाउन वेंडिंग कमेटी (TVC) एवं स्थानीय नगर निगम / शहरी स्थानीय निकाय (ULB)"
  },
  "department": {
    "en": "Ministry of Housing and Urban Affairs (MoHUA) & Urban Local Bodies (Municipal Corporations)",
    "hi": "आवासन एवं शहरी कार्य मंत्रालय (MoHUA) एवं स्थानीय नगर निगम"
  },
  "source": {
    "en": "Ministry of Housing and Urban Affairs, Government of India",
    "hi": "स्ट्रीट वेंडर्स (आजीविका संरक्षण एवं स्ट्रीट वेंडिंग विनियमन) अधिनियम, 2014"
  },
  "officialSource": {
    "en": "Ministry of Housing and Urban Affairs, Government of India",
    "hi": "आवासन एवं शहरी कार्य मंत्रालय (MoHUA), भारत सरकार"
  },
  "availability": {
    "en": "Jurisdictional Municipal Corporation / Urban Local Body",
    "hi": "स्थानीय नगर निगम क्षेत्राधिकार (अखिल भारतीय)"
  },
  "onlineAvailable": {
    "en": "Online Application + Physical Verification",
    "hi": "ऑनलाइन आवेदन + स्थानीय वार्ड भौतिक सर्वेक्षण"
  },
  "officialPortal": {
    "name": {
      "en": "PM SVANidhi Portal (Ministry of Housing and Urban Affairs)",
      "hi": "पीएम स्वनिधि / स्थानीय नगर निगम पोर्टल (PM SVANidhi Portal)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) on pmsvanidhi.mohua.gov.in | ₹100/year for basic FSSAI street vendor food registration",
      "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
    },
    "verificationSource": {
      "en": "PM SVANidhi Scheme Guidelines & Food Safety and Standards Authority of India (FSSAI)",
      "hi": "पीएम स्वनिधि योजना दिशानिर्देश एवं स्ट्रीट वेंडर्स अधिनियम 2014"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) on pmsvanidhi.mohua.gov.in | ₹100/year for basic FSSAI street vendor food registration",
    "hi": "निःशुल्क (₹0 सरकारी शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "10 - 25 Working Days (Upon Town Vending Committee verification)",
      "hi": "15 - 30 कार्य दिवस (वार्ड सर्वेक्षण एवं टीवीसी अनुमोदन)"
    },
    "statutoryAct": {
      "en": "Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014",
      "hi": "स्ट्रीट वेंडर्स अधिनियम, 2014 (2014 का अधिनियम संख्या 38)"
    }
  },
  "processingInfo": {
    "en": "10 - 25 Working Days (Upon Town Vending Committee verification)",
    "hi": "15 - 30 कार्य दिवस (वार्ड सर्वेक्षण एवं टीवीसी अनुमोदन)"
  },
  "eligibility": [
    {
      "en": "Any street vendor or roadside food cart operator engaged in vending in urban areas on or before statutory survey dates.",
      "hi": "शहरी क्षेत्रों में फेरी, ठेला, फूड कार्ट, या सड़क किनारे वेंडिंग करने वाला कोई भी स्ट्रीट वेंडर।"
    },
    {
      "en": "Must operate within designated municipal vending zones approved by the Town Vending Committee (TVC).",
      "hi": "शहरी स्थानीय निकाय (ULB) सर्वेक्षण में पहचाना गया हो या टीवीसी से सिफारिश पत्र (LoR) प्राप्त हो।"
    },
    {
      "en": "Must have valid Aadhaar card linked with active mobile number.",
      "hi": "Must have valid Aadhaar card linked with active mobile number."
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Aadhaar Card of the Vendor",
        "hi": "विक्रेता का आधार कार्ड"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी"
      },
      "description": {
        "en": "Primary identity and address verification.",
        "hi": "पहचान और पते की पुष्टि हेतु।"
      },
      "commonExamples": {
        "en": "Aadhaar Card with active mobile link",
        "hi": "आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Letter of Recommendation (LoR) or Municipal Survey ID",
        "hi": "सिफारिश पत्र (LoR) या सर्वेक्षण पहचान पत्र"
      },
      "type": {
        "en": "Official Recommendation / Survey Slip",
        "hi": "ULB / TVC आधिकारिक दस्तावेज़"
      },
      "description": {
        "en": "Proof of vending issued by Urban Local Body / Town Vending Committee.",
        "hi": "टाउन वेंडिंग कमेटी द्वारा जारी सर्वेक्षण संख्या या सिफारिश पत्र।"
      },
      "commonExamples": {
        "en": "Town Vending Committee survey slip or ULB Letter of Recommendation (LoR)",
        "hi": "नगर निगम सर्वेक्षण पर्ची या टीवीसी सिफारिश पत्र"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Vending Stall / Cart Photo",
        "hi": "वेंडिंग स्टॉल / ठेले की फोटो"
      },
      "type": {
        "en": "Digital Upload",
        "hi": "रंगीन फोटोग्राफ"
      },
      "description": {
        "en": "Photograph of vendor at their roadside cart or stationary vending pitch.",
        "hi": "वेंडिंग स्थल पर ठेले/स्टाल के साथ विक्रेता की स्पष्ट फोटो।"
      },
      "commonExamples": {
        "en": "Recent color photo at food cart / thela",
        "hi": "ठेले के सामने खड़े होकर खींची गई फोटो"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Bank Account Details",
        "hi": "बैंक खाता पासबुक"
      },
      "type": {
        "en": "Self-Reported",
        "hi": "प्रतिलिपि"
      },
      "description": {
        "en": "Active bank passbook or cancelled cheque for direct subsidy transfer.",
        "hi": "डीबीटी कैशबैक और स्वनिधि ऋण प्राप्त करने हेतु सक्रिय बचत खाता।"
      },
      "commonExamples": {
        "en": "Savings bank account passbook",
        "hi": "बैंक पासबुक का प्रथम पृष्ठ"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Check TVC Survey Status or Apply for Letter of Recommendation (LoR)",
        "hi": "टीवीसी सर्वेक्षण स्थिति जांचें या सिफारिश पत्र (LoR) हेतु आवेदन करें"
      },
      "description": {
        "en": "Visit your local ward municipal office or access https://pmsvanidhi.mohua.gov.in. If you were not covered in the municipal vendor survey, apply online for an official Letter of Recommendation (LoR).",
        "hi": "pmsvanidhi.mohua.gov.in पर जांचें कि क्या आपका नाम नगर निगम सर्वेक्षण में है। यदि नहीं है, तो सिफारिश पत्र (LoR) के लिए आवेदन करें।"
      },
      "agencyOrPortal": {
        "en": "pmsvanidhi.mohua.gov.in & Ward Municipal Office",
        "hi": "पीएम स्वनिधि पोर्टल (pmsvanidhi.mohua.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes online",
        "hi": "5 मिनट"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014",
        "hi": "स्ट्रीट वेंडर्स अधिनियम 2014 धारा 3"
      },
      "sourceReference": {
        "en": "Section 3 & Section 4 of Street Vendors Act, 2014",
        "hi": "Section 3 & Section 4 of Street Vendors Act, 2014"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Complete Aadhaar e-KYC Verification on PM SVANidhi",
        "hi": "पीएम स्वनिधि पोर्टल पर आधार ई-केवाईसी सत्यापन पूरा करें"
      },
      "description": {
        "en": "Enter your 12-digit Aadhaar number on the PM SVANidhi portal and authenticate via mobile OTP to establish verified vendor identity.",
        "hi": "अपना मोबाइल नंबर दर्ज करें और आधार ओटीपी द्वारा ई-केवाईसी पूरा करके डिजिटल वेंडर प्रोफाइल बनाएं।"
      },
      "agencyOrPortal": {
        "en": "UIDAI / MoHUA API Gateway",
        "hi": "पीएम स्वनिधि आधार गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "MoHUA PM SVANidhi Scheme Operational Guidelines",
        "hi": "आधार ई-केवाईसी मानक"
      },
      "sourceReference": {
        "en": "PM SVANidhi Scheme Document 2020",
        "hi": "PM SVANidhi Scheme Document 2020"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Submit Vending Location Details & Cart Classification",
        "hi": "वेंडिंग स्थान का विवरण और कार्ट वर्गीकरण दर्ज करें"
      },
      "description": {
        "en": "Select nature of vending (e.g. Fast food cart, tea stall, snack stall, fruits/vegetables) and specify your designated municipal ward/vending zone.",
        "hi": "स्थानीय वार्ड, वेंडिंग का प्रकार (स्थिर/घूमने वाला), बेची जाने वाली वस्तुएं (स्ट्रीट फूड, चाय, फल आदि) और समय भरें।"
      },
      "agencyOrPortal": {
        "en": "Urban Local Body Portal",
        "hi": "ऑनलाइन वेंडर आवेदन"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Town Vending Committee By-Laws",
        "hi": "टीवीसी वेंडिंग ज़ोन दिशानिर्देश"
      },
      "sourceReference": {
        "en": "Municipal Corporation Vending By-Laws",
        "hi": "Municipal Corporation Vending By-Laws"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Ward Committee Verification & Issuance of Certificate of Vending",
        "hi": "वार्ड समिति द्वारा फील्ड सत्यापन एवं वेंडिंग प्रमाणपत्र (CoV) जारी करना"
      },
      "description": {
        "en": "The Town Vending Committee (TVC) verifies the vending pitch. Download your official Certificate of Vending and Street Vendor ID Card.",
        "hi": "स्थानीय नगर निगम निरीक्षक आपके वेंडिंग स्थल का भौतिक सत्यापन करेंगे और टीवीसी द्वारा वेंडिंग प्रमाणपत्र व आईडी कार्ड जारी होगा।"
      },
      "agencyOrPortal": {
        "en": "Town Vending Committee (TVC)",
        "hi": "स्थानीय नगर निगम वार्ड कार्यालय"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 - 20 Working Days",
        "hi": "10 - 15 कार्य दिवस"
      },
      "mode": "hybrid",
      "officialSource": {
        "en": "Street Vendors Act, 2014 (Section 6)",
        "hi": "स्ट्रीट वेंडर्स अधिनियम धारा 4"
      },
      "sourceReference": {
        "en": "Section 6 of Street Vendors Act, 2014",
        "hi": "Section 6 of Street Vendors Act, 2014"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Obtain Basic FSSAI Street Food Registration (FOSCOS)",
        "hi": "मूल एफएसएसएआई (FSSAI) स्ट्रीट फूड पंजीकरण प्राप्त करें (FOSCOS)"
      },
      "description": {
        "en": "Food cart operators must apply for mandatory basic FSSAI registration (₹100/year on foscos.fssai.gov.in) to comply with food safety and hygiene regulations.",
        "hi": "खाद्य सुरक्षा नियमों का पालन करने के लिए foscos.fssai.gov.in पर ₹100 वार्षिक शुल्क पर बेसिक एफएसएसएआई पंजीकरण प्राप्त करें।"
      },
      "agencyOrPortal": {
        "en": "FOSCOS Portal (foscos.fssai.gov.in)",
        "hi": "FSSAI FoSCoS पोर्टल (foscos.fssai.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 - 7 Working Days",
        "hi": "3 - 5 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Food Safety and Standards Act, 2006",
        "hi": "खाद्य सुरक्षा और मानक अधिनियम, 2006"
      },
      "sourceReference": {
        "en": "Section 31 of FSS Act, 2006",
        "hi": "Section 31 of FSS Act, 2006"
      },
      "officialTip": {
        "en": "Enrolling for digital QR payment cashback unlocks ₹1,200 annual cash incentives under PM SVANidhi.",
        "hi": "Enrolling for digital QR payment cashback unlocks ₹1,200 annual cash incentives under PM SVANidhi."
      }
    }
  ],
  "warnings": [
    {
      "en": "Never pay middleman fees or bribes for street vendor survey registration. The government application is completely free.",
      "hi": "सर्टिफिकेट ऑफ वेंडिंग (CoV) रखने वाले किसी भी स्ट्रीट वेंडर को कानूनन बिना वैकल्पिक स्थान दिए हटाया या बेदखल नहीं किया जा सकता।"
    },
    {
      "en": "Roadside food carts must maintain a covered waste bin and clean drinking water to comply with municipal sanitation norms.",
      "hi": "पीएम स्वनिधि योजना के तहत समय पर ऋण चुकाने पर 7% ब्याज सब्सिडी और ₹1,200 वार्षिक डिजिटल कैशबैक मिलता है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। वेंडिंग प्रमाणपत्र स्थानीय नगर निगम द्वारा जारी किया जाता है।"
  }
},
  "caste-certificate": {
  "id": "caste-certificate",
  "title": {
    "en": "Caste Certificate & Caste Validity (Aaple Sarkar / e-District)",
    "hi": "जाति प्रमाण पत्र एवं जाति वैधता (आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "category": {
    "en": "Certificates & Social Welfare",
    "hi": "प्रमाण पत्र एवं राजस्व अभिलेख"
  },
  "shortDescription": {
    "en": "Apply for an official statutory Caste Certificate and Caste Validity Certificate required for reservation benefits in education, competitive exams, and government recruitments.",
    "hi": "शैक्षणिक प्रवेश, सरकारी नौकरियों और संवैधानिक आरक्षण लाभों के लिए उप-विभागीय अधिकारी (SDO) से आधिकारिक जाति प्रमाण पत्र और जाति वैधता प्रमाणपत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "A Caste Certificate is an essential statutory document issued by the Sub-Divisional Officer (SDO) / Sub-Divisional Magistrate (SDM) proving that an individual belongs to a notified Scheduled Caste (SC), Scheduled Tribe (ST), Other Backward Class (OBC), or Vimukta Jati / Nomadic Tribe (VJNT) category. In Maharashtra, educational admissions and public recruitment additionally require a Caste Scrutiny / Validity Certificate issued by the Divisional Caste Scrutiny Committee.",
    "hi": "राज्य सरकार के राजस्व विभाग द्वारा जारी किया जाने वाला एक वैधानिक प्रमाण पत्र जो किसी नागरिक की विशिष्ट सामाजिक श्रेणी (SC, ST, VJ/NT, OBC, SBC, EWS) को प्रमाणित करता है। महाराष्ट्र में इसे आपले सरकार और CCVIS पोर्टल द्वारा प्रबंधित किया जाता है।"
  },
  "authority": {
    "en": "Social Justice & Special Assistance Department / Revenue Department",
    "hi": "उप-विभागीय अधिकारी (SDO / उप-कलेक्टर), राजस्व विभाग"
  },
  "department": {
    "en": "Social Justice & Special Assistance Department / Revenue Department",
    "hi": "राजस्व एवं सामाजिक न्याय विभाग, राज्य सरकार (महाराष्ट्र आपले सरकार)"
  },
  "source": {
    "en": "Revenue Department & Social Justice Department, Government of Maharashtra",
    "hi": "महाराष्ट्र अनुसूचित जाति, अनुसूचित जनजाति, विमुक्त जाति, गैर-अधिसूचित जनजाति, अन्य पिछड़ा वर्ग और विशेष पिछड़ा वर्ग (जाति प्रमाण पत्र जारी करने और सत्यापन का विनियमन) अधिनियम, 2000"
  },
  "officialSource": {
    "en": "Revenue Department & Social Justice Department, Government of Maharashtra",
    "hi": "सामाजिक न्याय विभाग, महाराष्ट्र सरकार"
  },
  "availability": {
    "en": "State Specific (maharashtra, delhi, karnataka, gujarat, uttar-pradesh, rajasthan, tamil-nadu, telangana, west-bengal, madhya-pradesh)",
    "hi": "राज्य क्षेत्राधिकार (महाराष्ट्र एवं संबंधित राज्य)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "officialPortal": {
    "name": {
      "en": "Aaple Sarkar (Government of Maharashtra)",
      "hi": "आपले सरकार / ई-डिस्ट्रिक्ट पोर्टल (Aaple Sarkar / e-District)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹33.60 to ₹50 (Statutory State Portal Service Fee)",
      "hi": "जाति प्रमाण पत्र: ₹33.60 | जाति वैधता स्क्रूटनी: ₹100 - ₹200"
    },
    "verificationSource": {
      "en": "Maharashtra Right to Public Services Act Notification",
      "hi": "महाराष्ट्र लोक सेवा गारंटी नियम एवं सामाजिक न्याय विभाग GR"
    }
  },
  "feeInfo": {
    "en": "₹33.60 to ₹50 (Statutory State Portal Service Fee)",
    "hi": "जाति प्रमाण पत्र: ₹33.60 | जाति वैधता स्क्रूटनी: ₹100 - ₹200"
  },
  "processingTime": {
    "timeText": {
      "en": "21 - 45 Working Days (As per State Public Service Guarantee Act)",
      "hi": "जाति प्रमाण पत्र: 21 - 45 कार्य दिवस | जाति वैधता: 45 - 90 दिन"
    },
    "statutoryAct": {
      "en": "Maharashtra Right to Public Services Act, 2015 & Caste Certificate Rules",
      "hi": "महाराष्ट्र अधिनियम सं. XXIII 2001 (जाति विनियमन अधिनियम 2000)"
    }
  },
  "processingInfo": {
    "en": "21 - 45 Working Days (As per State Public Service Guarantee Act)",
    "hi": "जाति प्रमाण पत्र: 21 - 45 कार्य दिवस | जाति वैधता: 45 - 90 दिन"
  },
  "eligibility": [
    {
      "en": "Must belong to a community formally notified as SC, ST, OBC, or VJNT in the Presidential Order or State Gazette.",
      "hi": "संबंधित राज्य का मूल निवासी।"
    },
    {
      "en": "Must have ancestral documentary evidence proving residence in the state prior to the cutoff year (e.g. 1950 for SC/ST, 1961 for VJNT, 1967 for OBC in Maharashtra).",
      "hi": "निर्धारित कट-ऑफ वर्ष से पूर्व के पैतृक दस्तावेज़ उपलब्ध होना अनिवार्य (SC: 1950, VJ/NT: 1961, OBC: 1967)।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Identity",
        "hi": "पहचान का प्रमाण (PoI)"
      },
      "type": {
        "en": "Aadhaar e-KYC / Original",
        "hi": "स्व-सत्यापित प्रति / आधार"
      },
      "description": {
        "en": "Applicant's government-issued photo identity proof.",
        "hi": "आवेदक का सरकारी पहचान पत्र।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Voter ID, or School Leaving Certificate",
        "hi": "आधार कार्ड, मतदाता पहचान पत्र, या पैन कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Father / Grandfather School Leaving Certificate (Caste Mentioned)",
        "hi": "पिता / दादा का स्कूल लीविंग सर्टिफिकेट (जाति अंकित)"
      },
      "type": {
        "en": "Original / Certified Copy",
        "hi": "मूल अभिलेख की प्रमाणित प्रति"
      },
      "description": {
        "en": "Pre-cutoff historical educational record indicating exact caste entry.",
        "hi": "कट-ऑफ वर्ष से पहले का प्राथमिक पैतृक साक्ष्य जिसमें जाति स्पष्ट रूप से दर्ज हो।"
      },
      "commonExamples": {
        "en": "Father's primary school leaving certificate or village birth register extract",
        "hi": "पिता या दादा का प्राथमिक शाला प्रवेश रजिस्टर या टीसी"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Residence prior to Cutoff Year",
        "hi": "कट-ऑफ वर्ष से पूर्व का निवास प्रमाण"
      },
      "type": {
        "en": "Ancestral Record",
        "hi": "राजस्व अभिलेख / भूमि अभिलेख"
      },
      "description": {
        "en": "Documentary evidence establishing ancestral residence in the state.",
        "hi": "राज्य में कट-ऑफ वर्ष से पूर्व से निरंतर निवास का प्रमाण।"
      },
      "commonExamples": {
        "en": "Old 7/12 land extract, electoral roll extract prior to cutoff year, or ancestral revenue record",
        "hi": "पुराना 7/12 उतारा, जन्म/मृत्यु रजिस्टर उद्धरण, या 1950/1967 का मतदाता सूची उद्धरण"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Affidavit in Prescribed Form (Form 2 / Form 3)",
        "hi": "निर्धारित प्रारूप में हलफनामा (Form 2 / Form 3)"
      },
      "type": {
        "en": "Notarized Affidavit",
        "hi": "नोटरीकृत हलफनामा"
      },
      "description": {
        "en": "Sworn legal declaration tracing family genealogy and declaring caste heritage.",
        "hi": "पारिवारिक वंशावली (Genealogy Tree) को प्रमाणित करने वाला वैधानिक हलफनामा।"
      },
      "commonExamples": {
        "en": "Notarized genealogical tree (Vamshavali) affidavit",
        "hi": "नोटरीकृत वंशावली हलफनामा"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Login to State e-District / Aaple Sarkar Portal",
        "hi": "राज्य ई-डिस्ट्रिक्ट या आपले सरकार पोर्टल पर लॉगिन करें"
      },
      "description": {
        "en": "Open https://aaplesarkar.mahaonline.gov.in or respective state e-District portal and log in with your citizen credentials.",
        "hi": "https://aaplesarkar.mahaonline.gov.in पर लॉगिन करें और राजस्व विभाग सेवाओं में जाएं।"
      },
      "agencyOrPortal": {
        "en": "aaplesarkar.mahaonline.gov.in",
        "hi": "आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Caste Certificate Rules & RTS Act",
        "hi": "महाराष्ट्र आरटीएस नियम 2015"
      },
      "sourceReference": {
        "en": "Maharashtra Caste Certificate Rules, 2012",
        "hi": "Maharashtra Caste Certificate Rules, 2012"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Select 'Revenue Department' > 'Caste Certificate'",
        "hi": "'Revenue Department' > 'Caste Certificate' चुनें"
      },
      "description": {
        "en": "Choose the appropriate category (SC, ST, OBC, SBC, VJNT) and select your designated Sub-Divisional Office (SDO).",
        "hi": "लागू श्रेणी (SC, ST, OBC, VJNT, EWS) का चयन करें और ऑनलाइन आवेदन पत्र खोलें।"
      },
      "agencyOrPortal": {
        "en": "Revenue Administration Module",
        "hi": "जाति प्रमाण पत्र ऑनलाइन गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Social Justice and Special Assistance Department",
        "hi": "जाति विनियमन नियम 2012"
      },
      "sourceReference": {
        "en": "Government Resolution No. CBC-10/2006/CR-48/BCW-5",
        "hi": "Government Resolution No. CBC-10/2006/CR-48/BCW-5"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Upload Pre-Cutoff Ancestral Proofs",
        "hi": "कट-ऑफ वर्ष से पूर्व के पैतृक साक्ष्य और दस्तावेज़ अपलोड करें"
      },
      "description": {
        "en": "Upload clear scans of father's/grandfather's primary school leaving certificate, old land 7/12 extracts, or pre-cutoff revenue records showing explicit caste entry.",
        "hi": "पिता/दादा का स्कूल लीविंग सर्टिफिकेट, पुराना राजस्व रिकॉर्ड और पहचान पत्र स्पष्ट पीडीएफ प्रारूप में अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar Document Engine",
        "hi": "दस्तावेज़ अपलोड मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Act No. XXIII of 2001",
        "hi": "दस्तावेजी साक्ष्य नियम"
      },
      "sourceReference": {
        "en": "Section 3 of Maharashtra Caste Verification Act, 2000",
        "hi": "Section 3 of Maharashtra Caste Verification Act, 2000"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Submit Notarized Family Tree (Vamshavali) & Self-Declaration",
        "hi": "नोटरीकृत पारिवारिक वंशावली (Vamshavali) और स्व-घोषणा जमा करें"
      },
      "description": {
        "en": "Attach the notarized genealogical family tree affidavit tracing your relationship to the paternal ancestor whose pre-cutoff caste record is submitted.",
        "hi": "परदादा, दादा, पिता से लेकर आवेदक तक का विस्तृत पारिवारिक वंश-वृक्ष अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Document Upload Module",
        "hi": "वंशावली सत्यापन मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Form 2 & Form 3 of Caste Certificate Rules",
        "hi": "वंशावली हलफनामा प्रारूप"
      },
      "sourceReference": {
        "en": "Caste Rules Form 2 / Form 3",
        "hi": "Caste Rules Form 2 / Form 3"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Pay Statutory Fee & Track SDO Scrutiny",
        "hi": "वैधानिक सरकारी शुल्क का भुगतान करें और एसडीओ स्क्रूटनी ट्रैक करें"
      },
      "description": {
        "en": "Pay the official fee (₹33.60 to ₹50). The Sub-Divisional Officer (SDO) or Executive Magistrate scrutinizes historical records.",
        "hi": "₹33.60 का ऑनलाइन भुगतान करें। उप-विभागीय अधिकारी (SDO) अभिलेखों और तलाठी रिपोर्ट की जांच करेंगे।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar Payment Gateway",
        "hi": "एसडीओ / उप-कलेक्टर कार्यालय"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "21 - 45 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Right to Public Services Act Notification",
        "hi": "महाराष्ट्र लोक सेवा गारंटी"
      },
      "sourceReference": {
        "en": "Statutory Portal Fee Schedule",
        "hi": "Statutory Portal Fee Schedule"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "Download Digitally Signed Certificate & Apply for Caste Validity",
        "hi": "डिजिटल हस्ताक्षरित जाति प्रमाणपत्र डाउनलोड करें और जाति वैधता हेतु आवेदन करें"
      },
      "description": {
        "en": "Upon SDO approval, download your digital barcoded caste certificate. For college admissions or public employment, submit this certificate to the Caste Scrutiny Committee for Caste Validity.",
        "hi": "एसडीओ द्वारा जारी डिजिटल प्रमाण पत्र डाउनलोड करें। उच्च शिक्षा या सरकारी नौकरी के लिए जिला जाति जांच समिति (CCVIS) में वैधता हेतु आवेदन करें।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar Delivery Gateway & CCVIS",
        "hi": "आपले सरकार / CCVIS पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "21 - 45 Working Days",
        "hi": "तुरंत डाउनलोड"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Right to Public Services Act, 2015",
        "hi": "जाति वैधता समिति विनियमन"
      },
      "sourceReference": {
        "en": "Section 4 of RTS Act, 2015",
        "hi": "Section 4 of RTS Act, 2015"
      },
      "officialTip": {
        "en": "For college admissions in Maharashtra, submit this certificate to CCVIS (barti.maharashtra.gov.in) to obtain the mandatory Caste Validity Certificate.",
        "hi": "For college admissions in Maharashtra, submit this certificate to CCVIS (barti.maharashtra.gov.in) to obtain the mandatory Caste Validity Certificate."
      }
    }
  ],
  "warnings": [
    {
      "en": "Ancestral school leaving certificates with explicit caste entries are the most critical evidence; applications lacking historical cutoff proof will be returned with queries.",
      "hi": "जाति प्रमाण पत्र प्राप्त करने के लिए फर्जी वंशावली या जाली दस्तावेज़ जमा करना कानूनन गंभीर संज्ञेय अपराध है जिसमें जेल और भारी जुर्माना हो सकता है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। जाति प्रमाण पत्र केवल सक्षम उप-विभागीय अधिकारी (SDO) द्वारा जारी किया जाता है।"
  }
},
  "domicile-residence-certificate": {
  "id": "domicile-residence-certificate",
  "title": {
    "en": "Domicile & Residence Certificate (Aaple Sarkar / e-District)",
    "hi": "अधिवास एवं निवास प्रमाण पत्र (आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "category": {
    "en": "Certificates & Revenue",
    "hi": "प्रमाण पत्र एवं राजस्व अभिलेख"
  },
  "shortDescription": {
    "en": "Apply for an official statutory Domicile Certificate proving 15 years permanent residence in the state, mandatory for state quota admissions in engineering, medical colleges, and state jobs.",
    "hi": "राज्य कोटे की सीटों, राज्य सरकारी नौकरियों और स्थानीय कल्याणकारी योजनाओं के लिए तहसीलदार से आधिकारिक अधिवास (डोमिसाइल) प्रमाण पत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "A Domicile Certificate is official legal evidence certifying that an individual has had permanent residence in a specific state for at least 15 continuous years (or by birth). In Maharashtra, it is legally mandatory for claiming 85% state quota seats in engineering (MHT-CET), medical (NEET-UG), pharmacy, polytechnic, and Maharashtra Public Service Commission (MPSC) exams.",
    "hi": "राज्य सरकार के राजस्व विभाग द्वारा जारी किया जाने वाला एक वैधानिक प्रमाण पत्र जो प्रमाणित करता है कि कोई व्यक्ति संबंधित राज्य में पिछले 15 वर्षों से लगातार रह रहा है और उसका वहां स्थायी अधिवास है।"
  },
  "authority": {
    "en": "Revenue & District Administration Department, Government of Maharashtra",
    "hi": "तहसीलदार / कार्यपालक मजिस्ट्रेट, राजस्व विभाग"
  },
  "department": {
    "en": "Revenue & District Administration Department, Government of Maharashtra",
    "hi": "राजस्व विभाग, संबंधित राज्य सरकार (महाराष्ट्र आपले सरकार)"
  },
  "source": {
    "en": "Revenue Department, Government of Maharashtra",
    "hi": "महाराष्ट्र लोक सेवा गारंटी अधिनियम, 2015 एवं राज्य अधिवास नियम"
  },
  "officialSource": {
    "en": "Revenue Department, Government of Maharashtra",
    "hi": "राजस्व विभाग, महाराष्ट्र सरकार (Aaple Sarkar)"
  },
  "availability": {
    "en": "State Specific (maharashtra, delhi, karnataka, gujarat, uttar-pradesh, rajasthan, tamil-nadu, telangana, west-bengal, madhya-pradesh)",
    "hi": "राज्य क्षेत्राधिकार (महाराष्ट्र एवं संबंधित राज्य)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आपले सरकार / ई-डिस्ट्रिक्ट)"
  },
  "officialPortal": {
    "name": {
      "en": "Aaple Sarkar (Government of Maharashtra)",
      "hi": "आपले सरकार / ई-डिस्ट्रिक्ट पोर्टल (Aaple Sarkar / e-District)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹33.60 to ₹50 (Statutory Portal Service Charge)",
      "hi": "₹33.60 (सेवा का अधिकार वैधानिक शुल्क + जीएसटी)"
    },
    "verificationSource": {
      "en": "Maharashtra Right to Public Services Act (RTS)",
      "hi": "महाराष्ट्र लोक सेवा हक्क अधिनियम नियम एवं दर तालिका"
    }
  },
  "feeInfo": {
    "en": "₹33.60 to ₹50 (Statutory Portal Service Charge)",
    "hi": "₹33.60 (सेवा का अधिकार वैधानिक शुल्क + जीएसटी)"
  },
  "processingTime": {
    "timeText": {
      "en": "15 Working Days (Right to Services Guarantee)",
      "hi": "7 - 15 कार्य दिवस (सेवा का अधिकार कानूनन गारंटी)"
    },
    "statutoryAct": {
      "en": "Maharashtra Right to Public Services Act, 2015",
      "hi": "महाराष्ट्र लोक सेवा गारंटी अधिनियम, 2015"
    }
  },
  "processingInfo": {
    "en": "15 Working Days (Right to Services Guarantee)",
    "hi": "7 - 15 कार्य दिवस (सेवा का अधिकार कानूनन गारंटी)"
  },
  "eligibility": [
    {
      "en": "Must have resided continuously in the state for at least 15 consecutive years, OR be born in the state to parents holding domicile.",
      "hi": "संबंधित राज्य में कम से कम 15 वर्षों से निरंतर निवास कर रहा भारतीय नागरिक।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Identity",
        "hi": "पहचान का प्रमाण (PoI)"
      },
      "type": {
        "en": "Aadhaar e-KYC / Original",
        "hi": "स्व-सत्यापित प्रति / आधार"
      },
      "description": {
        "en": "Official photo identity proof.",
        "hi": "आवेदक का सरकारी पहचान पत्र।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Voter ID, or Passport",
        "hi": "आधार कार्ड, मतदाता पहचान पत्र, या पासपोर्ट"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of 15 Years Continuous Residence",
        "hi": "15 वर्षों के निरंतर निवास का संचयी प्रमाण"
      },
      "type": {
        "en": "Cumulative Documentation",
        "hi": "ऐतिहासिक दस्तावेज़ श्रृंखला"
      },
      "description": {
        "en": "Series of documents establishing 15 years presence in the state.",
        "hi": "राज्य में 15 वर्षों के निरंतर निवास को प्रमाणित करने वाली दस्तावेज़ श्रृंखला।"
      },
      "commonExamples": {
        "en": "Continuous School Leaving Certificates (1st to 12th standard), Ration card, Electricity bills across 15 years, or Parents' Service Record",
        "hi": "पहली से बारहवीं तक के स्कूल प्रमाण पत्र, 15 वर्ष पुराने बिजली बिल, या भूमि 7/12 उतारा"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Self-Declaration of Domicile",
        "hi": "अधिवास की स्व-घोषणा (Self-Declaration)"
      },
      "type": {
        "en": "Affidavit Format",
        "hi": "हस्ताक्षरित प्रपत्र"
      },
      "description": {
        "en": "Standard self-declaration affirming applicant does not hold domicile in any other state.",
        "hi": "आधिकारिक घोषणा कि आवेदक का किसी अन्य राज्य में अधिवास नहीं है।"
      },
      "commonExamples": {
        "en": "Pre-formatted self-declaration available on Aaple Sarkar",
        "hi": "आपले सरकार से डाउनलोड किया गया हस्ताक्षरित प्रपत्र"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Log into State e-District / Aaple Sarkar Portal",
        "hi": "राज्य ई-डिस्ट्रिक्ट या आपले सरकार पोर्टल पर लॉगिन करें"
      },
      "description": {
        "en": "Open https://aaplesarkar.mahaonline.gov.in. Navigate to Revenue Department services and select 'Age, Nationality & Domicile Certificate'.",
        "hi": "https://aaplesarkar.mahaonline.gov.in पर जाएं और नागरिक प्रोफाइल से लॉगिन करें।"
      },
      "agencyOrPortal": {
        "en": "aaplesarkar.mahaonline.gov.in",
        "hi": "आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Right to Public Services Act, 2015",
        "hi": "महाराष्ट्र आरटीएस नियम 2015"
      },
      "sourceReference": {
        "en": "Section 4 of Maharashtra RTS Act, 2015",
        "hi": "Section 4 of Maharashtra RTS Act, 2015"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Enter 15-Year Historical Residence Details",
        "hi": "15 वर्षों के ऐतिहासिक निवास का विवरण दर्ज करें"
      },
      "description": {
        "en": "Fill applicant biographical details, list of schools/colleges attended from primary onwards, and historical addresses for the preceding 15 continuous years.",
        "hi": "राजस्व विभाग में 'Age, Nationality and Domicile Certificate' चुनें और पिछले 15 वर्षों के पते का विवरण भरें।"
      },
      "agencyOrPortal": {
        "en": "Revenue Administration Module",
        "hi": "अधिवास ऑनलाइन आवेदन"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "12 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Revenue and Forests Department Guidelines",
        "hi": "अधिवास नियम 2012"
      },
      "sourceReference": {
        "en": "Government Resolution No. RTS-2015/CR-23/M-1",
        "hi": "Government Resolution No. RTS-2015/CR-23/M-1"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Upload Cumulative 15-Year Residence Evidence",
        "hi": "15-वर्षीय निरंतर निवास के साक्ष्य अपलोड करें"
      },
      "description": {
        "en": "Upload school bonafide certificates from primary school onwards, continuous residential electricity bills, or registered lease deeds establishing 15 years presence.",
        "hi": "स्कूल लीविंग सर्टिफिकेट, राशन कार्ड, बिजली बिल, या संपत्ति कर रसीदें अपलोड करें जो 15 वर्ष की अवधि को कवर करती हों।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar Document Engine",
        "hi": "दस्तावेज़ अपलोड रिपोजिटरी"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Domicile Verification Rules",
        "hi": "राजस्व साक्ष्य मानक"
      },
      "sourceReference": {
        "en": "Maharashtra Domicile Rules & Circular 2018",
        "hi": "Maharashtra Domicile Rules & Circular 2018"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Pay Nominal Statutory Portal Fee",
        "hi": "नाममात्र वैधानिक पोर्टल शुल्क का भुगतान करें"
      },
      "description": {
        "en": "Pay the statutory portal fee (₹33.60 to ₹50) via UPI or net banking and save the payment transaction receipt.",
        "hi": "₹33.60 का ऑनलाइन भुगतान करें और आवेदन संदर्भ संख्या वाली पावती रसीद डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "State Treasury Gateway",
        "hi": "महाऑनलाइन पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Statutory Portal Fee Notification",
        "hi": "महाराष्ट्र शासन निर्णय (GR)"
      },
      "sourceReference": {
        "en": "Maharashtra RTS Fee Schedule",
        "hi": "Maharashtra RTS Fee Schedule"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Tehsildar Inquiry & Download Digitally Signed Certificate",
        "hi": "तहसीलदार स्तर पर जांच एवं डिजिटल हस्ताक्षरित प्रमाणपत्र डाउनलोड करें"
      },
      "description": {
        "en": "The Tehsildar reviews the 15-year cumulative documentary evidence. Upon approval, download the certificate with digital signature, barcode seal, and QR code.",
        "hi": "तहसीलदार कार्यालय द्वारा अभिलेखों की जांच के बाद डिजिटल रूप से हस्ताक्षरित अधिवास प्रमाण पत्र डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Office of the Tehsildar & Aaple Sarkar",
        "hi": "आपले सरकार डाउनलोड विंडो / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Working Days",
        "hi": "7 - 15 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Maharashtra Right to Public Services Act, 2015",
        "hi": "आईटी अधिनियम 2000 डिजिटल प्रमाणन"
      },
      "sourceReference": {
        "en": "RTS Guaranteed Service Schedule",
        "hi": "RTS Guaranteed Service Schedule"
      },
      "officialTip": {
        "en": "Under Maharashtra RTS Act, Domicile Certificate delivery is guaranteed within 15 working days.",
        "hi": "Under Maharashtra RTS Act, Domicile Certificate delivery is guaranteed within 15 working days."
      }
    }
  ],
  "warnings": [
    {
      "en": "A citizen can legally hold a Domicile Certificate of only ONE Indian state at any given time.",
      "hi": "एक व्यक्ति एक समय में भारत के केवल एक ही राज्य का अधिवास (डोमिसाइल) प्रमाण पत्र रख सकता है। दो राज्यों का डोमिसाइल रखना कानूनन अपराध है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। अधिवास प्रमाण पत्र संबंधित तहसीलदार द्वारा जारी किया जाता है।"
  }
},
  "pan-card-application": {
  "id": "pan-card-application",
  "title": {
    "en": "Apply for New PAN Card (Instant e-PAN / Form 49A)",
    "hi": "नया पैन कार्ड आवेदन (तत्काल ई-पैन / फॉर्म 49A)"
  },
  "category": {
    "en": "Tax & Financial Identity",
    "hi": "कर एवं व्यापार"
  },
  "shortDescription": {
    "en": "Get a 10-digit Permanent Account Number (PAN) in 10 minutes free via Instant e-PAN using Aadhaar, or order a physical plastic PAN card via NSDL/Protean.",
    "hi": "आयकर विभाग के ई-फाइलिंग पोर्टल पर आधार ई-केवाईसी द्वारा 10 मिनट में 100% निःशुल्क डिजिटल ई-पैन (e-PAN) प्राप्त करें।"
  },
  "fullOverview": {
    "en": "A Permanent Account Number (PAN) is a mandatory 10-digit alphanumeric identifier issued by the Income Tax Department for banking, salary, tax compliance, and business activities. Eligible citizens with an Aadhaar card and linked mobile number can generate an Instant digital e-PAN completely free within 10 minutes on the Income Tax e-Filing portal, or apply on NSDL/UTIITSL for a laminated physical card delivered by post.",
    "hi": "आयकर अधिनियम, 1961 के तहत स्थायी खाता संख्या (PAN) वित्तीय लेनदेन, बैंक खाता खोलने और आईटीआर दाखिल करने के लिए अनिवार्य 10-अंकीय अल्फान्यूमेरिक पहचानकर्ता है। यदि आधार से मोबाइल लिंक है, तो ई-पैन तुरंत और निःशुल्क जारी किया जाता है।"
  },
  "authority": {
    "en": "Income Tax Department, Central Board of Direct Taxes (CBDT), Ministry of Finance",
    "hi": "आयकर विभाग, केंद्रीय प्रत्यक्ष कर बोर्ड (CBDT)"
  },
  "department": {
    "en": "Income Tax Department, Central Board of Direct Taxes (CBDT), Ministry of Finance",
    "hi": "आयकर विभाग, वित्त मंत्रालय, भारत सरकार"
  },
  "source": {
    "en": "Central Board of Direct Taxes (CBDT), Government of India",
    "hi": "आयकर अधिनियम, 1961 (धारा 139A) एवं आयकर नियम, 1962 (नियम 114)"
  },
  "officialSource": {
    "en": "Central Board of Direct Taxes (CBDT), Government of India",
    "hi": "आयकर विभाग, वित्त मंत्रालय, भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (राष्ट्रीय स्तर)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Aadhaar OTP / DigiLocker)",
    "hi": "पूरी तरह ऑनलाइन (आधार ओटीपी / प्रोटियन)"
  },
  "officialPortal": {
    "name": {
      "en": "Income Tax Department e-Filing Portal",
      "hi": "आयकर ई-फाइलिंग पोर्टल (Instant e-PAN / Protean)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) for Instant e-PAN on incometax.gov.in | ₹50 for physical PVC card reprint via NSDL",
      "hi": "तत्काल ई-पैन (Instant e-PAN): निःशुल्क (₹0) | भौतिक प्लास्टिक कार्ड: ₹107 (भारत में डिलीवरी)"
    },
    "verificationSource": {
      "en": "Income Tax Department, Ministry of Finance Guidelines",
      "hi": "सीबीडीटी आधिकारिक शुल्क अधिसूचना"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) for Instant e-PAN on incometax.gov.in | ₹50 for physical PVC card reprint via NSDL",
    "hi": "तत्काल ई-पैन (Instant e-PAN): निःशुल्क (₹0) | भौतिक प्लास्टिक कार्ड: ₹107 (भारत में डिलीवरी)"
  },
  "processingTime": {
    "timeText": {
      "en": "Instant e-PAN: 10 Minutes | Physical Card: 7 - 14 Days by Speed Post",
      "hi": "डिजिटल ई-पैन: 10 मिनट (तत्काल) | भौतिक कार्ड: 10 - 15 दिन"
    },
    "statutoryAct": {
      "en": "Income Tax Act, 1961 (Section 139A)",
      "hi": "आयकर अधिनियम, 1961"
    }
  },
  "processingInfo": {
    "en": "Instant e-PAN: 10 Minutes | Physical Card: 7 - 14 Days by Speed Post",
    "hi": "डिजिटल ई-पैन: 10 मिनट (तत्काल) | भौतिक कार्ड: 10 - 15 दिन"
  },
  "eligibility": [
    {
      "en": "Any individual who does not already possess a PAN card (holding two PAN cards is illegal under Section 272B of Income Tax Act).",
      "hi": "वैध 12-अंकीय आधार संख्या रखने वाला कोई भी भारतीय नागरिक जिसे पहले कभी पैन आवंटित न हुआ हो।"
    },
    {
      "en": "For Instant e-PAN: Must have an Aadhaar card with updated date of birth and an active mobile number linked with Aadhaar.",
      "hi": "ओटीपी प्राप्त करने के लिए आधार से सक्रिय मोबाइल नंबर लिंक होना अनिवार्य है।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Aadhaar Card with linked Mobile Number",
        "hi": "मोबाइल नंबर से जुड़ा आधार कार्ड"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "आधार ई-केवाईसी"
      },
      "description": {
        "en": "Sufficient single document for Instant e-PAN (serves as Proof of Identity, Address, and Date of Birth).",
        "hi": "नाम, जन्म तिथि, फोटो और पते के त्वरित ऑनलाइन सत्यापन हेतु।"
      },
      "commonExamples": {
        "en": "Aadhaar Card",
        "hi": "आधार कार्ड"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Visit Income Tax e-Filing Portal for Instant e-PAN",
        "hi": "तत्काल ई-पैन हेतु आयकर ई-फाइलिंग पोर्टल पर जाएं"
      },
      "description": {
        "en": "Open https://www.incometax.gov.in. Under Quick Links, click on 'Instant e-PAN' > 'Get New e-PAN'.",
        "hi": "https://www.incometax.gov.in पर जाएं और 'Quick Links' में 'Instant e-PAN' चुनें।"
      },
      "agencyOrPortal": {
        "en": "incometax.gov.in",
        "hi": "आयकर ई-फाइलिंग पोर्टल (incometax.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Income Tax Act, 1961 (Section 139A)",
        "hi": "सीबीडीटी त्वरित ई-पैन दिशानिर्देश"
      },
      "sourceReference": {
        "en": "Section 139A of Income Tax Act, 1961",
        "hi": "Section 139A of Income Tax Act, 1961"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Enter 12-Digit Aadhaar & Validate OTP",
        "hi": "12-अंकीय आधार नंबर दर्ज करें और ओटीपी सत्यापित करें"
      },
      "description": {
        "en": "Enter your Aadhaar number. Check the consent box and enter the 6-digit OTP received on your Aadhaar-registered mobile.",
        "hi": "अपना आधार नंबर दर्ज करें, नियम स्वीकार करें और अपने आधार-लिंक्ड मोबाइल पर आए 6-अंकीय ओटीपी से सत्यापित करें।"
      },
      "agencyOrPortal": {
        "en": "UIDAI / ITD API Bridge",
        "hi": "यूआईडीएआई आधार प्रमाणीकरण गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "3 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "CBDT Notification No. 96/2021 on Instant e-PAN",
        "hi": "आधार आधारित पैन आवंटन नियम"
      },
      "sourceReference": {
        "en": "Rule 114 of Income Tax Rules, 1962",
        "hi": "Rule 114 of Income Tax Rules, 1962"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Validate Demographic Details & Download Digitally Signed e-PAN PDF",
        "hi": "जनसांख्यिकीय विवरण सत्यापित करें और डिजिटल हस्ताक्षरित ई-पैन डाउनलोड करें"
      },
      "description": {
        "en": "Review pre-filled photo, name, date of birth, and address fetched directly from your Aadhaar record. Submit application. Within 10 minutes, download your official, legally valid digital e-PAN PDF with QR code.",
        "hi": "स्क्रीन पर प्रदर्शित नाम, जन्म तिथि और फोटो की पुष्टि करें। 10 मिनट के भीतर क्यूआर कोड युक्त डिजिटल ई-पैन पीडीएफ डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Income Tax Department Digital Locker",
        "hi": "आयकर ई-पैन डाउनलोड सिस्टम / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes (Instant)",
        "hi": "10 मिनट (तुरंत जारी)"
      },
      "mode": "online",
      "officialSource": {
        "en": "CBDT Guidelines on Digital PAN Validity",
        "hi": "आयकर नियम 114"
      },
      "sourceReference": {
        "en": "Section 139A & Rule 114 of Income Tax Rules, 1962",
        "hi": "Section 139A & Rule 114 of Income Tax Rules, 1962"
      },
      "officialTip": {
        "en": "To receive a physical plastic card, visit onlineservices.nsdl.com > Reprint of PAN Card and pay ₹50 for Speed Post delivery.",
        "hi": "To receive a physical plastic card, visit onlineservices.nsdl.com > Reprint of PAN Card and pay ₹50 for Speed Post delivery."
      }
    }
  ],
  "warnings": [
    {
      "en": "Possessing more than one PAN card is a punishable offense attracting a statutory penalty of ₹10,000 under Section 272B of the Income Tax Act.",
      "hi": "एक से अधिक पैन कार्ड रखना आयकर अधिनियम की धारा 272B के तहत गैरकानूनी है और इसके लिए ₹10,000 का जुर्माना लगाया जा सकता है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। पैन कार्ड केवल भारत सरकार के आयकर विभाग द्वारा आवंटित किया जाता है।"
  }
},
  "marriage-certificate": {
  "id": "marriage-certificate",
  "title": {
    "en": "Marriage Registration & Certificate (Sub-Registrar / Municipal)",
    "hi": "विवाह पंजीकरण एवं विवाह प्रमाण पत्र (विशेष विवाह / हिंदू विवाह)"
  },
  "category": {
    "en": "Certificates & Vital Records",
    "hi": "प्रमाण पत्र एवं राजस्व अभिलेख"
  },
  "shortDescription": {
    "en": "Register a solemnized marriage under the Hindu Marriage Act or Special Marriage Act to obtain an official government Marriage Certificate.",
    "hi": "पासपोर्ट में जीवनसाथी का नाम जोड़ने, संयुक्त वीजा आवेदन और कानूनी अधिकारों के लिए विवाह रजिस्ट्रार कार्यालय से आधिकारिक विवाह प्रमाण पत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "A Marriage Certificate is official legal proof of marriage. Regulated under the Hindu Marriage Act, 1955 or Special Marriage Act, 1954, and state compulsory marriage registration acts. Issued by the Sub-Registrar of Assurances (Inspector General of Registration - IGR) or the local Municipal Ward Health Officer. Mandatory for passport spouse endorsement, family visa sponsorship, joint property purchases, and bank nominations.",
    "hi": "हिंदू विवाह अधिनियम, 1955 या विशेष विवाह अधिनियम, 1954 के तहत संचालित। पति-पत्नी ऑनलाइन पूर्व-पंजीकरण फॉर्म जमा करते हैं, 3 गवाहों के साथ विवाह रजिस्ट्रार के समक्ष उपस्थित होते हैं, और डिजिटल हस्ताक्षरित आधिकारिक विवाह प्रमाण पत्र प्राप्त करते हैं।"
  },
  "authority": {
    "en": "Inspector General of Registration (IGR) / Municipal Corporation",
    "hi": "विवाह रजिस्ट्रार / उप-पंजीयक (Sub-Registrar), पंजीकरण एवं मुद्रांक विभाग"
  },
  "department": {
    "en": "Inspector General of Registration (IGR) / Municipal Corporation",
    "hi": "पंजीकरण एवं मुद्रांक महानिरीक्षक (IGR) / स्थानीय नगर निगम"
  },
  "source": {
    "en": "Inspector General of Registration & Controller of Stamps, Government of Maharashtra",
    "hi": "हिंदू विवाह अधिनियम, 1955 (धारा 8) / विशेष विवाह अधिनियम, 1954"
  },
  "officialSource": {
    "en": "Inspector General of Registration & Controller of Stamps, Government of Maharashtra",
    "hi": "पंजीकरण एवं मुद्रांक विभाग, राज्य सरकार"
  },
  "availability": {
    "en": "State Specific (maharashtra, delhi, karnataka, gujarat, uttar-pradesh, rajasthan, tamil-nadu, telangana, west-bengal, madhya-pradesh)",
    "hi": "राज्य एवं स्थानीय क्षेत्राधिकार (अखिल भारतीय)"
  },
  "onlineAvailable": {
    "en": "Online Application + Physical Verification",
    "hi": "ऑनलाइन आवेदन + रजिस्ट्रार समक्ष भौतिक उपस्थिति"
  },
  "officialPortal": {
    "name": {
      "en": "Aaple Sarkar / State Registration Department",
      "hi": "आपले सरकार / ई-डिस्ट्रिक्ट विवाह पोर्टल (Aaple Sarkar / e-District)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹100 to ₹250 (Statutory registration fee under Hindu Marriage Act)",
      "hi": "हिंदू विवाह अधिनियम: ₹100 - ₹200 | विशेष विवाह अधिनियम: ₹150 - ₹500"
    },
    "verificationSource": {
      "en": "State Inspector General of Registration (IGR) Statutory Fee Schedule",
      "hi": "राज्य विवाह पंजीकरण नियम एवं दर तालिका"
    }
  },
  "feeInfo": {
    "en": "₹100 to ₹250 (Statutory registration fee under Hindu Marriage Act)",
    "hi": "हिंदू विवाह अधिनियम: ₹100 - ₹200 | विशेष विवाह अधिनियम: ₹150 - ₹500"
  },
  "processingTime": {
    "timeText": {
      "en": "Same day in-person at office | 7 Working Days for digital certificate",
      "hi": "हिंदू विवाह: उसी दिन / 7 दिन | विशेष विवाह (30-दिवसीय नोटिस): 30 - 45 दिन"
    },
    "statutoryAct": {
      "en": "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
      "hi": "हिंदू विवाह अधिनियम, 1955 / विशेष विवाह अधिनियम, 1954"
    }
  },
  "processingInfo": {
    "en": "Same day in-person at office | 7 Working Days for digital certificate",
    "hi": "हिंदू विवाह: उसी दिन / 7 दिन | विशेष विवाह (30-दिवसीय नोटिस): 30 - 45 दिन"
  },
  "eligibility": [
    {
      "en": "Bridegroom must have attained minimum 21 years of age; Bride must have attained minimum 18 years of age.",
      "hi": "विवाह के समय वर की आयु कम से कम 21 वर्ष और वधू की आयु कम से कम 18 वर्ष।"
    },
    {
      "en": "Neither party has a spouse living at the time of marriage (unless legally dissolved by court decree).",
      "hi": "वैध विवाह संपन्न हुआ हो अथवा विशेष विवाह अधिनियम के तहत नोटिस दर्ज किया जा रहा हो।"
    },
    {
      "en": "Both parties must be capable of giving valid mutual consent.",
      "hi": "सत्यापन के समय 3 वयस्क गवाहों की भौतिक उपस्थिति अनिवार्य।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Date of Birth (Husband & Wife)",
        "hi": "जन्म तिथि का प्रमाण (पति एवं पत्नी)"
      },
      "type": {
        "en": "Original",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Official proof of legal age for both individuals.",
        "hi": "आयु की पुष्टि करने वाला आधिकारिक दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Birth Certificate, 10th School Leaving Certificate, or Passport",
        "hi": "10वीं कक्षा का प्रमाणपत्र, जन्म प्रमाण पत्र, पासपोर्ट, या आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Residence (Husband & Wife)",
        "hi": "आवासीय पते का प्रमाण (पति एवं पत्नी)"
      },
      "type": {
        "en": "Original",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Proof of address within registrar's jurisdiction.",
        "hi": "क्षेत्राधिकार में निवास का प्रमाण।"
      },
      "commonExamples": {
        "en": "Aadhaar Card, Voter ID, or Electricity Bill",
        "hi": "आधार कार्ड, मतदाता पहचान पत्र, बिजली बिल, या पासपोर्ट"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Wedding Photograph & Wedding Card (or Priest Affidavit)",
        "hi": "विवाह की तस्वीर एवं शादी का निमंत्रण पत्र"
      },
      "type": {
        "en": "Original / Photographic Evidence",
        "hi": "मूल निमंत्रण + रंगीन फोटो"
      },
      "description": {
        "en": "Visual evidence that marriage ceremony was solemnized.",
        "hi": "विवाह समारोह की स्पष्ट तस्वीर और शादी का कार्ड या पुरोहित/पादरी का हलफनामा।"
      },
      "commonExamples": {
        "en": "Wedding invitation card and marriage photograph of couple at ceremony",
        "hi": "फेरे/वरमाला की शादी की फोटो और विवाह पत्रिका"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Three Witnesses with Photo IDs",
        "hi": "तीन गवाहों के पहचान प्रमाण"
      },
      "type": {
        "en": "Witness Identification",
        "hi": "मूल + स्व-सत्यापित प्रतियां"
      },
      "description": {
        "en": "Three adult witnesses who attended the solemnization.",
        "hi": "विवाह के समय उपस्थित रहे 3 वयस्क गवाहों के सरकारी पहचान पत्र।"
      },
      "commonExamples": {
        "en": "Aadhaar cards of 3 witnesses who appear before the Registrar",
        "hi": "गवाहों के आधार कार्ड या मतदाता पहचान पत्र"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "File Online Pre-Registration Form",
        "hi": "राज्य विवाह पोर्टल पर ऑनलाइन पूर्व-पंजीकरण फॉर्म भरें"
      },
      "description": {
        "en": "Visit the state registration portal (e.g. https://aaplesarkar.mahaonline.gov.in for Maharashtra, or urban municipal portal). Enter particulars of husband, wife, and marriage solemnization date.",
        "hi": "विवाह पंजीकरण पोर्टल पर जाएं, वर और वधू का व्यक्तिगत विवरण, विवाह की तारीख और विवाह स्थल का क्षेत्राधिकार दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "Aaple Sarkar / Municipal Portal",
        "hi": "विवाह पंजीकरण ऑनलाइन पोर्टल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Hindu Marriage Act, 1955 (Section 8) / Special Marriage Act, 1954",
        "hi": "विवाह पंजीकरण नियम"
      },
      "sourceReference": {
        "en": "Section 8 of Hindu Marriage Act, 1955",
        "hi": "Section 8 of Hindu Marriage Act, 1955"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Upload Wedding Invitation, Photos & Witness Identification",
        "hi": "शादी का कार्ड, तस्वीरें और गवाहों के पहचान पत्र अपलोड करें"
      },
      "description": {
        "en": "Upload wedding invitation card, marriage ceremony photograph, proof of age (birth certificates/marksheets), and Aadhaar cards of 3 adult witnesses.",
        "hi": "शादी का निमंत्रण पत्र, शादी की तस्वीरें और तीनों गवाहों के आधार कार्ड अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "IGR / Municipal Document Engine",
        "hi": "दस्तावेज़ अपलोड सिस्टम"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Compulsory Marriage Registration Rules",
        "hi": "दस्तावेजी साक्ष्य मानक"
      },
      "sourceReference": {
        "en": "Registration of Marriages Rules",
        "hi": "Registration of Marriages Rules"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Pay Government Fee & Book Counter Slot",
        "hi": "सरकारी शुल्क का भुगतान करें और रजिस्ट्रार काउंटर स्लॉट बुक करें"
      },
      "description": {
        "en": "Pay the statutory fee (₹100 to ₹250) and select an appointment date for physical appearance before the Sub-Registrar / Marriage Officer.",
        "hi": "सांकेतिक वैधानिक सरकारी शुल्क का भुगतान करें और उप-पंजीयक कार्यालय में उपस्थिति हेतु तारीख और समय बुक करें।"
      },
      "agencyOrPortal": {
        "en": "IGR Appointment Scheduler",
        "hi": "पोर्टल पेमेंट व शेड्यूलिंग गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "State Inspector General of Registration (IGR) Statutory Fee Schedule",
        "hi": "पंजीकरण विभाग दर तालिका"
      },
      "sourceReference": {
        "en": "IGR Fee Notification",
        "hi": "IGR Fee Notification"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "In-Person Appearance before Marriage Officer with 3 Witnesses",
        "hi": "3 गवाहों के साथ विवाह अधिकारी के समक्ष व्यक्तिगत रूप से उपस्थित हों"
      },
      "description": {
        "en": "Husband, wife, and 3 witnesses appear physically before the Marriage Registrar, verify originals, and sign the official Marriage Register in presence of the officer.",
        "hi": "पति, पत्नी और तीनों गवाह मूल दस्तावेज़ों के साथ विवाह रजिस्ट्रार के समक्ष उपस्थित होकर विवाह रजिस्टर पर हस्ताक्षर और बायोमेट्रिक्स दर्ज करते हैं।"
      },
      "agencyOrPortal": {
        "en": "Sub-Registrar Office / Municipal Health Ward",
        "hi": "उप-पंजीयक (Sub-Registrar) / विवाह अधिकारी कार्यालय"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "30 Minutes at office",
        "hi": "कार्यालय में 1 घंटा"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Special Marriage Act, 1954 (Section 11)",
        "hi": "अधिनियम की धारा 8"
      },
      "sourceReference": {
        "en": "Section 11 & Section 12 of Special Marriage Act",
        "hi": "Section 11 & Section 12 of Special Marriage Act"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Certificate Issuance & Digital Barcoded Download",
        "hi": "डिजिटल बारकोडेड विवाह प्रमाण पत्र जारी होना एवं डाउनलोड"
      },
      "description": {
        "en": "Receive the stamped Marriage Certificate immediately or download the barcoded certified copy with official seal from the state portal.",
        "hi": "सत्यापन के तुरंत बाद डिजिटल रूप से हस्ताक्षरित विवाह प्रमाण पत्र जारी किया जाता है जिसे पोर्टल या डिजिलॉकर से डाउनलोड किया जा सकता है।"
      },
      "agencyOrPortal": {
        "en": "State Registration Department",
        "hi": "विवाह पोर्टल / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "Same Day or 3 - 7 Working Days",
        "hi": "उसी दिन या 3 - 7 दिन"
      },
      "mode": "online",
      "officialSource": {
        "en": "Section 13 of Special Marriage Act, 1954",
        "hi": "डिजिटल हस्ताक्षर कानून (IT Act 2000)"
      },
      "sourceReference": {
        "en": "Form IV Marriage Certificate",
        "hi": "Form IV Marriage Certificate"
      }
    }
  ],
  "warnings": [
    {
      "en": "All 3 witnesses must carry their original government photo identification when appearing before the Marriage Registrar.",
      "hi": "विवाह के समय किसी भी पक्ष का कोई जीवित जीवनसाथी (बिना कानूनी तलाक के) नहीं होना चाहिए।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित मंच है। विवाह प्रमाण पत्र केवल अधिकृत विवाह रजिस्ट्रार द्वारा जारी किया जाता है।"
  }
},
  "fresh-aadhaar-enrollment": {
  "id": "fresh-aadhaar-enrollment",
  "title": {
    "en": "New Aadhaar Card Enrollment (Aadhaar Seva Kendra)",
    "hi": "नया आधार कार्ड नामांकन (आधार सेवा केंद्र)"
  },
  "category": {
    "en": "Aadhaar & Identity",
    "hi": "आधार एवं पहचान"
  },
  "shortDescription": {
    "en": "Book an appointment at an authorized Aadhaar Seva Kendra (ASK) for first-time biometric enrollment for children or adults.",
    "hi": "आधिकारिक आधार सेवा केंद्र (ASK) पर निःशुल्क नया आधार कार्ड बनवाने के लिए ऑनलाइन अपॉइंटमेंट बुक करें और बायोमेट्रिक्स दर्ज कराएं।"
  },
  "fullOverview": {
    "en": "Aadhaar enrollment is completely free and requires an in-person visit to an authorized Aadhaar Seva Kendra (ASK), designated nationalized bank, or post office. Biometrics (all 10 fingerprints, both irises, and facial photograph) and demographic data are captured securely to generate your unique 12-digit Aadhaar number.",
    "hi": "आधार (वित्तीय और अन्य सब्सिडी, लाभ और सेवाओं का लक्षित वितरण) अधिनियम, 2016 के तहत संचालित। 12-अंकीय अद्वितीय पहचान संख्या प्राप्त करने के लिए निवासियों को जनसांख्यिकीय विवरण और बायोमेट्रिक्स (10 उंगलियों के निशान, दोनों आंखों की पुतली स्कैन, और चेहरे की तस्वीर) दर्ज करानी होती है।"
  },
  "authority": {
    "en": "Unique Identification Authority of India (UIDAI), Ministry of Electronics & IT",
    "hi": "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)"
  },
  "department": {
    "en": "Unique Identification Authority of India (UIDAI), Ministry of Electronics & IT",
    "hi": "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI), इलेक्ट्रॉनिक्स एवं आईटी मंत्रालय"
  },
  "source": {
    "en": "Unique Identification Authority of India (UIDAI)",
    "hi": "आधार अधिनियम, 2016 एवं आधार (नामांकन एवं अद्यतन) विनियम, 2016"
  },
  "officialSource": {
    "en": "Unique Identification Authority of India (UIDAI)",
    "hi": "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (सभी राज्य एवं केंद्र शासित प्रदेश)"
  },
  "onlineAvailable": {
    "en": "Online Application + Physical Verification",
    "hi": "ऑनलाइन अपॉइंटमेंट + आधार केंद्र पर भौतिक बायोमेट्रिक्स"
  },
  "officialPortal": {
    "name": {
      "en": "UIDAI Official Enrollment Appointment Portal",
      "hi": "यूआईडीएआई आधार सेवा केंद्र पोर्टल (UIDAI Portal)"
    }
  },
  "fees": {
    "amountText": {
      "en": "Free (₹0) - 100% Free Official Government Service",
      "hi": "निःशुल्क (₹0 - नए नामांकन पर कोई सरकारी शुल्क नहीं)"
    },
    "verificationSource": {
      "en": "UIDAI Gazette Notification on Free Enrollment",
      "hi": "यूआईडीएआई विनियम 2016 (प्रथम नामांकन सदैव निःशुल्क)"
    }
  },
  "feeInfo": {
    "en": "Free (₹0) - 100% Free Official Government Service",
    "hi": "निःशुल्क (₹0 - नए नामांकन पर कोई सरकारी शुल्क नहीं)"
  },
  "processingTime": {
    "timeText": {
      "en": "15 - 30 Working Days",
      "hi": "15 - 30 दिन (डी-डुप्लिकेशन एवं गुणवत्ता जांच)"
    },
    "statutoryAct": {
      "en": "Aadhaar Act, 2016",
      "hi": "आधार अधिनियम, 2016"
    }
  },
  "processingInfo": {
    "en": "15 - 30 Working Days",
    "hi": "15 - 30 दिन (डी-डुप्लिकेशन एवं गुणवत्ता जांच)"
  },
  "eligibility": [
    {
      "en": "Any individual resident of India who has resided in India for a period of 182 days or more in the preceding 12 months.",
      "hi": "भारत का कोई भी निवासी जो पिछले 12 महीनों में कम से कम 182 दिन भारत में रहा हो।"
    },
    {
      "en": "Children under 5 years require Baal Aadhaar (linked to parent Aadhaar, no biometrics until age 5).",
      "hi": "नवजात शिशु और बच्चे (बाल आधार) भी पात्र हैं।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proof of Identity (PoI)",
        "hi": "पहचान का प्रमाण (PoI)"
      },
      "type": {
        "en": "Original",
        "hi": "मूल दस्तावेज़ सत्यापन"
      },
      "description": {
        "en": "Official document containing photo and resident name.",
        "hi": "आवेदक का नाम और फोटो दर्शाने वाला सरकारी पहचान पत्र।"
      },
      "commonExamples": {
        "en": "Passport, PAN Card, Voter ID, Ration Card with photo, or Driving Licence",
        "hi": "पासपोर्ट, पैन कार्ड, राशन कार्ड, मतदाता पहचान पत्र, या ड्राइविंग लाइसेंस"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Address (PoA)",
        "hi": "पते का प्रमाण (PoA)"
      },
      "type": {
        "en": "Original",
        "hi": "मूल दस्तावेज़ सत्यापन"
      },
      "description": {
        "en": "Official document containing residential street address.",
        "hi": "आवेदक का आवासीय पता दर्शाने वाला आधिकारिक दस्तावेज़।"
      },
      "commonExamples": {
        "en": "Electricity Bill (< 3 months), Bank Passbook with photo, or Voter ID",
        "hi": "बिजली/पानी बिल (< 3 माह), बैंक पासबुक, मतदाता पहचान पत्र, या राशन कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Date of Birth (DoB)",
        "hi": "जन्म तिथि का प्रमाण (DoB Proof)"
      },
      "type": {
        "en": "Original",
        "hi": "मूल दस्तावेज़ सत्यापन"
      },
      "description": {
        "en": "Official record confirming date of birth.",
        "hi": "जन्म तिथि की पुष्टि करने वाला आधिकारिक रिकॉर्ड।"
      },
      "commonExamples": {
        "en": "Birth Certificate from Registrar or 10th Class Marksheet",
        "hi": "जन्म प्रमाण पत्र, 10वीं कक्षा की मार्कशीट, या पासपोर्ट"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Book Online Appointment at Nearest Aadhaar Seva Kendra (ASK)",
        "hi": "निकटतम आधार सेवा केंद्र (ASK) में ऑनलाइन अपॉइंटमेंट बुक करें"
      },
      "description": {
        "en": "Visit https://appointments.uidai.gov.in. Choose your city/location and book an appointment slot to avoid waiting queues.",
        "hi": "uidai.gov.in पर जाएं, 'Book an Appointment' चुनें और नजदीकी अधिकृत आधार सेवा केंद्र पर तारीख और समय स्लॉट चुनें।"
      },
      "agencyOrPortal": {
        "en": "appointments.uidai.gov.in",
        "hi": "यूआईडीएआई अपॉइंटमेंट पोर्टल (appointments.uidai.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "UIDAI Enrollment Appointment Regulations",
        "hi": "यूआईडीएआई नामांकन मानक"
      },
      "sourceReference": {
        "en": "UIDAI Enrolment Portal Guidelines",
        "hi": "UIDAI Enrolment Portal Guidelines"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Visit Aadhaar Seva Kendra with Original Documents",
        "hi": "मूल दस्तावेज़ों के साथ आधार सेवा केंद्र पर उपस्थित हों"
      },
      "description": {
        "en": "Arrive with original Proof of Identity (PoI), Proof of Address (PoA), and Date of Birth (DoB). The verifier validates original documents against UIDAI standards.",
        "hi": "पहचान, पते और जन्म तिथि के मूल दस्तावेज़ लेकर केंद्र पर जाएं। केंद्र पर किसी फोटोकॉपी की आवश्यकता नहीं होती।"
      },
      "agencyOrPortal": {
        "en": "Aadhaar Seva Kendra (ASK)",
        "hi": "अधिकृत आधार सेवा केंद्र (ASK / Bank / Post Office)"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "15 Minutes at counter",
        "hi": "केंद्र पर 20 - 30 मिनट"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Aadhaar (Enrolment and Update) Regulations, 2016 (Schedule I)",
        "hi": "यूआईडीएआई केंद्र संचालन नियमावली"
      },
      "sourceReference": {
        "en": "Schedule I Document Verification Guidelines",
        "hi": "Schedule I Document Verification Guidelines"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Biometric Capture (10 Fingerprints, Dual Iris, Facial Photograph)",
        "hi": "बायोमेट्रिक डेटा दर्ज कराएं (10 उंगलियां, दोनों आंखें, चेहरे की फोटो)"
      },
      "description": {
        "en": "The enrollment operator captures your digital facial photo, scans all 10 fingers on the optical scanner, and captures both iris patterns on the dual-iris scanner.",
        "hi": "प्रमाणित ऑपरेटर द्वारा 10 उंगलियों के फिंगरप्रिंट, दोनों आंखों का आईरिस स्कैन और चेहरे की लाइव तस्वीर ली जाएगी।"
      },
      "agencyOrPortal": {
        "en": "UIDAI Biometric Enrolment Station",
        "hi": "यूआईडीएआई बायोमेट्रिक कैप्चर सिस्टम"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Section 3 of Aadhaar Act, 2016",
        "hi": "आधार विनियम 2016 (विनियम 3)"
      },
      "sourceReference": {
        "en": "Section 3(1) of Aadhaar Act, 2016",
        "hi": "Section 3(1) of Aadhaar Act, 2016"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Verify On-Screen Data & Collect 28-Digit EID Slip",
        "hi": "स्क्रीन पर डेटा सत्यापित करें और 28-अंकीय नामांकन पर्ची (EID) प्राप्त करें"
      },
      "description": {
        "en": "Review the on-screen data before final submission. Sign the operator confirmation and collect your printed 28-digit Enrollment Acknowledgement Slip (EID).",
        "hi": "कंप्यूटर स्क्रीन पर अपने नाम, पते और जन्म तिथि की जांच करें और मुद्रित नामांकन पर्ची (पावती) प्राप्त करें।"
      },
      "agencyOrPortal": {
        "en": "Aadhaar Seva Kendra Desk",
        "hi": "नामांकन केंद्र पावती काउंटर"
      },
      "isOnline": false,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "offline",
      "officialSource": {
        "en": "Aadhaar Enrolment Process Manual",
        "hi": "यूआईडीएआई पावती दिशानिर्देश"
      },
      "sourceReference": {
        "en": "UIDAI Standard Operating Procedure (SOP)",
        "hi": "UIDAI Standard Operating Procedure (SOP)"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Track De-duplication Status & Download e-Aadhaar",
        "hi": "डी-डुप्लिकेशन स्थिति ट्रैक करें और डिजिटल ई-आधार डाउनलोड करें"
      },
      "description": {
        "en": "UIDAI Central Identities Data Repository (CIDR) performs biometric de-duplication. Once generated, track on myaadhaar.uidai.gov.in and download your e-Aadhaar PDF.",
        "hi": "ईआईडी नंबर से uidai.gov.in पर स्थिति ट्रैक करें। अनुमोदन के बाद पासवर्ड से सुरक्षित ई-आधार पीडीएफ तुरंत डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "myaadhaar.uidai.gov.in",
        "hi": "myAadhaar पोर्टल / डिजिलॉकर"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 - 30 Working Days",
        "hi": "15 - 30 दिन"
      },
      "mode": "online",
      "officialSource": {
        "en": "Aadhaar Act, 2016 (Section 4)",
        "hi": "आईटी अधिनियम 2000 (डिजिटल ई-आधार कानूनी मान्यता)"
      },
      "sourceReference": {
        "en": "Section 4 of Aadhaar Act, 2016",
        "hi": "Section 4 of Aadhaar Act, 2016"
      }
    }
  ],
  "warnings": [
    {
      "en": "Aadhaar enrollment is 100% FREE. Never pay any fee for initial enrollment at any government or private center.",
      "hi": "नया आधार नामांकन 100% निःशुल्क (₹0) है। किसी भी ऑपरेटर या केंद्र को कोई पैसा न दें।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। आधार कार्ड केवल यूआईडीएआई द्वारा जारी किया जाता है।"
  }
},
  "private-limited-company-mca-spice": {
  "id": "private-limited-company-mca-spice",
  "title": {
    "en": "Private Limited Company Incorporation (MCA SPICe+ & AGILE-PRO-S)",
    "hi": "प्राइवेट लिमिटेड कंपनी समावेशन (एमसीए SPICe+ एवं AGILE-PRO-S)"
  },
  "category": {
    "en": "Business, Tax & Enterprise",
    "hi": "व्यापार, कर एवं उद्यम"
  },
  "shortDescription": {
    "en": "Incorporate a Private Limited Company with the Ministry of Corporate Affairs (MCA) using integrated web-form SPICe+ (INC-32) and linked e-forms.",
    "hi": "कॉर्पोरेट कार्य मंत्रालय के MCA V3 पोर्टल पर एकीकृत SPICe+ फॉर्म द्वारा प्राइवेट लिमिटेड कंपनी का पंजीकरण, पैन, टैन, ईएसआईसी, ईपीएफओ, और बैंक खाता एक साथ प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Under the Companies Act, 2013 and Companies (Incorporation) Rules, company registration in India is executed entirely online on the MCA V3 portal (mca.gov.in) through the integrated SPICe+ (SPICe Plus) web form. This single-window process combines Name Reservation (Part A), Company Incorporation (Part B), Director Identification Numbers (DIN), PAN, TAN, EPFO, ESIC, Professional Tax, Bank Account opening, and GSTIN.",
    "hi": "कंपनी अधिनियम, 2013 के तहत भारत में कंपनी शुरू करने की सबसे व्यापक आधिकारिक विधि। सेंट्रल रजिस्ट्रेशन सेंटर (CRC) द्वारा संचालित एकीकृत वेब-फॉर्म SPICe+ (INC-32) के माध्यम से नाम आरक्षण, समावेशन, पैन/टैन, ईपीएफओ/ईएसआईसी, पेशेवर कर और बैंक खाता एक ही प्रक्रिया में जारी किए जाते हैं।"
  },
  "authority": {
    "en": "Ministry of Corporate Affairs (MCA), Government of India & Central Registration Centre (CRC)",
    "hi": "केंद्रीय पंजीकरण केंद्र (CRC) एवं कंपनी रजिस्ट्रार (ROC), कॉर्पोरेट कार्य मंत्रालय"
  },
  "department": {
    "en": "Ministry of Corporate Affairs (MCA), Government of India & Central Registration Centre (CRC)",
    "hi": "कॉर्पोरेट कार्य मंत्रालय (MCA), भारत सरकार"
  },
  "source": {
    "en": "Ministry of Corporate Affairs (MCA), Government of India",
    "hi": "कंपनी अधिनियम, 2013 एवं कंपनी (समावेशन) नियम, 2014"
  },
  "officialSource": {
    "en": "Ministry of Corporate Affairs (MCA), Government of India",
    "hi": "कॉर्पोरेट कार्य मंत्रालय (MCA), भारत सरकार"
  },
  "availability": {
    "en": "Pan-India (All States & UTs)",
    "hi": "अखिल भारतीय (राष्ट्रीय स्तर)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Digital Signature Certificate / MCA V3)",
    "hi": "पूरी तरह ऑनलाइन (डीएससी / एमसीए वी3)"
  },
  "officialPortal": {
    "name": {
      "en": "Ministry of Corporate Affairs (MCA V3 Portal)",
      "hi": "कॉर्पोरेट कार्य मंत्रालय वी3 पोर्टल (MCA V3 Portal)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹0 ROC Incorporation Fee (for authorized capital up to ₹15 Lakhs) | State Stamp Duty: ₹1,000 - ₹3,000 (varies by State)",
      "hi": "₹15 लाख तक अधिकृत पूंजी: एमसीए शुल्क ₹0 | केवल राज्य स्टांप शुल्क (₹1,000 - ₹5,000) + पैन/टैन ₹133"
    },
    "verificationSource": {
      "en": "Ministry of Corporate Affairs Notification G.S.R. 180(E) & State Stamp Acts",
      "hi": "कंपनी (समावेशन) नियम, 2014 नियम 38 (शून्य सरकारी समावेशन शुल्क)"
    }
  },
  "feeInfo": {
    "en": "₹0 ROC Incorporation Fee (for authorized capital up to ₹15 Lakhs) | State Stamp Duty: ₹1,000 - ₹3,000 (varies by State)",
    "hi": "₹15 लाख तक अधिकृत पूंजी: एमसीए शुल्क ₹0 | केवल राज्य स्टांप शुल्क (₹1,000 - ₹5,000) + पैन/टैन ₹133"
  },
  "processingTime": {
    "timeText": {
      "en": "3 - 7 Working Days (Subject to CRC scrutiny)",
      "hi": "3 - 7 कार्य दिवस (सीआरसी समीक्षा एवं अनुमोदन)"
    },
    "statutoryAct": {
      "en": "Companies Act, 2013",
      "hi": "कंपनी अधिनियम, 2013 (2013 का अधिनियम संख्या 18)"
    }
  },
  "processingInfo": {
    "en": "3 - 7 Working Days (Subject to CRC scrutiny)",
    "hi": "3 - 7 कार्य दिवस (सीआरसी समीक्षा एवं अनुमोदन)"
  },
  "eligibility": [
    {
      "en": "Minimum 2 directors and maximum 15 directors (at least one director must be a resident of India).",
      "hi": "न्यूनतम 2 निदेशक (कम से कम 1 भारतीय निवासी निदेशक होना अनिवार्य)।"
    },
    {
      "en": "Minimum 2 shareholders (subscribers to the Memorandum of Association).",
      "hi": "न्यूनतम 2 शेयरधारक (निदेशक ही शेयरधारक हो सकते हैं)।"
    },
    {
      "en": "All proposed directors and subscribers must hold valid Class 3 Digital Signature Certificates (DSC).",
      "hi": "सभी प्रस्तावित निदेशकों के पास क्लास 3 डिजिटल हस्ताक्षर प्रमाणपत्र (DSC) होना आवश्यक।"
    },
    {
      "en": "Must have a physical commercial or residential address designated as the registered office in India.",
      "hi": "Must have a physical commercial or residential address designated as the registered office in India."
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Class 3 Digital Signature Certificate (DSC) for all Directors",
        "hi": "सभी निदेशकों के लिए क्लास 3 डिजिटल हस्ताक्षर प्रमाणपत्र (DSC)"
      },
      "type": {
        "en": "Digital Certificate (CCA Authorized)",
        "hi": "प्रमाणित डीएससी टोकन"
      },
      "description": {
        "en": "Cryptographic token for signing electronic MCA web-forms.",
        "hi": "एमसीए पोर्टल पर ऑनलाइन फॉर्म ई-साइन करने के लिए आवश्यक।"
      },
      "commonExamples": {
        "en": "Class 3 Signing & Encryption DSC Token from eMudhra / Capricorn / VSign",
        "hi": "प्रमाणित सीए (Certifying Authority) द्वारा जारी क्लास 3 डीएससी"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Director Proof of Identity (PAN & Passport/Voter ID/DL)",
        "hi": "निदेशकों की पहचान का प्रमाण (पैन अनिवार्य + पासपोर्ट/वोटर आईडी/डीएल)"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "स्व-सत्यापित रंगीन प्रति"
      },
      "description": {
        "en": "PAN is mandatory for Indian nationals; Passport is mandatory for foreign nationals.",
        "hi": "प्रत्येक निदेशक का पैन कार्ड और दूसरा आधिकारिक पहचान प्रमाण।"
      },
      "commonExamples": {
        "en": "PAN Card and Voter ID / Driving Licence of all directors",
        "hi": "पैन कार्ड + पासपोर्ट / मतदाता पहचान पत्र / ड्राइविंग लाइसेंस"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Director Proof of Address",
        "hi": "निदेशकों के आवासीय पते का प्रमाण"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "स्व-सत्यापित प्रति (< 2 माह)"
      },
      "description": {
        "en": "Residential utility bill not older than 2 months.",
        "hi": "निदेशकों के पते की पुष्टि करने वाला हालिया उपयोगिता बिल।"
      },
      "commonExamples": {
        "en": "Electricity Bill, Bank Statement with transactions, or Mobile Bill (< 2 months)",
        "hi": "बैंक स्टेटमेंट, बिजली बिल, या टेलीफोन बिल (< 2 माह पुराना)"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Registered Company Office Premises",
        "hi": "कंपनी के पंजीकृत कार्यालय परिसर का प्रमाण"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "उपयोगिता बिल + एनओसी / रेंट एग्रीमेंट"
      },
      "description": {
        "en": "Ownership or tenancy proof of registered office.",
        "hi": "कंपनी कार्यालय के कानूनी कब्जे का प्रमाण।"
      },
      "commonExamples": {
        "en": "Electricity Bill (< 2 months) with Rent Agreement and Landlord NOC",
        "hi": "पंजीकृत रेंट एग्रीमेंट + मालिक की एनओसी + हालिया बिजली बिल (< 2 माह)"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Certification by Practicing Professional (CA / CS / CWA)",
        "hi": "प्रैक्टिसिंग पेशेवर (CA / CS / CWA) द्वारा प्रमाणीकरण"
      },
      "type": {
        "en": "Professional Digital Attestation",
        "hi": "पेशेवर डिजिटल हस्ताक्षर"
      },
      "description": {
        "en": "Statutory declaration certifying compliance with Companies Act.",
        "hi": "फॉर्म INC-140/32 पर चार्टर्ड अकाउंटेंट या कंपनी सेक्रेटरी के डिजिटल हस्ताक्षर।"
      },
      "commonExamples": {
        "en": "Digital Signature of practicing Chartered Accountant, Company Secretary, or Cost Accountant",
        "hi": "सीए/सीएस सदस्यता संख्या और डीएससी सत्यापन"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Procure Class 3 Digital Signature Certificate (DSC) for Proposed Directors",
        "hi": "प्रस्तावित निदेशकों के लिए क्लास 3 डिजिटल हस्ताक्षर (DSC) प्राप्त करें"
      },
      "description": {
        "en": "All proposed directors and subscribers to the memorandum must obtain a Class 3 Digital Signature Certificate (DSC) with encryption from a licensed Certifying Authority (CCA).",
        "hi": "प्रमाणित एजेंसी से क्लास 3 डीएससी प्राप्त करें जो एमसीए पोर्टल पर फॉर्म ई-साइन करने के लिए कानूनी रूप से आवश्यक है।"
      },
      "agencyOrPortal": {
        "en": "Controller of Certifying Authorities (cca.gov.in)",
        "hi": "मान्यता प्राप्त डीएससी एजेंसी (eMudhra / Protean / Vsign)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "1 - 2 Days",
        "hi": "1 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Information Technology Act, 2000 & MCA V3 Digital Signature Policy",
        "hi": "सूचना प्रौद्योगिकी अधिनियम, 2000"
      },
      "sourceReference": {
        "en": "Section 24 of Information Technology Act, 2000",
        "hi": "Section 24 of Information Technology Act, 2000"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Register Business User Account on MCA V3 Portal",
        "hi": "एमसीए वी3 पोर्टल पर बिजनेस यूजर खाता पंजीकृत करें"
      },
      "description": {
        "en": "Create a 'Business User' account on the Ministry of Corporate Affairs portal (mca.gov.in) using your PAN and link your registered Class 3 DSC token.",
        "hi": "mca.gov.in पर जाएं, नया खाता बनाएं और अपने डीएससी को एमसीए वी3 पोर्टल पर संबद्ध (Associate DSC) करें।"
      },
      "agencyOrPortal": {
        "en": "mca.gov.in (MCA V3 Portal)",
        "hi": "एमसीए वी3 पोर्टल (mca.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies (Incorporation) Rules, 2014",
        "hi": "एमसीए पोर्टल दिशानिर्देश"
      },
      "sourceReference": {
        "en": "MCA V3 User Registration Manual",
        "hi": "MCA V3 User Registration Manual"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "SPICe+ Part A: Company Name Reservation (RUN Service)",
        "hi": "SPICe+ Part A: कंपनी का नाम आरक्षण (RUN सेवा)"
      },
      "description": {
        "en": "Submit up to 2 proposed company names along with the main objects clause in SPICe+ Part A. The Central Registration Centre (CRC) checks names against existing companies and the IP India trademark registry.",
        "hi": "प्रस्तावित कंपनी के 2 अनूठे नाम जमा करें। नाम कंपनी अधिनियम के नियमों के अनुसार किसी मौजूदा ट्रेडमार्क या कंपनी के समान नहीं होना चाहिए।"
      },
      "agencyOrPortal": {
        "en": "Central Registration Centre (CRC), MCA",
        "hi": "केंद्रीय पंजीकरण केंद्र (CRC) - नाम कक्ष"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "1 - 2 Working Days (or combined with Part B)",
        "hi": "1 - 2 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies Act, 2013 (Section 4) & Companies (Incorporation) Rules, 2014",
        "hi": "कंपनी (समावेशन) नियम, 2014 नियम 8 एवं 9"
      },
      "sourceReference": {
        "en": "Rule 9 of Companies (Incorporation) Rules, 2014",
        "hi": "Rule 9 of Companies (Incorporation) Rules, 2014"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "SPICe+ Part B: Company Particulars, Director KYC & DIN Allotment",
        "hi": "SPICe+ Part B: कंपनी विवरण, निदेशक केवाईसी और डीआईएन आवंटन"
      },
      "description": {
        "en": "Fill SPICe+ Part B with registered office address, authorized & paid-up share capital, and director KYC details. Director Identification Numbers (DIN) for up to 3 directors are allotted directly in this step.",
        "hi": "पूंजी संरचना, शेयरधारिता विवरण, पंजीकृत कार्यालय का पता भरें और नए निदेशकों के लिए DIN हेतु आवेदन करें।"
      },
      "agencyOrPortal": {
        "en": "MCA SPICe+ Web Form Module",
        "hi": "एमसीए वेब-फॉर्म SPICe+ Part B"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "30 Minutes",
        "hi": "30 - 45 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Form INC-32 (SPICe+) User Manual",
        "hi": "कंपनी अधिनियम 2013 धारा 7"
      },
      "sourceReference": {
        "en": "Section 7 of Companies Act, 2013 & Rule 12 of Incorporation Rules",
        "hi": "Section 7 of Companies Act, 2013 & Rule 12 of Incorporation Rules"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Draft Electronic Memorandum of Association (e-MoA - Form INC-33)",
        "hi": "इलेक्ट्रॉनिक मेमोरेंडम ऑफ एसोसिएशन (e-MoA - Form INC-33) तैयार करें"
      },
      "description": {
        "en": "Draft the electronic Memorandum of Association (INC-33) setting out the main objects of the company, ancillary objects, liability clause, and subscribed capital details.",
        "hi": "कंपनी के मुख्य व्यावसायिक उद्देश्यों और सहायक गतिविधियों का चयन करके ऑनलाइन ई-एमओए तैयार करें।"
      },
      "agencyOrPortal": {
        "en": "MCA Portal Form INC-33",
        "hi": "एमसीए ई-एमओए मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "20 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies Act, 2013 (Section 4 & Table A/B/C/D/E of Schedule I)",
        "hi": "कंपनी अधिनियम 2013 धारा 4"
      },
      "sourceReference": {
        "en": "Rule 13 of Companies (Incorporation) Rules, 2014",
        "hi": "Rule 13 of Companies (Incorporation) Rules, 2014"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "Draft Electronic Articles of Association (e-AoA - Form INC-34)",
        "hi": "इलेक्ट्रॉनिक आर्टिकल्स ऑफ एसोसिएशन (e-AoA - Form INC-34) तैयार करें"
      },
      "description": {
        "en": "Draft the electronic Articles of Association (INC-34) governing internal management, share transfers, board meetings, voting rights, and appointment of managing directors.",
        "hi": "कंपनी के आंतरिक प्रबंधन, बैठकों और शेयर नियमों को परिभाषित करने वाले ई-एओए तैयार करें।"
      },
      "agencyOrPortal": {
        "en": "MCA Portal Form INC-34",
        "hi": "एमसीए ई-एओए मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "20 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies Act, 2013 (Section 5 & Table F/G/H/I/J of Schedule I)",
        "hi": "कंपनी अधिनियम 2013 धारा 5"
      },
      "sourceReference": {
        "en": "Rule 13 of Companies (Incorporation) Rules, 2014",
        "hi": "Rule 13 of Companies (Incorporation) Rules, 2014"
      }
    },
    {
      "stepNumber": 7,
      "title": {
        "en": "Complete Linked Form AGILE-PRO-S (Form INC-35)",
        "hi": "संलग्न फॉर्म AGILE-PRO-S (Form INC-35) पूरा करें"
      },
      "description": {
        "en": "Complete mandatory linked Form INC-35 for automatic allotment of GSTIN, EPFO establishment code, ESIC registration, State Professional Tax registration (where applicable), and designated commercial bank account opening.",
        "hi": "जीएसटी पंजीकरण, ईपीएफओ, ईएसआईसी, पेशेवर कर और कॉर्पोरेट बैंक खाता खोलने के लिए एकीकृत फॉर्म भरें।"
      },
      "agencyOrPortal": {
        "en": "MCA Integrated Gateway & CBDT/EPFO/ESIC",
        "hi": "एजाइल-प्रो-एस मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "20 Minutes",
        "hi": "15 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies (Incorporation) Third Amendment Rules, 2020",
        "hi": "कंपनी समावेशन नियम 38A"
      },
      "sourceReference": {
        "en": "Rule 38A of Companies (Incorporation) Rules, 2014",
        "hi": "Rule 38A of Companies (Incorporation) Rules, 2014"
      }
    },
    {
      "stepNumber": 8,
      "title": {
        "en": "Generate Form INC-9 Electronic Declarations & Affix DSCs",
        "hi": "फॉर्म INC-9 इलेक्ट्रॉनिक घोषणाएं जनरेट करें और डीएससी लगाएं"
      },
      "description": {
        "en": "System auto-generates Form INC-9 electronic declarations. Affix Class 3 DSC of all subscriber-directors and certification DSC of a practicing Chartered Accountant, Company Secretary, or Cost Accountant.",
        "hi": "निदेशकों की स्व-घोषणाएं डाउनलोड करें और सभी निदेशकों और सीए/सीएस के डिजिटल हस्ताक्षर लगाएं।"
      },
      "agencyOrPortal": {
        "en": "MCA Digital Signature Engine",
        "hi": "एमसीए डीएससी हस्ताक्षर यूटिलिटी"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies (Incorporation) Rules, 2014 (Rule 15)",
        "hi": "कंपनी नियम 2014 नियम 15"
      },
      "sourceReference": {
        "en": "Rule 15 of Companies (Incorporation) Rules, 2014",
        "hi": "Rule 15 of Companies (Incorporation) Rules, 2014"
      }
    },
    {
      "stepNumber": 9,
      "title": {
        "en": "System Pre-Scrutiny, Form Upload & Payment of Statutory Fees & Stamp Duty",
        "hi": "सिस्टम प्री-स्क्रूटनी, फॉर्म अपलोड और वैधानिक स्टांप शुल्क का भुगतान करें"
      },
      "description": {
        "en": "Run systemic pre-scrutiny validation on all linked forms, upload the complete packet to MCA V3, and pay statutory ROC fees (₹0 ROC fee for nominal capital up to ₹15 Lakhs) plus state stamp duty on BharatKosh.",
        "hi": "भारतकोश (BharatKosh) गेटवे के माध्यम से संबंधित राज्य के स्टांप शुल्क और पैन/टैन शुल्क का भुगतान करें।"
      },
      "agencyOrPortal": {
        "en": "MCA V3 / BharatKosh Payment Gateway",
        "hi": "भारतकोश पेमेंट गेटवे (bharatkosh.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "15 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies (Registration Offices and Fees) Rules, 2014 & State Stamp Acts",
        "hi": "भारतीय स्टांप अधिनियम एवं राज्य स्टांप नियम"
      },
      "sourceReference": {
        "en": "MCA Notification G.S.R. 180(E) dated 6th March 2019",
        "hi": "MCA Notification G.S.R. 180(E) dated 6th March 2019"
      }
    },
    {
      "stepNumber": 10,
      "title": {
        "en": "Central Registration Centre (CRC) Approval & Issuance of Certificate of Incorporation (COI)",
        "hi": "केंद्रीय पंजीकरण केंद्र (CRC) अनुमोदन एवं निगमन प्रमाणपत्र (COI) जारी होना"
      },
      "description": {
        "en": "Central Registration Centre (CRC, Manesar) scrutinizes the application. Upon approval, download your official Certificate of Incorporation (Form INC-11) containing CIN, PAN, and TAN.",
        "hi": "सीआरसी रजिस्ट्रार द्वारा अनुमोदन के बाद सीआईएन (CIN), पैन और टैन युक्त निगमन प्रमाणपत्र (COI) ईमेल द्वारा प्राप्त होगा।"
      },
      "agencyOrPortal": {
        "en": "Central Registration Centre (CRC), MCA",
        "hi": "केंद्रीय पंजीकरण केंद्र (CRC) / कंपनी रजिस्ट्रार"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "2 - 5 Working Days",
        "hi": "2 - 3 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Companies Act, 2013 (Section 7(2))",
        "hi": "कंपनी अधिनियम धारा 7(2)"
      },
      "sourceReference": {
        "en": "Section 7(2) of Companies Act, 2013 & Form INC-11",
        "hi": "Section 7(2) of Companies Act, 2013 & Form INC-11"
      }
    }
  ],
  "warnings": [
    {
      "en": "Ensure the proposed company name does not violate registered trademarks on the IP India portal (ipindiaonline.gov.in) to avoid rejection in Part A.",
      "hi": "कंपनी शुरू करने के 180 दिनों के भीतर निदेशकों द्वारा फॉर्म INC-20A (व्यवसाय प्रारंभ करने की घोषणा) दाखिल करना अनिवार्य है। ऐसा न करने पर कंपनी बंद हो सकती है।"
    },
    {
      "en": "Professional attestation by a practicing Chartered Accountant (CA), Company Secretary (CS), or Cost Accountant (CMA) is legally mandatory.",
      "hi": "कंपनी का नाम किसी पंजीकृत ट्रेडमार्क या मौजूदा कंपनी के समान नहीं होना चाहिए, अन्यथा नाम अस्वीकृत हो जाएगा।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। कंपनी निगमन केवल भारत सरकार के कॉर्पोरेट कार्य मंत्रालय द्वारा किया जाता है।"
  }
},
  "karnataka-shop-establishment": {
  "id": "karnataka-shop-establishment",
  "title": {
    "en": "Shop & Commercial Establishment Registration (e-Karmika Karnataka)",
    "hi": "दुकान एवं वाणिज्यिक प्रतिष्ठान पंजीकरण (ई-कॉर्मिका कर्नाटक)"
  },
  "category": {
    "en": "Business & State Licensing",
    "hi": "व्यापार एवं राज्य लाइसेंसिंग"
  },
  "shortDescription": {
    "en": "Mandatory operating registration under the Karnataka Shops and Commercial Establishments Act, 1961 on the official e-Karmika portal.",
    "hi": "कर्नाटक में दुकान, कार्यालय, या वाणिज्यिक प्रतिष्ठान चलाने के लिए श्रम विभाग के ई-कॉर्मिका पोर्टल से अनिवार्य फॉर्म सी पंजीकरण प्रमाणपत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Regulated under the Karnataka Shops and Commercial Establishments Act, 1961 and Karnataka Rules, 1963 by the Department of Labour, Government of Karnataka. Any retail shop, office, software firm, hotel, or commercial establishment operating in Bengaluru, Mysuru, or anywhere in Karnataka must register within 30 days of commencing business on ekarmika.karnataka.gov.in to obtain the Form C Registration Certificate.",
    "hi": "कर्नाटक दुकान एवं वाणिज्यिक प्रतिष्ठान अधिनियम, 1961 के तहत अनिवार्य। कर्नाटक में व्यवसाय शुरू करने के 30 दिनों के भीतर ऑनलाइन आवेदन करना होता है। वरिष्ठ श्रम निरीक्षक द्वारा समीक्षा के बाद डिजिटल रूप से हस्ताक्षरित फॉर्म सी जारी किया जाता है।"
  },
  "authority": {
    "en": "Department of Labour, Government of Karnataka",
    "hi": "वरिष्ठ श्रम निरीक्षक, श्रम विभाग, कर्नाटक सरकार"
  },
  "department": {
    "en": "Department of Labour, Government of Karnataka",
    "hi": "श्रम विभाग, कर्नाटक सरकार (ई-कॉर्मिका)"
  },
  "source": {
    "en": "Department of Labour, Government of Karnataka",
    "hi": "कर्नाटक दुकान एवं वाणिज्यिक प्रतिष्ठान अधिनियम, 1961 (कर्नाटक अधिनियम सं. 8 1962)"
  },
  "officialSource": {
    "en": "Department of Labour, Government of Karnataka",
    "hi": "श्रम विभाग, कर्नाटक सरकार (ekarmika.karnataka.gov.in)"
  },
  "availability": {
    "en": "State Specific (karnataka)",
    "hi": "राज्य क्षेत्राधिकार (कर्नाटक राज्य)"
  },
  "onlineAvailable": {
    "en": "Fully Online (e-Karmika Portal)",
    "hi": "पूरी तरह ऑनलाइन (ई-कॉर्मिका पोर्टल)"
  },
  "officialPortal": {
    "name": {
      "en": "e-Karmika Portal (Department of Labour, Government of Karnataka)",
      "hi": "ई-कॉर्मिका पोर्टल (e-Karmika Karnataka Labour Department)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹300 (0 workers) | ₹600 (1 - 9 workers) | ₹1,200 (10 - 19 workers) | Scaled fee for 20+ workers",
      "hi": "0 कर्मचारी: ₹300 | 1 - 9 कर्मचारी: ₹600 - ₹1,500 | 10+ कर्मचारी: ₹3,000 - ₹10,000"
    },
    "verificationSource": {
      "en": "Karnataka Shops and Commercial Establishments Rules, 1963 Fee Schedule",
      "hi": "कर्नाटक दुकान एवं प्रतिष्ठान नियम 1963 दर अनुसूची"
    }
  },
  "feeInfo": {
    "en": "₹300 (0 workers) | ₹600 (1 - 9 workers) | ₹1,200 (10 - 19 workers) | Scaled fee for 20+ workers",
    "hi": "0 कर्मचारी: ₹300 | 1 - 9 कर्मचारी: ₹600 - ₹1,500 | 10+ कर्मचारी: ₹3,000 - ₹10,000"
  },
  "processingTime": {
    "timeText": {
      "en": "7 - 15 Working Days (Guaranteed under Karnataka Sakala Act)",
      "hi": "7 - 15 कार्य दिवस (सेवा सिंधु गारंटी समय-सीमा)"
    },
    "statutoryAct": {
      "en": "Karnataka Shops and Commercial Establishments Act, 1961",
      "hi": "कर्नाटक दुकान एवं वाणिज्यिक प्रतिष्ठान अधिनियम, 1961"
    }
  },
  "processingInfo": {
    "en": "7 - 15 Working Days (Guaranteed under Karnataka Sakala Act)",
    "hi": "7 - 15 कार्य दिवस (सेवा सिंधु गारंटी समय-सीमा)"
  },
  "eligibility": [
    {
      "en": "Any shop, commercial establishment, IT/ITES office, retail outlet, restaurant, or service business operating within Karnataka.",
      "hi": "कर्नाटक राज्य के भीतर स्थित कोई भी व्यावसायिक प्रतिष्ठान, दुकान, आईटी फर्म, या वाणिज्यिक कार्यालय।"
    },
    {
      "en": "Must apply within 30 days of commencing business operations.",
      "hi": "कर्नाटक में व्यवसाय शुरू करने के 30 दिनों के भीतर पंजीकरण अनिवार्य।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Proprietor / Managing Partner / Director Identity Proof",
        "hi": "मालिक / प्रबंध भागीदार / निदेशक का पहचान प्रमाण"
      },
      "type": {
        "en": "Aadhaar e-KYC / PAN",
        "hi": "स्व-सत्यापित प्रति"
      },
      "description": {
        "en": "Official identity proof of the owner or authorized signatory.",
        "hi": "मालिक या अधिकृत व्यक्ति का सरकारी पहचान पत्र।"
      },
      "commonExamples": {
        "en": "Aadhaar Card or PAN Card",
        "hi": "आधार कार्ड, पैन कार्ड, या पासपोर्ट"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Commercial Premises Proof (Rent Agreement or Property Tax Receipt)",
        "hi": "वाणिज्यिक परिसर का प्रमाण"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "पंजीकृत प्रति / उपयोगिता बिल"
      },
      "description": {
        "en": "Evidence of legal occupancy of the commercial address.",
        "hi": "दुकान या कार्यालय परिसर का वैध कानूनी कब्जा प्रमाण।"
      },
      "commonExamples": {
        "en": "Registered Lease Agreement, Commercial Electricity Bill, or BBMP Property Tax Challan",
        "hi": "पंजीकृत रेंट एग्रीमेंट या बीबीएमपी संपत्ति कर रसीद"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Trade Licence / BBMP / Local Municipality Licence (if available)",
        "hi": "व्यापार लाइसेंस / बीबीएमपी / स्थानीय निकाय लाइसेंस (यदि उपलब्ध हो)"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "सत्यापित प्रति"
      },
      "description": {
        "en": "Trade licence issued by Bruhat Bengaluru Mahanagara Palike or local municipal council.",
        "hi": "बृहत् बेंगलुरु महानगर पालिके (BBMP) या स्थानीय नगर पालिका से ट्रेड लाइसेंस।"
      },
      "commonExamples": {
        "en": "BBMP Trade Licence receipt",
        "hi": "बीबीएमपी ट्रेड लाइसेंस रसीद"
      },
      "isMandatory": false
    },
    {
      "name": {
        "en": "List of Employees with Designation and Wage Details",
        "hi": "पदनाम और वेतन विवरण सहित कर्मचारियों की सूची"
      },
      "type": {
        "en": "Self-Reported Form",
        "hi": "हस्ताक्षरित दस्तावेज़"
      },
      "description": {
        "en": "Details of all permanent and temporary workers employed.",
        "hi": "काम करने वाले सभी कर्मचारियों के नाम, पद और कार्य के घंटे।"
      },
      "commonExamples": {
        "en": "Employee register extract",
        "hi": "कर्मचारी सूची प्रपत्र"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Create Employer Account on e-Karmika Portal",
        "hi": "ई-कॉर्मिका पोर्टल (ekarmika.karnataka.gov.in) पर नियोक्ता खाता बनाएं"
      },
      "description": {
        "en": "Open https://ekarmika.karnataka.gov.in. Register as a 'New User / Employer' with your email, mobile number, and Aadhaar verification.",
        "hi": "आधिकारिक ई-कॉर्मिका पोर्टल पर जाएं और अपने मोबाइल नंबर और ईमेल से नियोक्ता प्रोफाइल पंजीकृत करें।"
      },
      "agencyOrPortal": {
        "en": "ekarmika.karnataka.gov.in",
        "hi": "ई-कॉर्मिका पोर्टल (ekarmika.karnataka.gov.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Karnataka Shops and Commercial Establishments Act, 1961",
        "hi": "ई-कॉर्मिका उपयोगकर्ता दिशानिर्देश"
      },
      "sourceReference": {
        "en": "Section 4 of Karnataka Act No. 8 of 1962",
        "hi": "Section 4 of Karnataka Act No. 8 of 1962"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "File Form A (Application for Registration of Establishment)",
        "hi": "फॉर्म ए (प्रतिष्ठान के पंजीकरण हेतु आवेदन) भरें"
      },
      "description": {
        "en": "Select 'New Registration Form A'. Enter establishment name, category of establishment (Shop / Commercial / Residential Hotel / IT), and date of commencement.",
        "hi": "प्रतिष्ठान का नाम, श्रेणी, पूरा पता, मालिक का विवरण और व्यवसाय प्रारंभ करने की तिथि दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "e-Karmika Form Engine",
        "hi": "ई-कॉर्मिका ऑनलाइन फॉर्म ए"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Karnataka Shops and Commercial Establishments Rules, 1963",
        "hi": "कर्नाटक दुकान अधिनियम 1961 धारा 4"
      },
      "sourceReference": {
        "en": "Rule 3 & Form A of Karnataka Rules, 1963",
        "hi": "Rule 3 & Form A of Karnataka Rules, 1963"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Enter Working Hours, Weekly Holiday & Employee Schedule",
        "hi": "कार्य के घंटे, साप्ताहिक अवकाश और कर्मचारी अनुसूची दर्ज करें"
      },
      "description": {
        "en": "Specify opening hours, closing hours, intervals for rest, and designated weekly holiday as mandated under Section 11 and Section 12 of the Karnataka Act.",
        "hi": "प्रतिष्ठान के खुलने और बंद होने का समय, विश्राम अंतराल, साप्ताहिक अवकाश का दिन और पुरुष/महिला कर्मचारियों की संख्या भरें।"
      },
      "agencyOrPortal": {
        "en": "e-Karmika Compliance Schedule",
        "hi": "कार्य नियम मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Karnataka Shops and Commercial Establishments Act, 1961 (Sections 11 & 12)",
        "hi": "अधिनियम की धारा 11 और 12"
      },
      "sourceReference": {
        "en": "Section 11 & Section 12 of Karnataka Act No. 8 of 1962",
        "hi": "Section 11 & Section 12 of Karnataka Act No. 8 of 1962"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Upload Commercial Lease, Premises Proof & Owner KYC",
        "hi": "वाणिज्यिक पट्टा, परिसर प्रमाण और मालिक का केवाईसी अपलोड करें"
      },
      "description": {
        "en": "Upload clear PDF scans of commercial lease deed/electricity bill, proprietor/partner PAN and Aadhaar, and partnership deed/incorporation certificate if applicable.",
        "hi": "आधार, पैन, रेंट एग्रीमेंट/संपत्ति कर रसीद और कर्मचारियों की हस्ताक्षरित सूची स्पष्ट पीडीएफ प्रारूप में अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "e-Karmika Document Gateway",
        "hi": "दस्तावेज़ अपलोड मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Department of Labour Karnataka Guidelines",
        "hi": "कर्नाटक श्रम दस्तावेज़ मानक"
      },
      "sourceReference": {
        "en": "e-Karmika Document Checklist Circular",
        "hi": "e-Karmika Document Checklist Circular"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Pay Statutory Registration Fee via Karnataka Khajane-II Gateway",
        "hi": "कर्नाटक खजाने-II गेटवे के माध्यम से वैधानिक पंजीकरण शुल्क का भुगतान करें"
      },
      "description": {
        "en": "Pay the statutory government fee (scaled based on number of employees: ₹300 for 0 workers, ₹600 for 1-9 workers, ₹1,200 for 10-19 workers) via Khajane-II integrated gateway.",
        "hi": "कर्मचारियों की संख्या के अनुसार कर्नाटक सरकार के खजाने-II गेटवे से ऑनलाइन सरकारी शुल्क का भुगतान करें।"
      },
      "agencyOrPortal": {
        "en": "Karnataka Khajane-II Payment Gateway",
        "hi": "कर्नाटक खजाने-II पेमेंट गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Karnataka Rules, 1963 (Schedule of Fees)",
        "hi": "कर्नाटक सरकारी दर तालिका"
      },
      "sourceReference": {
        "en": "Rule 3(2) Fee Table, Department of Labour",
        "hi": "Rule 3(2) Fee Table, Department of Labour"
      }
    },
    {
      "stepNumber": 6,
      "title": {
        "en": "Senior Labour Inspector Scrutiny & Download Form C Certificate",
        "hi": "वरिष्ठ श्रम निरीक्षक समीक्षा एवं फॉर्म सी पंजीकरण प्रमाणपत्र डाउनलोड करें"
      },
      "description": {
        "en": "The jurisdictional Senior Labour Inspector reviews the application. Upon approval, download the digitally signed Form C Registration Certificate with 5-year validity.",
        "hi": "श्रम निरीक्षक द्वारा अनुमोदन के बाद ई-कॉर्मिका पोर्टल से डिजिटल हस्ताक्षरित फॉर्म सी प्रमाणपत्र डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Jurisdictional Labour Officer & e-Karmika",
        "hi": "ई-कॉर्मिका डाउनलोड विंडो / सेवा सिंधु"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "7 - 15 Working Days (Karnataka Sakala Guarantee)",
        "hi": "7 - 15 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Karnataka Sakala Services Act, 2011",
        "hi": "सेवा सिंधु लोक सेवा गारंटी"
      },
      "sourceReference": {
        "en": "Rule 4 & Form C of Karnataka Rules, 1963",
        "hi": "Rule 4 & Form C of Karnataka Rules, 1963"
      },
      "officialTip": {
        "en": "Under Karnataka Sakala, shop registration must be approved or queried within 15 working days.",
        "hi": "Under Karnataka Sakala, shop registration must be approved or queried within 15 working days."
      }
    }
  ],
  "warnings": [
    {
      "en": "Operating a commercial establishment in Bengaluru or Karnataka without Form C registration is a statutory violation attracting fines under Section 30 of the Act.",
      "hi": "पंजीकरण प्रमाणपत्र (फॉर्म सी) को प्रतिष्ठान के किसी प्रमुख स्थान पर फ्रेम करवाकर प्रदर्शित करना अनिवार्य है।"
    },
    {
      "en": "Banks in Karnataka require the Form C Certificate or Udyam Registration to open a commercial Current Account.",
      "hi": "दुकान या कर्मचारियों की संख्या में किसी भी बदलाव की सूचना 15 दिनों के भीतर श्रम विभाग को देना आवश्यक है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। फॉर्म सी केवल कर्नाटक सरकार के श्रम विभाग द्वारा जारी किया जाता है।"
  }
},
  "delhi-shop-establishment": {
  "id": "delhi-shop-establishment",
  "title": {
    "en": "Delhi Shop & Commercial Establishment Registration (Labour CIS)",
    "hi": "दिल्ली दुकान एवं वाणिज्यिक प्रतिष्ठान पंजीकरण (लेबर सीआईएस)"
  },
  "category": {
    "en": "Business & State Licensing",
    "hi": "व्यापार एवं राज्य लाइसेंसिंग"
  },
  "shortDescription": {
    "en": "Mandatory operating registration under the Delhi Shops and Establishments Act, 1954 on the official Labour CIS portal.",
    "hi": "राष्ट्रीय राजधानी क्षेत्र दिल्ली में कोई भी दुकान, खुदरा आउटलेट या कॉर्पोरेट कार्यालय चलाने के लिए श्रम विभाग के पोर्टल से अनिवार्य पंजीकरण प्रमाणपत्र प्राप्त करें।"
  },
  "fullOverview": {
    "en": "Administered by the Labour Department, Government of NCT of Delhi under the Delhi Shops and Establishments Act, 1954. All shops, offices, consulting firms, and commercial establishments in Delhi must register within 90 days of commencing operations on labourcis.delhi.gov.in.",
    "hi": "दिल्ली दुकान एवं प्रतिष्ठान अधिनियम, 1954 के तहत अनिवार्य। दिल्ली में व्यवसाय शुरू करने के 90 दिनों के भीतर ऑनलाइन आवेदन किया जाता है। श्रम विभाग द्वारा सत्यापन के बाद डिजिटल पंजीकरण प्रमाण पत्र जारी होता है।"
  },
  "authority": {
    "en": "Labour Department, Government of NCT of Delhi",
    "hi": "श्रम आयुक्त कार्यालय, राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार"
  },
  "department": {
    "en": "Labour Department, Government of NCT of Delhi",
    "hi": "श्रम विभाग, राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार (GNCTD)"
  },
  "source": {
    "en": "Labour Department, Government of NCT of Delhi",
    "hi": "दिल्ली दुकान एवं प्रतिष्ठान अधिनियम, 1954 एवं दिल्ली नियम, 1954"
  },
  "officialSource": {
    "en": "Labour Department, Government of NCT of Delhi",
    "hi": "श्रम विभाग, दिल्ली सरकार (labourcis.nic.in)"
  },
  "availability": {
    "en": "State Specific (delhi)",
    "hi": "राज्य क्षेत्राधिकार (राष्ट्रीय राजधानी क्षेत्र दिल्ली)"
  },
  "onlineAvailable": {
    "en": "Fully Online (Delhi Labour CIS Portal)",
    "hi": "पूरी तरह ऑनलाइन (दिल्ली लेबर सीआईएस)"
  },
  "officialPortal": {
    "name": {
      "en": "Labour CIS (Government of NCT of Delhi)",
      "hi": "दिल्ली लेबर सीआईएस पोर्टल (Delhi Labour CIS Portal)"
    }
  },
  "fees": {
    "amountText": {
      "en": "₹50 - ₹500 (Scaled by employee count under Delhi statutory rules)",
      "hi": "निःशुल्क (₹0 सरकारी पंजीकरण शुल्क)"
    },
    "verificationSource": {
      "en": "Delhi Shops and Establishments Rules, 1954 Fee Schedule",
      "hi": "दिल्ली सरकार श्रम विभाग अधिसूचना"
    }
  },
  "feeInfo": {
    "en": "₹50 - ₹500 (Scaled by employee count under Delhi statutory rules)",
    "hi": "निःशुल्क (₹0 सरकारी पंजीकरण शुल्क)"
  },
  "processingTime": {
    "timeText": {
      "en": "5 - 15 Working Days",
      "hi": "तुरंत पावती | 1 - 3 कार्य दिवस में प्रमाणपत्र"
    },
    "statutoryAct": {
      "en": "Delhi Shops and Establishments Act, 1954",
      "hi": "दिल्ली दुकान एवं प्रतिष्ठान अधिनियम, 1954"
    }
  },
  "processingInfo": {
    "en": "5 - 15 Working Days",
    "hi": "तुरंत पावती | 1 - 3 कार्य दिवस में प्रमाणपत्र"
  },
  "eligibility": [
    {
      "en": "Any commercial establishment, shop, retail store, hotel, or office operating within the National Capital Territory of Delhi.",
      "hi": "दिल्ली (NCT) के भीतर स्थित कोई भी व्यावसायिक प्रतिष्ठान, दुकान, वाणिज्यिक कार्यालय या सेवा प्रदाता।"
    },
    {
      "en": "Must apply within 90 days of opening.",
      "hi": "दिल्ली में व्यवसाय शुरू करने के 90 दिनों के भीतर पंजीकरण अनिवार्य।"
    }
  ],
  "requiredDocuments": [
    {
      "name": {
        "en": "Aadhaar Card of the Proprietor / Partner",
        "hi": "मालिक / भागीदार का आधार कार्ड"
      },
      "type": {
        "en": "Aadhaar e-KYC",
        "hi": "पहचान एवं पते का प्रमाण"
      },
      "description": {
        "en": "Identity verification of owner.",
        "hi": "व्यवसाय के मालिक या अधिकृत व्यक्ति का आधार कार्ड।"
      },
      "commonExamples": {
        "en": "Aadhaar Card",
        "hi": "आधार कार्ड"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "Proof of Commercial Premises in Delhi",
        "hi": "दिल्ली में व्यावसायिक परिसर का प्रमाण"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "पंजीकृत प्रति / उपयोगिता बिल"
      },
      "description": {
        "en": "Commercial address proof.",
        "hi": "दिल्ली में व्यावसायिक पते का वैध कब्जा प्रमाण।"
      },
      "commonExamples": {
        "en": "Rent Agreement with Electricity Bill or Property Tax Receipt",
        "hi": "रेंट एग्रीमेंट, बिजली बिल, या संपत्ति कर रसीद"
      },
      "isMandatory": true
    },
    {
      "name": {
        "en": "PAN Card of the Business / Proprietor",
        "hi": "व्यवसाय / मालिक का पैन कार्ड"
      },
      "type": {
        "en": "Self-Attested Copy",
        "hi": "पहचान प्रमाण"
      },
      "description": {
        "en": "Tax identifier.",
        "hi": "इकाई या प्रोपराइटर का वैध पैन कार्ड।"
      },
      "commonExamples": {
        "en": "PAN Card",
        "hi": "पैन कार्ड"
      },
      "isMandatory": true
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "title": {
        "en": "Register on Delhi Labour CIS Portal",
        "hi": "दिल्ली लेबर सीआईएस पोर्टल (labourcis.nic.in) पर पंजीकरण करें"
      },
      "description": {
        "en": "Open https://labourcis.delhi.gov.in. Register as a citizen/employer with mobile number and email verification.",
        "hi": "आधिकारिक दिल्ली लेबर पोर्टल पर जाएं और नया नियोक्ता उपयोगकर्ता खाता बनाएं।"
      },
      "agencyOrPortal": {
        "en": "labourcis.delhi.gov.in",
        "hi": "दिल्ली लेबर सीआईएस पोर्टल (labourcis.nic.in)"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Delhi Shops and Establishments Act, 1954",
        "hi": "दिल्ली श्रम विभाग ई-सेवाएं"
      },
      "sourceReference": {
        "en": "Section 5 of Delhi Act No. 7 of 1954",
        "hi": "Section 5 of Delhi Act No. 7 of 1954"
      }
    },
    {
      "stepNumber": 2,
      "title": {
        "en": "Fill Form A for Registration of Establishment",
        "hi": "प्रतिष्ठान के पंजीकरण हेतु फॉर्म ए भरें"
      },
      "description": {
        "en": "Select 'New Registration Form A'. Provide establishment trade name, postal address in Delhi, category of business, and number of family/hired employees.",
        "hi": "दुकान/कार्यालय का नाम, दिल्ली का पूरा पता, मालिक का विवरण, व्यवसाय की प्रकृति और कर्मचारियों की संख्या दर्ज करें।"
      },
      "agencyOrPortal": {
        "en": "Delhi Labour CIS Engine",
        "hi": "दिल्ली लेबर ऑनलाइन फॉर्म ए"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "10 Minutes",
        "hi": "10 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Delhi Shops and Establishments Rules, 1954",
        "hi": "दिल्ली दुकान अधिनियम 1954 धारा 5"
      },
      "sourceReference": {
        "en": "Rule 3 & Form A of Delhi Rules, 1954",
        "hi": "Rule 3 & Form A of Delhi Rules, 1954"
      }
    },
    {
      "stepNumber": 3,
      "title": {
        "en": "Upload Commercial Premises Proof & Identity Proof",
        "hi": "वाणिज्यिक परिसर का प्रमाण और पहचान प्रमाण अपलोड करें"
      },
      "description": {
        "en": "Attach commercial electricity bill or rent agreement and proprietor PAN and Aadhaar card.",
        "hi": "आधार कार्ड, पैन कार्ड, रेंट एग्रीमेंट और बिजली बिल की स्पष्ट पीडीएफ प्रति अपलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Labour CIS Document Gateway",
        "hi": "दस्तावेज़ अपलोड मॉड्यूल"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 Minutes",
        "hi": "5 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Labour Department GNCTD Guidelines",
        "hi": "दिल्ली श्रम दस्तावेज़ मानक"
      },
      "sourceReference": {
        "en": "Delhi Citizen Charter for Labour Services",
        "hi": "Delhi Citizen Charter for Labour Services"
      }
    },
    {
      "stepNumber": 4,
      "title": {
        "en": "Pay Statutory Government Fee Online",
        "hi": "ऑनलाइन आवेदन जमा करें और पावती प्राप्त करें"
      },
      "description": {
        "en": "Pay the official fee via the integrated Delhi government e-payment gateway (scaled by employee count).",
        "hi": "सभी विवरणों की जांच करें और फॉर्म जमा करें। कोई सरकारी शुल्क देय नहीं है। आवेदन संदर्भ संख्या सहेजें।"
      },
      "agencyOrPortal": {
        "en": "Delhi Government Payment Gateway",
        "hi": "दिल्ली लेबर सबमिशन गेटवे"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "3 Minutes",
        "hi": "2 मिनट"
      },
      "mode": "online",
      "officialSource": {
        "en": "Delhi Shops and Establishments Rules, 1954 (Schedule I)",
        "hi": "दिल्ली ई-डिस्ट्रिक्ट मानक"
      },
      "sourceReference": {
        "en": "Rule 3(2) Fee Table, GNCTD",
        "hi": "Rule 3(2) Fee Table, GNCTD"
      }
    },
    {
      "stepNumber": 5,
      "title": {
        "en": "Download Digitally Signed Registration Certificate",
        "hi": "डिजिटल रूप से हस्ताक्षरित पंजीकरण प्रमाणपत्र डाउनलोड करें"
      },
      "description": {
        "en": "The jurisdictional Area Inspector reviews details. Upon approval, download the official Form C Registration Certificate with QR verification seal.",
        "hi": "अनुमोदन के बाद पोर्टल से क्यूआर कोड और डिजिटल हस्ताक्षर युक्त दिल्ली दुकान पंजीकरण प्रमाण पत्र डाउनलोड करें।"
      },
      "agencyOrPortal": {
        "en": "Labour Department, GNCTD",
        "hi": "दिल्ली लेबर सीआईएस डाउनलोड विंडो"
      },
      "isOnline": true,
      "estimatedDuration": {
        "en": "5 - 15 Working Days",
        "hi": "1 - 3 कार्य दिवस"
      },
      "mode": "online",
      "officialSource": {
        "en": "Delhi Right to Citizen Services Act",
        "hi": "दिल्ली लोक सेवा गारंटी"
      },
      "sourceReference": {
        "en": "Section 5(2) of Delhi Shops & Establishments Act",
        "hi": "Section 5(2) of Delhi Shops & Establishments Act"
      }
    }
  ],
  "warnings": [
    {
      "en": "Operating a commercial establishment in Delhi without registration beyond 90 days is a punishable offense under Section 38 of the Delhi Act.",
      "hi": "दिल्ली दुकान अधिनियम के तहत पंजीकरण प्रमाण पत्र को दुकान या कार्यालय के मुख्य द्वार/काउंटर पर प्रदर्शित करना अनिवार्य है।"
    }
  ],
  "disclaimer": {
    "en": "Civic Task Navigator is an independent navigation platform providing guidance to official government portals. We are not a government agency and do not collect user data or charge service fees.",
    "hi": "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित नागरिक गाइड है। पंजीकरण प्रमाणपत्र दिल्ली सरकार के श्रम विभाग द्वारा जारी किया जाता है।"
  }
},
};

export function getServiceTranslation(serviceId: string): ServiceTranslationItem | undefined {
  return SERVICE_TRANSLATIONS[serviceId];
}
