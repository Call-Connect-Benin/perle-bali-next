import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Massage Deep Tissue – 80€ / 50mn",
  description:
    "Massage Deep Tissue à Orly (94) : technique experte en profondeur pour libérer les tensions musculaires et récupérer sportive. 80€ / 50mn.",
};

export default function DeepTissuePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 40% 40%, rgba(107,145,114,0.5) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Massage Deep Tissue</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-sage text-white px-3 py-1 rounded-full mb-4">Sportif & Expert</span>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Deep Tissue</h1>
          <div className="flex items-center justify-center gap-4 font-body text-bali-sand/70">
            <span>50 minutes</span>
            <span className="text-bali-gold">•</span>
            <span className="text-bali-gold font-semibold text-lg">80€</span>
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
                  src="/images/massages/deep-tissue/massage-deep-tissue-1.jpg"
                  alt="Massage Deep Tissue"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-body text-sm text-amber-800 font-medium">⚠ Attention : Ce massage est d'intensité soutenue. Il est déconseillé aux personnes très sensibles aux pressions profondes.</p>
              </div>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">La technique du massage profond</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>Le Massage Deep Tissue est une technique avancée qui agit sur les couches musculaires profondes pour libérer les tensions chroniques et les nœuds musculaires.</p>
                  <p>Ce soin utilise des pressions soutenues avec les paumes, les poings et les coudes pour atteindre les fibres musculaires en profondeur. Idéal pour la <strong>préparation et la récupération sportive</strong>, ainsi que pour les personnes souffrant de douleurs chroniques.</p>
                  <p>En 50 minutes, les tensions les plus profondes sont traitées, la mobilité améliorée et le corps préparé à la performance ou aidé dans sa récupération.</p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Libère les tensions musculaires profondes", "Améliore la mobilité articulaire", "Prévention des blessures sportives", "Accélère la récupération", "Technique des paumes, poings, coudes", "Soulagement douleurs chroniques"].map((b) => (
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
                <h3 className="font-display text-2xl font-light mb-1">Massage Deep Tissue</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">80€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 50mn</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["50mn de massage expert", "Technique profonde spécialisée", "Préparation / récupération sportive", "Utilisation paumes, poings, coudes"].map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-sand/80">
                      <span className="text-bali-gold shrink-0 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center bg-bali-gold text-white font-body font-medium py-3 px-6 rounded-full hover:bg-bali-gold-light transition-colors">
                  Réserver ce massage
                </Link>
              </div>
              <div className="bg-bali-white rounded-2xl p-5 border border-bali-sand/20">
                <h4 className="font-display text-lg text-bali-deep font-medium mb-3">Envie de plus de douceur ?</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Massage Californien – 70€ / 50mn", href: "/services-massage/massage-californien" },
                    { label: "Massage Bali Bien-être – 70€ / 1h", href: "/services-massage/massage-bali-bien-etre" },
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
