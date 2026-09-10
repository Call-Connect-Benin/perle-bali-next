import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Le massage à travers le temps",
  description:
    "Des origines du mot « massage » aux techniques d'aujourd'hui : un voyage à travers l'histoire du massage, de la Chine antique au massage suédois.",
};

export default function MassageTraversLeTempPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 60%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-bali-sand/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link><span>›</span>
            <Link href="/carnet-de-voyages" className="hover:text-bali-gold">Carnet de voyages</Link><span>›</span>
            <span className="text-bali-sand/80">Le massage à travers le temps</span>
          </nav>
          <span className="inline-block font-body text-xs tracking-widest uppercase bg-bali-sage text-white px-3 py-1 rounded-full mb-4">Histoire</span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-4 leading-tight">Le massage à travers le temps</h1>
          <div className="flex items-center gap-3 font-body text-xs text-bali-sand/60">
            <span>7 min de lecture</span>
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
            <Image src="/images/blog/histoire-massage.jpg" alt="Le massage à travers le temps" fill className="object-cover" />
          </div>

          <div className="space-y-6 font-body text-bali-dark/80 leading-relaxed">
            <p className="text-xl font-medium text-bali-deep leading-relaxed">
              Il nous arrive d&apos;avoir des douleurs fortes ou juste désagréables, notre réaction instinctive est de frotter, masser, pour soulager.
            </p>
            <p>Nos ancêtres lointains ont appris très tôt que certaines plantes, conjuguées à une bonne friction, pouvaient soulager et améliorer la guérison. Ces techniques basiques ont traversé les temps, elles ont été améliorées au fil des millénaires pour arriver aux techniques de massages d&apos;aujourd&apos;hui.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Les origines</h2>
            <p>Le mot « massage » est un dérivé de l&apos;arabe « Mass&apos;h » (presser doucement). Les premières descriptions détaillées du massage ont été découvertes en Chine et datent d&apos;environ 3000 ans.</p>
            <p>Vers 1000 avant JC, les japonais découvrent les méthodes de massage chinoises et introduisent de nouvelles combinaisons. Ils finissent par développer une méthode unique et spécifique : le Shiatsu. « Shi » (doigt) et « Atsu » (pression). La technique est similaire à l&apos;acupuncture sans l&apos;utilisation d&apos;aiguilles, on se sert de la pression des doigts sur des points précis du corps.</p>
            <p>En Inde, vers 1700 avant JC, le livre de médecine « AYURVEDA » (art de vivre) décrit quelques massages simples combinés à des herbes médicinales pour améliorer divers traitements.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Grèce et Rome antiques</h2>
            <p>Les grecs anciens avaient recours au massage dans leur vie de tous les jours. Ils ont développé des techniques pour entretenir la forme de leurs athlètes et les préparer aux compétitions. Hippocrate affirmait que « quiconque veut apprendre la médecine doit maîtriser l&apos;art du massage, pour assouplir une articulation douloureuse ou corriger une hyperlaxité ».</p>
            <p>Les romains ont appris des grecs anciens. Jules César lui-même, souffrant d&apos;épilepsie, était soigné par des massages quotidiens (technique de pincements) pour soulager ses névralgies et migraines. Les bains publics de l&apos;époque, accessibles à tous, offraient ce type de soin à la population.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Du Moyen Âge au XIX<sup>e</sup> siècle</h2>
            <p>Pendant le Moyen-Âge, très peu de traces écrites : l&apos;Église, dans sa période très conservatrice, a rendu le massage impopulaire. Le toucher ne fait plus partie des méthodes de guérison et devient impur, car il est associé aux plaisirs corporels.</p>
            <p>Il faut attendre la Renaissance, au 16<sup>ème</sup> siècle, pour que le massage retrouve ses lettres de noblesse. Ambroise Paré, père de la médecine moderne, décrit dans l&apos;un de ses livres les effets positifs des massages.</p>
            <p>Ensuite, très peu d&apos;avancées en matière de massage jusqu&apos;au 19<sup>e</sup> siècle. En Suède, Pehr Henrik Ling devient le père du massage moderne, en créant sa propre méthode, basée sur la technique de pressions, que nous connaissons aujourd&apos;hui sous le nom de massage suédois.</p>

            <h2 className="font-display text-3xl text-bali-deep font-light mt-10 mb-4">Aujourd&apos;hui</h2>
            <p>Depuis les années 60, nous redécouvrons, en masse, les bienfaits du massage, même s&apos;il ne s&apos;apparente pas à la médecine moderne et ne remplace en rien un traitement médical.</p>
            <p>Les massages sont reconnus pour soulager le stress du monde moderne. Souvent négligé dans nos vies, le « toucher » permet un retour au calme de nos énergies.</p>
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
