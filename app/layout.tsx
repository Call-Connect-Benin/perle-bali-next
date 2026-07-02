import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bali-cream text-bali-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
