import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FlowerOrnament, ShellOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Amincissant & Raffermissant – Cures 350€ / 700€",
  description:
    "Massage Amincissant & Raffermissant à Orly (94) : cures de 5 ou 10 séances ciblées sur 2 zones. Action sur le tissu adipeux, meilleure tonicité. +1 massage offert.",
};

export default function MassageAmincissantPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <FlowerOrnament className="absolute top-10 right-[6%] w-20 h-20 text-bali-gold/40 hidden sm:block animate-float-slow" />
        <ShellOrnament className="absolute bottom-8 left-[4%] w-24 h-16 text-bali-honey/50 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 60% 50%, rgba(127, 165, 136,0.5) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link><span>›</span>
            <span className="text-bali-sand/80">Massage Amincissant</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-gold text-white px-3 py-1 rounded-full mb-4">Programme Cure</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4">Massage Amincissant<br />& Raffermissant</h1>
          <p className="font-body text-bali-sand/70">Cures de 5 ou 10 séances</p>
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
                  src="/images/massages/amincissant-raffermissant/massage-amincissant-1.jpg"
                  alt="Massage Amincissant et Raffermissant"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>

              <Reveal delay={40} className="grid grid-cols-4 gap-3">
                {["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg"].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src={`/images/massages/amincissant-raffermissant/${src}`} alt="Massage Amincissant et Raffermissant" fill className="object-cover" />
                  </div>
                ))}
              </Reveal>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">Redessinez votre silhouette</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Offrez à votre corps une véritable cure de légèreté et de tonicité grâce à ce massage amincissant et raffermissant. Cette technique manuelle associe gestes dynamiques et drainage ciblé pour stimuler la dégradation naturelle des graisses tout en raffermissant la peau et en améliorant son élasticité.
                  </p>
                  <p>
                    Le massage amincissant et raffermissant regroupe plusieurs techniques précises qui agissent en profondeur sur le tissu adipeux sans jamais provoquer de douleur. Les mouvements sont à la fois toniques et respectueux du corps, pour activer la circulation sanguine et lymphatique sans l&apos;irriter.
                  </p>
                  <p>
                    Ce soin favorise ainsi la décongestion des zones de stockage (cuisses, ventre, hanches, bras, etc.), la réduction de l&apos;aspect peau d&apos;orange, et une peau plus lisse, plus ferme et plus tonique.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-4">Des résultats visibles et durables</h3>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Les bienfaits du massage amincissant sont décuplés lorsqu&apos;il est intégré dans une hygiène de vie équilibrée : alimentation saine, activité physique régulière, bonne hydratation. En complément, ce soin contribue à réduire l&apos;inflammation du tissu adipeux, favoriser l&apos;élimination des toxines et raffermir durablement la peau.
                  </p>
                  <p>
                    Résultat : une silhouette plus harmonieuse, une peau plus tonique, et une sensation immédiate de bien-être et de légèreté.
                  </p>
                  <p>
                    Parce que chaque corps est unique, ce massage amincissant et raffermissant est avant tout une expérience sur mesure, alliant efficacité, détente et bienveillance.
                  </p>
                </div>
              </Reveal>

              {/* Two cure options */}
              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-bali-white rounded-2xl p-6 border border-bali-sand/30 shadow-sm card-elevate">
                    <p className="font-body text-xs text-bali-gold font-semibold uppercase tracking-wider mb-2">Cure 5 séances</p>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="font-display text-3xl font-semibold text-bali-deep">350€</span>
                      <span className="font-body text-sm text-bali-dark/60">/ 5 × 50mn</span>
                    </div>
                    <p className="font-body text-xs text-bali-gold italic mb-4">+1 massage offert</p>
                    <ul className="space-y-1.5">
                      {["2 zones ciblées", "Action tissu adipeux", "Élimination des toxines", "Meilleure tonicité"].map((f) => (
                        <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-dark/70">
                          <span className="text-bali-gold shrink-0">✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl relative overflow-hidden card-elevate">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 80% 20%, rgba(127, 165, 136,0.6) 0%, transparent 60%)" }} />
                    <div className="relative">
                      <p className="font-body text-xs text-bali-gold font-semibold uppercase tracking-wider mb-2">Cure 10 séances</p>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="font-display text-3xl font-semibold text-bali-gold">700€</span>
                        <span className="font-body text-sm text-bali-sand/60">/ 10 × 50mn</span>
                      </div>
                      <p className="font-body text-xs text-bali-gold italic mb-4">+1 massage offert + 1 massage d'entretien (valable 12 mois)</p>
                      <ul className="space-y-1.5">
                        {["2 zones ciblées", "Résultats amplifiés", "Massage d'entretien inclus", "Suivi personnalisé"].map((f) => (
                          <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-sand/80">
                            <span className="text-bali-gold shrink-0">✓</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="font-display text-2xl font-light mb-1">Massage Amincissant</h3>
                <p className="font-body text-xs text-bali-sand/60 mb-4">Programme en cures</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bali-sand/80">Cure 5 séances</span>
                    <span className="text-bali-gold font-semibold">350€</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bali-sand/80">Cure 10 séances</span>
                    <span className="text-bali-gold font-semibold">700€</span>
                  </div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium py-3 px-6 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300">
                  Demander un devis
                </Link>
                <p className="text-center font-body text-xs text-bali-sand/50 mt-3">ou appelez le 07 56 13 95 96</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
