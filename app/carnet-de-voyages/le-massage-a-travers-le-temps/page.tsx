import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le massage à travers le temps",
  description:
    "De l'Antiquité à nos jours, retracez l'histoire fascinante du massage et ses évolutions à travers les cultures et civilisations du monde.",
};

export default function MassageTraversLeTempPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden dot-field">
        <div className="absolute inset-0 opacity-15 animate-breathe" style={{ backgroundImage: "radial-gradient(ellipse at 50% 60%, rgba(107,145,114,0.4) 0%, transparent 55%)" }} />
        <span className="absolute top-[25%] right-[12%] w-1.5 h-1.5 rounded-full bg-bali-sand hidden sm:block animate-twinkle" style={{ animationDelay: "0.4s" }} />
        <span className="absolute top-[60%] left-[42%] w-1 h-1 rounded-full bg-bali-gold hidden lg:block animate-twinkle" style={{ animationDelay: "1.3s" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">Le massage à travers le temps</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-sage text-white px-3 py-1 rounded-full mb-4">Histoire</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">Le massage à travers le temps</h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>À venir</span><span>·</span><span>7 min de lecture</span>
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
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10" style={{ background: "linear-gradient(135deg, #2B2620 0%, #BA7F7F 100%)" }}>
            <div className="w-full h-full flex items-end p-4">
              <p className="font-body text-xs text-white/30 italic">Photo à venir — /images/blog/histoire-massage.jpg</p>
            </div>
          </div>

          <div className="space-y-6 font-body text-bali-dark/80 leading-relaxed">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              Le massage est l'une des pratiques thérapeutiques les plus anciennes de l'humanité. Depuis des millénaires, toutes les civilisations ont reconnu ses vertus.
            </p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Les origines antiques</h2>
            <p>Les premières traces de massage remontent à 3000 ans avant J.-C. en Chine, dans le Nei Jing (Canon de Médecine Interne). En Égypte antique, des fresques représentent des séances de réflexologie plantaire dans des tombes datant de 2330 av. J.-C.</p>
            <p>En Inde, l'Ayurveda intégrait le massage comme élément fondamental de la santé depuis plus de 4000 ans. Les Grecs et Romains, notamment Hippocrate et Galien, ont codifié les techniques de massage pour leurs athlètes et guerriers.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Bali et les traditions asiatiques</h2>
            <p>À Bali, le massage est intimement lié à la spiritualité hindoue-balinaise. Les thérapeutes balinais traditionnels (Balians) combinent techniques de massage, médecine des plantes et rituels spirituels pour restaurer l'harmonie du corps et de l'âme.</p>
            <p>Le massage balinais tel que nous le connaissons aujourd'hui est un mélange raffiné de techniques chinoises, indiennes et javanaises, adapté et enrichi par des siècles de tradition insulaire balinaise.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Le massage aujourd'hui</h2>
            <p>Aujourd'hui, le massage est reconnu mondialement pour ses bienfaits scientifiquement prouvés : réduction du stress, amélioration de la circulation, soulagement des douleurs, renforcement du système immunitaire.</p>
            <p>Chez Perle de Bali, nous perpétuons cette tradition millénaire en vous proposant des soins authentiques, issus directement de la source balinaise.</p>
          </div>

          <div className="mt-10 pt-8 border-t border-bali-sand/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/carnet-de-voyages" className="font-body text-sm text-bali-dark/60 hover:text-bali-gold transition-colors">← Retour au blog</Link>
            <Link href="/services-massage" className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300 text-sm">
              Découvrir nos massages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
