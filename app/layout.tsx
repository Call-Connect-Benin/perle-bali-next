import type { Metadata } from "next";
import { Calligraffitti, Imprima, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mêmes polices que l'ancien site WordPress : Calligraffitti pour les titres
// (h1-h6 sur perle-bali.fr), Imprima pour le corps de texte.
const calligraffitti = Calligraffitti({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-outfit",
  display: "swap",
});

const imprima = Imprima({
  subsets: ["latin"],
  weight: ["400"],
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
  metadataBase: new URL("https://www.perle-bali.fr"),
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
    title: "Perle de Bali – Massages Balinais à Orly (94)",
    description:
      "Votre havre de paix à Orly. Massages balinais traditionnels : bien-être, évasion, pure détente, deep tissue, enfant.",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1920,
        height: 1280,
        alt: "Massage relaxant chez Perle de Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perle de Bali – Massages Balinais à Orly (94)",
    description: "Votre havre de paix à Orly. Massages balinais traditionnels et sur-mesure.",
    images: ["/images/hero/hero-main.jpg"],
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
      className={`${calligraffitti.variable} ${imprima.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bali-cream text-bali-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Perle de Bali",
              image: "https://www.perle-bali.fr/images/hero/hero-main.jpg",
              url: "https://www.perle-bali.fr",
              telephone: "+33756139596",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8 rue Jean Jaurès",
                addressLocality: "Orly",
                postalCode: "94310",
                addressCountry: "FR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "18:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
