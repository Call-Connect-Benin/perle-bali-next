import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LeafOrnament, SandScatter } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Tarifs – Massages Balinais",
  description:
    "Découvrez tous les tarifs de Perle de Bali : massages balinais, deep tissue, californien, drainage, chi nei tsang, cures amincissantes. Orly (94).",
};

const pricingGroups = [
  {
    category: "Massages Balinais",
    items: [
      {
        title: "Massage Bali Bien-être",
        price: "70",
        duration: "1H",
        tag: null,
        features: [
          "1 heure de massage bien-être complet, de la tête aux pieds.",
          "Massage visage et points d'acupression.",
          "Retrouvez l'harmonie du corps et de l'esprit.",
        ],
        href: "/services-massage/massage-bali-bien-etre",
      },
      {
        title: "Massage Bali Évasion",
        price: "90",
        duration: "1H30",
        tag: "Populaire",
        features: [
          "1h30 de massage traditionnel Balinais, relaxant et énergisant.",
          "Massage visage et points d'acupression.",
          "Soin personnalisé en fonction des zones à problèmes (dos, épaules, région lombaire).",
        ],
        href: "/services-massage/massage-bali-evasion",
      },
      {
        title: "Massage Bali Pure Détente",
        price: "120",
        duration: "1H30",
        tag: "Premium",
        features: [
          "1h30 de massage complet, relaxant et énergisant.",
          "Massage visage et points d'acupression.",
          "Précédé du traditionnel bain de pieds balinais, soin aux sels d'Epsom et sels de la Mer Morte.",
          "Une pure détente, un petit bonheur.",
        ],
        href: "/services-massage/massage-bali-pure-detente",
      },
    ],
  },
  {
    category: "Massages Spécialisés",
    items: [
      {
        title: "Massage Californien",
        price: "70",
        duration: "50mn",
        tag: null,
        features: [
          "Une approche douce et enveloppante du massage détente.",
          "Aide à relâcher les tensions, favorise la relaxation.",
          "Associe pressions légères et longs effleurages.",
          "Apporte une profonde détente, stimule la mémoire corporelle.",
        ],
        href: "/services-massage/massage-californien",
      },
      {
        title: "Massage Drainage Manuel",
        price: "70",
        duration: "50mn",
        tag: null,
        features: [
          "Technique de drainage superficiel, circulatoire et profond.",
          "Améliore la circulation sanguine et lymphatique.",
          "Détox du corps, aide à la régénération des tissus.",
          "Lutte contre la rétention d'eau.",
        ],
        href: "/services-massage/massage-drainage-manuel",
      },
      {
        title: "Massage Chi Nei Tsang",
        price: "70",
        duration: "50mn",
        tag: null,
        features: [
          "Libère les énergies négatives génératrices de crispations (inquiétude, stress, colère).",
          "Favorise une détente profonde et un relâchement complet du corps.",
          "Lève les bloquages, dénoue les tensions et rééquilibre le système digestif.",
        ],
        href: "/services-massage/massage-chi-nei-tsang",
      },
      {
        title: "Massage Deep Tissue",
        price: "80",
        duration: "50mn",
        tag: "Sportif",
        features: [
          "50mn de massage expert, fortement appuyé.",
          "Préparation et récupération du sportif.",
          "Massage technique des muscles, en profondeur, utilisation des paumes, poings et coudes.",
          "Attention, intensité soutenue !",
        ],
        href: "/massage-technique-deep-tissue",
      },
    ],
  },
  {
    category: "Massage Enfant",
    items: [
      {
        title: "Massage Enfant « Pizza »",
        price: "30",
        duration: "30mn",
        tag: null,
        features: [
          "Préconisé pour les jeunes enfants, favorise le calme avant d'aller dormir.",
          "Profitez d'un instant privilégié parent-enfant.",
          "Apprenez à masser votre enfant pour un moment de pure détente.",
        ],
        href: "/services-massage/massage-enfant",
      },
    ],
  },
];

const cures = [
  {
    title: "Massage Amincissant & Raffermissant",
    subtitle: "Cure de 5 massages",
    price: "350",
    duration: "5 × 50mn",
    bonus: "+1 massage offert",
    features: [
      "50mn de massage sur 2 zones ciblées, selon les besoins spécifiques.",
      "Action sur le tissu adipeux, stimule la dégradation des graisses.",
      "Contribue à favoriser l'élimination des toxines.",
      "Améliore la tonicité de la peau.",
    ],
    href: "/services-massage/massage-amincissant-et-raffermissant",
  },
  {
    title: "Massage Amincissant & Raffermissant",
    subtitle: "Cure de 10 massages",
    price: "700",
    duration: "10 × 50mn",
    bonus: "+1 massage offert + 1 massage d'entretien jusqu'à 12 mois après la fin de la cure",
    features: [
      "50mn de massage sur 2 zones ciblées, selon les besoins spécifiques.",
      "Action sur le tissu adipeux, stimule la dégradation des graisses.",
      "Contribue à favoriser l'élimination des toxines.",
      "Améliore la tonicité de la peau.",
    ],
    href: "/services-massage/massage-amincissant-et-raffermissant",
  },
];

