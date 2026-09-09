import type { Metadata } from "next";
import Link from "next/link";
import { SandScatter, ShellOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Carte Cadeau – Offrez un moment de bien-être",
  description:
    "Offrez une carte cadeau Perle de Bali : un moment de détente et de bien-être balinais à Orly (94). Le cadeau parfait pour vos proches.",
};

const reasons = [
  { title: "Un massage relaxant", desc: "pour apaiser les tensions." },
  { title: "Un moment de quiétude", desc: "pour retrouver l'énergie." },
  { title: "Un cadeau qui touche", desc: "pour un moment précieux." },
];

const occasions = [
  { title: "Les fêtes de fin d'année", desc: "un moment zen pour bien commencer l'année." },
  { title: "La Saint-Valentin", desc: "un geste rempli d'amour et d'attention." },
  { title: "Anniversaires et célébrations", desc: "pour marquer une journée spéciale." },
  { title: "Avant un événement important", desc: "une pause pour se préparer en toute sérénité." },
  { title: "Un remerciement sincère", desc: "pour montrer votre gratitude." },
  { title: "Simplement pour dire", desc: "« Je t'aime » ou « Tu comptes pour moi »." },
  { title: "Sans raison particulière", desc: "parfois, les gestes spontanés ont le plus grand impact." },
];

export default function CarteCadeauPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <SandScatter className="absolute top-10 left-[10%] w-32 h-8 text-bali-sand/55 hidden sm:block animate-float-slow" />
        <ShellOrnament className="absolute bottom-6 right-[4%] w-24 h-16 text-bali-honey/50 hidden sm:block animate-float-slow-delayed" />
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(127, 165, 136,0.5) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Carte cadeau</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Offrir le bien-être</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">
            Offrez le cadeau inestimable<br />
            <span className="text-bali-gold">du bien-être</span>
          </h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Dans un monde où tout va trop vite, prendre soin de soi est souvent relégué au second plan. Pourtant, le temps pour soi est l&apos;un des plus beaux cadeaux que l&apos;on puisse offrir.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-bali-dark/80 text-lg leading-relaxed mb-12">
            Avec ma carte-cadeau, vous offrez bien plus qu&apos;un simple moment de détente, vous offrez une expérience de sérénité, un instant précieux pour se déconnecter du stress quotidien et se recentrer.
          </p>

          <h2 className="font-display text-3xl text-bali-deep font-light mb-8">Pourquoi choisir une carte-cadeau bien-être ?</h2>
          <p className="font-body text-bali-dark/70 mb-8">Parce que nous vivons des temps exigeants où chacun mérite une pause :</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 text-left">
            {reasons.map((r) => (
              <div key={r.title} className="bg-bali-white rounded-xl p-5 shadow-sm border border-bali-sand/20">
                <p className="font-display text-lg text-bali-deep font-medium mb-1">{r.title}</p>
                <p className="font-body text-sm text-bali-dark/70">{r.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl text-bali-deep font-light mb-4">Pour quelles occasions ?</h2>
          <p className="font-body text-bali-dark/70 mb-8">Ma carte-cadeau s&apos;adapte à toutes les circonstances, grandes ou petites :</p>
          <ul className="text-left space-y-3 mb-16">
            {occasions.map((o) => (
              <li key={o.title} className="font-body text-sm text-bali-dark/80 leading-relaxed">
                <span className="font-medium text-bali-deep">{o.title} :</span> {o.desc}
              </li>
            ))}
          </ul>

          <div className="bg-bali-deep text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(127, 165, 136,0.5) 0%, transparent 65%)" }} />
            <div className="relative">
              <h3 className="font-display text-2xl text-white font-light mb-3">Prêt à offrir un moment unique ?</h3>
              <p className="font-body text-bali-sand/75 mb-6">
                Achetez votre carte-cadeau maintenant et redonnez le sourire à vos proches dès à présent. Pour tout conseil, contactez-moi au{" "}
                <a href="tel:+33756139596" className="text-bali-gold hover:underline">07 56 13 95 96</a>.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Achetez une carte cadeau
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
