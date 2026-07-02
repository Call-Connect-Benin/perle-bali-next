import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "J'ai entrouvert une porte vers l'Asie",
  description:
    "Mon voyage initiatique à Bali et la découverte des traditions de massage balinaises. Comment Bali a changé ma vision du bien-être.",
};

export default function ArticleBaliPage() {
  return (
    <>
      <section className="bg-bali-deep py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 40% 60%, rgba(192,114,138,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">J'ai entrouvert une porte vers l'Asie</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-gold text-white px-3 py-1 rounded-full mb-4">Voyage</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">
            J'ai entrouvert une porte<br />vers l'Asie
          </h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>14 janvier 2025</span><span>·</span><span>5 min de lecture</span>
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
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10" style={{ background: "linear-gradient(135deg, #2E1A24 0%, #6B9172 50%, #C0728A 100%)" }}>
            <div className="w-full h-full flex items-end p-4">
              <p className="font-body text-xs text-white/30 italic">Photo à venir — /images/blog/porte-asie.jpg</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none font-body text-bali-dark/80 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              Il y a quelques années, j'ai posé le pied sur l'île des Dieux pour la première fois. Ce voyage allait changer ma vie.
            </p>
            <p>
              Bali n'est pas simplement une destination de vacances. C'est un univers à part entière, où le soin du corps et de l'âme est inscrit dans chaque geste du quotidien. Les Balinais ont intégré le massage dans leur culture comme un acte sacré, un rituel de maintien de l'harmonie entre le corps et l'esprit.
            </p>
            <p>
              J'ai eu la chance d'être formée auprès des meilleurs praticiens de l'île, à l'école Bali BISA, distinguée par TripAdvisor pour son excellence. Là, j'ai appris que le massage n'est pas une simple technique — c'est une philosophie de vie.
            </p>
            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">La philosophie balinaise du bien-être</h2>
            <p>
              À Bali, on croit que les tensions du corps sont souvent le reflet de tensions de l'esprit. Le massage n'agit pas seulement sur les muscles, il libère aussi les émotions bloquées, favorise la circulation de l'énergie vitale et restaure l'équilibre intérieur.
            </p>
            <p>
              C'est cette vision holistique que j'ai ramenée avec moi. Et c'est elle qui guide chaque soin que je propose chez Perle de Bali.
            </p>
            <blockquote className="border-l-4 border-bali-gold pl-6 py-2 my-8">
              <p className="font-display text-2xl text-bali-deep italic font-light">
                "Le massage balinais n'est pas un luxe, c'est une nécessité pour l'équilibre de la vie."
              </p>
              <footer className="font-body text-sm text-bali-dark/60 mt-2">— Philosophie balinaise</footer>
            </blockquote>
            <p>
              Depuis mon retour de Bali, j'ai créé Perle de Bali pour partager cette richesse avec vous. Chaque séance est une invitation à ce voyage intérieur, ici à Orly.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-bali-sand/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/carnet-de-voyages" className="font-body text-sm text-bali-dark/60 hover:text-bali-gold transition-colors">← Retour au blog</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-bali-gold text-white font-body font-medium px-6 py-2.5 rounded-full hover:bg-bali-deep transition-colors text-sm">
              Réserver une séance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
