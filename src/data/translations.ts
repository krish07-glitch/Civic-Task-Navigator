import { LanguageOption, SupportedLanguage } from "@/types/civic";

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
];

export interface UiDictionary {
  brandTagline: string;
  badgePublicTech: string;
  badgeOfficialVerification: string;
  heroHeadlinePre: string;
  heroHeadlineHighlight: string;
  heroHeadlinePost: string;
  heroSubtitle: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchHelper: string;
  locationLabel: string;
  locationAllIndia: string;
  selectState: string;
  selectDistrict: string;
  findProcedureBtn: string;
  popularSearchesLabel: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  commonServicesTitle: string;
  commonServicesSubtitle: string;
  officialPortalsBtn: string;
  disclaimerNote: string;
  allCategories: string;
  filterByState: string;
  verifiedGovBadge: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, UiDictionary> = {
  en: {
    brandTagline: "Simplifying Indian Civic Procedures",
    badgePublicTech: "CITIZEN CIVIC TECH • 100% FREE",
    badgeOfficialVerification: "Direct Official .gov.in Portals",
    heroHeadlinePre: "What government service do you",
    heroHeadlineHighlight: "need help with?",
    heroHeadlinePost: "",
    heroSubtitle:
      "Civic Task Navigator helps you understand government procedures in plain language and directs you to official Indian government portals (.gov.in / .nic.in).",
    searchLabel: "What government service do you need help with?",
    searchPlaceholder: "e.g. I want to apply for a driving licence, update Aadhaar address...",
    searchHelper: "Describe any central, state, or municipal civic procedure in plain words",
    locationLabel: "Location / Jurisdiction",
    locationAllIndia: "All India (Central Services)",
    selectState: "Select State",
    selectDistrict: "Select District",
    findProcedureBtn: "Find My Procedure",
    popularSearchesLabel: "Common queries:",
    howItWorksTitle: "How Civic Task Navigator Works in 3 Simple Steps",
    howItWorksSubtitle:
      "We bridge the gap between complex official regulations and citizens through transparent, verified procedural guidance.",
    commonServicesTitle: "Common Indian Civic Services & Official Roadmaps",
    commonServicesSubtitle:
      "Explore step-by-step procedures for Aadhaar, driving licences, certificates, voter services, and business registrations.",
    officialPortalsBtn: "Verified .gov.in Portals",
    disclaimerNote:
      "Civic Task Navigator is an independent citizen advisory guide. We are not a government agency. Always verify that your destination is an official government portal ending in .gov.in or .nic.in.",
    allCategories: "All Categories",
    filterByState: "Filter by State",
    verifiedGovBadge: "Verified .gov.in Portal",
  },
  hi: {
    brandTagline: "सरकारी प्रक्रियाओं को समझें आसान भाषा में",
    badgePublicTech: "नागरिक सेवा गाइड • 100% निःशुल्क",
    badgeOfficialVerification: "आधिकारिक .gov.in पोर्टल्स",
    heroHeadlinePre: "आपको किस सरकारी सेवा में",
    heroHeadlineHighlight: "सहायता चाहिए?",
    heroHeadlinePost: "",
    heroSubtitle:
      "सिविक टास्क नेविगेटर आपको सरकारी प्रक्रियाओं को सरल भाषा में समझने में मदद करता है और आधिकारिक सरकारी पोर्टल्स (.gov.in / .nic.in) पर निर्देशित करता है।",
    searchLabel: "आपको किस सरकारी सेवा में सहायता चाहिए?",
    searchPlaceholder: "उदा. मुझे ड्राइविंग लाइसेंस बनवाना है, आधार में पता बदलना है...",
    searchHelper: "केंद्रीय, राज्य या नगर निगम की किसी भी सेवा को अपनी भाषा में लिखें",
    locationLabel: "स्थान / राज्य",
    locationAllIndia: "अखिल भारतीय (केंद्रीय सेवाएं)",
    selectState: "राज्य चुनें",
    selectDistrict: "ज़िला चुनें",
    findProcedureBtn: "प्रक्रिया खोजें",
    popularSearchesLabel: "लोकप्रिय खोजें:",
    howItWorksTitle: "3 आसान चरणों में सरकारी प्रक्रियाएं समझें",
    howItWorksSubtitle:
      "हम जटिल नियमों और नागरिकों के बीच की दूरी को पारदर्शी और प्रामाणिक मार्गदर्शन से समाप्त करते हैं।",
    commonServicesTitle: "प्रमुख भारतीय सरकारी सेवाएं एवं रोडमैप",
    commonServicesSubtitle:
      "आधार, ड्राइविंग लाइसेंस, आय/जाति प्रमाण पत्र और व्यापार पंजीकरण के लिए चरणबद्ध गाइड देखें।",
    officialPortalsBtn: "प्रमाणित .gov.in पोर्टल्स",
    disclaimerNote:
      "सिविक टास्क नेविगेटर एक स्वतंत्र नागरिक मार्गदर्शिका है। हम सरकारी एजेंसी नहीं हैं। हमेशा सुनिश्चित करें कि गंतव्य .gov.in या .nic.in पर समाप्त होने वाली आधिकारिक वेबसाइट हो।",
    allCategories: "सभी श्रेणियां",
    filterByState: "राज्य अनुसार",
    verifiedGovBadge: "प्रमाणित .gov.in पोर्टल",
  },
  mr: {
    brandTagline: "शासकीय प्रक्रिया समजून घ्या सोप्या मराठीत",
    badgePublicTech: "नागरिक सहाय्य प्लॅटफॉर्म • मोफत",
    badgeOfficialVerification: "अधिकृत .gov.in पोर्टल्स",
    heroHeadlinePre: "तुम्हाला कोणत्या शासकीय सेवेमध्ये",
    heroHeadlineHighlight: "मदत हवी आहे?",
    heroHeadlinePost: "",
    heroSubtitle:
      "सिविक टास्क नेव्हिगेटर आपल्याला शासकीय कार्यपद्धती सोप्या भाषेत समजून घेण्यास मदत करतो आणि अधिकृत सरकारी पोर्टल्सकडे (.gov.in / .nic.in) मार्गदर्शन करतो.",
    searchLabel: "तुम्हाला कोणत्या शासकीय सेवेमध्ये मदत हवी आहे?",
    searchPlaceholder: "उदा. मला ड्रायव्हिंग लायसन्स काढायचे आहे, आधार कार्ड अपडेट करायचे आहे...",
    searchHelper: "आपले काम साध्या शब्दांत सांगा (उदा. मुंबईत व्यवसाय, जात प्रमाणपत्र)",
    locationLabel: "स्थान / राज्य",
    locationAllIndia: "संपूर्ण भारत (केंद्रीय सेवा)",
    selectState: "राज्य निवडा",
    selectDistrict: "जिल्हा निवडा",
    findProcedureBtn: "प्रक्रिया शोधा",
    popularSearchesLabel: "वारंवार विचारले जाणारे प्रश्न:",
    howItWorksTitle: "३ सोप्या टप्प्यांत शासकीय प्रक्रिया पूर्ण करा",
    howItWorksSubtitle:
      "सरकारी कार्यालयांचे फेरे आणि चुकीच्या अर्जांपासून नागरिकांची सुटका करणारी प्रमाणित माहिती प्रणाली.",
    commonServicesTitle: "प्रमुख शासकीय सेवा आणि सविस्तर माहिती",
    commonServicesSubtitle:
      "आपले सरकार, आधार, आरटीओ लायसन्स, जात व उत्पन्न प्रमाणपत्र आणि योजनांची संपूर्ण मार्गदर्शिका.",
    officialPortalsBtn: "अधिकृत .gov.in पोर्टल्स",
    disclaimerNote:
      "सिविक टास्क नेव्हिगेटर हे नागरिकांच्या मदतीसाठी स्वतंत्र मार्गदर्शक व्यासपीठ आहे. आम्ही कोणतेही शासकीय शुल्क आकारत नाही. नेहमी .gov.in किंवा .nic.in असलेल्या अधिकृत संकेतस्थळांची खात्री करा.",
    allCategories: "सर्व श्रेणी",
    filterByState: "राज्यानुसार",
    verifiedGovBadge: "अधिकृत .gov.in पोर्टल",
  },
  gu: {
    brandTagline: "સરકારી પ્રક્રિયાઓ સમજો સરળ ભાષામાં",
    badgePublicTech: "નાગરિક સેવા ગાઇડ • ૧૦૦% મફત",
    badgeOfficialVerification: "સત્તાવાર .gov.in પોર્ટલ",
    heroHeadlinePre: "તમને કઈ સરકારી સેવામાં",
    heroHeadlineHighlight: "મદદ જોઈએ છે?",
    heroHeadlinePost: "",
    heroSubtitle:
      "સિવિક ટાસ્ક નેવિગેટર તમને સરકારી પ્રક્રિયાઓ સરળ ભાષામાં સમજવામાં મદદ કરે છે અને સત્તાવાર સરકારી પોર્ટલ (.gov.in / .nic.in) પર માર્ગદર્શન આપે છે.",
    searchLabel: "તમને કઈ સરકારી સેવામાં મદદ જોઈએ છે?",
    searchPlaceholder: "દા.ત. ડ્રાઇવિંગ લાયસન્સ માટે અરજી કરવી છે, આધાર કાર્ડ અપડેટ...",
    searchHelper: "કેન્દ્રીય અથવા રાજ્ય સરકારની કોઈ પણ પ્રક્રિયા વિશે પૂછો",
    locationLabel: "સ્થળ / રાજ્ય",
    locationAllIndia: "સમગ્ર ભારત (કેન્દ્રીય સેવાઓ)",
    selectState: "રાજ્ય પસંદ કરો",
    selectDistrict: "જિલ્લો પસંદ કરો",
    findProcedureBtn: "પ્રક્રિયા શોધો",
    popularSearchesLabel: "લોકપ્રિય શોધો:",
    howItWorksTitle: "૩ સરળ પગલાંમાં સરકારી કામકાજ સમજો",
    howItWorksSubtitle: "સ્પષ્ટ દસ્તાવેજ યાદી અને ફી સાથે સરકારી કામ સરળ બનાવો.",
    commonServicesTitle: "મહત્વપૂર્ણ સરકારી સેવાઓ અને રોડમેપ",
    commonServicesSubtitle: "આધાર, ડ્રાઇવિંગ લાયસન્સ, આવકનું પ્રમાણપત્ર અને જીએસટી નોંધણી.",
    officialPortalsBtn: "સત્તાવાર .gov.in પોર્ટલ્સ",
    disclaimerNote:
      "સિવિક ટાસ્ક નેવિગેટર એક સ્વતંત્ર નાગરિક માર્ગદર્શિકા છે. હંમેશા .gov.in અથવા .nic.in સાથેની સત્તાવાર વેબસાઇટ્સની ચકાસણી કરો.",
    allCategories: "બધી શ્રેણીઓ",
    filterByState: "રાજ્ય મુજબ",
    verifiedGovBadge: "સત્તાવાર પોર્ટલ",
  },
  ta: {
    brandTagline: "அரசு நடைமுறைகளை எளிதாகப் புரிந்துகொள்ளுங்கள்",
    badgePublicTech: "குடிமக்கள் வழிகாட்டி • 100% இலவசம்",
    badgeOfficialVerification: "அதிகாரப்பூர்வ .gov.in இணையதளங்கள்",
    heroHeadlinePre: "எந்த அரசு சேவையில் உங்களுக்கு",
    heroHeadlineHighlight: "உதவி தேவை?",
    heroHeadlinePost: "",
    heroSubtitle:
      "சிவிக் டாஸ்க் நேவிகேட்டர் அரசு நடைமுறைகளை எளிய மொழியில் புரிந்துகொள்ள உதவுகிறது மற்றும் அதிகாரப்பூர்வ இணையதளங்களுக்கு (.gov.in / .nic.in) வழிகாட்டுகிறது.",
    searchLabel: "எந்த அரசு சேவையில் உங்களுக்கு உதவி தேவை?",
    searchPlaceholder: "எ.கா. ஓட்டுநர் உரிமம் பெறுவது எப்படி, ஆதார் முகவரி மாற்றம்...",
    searchHelper: "எந்தவொரு மத்திய அல்லது மாநில அரசு சேவையையும் தேடுங்கள்",
    locationLabel: "இடம் / மாநிலம்",
    locationAllIndia: "அனைத்திந்திய சேவை (மத்திய அரசு)",
    selectState: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    selectDistrict: "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்",
    findProcedureBtn: "நடைமுறையைக் கண்டறியவும்",
    popularSearchesLabel: "பிரபலமான தேடல்கள்:",
    howItWorksTitle: "3 எளிய படிகளில் அரசு நடைமுறைகள்",
    howItWorksSubtitle: "தேவையான ஆவணங்கள் மற்றும் கட்டணங்களை எளிதாக அறிந்து கொள்ளுங்கள்.",
    commonServicesTitle: "முக்கிய அரசு சேவைகள் மற்றும் வழிகாட்டிகள்",
    commonServicesSubtitle: "ஆதார், ஓட்டுநர் உரிமம், சாதி/வருமான சான்றிதழ் போன்ற சேவைகள்.",
    officialPortalsBtn: "அதிகாரப்பூர்வ .gov.in இணையதளங்கள்",
    disclaimerNote:
      "சிவிக் டாஸ்க் நேவிகேட்டர் ஒரு சுயாதீன வழிகாட்டியாகும். .gov.in அல்லது .nic.in என முடிவடையும் அரசு இணையதளங்களை எப்போதும் சரிபார்க்கவும்.",
    allCategories: "அனைத்து வகைகள்",
    filterByState: "மாநில வாரியாக",
    verifiedGovBadge: "அங்கீகரிக்கப்பட்ட இணையதளம்",
  },
  te: {
    brandTagline: "ప్రభుత్వ విధానాలను సరళమైన భాషలో అర్థం చేసుకోండి",
    badgePublicTech: "పౌర సేవల గైడ్ • 100% ఉచితం",
    badgeOfficialVerification: "అధికారిక .gov.in పోర్టల్స్",
    heroHeadlinePre: "మీకు ఏ ప్రభుత్వ సేవలో",
    heroHeadlineHighlight: "సహాయం కావాలి?",
    heroHeadlinePost: "",
    heroSubtitle:
      "సివిక్ టాస్క్ నావిగేటర్ ప్రభుత్వ విధానాలను సులభంగా అర్థం చేసుకోవడంలో సహాయపడుతుంది మరియు అధికారిక పోర్టల్స్ (.gov.in / .nic.in) వైపు నిర్దేశిస్తుంది.",
    searchLabel: "మీకు ఏ ప్రభుత్వ సేవలో సహాయం కావాలి?",
    searchPlaceholder: "ఉదా. డ్రైవింగ్ లైసెన్స్ దరఖాస్తు, ఆధార్ చిరునామా మార్పు...",
    searchHelper: "కేంద్ర, రాష్ట్ర లేదా మునిసిపల్ విధానాన్ని మీ భాషలో టైప్ చేయండి",
    locationLabel: "ప్రాంతం / రాష్ట్రం",
    locationAllIndia: "అఖిల భారత (కేంద్ర ప్రభుత్వ సేవలు)",
    selectState: "రాష్ట్రాన్ని ఎంచుకోండి",
    selectDistrict: "జిల్లాను ఎంచుకోండి",
    findProcedureBtn: "విధానాన్ని కనుగొనండి",
    popularSearchesLabel: "జనాదరణ పొందిన శోధనలు:",
    howItWorksTitle: "3 సాధారణ దశల్లో ప్రభుత్వ సేవలు",
    howItWorksSubtitle: "కావలసిన పత్రాలు, ఫీజుల వివరాలను స్పష్టంగా తెలుసుకోండి.",
    commonServicesTitle: "ప్రధాన ప్రభుత్వ సేవలు మరియు మార్గదర్శకాలు",
    commonServicesSubtitle: "ఆధార్, డ్రైవింగ్ లైసెన్స్, కుల/ఆదాయ ధృవీకరణ పత్రాలు.",
    officialPortalsBtn: "అధికారిక .gov.in పోర్టల్స్",
    disclaimerNote:
      "సివిక్ టాస్క్ నావిగేటర్ ఒక స్వతంత్ర సమాచార వేదిక. అధికారిక .gov.in లేదా .nic.in వెబ్‌సైట్‌లను ఎల్లప్పుడూ ధృవీకరించుకోండి.",
    allCategories: "అన్ని విభాగాలు",
    filterByState: "రాష్ట్రాల వారీగా",
    verifiedGovBadge: "ధృవీకరించబడిన పోర్టల్",
  },
  bn: {
    brandTagline: "সহজ ভাষায় সরকারি নিয়ম ও পদ্ধতি বুঝুন",
    badgePublicTech: "নাগরিক গাইড • ১০০% বিনামূল্যে",
    badgeOfficialVerification: "অফিসিয়াল .gov.in পোর্টাল",
    heroHeadlinePre: "আপনার কোন সরকারি সেবায়",
    heroHeadlineHighlight: "সাহায্য প্রয়োজন?",
    heroHeadlinePost: "",
    heroSubtitle:
      "সিভিক টাস্ক নেভিগেটর আপনাকে সরকারি নিয়মকানুন সহজ ভাষায় বুঝতে সাহায্য করে এবং অফিসিয়াল সরকারি পোর্টালে (.gov.in / .nic.in) নির্দেশ করে।",
    searchLabel: "আপনার কোন সরকারি সেবায় সাহায্য প্রয়োজন?",
    searchPlaceholder: "যেমন: ড্রাইভিং লাইসেন্স আবেদন, আধার কার্ড আপডেট...",
    searchHelper: "যেকোনো কেন্দ্রীয় বা রাজ্য সরকারি পরিষেবা অনুসন্ধান করুন",
    locationLabel: "অবস্থান / রাজ্য",
    locationAllIndia: "সমগ্র ভারত (কেন্দ্রীয় পরিষেবা)",
    selectState: "রাজ্য নির্বাচন করুন",
    selectDistrict: "জেলা নির্বাচন করুন",
    findProcedureBtn: "পদ্ধতি খুঁজুন",
    popularSearchesLabel: "জনপ্রিয় অনুসন্ধান:",
    howItWorksTitle: "৩টি সহজ ধাপে সরকারি পরিষেবা",
    howItWorksSubtitle: "প্রয়োজনীয় নথিপত্র এবং সরকারি ফির স্পষ্ট তথ্য জেনে নিন।",
    commonServicesTitle: "প্রয়োজনীয় সরকারি পরিষেবা ও রোডম্যাপ",
    commonServicesSubtitle: "আধার, ড্রাইভিং লাইসেন্স, জাতি/আয়ের শংসাপত্র ও স্কলারশিপ।",
    officialPortalsBtn: "অফিসিয়াল .gov.in পোর্টাল",
    disclaimerNote:
      "সিভিক টাস্ক নেভিগেটর একটি স্বাধীন নাগরিক নির্দেশিকা। সর্বদা নিশ্চিত করুন যে ওয়েবসাইটটি .gov.in বা .nic.in ডোমেনের।",
    allCategories: "সকল বিভাগ",
    filterByState: "রাজ্য অনুযায়ী",
    verifiedGovBadge: "অফিসিয়াল পোর্টাল",
  },
  kn: {
    brandTagline: "ಸರ್ಕಾರಿ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
    badgePublicTech: "ನಾಗರಿಕ ಸೇವಾ ಮಾರ್ಗದರ್ಶಿ • ಉಚಿತ",
    badgeOfficialVerification: "ಅಧಿಕೃತ .gov.in ಪೋರ್ಟಲ್‌ಗಳು",
    heroHeadlinePre: "ನಿಮಗೆ ಯಾವ ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲಿ",
    heroHeadlineHighlight: "ಸಹಾಯ ಬೇಕು?",
    heroHeadlinePost: "",
    heroSubtitle:
      "ಸಿವಿಕ್ ಟಾಸ್ಕ್ ನ್ಯಾವಿಗೇಟರ್ ಸರ್ಕಾರಿ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳಿಗೆ (.gov.in / .nic.in) ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    searchLabel: "ನಿಮಗೆ ಯಾವ ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲಿ ಸಹಾಯ ಬೇಕು?",
    searchPlaceholder: "ಉದಾ. ಚಾಲನಾ ಪರವಾನಗಿ ಅರ್ಜಿ, ಆಧಾರ್ ವಿಳಾಸ ಬದಲಾವಣೆ...",
    searchHelper: "ಯಾವುದೇ ಕೇಂದ್ರ ಅಥವಾ ರಾಜ್ಯ ಸರ್ಕಾರಿ ಸೇವೆಯನ್ನು ಹುಡುಕಿ",
    locationLabel: "ಸ್ಥಳ / ರಾಜ್ಯ",
    locationAllIndia: "ಸಮಗ್ರ ಭಾರತ (ಕೇಂದ್ರ ಸರ್ಕಾರಿ ಸೇವೆಗಳು)",
    selectState: "ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ",
    selectDistrict: "ಜಿಲ್ಲೆ ಆಯ್ಕೆಮಾಡಿ",
    findProcedureBtn: "ಪ್ರಕ್ರಿಯೆ ಹುಡುಕಿ",
    popularSearchesLabel: "ಜನಪ್ರಿಯ ಹುಡುಕಾಟಗಳು:",
    howItWorksTitle: "೩ ಸುಲಭ ಹಂತಗಳಲ್ಲಿ ಸರ್ಕಾರಿ ಸೇವೆಗಳು",
    howItWorksSubtitle: "ಅಗತ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಅಧಿಕೃತ ಶುಲ್ಕಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ.",
    commonServicesTitle: "ಪ್ರಮುಖ ನಾಗರಿಕ ಸೇವೆಗಳು ಮತ್ತು ಹಂತಗಳು",
    commonServicesSubtitle: "ಆಧಾರ್, ವಾಹನ ನೋಂದಣಿ, ಆದಾಯ/ಜಾತಿ ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ಸ್ಕಾಲರ್‌ಶಿಪ್.",
    officialPortalsBtn: "ಅಧಿಕೃತ .gov.in ಪೋರ್ಟಲ್‌ಗಳು",
    disclaimerNote:
      "ಸಿವಿಕ್ ಟಾಸ್ಕ್ ನ್ಯಾವಿಗೇಟರ್ ಸ್ವತಂತ್ರ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ. ಅಧಿಕೃತ .gov.in ಅಥವಾ .nic.in ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    filterByState: "ರಾಜ್ಯವಾರು",
    verifiedGovBadge: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್",
  },
  ml: {
    brandTagline: "സർക്കാർ നടപടിക്രമങ്ങൾ ലളിതമായി മനസ്സിലാക്കാം",
    badgePublicTech: "പൗര സേവന ഗൈഡ് • 100% സൗജന്യം",
    badgeOfficialVerification: "ഔദ്യോഗിക .gov.in പോർട്ടലുകൾ",
    heroHeadlinePre: "ഏത് സർക്കാർ സേവനത്തിലാണ് നിങ്ങൾക്ക്",
    heroHeadlineHighlight: "സഹായം വേണ്ടത്?",
    heroHeadlinePost: "",
    heroSubtitle:
      "സിവിക് ടാസ്ക് നാവിഗേറ്റർ സർക്കാർ നടപടിക്രമങ്ങൾ ലളിതമായ ഭാഷയിൽ മനസ്സിലാക്കാനും ഔദ്യോഗിക പോർട്ടലുകളിലേക്ക് (.gov.in / .nic.in) വഴിതിരിച്ചുവിടാനും സഹായിക്കുന്നു.",
    searchLabel: "ഏത് സർക്കാർ സേവനത്തിലാണ് നിങ്ങൾക്ക് സഹായം വേണ്ടത്?",
    searchPlaceholder: "ഉദാ. ഡ്രൈവിംഗ് ലൈസൻസ് അപേക്ഷ, ആധാർ വിലാസം മാറ്റം...",
    searchHelper: "ഏതൊരു കേന്ദ്ര, സംസ്ഥാന അല്ലെങ്കിൽ മുനിസിപ്പൽ നടപടിക്രമവും തിരയുക",
    locationLabel: "സ്ഥലം / സംസ്ഥാനം",
    locationAllIndia: "അഖിലേന്ത്യാ തലം (കേന്ദ്ര സേവനങ്ങൾ)",
    selectState: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    selectDistrict: "ജില്ല തിരഞ്ഞെടുക്കുക",
    findProcedureBtn: "നടപടിക്രമം കണ്ടെത്തുക",
    popularSearchesLabel: "പ്രധാന തിരച്ചിലുകൾ:",
    howItWorksTitle: "3 ലളിതമായ ഘട്ടങ്ങളിലൂടെ സർക്കാർ സേവനങ്ങൾ",
    howItWorksSubtitle: "ആവശ്യമായ രേഖകളും യഥാർത്ഥ ഫീസും കൃത്യമായി അറിയാം.",
    commonServicesTitle: "പ്രധാന സർക്കാർ സേവനങ്ങളും ഘട്ടങ്ങളും",
    commonServicesSubtitle: "ആധാർ, ഡ്രൈവിംഗ് ലൈസൻസ്, റവന്യൂ സർട്ടിഫിക്കറ്റുകൾ, പാസ്പോർട്ട്.",
    officialPortalsBtn: "ഔദ്യോഗിക .gov.in പോർട്ടലുകൾ",
    disclaimerNote:
      "സിവിക് ടാസ്ക് നാവിഗേറ്റർ ഒരു സ്വതന്ത്ര പൗര മാർഗ്ഗനിർദ്ദേശക പ്ലാറ്റ്‌ഫോമാണ്. സന്ദർശിക്കുന്ന സൈറ്റ് .gov.in അല്ലെങ്കിൽ .nic.in ആണെന്ന് ഉറപ്പുവരുത്തുക.",
    allCategories: "എല്ലാ വിഭാഗങ്ങളും",
    filterByState: "സംസ്ഥാനം തിരിച്ച്",
    verifiedGovBadge: "ഔദ്യോഗിക പോർട്ടൽ",
  },
  pa: {
    brandTagline: "ਸਰਕਾਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਸਰਲ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝੋ",
    badgePublicTech: "ਨਾਗਰਿਕ ਸੇਵਾ ਗਾਈਡ • 100% ਮੁਫ਼ਤ",
    badgeOfficialVerification: "ਅਧਿਕਾਰਤ .gov.in ਪੋਰਟਲ",
    heroHeadlinePre: "ਤੁਹਾਨੂੰ ਕਿਸ ਸਰਕਾਰੀ ਸੇਵਾ ਵਿੱਚ",
    heroHeadlineHighlight: "ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
    heroHeadlinePost: "",
    heroSubtitle:
      "ਸਿਵਿਕ ਟਾਸਕ ਨੈਵੀਗੇਟਰ ਸਰਕਾਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਆਸਾਨ ਸ਼ਬਦਾਂ ਵਿੱਚ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਅਤੇ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਪੋਰਟਲਾਂ (.gov.in / .nic.in) ਵੱਲ ਅਗਵਾਈ ਕਰਦਾ ਹੈ।",
    searchLabel: "ਤੁਹਾਨੂੰ ਕਿਸ ਸਰਕਾਰੀ ਸੇਵਾ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
    searchPlaceholder: "ਜਿਵੇਂ: ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਬਣਵਾਉਣਾ, ਆਧਾਰ ਕਾਰਡ ਅੱਪਡੇਟ...",
    searchHelper: "ਕਿਸੇ ਵੀ ਕੇਂਦਰੀ ਜਾਂ ਰਾਜ ਸਰਕਾਰ ਦੀ ਸੇਵਾ ਬਾਰੇ ਪੁੱਛੋ",
    locationLabel: "ਸਥਾਨ / ਰਾਜ",
    locationAllIndia: "ਸਮੁੱਚਾ ਭਾਰਤ (ਕੇਂਦਰੀ ਸੇਵਾਵਾਂ)",
    selectState: "ਰਾਜ ਚੁਣੋ",
    selectDistrict: "ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ",
    findProcedureBtn: "ਪ੍ਰਕਿਰਿਆ ਲੱਭੋ",
    popularSearchesLabel: "ਪ੍ਰਮੁੱਖ ਖੋਜਾਂ:",
    howItWorksTitle: "3 ਆਸਾਨ ਕਦਮਾਂ ਵਿੱਚ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ",
    howItWorksSubtitle: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ਾਂ ਅਤੇ ਸਰਕਾਰੀ ਫੀਸਾਂ ਦੀ ਸਹੀ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ।",
    commonServicesTitle: "ਮਹੱਤਵਪੂਰਨ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਅਤੇ ਰੋਡਮੈਪ",
    commonServicesSubtitle: "ਆਧਾਰ, ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ, ਆਮਦਨ ਸਰਟੀਫਿਕੇਟ ਅਤੇ ਵੋਟਰ ਸੇਵਾਵਾਂ।",
    officialPortalsBtn: "ਅਧਿਕਾਰਤ .gov.in ਪੋਰਟਲ",
    disclaimerNote:
      "ਸਿਵਿਕ ਟਾਸਕ ਨੈਵੀਗੇਟਰ ਇੱਕ ਸੁਤੰਤਰ ਨਾਗਰਿਕ ਗਾਈਡ ਹੈ। ਹਮੇਸ਼ਾ .gov.in ਜਾਂ .nic.in ਡੋਮੇਨ ਵਾਲੀਆਂ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।",
    allCategories: "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ",
    filterByState: "ਰਾਜ ਅਨੁਸਾਰ",
    verifiedGovBadge: "ਅਧਿਕਾਰਤ ਪੋਰਟਲ",
  },
};
