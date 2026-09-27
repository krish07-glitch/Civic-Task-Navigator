"use client";

import React from "react";
import { ShieldCheckIcon, DocumentCheckIcon, ClockIcon, LandmarkIcon } from "./Icons";
import { SupportedLanguage } from "@/types/civic";

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

interface PillarItem {
  iconType: "shield" | "doc" | "clock" | "landmark";
  title: string;
  description: string;
}

interface TrustData {
  badge: string;
  title: string;
  subtitle: string;
  stats: StatItem[];
  pillars: PillarItem[];
}

const TRUST_DATA: Record<SupportedLanguage, TrustData> = {
  en: {
    badge: "Citizen Safety & Transparency",
    title: "How we protect citizens navigating public bureaucracy",
    subtitle: "Civic procedures should be accessible to all. Civic Task Navigator does not collect fees, store sensitive passwords, or replace government departments.",
    stats: [
      { value: "10 Sectors", label: "National Civic Coverage", sublabel: "Aadhaar, Transport, Tax, Passports, Schemes" },
      { value: "28 States & UTs", label: "State e-District Portals", sublabel: "Aaple Sarkar, Seva Sindhu, e-Mitra & more" },
      { value: "₹0.00", label: "Citizen Fee", sublabel: "Free public advisory. No middleman charges." },
      { value: "100%", label: "Verified .gov.in Domains", sublabel: "Direct redirection to official Indian ministries" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "Eliminating Unofficial Agents & Touts",
        description: "Citizens often get charged ₹500 - ₹3,000 by unauthorized agents for free government services like Udyam MSME, Voter ID, or Aadhaar updates. We link you directly to genuine government portals.",
      },
      {
        iconType: "doc",
        title: "Plain Language, Zero Legalese",
        description: "We translate dense gazette notifications, Right to Public Services Act (RTS) guidelines, and statutory forms into simple, step-by-step roadmaps accessible in regional Indian languages.",
      },
      {
        iconType: "clock",
        title: "Pre-Flight Document Checklist",
        description: "Know whether you need self-attested photocopies, an MBBS doctor medical certificate (Form 1A), an electricity bill under 2 months old, or Aadhaar OTP before you visit the office.",
      },
      {
        iconType: "landmark",
        title: "Right to Services (RTS) Timelines",
        description: "Track legally guaranteed service delivery timelines enacted under State Right to Public Services Acts (e.g. Maharashtra Public Services Guarantee) for timely certificate issuances.",
      },
    ],
  },
  hi: {
    badge: "नागरिक सुरक्षा एवं पारदर्शिता",
    title: "हम नागरिकों को सरकारी औपचारिकताओं में कैसे सुरक्षित रखते हैं",
    subtitle: "नागरिक प्रक्रियाएं सभी के लिए सुलभ होनी चाहिए। सिविक टास्क नेविगेटर कोई शुल्क नहीं लेता, संवेदनशील पासवर्ड संग्रहित नहीं करता, और न ही सरकारी विभागों का विकल्प है।",
    stats: [
      { value: "10 क्षेत्र", label: "राष्ट्रीय नागरिक कवरेज", sublabel: "आधार, परिवहन, कर, पासपोर्ट, योजनाएं" },
      { value: "28 राज्य एवं केंद्र शासित प्रदेश", label: "राज्य ई-डिस्ट्रिक्ट पोर्टल्स", sublabel: "आपले सरकार, सेवा सिंधु, ई-मित्र व अन्य" },
      { value: "₹0.00", label: "नागरिक शुल्क", sublabel: "निःशुल्क जन परामर्श। कोई बिचौलिया शुल्क नहीं।" },
      { value: "100%", label: "प्रमाणित .gov.in डोमेन", sublabel: "सीधे आधिकारिक भारतीय मंत्रालयों का पुनःनिर्देशन" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "अनधिकृत एजेंटों और दलालों से मुक्ति",
        description: "नागरिकों से निःशुल्क सरकारी सेवाओं (जैसे उद्यम MSME, वोटर कार्ड या आधार अपडेट) के लिए दलाल भारी शुल्क वसूलते हैं। हम आपको सीधे वास्तविक सरकारी पोर्टल से जोड़ते हैं।",
      },
      {
        iconType: "doc",
        title: "सरल भाषा, बिना किसी जटिलता के",
        description: "हम जटिल सरकारी अधिसूचनाओं, लोक सेवा अधिकार (RTS) नियमों और वैधानिक फॉर्मों को सरल चरणबद्ध रोडमैप में प्रस्तुत करते हैं।",
      },
      {
        iconType: "clock",
        title: "दस्तावेज़ पूर्व-जांच चेकलिस्ट",
        description: "कार्यालय जाने से पहले जानें कि क्या आपको स्व-सत्यापित फोटोकॉपी, मेडिकल प्रमाणपत्र (फॉर्म 1A), बिजली बिल, या आधार OTP की आवश्यकता है।",
      },
      {
        iconType: "landmark",
        title: "सेवा का अधिकार (RTS) समय-सीमा",
        description: "समय पर प्रमाण पत्र जारी करने के लिए राज्य लोक सेवा गारंटी अधिनियम के तहत कानूनी रूप से गारंटीकृत समय-सीमा जानें।",
      },
    ],
  },
  mr: {
    badge: "नागरिक सुरक्षा आणि पारदर्शकता",
    title: "शासकीय प्रक्रियांमध्ये आम्ही नागरिकांना कसे सुरक्षित ठेवतो",
    subtitle: "शासकीय सेवा सर्वांसाठी सहज उपलब्ध असाव्यात. सिविक टास्क नेव्हिगेटर कोणतेही शुल्क आकारत नाही किंवा कोणतेही पासवर्ड जतन करत नाही.",
    stats: [
      { value: "१० क्षेत्रे", label: "राष्ट्रीय नागरी व्याप्ती", sublabel: "आधार, परिवहन, कर, पासपोर्ट, योजना" },
      { value: "२८ राज्ये व केंद्रशासित प्रदेश", label: "राज्य ई-डिस्ट्रिक्ट पोर्टल्स", sublabel: "आपले सरकार, सेवा सिंधु, ई-मित्र इत्यादी" },
      { value: "₹०.००", label: "नागरिक शुल्क", sublabel: "१००% मोफत मार्गदर्शन. दलालांचे शुल्क नाही." },
      { value: "१००%", label: "अधिकृत .gov.in डोमेन्स", sublabel: "थेट अधिकृत भारतीय मंत्रालयांची लिंक" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "अनधिकृत एजंट आणि दलालांपासून मुक्ती",
        description: "उद्यम नोंदणी, मतदार ओळखपत्र किंवा आधार अपडेटसाठी दलाल नागरिकांकडून पैसे उकळतात. आम्ही थेट खऱ्या सरकारी पोर्टलशी जोडतो.",
      },
      {
        iconType: "doc",
        title: "सोपी भाषा, कायदेशीर गुंतागुंत नाही",
        description: "आम्ही क्लिष्ट शासकीय जीआर आणि सेवा हक्क (RTS) नियमांचे रूपांतर सोप्या चरणबद्ध रोडमॅपमध्ये करतो.",
      },
      {
        iconType: "clock",
        title: "कागदपत्रे पूर्व-तपासणी",
        description: "कार्यालयात जाण्यापूर्वी स्व-साक्षांकित प्रती, वैद्यकीय प्रमाणपत्र किंवा आधार OTP ची गरज आहे का ते जाणून घ्या.",
      },
      {
        iconType: "landmark",
        title: "लोकसेवा हक्क (RTS) कालमर्यादा",
        description: "महाराष्ट्र लोकसेवा हमी कायद्यानुसार प्रमाणपत्र मिळण्यासाठी कायदेशीर हमी असलेली कालमर्यादा तपासा.",
      },
    ],
  },
  gu: {
    badge: "નાગરિક સુરક્ષા અને પારદર્શિતા",
    title: "અમે સરકારી કામકાજમાં નાગરિકોનું રક્ષણ કેવી રીતે કરીએ છીએ",
    subtitle: "સરકારી સેવાઓ દરેક માટે સુલભ હોવી જોઈએ. સિવિક ટાસ્ક નેવિગેટર કોઈપણ ફી વસૂલતું નથી કે પાસવર્ડ સંગ્રહતું નથી.",
    stats: [
      { value: "૧૦ ક્ષેત્રો", label: "રાષ્ટ્રીય નાગરિક સેવાઓ", sublabel: "આધાર, પરિવહન, કર, પાસપોર્ટ, યોજનાઓ" },
      { value: "૨૮ રાજ્યો અને કેન્દ્રશાસિત", label: "રાજ્ય પોર્ટલ્સ", sublabel: "ડિજિટલ ગુજરાત, સેવા સિંધુ વગેરે" },
      { value: "₹૦.૦૦", label: "નાગરિક ફી", sublabel: "સંપૂર્ણ મફત સેવા. કોઈ વચેટિયા ફી નહીં." },
      { value: "૧૦૦%", label: "સત્તાવાર .gov.in ડોમેન", sublabel: "સીધા સત્તાવાર પોર્ટલ પર પુનઃનિર્દેશન" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "દલાલો અને વચેટિયાઓથી મુક્તિ",
        description: "મફત સરકારી સેવાઓ માટે દલાલો લોકો પાસેથી નાણાં પડાવે છે. અમે તમને સીધા વાસ્તવિક સરકારી પોર્ટલ સાથે જોડીએ છીએ.",
      },
      {
        iconType: "doc",
        title: "સરળ ભાષા, શૂન્ય ગૂંચવણ",
        description: "સરકારી જાહેરનામા અને સેવા અધિકારના નિયમોને સરળ ગુજરાતી માર્ગદર્શિકામાં સમજો.",
      },
      {
        iconType: "clock",
        title: "દસ્તાવેજ પૂર્વ-ચકાસણી",
        description: "કચેરીએ જતા પહેલાં કયા કાગળો, વીજળી બિલ કે આધાર OTP જરૂરી છે તે અગાઉથી જાણો.",
      },
      {
        iconType: "landmark",
        title: "સેવા અધિકાર (RTS) સમયમર્યાદા",
        description: "સમયસર પ્રમાણપત્ર મેળવવા માટે કાયદાકીય રીતે નિર્ધારિત સમયમર્યાદા તપાસો.",
      },
    ],
  },
  ta: {
    badge: "குடிமக்கள் பாதுகாப்பு & வெளிப்படைத்தன்மை",
    title: "அரசு நடைமுறைகளில் பொதுமக்களை எவ்வாறு பாதுகாக்கிறோம்",
    subtitle: "அரசு நடைமுறைகள் அனைவருக்கும் எளிதாகக் கிடைக்க வேண்டும். நாங்கள் கட்டணம் வசூலிப்பதில்லை, கடவுச்சொற்களைச் சேமிப்பதில்லை.",
    stats: [
      { value: "10 துறைகள்", label: "தேசிய குடிமக்கள் சேவைகள்", sublabel: "ஆதார், போக்குவரத்து, வரி, பாஸ்போர்ட்" },
      { value: "28 மாநிலங்கள் & யூனியன்", label: "மாநில போர்ட்டல்கள்", sublabel: "டிஎன் இ-சேவை, சேவா சிந்து மற்றும் பல" },
      { value: "₹0.00", label: "பொதுமக்கள் கட்டணம்", sublabel: "100% இலவச வழிகாட்டி. இடைத்தரகர் கட்டணம் இல்லை." },
      { value: "100%", label: "அங்கீகரிக்கப்பட்ட .gov.in தளங்கள்", sublabel: "நேரடி அதிகாரப்பூர்வ அரசு தள இணைப்புகள்" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "இடைத்தரகர்கள் மற்றும் தரகர்கள் ஒழிப்பு",
        description: "இலவச அரசு சேவைகளுக்கு இடைத்தரகர்கள் கட்டணம் வசூலிப்பதைத் தடுத்து, உங்களை நேரடியாக உண்மையான அரசு தளங்களுடன் இணைக்கிறோம்.",
      },
      {
        iconType: "doc",
        title: "எளிய மொழி, சட்டச் சிக்கல்கள் இல்லை",
        description: "அரசாணை மற்றும் சேவை பெறும் உரிமைச் சட்டங்களை எளிய படிநிலைகளாக விளக்குகிறோம்.",
      },
      {
        iconType: "clock",
        title: "ஆவண முன்-சரிபார்ப்பு",
        description: "அலுவலகத்திற்குச் செல்லும் முன் தேவையான ஆவணங்கள் மற்றும் சான்றிதழ்களைத் தெரிந்து கொள்ளுங்கள்.",
      },
      {
        iconType: "landmark",
        title: "சேவை உரிமை (RTS) காலக்கெடு",
        description: "சட்டப்பூர்வமாக உத்தரவாதம் அளிக்கப்பட்ட அரசு சேவை வழங்கும் காலக்கெடுவை அறிந்து கொள்ளுங்கள்.",
      },
    ],
  },
  te: {
    badge: "పౌర రక్షణ & పారదర్శకత",
    title: "ప్రభుత్వ లాంఛనాలలో పౌరులను మేము ఎలా రక్షిస్తాము",
    subtitle: "ప్రజా సేవలు అందరికీ అందుబాటులో ఉండాలి. సివిక్ టాస్క్ నేవిగేటర్ ఎటువంటి రుసుము వసూలు చేయదు, పాస్‌వర్డ్‌లను నిల్వ చేయదు.",
    stats: [
      { value: "10 రంగాలు", label: "జాతీయ పౌర సేవలు", sublabel: "ఆధార్, రవాణా, పన్ను, పాస్‌పోర్ట్, పథకాలు" },
      { value: "28 రాష్ట్రాలు & కేంద్రపాలిత", label: "రాష్ట్ర పోర్టల్స్", sublabel: "మీసేవ, సేవా సింధు, ఈ-మిత్ర మరియు ఇతరాలు" },
      { value: "₹0.00", label: "పౌర రుసుము", sublabel: "ఉచిత ప్రజా సలహా. దళారుల ప్రమేయం లేదు." },
      { value: "100%", label: "అధికారిక .gov.in డొమైన్లు", sublabel: "నేరుగా భారత ప్రభుత్వ పోర్టల్‌లకు మార్గం" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "అనధికారిక ఏజెంట్లు & దళారుల నిర్మూలన",
        description: "ఉచిత ప్రభుత్వ సేవల కోసం దళారులు అధిక మొత్తంలో వసూలు చేస్తుంటారు. మేము మిమ్మల్ని నేరుగా నిజమైన ప్రభుత్వ పోర్టల్‌లతో కలుపుతాము.",
      },
      {
        iconType: "doc",
        title: "సరళమైన భాష, ఎలాంటి గందరగోళం లేదు",
        description: "సంక్లిష్టమైన ప్రభుత్వ నిబంధనలను సులభమైన దశలవారీ రోడ్‌మ్యాప్‌గా మారుస్తాము.",
      },
      {
        iconType: "clock",
        title: "పత్రాల ముందస్తు తనిఖీ",
        description: "కార్యాలయానికి వెళ్లే ముందు అవసరమైన ధృవీకరణ పత్రాలు మరియు నిబంధనల వివరాలు తెలుసుకోండి.",
      },
      {
        iconType: "landmark",
        title: "పౌర సేవల హక్కు (RTS) కాలపరిమితి",
        description: "ధృవీకరణ పత్రాల జారీ కోసం చట్టబద్ధంగా హామీ ఇవ్వబడిన గడువులను ట్రాక్ చేయండి.",
      },
    ],
  },
  bn: {
    badge: "নাগরিক সুরক্ষা ও স্বচ্ছতা",
    title: "সরকারি আনুষ্ঠানিকতায় আমরা কীভাবে নাগরিকদের সুরক্ষিত রাখি",
    subtitle: "জনসেবা সবার কাছে সহজলভ্য হওয়া উচিত। সিভিক টাস্ক নেভিগেটর কোনো ফি নেয় না বা গোপন পাসওয়ার্ড সংরক্ষণ করে না।",
    stats: [
      { value: "১০টি ক্ষেত্র", label: "জাতীয় নাগরিক পরিষেবা", sublabel: "আধার, পরিবহন, কর, পাসপোর্ট, প্রকল্প" },
      { value: "২৮টি রাজ্য ও কেন্দ্রশাসিত", label: "রাজ্য পোর্টাল", sublabel: "ই-ডিস্ট্রিক্ট, সেবা সিন্ধু প্রভৃতি" },
      { value: "₹০.০০", label: "নাগরিক ফি", sublabel: "বিনামূল্যে নাগরিক নির্দেশিকা। কোনো দালাল ফি নেই।" },
      { value: "১০০%", label: "অফিসিয়াল .gov.in ডোমেন", sublabel: "সরাসরি সরকারি মন্ত্রকের ওয়েবসাইটে সংযোগ" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "দালাল ও মধ্যস্বত্বভোগী থেকে মুক্তি",
        description: "বিনামূল্যে সরকারি পরিষেবার জন্য দালালরা টাকা দাবি করে। আমরা আপনাকে সরাসরি আসল সরকারি পোর্টালে যুক্ত করি।",
      },
      {
        iconType: "doc",
        title: "সহজ ভাষা, জটিলতাহীন",
        description: "জটিল সরকারি বিজ্ঞপ্তি ও সেবা অধিকার আইনকে সহজ ধাপে ধাপে উপস্থাপন করি।",
      },
      {
        iconType: "clock",
        title: "নথি প্রাক-যাচাই চেকলিস্ট",
        description: "অফিসে যাওয়ার আগে কোন কোন নথি, ফটোকপি বা আধার OTP প্রয়োজন তা নিশ্চিত করুন।",
      },
      {
        iconType: "landmark",
        title: "জনপরিষেবা অধিকার (RTS) সময়সীমা",
        description: "সময়মতো শংসাপত্র পাওয়ার জন্য আইনগতভাবে নির্ধারিত সময়সীমা জানুন।",
      },
    ],
  },
  kn: {
    badge: "ನಾಗರಿಕ ಸುರಕ್ಷತೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆ",
    title: "ಸರ್ಕಾರಿ ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲಿ ನಾಗರಿಕರನ್ನು ನಾವು ಹೇಗೆ ರಕ್ಷಿಸುತ್ತೇವೆ",
    subtitle: "ನಾಗರಿಕ ಸೇವೆಗಳು ಎಲ್ಲರಿಗೂ ಸುಲಭವಾಗಿ ಸಿಗಬೇಕು. ಸಿವಿಕ್ ಟಾಸ್ಕ್ ನ್ಯಾವಿಗೇಟರ್ ಯಾವುದೇ ಶುಲ್ಕ ವಸೂಲಿ ಮಾಡುವುದಿಲ್ಲ.",
    stats: [
      { value: "10 ಕ್ಷೇತ್ರಗಳು", label: "ರಾಷ್ಟ್ರೀಯ ನಾಗರಿಕ ಸೇವೆಗಳು", sublabel: "ಆಧಾರ್, ಸಾರಿಗೆ, ತೆರಿಗೆ, ಪಾಸ್‌ಪೋರ್ಟ್" },
      { value: "28 ರಾಜ್ಯಗಳು & ಕೇಂದ್ರಾಡಳಿತ", label: "ರಾಜ್ಯ ಪೋರ್ಟಲ್‌ಗಳು", sublabel: "ಸೇವಾ ಸಿಂಧು, ಇ-ಮಿತ್ರ ಮತ್ತು ಇತರ" },
      { value: "₹0.00", label: "ನಾಗರಿಕ ಶುಲ್ಕ", sublabel: "ಸಂಪೂರ್ಣ ಉಚಿತ ಮಾರ್ಗದರ್ಶಿ. ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ." },
      { value: "100%", label: "ಅಧಿಕೃತ .gov.in ಡೊಮೇನ್‌ಗಳು", sublabel: "ನೇರವಾಗಿ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗೆ ಸಂಪರ್ಕ" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "ಮಧ್ಯವರ್ತಿಗಳು ಮತ್ತು ದಲ್ಲಾಳಿಗಳ ನಿರ್ಮೂಲನೆ",
        description: "ಉಚಿತ ಸರ್ಕಾರಿ ಸೇವೆಗಳಿಗೆ ದಲ್ಲಾಳಿಗಳು ಹಣ ಪಡೆಯುವುದನ್ನು ತಡೆದು, ನಿಮ್ಮನ್ನು ನೇರವಾಗಿ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಕರೆದೊಯ್ಯುತ್ತೇವೆ.",
      },
      {
        iconType: "doc",
        title: "ಸರಳ ಕನ್ನಡ, ಕ್ಲಿಷ್ಟ ನಿಯಮಗಳಿಲ್ಲ",
        description: "ಸಂಕೀರ್ಣ ಸರ್ಕಾರಿ ಆದೇಶಗಳನ್ನು ಸುಲಭ ಹಂತಗಳಾಗಿ ವಿವರಿಸುತ್ತೇವೆ.",
      },
      {
        iconType: "clock",
        title: "ದಾಖಲೆ ಪೂರ್ವ ಪರಿಶೀಲನೆ",
        description: "ಕಚೇರಿಗೆ ಹೋಗುವ ಮುನ್ನ ಅಗತ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
      },
      {
        iconType: "landmark",
        title: "ಸೇವಾ ಹಕ್ಕು (RTS) ಕಾಲಮಿತಿ",
        description: "ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಪಡೆಯಲು ಕಾನೂನುಬದ್ಧವಾಗಿ ನಿಗದಿಪಡಿಸಲಾದ ಕಾಲಮಿತಿ ತಿಳಿಯಿರಿ.",
      },
    ],
  },
  ml: {
    badge: "പൗര സുരക്ഷയും സുതാര്യതയും",
    title: "സർക്കാർ നടപടിക്രമങ്ങളിൽ പൗരന്മാരെ ഞങ്ങൾ എങ്ങനെ സംരക്ഷിക്കുന്നു",
    subtitle: "സർക്കാർ സേവനങ്ങൾ എല്ലാവർക്കും ലഭ്യമാകണം. സിവിക് ടാസ്ക് നാവിഗേറ്റർ ഫീസ് ഈടാക്കുകയോ പാസ്‌വേഡുകൾ സൂക്ഷിക്കുകയോ ചെയ്യുന്നില്ല.",
    stats: [
      { value: "10 മേഖലകൾ", label: "ദേശീയ പൗര സേവനങ്ങൾ", sublabel: "ആധാർ, ഗതാഗതം, നികുതി, പാസ്‌പോർട്ട്" },
      { value: "28 സംസ്ഥാനങ്ങൾ & കേന്ദ്രഭരണ", label: "സംസ്ഥാന പോർട്ടലുകൾ", sublabel: "ഇ-ഡിസ്ട്രിക്റ്റ്, സേവാ സിന്ധു മുതലായവ" },
      { value: "₹0.00", label: "പൗര ഫീസ്", sublabel: "100% സൗജന്യ മാർഗ്ഗനിർദ്ദേശം. ഇടനിലക്കാരില്ല." },
      { value: "100%", label: "ഔദ്യോഗിക .gov.in ഡൊമെയ്‌നുകൾ", sublabel: "നേരിട്ട് ഔദ്യോഗിക സർക്കാർ പോർട്ടലുകളിലേക്ക്" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "ഇടനിലക്കാരെയും ദല്ലാളന്മാരെയും ഒഴിവാക്കുന്നു",
        description: "സൗജന്യ സർക്കാർ സേവനങ്ങൾക്ക് ഇടനിലക്കാർ പണം വാങ്ങുന്നത് തടഞ്ഞ്, നിങ്ങളെ നേരിട്ട് സർക്കാർ പോർട്ടലുകളിലേക്ക് നയിക്കുന്നു.",
      },
      {
        iconType: "doc",
        title: "ലളിതമായ മലയാളം, നിയമക്കുരുക്കുകളില്ല",
        description: "സങ്കീർണ്ണമായ സർക്കാർ വിജ്ഞാപനങ്ങളെ ലളിതമായ ഘട്ടങ്ങളായി വിശദീകരിക്കുന്നു.",
      },
      {
        iconType: "clock",
        title: "രേഖകളുടെ മുൻകൂട്ടിയുള്ള പരിശോധന",
        description: "ഓഫീസിൽ പോകുന്നതിനുമുമ്പ് ആവശ്യമായ സർട്ടിഫിക്കറ്റുകളും ഐഡി പ്രൂഫുകളും ഉറപ്പാക്കുക.",
      },
      {
        iconType: "landmark",
        title: "സേവാവകാശ നിയമം (RTS) സമയപരിധി",
        description: "സർട്ടിഫിക്കറ്റുകൾ ലഭിക്കുന്നതിനുള്ള നിയമപരമായ സമയപരിധി പരിശോധിക്കുക.",
      },
    ],
  },
  pa: {
    badge: "ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਅਤੇ ਪਾਰਦਰਸ਼ਤਾ",
    title: "ਅਸੀਂ ਸਰਕਾਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਵਿੱਚ ਨਾਗਰਿਕਾਂ ਦੀ ਕਿਵੇਂ ਰੱਖਿਆ ਕਰਦੇ ਹਾਂ",
    subtitle: "ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਸਾਰਿਆਂ ਲਈ ਆਸਾਨ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ। ਸਿਵਿਕ ਟਾਸਕ ਨੈਵੀਗੇਟਰ ਕੋਈ ਫੀਸ ਨਹੀਂ ਲੈਂਦਾ ਅਤੇ ਨਾ ਹੀ ਪਾਸਵਰਡ ਸੁਰੱਖਿਅਤ ਕਰਦਾ ਹੈ।",
    stats: [
      { value: "10 ਖੇਤਰ", label: "ਰਾਸ਼ਟਰੀ ਨਾਗਰਿਕ ਸੇਵਾਵਾਂ", sublabel: "ਆਧਾਰ, ਆਵਾਜਾਈ, ਟੈਕਸ, ਪਾਸਪੋਰਟ, ਸਕੀਮਾਂ" },
      { value: "28 ਰਾਜ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਿਤ", label: "ਰਾਜ ਪੋਰਟਲ", sublabel: "ਸੇਵਾ ਕੇਂਦਰ, ਸੇਵਾ ਸਿੰਧੂ ਆਦਿ" },
      { value: "₹0.00", label: "ਨਾਗਰਿਕ ਫੀਸ", sublabel: "ਮੁਫ਼ਤ ਜਨਤਕ ਗਾਈਡ। ਕੋਈ ਦਲਾਲ ਫੀਸ ਨਹੀਂ।" },
      { value: "100%", label: "ਅਧਿਕਾਰਤ .gov.in ਡੋਮੇਨ", sublabel: "ਸਿੱਧਾ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟਾਂ ਵੱਲ" },
    ],
    pillars: [
      {
        iconType: "shield",
        title: "ਦਲਾਲਾਂ ਅਤੇ ਵਿਚੋਲਿਆਂ ਤੋਂ ਛੁਟਕਾਰਾ",
        description: "ਮੁਫ਼ਤ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਲਈ ਦਲਾਲ ਪੈਸੇ ਵਸੂਲਦੇ ਹਨ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਿੱਧਾ ਅਸਲ ਸਰਕਾਰੀ ਪੋਰਟਲ ਨਾਲ ਜੋੜਦੇ ਹਾਂ।",
      },
      {
        iconType: "doc",
        title: "ਸਰਲ ਭਾਸ਼ਾ, ਬਿਨਾਂ ਕਿਸੇ ਉਲਝਣ ਦੇ",
        description: "ਸਰਕਾਰੀ ਨਿਯਮਾਂ ਅਤੇ ਅਧਿਸੂਚਨਾਵਾਂ ਨੂੰ ਆਸਾਨ ਕਦਮਾਂ ਵਿੱਚ ਸਮਝਾਉਂਦੇ ਹਾਂ।",
      },
      {
        iconType: "clock",
        title: "ਦਸਤਾਵੇਜ਼ ਪੂਰਵ-ਜਾਂਚ",
        description: "ਦਫ਼ਤਰ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਜਾਣੋ ਕਿ ਕਿਹੜੇ ਕਾਗਜ਼ਾਤ ਜਾਂ ਆਧਾਰ OTP ਦੀ ਲੋੜ ਹੈ।",
      },
      {
        iconType: "landmark",
        title: "ਸੇਵਾ ਅਧਿਕਾਰ ਕਾਨੂੰਨ (RTS) ਸਮਾਂ ਸੀਮਾ",
        description: "ਸਮੇਂ ਸਿਰ ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕਾਨੂੰਨੀ ਸਮਾਂ ਸੀਮਾ ਦੀ ਜਾਂਚ ਕਰੋ।",
      },
    ],
  },
};

