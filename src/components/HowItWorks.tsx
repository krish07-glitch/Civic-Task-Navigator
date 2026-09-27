"use client";

import React from "react";
import { SearchIcon, DocumentCheckIcon, ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon } from "./Icons";
import { SupportedLanguage } from "@/types/civic";
import { getTranslations } from "@/data/translations";

interface StepData {
  step: string;
  title: string;
  description: string;
  tag: string;
  preview: {
    userQueryLabel: string;
    identifiedLabel: string;
    query?: string;
    detected?: string[];
    docsPreCheckLabel?: string;
    readyLabel?: string;
    items?: { name: string; done: boolean }[];
    routingLabel?: string;
    safeDestLabel?: string;
    action?: string;
    turnaround?: string;
    guarantee?: string;
  };
}

const HOW_IT_WORKS_DATA: Record<SupportedLanguage, {
  steps: StepData[];
  calloutTitle: string;
  calloutDesc: string;
  calloutBtn: string;
}> = {
  en: {
    steps: [
      {
        step: "01",
        title: "Tell us what you need in plain words",
        description:
          "No need to know bureaucratic jargon, statutory act sections, or complex department codes. Simply describe your goal in natural language (e.g., 'I want to start a small clothing shop in Mumbai' or 'I want to apply for an income certificate').",
        tag: "Plain Language Intent",
        preview: {
          userQueryLabel: "User Query",
          identifiedLabel: "Services Identified",
          query: '"I want to start a small clothing business in Mumbai"',
          detected: [
            "Udyam MSME Registration (Free)",
            "Maharashtra Shop & Establishment (Gumasta)",
            "GST Registration (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "Get your verified requirements checklist",
        description:
          "Receive a transparent breakdown of required identity proofs (Aadhaar, PAN, Electricity bill), verified government statutory fees, and prerequisite steps before you apply.",
        tag: "Zero-Surprise Checklist",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "Documents Pre-Check",
          readyLabel: "3 of 4 Ready",
          items: [
            { name: "Aadhaar Card (Active Mobile OTP)", done: true },
            { name: "PAN Card of Proprietor", done: true },
            { name: "Electricity Bill of Premises (< 2 months)", done: true },
            { name: "Shopfront Photo (Marathi Board)", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "Submit on verified .gov.in portals",
        description:
          "Know whether the service can be completed 100% online through Aadhaar e-KYC or requires an appointment at an official center (PSK, RTO, or Aaple Sarkar Seva Kendra).",
        tag: "Verified .gov.in Routing",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "Official .gov.in Routing",
          safeDestLabel: "Safe Destination",
          action: "Direct Official .gov.in Submission",
          turnaround: "Est. Turnaround: 3 - 7 Working Days",
          guarantee: "Protected by Official Digital Signature",
        },
      },
    ],
    calloutTitle: "Starting a business or need an urgent state certificate?",
    calloutDesc: "Select Maharashtra or your state above to explore certified statutory procedures, from Aaple Sarkar revenue services to Udyam MSME and GST registrations.",
    calloutBtn: "Explore All 10 Categories",
  },
  hi: {
    steps: [
      {
        step: "01",
        title: "अपनी आवश्यकता सरल शब्दों में बताएं",
        description:
          "सरकारी शब्दावली, कानूनी धाराओं या विभाग कोड को जानने की कोई आवश्यकता नहीं है। बस अपनी आवश्यकता लिखें (उदा. 'मुंबई में कपड़े की दुकान शुरू करनी है' या 'मुझे आय प्रमाण पत्र चाहिए')।",
        tag: "सरल भाषा में मंशा",
        preview: {
          userQueryLabel: "उपयोगकर्ता खोज",
          identifiedLabel: "पहचानी गई सेवाएं",
          query: '"मुझे मुंबई में कपड़ों का छोटा व्यवसाय शुरू करना है"',
          detected: [
            "उद्यम MSME पंजीकरण (निःशुल्क)",
            "महाराष्ट्र दुकान एवं स्थापना (गुमास्ता)",
            "GST पंजीकरण (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "प्रमाणित आवश्यक दस्तावेजों की चेकलिस्ट प्राप्त करें",
        description:
          "आवेदन करने से पहले पहचान प्रमाण (आधार, पैन, बिजली बिल), आधिकारिक सरकारी शुल्क और आवश्यक पूर्व-शर्तों की स्पष्ट सूची प्राप्त करें।",
        tag: "पारदर्शी चेकलिस्ट",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "दस्तावेज़ पूर्व-जांच",
          readyLabel: "4 में से 3 तैयार",
          items: [
            { name: "आधार कार्ड (सक्रिय मोबाइल OTP)", done: true },
            { name: "मालिक का पैन कार्ड", done: true },
            { name: "परिसर का बिजली बिल (< 2 माह)", done: true },
            { name: "दुकान का फोटो", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "प्रमाणित .gov.in पोर्टल्स पर सुरक्षित आवेदन करें",
        description:
          "जानें कि सेवा आधार ई-केवाईसी द्वारा 100% ऑनलाइन पूरी हो सकती है या किसी आधिकारिक केंद्र (PSK, RTO, या नागरिक सेवा केंद्र) पर जाना होगा।",
        tag: "प्रमाणित .gov.in रूटिंग",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "आधिकारिक .gov.in रूटिंग",
          safeDestLabel: "सुरक्षित गंतव्य",
          action: "सीधे आधिकारिक .gov.in पर जमा करें",
          turnaround: "अनुमानित समय: 3 - 7 कार्य दिवस",
          guarantee: "आधिकारिक डिजिटल हस्ताक्षर द्वारा सुरक्षित",
        },
      },
    ],
    calloutTitle: "नया व्यवसाय शुरू कर रहे हैं या तत्काल राज्य प्रमाण पत्र चाहिए?",
    calloutDesc: "प्रमाणित प्रक्रियाओं को देखने के लिए ऊपर अपना राज्य चुनें, जैसे आपले सरकार राजस्व सेवाएं, उद्यम MSME और GST पंजीकरण।",
    calloutBtn: "सभी 10 श्रेणियां देखें",
  },
  mr: {
    steps: [
      {
        step: "01",
        title: "तुमची गरज सोप्या शब्दांत सांगा",
        description:
          "शासकीय कलमे किंवा क्लिष्ट विभागांची माहिती असण्याची आवश्यकता नाही. तुमची गरज सोप्या भाषेत सांगा (उदा. 'मुंबईत कपड्यांचे दुकान सुरू करायचे आहे' किंवा 'उत्पन्न दाखला हवा आहे').",
        tag: "सोप्या भाषेत शोध",
        preview: {
          userQueryLabel: "नागरिक शोध",
          identifiedLabel: "शोधलेली सेवा",
          query: '"मला मुंबईत कपड्यांचा छोटा व्यवसाय सुरू करायचा आहे"',
          detected: [
            "उद्यम MSME नोंदणी (मोफत)",
            "महाराष्ट्र गुमास्ता परवाना",
            "GST नोंदणी (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "कागदपत्रांची प्रमाणित चेकलिस्ट मिळवा",
        description:
          "अर्ज करण्यापूर्वी ओळख पुरावे (आधार, पॅन, वीज बिल), अधिकृत शासकीय शुल्क आणि आवश्यक अटींची स्पष्ट माहिती मिळवा.",
        tag: "पारदर्शक चेकलिस्ट",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "कागदपत्रे पूर्व-तपासणी",
          readyLabel: "४ पैकी ३ तयार",
          items: [
            { name: "आधार कार्ड (सक्रिय मोबाइल OTP)", done: true },
            { name: "मालकाचे पॅन कार्ड", done: true },
            { name: "जागेचे वीज बिल (< २ महिने)", done: true },
            { name: "दुकानाचा फोटो (मराठी पाटी)", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "अधिकृत .gov.in पोर्टलवर सुरक्षित अर्ज करा",
        description:
          "सेवा आधार ई-केवायसीद्वारे १००% ऑनलाइन आहे की सेतू केंद्र/आरटीओ कार्यालयात जावे लागेल हे स्पष्टपणे जाणून घ्या.",
        tag: "अधिकृत .gov.in पोर्टल",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "अधिकृत .gov.in मार्गक्रमण",
          safeDestLabel: "सुरक्षित संकेतस्थळ",
          action: "थेट अधिकृत .gov.in वर सादर करा",
          turnaround: "अपेक्षित कालावधी: ३ - ७ दिवस",
          guarantee: "डिजिटल स्वाक्षरीने सुरक्षित",
        },
      },
    ],
    calloutTitle: "नवीन व्यवसाय सुरू करत आहात किंवा राज्य प्रमाणपत्राची गरज आहे?",
    calloutDesc: "आपले सरकार महसूल सेवा, उद्यम नोंदणी आणि जीएसटी सेवांसाठी वर आपले राज्य निवडा.",
    calloutBtn: "सर्व १० श्रेणी पहा",
  },
  gu: {
    steps: [
      {
        step: "01",
        title: "તમારી જરૂરિયાત સરળ શબ્દોમાં જણાવો",
        description:
          "સરકારી પરિભાષા જાણવાની જરૂર નથી. ફક્ત તમારી જરૂરિયાત સરળ ભાષામાં લખો (દા.ત. 'દુકાન શરૂ કરવી છે' અથવા 'આવકનું પ્રમાણપત્ર કઢાવવું છે').",
        tag: "સરળ ભાષામાં ઇરાદો",
        preview: {
          userQueryLabel: "વપરાશકર્તા શોધ",
          identifiedLabel: "ઓળખાયેલ સેવાઓ",
          query: '"મારે કપડાંનો નાનો વ્યવસાય શરૂ કરવો છે"',
          detected: [
            "ઉદ્યમ MSME નોંધણી (મફત)",
            "ગુમાસ્તા ધારા નોંધણી",
            "GST નોંધણી (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "જરૂરી દસ્તાવેજોની ચકાસણી યાદી મેળવો",
        description:
          "અરજી કરતા પહેલા ઓળખના પુરાવા (આધાર, પાન, વીજળી બિલ), સત્તાવાર ફી અને પૂર્વશરતોની પારદર્શક યાદી મેળવો.",
        tag: "સચોટ ચેકલિસ્ટ",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "દસ્તાવેજ પૂર્વ-ચકાસણી",
          readyLabel: "૪ માંથી ૩ તૈયાર",
          items: [
            { name: "આધાર કાર્ડ (OTP સાથે)", done: true },
            { name: "પાન કાર્ડ", done: true },
            { name: "વીજળી બિલ (< ૨ મહિના જૂનું)", done: true },
            { name: "દુકાનનો ફોટો", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "અધિકૃત .gov.in પોર્ટલ પર સુરક્ષિત અરજી કરો",
        description:
          "સેવા આધાર e-KYC દ્વારા સંપૂર્ણ ઓનલાઇન પૂર્ણ થાય છે કે જનસેવા કેન્દ્ર જવું પડશે તે અગાઉથી જાણો.",
        tag: "પ્રમાણિત .gov.in રૂટિંગ",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "સત્તાવાર .gov.in રૂટિંગ",
          safeDestLabel: "સુરક્ષિત સાઇટ",
          action: "સીધા સત્તાવાર પોર્ટલ પર જમા કરો",
          turnaround: "અંદાજિત સમય: ૩ - ૭ કાર્યકારી દિવસો",
          guarantee: "ડિજિટલ સહી દ્વારા સુરક્ષિત",
        },
      },
    ],
    calloutTitle: "નવો વ્યવસાય શરૂ કરી રહ્યા છો અથવા પ્રમાણપત્રની જરૂર છે?",
    calloutDesc: "ડિજિટલ ગુજરાત સેવાઓ, ઉદ્યમ MSME અને GST માટે ઉપર તમારું રાજ્ય પસંદ કરો.",
    calloutBtn: "બધી ૧૦ શ્રેણીઓ જુઓ",
  },
  ta: {
    steps: [
      {
        step: "01",
        title: "உங்கள் தேவையை எளிய சொற்களில் கூறுங்கள்",
        description:
          "அரசு சட்டப்பிரிவுகள் அல்லது சிக்கலான குறியீடுகளை அறிய வேண்டியதில்லை. உங்கள் தேவையை இயல்பான மொழியில் விவரியுங்கள்.",
        tag: "எளிய மொழித் தேடல்",
        preview: {
          userQueryLabel: "பயனர் தேடல்",
          identifiedLabel: "கண்டறியப்பட்ட சேவைகள்",
          query: '"நான் ஒரு புதிய ஆடை வணிகம் தொடங்க விரும்புகிறேன்"',
          detected: [
            "உத்யம் MSME பதிவு (இலவசம்)",
            "வணிக நிறுவனப் பதிவு",
            "GST பதிவு (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "தேவையான ஆவணங்களின் பட்டியலைப் பெறுங்கள்",
        description:
          "விண்ணப்பிக்கும் முன் தேவையான அடையாளச் சான்றுகள் (ஆதார், பான், மின் கட்டண ரசீது) மற்றும் அரசு கட்டணங்களை அறிந்து கொள்ளுங்கள்.",
        tag: "தெளிவான சரிபார்ப்புப் பட்டியல்",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "ஆவண முன்-சரிபார்ப்பு",
          readyLabel: "4 இல் 3 தயார்",
          items: [
            { name: "ஆதார் அட்டை (OTP வசதியுடன்)", done: true },
            { name: "பான் கார்டு", done: true },
            { name: "மின் கட்டண ரசீது (< 2 மாதங்கள்)", done: true },
            { name: "கடையின் புகைப்படம்", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "அதிகாரப்பூர்வ .gov.in தளங்களில் விண்ணப்பிக்கவும்",
        description:
          "இச்சேவை முழுமையாக ஆன்லைனில் சாத்தியமா அல்லது அரசு அலுவலகத்திற்கு செல்ல வேண்டுமா என்பதைத் தெளிவாக அறியுங்கள்.",
        tag: "அங்கீகரிக்கப்பட்ட தளம்",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "அதிகாரப்பூர்வ .gov.in தளம்",
          safeDestLabel: "பாதுகாப்பான முகவரி",
          action: "நேரடி .gov.in சமர்ப்பிப்பு",
          turnaround: "மதிப்பிடப்பட்ட காலம்: 3 - 7 நாட்கள்",
          guarantee: "டிஜிட்டல் கையொப்பத்துடன் பாதுகாப்பானது",
        },
      },
    ],
    calloutTitle: "புதிய தொழில் தொடங்க வேண்டுமா அல்லது அரசு சான்றிதழ் தேவையா?",
    calloutDesc: "தமிழ்நாடு இ-சேவை, உத்யம் பதிவு மற்றும் ஜிஎஸ்டி நடைமுறைகளை அறிய உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்.",
    calloutBtn: "10 பிரிவுகளையும் காண்க",
  },
  te: {
    steps: [
      {
        step: "01",
        title: "మీ అవసరాన్ని సరళమైన పదాలలో చెప్పండి",
        description:
          "క్లిష్టమైన ప్రభుత్వ నిబంధనలతో పనిలేదు. మీ అవసరాన్ని సులభమైన తెలుగులో వివరించండి.",
        tag: "సులభమైన శోధన",
        preview: {
          userQueryLabel: "వినియోగదారు శోధన",
          identifiedLabel: "గుర్తించిన సేవలు",
          query: '"నేను ఒక చిన్న వ్యాపారం ప్రారంభించాలనుకుంటున్నాను"',
          detected: [
            "ఉద్యమ్ MSME నమోదు (ఉచితం)",
            "దుకాణాల రిజిస్ట్రేషన్",
            "GST నమోదు (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "కావలసిన పత్రాల చెక్‌లిస్ట్ పొందండి",
        description:
          "దరఖాస్తు చేయడానికి ముందు అవసరమైన గుర్తింపు పత్రాలు (ఆధార్, పాన్, విద్యుత్ బిల్లు) మరియు అధికారిక రుసుముల స్పష్టమైన వివరాలు తెలుసుకోండి.",
        tag: "పారదర్శక చెక్‌లిస్ట్",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "పత్రాల ముందస్తు తనిఖీ",
          readyLabel: "4 లో 3 సిద్ధం",
          items: [
            { name: "ఆధార్ కార్డు (సక్రియ మొబైల్ OTP)", done: true },
            { name: "పాన్ కార్డు", done: true },
            { name: "విద్యుత్ బిల్లు (< 2 నెలలు)", done: true },
            { name: "షాపు ఫోటో", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "అధికారిక .gov.in పోర్టల్‌లో దరఖాస్తు చేయండి",
        description:
          "సేవ ఆన్‌లైన్‌లో పూర్తవుతుందా లేదా మీసేవా కేంద్రానికి వెళ్లాలా అనే సమాచారాన్ని స్పష్టంగా తెలుసుకోండి.",
        tag: "అధికారిక .gov.in రూటింగ్",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "అధికారిక .gov.in మార్గం",
          safeDestLabel: "సురక్షితమైన గమ్యం",
          action: "నేరుగా అధికారిక .gov.in లో సమర్పించండి",
          turnaround: "అంచనా సమయం: 3 - 7 పని దినాలు",
          guarantee: "డిజిటల్ సంతకంతో రక్షితం",
        },
      },
    ],
    calloutTitle: "కొత్త వ్యాపారం ప్రారంభిస్తున్నారా లేదా ప్రభుత్వ పత్రం కావాలా?",
    calloutDesc: "మీసేవ, ఉద్యమ్ MSME మరియు GST ప్రక్రియల కోసం మీ రాష్ట్రాన్ని ఎంచుకోండి.",
    calloutBtn: "అన్ని 10 వర్గాలను చూడండి",
  },
  bn: {
    steps: [
      {
        step: "01",
        title: "আপনার প্রয়োজনীয়তা সহজ ভাষায় বলুন",
        description:
          "সরকারি জটিল নিয়ম জানার প্রয়োজন নেই। শুধু আপনার প্রয়োজনীয়তা সহজ ভাষায় লিখুন।",
        tag: "সহজ ভাষায় উদ্দেশ্য",
        preview: {
          userQueryLabel: "নাগরিক অনুসন্ধান",
          identifiedLabel: "চিহ্নিত পরিষেবা",
          query: '"আমি একটি ছোট পোশাকের ব্যবসা শুরু করতে চাই"',
          detected: [
            "উদ্যম MSME নিবন্ধন (বিনামূল্যে)",
            "দোকান ও প্রতিষ্ঠান লাইসেন্স",
            "GST নিবন্ধন (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "প্রয়োজনীয় নথির চেকলিস্ট পান",
        description:
          "আবেদন করার আগে প্রয়োজনীয় পরিচয় প্রমাণ (আধার, প্যান, বিদ্যুৎ বিল) এবং সরকারি ফির সঠিক বিবরণ জানুন।",
        tag: "স্বচ্ছ চেকলিস্ট",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "নথি প্রাক-যাচাই",
          readyLabel: "৪টির মধ্যে ৩টি প্রস্তুত",
          items: [
            { name: "আধার কার্ড (সক্রিয় মোবাইল OTP সহ)", done: true },
            { name: "প্যান কার্ড", done: true },
            { name: "বিদ্যুৎ বিল (< ২ মাস)", done: true },
            { name: "দোকানের ছবি", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "অফিসিয়াল .gov.in পোর্টালে নিরাপদে আবেদন করুন",
        description:
          "পরিষেবাটি ১০০% অনলাইন নাকি কোনো সরকারি কেন্দ্রে যেতে হবে তা স্পষ্টভাবে জানুন।",
        tag: "প্রমাণিত .gov.in পোর্টাল",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "অফিসিয়াল .gov.in নির্দেশিকা",
          safeDestLabel: "নিরাপদ গন্তব্য",
          action: "সরাসরি সরকারি পোর্টালে জমা দিন",
          turnaround: "আনুমানিক সময়: ৩ - ৭ কার্যদিবস",
          guarantee: "ডিজিটাল স্বাক্ষর দ্বারা সুরক্ষিত",
        },
      },
    ],
    calloutTitle: "নতুন ব্যবসা শুরু করছেন বা রাজ্য শংসাপত্রের প্রয়োজন?",
    calloutDesc: "রাজ্য পরিষেবা, উদ্যম MSME ও GST নিবন্ধনের জন্য উপরে আপনার রাজ্য নির্বাচন করুন।",
    calloutBtn: "সকল ১০টি বিভাগ দেখুন",
  },
  kn: {
    steps: [
      {
        step: "01",
        title: "ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಸರಳ ಮಾತುಗಳಲ್ಲಿ ತಿಳಿಸಿ",
        description:
          "ಸರ್ಕಾರಿ ಸಂಕೀರ್ಣ ನಿಯಮಗಳನ್ನು ತಿಳಿಯಬೇಕಾಗಿಲ್ಲ. ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಸರಳ ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ.",
        tag: "ಸರಳ ಭಾಷೆಯ ಹುಡುಕಾಟ",
        preview: {
          userQueryLabel: "ಬಳಕೆದಾರರ ಹುಡುಕಾಟ",
          identifiedLabel: "ಗುರುತಿಸಲಾದ ಸೇವೆಗಳು",
          query: '"ನಾನು ಒಂದು ಸಣ್ಣ ಬಟ್ಟೆ ವ್ಯಾಪಾರ ಆರಂಭಿಸಲು ಬಯಸುತ್ತೇನೆ"',
          detected: [
            "ಉದ್ಯಮ್ MSME ನೋಂದಣಿ (ಉಚಿತ)",
            "ಅಂಗಡಿ ಮತ್ತು ಸಂಸ್ಥೆ ಪರವಾನಗಿ",
            "GST ನೋಂದಣಿ (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "ಅಗತ್ಯ ದಾಖಲೆಗಳ ಸ್ಪಷ್ಟ ಪಟ್ಟಿ ಪಡೆಯಿರಿ",
        description:
          "ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮುನ್ನ ಅಗತ್ಯ ಗುರುತಿನ ಪುರಾವೆಗಳು (ಆಧಾರ್, ಪಾನ್, ವಿದ್ಯುತ್ ಬಿಲ್) ಮತ್ತು ಅಧಿಕೃತ ಶುಲ್ಕವನ್ನು ತಿಳಿಯಿರಿ.",
        tag: "ಪಾರದರ್ಶಕ ಪಟ್ಟಿ",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "ದಾಖಲೆ ಪೂರ್ವ ಪರಿಶೀಲನೆ",
          readyLabel: "4 ರಲ್ಲಿ 3 ಸಿದ್ಧವಾಗಿದೆ",
          items: [
            { name: "ಆಧಾರ್ ಕಾರ್ಡ್ (OTP ಸಕ್ರಿಯ)", done: true },
            { name: "ಪಾನ್ ಕಾರ್ಡ್", done: true },
            { name: "ವಿದ್ಯುತ್ ಬಿಲ್ (< 2 ತಿಂಗಳು)", done: true },
            { name: "ಅಂಗಡಿಯ ಭಾವಚಿತ್ರ", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "ಅಧಿಕೃತ .gov.in ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
        description:
          "ಸೇವೆಯು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಮುಗಿಯುತ್ತದೆಯೇ ಅಥವಾ ಸೇವಾ ಸಿಂಧು ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಬೇಕೇ ಎಂದು ತಿಳಿಯಿರಿ.",
        tag: "ದೃಢೀಕೃತ .gov.in ನಿರ್ದೇಶನ",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "ಅಧಿಕೃತ .gov.in ಮಾರ್ಗ",
          safeDestLabel: "ಸುರಕ್ಷಿತ ತಾಣ",
          action: "ನೇರವಾಗಿ .gov.in ನಲ್ಲಿ ಸಲ್ಲಿಕೆ ಮಾಡಿ",
          turnaround: "ಅಂದಾಜು ಸಮಯ: 3 - 7 ದಿನಗಳು",
          guarantee: "ಡಿಜಿಟಲ್ ಸಹಿಯೊಂದಿಗೆ ಸುರಕ್ಷಿತ",
        },
      },
    ],
    calloutTitle: "ಹೊಸ ವ್ಯವಹಾರ ಆರಂಭಿಸುತ್ತಿದ್ದೀರಾ ಅಥವಾ ಪ್ರಮಾಣಪತ್ರದ ಅಗತ್ಯವಿದೆಯೇ?",
    calloutDesc: "ಸೇವಾ ಸಿಂಧು, ಉದ್ಯಮ್ MSME ಮತ್ತು GST ಸೇವೆಗಳಿಗಾಗಿ ಮೇಲೆ ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    calloutBtn: "ಎಲ್ಲಾ 10 ವರ್ಗಗಳನ್ನು ನೋಡಿ",
  },
  ml: {
    steps: [
      {
        step: "01",
        title: "നിങ്ങളുടെ ആവശ്യം ലളിതമായ വാക്കുകളിൽ പറയൂ",
        description:
          "സർക്കാർ സാങ്കേതിക പദങ്ങൾ അറിയേണ്ടതില്ല. നിങ്ങളുടെ ആവശ്യം ലളിതമായി വ്യക്തമാക്കൂ.",
        tag: "ലളിതമായ ഭാഷാ തിരച്ചിൽ",
        preview: {
          userQueryLabel: "പൗരന്റെ ചോദ്യം",
          identifiedLabel: "തിരിച്ചറിഞ്ഞ സേവനങ്ങൾ",
          query: '"എനിക്ക് ഒരു ചെറിയ വസ്ത്ര വ്യാപാരം തുടങ്ങണം"',
          detected: [
            "ഉദ്യം MSME രജിസ്ട്രേഷൻ (സൗജന്യം)",
            "ഷോപ്പ് & എസ്റ്റാബ്ലിഷ്മെന്റ് ലൈസൻസ്",
            "GST രജിസ്ട്രേഷൻ (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "ആവശ്യമായ രേഖകളുടെ ചെക്ക്‌ലിസ്റ്റ് നേടൂ",
        description:
          "അപേക്ഷിക്കുന്നതിന് മുമ്പ് ആവശ്യമായ തിരിച്ചറിയൽ രേഖകളും (ആധാർ, പാൻ) സർക്കാർ ഫീസും മനസ്സിലാക്കൂ.",
        tag: "സുതാര്യമായ ചെക്ക്‌ലിസ്റ്റ്",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "രേഖകളുടെ മുൻകൂട്ടിയുള്ള പരിശോധന",
          readyLabel: "4-ൽ 3 എണ്ണം തയ്യാറാണ്",
          items: [
            { name: "ആധാർ കാർഡ് (OTP ഉള്ളത്)", done: true },
            { name: "പാൻ കാർഡ്", done: true },
            { name: "വൈദ്യുതി ബിൽ (< 2 മാസം)", done: true },
            { name: "സ്ഥാപനത്തിന്റെ ഫോട്ടോ", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "ഔദ്യോഗിക .gov.in പോർട്ടലിൽ അപേക്ഷിക്കൂ",
        description:
          "സേവനം ഓൺലൈനായി ലഭിക്കുമോ അതോ അക്ഷയ കേന്ദ്രത്തിൽ പോകേണ്ടതുണ്ടോ എന്ന് വ്യക്തമായി അറിയൂ.",
        tag: "ഔദ്യോഗിക .gov.in റൂട്ടിംഗ്",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "ഔദ്യോഗിക .gov.in ലിങ്ക്",
          safeDestLabel: "സുരക്ഷിത സൈറ്റ്",
          action: "നേരിട്ട് ഔദ്യോഗിക സൈറ്റിൽ സമർപ്പിക്കൂ",
          turnaround: "പ്രതീക്ഷിക്കുന്ന സമയം: 3 - 7 ദിവസങ്ങൾ",
          guarantee: "ഡിജിറ്റൽ ഒപ്പോടെ സുരക്ഷിതം",
        },
      },
    ],
    calloutTitle: "പുതിയ സംരംഭം തുടങ്ങുകയാണോ അതോ സർട്ടിഫിക്കറ്റ് ആവശ്യമുണ്ടോ?",
    calloutDesc: "ഇ-ഡിസ്ട്രിക്റ്റ് സേവനങ്ങൾ, ഉദ്യം MSME, GST എന്നിവയ്ക്കായി മുകളിൽ നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കൂ.",
    calloutBtn: "എല്ലാ 10 വിഭാഗങ്ങളും കാണുക",
  },
  pa: {
    steps: [
      {
        step: "01",
        title: "ਆਪਣੀ ਲੋੜ ਸਰਲ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ",
        description:
          "ਸਰਕਾਰੀ ਕਾਨੂੰਨੀ ਸ਼ਬਦਾਵਲੀ ਜਾਣਨ ਦੀ ਲੋੜ ਨਹੀਂ। ਬੱਸ ਆਪਣੀ ਲੋੜ ਆਸਾਨ ਸ਼ਬਦਾਂ ਵਿੱਚ ਲਿਖੋ।",
        tag: "ਆਸਾਨ ਸ਼ਬਦਾਂ ਵਿੱਚ ਖੋਜ",
        preview: {
          userQueryLabel: "ਨਾਗਰਿਕ ਖੋਜ",
          identifiedLabel: "ਪਛਾਣੀਆਂ ਗਈਆਂ ਸੇਵਾਵਾਂ",
          query: '"ਮੈਂ ਕੱਪੜਿਆਂ ਦਾ ਛੋਟਾ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ"',
          detected: [
            "ਉਦਿਅਮ MSME ਰਜਿਸਟ੍ਰੇਸ਼ਨ (ਮੁਫ਼ਤ)",
            "ਦੁਕਾਨ ਅਤੇ ਸਥਾਪਨਾ ਲਾਇਸੈਂਸ",
            "GST ਰਜਿਸਟ੍ਰੇਸ਼ਨ (gst.gov.in)",
          ],
        },
      },
      {
        step: "02",
        title: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਚੈੱਕਲਿਸਟ ਪ੍ਰਾਪਤ ਕਰੋ",
        description:
          "ਅਰਜ਼ੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਲੋੜੀਂਦੇ ਪਛਾਣ ਪੱਤਰ (ਆਧਾਰ, ਪੈਨ, ਬਿਜਲੀ ਬਿੱਲ) ਅਤੇ ਸਰਕਾਰੀ ਫੀਸਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ।",
        tag: "ਸਪੱਸ਼ਟ ਚੈੱਕਲਿਸਟ",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          docsPreCheckLabel: "ਦਸਤਾਵੇਜ਼ ਜਾਂਚ",
          readyLabel: "4 ਵਿੱਚੋਂ 3 ਤਿਆਰ",
          items: [
            { name: "ਆਧਾਰ ਕਾਰਡ (OTP ਵਾਲਾ)", done: true },
            { name: "ਪੈਨ ਕਾਰਡ", done: true },
            { name: "ਬਿਜਲੀ ਦਾ ਬਿੱਲ (< 2 ਮਹੀਨੇ)", done: true },
            { name: "ਦੁਕਾਨ ਦੀ ਫੋਟੋ", done: false },
          ],
        },
      },
      {
        step: "03",
        title: "ਅਧਿਕਾਰਤ .gov.in ਪੋਰਟਲ 'ਤੇ ਸੁਰੱਖਿਅਤ ਅਰਜ਼ੀ ਦਿਓ",
        description:
          "ਜਾਣੋ ਕਿ ਸੇਵਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਆਨਲਾਈਨ ਹੈ ਜਾਂ ਸੇਵਾ ਕੇਂਦਰ ਜਾਣਾ ਪਵੇਗਾ।",
        tag: "ਅਧਿਕਾਰਤ .gov.in ਰੂਟਿੰਗ",
        preview: {
          userQueryLabel: "",
          identifiedLabel: "",
          routingLabel: "ਅਧਿਕਾਰਤ .gov.in ਪੋਰਟਲ",
          safeDestLabel: "ਸੁਰੱਖਿਅਤ ਵੈੱਬਸਾਈਟ",
          action: "ਸਿੱਧਾ ਅਧਿਕਾਰਤ ਪੋਰਟਲ 'ਤੇ ਜਮ੍ਹਾ ਕਰੋ",
          turnaround: "ਅੰਦਾਜ਼ਨ ਸਮਾਂ: 3 - 7 ਕੰਮਕਾਜੀ ਦਿਨ",
          guarantee: "ਡਿਜੀਟਲ ਦਸਤਖਤਾਂ ਦੁਆਰਾ ਸੁਰੱਖਿਅਤ",
        },
      },
    ],
    calloutTitle: "ਨਵਾਂ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰ ਰਹੇ ਹੋ ਜਾਂ ਸਰਟੀਫਿਕੇਟ ਦੀ ਲੋੜ ਹੈ?",
    calloutDesc: "ਸੇਵਾ ਕੇਂਦਰ ਸੇਵਾਵਾਂ, ਉਦਿਅਮ MSME ਅਤੇ GST ਲਈ ਉੱਪਰ ਆਪਣਾ ਰਾਜ ਚੁਣੋ।",
    calloutBtn: "ਸਾਰੀਆਂ 10 ਸ਼੍ਰੇਣੀਆਂ ਦੇਖੋ",
  },
};

export function HowItWorks({ currentLang = "en" }: { currentLang?: SupportedLanguage }) {
  const t = getTranslations(currentLang);
  const data = HOW_IT_WORKS_DATA[currentLang] || HOW_IT_WORKS_DATA.en;
  const steps = data.steps;

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white border-y border-slate-200/80 dark:bg-slate-900/40 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800">
            {t.navHowItWorks || "How It Works"}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-xl hover:shadow-slate-200/60 hover:border-blue-300 hover:-translate-y-1 group dark:bg-slate-850 dark:hover:bg-slate-800 dark:border-slate-800 dark:hover:border-blue-500/60 dark:hover:shadow-slate-950/60"
            >
              {/* Step Number & Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black tracking-tight text-slate-300 group-hover:text-blue-700/40 transition-colors dark:text-slate-700 dark:group-hover:text-blue-500/40">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs dark:bg-slate-800 dark:border-slate-750 dark:text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Visual Preview Box */}
              <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-2xs">
                  {idx === 0 && item.preview.query && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-500 dark:text-slate-400 uppercase">{item.preview.userQueryLabel}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">{item.preview.identifiedLabel}</span>
                      </div>
                      <p className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700 truncate">
                        {item.preview.query}
                      </p>
                      <div className="flex flex-col gap-1 pt-1">
                        {item.preview.detected?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-medium border border-blue-100 dark:border-blue-800/80 flex items-center gap-1.5"
                          >
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span> {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {idx === 1 && item.preview.items && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-slate-500 dark:text-slate-400 uppercase">{item.preview.docsPreCheckLabel}</span>
                        <span className="text-indigo-700 dark:text-indigo-400 font-bold text-[10px]">{item.preview.readyLabel}</span>
                      </div>
                      {item.preview.items.map((doc, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 bg-slate-50/80 dark:bg-slate-800/80 px-2.5 py-1.5 rounded border border-slate-100 dark:border-slate-700"
                        >
                          <CheckCircleIcon
                            className={`w-4 h-4 shrink-0 ${
                              doc.done ? "text-emerald-600 dark:text-emerald-400" : "text-slate-300 dark:text-slate-600"
                            }`}
                          />
                          <span className={`truncate ${doc.done ? "font-medium" : "text-slate-500 dark:text-slate-400"}`}>
                            {doc.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                          <ShieldCheckIcon className="w-3.5 h-3.5" /> {item.preview.routingLabel}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px]">{item.preview.safeDestLabel}</span>
                      </div>
                      <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 rounded-lg p-2.5">
                        <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                          {item.preview.action}
                        </p>
                        <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                          {item.preview.turnaround}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 italic">
                          {item.preview.guarantee}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-lg font-bold">
              {data.calloutTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {data.calloutDesc}
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-md"
          >
            <span>{data.calloutBtn}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
