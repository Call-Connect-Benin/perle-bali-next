import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FlowerOrnament, ShellOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Massage Enfant « Pizza » – 30€ / 30mn",
  description:
    "Massage Enfant à Orly (94) : le massage « Pizza », un rituel ludique et bienfaisant inspiré des gestes de préparation d'une pizza, pour un moment de partage parent-enfant. 30€.",
};

const benefits = [
  {
    title: "Sécurise et apaise",
    desc: "Idéal pour favoriser un sommeil profond et réparateur.",
  },
  {
    title: "Réduit le stress",
    desc: "Apaise les tensions liées à l'école, aux écrans ou aux longues journées.",
  },
  {
    title: "Améliore la concentration",
    desc: "Stimule un état de calme et de focus, même chez les enfants hyperactifs.",
  },
  {
    title: "Relâchement musculaire",
    desc: "Soulage les douleurs de croissance et les tensions corporelles.",
  },
  {
    title: "Gestion des émotions",
    desc: "Aide à diminuer l'agressivité et à mieux gérer les frustrations.",
  },
  {
    title: "Moment de complicité",
    desc: "Apprenez à masser votre enfant pour un moment de pure complicité.",
  },
];

export default function MassageEnfantPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <FlowerOrnament className="absolute top-8 right-[6%] w-16 h-16 text-bali-gold/45 hidden sm:block animate-float-slow" />
        <ShellOrnament className="absolute bottom-10 left-[5%] w-20 h-14 text-bali-honey/45 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <Link href="/services-massage" className="hover:text-bali-gold">Soins & Massages</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Massage Enfant</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Parent & Enfant</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">Massage Enfant « Pizza »</h1>
          <div className="flex items-center justify-center gap-4 font-body text-bali-sand/70">
            <span>30 minutes</span>
            <span className="text-bali-gold">•</span>
            <span className="text-bali-gold font-semibold text-lg">30€</span>
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
                  src="/images/massages/enfant/massage-enfant-pizza-1.jpg"
                  alt="Massage Enfant Pizza"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>

              <Reveal delay={40} className="grid grid-cols-4 gap-3">
                {["gallery-1.webp", "gallery-2.webp", "gallery-3.webp", "gallery-4.webp"].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src={`/images/massages/enfant/${src}`} alt="Massage Enfant Pizza" fill className="object-cover" />
                  </div>
                ))}
              </Reveal>

              <Reveal delay={80}>
                <h2 className="font-display text-3xl text-bali-deep font-light mb-5">Un rituel ludique et bienfaisant</h2>
                <div className="space-y-4 font-body text-bali-dark/80 leading-relaxed">
                  <p>
                    Le massage « PIZZA », spécialement conçu pour les enfants, est bien plus qu&apos;un simple soin : c&apos;est une expérience amusante et apaisante qui leur permet de se détendre tout en s&apos;amusant. Cette méthode ludique, facile à apprendre et à reproduire, est un véritable coup de cœur pour les plus jeunes. Inspiré des gestes simples de la préparation d&apos;une « pizza » (pétrir, étaler, saupoudrer), il rend le massage accessible et agréable pour les enfants.
                  </p>
                  <p>
                    Réalisé dans un cadre rassurant, avec leur doudou ou un objet réconfortant à proximité, ce massage devient un moment de partage précieux entre parents et enfants. En quelques minutes seulement, il transforme le rituel du coucher en un instant de douceur et de complicité, tout en offrant des bienfaits durables pour leur bien-être physique et émotionnel.
                  </p>
                  <p>
                    Que ce soit après une longue journée à l&apos;école, un moment de stress ou simplement pour renforcer le lien parent-enfant, le massage « PIZZA » est l&apos;activité parfaite pour instaurer un climat de sérénité et de confiance.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="font-display text-2xl text-bali-deep font-light mb-4">Les avantages du massage enfants</h3>
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
                  Avec des techniques simples, douces et amusantes, ce massage crée un rituel de coucher réconfortant et relaxant. Il devient une opportunité précieuse pour renforcer le lien parent-enfant, tout en instaurant un environnement de sérénité et de bien-être.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="bg-bali-deep text-white rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="font-display text-2xl font-light mb-1">Massage Enfant « Pizza »</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-semibold text-bali-gold">30€</span>
                  <span className="font-body text-bali-sand/70 text-sm">/ 30mn</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {["30mn de massage doux", "Méthode « Pizza » ludique", "Moment parent-enfant", "Apprentissage des gestes"].map((f) => (
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
