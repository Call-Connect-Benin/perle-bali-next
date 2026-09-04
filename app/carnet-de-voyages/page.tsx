import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carnet de voyages – Blog Bien-être Balinais",
  description:
    "Le blog de Perle de Bali : voyages, traditions balinaises, conseils bien-être et témoignages. Découvrez l'univers du massage et de la relaxation.",
};

const articles = [
  {
    title: "J'ai entrouvert une porte vers l'Asie",
    excerpt:
      "Mon voyage initiatique à Bali et la découverte des traditions de massage qui ont changé ma vision du bien-être. Une rencontre avec l'art de vivre balinais.",
    date: "14 janvier 2025",
    readTime: "5 min",
    href: "/carnet-de-voyages/jai-entrouvert-une-porte-vers-lasie",
    category: "Voyage",
    image: "/images/blog/porte-asie.jpg",
  },
  {
    title: "Journée de la Femme 2020",
    excerpt:
      "À l'occasion de la Journée Internationale des Droits des Femmes, Perle de Bali célèbre le bien-être féminin et l'importance de prendre soin de soi.",
    date: "15 avril 2025",
    readTime: "4 min",
    href: "/carnet-de-voyages/journee-de-la-femme-2020",
    category: "Bien-être",
    image: null,
  },
  {
    title: "Le massage à travers le temps",
    excerpt:
      "De l'Antiquité à nos jours, retracez l'histoire fascinante du massage et ses évolutions à travers les cultures et les civilisations du monde entier.",
    date: "À venir",
    readTime: "7 min",
    href: "/carnet-de-voyages/le-massage-a-travers-le-temps",
    category: "Histoire",
    image: "/images/blog/carnet-listing.jpg",
  },
  {
    title: "L'Islande, hostile et merveilleuse",
    excerpt:
      "Geysers, plongée dans la faille de Silfra entre deux continents, sources chaudes et Diamond Beach : récit d'un voyage au pays du feu et de la glace.",
    date: "À venir",
    readTime: "4 min",
    href: "/carnet-de-voyages/islande",
    category: "Voyage",
    image: null,
  },
];

export default function CarnetDeVoyagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(186, 127, 127,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Carnet de voyages</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Blog & Inspirations</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">Carnet de voyages</h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Découvrez mes inspirations, mes voyages et mes réflexions sur le bien-être et les traditions balinaises.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 px-6 bg-bali-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-bali-white rounded-2xl overflow-hidden shadow-sm border border-bali-sand/20 card-elevate flex flex-col"
              >
                <div className="w-full aspect-video bg-gradient-to-br from-bali-deep/5 to-bali-gold/10 relative overflow-hidden">
                  {article.image ? (
                    <Image src={article.image} alt={article.title} fill className="object-cover img-zoom" />
                  ) : (
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(107,145,114,0.1) 0%, rgba(186, 127, 127,0.08) 60%, transparent 100%)" }} />
                  )}
                  <span className="absolute top-3 left-3 font-body text-xs font-semibold bg-bali-gold/90 text-white px-2.5 py-1 rounded-full z-10">
                    {article.category}
                  </span>
                  {!article.image && (
                    <p className="absolute bottom-2 right-3 font-body text-xs text-bali-dark/30 italic">Photo à venir</p>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs text-bali-dark/50">{article.date}</span>
                    <span className="text-bali-sand">·</span>
                    <span className="font-body text-xs text-bali-dark/50">{article.readTime} de lecture</span>
                  </div>
                  <h2 className="font-display text-xl text-bali-deep font-medium mb-2 group-hover:text-bali-green transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="font-body text-sm text-bali-dark/70 leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-bali-gold text-xs font-medium font-body">
                    Lire l'article
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-bali-cream-dark text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-bali-deep font-light mb-4">Prêt(e) à vivre l'expérience ?</h2>
          <p className="font-body text-bali-dark/70 mb-6">Réservez votre séance et découvrez le bien-être balinais en personne.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-bali-gold text-white font-body font-medium px-8 py-3 rounded-full hover:bg-bali-deep transition-colors">
            Réserver une séance
          </Link>
        </div>
      </section>
    </>
  );
}
