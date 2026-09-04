import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FlowerOrnament, LeafOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Bali Bien-être – 70€ / 1h",
  description:
    "Massage Bali Bien-être à Orly (94) : 1h de massage complet de la tête aux pieds, travail des points d'acupression, harmonie corps et esprit. 70€.",
};

const benefits = [
  "Relaxation profonde du corps et de l'esprit",
  "Travail des points d'acupression",
  "Massage complet tête aux pieds",
  "Réduction du stress et des tensions",
  "Amélioration de la circulation sanguine",
  "Revitalisation de l'énergie corporelle",
];

const relatedServices = [
  { label: "Massage Bali Évasion – 90€ / 1h30", href: "/services-massage/massage-bali-evasion" },
  { label: "Massage Bali Pure Détente – 120€ / 1h30", href: "/services-massage/massage-bali-pure-detente" },
  { label: "Massage Californien – 70€ / 50mn", href: "/services-massage/massage-californien" },
];

export default function MassageBaliPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <FlowerOrnament className="absolute top-10 left-[5%] w-20 h-20 text-bali-gold/40 hidden sm:block animate-float-slow" />
        <LeafOrnament className="absolute bottom-8 right-[6%] w-24 h-24 text-bali-sage/40 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 30% 60%, rgba(208, 145, 156,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold transition-colors">Soins & Massages</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Massage Bali Bien-être</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Soin Balinais</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Bali Bien-être</h1>
          <div className="flex items-center justify-center gap-4 font-body text-bali-sand/70">
            <span>1 heure</span>
            <span className="text-bali-gold">•</span>
            <span className="text-bali-gold font-semibold text-lg">70€</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Reveal className="relative w-full aspect-video rounded-2xl overflow-hidden group">
                <Image
                  src="/images/massages/bali-bien-etre/massage-bali-bien-etre-1.jpg"
                  alt="Massage Bali Bien-être"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">Une expérience apaisante</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Le Massage Bali Bien-être est une expérience apaisante qui équilibre votre corps et votre esprit, pour une relaxation totale et un bien-être profond. Inspiré des traditions balinaises ancestrales, ce soin d'une heure vous transporte vers un état de sérénité absolue.
                  </p>
                  <p>
                    Chaque geste est pensé pour libérer vos tensions musculaires tout en travaillant les points d'acupression balinais, favorisant ainsi la circulation de l'énergie dans votre corps. De la tête aux pieds, votre corps est entièrement pris en charge.
                  </p>
                  <p>
                    Ce massage est idéal pour les personnes souhaitant une première expérience balinaise ou celles qui cherchent un moment de détente régulière. Il est adapté à tous les profils et peut être personnalisé selon vos zones de tension prioritaires.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-4">Bienfaits du soin</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 p-3 bg-bali-white rounded-xl border border-bali-sand/20 card-elevate">
                      <span className="w-5 h-5 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-bali-gold text-xs">✓</span>
                      </span>
                      <span className="font-body text-sm text-bali-dark/80">{b}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <div className="bg-bali-cream-dark rounded-2xl p-6 border border-bali-sand/30">
                <h3 className="font-display text-xl text-bali-deep font-medium mb-3">Le déroulement de la séance</h3>
                <ol className="space-y-3 font-body text-sm text-bali-dark/80">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-bali-gold text-white text-xs flex items-center justify-center shrink-0 font-medium">1</span>
                    <span><strong>Accueil & échange</strong> — Je prends le temps de comprendre vos attentes et zones de tension.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-bali-gold text-white text-xs flex items-center justify-center shrink-0 font-medium">2</span>
                    <span><strong>Mise en condition</strong> — Installation dans un espace zen, musique apaisante, huiles naturelles chauffées.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-bali-gold text-white text-xs flex items-center justify-center shrink-0 font-medium">3</span>
                    <span><strong>Massage 1h</strong> — Technique balinaise complète, de la tête aux pieds, avec travail des points d'acupression.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-bali-gold text-white text-xs flex items-center justify-center shrink-0 font-medium">4</span>
                    <span><strong>Retour en douceur</strong> — Thé offert en fin de séance pour prolonger la détente.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <Reveal delay={160} className="space-y-5">
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="font-display text-2xl font-light mb-1">Massage Bali Bien-être</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">70€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 1 heure</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["1h de massage complet", "Massage visage & acupression", "Huiles naturelles incluses", "Thé offert en fin de séance"].map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-sand/80">
                      <span className="text-bali-gold shrink-0 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium py-3 px-6 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300">
                  Réserver ce massage
                </Link>
                <p className="text-center font-body text-xs text-bali-sand/50 mt-3">ou appelez le 07 56 13 95 96</p>
              </div>

              <div className="bg-bali-white rounded-2xl p-5 border border-bali-sand/20">
                <h4 className="font-display text-lg text-bali-deep font-medium mb-3">Soins similaires</h4>
                <ul className="space-y-2">
                  {relatedServices.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="font-body text-sm text-bali-dark/70 hover:text-bali-gold transition-colors">
                        → {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
