import React from "react";
import { CompassIcon, ShieldCheckIcon } from "./Icons";
import { SupportedLanguage } from "@/types/civic";

interface FooterProps {
  currentLang?: SupportedLanguage;
}

const FOOTER_DATA: Record<SupportedLanguage, {
  purpose: string;
  badgeFree: string;
  badgeFocus: string;
  categoriesTitle: string;
  categories: { label: string; href: string }[];
  toolsTitle: string;
  tools: { label: string; href: string }[];
  disclaimer: string;
  copyright: string;
}> = {
  en: {
    purpose: "Empowering Indian citizens to navigate complex central, state, and municipal procedures with complete clarity, verified document checklists, and direct official .gov.in routing.",
    badgeFree: "100% Free Public Citizen Guide",
    badgeFocus: "Focusing on Pan-India & State Civic Services",
    categoriesTitle: "Indian Civic Services",
    categories: [
      { label: "Aadhaar Update & PVC Card", href: "#services" },
      { label: "Driving Licence (Sarathi Parivahan)", href: "#services" },
      { label: "Udyam MSME & GST Registration", href: "#services" },
      { label: "State Revenue & Income Certificates", href: "#services" },
      { label: "Indian Passport (Passport Seva)", href: "#services" },
      { label: "Voter ID Registration (Form 6)", href: "#services" },
    ],
    toolsTitle: "Citizen Tools",
    tools: [
      { label: "How Roadmaps Work", href: "#how-it-works" },
      { label: "Natural-Language Task Search", href: "#search-section" },
      { label: "Document Readiness Checklists", href: "#services" },
      { label: "Official .gov.in Portals Directory", href: "#services" },
    ],
    disclaimer: "Civic Task Navigator is an independent open-access citizen advisory platform. It is not affiliated with or endorsed by any government ministry. All links direct exclusively to official government portals ending in .gov.in or .nic.in.",
    copyright: "Civic Task Navigator • Public Interest Technology for Citizens of India",
  },
  hi: {
    purpose: "भारतीय नागरिकों को स्पष्टता, सत्यापित दस्तावेज़ चेकलिस्ट और सीधे आधिकारिक .gov.in रूटिंग के साथ जटिल केंद्रीय, राज्य और नगर निगम प्रक्रियाओं को समझने में सशक्त बनाना।",
    badgeFree: "100% निःशुल्क नागरिक मार्गदर्शिका",
    badgeFocus: "अखिल भारतीय एवं राज्य सेवाओं पर केंद्रित",
    categoriesTitle: "भारतीय नागरिक सेवाएं",
    categories: [
      { label: "आधार अपडेट और पीवीसी कार्ड", href: "#services" },
      { label: "ड्राइविंग लाइसेंस (सारथी परिवहन)", href: "#services" },
      { label: "उद्यम MSME और GST पंजीकरण", href: "#services" },
      { label: "राज्य राजस्व एवं आय प्रमाण पत्र", href: "#services" },
      { label: "भारतीय पासपोर्ट (पासपोर्ट सेवा)", href: "#services" },
      { label: "मतदाता पहचान पत्र (फॉर्म 6)", href: "#services" },
    ],
    toolsTitle: "नागरिक उपकरण",
    tools: [
      { label: "रोडमैप कैसे काम करते हैं", href: "#how-it-works" },
      { label: "सरल भाषा में कार्य खोजें", href: "#search-section" },
      { label: "दस्तावेज़ तत्परता चेकलिस्ट", href: "#services" },
      { label: "आधिकारिक .gov.in पोर्टल निर्देशिका", href: "#services" },
    ],
    disclaimer: "सिविक टास्क नेविगेटर एक स्वतंत्र जनहित तकनीकी मंच है। यह किसी सरकारी मंत्रालय से संबद्ध नहीं है। सभी लिंक केवल .gov.in या .nic.in पर समाप्त होने वाली आधिकारिक सरकारी वेबसाइटों पर ले जाते हैं।",
    copyright: "सिविक टास्क नेविगेटर • भारत के नागरिकों के लिए जनहित तकनीकी मंच",
  },
  mr: {
    purpose: "भारतीय नागरिकांना सर्व शासकीय, राज्य आणि पालिका प्रक्रिया सोप्या भाषेत, कागदपत्रांच्या चेकलिस्टसह आणि थेट .gov.in लिंक्ससह समजून घेण्यास मदत करणे.",
    badgeFree: "१००% मोफत नागरी मार्गदर्शक",
    badgeFocus: "अखिल भारतीय आणि राज्य सेवांवर केंद्रित",
    categoriesTitle: "शासकीय नागरी सेवा",
    categories: [
      { label: "आधार अपडेट आणि पीव्हीसी कार्ड", href: "#services" },
      { label: "ड्रायव्हिंग लायसन्स (सारथी परिवहन)", href: "#services" },
      { label: "उद्यम MSME आणि GST नोंदणी", href: "#services" },
      { label: "आपले सरकार महसूल व उत्पन्न दाखला", href: "#services" },
      { label: "भारतीय पासपोर्ट सेवा", href: "#services" },
      { label: "मतदार ओळखपत्र नोंदणी (फॉर्म ६)", href: "#services" },
    ],
    toolsTitle: "नागरी साधने",
    tools: [
      { label: "रोडमॅप कसे काम करतात", href: "#how-it-works" },
      { label: "सोप्या भाषेत शोध", href: "#search-section" },
      { label: "कागदपत्रे पूर्व-तपासणी", href: "#services" },
      { label: "अधिकृत .gov.in पोर्टल निर्देशिका", href: "#services" },
    ],
    disclaimer: "सिविक टास्क नेव्हिगेटर हे एक स्वतंत्र व्यासपीठ असून कोणत्याही सरकारी मंत्रालयाशी संलग्न नाही. सर्व लिंक्स थेट अधिकृत .gov.in किंवा .nic.in संकेतस्थळांवर नेतात.",
    copyright: "सिविक टास्क नेव्हिगेटर • भारतीय नागरिकांसाठी लोककल्याणकारी तंत्रज्ञान",
  },
  gu: {
    purpose: "નાગરિકોને સરકારી નિયમો, દસ્તાવેજ ચેકલિસ્ટ અને સત્તાવાર .gov.in લિંક્સ સાથે સરળ ગુજરાતીમાં માર્ગદર્શન પૂરું પાડવું.",
    badgeFree: "૧૦૦% મફત નાગરિક માર્ગદર્શિકા",
    badgeFocus: "રાષ્ટ્રીય અને રાજ્ય સેવાઓ પર કેન્દ્રિત",
    categoriesTitle: "ભારતીય નાગરિક સેવાઓ",
    categories: [
      { label: "આધાર અપડેટ અને પીવીસી કાર્ડ", href: "#services" },
      { label: "ડ્રાઇવિંગ લાઇસન્સ (સારથી પરિવહન)", href: "#services" },
      { label: "ઉદ્યમ MSME અને GST નોંધણી", href: "#services" },
      { label: "રાજ્ય આવક અને જાતિ પ્રમાણપત્ર", href: "#services" },
      { label: "પાસપોર્ટ સેવા", href: "#services" },
      { label: "ચૂંટણી કાર્ડ નોંધણી (ફોર્મ ૬)", href: "#services" },
    ],
    toolsTitle: "નાગરિક સાધનો",
    tools: [
      { label: "રોડમેપ કેવી રીતે કામ કરે છે", href: "#how-it-works" },
      { label: "સરળ ભાષામાં શોધ", href: "#search-section" },
      { label: "દસ્તાવેજ ચકાસણી યાદી", href: "#services" },
      { label: "સત્તાવાર .gov.in પોર્ટલ ડિરેક્ટરી", href: "#services" },
    ],
    disclaimer: "સિવિક ટાસ્ક નેવિગેટર એક સ્વતંત્ર નાગરિક મંચ છે. તમામ લિંક્સ ફક્ત .gov.in અથવા .nic.in વાળી સત્તાવાર વેબસાઇટ પર લઈ જાય છે.",
    copyright: "સિવિક ટાસ્ક નેવિગેટર • ભારતના નાગરિકો માટે જાહેર હિત ટેકનોલોજી",
  },
  ta: {
    purpose: "இந்திய குடிமக்கள் அரசு நடைமுறைகளை தெளிவான ஆவணப் பட்டியல்கள் மற்றும் நேரடி .gov.in இணைப்புகளுடன் எளிதாக அணுக உதவுதல்.",
    badgeFree: "100% இலவச குடிமக்கள் வழிகாட்டி",
    badgeFocus: "தேசிய மற்றும் மாநில அரசு சேவைகள்",
    categoriesTitle: "அரசு குடிமக்கள் சேவைகள்",
    categories: [
      { label: "ஆதார் புதுப்பித்தல் & பிவிசி அட்டை", href: "#services" },
      { label: "ஓட்டுநர் உரிமம் (சாரதி பரிவஹன்)", href: "#services" },
      { label: "உத்யம் MSME & GST பதிவு", href: "#services" },
      { label: "வருமானச் சான்றிதழ் மற்றும் இருப்பிடச் சான்று", href: "#services" },
      { label: "இந்திய பாஸ்போர்ட் சேவை", href: "#services" },
      { label: "வாக்காளர் அடையாள அட்டை பதிவு", href: "#services" },
    ],
    toolsTitle: "பயனுள்ள கருவிகள்",
    tools: [
      { label: "செயல்முறைகள் செயல்படும் விதம்", href: "#how-it-works" },
      { label: "எளிய மொழித் தேடல்", href: "#search-section" },
      { label: "ஆவண சரிபார்ப்பு பட்டியல்", href: "#services" },
      { label: "அதிகாரப்பூர்வ .gov.in தளங்களின் பட்டியல்", href: "#services" },
    ],
    disclaimer: "சிவிக் டாஸ்க் நேவிகேட்டர் ஒரு சுயாதீன வழிகாட்டி தளம். அனைத்து இணைப்புகளும் அதிகாரப்பூர்வ .gov.in அல்லது .nic.in தளங்களுக்கு மட்டுமே கொண்டு செல்கின்றன.",
    copyright: "சிவிக் டாஸ்க் நேவிகேட்டர் • இந்திய மக்களுக்கான பொதுநல தொழில்நுட்பம்",
  },
  te: {
    purpose: "భారతీయ పౌరులకు ప్రభుత్వ లాంఛనాలను స్పష్టమైన పత్రాల చెక్‌లిస్ట్‌లు మరియు ప్రత్యక్ష .gov.in లింక్‌లతో సులభంగా అర్థం చేసుకునేలా చేయడం.",
    badgeFree: "100% ఉచిత ప్రజా మార్గదర్శి",
    badgeFocus: "జాతీయ మరియు రాష్ట్ర సేవలపై దృష్టి",
    categoriesTitle: "ప్రభుత్వ పౌర సేవలు",
    categories: [
      { label: "ఆధార్ అప్‌డేట్ & పీవీసీ కార్డు", href: "#services" },
      { label: "డ్రైవింగ్ లైసెన్స్ (సారథి రవాణా)", href: "#services" },
      { label: "ఉద్యమ్ MSME & GST నమోదు", href: "#services" },
      { label: "ఆదాయ మరియు నివాస ధృవీకరణ పత్రాలు", href: "#services" },
      { label: "భారతీయ పాస్‌పోర్ట్ సేవ", href: "#services" },
      { label: "ఓటరు గుర్తింపు కార్డు నమోదు", href: "#services" },
    ],
    toolsTitle: "పౌర సాధనాలు",
    tools: [
      { label: "రోడ్‌మ్యాప్ ఎలా పనిచేస్తుంది", href: "#how-it-works" },
      { label: "సులభమైన శోధన", href: "#search-section" },
      { label: "పత్రాల ముందస్తు తనిఖీ", href: "#services" },
      { label: "అధికారిక .gov.in పోర్టల్ డైరెక్టరీ", href: "#services" },
    ],
    disclaimer: "సివిక్ టాస్క్ నేవిగేటర్ స్వతంత్ర సమాచార వేదిక. అన్ని లింకులు నేరుగా అధికారిక .gov.in లేదా .nic.in వెబ్‌సైట్‌లకు మాత్రమే దారి తీస్తాయి.",
    copyright: "సివిక్ టాస్క్ నేవిగేటర్ • భారత పౌరుల కోసం ప్రజా సాంకేతికత",
  },
  bn: {
    purpose: "ভারতীয় নাগরিকদের জন্য সরকারি প্রক্রিয়া, নথিপত্রের তালিকা এবং সরাসরি .gov.in লিঙ্কের মাধ্যমে স্বচ্ছ ও সহজ নির্দেশিকা প্রদান করা।",
    badgeFree: "১০০% বিনামূল্যে নাগরিক নির্দেশিকা",
    badgeFocus: "জাতীয় ও রাজ্য পরিষেবার উপর দৃষ্টি নিবদ্ধ",
    categoriesTitle: "নাগরিক পরিষেবা",
    categories: [
      { label: "আধার আপডেট ও পিভিসি কার্ড", href: "#services" },
      { label: "ড্রাইভিং লাইসেন্স (সারথী পরিবহন)", href: "#services" },
      { label: "উদ্যম MSME ও GST নিবন্ধন", href: "#services" },
      { label: "আয় ও বাসস্থান শংসাপত্র", href: "#services" },
      { label: "ভারতীয় পাসপোর্ট সেবা", href: "#services" },
      { label: "ভোটার কার্ড নিবন্ধন (ফর্ম ৬)", href: "#services" },
    ],
    toolsTitle: "নাগরিক সরঞ্জাম",
    tools: [
      { label: "রোডম্যাপ কীভাবে কাজ করে", href: "#how-it-works" },
      { label: "সহজ ভাষায় অনুসন্ধান", href: "#search-section" },
      { label: "নথি প্রস্তুতি চেকলিস্ট", href: "#services" },
      { label: "অফিসিয়াল .gov.in পোর্টাল ডিরেক্টরি", href: "#services" },
    ],
    disclaimer: "সিভিক টাস্ক নেভিগেটর একটি স্বাধীন তথ্য প্ল্যাটফর্ম। সমস্ত লিঙ্ক সরাসরি .gov.in বা .nic.in সরকারি পোর্টালে নির্দেশ করে।",
    copyright: "সিভিক টাস্ক নেভিগেটর • ভারতের নাগরিকদের জন্য জনকল্যাণমূলক প্রযুক্তি",
  },
  kn: {
    purpose: "ಭಾರತೀಯ ನಾಗರಿಕರಿಗೆ ಸರ್ಕಾರಿ ನಿಯಮಗಳು, ದಾಖಲೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ಅಧಿಕೃತ .gov.in ಲಿಂಕ್‌ಗಳೊಂದಿಗೆ ಸರಳ ಕನ್ನಡದಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುವುದು.",
    badgeFree: "100% ಉಚಿತ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶಿ",
    badgeFocus: "ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ರಾಜ್ಯ ಸೇವೆಗಳು",
    categoriesTitle: "ಸರ್ಕಾರಿ ನಾಗರಿಕ ಸೇವೆಗಳು",
    categories: [
      { label: "ಆಧಾರ್ ತಿದ್ದುಪಡಿ ಮತ್ತು ಪಿವಿಸಿ ಕಾರ್ಡ್", href: "#services" },
      { label: "ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ (ಸಾರಥಿ ಸಾರಿಗೆ)", href: "#services" },
      { label: "ಉದ್ಯಮ್ MSME ಮತ್ತು GST ನೋಂದಣಿ", href: "#services" },
      { label: "ಆದಾಯ ಮತ್ತು ನಿವಾಸ ಪ್ರಮಾಣಪತ್ರಗಳು", href: "#services" },
      { label: "ಭಾರತೀಯ ಪಾಸ್‌ಪೋರ್ಟ್ ಸೇವೆ", href: "#services" },
      { label: "ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ ನೋಂದಣಿ", href: "#services" },
    ],
    toolsTitle: "ಉಪಯುಕ್ತ ಪರಿಕರಗಳು",
    tools: [
      { label: "ಮಾರ್ಗದರ್ಶಿ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ", href: "#how-it-works" },
      { label: "ಸರಳ ಭಾಷೆಯ ಹುಡುಕಾಟ", href: "#search-section" },
      { label: "ದಾಖಲೆ ಪೂರ್ವ ಪರಿಶೀಲನೆ ಪಟ್ಟಿ", href: "#services" },
      { label: "ಅಧಿಕೃತ .gov.in ಪೋರ್ಟಲ್ ಡೈರೆಕ್ಟರಿ", href: "#services" },
    ],
    disclaimer: "ಸಿವಿಕ್ ಟಾಸ್ಕ್ ನ್ಯಾವಿಗೇಟರ್ ಸ್ವತಂತ್ರ ನಾಗರಿಕ ವೇದಿಕೆಯಾಗಿದ್ದು ಯಾವುದೇ ಸರ್ಕಾರಿ ಇಲಾಖೆಯೊಂದಿಗೆ ಸಂಯೋಜಿತವಾಗಿಲ್ಲ. ಎಲ್ಲಾ ಲಿಂಕ್‌ಗಳು ಅಧಿಕೃತ .gov.in ಸೈಟ್‌ಗಳಿಗೆ ಕರೆದೊಯ್ಯುತ್ತವೆ.",
    copyright: "ಸಿವಿಕ್ ಟಾಸ್ಕ್ ನ್ಯಾವಿಗೇಟರ್ • ಭಾರತದ ನಾಗರಿಕರಿಗಾಗಿ ಸಾರ್ವಜನಿಕ ತಂತ್ರಜ್ಞಾನ",
  },
  ml: {
    purpose: "സർക്കാർ നടപടിക്രമങ്ങൾ ലളിതമായ മലയാളത്തിൽ മനസ്സിലാക്കാനും, രേഖകളുടെ ലിസ്റ്റുകൾ നേടാനും, ഔദ്യോഗിക .gov.in സൈറ്റുകളിലേക്ക് നേരിട്ട് പ്രവേശിക്കാനും സഹായിക്കുന്നു.",
    badgeFree: "100% സൗജന്യ പൗര വിവര ഗൈഡ്",
    badgeFocus: "ദേശീയ-സംസ്ഥാന പൗര സേവനങ്ങൾ",
    categoriesTitle: "സർക്കാർ പൗര സേവനങ്ങൾ",
    categories: [
      { label: "ആധാർ വിലാസം മാറ്റലും പിവിസി കാർഡും", href: "#services" },
      { label: "ഡ്രൈവിംഗ് ലൈസൻസ് (സാരഥി പരിവാഹൻ)", href: "#services" },
      { label: "ഉദ്യം MSME & GST രജിസ്ട്രേഷൻ", href: "#services" },
      { label: "വരുമാന സർട്ടിഫിക്കറ്റും ജാതി സർട്ടിഫിക്കറ്റും", href: "#services" },
      { label: "പാസ്പോർട്ട് സേവ", href: "#services" },
      { label: "വോട്ടർ ഐഡി രജിസ്ട്രേഷൻ", href: "#services" },
    ],
    toolsTitle: "പൗര ഉപകരണങ്ങൾ",
    tools: [
      { label: "നടപടിക്രമങ്ങൾ പ്രവർത്തിക്കുന്ന വിധം", href: "#how-it-works" },
      { label: "ലളിതമായ ഭാഷാ തിരച്ചിൽ", href: "#search-section" },
      { label: "രേഖാ പരിശോധന ചെക്ക്‌ലിസ്റ്റ്", href: "#services" },
      { label: "ഔദ്യോഗിക .gov.in ഡയറക്ടറി", href: "#services" },
    ],
    disclaimer: "സിവിക് ടാസ്ക് നാവിഗേറ്റർ ഒരു സ്വതന്ത്ര പ്ലാറ്റ്‌ഫോമാണ്. എല്ലാ ലിങ്കുകളും .gov.in അല്ലെങ്കിൽ .nic.in ഔദ്യോഗിക സർക്കാർ സൈറ്റുകളിലേക്ക് മാത്രമേ നയിക്കൂ.",
    copyright: "സിവിക് ടാസ്ക് നാവിഗേറ്റർ • ഇന്ത്യൻ പൗരന്മാർക്കായുള്ള സാങ്കേതിക പ്ലാറ്റ്‌ഫോം",
  },
  pa: {
    purpose: "ਸਰਕਾਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਆਸਾਨ ਪੰਜਾਬੀ ਵਿੱਚ ਸਮਝਣ, ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਸੂਚੀ ਪ੍ਰਾਪਤ ਕਰਨ ਅਤੇ ਅਧਿਕਾਰਤ .gov.in ਲਿੰਕਾਂ ਰਾਹੀਂ ਅਰਜ਼ੀ ਦੇਣ ਵਿੱਚ ਮਦਦਗਾਰ।",
    badgeFree: "100% ਮੁਫ਼ਤ ਨਾਗਰਿਕ ਗਾਈਡ",
    badgeFocus: "ਰਾਸ਼ਟਰੀ ਅਤੇ ਰਾਜ ਸੇਵਾਵਾਂ",
    categoriesTitle: "ਸਰਕਾਰੀ ਨਾਗਰਿਕ ਸੇਵਾਵਾਂ",
    categories: [
      { label: "ਆਧਾਰ ਅੱਪਡੇਟ ਅਤੇ ਪੀਵੀਸੀ ਕਾਰਡ", href: "#services" },
      { label: "ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ (ਸਾਰਥੀ ਟਰਾਂਸਪੋਰਟ)", href: "#services" },
      { label: "ਉਦਿਅਮ MSME ਅਤੇ GST ਰਜਿਸਟ੍ਰੇਸ਼ਨ", href: "#services" },
      { label: "ਆਮਦਨ ਅਤੇ ਰਿਹਾਇਸ਼ ਸਰਟੀਫਿਕੇਟ", href: "#services" },
      { label: "ਪਾਸਪੋਰਟ ਸੇਵਾ", href: "#services" },
      { label: "ਵੋਟਰ ਕਾਰਡ ਰਜਿਸਟ੍ਰੇਸ਼ਨ", href: "#services" },
    ],
    toolsTitle: "ਨਾਗਰਿਕ ਸਾਧਨ",
    tools: [
      { label: "ਰੋਡਮੈਪ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ", href: "#how-it-works" },
      { label: "ਸਰਲ ਭਾਸ਼ਾ ਵਿੱਚ ਖੋਜ", href: "#search-section" },
      { label: "ਦਸਤਾਵੇਜ਼ ਜਾਂਚ ਸੂਚੀ", href: "#services" },
      { label: "ਅਧਿਕਾਰਤ .gov.in ਪੋਰਟਲ ਡਾਇਰੈਕਟਰੀ", href: "#services" },
    ],
    disclaimer: "ਸਿਵਿਕ ਟਾਸਕ ਨੈਵੀਗੇਟਰ ਇੱਕ ਸੁਤੰਤਰ ਨਾਗਰਿਕ ਮੰਚ ਹੈ। ਸਾਰੇ ਲਿੰਕ ਸਿਰਫ਼ .gov.in ਜਾਂ .nic.in ਵਾਲੀਆਂ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟਾਂ ਵੱਲ ਲੈ ਜਾਂਦੇ ਹਨ।",
    copyright: "ਸਿਵਿਕ ਟਾਸਕ ਨੈਵੀਗੇਟਰ • ਭਾਰਤ ਦੇ ਨਾਗਰਿਕਾਂ ਲਈ ਜਨਤਕ ਤਕਨਾਲੋਜੀ",
  },
};

