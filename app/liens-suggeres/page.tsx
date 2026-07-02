import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liens suggérés – Ressources bien-être",
  description:
    "Liens utiles recommandés par Perle de Bali : ressources bien-être, partenaires, associations et liens vers nos pages services.",
};

const internalLinks = [
  { label: "Accueil Perle de Bali", href: "/", desc: "Découvrez notre univers de bien-être balinais." },
  { label: "Nos tarifs", href: "/tarifs", desc: "Tous nos prix et formules de massage." },
  { label: "À propos de Françoise", href: "/a-propos", desc: "Mon parcours, mes certifications, ma philosophie." },
  { label: "Tous nos massages", href: "/services-massage", desc: "L'ensemble de nos soins et massages." },
  { label: "Carnet de voyages", href: "/carnet-de-voyages", desc: "Articles et inspirations autour du bien-être balinais." },
  { label: "Carte cadeau", href: "/carte-cadeau", desc: "Offrez un soin à quelqu'un que vous aimez." },
  { label: "Contact & Réservation", href: "/contact", desc: "Prenez rendez-vous facilement." },
  { label: "Déontologie", href: "/deontologie", desc: "Notre charte éthique et nos engagements." },
];

const massageLinks = [
  { label: "Massage Bali Bien-être", href: "/services-massage/massage-bali-bien-etre" },
  { label: "Massage Bali Évasion", href: "/services-massage/massage-bali-evasion" },
  { label: "Massage Bali Pure Détente", href: "/services-massage/massage-bali-pure-detente" },
  { label: "Massage Deep Tissue", href: "/massage-technique-deep-tissue" },
  { label: "Massage Enfant « Pizza »", href: "/services-massage/massage-enfant" },
  { label: "Massage Chi Nei Tsang", href: "/services-massage/massage-chi-nei-tsang" },
  { label: "Massage Californien", href: "/services-massage/massage-californien" },
  { label: "Massage Drainage Manuel", href: "/services-massage/massage-drainage-manuel" },
  { label: "Massage Amincissant & Raffermissant", href: "/services-massage/massage-amincissant-et-raffermissant" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Conditions générales d'utilisation", href: "/conditions-generales-dutilisation" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function LiensSuggeresPage() {
  return (
    <>
      <section className="bg-bali-deep py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(192,114,138,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-6">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Liens suggérés</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light">Liens suggérés</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div>
            <h2 className="font-display text-3xl text-bali-deep font-light mb-6">Pages principales</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {internalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group bg-bali-white rounded-xl p-4 border border-bali-sand/20 hover:border-bali-gold/40 hover:shadow-sm transition-all"
                >
                  <p className="font-body font-medium text-bali-deep group-hover:text-bali-gold transition-colors">{l.label}</p>
                  <p className="font-body text-sm text-bali-dark/60 mt-0.5">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-bali-deep font-light mb-6">Nos soins & massages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {massageLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-bali-dark/80 hover:text-bali-gold transition-colors flex items-center gap-2 p-3 bg-bali-white rounded-xl border border-bali-sand/20 hover:border-bali-gold/30"
                >
                  <span className="text-bali-gold text-xs">→</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-bali-deep font-light mb-6">Informations légales</h2>
            <div className="flex flex-wrap gap-3">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-bali-dark/70 hover:text-bali-gold transition-colors border border-bali-sand/40 px-4 py-2 rounded-full hover:border-bali-gold/40"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
