import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Déontologie – Charte éthique de Perle de Bali",
  description:
    "Découvrez la charte déontologique de Perle de Bali : confidentialité, respect, hygiène, contre-indications et engagements envers nos clients.",
};

const engagements = [
  {
    title: "Respect et bienveillance",
    content:
      "Chaque client est accueilli avec respect et bienveillance, sans jugement. La diversité des personnes et de leurs besoins est une richesse que je célèbre.",
  },
  {
    title: "Confidentialité absolue",
    content:
      "Tout ce qui est partagé lors d'une séance reste strictement confidentiel. Les informations médicales et personnelles ne sont jamais divulguées à des tiers.",
  },
  {
    title: "Hygiène irréprochable",
    content:
      "Les draps et serviettes sont changés entre chaque client. Les mains sont lavées avant chaque séance. L'espace de soin est désinfecté régulièrement.",
  },
  {
    title: "Contre-indications respectées",
    content:
      "Certains états de santé contre-indiquent le massage (grossesse à risque, phlébite, infections cutanées, cancer en phase active…). Je refuse un soin si la sécurité du client est en jeu.",
  },
  {
    title: "Formation continue",
    content:
      "Pour offrir les meilleurs soins possibles, je me forme régulièrement aux nouvelles techniques et approfondis mes connaissances en anatomie et physiologie.",
  },
  {
    title: "Non-substitution médicale",
    content:
      "Le massage bien-être n'est pas un acte médical et ne remplace pas un traitement médical. En cas de problème de santé, consultez toujours un médecin.",
  },
];

export default function DeontologiePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(107,145,114,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Déontologie</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Éthique & Valeurs</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">Déontologie</h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Ma charte éthique et mes engagements envers vous.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none font-body text-bali-dark/80 mb-12">
            <p className="text-lg leading-relaxed">
              Chez Perle de Bali, l'éthique professionnelle est au cœur de ma pratique. Cette charte déontologique définit les principes qui guident chacune de mes interventions et ma relation avec vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {engagements.map((e) => (
              <div key={e.title} className="bg-bali-white rounded-2xl p-6 border border-bali-sand/20 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-bali-gold text-xs">✓</span>
                  </span>
                  <h3 className="font-display text-xl text-bali-deep font-medium">{e.title}</h3>
                </div>
                <p className="font-body text-sm text-bali-dark/75 leading-relaxed pl-9">{e.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-bali-cream-dark rounded-2xl p-8 border border-bali-sand/30">
            <h2 className="font-display text-3xl text-bali-deep font-light mb-4">Mes certifications</h2>
            <p className="font-body text-bali-dark/80 leading-relaxed mb-6">
              Formée à l'école Bali BISA (certifiée TripAdvisor Excellence), titulaire de certifications en massage balinais et Californien, et habilitée à pratiquer la méthode Massage « Pizza » Enfant, je m'engage à maintenir le plus haut niveau de compétence professionnelle.
            </p>
            <Link href="/a-propos" className="inline-flex items-center gap-2 text-bali-gold font-body text-sm font-medium hover:underline">
              En savoir plus sur mon parcours →
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300">
              Réserver une séance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