export function Footer({ currentLang = "en" }: FooterProps) {
  const data = FOOTER_DATA[currentLang] || FOOTER_DATA.en;

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <CompassIcon className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Civic Task Navigator
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {data.purpose}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheckIcon className="w-4 h-4" />{" "}
                {data.badgeFree}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{data.badgeFocus}</span>
            </div>
          </div>

          {/* Quick Indian Categories */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              {data.categoriesTitle}
            </h4>
            <ul className="space-y-2.5">
              {data.categories.map((c, idx) => (
                <li key={idx}>
                  <a href={c.href} className="hover:text-white transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Citizen Tools */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              {data.toolsTitle}
            </h4>
            <ul className="space-y-2.5">
              {data.tools.map((t, idx) => (
                <li key={idx}>
                  <a href={t.href} className="hover:text-white transition-colors">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Verification Notice */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              .gov.in Direct Routing
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 space-y-1.5">
              <p className="font-semibold text-emerald-400 flex items-center gap-1">
                ✓ Authentic Registry
              </p>
              <p className="text-slate-400 leading-normal">
                Never pay unofficial third-party agents or non-gov websites for free Indian civic procedures.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Statutory Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p className="text-center sm:text-left max-w-2xl leading-relaxed">
            {data.disclaimer}
          </p>
          <div className="shrink-0 text-center sm:text-right font-medium">
            <p>{data.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
