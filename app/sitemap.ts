import type { MetadataRoute } from "next";

const BASE_URL = "https://www.perle-bali.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date("2025-10-23"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/tarifs`, lastModified: new Date("2025-10-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/a-propos`, lastModified: new Date("2025-10-23"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services-massage`, lastModified: new Date("2025-10-16"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services-massage/massage-bali-bien-etre`, lastModified: new Date("2025-01-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services-massage/massage-bali-evasion`, lastModified: new Date("2025-01-03"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services-massage/massage-bali-pure-detente`, lastModified: new Date("2025-01-14"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/massage-technique-deep-tissue`, lastModified: new Date("2025-01-24"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services-massage/massage-enfant`, lastModified: new Date("2025-02-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services-massage/massage-chi-nei-tsang`, lastModified: new Date("2025-10-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services-massage/massage-californien`, lastModified: new Date("2025-10-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services-massage/massage-drainage-manuel`, lastModified: new Date("2025-10-23"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services-massage/massage-amincissant-et-raffermissant`, lastModified: new Date("2025-11-05"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date("2025-10-13"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/carte-cadeau`, lastModified: new Date("2025-01-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/carnet-de-voyages`, lastModified: new Date("2025-01-13"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/carnet-de-voyages/jai-entrouvert-une-porte-vers-lasie`, lastModified: new Date("2025-01-14"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/carnet-de-voyages/journee-de-la-femme-2020`, lastModified: new Date("2025-04-15"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/carnet-de-voyages/le-massage-a-travers-le-temps`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/deontologie`, lastModified: new Date("2025-01-17"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/liens-suggeres`, lastModified: new Date("2025-01-29"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/politique-de-confidentialite`, lastModified: new Date("2025-02-02"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date("2025-02-02"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/conditions-generales-dutilisation`, lastModified: new Date("2025-02-02"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date("2024-12-22"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
