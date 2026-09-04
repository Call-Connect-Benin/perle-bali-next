import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'Islande, hostile et merveilleuse",
  description:
    "Récit de voyage en Islande : geysers, plongée dans la faille de Silfra, sources chaudes et Diamond Beach. Un pays de contrastes entre feu et glace.",
};

export default function IslandePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 60%, rgba(107,145,114,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">L&apos;Islande, hostile et merveilleuse</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-sage text-white px-3 py-1 rounded-full mb-4">Voyage</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">L&apos;Islande, hostile et merveilleuse</h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>À venir</span><span>·</span><span>4 min de lecture</span>
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
              <p className="font-body text-xs text-white/30 italic">Photo à venir — /images/blog/islande.jpg</p>
            </div>
          </div>

          <div className="space-y-6 font-body text-bali-dark/80 leading-relaxed">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              L&apos;Islande en plein hiver, c&apos;est accepter que la neige couvre la majeure partie de l&apos;île. C&apos;est elle qui façonne nos visites, au gré des routes ouvertes ou subitement fermées. C&apos;est l&apos;aventure de ne rien pouvoir organiser. L&apos;Islande plie le visiteur aux caprices du temps, voici l&apos;île faite de feu et de glace.
            </p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">L&apos;entraide face aux éléments</h2>
            <p>Véhicules renversés ou abandonnés, nous avons aidé à dégager la voiture d&apos;un touriste, piégée dans la neige qui durcit en quelques minutes. L&apos;entraide vient à bout de tout, à l&apos;aide de nos mains, pieds, pelles… les naufragés de la glace peuvent repartir après une grosse frayeur.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Entre marmites bouillonnantes et geysers</h2>
            <p>La neige s&apos;amenuise lorsqu&apos;on s&apos;approche des marmites bouillonnantes, où les vapeurs brûlantes surgissent du sous-sol, et plus loin, on distingue les geysers qui projettent à grande force dans le ciel, l&apos;eau bouillante accumulée sous terre. La nature est hostile et merveilleuse à la fois.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Silfra, plongée entre deux continents</h2>
            <p>À main gauche la plaque tectonique eurasienne, à main droite la plaque américaine. Et au milieu de cet étroit canyon : nous ! Plongée mythique dans la faille de Silfra, où l&apos;eau douce est très pure, mais seulement à 2 degrés Celsius… Nous l&apos;avons fait ! dans le froid sidérant, malgré les combinaisons étanches. 40 minutes de palmage entre deux continents littéralement à portée de mains.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Sources chaudes et convivialité</h2>
            <p>Terre de contrastes, l&apos;Islande nous a bluffés par les nombreuses sources d&apos;eau chaudes, où l&apos;on se baigne dans une eau à 38 degrés par géothermie, un décadent cocktail à la main, commandé au bar lui-même semi-immergé… alors que de gros flocons de neige tombent sur nos visages étonnés et ravis. Pur moment de bonheur, entre détente et convivialité.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Diamond Beach</h2>
            <p>Enfin, Diamond Beach… rien ne prépare à cette magnificence de glace ! Les icebergs se détachent des trois glaciers et glissent inéluctablement dans l&apos;embouchure, puis vers la mer. Certains s&apos;échouent sur la plage de sable noir, tels des diamants géants. Témoins du temps passé, de plusieurs siècles, voire plusieurs millénaires… sous nos yeux passe un pan de l&apos;histoire de notre planète, qui dérive, s&apos;échoue, fond lentement et se dilue à jamais dans l&apos;océan.</p>
          </div>

          <div className="mt-10 pt-8 border-t border-bali-sand/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/carnet-de-voyages" className="font-body text-sm text-bali-dark/60 hover:text-bali-gold transition-colors">← Retour au blog</Link>
            <Link href="/services-massage" className="inline-flex items-center gap-2 bg-bali-gold text-white font-body font-medium px-6 py-2.5 rounded-full hover:bg-bali-deep transition-colors text-sm">
              Découvrir nos massages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
