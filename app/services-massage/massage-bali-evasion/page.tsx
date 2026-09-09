import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ShellOrnament, SandScatter } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Bali Évasion – 90€ / 1h30",
  description:
    "Massage Bali Évasion à Orly (94) : voyage sensoriel unique inspiré des traditions balinaises, relaxation totale et revitalisation du corps et de l'esprit. 90€.",
};

const benefits = [
  {
    title: "Détente profonde",
    desc: "Laissez-vous envahir par une sensation de calme et de bien-être.",
  },
  {
    title: "Revitalisation",
    desc: "Rééquilibrez vos énergies et retrouvez un corps revitalisé.",
  },
  {
    title: "Réduction des tensions",
    desc: "Éliminez les douleurs musculaires et les tensions accumulées.",
  },
  {
    title: "Amélioration de la circulation",
    desc: "Favorise une meilleure circulation sanguine et lymphatique.",
  },
];

export default function MassageBaliEvasionPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <ShellOrnament className="absolute top-8 right-[5%] w-24 h-16 text-bali-honey/45 hidden sm:block animate-float-slow" />
        <SandScatter className="absolute bottom-10 left-[8%] w-28 h-8 text-bali-sand/50 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Massage Bali Évasion</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Voyage Sensoriel</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Bali Évasion</h1>
          <div className="flex items-center justify-center gap-4 font-body text-bali-sand/70">
            <span>1h30</span>
            <span className="text-bali-gold">•</span>
            <span className="text-bali-gold font-semibold text-lg">90€</span>
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
                  src="/images/massages/bali-evasion/massage-bali-evasion-1.jpg"
                  alt="Massage Bali Évasion"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>

              <Reveal delay={40} className="grid grid-cols-4 gap-3">
                {["gallery-1.jpg", "gallery-2.webp", "gallery-3.webp", "gallery-4.webp"].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src={`/images/massages/bali-evasion/${src}`} alt="Massage Bali Évasion" fill className="object-cover" />
                  </div>
                ))}
              </Reveal>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">Une évasion sensorielle profonde</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Offrez-vous une parenthèse de sérénité avec le Massage Bali Évasion, une expérience unique qui vous transporte au cœur de Bali. Ce soin, inspiré des traditions ancestrales balinaises, est conçu pour vous offrir une relaxation totale tout en revitalisant votre corps et votre esprit.
                  </p>
                  <p>
                    Le Massage Bali Évasion est un véritable voyage pour vos sens. Grâce à une combinaison de techniques douces et toniques, il agit sur les tensions musculaires, tout en favorisant la circulation de l&apos;énergie. Ce massage, qui s&apos;étend de la tête aux pieds, vous plonge dans un état de relaxation profonde, vous permettant de vous reconnecter à votre être intérieur.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-4">Bienfaits du massage Bali Évasion</h3>
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
                  Le Massage Bali Évasion est idéal pour s&apos;évader du stress quotidien. Que vous soyez en quête de relaxation ou de revitalisation, ce soin vous offre une expérience complète, alliant bien-être physique et mental. Chaque geste est adapté à vos besoins pour garantir une expérience sur-mesure.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="space-y-5">
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="font-display text-2xl font-light mb-1">Massage Bali Évasion</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">90€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 1h30</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["1h30 de voyage sensoriel balinais", "Techniques douces et toniques", "De la tête aux pieds", "Thé offert en fin de séance"].map((f) => (
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
                    { label: "Massage Bali Pure Détente – 120€ / 1h30", href: "/services-massage/massage-bali-pure-detente" },
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
