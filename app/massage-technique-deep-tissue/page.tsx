import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SandScatter, ShellOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Deep Tissue – 80€ / 50mn",
  description:
    "Massage Deep Tissue à Orly (94) : technique puissante et ciblée pour traiter les tensions musculaires profondes et chroniques. 80€ / 50mn.",
};

const benefits = [
  {
    title: "Soulagement des douleurs chroniques",
    desc: "Il est particulièrement efficace pour traiter les douleurs musculaires persistantes, notamment au niveau du cou, du haut du dos, des lombaires, des jambes et des épaules.",
  },
  {
    title: "Amélioration de la récupération",
    desc: "Le massage Deep Tissue aide les athlètes à récupérer plus rapidement en réduisant les tensions et en améliorant la circulation sanguine.",
  },
  {
    title: "Détente musculaire profonde",
    desc: "Grâce à sa puissance, il permet de relâcher les tensions profondes qui peuvent s'accumuler au fil du temps, offrant ainsi un bien-être durable.",
  },
  {
    title: "Amélioration de la flexibilité",
    desc: "En libérant les muscles tendus, il permet de restaurer une plus grande mobilité et flexibilité du corps.",
  },
];

export default function DeepTissuePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <SandScatter className="absolute top-12 right-[8%] w-28 h-8 text-bali-sand/50 hidden sm:block animate-float-slow" />
        <ShellOrnament className="absolute bottom-8 left-[5%] w-24 h-16 text-bali-honey/45 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 40% 40%, rgba(127, 165, 136,0.5) 0%, transparent 55%)" }} />
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

              <Reveal delay={40} className="grid grid-cols-4 gap-3">
                {["gallery-1.webp", "gallery-2.webp", "gallery-3.webp", "gallery-4.webp"].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src={`/images/massages/deep-tissue/${src}`} alt="Massage Deep Tissue" fill className="object-cover" />
                  </div>
                ))}
              </Reveal>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-body text-sm text-amber-800 font-medium">⚠ Attention : Ce massage est d'intensité soutenue. Il est déconseillé aux personnes très sensibles aux pressions profondes.</p>
              </div>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">Une méthode ciblée et efficace</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Le Massage Deep Tissue* est une technique puissante et ciblée, qui permet de traiter les tensions musculaires profondes et chroniques. Officiellement utilisé pour la première fois lors des Jeux Olympiques de 1900, ce massage est particulièrement apprécié dans les pays anglo-saxons et séduit de plus en plus à travers le monde pour ses bienfaits : en préparation avant compétition, comme en récupération sportive.
                  </p>
                  <p>
                    Le Deep Tissue est bien plus qu&apos;un simple massage de relaxation. Il utilise une combinaison de techniques précises et toniques pour pénétrer profondément dans les muscles et les tissus conjonctifs. Masseurs et masseuses n&apos;hésitent pas à utiliser les poings, coudes et avant-bras pour travailler sur les couches profondes du corps et cibler les zones de tension.
                  </p>
                  <p className="text-sm italic text-bali-dark/60">*Massage Deep Tissue : massage profond ou du sportif</p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-4">Les bienfaits du massage deep tissue</h3>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3 p-3 bg-bali-white rounded-xl border border-bali-sand/20 card-elevate">
                      <span className="w-5 h-5 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-bali-gold text-xs">✓</span>
                      </span>
                      <span className="font-body text-sm text-bali-dark/80"><strong className="text-bali-deep">{b.title} :</strong> {b.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-bali-dark/80 leading-relaxed mt-5">
                  Ce massage est particulièrement recommandé pour les personnes souffrant de douleurs chroniques, de tensions musculaires ou de raideurs, ainsi que pour les athlètes en quête de récupération. Il est cependant important de noter que le Deep Tissue est un massage à intensité soutenue, adapté aux personnes recherchant un soulagement profond.
                </p>
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
                  {["50mn de massage ciblé", "Technique profonde spécialisée", "Préparation / récupération sportive", "Utilisation poings, coudes, avant-bras"].map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-sand/80">
                      <span className="text-bali-gold shrink-0 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium py-3 px-6 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300">
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