export function TrustStats({ currentLang = "en" }: { currentLang?: SupportedLanguage }) {
  const data = TRUST_DATA[currentLang] || TRUST_DATA.en;
  const stats = data.stats;
  const pillars = data.pillars;

  const renderIcon = (type: PillarItem["iconType"]) => {
    switch (type) {
      case "shield":
        return <ShieldCheckIcon className="w-6 h-6 text-blue-700" />;
      case "doc":
        return <DocumentCheckIcon className="w-6 h-6 text-emerald-700" />;
      case "clock":
        return <ClockIcon className="w-6 h-6 text-indigo-700" />;
      case "landmark":
        return <LandmarkIcon className="w-6 h-6 text-purple-700" />;
    }
  };

  return (
    <section id="trust" className="py-20 bg-white border-b border-slate-200/80 dark:bg-slate-900/60 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-20 border border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {stats.map((item, idx) => (
              <div key={idx} className={`${idx !== 0 ? "pt-6 lg:pt-0 lg:pl-8" : ""}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-1">
                  {item.value}
                </p>
                <p className="text-sm font-bold text-blue-300">{item.label}</p>
                <p className="text-xs text-slate-400 mt-1">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800">
            {data.badge}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight dark:text-white">
            {data.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 hover:bg-slate-50 transition-colors dark:bg-slate-850 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-2xs dark:bg-slate-800 dark:border-slate-700">
                {renderIcon(pillar.iconType)}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
