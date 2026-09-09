import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "J'ai entrouvert une porte vers l'Asie",
  description:
    "Un après-midi dans un lodge au cœur de la jungle thaïlandaise, où le vacarme de la nature a fini par imposer le calme.",
};

export default function ArticlePorteAsiePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 40% 60%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">J&apos;ai entrouvert une porte vers l&apos;Asie</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-gold text-white px-3 py-1 rounded-full mb-4">Voyage</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">
            J&apos;ai entrouvert une porte<br />vers l&apos;Asie
          </h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>13 janvier 2025</span><span>·</span><span>3 min de lecture</span>
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
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/blog/porte-asie.jpg"
              alt="Lodge dans la jungle en Thaïlande"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 font-body text-bali-dark/80 leading-relaxed">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              Nous sommes en Thaïlande depuis déjà une semaine, dans cette magnifique région au nord du pays.
            </p>
            <p>Épuisée par mon travail en France, je tente de profiter au mieux de toutes les merveilles du pays : temples, paysages, rencontres ; quand nous avons fait halte dans ce lodge, en pleine jungle.</p>
            <p>Notre habitation de bois et paille tressée laisse passer l&apos;air chaud et humide, mais surtout, les bruits impressionnants de la nature.</p>
            <p>Je profite de cette journée « off » pour prendre mon livre et m&apos;installer dans un transat sommaire, où aucune cloison n&apos;obstrue la vue sur la nature exubérante.</p>
            <p>La jungle est dense, puissante, luxuriante. On y devine des myriades d&apos;animaux exotiques, mais on n&apos;entend que cris, chants, frottements, crissements assourdissants… telle cette cigale locale qui fait un bruit strident de scie circulaire !</p>
            <p>J&apos;ouvre mon livre et j&apos;écoute la vie intense autour de moi. Dans ce tumulte incessant et mystérieux, lentement, par un contraste inexpliqué, je sens le calme s&apos;installer en moi, mon esprit vagabonde à l&apos;orée de cette jungle débordante de vie. Le temps semble s&apos;étirer, ralentir. Je respire profondément et me sens vivante comme jamais.</p>
            <p>Soudain une voix forte m&apos;interrompt, me demande si j&apos;arrive à lire tranquille dans ce bruit ! Et le charme est rompu. À mon insu, j&apos;ai fait pour la première fois… de la méditation ? Le stress que j&apos;ai traîné jusque là s&apos;est envolé, je ne ressens plus ce poids écrasant dans la poitrine, ma paix est revenue. Et, je n&apos;ai pas lu une ligne de mon bouquin.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-bali-sand/30 flex flex-col sm:flex-row items-center justify-between gap-4">
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
