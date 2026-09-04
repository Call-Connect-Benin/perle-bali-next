import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SandScatter, LeafOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Drainage Manuel – 70€ / 50mn",
  description:
    "Massage Drainage Manuel à Orly (94) : technique lymphatique et circulatoire profonde pour détoxifier votre corps et réduire la rétention d'eau. 70€.",
};

export default function MassageDrainagePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden dot-field">
        <SandScatter className="absolute top-8 left-[6%] w-32 h-8 text-bali-sand/50 hidden sm:block animate-float-slow" />
        <LeafOrnament className="absolute bottom-6 right-[6%] w-20 h-20 text-bali-sage/45 hidden sm:block animate-float-slow-delayed" />
        <span className="absolute top-[48%] right-[25%] w-1 h-1 rounded-full bg-bali-sand hidden sm:block animate-twinkle" style={{ animationDelay: "0.8s" }} />
        <span className="absolute top-[80%] left-[38%] w-1.5 h-1.5 rounded-full bg-bali-gold hidden sm:block animate-twinkle" style={{ animationDelay: "1.2s" }} />
        <div className="absolute inset-0 opacity-15 animate-breathe" style={{ backgroundImage: "radial-gradient(ellipse at 40% 60%, rgba(107,145,114,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link><span>›</span>
            <span className="text-bali-sand/80">Massage Drainage Manuel</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Drainage & Détox</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Drainage Manuel</h1>
          <div className="flex items-center justify-center gap-4 font-body text-bali-sand/70">
            <span>50 minutes</span><span className="text-bali-gold">•</span><span className="text-bali-gold font-semibold text-lg">70€</span>
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
                  src="/images/massages/drainage-manuel/massage-drainage-1.jpg"
                  alt="Massage Drainage Manuel"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">Détoxifiez votre corps en profondeur</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>Le Drainage Manuel est une technique thérapeutique qui agit sur le système lymphatique pour éliminer les toxines et réduire la rétention d'eau dans l'organisme.</p>
                  <p>Cette technique combine drainage superficiel, circulatoire et profond, pour une action globale sur la circulation sanguine et lymphatique.</p>
                  <p>Idéal pour les personnes souffrant de rétention d'eau, de jambes lourdes, ou souhaitant soutenir leur corps dans sa régénération naturelle.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Drainage superficiel & profond", "Améliore la circulation", "Réduit la rétention d'eau", "Détox de l'organisme", "Régénération des tissus", "Jambes légères garanties"].map((b) => (
                    <div key={b} className="flex items-start gap-3 p-3 bg-bali-white rounded-xl border border-bali-sand/20 card-elevate">
                      <span className="w-5 h-5 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-bali-gold text-xs">✓</span></span>
                      <span className="font-body text-sm text-bali-dark/80">{b}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="font-display text-2xl font-light mb-1">Drainage Manuel</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">70€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 50mn</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Drainage lymphatique complet", "Circulation améliorée", "Moins de rétention d'eau", "Détox & régénération"].map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-sand/80">
                      <span className="text-bali-gold shrink-0 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium py-3 px-6 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300">
                  Réserver ce massage
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