const testimonials = [
  {
    name: "Ivoa Reis",
    date: "10/03/2024",
    text: "Recommandé à 100 % !! Moment de détente que je ne suis pas prête d'oublier. Une personne bienveillante à l'écoute qui a su me faire relâcher une immense tension physique et psychologique. Merci à toi Françoise ! 🙏🏾❤️",
  },
  {
    name: "Imen Kchaou",
    date: "13/01/2024",
    text: "Je recommande à 100 %. Je n'ai jamais lâché prise et déconnectée aussi rapidement. Lieu propre, calme et belle déco, le thé est offert en fin de séance !",
  },
  {
    name: "Nadia Tetart",
    date: "30/01/2023",
    text: "C'est une perle que je recommande sans hésiter. Un dépaysement total avec musique et senteur zen. Je me suis laissée aller les yeux fermés dans les mains de Françoise.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-bali-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <LeafOrnament className="absolute top-6 right-[6%] w-24 h-24 text-bali-sage/40 hidden sm:block animate-float-slow" />
        <SandScatter className="absolute bottom-8 left-[8%] w-36 h-10 text-bali-sand/55 hidden sm:block animate-float-slow-delayed" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 60%, rgba(127, 165, 136,0.4) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Tarifs</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Prestations</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">
            Tarif des prestations
          </h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Découvrez l'ensemble de mes soins et leurs tarifs.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      {/* Grouped pricing */}
      <section className="py-20 px-6 bg-bali-cream">
        <div className="max-w-6xl mx-auto space-y-16">
          {pricingGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-3xl text-bali-deep font-light whitespace-nowrap">{group.category}</h2>
                <div className="flex-1 h-px bg-bali-sand/50" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {group.items.map((item, i) => (
                  <Reveal key={item.title + item.duration} delay={(i % 4) * 80} className="h-full">
                  <div
                    className="pricing-card bg-bali-white rounded-2xl p-6 shadow-sm border border-bali-sand/30 flex flex-col relative overflow-hidden h-full"
                  >
                    {item.tag && (
                      <span className="absolute top-4 right-4 font-body text-xs font-semibold bg-bali-gold text-white px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="font-display text-xl text-bali-deep font-medium mb-3 pr-16">{item.title}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="font-display text-3xl font-semibold text-bali-deep">{item.price}€</span>
                      <span className="font-body text-sm text-bali-dark/60">/ {item.duration}</span>
                    </div>
                    <ul className="space-y-2 flex-1 mb-5">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-dark/70 leading-snug">
                          <span className="text-bali-gold mt-0.5 shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.href}
                      className="w-full text-center font-body text-sm font-medium py-2.5 px-4 rounded-full border border-bali-gold text-bali-gold hover:bg-bali-gold hover:text-white transition-colors"
                    >
                      Je réserve
                    </Link>
                  </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cures */}
      <section className="py-16 px-6 bg-bali-cream-dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-3xl text-bali-deep font-light whitespace-nowrap">Cures Amincissantes</h2>
            <div className="flex-1 h-px bg-bali-sand/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cures.map((cure, i) => (
              <Reveal key={cure.subtitle} delay={i * 100}>
              <div
                className="pricing-card bg-bali-deep text-white rounded-2xl p-7 shadow-xl flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(ellipse at 80% 20%, rgba(127, 165, 136,0.6) 0%, transparent 60%)",
                  }}
                />
                <div className="relative">
                  <p className="font-body text-xs text-bali-gold tracking-widest uppercase mb-1">{cure.subtitle}</p>
                  <h3 className="font-display text-2xl text-white font-medium mb-3">{cure.title}</h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-display text-4xl font-semibold text-bali-gold">{cure.price}€</span>
                    <span className="font-body text-sm text-bali-sand/70">/ {cure.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {cure.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-body text-sm text-bali-sand/80 leading-snug">
                        <span className="text-bali-gold mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {cure.bonus && (
                    <p className="font-body text-xs text-bali-gold/90 italic mb-5 border-l-2 border-bali-gold/40 pl-3">
                      {cure.bonus}
                    </p>
                  )}
                  <Link
                    href={cure.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body text-sm font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Je réserve
                  </Link>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-bali-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Témoignages</span>
          </div>
          <h2 className="font-display text-4xl text-center text-bali-deep font-light mb-12">
            Ce que nos clients disent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="h-full">
              <div className="bg-bali-white rounded-2xl p-6 shadow-sm border border-bali-sand/20 card-elevate h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-bali-deep/10 flex items-center justify-center font-display text-sm font-semibold text-bali-deep">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-bali-dark">{t.name}</p>
                    <p className="font-body text-xs text-bali-dark/50">{t.date}</p>
                  </div>
                </div>
                <StarRating />
                <p className="font-body text-sm text-bali-dark/75 leading-relaxed mt-3">{t.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Réservez votre massage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
