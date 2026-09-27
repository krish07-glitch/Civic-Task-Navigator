import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Civic Task Navigator India | Step-by-Step Government Services & Official Portals",
  description:
    "Clear, step-by-step roadmaps for Indian government procedures: Aadhaar updates, Driving Licence (Sarathi Parivahan), Udyam MSME registration, Maharashtra Aaple Sarkar certificates, Passport Seva, and Voter ID with direct links to verified .gov.in and .nic.in portals.",
  keywords: [
    "civic task navigator",
    "indian government services",
    "aadhaar update online",
    "driving licence parivahan",
    "udyam msme registration",
    "income certificate aaple sarkar",
    "maharashtra civic services",
    "passport seva online",
    "voter id form 6",
    "national scholarship portal",
    "myscheme india",
    "digilocker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
