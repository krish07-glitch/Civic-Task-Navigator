import React from "react";
import { CompassIcon, ShieldCheckIcon, LandmarkIcon } from "./Icons";

export function Footer() {
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
              Empowering Indian citizens to navigate complex central, state, and municipal procedures with complete clarity, verified document checklists, and direct official .gov.in routing.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheckIcon className="w-4 h-4" /> 100% Free Public Citizen Guide
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Focusing on Maharashtra & Pan-India Services</span>
            </div>
          </div>

          {/* Quick Indian Categories */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Indian Civic Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Aadhaar Update & PVC Card
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Driving Licence (Sarathi)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Udyam MSME & GST Registration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Maharashtra Aaple Sarkar Certificates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Indian Passport (Passport Seva)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Voter ID Registration (Form 6)
                </a>
              </li>
            </ul>
          </div>

          {/* Citizen Tools */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Citizen Tools
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How Roadmaps Work
                </a>
              </li>
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  Natural-Language Task Search
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  Official Portals Guarantee
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="https://services.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  National Portal of India ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Disclaimer */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Official Disclaimer
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              Civic Task Navigator is an independent, non-governmental civic technology resource. We are not affiliated with UIDAI, MoRTH, MEA, or any state government department.
            </p>
            <p className="text-[11px] text-slate-500">
              All applications and statutory fees must be completed on official portals ending in <strong>.gov.in</strong> or <strong>.nic.in</strong>.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Civic Task Navigator India. Open Citizen Resource.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Accessibility (Sugamya Bharat)
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Feedback / Suggestions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
