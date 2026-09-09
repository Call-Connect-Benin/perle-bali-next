import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journée de la Femme 2020 – Perle de Bali",
  description:
    "Retour sur un partenariat avec le Fitness Park Orly à l'occasion de la Journée de la Femme : neuf femmes massées dans une salle privatisée.",
};

export default function JourneeDesFemmesPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">Journée de la Femme 2020</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-sage text-white px-3 py-1 rounded-full mb-4">Bien-être</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">Journée de la Femme 2020</h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>13 janvier 2025</span><span>·</span><span>2 min de lecture</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10 relative">
            <Image src="/images/blog/journee-femme.webp" alt="Journée de la Femme 2020" fill className="object-cover" />
          </div>

          <div className="space-y-6 font-body text-bali-dark/80 leading-relaxed">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              Mettre à l&apos;honneur des femmes, en proposant de soulager leurs douleurs, tension et stress, c&apos;est le choix qu&apos;a fait le Club de sport Fitness Park Orly, en choisissant Perle de Bali comme partenaire à l&apos;occasion de la Journée de la Femme.
            </p>
            <p>Neuf femmes privilégiées ont eu la chance d&apos;être massées dans une salle exclusivement privatisée à cet effet.</p>
            <p>Nos différents échanges restent un très bon souvenir. Après un massage, il n&apos;est pas rare de voir nos émotions remonter à la surface, c&apos;est ce qui s&apos;est passé avec une femme particulièrement touchante qui m&apos;a avoué que c&apos;était la toute première fois que quelqu&apos;un prenait soin d&apos;elle et de son corps.</p>
            <p>Tout massage est un moment d&apos;échange et de bienveillance à préserver, entre masseur et massé.</p>
            <p>Je vous souhaite, vous aussi, de pouvoir vivre ou renouveler cette expérience prochainement.</p>
          </div>

          <div className="mt-10 pt-8 border-t border-bali-sand/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/carnet-de-voyages" className="font-body text-sm text-bali-dark/60 hover:text-bali-gold transition-colors">← Retour au blog</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300 text-sm">
              Réserver une séance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
