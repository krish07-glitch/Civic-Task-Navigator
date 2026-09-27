import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('civic_theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-800 selection:text-white transition-colors duration-150">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
