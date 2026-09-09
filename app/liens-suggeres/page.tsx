import type { Metadata } from "next";
import Link from "next/link";
import { ShellOrnament, LeafOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Liens suggérés – Ressources bien-être",
  description:
    "Remerciements et liens vers les écoles, formations et partenaires de Perle de Bali : Zeste Détente, Bali BISA, EIS Paris, Fitness Park Orly.",
};

const links = [
  {
    title: "Zeste Détente – Canada",
    desc: "Merci à Chrystine ROY pour l'utilisation du massage « pizza ». Formations en ligne disponibles et blog très plaisant sur les massages enfants.",
    urls: [
      { label: "Formation en ligne – massage enfant", href: "https://www.zestedetente.com/boutique/formation-en-ligne-massage-enfant" },
      { label: "Formation en ligne – massage bébé", href: "https://www.zestedetente.com/boutique/formations-en-ligne-massage-bebe/" },
      { label: "DVD – Le massage des bébés et des enfants", href: "https://www.zestedetente.com/boutique/le-massage-des-bebes-et-des-enfants/" },
    ],
  },
  {
    title: "Bali BISA – Indonésie",
    desc: "Bali International Spa Academy. Excellent accueil des étudiants. Merci à Ruma pour sa patience, son professionnalisme et son sourire. En complément du massage balinais, de nombreux massages et autres cours sont dispensés à des personnes venues de plusieurs continents. Qualité des cours nec plus ultra !",
    urls: [{ label: "Cours en ligne – Bali BISA", href: "https://balibisa.podia.com/" }],
  },
  {
    title: "EIS – École Internationale du Spa, Paris",
    desc: "Merci pour la qualité des cours dispensés. Nombreux cours à la carte tout au long de l'année. Formation via CPF possible.",
    urls: [{ label: "École Internationale du Spa", href: "https://ecole-spa-international.com/" }],
  },
  {
    title: "Fitness Park – Orly",
    desc: "1er partenariat avec le Groupe Fitness Park, Orly (Journée de la Femme 2020). Merci ! Cardio-training, musculation, cours collectifs. Ouvert 7j/7, de 6h00 à 23h00.",
    urls: [{ label: "Fitness Park Orly", href: "https://www.fitnesspark.fr/club/orly/" }],
  },
];

export default function LiensSuggeresPage() {
  return (
    <>
      <section className="bg-bali-deep pt-24 pb-16 px-6 relative overflow-hidden">
        <ShellOrnament className="absolute top-6 right-[4%] w-20 h-14 text-bali-honey/45 hidden sm:block animate-float-slow" />
        <LeafOrnament className="absolute bottom-6 left-[6%] w-24 h-24 text-bali-sage/40 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
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
        <div className="max-w-3xl mx-auto space-y-10">
          {links.map((l) => (
            <div key={l.title} className="bg-bali-white rounded-2xl p-6 border border-bali-sand/20 shadow-sm">
              <h2 className="font-display text-2xl text-bali-deep font-medium mb-2">{l.title}</h2>
              <p className="font-body text-sm text-bali-dark/75 leading-relaxed mb-4">{l.desc}</p>
              <div className="flex flex-col gap-2">
                {l.urls.map((u) => (
                  <a
                    key={u.href}
                    href={u.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-bali-gold hover:underline break-all"
                  >
                    {u.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
