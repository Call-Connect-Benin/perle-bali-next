import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LeafOrnament, FlowerOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Bali Pure Détente – 120€ / 1h30",
  description:
    "Massage Bali Pure Détente à Orly (94) : l'expérience premium avec bain de pieds balinais aux sels d'Epsom. 1h30 de pur bonheur. 120€.",
};

export default function MassagePureDetentePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <LeafOrnament className="absolute top-6 left-[6%] w-24 h-24 text-bali-sage/40 hidden sm:block animate-float-slow" />
        <FlowerOrnament className="absolute bottom-10 right-[5%] w-20 h-20 text-bali-gold/45 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(208, 145, 156,0.5) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Massage Bali Pure Détente</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-gold text-white px-3 py-1 rounded-full mb-4">Premium</span>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Bali Pure Détente</h1>
          <div className="flex items-center justify-center gap-4 font-body text-bali-sand/70">
            <span>1h30</span>
            <span className="text-bali-gold">•</span>
            <span className="text-bali-gold font-semibold text-lg">120€</span>
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
                  src="/images/massages/bali-pure-detente/massage-bali-pure-detente-1.jpg"
                  alt="Massage Bali Pure Détente"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">L'expérience ultime de bien-être</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>Le Massage Bali Pure Détente est notre soin signature, la quintessence de l'expérience Perle de Bali. En 1h30, vous vivez un véritable rituel balinais de la tête aux pieds.</p>
                  <p>Unique parmi nos soins, cette expérience est précédée du <strong>traditionnel bain de pieds balinais</strong>, aux sels d'Epsom et sels de la Mer Morte, pour préparer votre corps à la détente totale.</p>
                  <p>Suivi d'un massage complet incluant le visage et les points d'acupression, ce soin 1h30 est conçu pour une immersion totale dans la sérénité. Une pure détente, un petit bonheur.</p>
                </div>
              </Reveal>
              <div className="bg-bali-gold/10 border-l-4 border-bali-gold rounded-r-2xl p-5">
                <h3 className="font-display text-xl text-bali-deep font-medium mb-3">Le rituel bain de pieds balinais</h3>
                <p className="font-body text-sm text-bali-dark/80 leading-relaxed">
                  Tradition millénaire balinaise, le bain de pieds aux sels d'Epsom et sels de la Mer Morte détoxifie, ramollit les peaux et prépare le corps à absorber les bienfaits du massage. Un rituel unique qui transforme votre séance en véritable cérémonie.
                </p>
              </div>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Bain de pieds balinais inclus", "Sels d'Epsom & Mer Morte", "1h30 de massage complet", "Massage du visage", "Points d'acupression", "Expérience immersive"].map((b) => (
                    <div key={b} className="flex items-start gap-3 p-3 bg-bali-white rounded-xl border border-bali-sand/20 card-elevate">
                      <span className="w-5 h-5 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-bali-gold text-xs">✓</span></span>
                      <span className="font-body text-sm text-bali-dark/80">{b}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="space-y-5">
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <span className="font-body text-xs bg-bali-gold text-white px-2 py-0.5 rounded-full">Premium</span>
                <h3 className="font-display text-2xl font-light mt-3 mb-1">Massage Bali Pure Détente</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">120€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 1h30</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Bain de pieds balinais", "Sels d'Epsom & Mer Morte", "1h30 de massage complet", "Massage visage & acupression", "Thé offert"].map((f) => (
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
                  {[
                    { label: "Massage Bali Bien-être – 70€ / 1h", href: "/services-massage/massage-bali-bien-etre" },
                    { label: "Massage Bali Évasion – 90€ / 1h30", href: "/services-massage/massage-bali-evasion" },
                  ].map((r) => (
                    <li key={r.href}><Link href={r.href} className="font-body text-sm text-bali-dark/70 hover:text-bali-gold transition-colors">→ {r.label}</Link></li>
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
