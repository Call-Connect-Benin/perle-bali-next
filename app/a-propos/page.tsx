import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { ShellOrnament, FlowerOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "À propos – Françoise, votre masseuse Balinaise",
  description:
    "Passionnée par Bali et les traditions de bien-être, Françoise vous accueille à Orly pour des massages balinais sur-mesure depuis plus de 7 ans.",
};

const qualities = [
  "Expertise de plus de 7 ans",
  "Soins personnalisés",
  "Ambiance zen et authentique",
  "Clientèle 100 % satisfaite",
];

const stats = [
  { value: "5+", label: "d'expériences" },
  { value: "95%", label: "des soins personnalisés" },
  { value: "98%", label: "de clients séduits par l'ambiance" },
  { value: "100%", label: "clients satisfaits" },
];

const faqs = [
  {
    question: "Quels types de massages proposez-vous ?",
    answer:
      "Je propose une gamme variée de massages inspirés des traditions balinaises : massages relaxants pour évacuer le stress, massages énergétiques pour revitaliser votre corps, soins sur-mesure adaptés à vos besoins spécifiques.",
  },
  {
    question: "Dois-je réserver à l'avance ?",
    answer:
      "Oui, je vous recommande vivement de réserver à l'avance, notamment en période de forte affluence. Cela garantit la disponibilité du créneau qui vous convient le mieux.",
  },
  {
    question: "Quels produits utilisez-vous pour les massages ?",
    answer:
      "Je privilégie des huiles naturelles et des produits de qualité supérieure. Chaque ingrédient est sélectionné avec soin pour respecter votre peau, favoriser votre bien-être et prolonger les bienfaits du massage.",
  },
  {
    question: "Puis-je personnaliser mon massage ?",
    answer:
      "Bien sûr ! Lors de votre rendez-vous, j'échangerai avec vous pour comprendre vos attentes et adapter les techniques, la pression et les zones ciblées. Chaque massage est conçu pour répondre à vos besoins uniques.",
  },
  {
    question: "Proposez-vous des offres ou abonnements ?",
    answer:
      "Oui, je propose une carte de fidélité : 5 massages effectués, le 6ème est offert.",
  },
  {
    question: "Combien de temps dure une séance de massage ?",
    answer:
      "La durée de mes massages varie : 60 minutes pour un massage Deep Tissue (récupération sportive), 60 minutes pour une relaxation complète, 90 minutes pour une expérience approfondie et immersive.",
  },
  {
    question: "Proposez-vous des massages pour les couples ?",
    answer:
      "Oui, les massages en duo sont possibles, 2 solutions : soit je masse les personnes successivement, soit je fais appel à un confrère de confiance pour réaliser un massage en duo dans mon salon. Dans les deux cas, vous partagerez un moment de relaxation unique. N'hésitez pas à me contacter pour plus de détails.",
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      "Je suis ouverte du lundi au vendredi de 09:00 à 21:00, et le samedi et dimanche de 09:00 à 18:00.",
  },
  {
    question: "Y a-t-il des contre-indications aux massages ?",
    answer:
      "Certains états de santé, comme les grossesses, les blessures récentes ou certaines conditions médicales, nécessitent des précautions particulières. N'hésitez pas à m'informer de votre situation pour adapter la séance en toute sécurité.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <ShellOrnament className="absolute top-10 left-[4%] w-20 h-14 text-bali-honey/40 hidden sm:block animate-float-slow" />
        <FlowerOrnament className="absolute bottom-8 right-[6%] w-24 h-24 text-bali-gold/40 hidden sm:block animate-float-slow-delayed" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 40%, rgba(127, 165, 136,0.4) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">À propos</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">À propos de moi</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">
            L'art de la détente avec
            <br />
            <span className="text-bali-gold">Perle de Bali</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 bg-bali-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-bali-deep font-medium mb-1">
                <Counter value={s.value} />
              </p>
              <p className="font-body text-xs text-bali-dark/60 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <Reveal className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/about/francoise.jpg"
                  alt="Françoise, masseuse Perle de Bali"
                  fill
                  className="object-cover img-zoom"
                />
              </Reveal>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-bali-gold/15 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-bali-gold/20 -z-10" />
            </div>

            {/* Text */}
            <Reveal delay={80}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Perle de Bali – Françoise</p>
              <h2 className="font-display text-4xl text-bali-deep font-light leading-snug mb-6">
                Chez Perle de Bali, je célèbre l'art du bien-être
              </h2>
              <div className="space-y-4 font-body text-bali-dark/80 text-base leading-relaxed">
                <p>
                  Chez Perle de Bali, je célèbre l'art du bien-être et de la relaxation, par des massages issus des traditions balinaises. Je vous offre une expérience unique alliant sérénité, soins sur-mesure et expertise.
                </p>
                <p>
                  Passionnée par les voyages et les cultures du monde, j'ai été profondément influencée par Bali, où le massage est un art de vivre. Formée auprès des meilleurs, je mets mon savoir-faire au service de votre bien-être.
                </p>
                <p>
                  Chaque massage est conçu pour apaiser votre corps, revitaliser votre esprit et vous recentrer. Avec Perle de Bali, offrez-vous un moment de bien-être inoubliable.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {qualities.map((q) => (
                  <div key={q} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-bali-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-bali-gold text-xs">✓</span>
                    </span>
                    <span className="font-body text-sm text-bali-dark font-medium">{q}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-7 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Demandez un devis
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 bg-bali-cream-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-3">Méthode</p>
            <h2 className="font-display text-4xl text-bali-deep font-light">
              Mon approche personnalisée
            </h2>
          </div>
          <Reveal>
            <div className="bg-bali-white rounded-2xl p-8 shadow-sm border border-bali-sand/20 space-y-5 font-body text-bali-dark/80 leading-relaxed">
              <p>
                Avant chaque séance, je prends le temps d'échanger avec vous sur vos envies et vos attentes. Cet échange me permet de créer une expérience sur-mesure, qui favorise une détente profonde et un bien-être qui rayonne dans tous les aspects de votre vie.
              </p>
              <p>
                Chaque personne est unique, tout comme ses besoins en bien-être. C'est pourquoi mes massages sont entièrement personnalisés, conçus pour répondre à vos attentes spécifiques et à votre état physique du moment.
              </p>
              <p>
                Je combine différentes techniques essentielles du massage, ajustant chaque geste pour offrir une expérience à la fois relaxante et profondément apaisante. Mon protocole évolutif s'adapte à vos besoins, en prenant soin de l'ensemble de votre corps, de la tête aux pieds, pour un soulagement global et durable.
              </p>
              <div className="p-4 bg-bali-gold/8 border-l-4 border-bali-gold rounded-r-xl">
                <p className="text-sm font-medium text-bali-dark">
                  ⚠ ATTENTION : Certains états de santé, comme les grossesses, les blessures récentes ou certaines conditions médicales, nécessitent des précautions particulières. N'hésitez pas à m'informer de votre situation pour adapter la séance en toute sécurité.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="text-center mt-8">
            <Link
              href="/services-massage"
              className="inline-flex items-center gap-2 border-2 border-bali-gold text-bali-gold font-body font-medium px-7 py-3 rounded-full hover:bg-bali-gold hover:text-white transition-colors"
            >
              Réservez votre massage
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 bg-bali-cream">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-3">Parcours & certifications</p>
          <h2 className="font-display text-3xl text-bali-deep font-light mb-8">
            Quelques photos officielles de mon parcours
          </h2>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/about/photo-bisa-priere.jpg" alt="Formation massage balinais à Bali BISA" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/about/photo-bisa-diplome.jpg" alt="Remise des diplômes de formation à Bali BISA" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/about/photo-bisa-equipe.jpg" alt="Équipe de formation Bali BISA" fill className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-start">
              <div>
                <div className="h-16 flex items-center justify-center mb-3">
                  <Image src="/images/about/logo-bisa.png" alt="Bali BISA" width={90} height={66} className="object-contain max-h-16 w-auto" />
                </div>
                <p className="font-body text-xs text-bali-dark/70 leading-snug">L&apos;école <strong className="text-bali-deep">Bali BISA</strong> a obtenu les certificats d&apos;excellence TripAdvisor</p>
              </div>
              <div>
                <div className="h-16 flex items-center justify-center mb-3">
                  <Image src="/images/about/logo-fitness-park.png" alt="Fitness Park" width={90} height={31} className="object-contain max-h-16 w-auto" />
                </div>
                <p className="font-body text-xs text-bali-dark/70 leading-snug">En <strong className="text-bali-deep">partenariat</strong> avec Perle de Bali depuis 2020</p>
              </div>
              <div>
                <div className="h-16 flex items-center justify-center mb-3">
                  <Image src="/images/about/logo-zeste-detente.png" alt="Zeste Détente" width={90} height={53} className="object-contain max-h-16 w-auto" />
                </div>
                <p className="font-body text-xs text-bali-dark/70 leading-snug">Un merci tout spécial pour votre autorisation à utiliser la méthode <strong className="text-bali-deep">Massage « Pizza » Enfant</strong></p>
              </div>
              <div>
                <div className="h-16 flex items-center justify-center mb-3">
                  <Image src="/images/about/logo-tripadvisor.jpg" alt="Certificats d'excellence TripAdvisor" width={90} height={43} className="object-contain max-h-16 w-auto" />
                </div>
                <p className="font-body text-xs text-bali-dark/70 leading-snug">Certificats d&apos;excellence TripAdvisor 2017 &amp; 2018</p>
              </div>
              <div>
                <div className="h-16 flex items-center justify-center mb-3">
                  <Image src="/images/about/logo-eis-spa.png" alt="École Internationale du Spa" width={90} height={31} className="object-contain max-h-16 w-auto" />
                </div>
                <p className="font-body text-xs text-bali-dark/70 leading-snug">Formée à l&apos;<strong className="text-bali-deep">École Internationale du Spa</strong>, Paris</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-bali-cream-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-3">FAQ</p>
            <h2 className="font-display text-4xl text-bali-deep font-light">
              Questions fréquemment posées
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-bali-white rounded-xl border border-bali-sand/20 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-body font-medium text-bali-dark hover:text-bali-gold transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg
                    className="w-4 h-4 text-bali-gold transition-transform group-open:rotate-180 shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 font-body text-sm text-bali-dark/75 leading-relaxed border-t border-bali-sand/20 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="font-body text-sm text-bali-dark/60 mb-4">Vous avez d'autres questions ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-7 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
