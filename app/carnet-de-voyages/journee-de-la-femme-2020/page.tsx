import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journée de la Femme 2020 – Perle de Bali",
  description:
    "À l'occasion de la Journée Internationale des Droits des Femmes, Perle de Bali célèbre le bien-être féminin et l'importance de prendre soin de soi.",
};

export default function JourneeDesFemmesPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 animate-breathe" style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, rgba(186, 127, 127,0.4) 0%, transparent 55%)" }} />
        <span className="absolute top-[40%] left-[8%] w-1 h-1 rounded-full bg-bali-gold hidden sm:block animate-twinkle" style={{ animationDelay: "0.9s" }} />
        <span className="absolute top-[85%] right-[30%] w-1.5 h-1.5 rounded-full bg-bali-gold-light hidden sm:block animate-twinkle" style={{ animationDelay: "1.9s" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">Journée de la Femme 2020</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-sage text-white px-3 py-1 rounded-full mb-4">Bien-être</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">Journée de la Femme 2020</h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>15 avril 2025</span><span>·</span><span>4 min de lecture</span>
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
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10" style={{ background: "linear-gradient(135deg, #C0728A 0%, #FDF8F6 100%)" }}>
            <div className="w-full h-full flex items-end p-4">
              <p className="font-body text-xs text-bali-dark/30 italic">Photo à venir — /images/blog/journee-femme.jpg</p>
            </div>
          </div>

          <div className="space-y-6 font-body text-bali-dark/80 leading-relaxed">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              Le 8 mars, Journée Internationale des Droits des Femmes, est une occasion parfaite pour rappeler l'importance de prendre soin de soi.
            </p>
            <p>
              Chez Perle de Bali, je crois profondément que le bien-être féminin est une priorité, non un luxe. Dans nos vies agitées, entre responsabilités professionnelles et familiales, il est essentiel de s'accorder du temps pour se ressourcer.
            </p>
            <p>
              Le massage est l'un des moyens les plus puissants pour reconnecter le corps et l'esprit, libérer les tensions accumulées et retrouver l'énergie nécessaire pour avancer.
            </p>
            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Offrez-vous ou offrez ce cadeau</h2>
            <p>
              La Journée de la Femme est aussi une belle occasion d'offrir à une personne chère une expérience de bien-être. Une carte cadeau Perle de Bali, c'est le geste parfait pour dire à quelqu'un combien vous tenez à son bien-être.
            </p>
            <p>
              Parce que chaque femme mérite de se sentir chouchoutée, reposée et reconnectée à elle-même.
            </p>
          </div>

          <div className="mt-8 p-6 bg-bali-cream-dark rounded-2xl border border-bali-sand/30">
            <h3 className="font-display text-2xl text-bali-deep font-light mb-3">Carte cadeau Perle de Bali</h3>
            <p className="font-body text-sm text-bali-dark/70 mb-4">Offrez une expérience de bien-être à une personne que vous aimez.</p>
            <Link href="/carte-cadeau" className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300 text-sm">
              Découvrir les cartes cadeaux
            </Link>
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
