import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos – Françoise, votre masseuse Balinaise",
  description:
    "Passionnée par Bali et les traditions de bien-être, Françoise vous accueille à Orly pour des massages balinais sur-mesure depuis plus de 6 ans.",
};

const qualities = [
  "Expertise de plus de 6 ans",
  "Soins personnalisés",
  "Ambiance zen et authentique",
  "Clientèle 100 % satisfaite",
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
      "La réservation à l'avance est fortement conseillée pour garantir votre créneau. Vous pouvez me contacter par téléphone ou par e-mail pour prendre rendez-vous.",
  },
  {
    question: "Quels produits utilisez-vous pour les massages ?",
    answer:
      "J'utilise des huiles naturelles de qualité, sélectionnées pour leurs propriétés relaxantes et nourrissantes, en harmonie avec les traditions balinaises.",
  },
  {
    question: "Puis-je personnaliser mon massage ?",
    answer:
      "Absolument ! Avant chaque séance, nous échangeons sur vos attentes et besoins afin que je puisse adapter chaque geste à votre état physique du moment.",
  },
  {
    question: "Proposez-vous des offres ou abonnements ?",
    answer:
      "Oui, je propose des cures de 5 ou 10 massages amincissants à tarif préférentiel, avec des massages offerts en bonus. Consultez la page Tarifs pour les détails.",
  },
  {
    question: "Combien de temps dure une séance de massage ?",
    answer:
      "La durée varie selon le soin choisi : 30 minutes pour le massage enfant, 50 minutes pour les soins spécialisés (Deep Tissue, Californien…), 60 minutes pour le bien-être balinais, et 90 minutes pour les soins Évasion et Pure Détente.",
  },
  {
    question: "Proposez-vous des massages pour les couples ?",
    answer:
      "Les massages sont proposés en séances individuelles. N'hésitez pas à me contacter pour discuter de vos besoins spécifiques.",
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      "Lundi au vendredi : 18h – 21h. Samedi et dimanche : 9h – 21h.",
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
      <section className="bg-bali-deep py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 40%, rgba(192,114,138,0.4) 0%, transparent 55%)",
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

      {/* Bio */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div
                className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #F5EAE5 0%, #E8B0BB 50%, #D4909F 100%)",
                }}
              >
                {/* Image will go here: /images/about/francoise.jpg */}
                <div className="w-full h-full flex items-end justify-start p-6">
                  <p className="font-body text-xs text-bali-dark/40 italic">
                    Photo à venir — /images/about/francoise.jpg
                  </p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-bali-gold/15 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-bali-gold/20 -z-10" />
            </div>

            {/* Text */}
            <div>
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
                  className="inline-flex items-center gap-2 bg-bali-gold text-white font-body font-medium px-7 py-3 rounded-full hover:bg-bali-deep transition-colors"
                >
                  Demandez un devis
                </Link>
              </div>
            </div>
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-3">Parcours & certifications</p>
          <h2 className="font-display text-3xl text-bali-deep font-light mb-8">
            Quelques étapes officielles de mon parcours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-bali-white rounded-xl p-5 shadow-sm border border-bali-sand/20 text-center">
              <div className="w-12 h-12 rounded-full bg-bali-gold/15 flex items-center justify-center mx-auto mb-3">
                <span className="text-bali-gold text-xl">🏅</span>
              </div>
              <p className="font-body text-sm text-bali-dark/80 leading-snug">
                L'école <strong className="text-bali-deep">Bali BISA</strong> a obtenu les certificats d'excellence TripAdvisor
              </p>
            </div>
            <div className="bg-bali-white rounded-xl p-5 shadow-sm border border-bali-sand/20 text-center">
              <div className="w-12 h-12 rounded-full bg-bali-gold/15 flex items-center justify-center mx-auto mb-3">
                <span className="text-bali-gold text-xl">🤝</span>
              </div>
              <p className="font-body text-sm text-bali-dark/80 leading-snug">
                En <strong className="text-bali-deep">partenariat</strong> avec Perle de Bali depuis 2020
              </p>
            </div>
            <div className="bg-bali-white rounded-xl p-5 shadow-sm border border-bali-sand/20 text-center">
              <div className="w-12 h-12 rounded-full bg-bali-gold/15 flex items-center justify-center mx-auto mb-3">
                <span className="text-bali-gold text-xl">👶</span>
              </div>
              <p className="font-body text-sm text-bali-dark/80 leading-snug">
                Autorisation d'utiliser la méthode <strong className="text-bali-deep">Massage « Pizza » Enfant</strong>
              </p>
            </div>
          </div>
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
              className="inline-flex items-center gap-2 bg-bali-gold text-white font-body font-medium px-7 py-3 rounded-full hover:bg-bali-deep transition-colors"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
