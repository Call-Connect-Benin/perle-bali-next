import type { Metadata } from "next";
import { Outfit, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Perle de Bali – Massages Balinais à Orly (94)",
    template: "%s | Perle de Bali",
  },
  description:
    "Perle de Bali, votre havre de paix à Orly. Massages balinais traditionnels : bien-être, évasion, pure détente, deep tissue, enfant. Prenez rendez-vous dès aujourd'hui.",
  keywords: [
    "massage balinais",
    "massage Orly",
    "bien-être 94",
    "massage détente",
    "Perle de Bali",
    "massage deep tissue",
    "massage chi nei tsang",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Perle de Bali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bali-cream text-bali-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
