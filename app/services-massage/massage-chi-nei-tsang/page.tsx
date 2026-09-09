import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LeafOrnament, SandScatter } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Chi Nei Tsang – 70€ / 50mn",
  description:
    "Massage Chi Nei Tsang à Orly (94) : technique ancestrale de la médecine chinoise centrée sur le ventre, le « deuxième cerveau » du corps. 70€.",
};

const benefits = [
  "de soulager les tensions abdominales et les inconforts digestifs",
  "de rééquilibrer le système digestif et d'améliorer la circulation de l'énergie vitale (Qi)",
  "de libérer les émotions enfouies et de favoriser un apaisement profond",
  "de renforcer le lien entre le corps et l'esprit, pour une meilleure harmonie intérieure",
];

export default function ChiNeiTsangPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <LeafOrnament className="absolute top-10 right-[5%] w-28 h-28 text-bali-sage/35 hidden sm:block animate-float-slow" />
        <SandScatter className="absolute bottom-8 left-[8%] w-24 h-8 text-bali-sand/55 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 60%, rgba(127, 165, 136,0.5) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Massage Chi Nei Tsang</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Soin Holistique</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Chi Nei Tsang</h1>
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
                  src="/images/massages/chi-nei-tsang/massage-chi-nei-tsang-1.jpg"
                  alt="Massage Chi Nei Tsang"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>

              <Reveal delay={40} className="grid grid-cols-4 gap-3">
                {["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src={`/images/massages/chi-nei-tsang/${src}`} alt="Massage Chi Nei Tsang" fill className="object-cover" />
                  </div>
                ))}
              </Reveal>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">L&apos;harmonie du ventre, source de bien-être intérieur</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Le massage Chi Nei Tsang est une technique ancestrale de la médecine chinoise qui se concentre sur le ventre, considéré comme le « deuxième cerveau » du corps. C&apos;est dans cette zone que résident nos émotions, nos tensions profondes et notre énergie vitale.
                  </p>
                  <p>
                    Ce massage doux et profond agit directement sur les organes internes pour libérer les énergies négatives responsables de crispations émotionnelles telles que le stress, la colère, l&apos;inquiétude ou la tristesse.
                  </p>
                  <p>
                    Grâce à des mouvements de bercement et de pression circulaire, il aide le corps à retrouver son équilibre naturel, tout en procurant une sensation de légèreté et de paix intérieure.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-4">Les bienfaits du massage Chi Nei Tsang</h3>
                <p className="font-body text-bali-dark/80 leading-relaxed mb-4">
                  Ce soin unique offre une approche holistique du bien-être, alliant détente physique et harmonisation énergétique. Il permet notamment :
                </p>
                <ul className="space-y-2 mb-6">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 font-body text-sm text-bali-dark/80">
                      <span className="text-bali-gold shrink-0 mt-0.5">✓</span>{b}
                    </li>
                  ))}
                </ul>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-3">Une expérience de reconnexion à soi</h3>
                <p className="font-body text-bali-dark/80 leading-relaxed">
                  Le Chi Nei Tsang n&apos;est pas un simple massage : c&apos;est une invitation à la reconnexion avec soi-même. En rétablissant la circulation énergétique du ventre, il permet au corps de se régénérer et à l&apos;esprit de s&apos;apaiser. Ce soin s&apos;adresse à toute personne cherchant à retrouver équilibre, sérénité et vitalité à travers une approche douce et naturelle.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="font-display text-2xl font-light mb-1">Massage Chi Nei Tsang</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">70€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 50mn</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["Libère énergies négatives", "Rééquilibre le digestif", "Levée des blocages", "Détente profonde"].map((f) => (
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
