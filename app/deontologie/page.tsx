import type { Metadata } from "next";
import Link from "next/link";
import { FlowerOrnament, SandScatter } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Déontologie – Charte éthique de Perle de Bali",
  description:
    "Découvrez les engagements de Perle de Bali envers vous : confidentialité, respect, non-substitution médicale et contre-indications au massage.",
};

const engagements = [
  {
    title: "M'abstenir de tout diagnostic médical",
    content: "Je ne remplace pas un médecin.",
  },
  {
    title: "Respecter votre traitement en cours",
    content: "Aucun conseil médical ou interruption de thérapie ne sera proposé.",
  },
  {
    title: "Vous orienter vers un professionnel de santé",
    content: "Si vous présentez des symptômes anormaux.",
  },
  {
    title: "Respecter votre intégrité physique et morale",
    content: "En mettant votre confort au cœur de chaque séance.",
  },
  {
    title: "Garantir une confidentialité totale",
    content: "Nos échanges et votre bien-être sont protégés.",
  },
  {
    title: "Demander la présence d'un parent",
    content: "Pour les séances avec mineurs.",
  },
];

const contraIndications = [
  {
    title: "Tension artérielle non régulée",
    content: "Les massages peuvent accentuer une irrégularité.",
  },
  {
    title: "Fièvre, grippe, ou infection",
    content: "Pour éviter la transmission de la maladie.",
  },
  {
    title: "Problèmes cardiaques ou circulatoires",
    content: "(hypertension, phlébites, varices importantes) : le massage stimule la circulation sanguine, ce qui pourrait aggraver ces conditions.",
  },
  {
    title: "Diabète",
    content: "Un massage influant sur la circulation peut modifier l'efficacité de votre traitement.",
  },
  {
    title: "Cancer",
    content: "Le massage pourrait stimuler involontairement des cellules cancéreuses.",
  },
];

export default function DeontologiePage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <FlowerOrnament className="absolute top-6 left-[6%] w-20 h-20 text-bali-gold/40 hidden sm:block animate-float-slow" />
        <SandScatter className="absolute bottom-8 right-[10%] w-36 h-10 text-bali-sand/55 hidden sm:block animate-float-slow-delayed" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(127, 165, 136,0.4) 0%, transparent 55%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Déontologie</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Éthique & Valeurs</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">Votre bien-être<br />en toute confiance</h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Chez Perle de Bali, votre sérénité et votre sécurité sont ma priorité. Les massages bien-être que je propose sont exclusivement dédiés à la relaxation et à l&apos;épanouissement personnel. Ils ne relèvent ni d&apos;une pratique médicale ni des actes réalisés par des professionnels de santé (ostéopathes, kinésithérapeutes, etc.).
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none font-body text-bali-dark/80 mb-12">
            <p className="text-lg leading-relaxed">
              Je m&apos;engage à offrir un service respectueux, professionnel et éthique, dans un cadre bienveillant.
            </p>
          </div>

          <h2 className="font-display text-3xl text-bali-deep font-light mb-6">Mes engagements envers vous</h2>
          <p className="font-body text-bali-dark/70 mb-8">Afin de garantir une expérience de qualité, je m&apos;engage à :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {engagements.map((e) => (
              <div key={e.title} className="bg-bali-white rounded-2xl p-6 border border-bali-sand/20 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-bali-gold text-xs">✓</span>
                  </span>
                  <h3 className="font-display text-xl text-bali-deep font-medium">{e.title}</h3>
                </div>
                <p className="font-body text-sm text-bali-dark/75 leading-relaxed pl-9">{e.content}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl text-bali-deep font-light mb-4">Les contre-indications : pourquoi elles sont importantes</h2>
          <p className="font-body text-bali-dark/70 mb-8">
            Certaines situations de santé nécessitent une vigilance particulière pour votre sécurité. Voici les principales contre-indications au massage :
          </p>
          <div className="space-y-4 mb-8">
            {contraIndications.map((c) => (
              <div key={c.title} className="bg-bali-white rounded-2xl p-5 border border-bali-sand/20 shadow-sm">
                <h3 className="font-display text-lg text-bali-deep font-medium mb-1">{c.title}</h3>
                <p className="font-body text-sm text-bali-dark/75 leading-relaxed">{c.content}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-bali-gold/8 border-l-4 border-bali-gold rounded-r-xl mb-12">
            <p className="text-sm font-medium text-bali-dark">
              ⚠ Dans le doute, demandez l&apos;avis de votre médecin.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300">
              Réservez pour votre bien-être
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
