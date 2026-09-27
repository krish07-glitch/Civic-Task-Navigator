"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Civic Task Navigator an official government portal?",
      a: "No. Civic Task Navigator is an independent, open-access public interest technology platform. We do not issue Aadhaar cards, driving licences, or caste certificates. Our purpose is to demystify complex government procedures, provide step-by-step roadmaps, document checklists, and direct you safely to verified official Indian government portals ending in .gov.in or .nic.in.",
    },
    {
      q: "Do I pay government fees on this website?",
      a: "Never. Civic Task Navigator is 100% free for citizens and will NEVER ask for your UPI PIN, debit card, or net banking credentials. Official statutory fees (such as ₹50 for Aadhaar address update or ₹1,500 for an Indian Passport) are paid exclusively on official government gateways (e.g. BharatKosh, SBI ePay, or Aaple Sarkar payment gateway).",
    },
    {
      q: "How can I ensure that a government website is genuine and not a scam?",
      a: "Always check the web address (URL) in your browser address bar. Authentic Indian government portals strictly end with .gov.in or .nic.in (for example: uidai.gov.in, parivahan.gov.in, passportindia.gov.in, incometax.gov.in). Avoid private websites ending in .com, .org, or .net that charge 'consulting fees' for free public services like Udyam MSME registration.",
    },
    {
      q: "How does the Maharashtra Right to Public Services (RTS / Aaple Sarkar) work?",
      a: "Under the Maharashtra Right to Public Services Act, 2015, over 500 state government services (such as Income Certificates, Domicile Certificates, Caste Certificates, Non-Creamy Layer certificates, and 7/12 land extracts) are legally guaranteed to be delivered within a defined statutory timeline (usually 7 to 15 working days) via the Aaple Sarkar portal.",
    },
    {
      q: "What should I do if my mobile number is not linked to Aadhaar?",
      a: "Many contactless government services (such as online Learner's Licence test, Udyam registration, or online ITR e-verification) require an active mobile number linked with Aadhaar to receive OTPs. If your number is not linked, you can visit any authorized Bank, Post Office, or Aadhaar Seva Kendra in person once for biometric mobile updating.",
    },
    {
      q: "Can I print or save the document checklist before going to the government office?",
      a: "Yes! Every procedure roadmap includes an interactive document pre-check where you can check off documents you have prepared, along with an instant 'Print Procedure Checklist' feature so you have a clean physical sheet ready before visiting the RTO, PSK, or Tehsildar office.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight">
            Common questions about Indian government procedures
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear answers to help you navigate public services safely and efficiently.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-700" : "text-slate-400"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
