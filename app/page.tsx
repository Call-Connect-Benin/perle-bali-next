import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const stats = [
  { value: "06+", label: "d'expériences" },
  { value: "95%", label: "soins personnalisés" },
  { value: "98%", label: "clients séduits par l'ambiance" },
  { value: "100%", label: "clients satisfaits" },
];

const services = [
  {
    title: "Massage Bali Bien-être",
    description: "Une expérience apaisante qui équilibre votre corps et votre esprit, pour une relaxation totale et un bien-être profond.",
    href: "/services-massage/massage-bali-bien-etre",
    duration: "1h",
    price: "70€",
    image: "/images/massages/bali-bien-etre/massage-bali-bien-etre-1.jpg",
  },
  {
    title: "Massage Bali Pure Détente",
    description: "Détendez-vous entièrement avec un massage doux et fluide, pour un moment de pure tranquillité et de régénération.",
    href: "/services-massage/massage-bali-pure-detente",
    duration: "1h30",
    price: "120€",
    image: "/images/massages/bali-pure-detente/massage-bali-pure-detente-1.jpg",
  },
  {
    title: "Massage Bali Évasion",
    description: "Laissez-vous emporter par un voyage sensoriel unique, conçu pour vous offrir une évasion parfaite et un lâcher-prise complet.",
    href: "/services-massage/massage-bali-evasion",
    duration: "1h30",
    price: "90€",
    image: "/images/massages/bali-evasion/massage-bali-evasion-1.jpg",
  },
  {
    title: "Massage Deep Tissue",
    description: "Soulagez les tensions profondes avec un massage ciblé, conçu pour dénouer les muscles et améliorer votre mobilité.",
    href: "/massage-technique-deep-tissue",
    duration: "50mn",
    price: "80€",
    image: "/images/massages/deep-tissue/massage-deep-tissue-1.jpg",
  },
];

const pricingItems = [
  {
    title: "Massage Bali Bien-être",
    price: "70",
    duration: "1H",
    features: [
      "1 heure de massage bien-être complet, de la tête aux pieds.",
      "Massage visage et points d'acupression.",
      "Retrouvez l'harmonie du corps et de l'esprit.",
    ],
    href: "/services-massage/massage-bali-bien-etre",
    featured: false,
  },
  {
    title: "Massage Bali Évasion",
    price: "90",
    duration: "1H30",
    features: [
      "1h30 de massage traditionnel Balinais, relaxant et énergisant.",
      "Massage visage et points d'acupression.",
      "Soin personnalisé en fonction des zones à problèmes.",
    ],
    href: "/services-massage/massage-bali-evasion",
    featured: true,
  },
  {
    title: "Massage Californien",
    price: "70",
    duration: "50mn",
    features: [
      "Une approche douce et enveloppante du massage détente.",
      "Associe pressions légères et longs effleurages.",
      "Apporte une profonde détente, stimule la mémoire corporelle.",
    ],
    href: "/services-massage/massage-californien",
    featured: false,
  },
  {
    title: "Massage Drainage Manuel",
    price: "70",
    duration: "50mn",
    features: [
      "Technique de drainage superficiel, circulatoire et profond.",
      "Améliore la circulation sanguine et lymphatique.",
      "Détox du corps, lutte contre la rétention d'eau.",
    ],
    href: "/services-massage/massage-drainage-manuel",
    featured: false,
  },
  {
    title: "Massage Chi Nei Tsang",
    price: "70",
    duration: "50mn",
    features: [
      "Libère les énergies négatives génératrices de crispations.",
      "Favorise une détente profonde et un relâchement complet.",
      "Rééquilibre le système digestif.",
    ],
    href: "/services-massage/massage-chi-nei-tsang",
    featured: false,
  },
  {
    title: "Massage Deep Tissue",
    price: "80",
    duration: "50mn",
    features: [
      "50mn de massage expert, fortement appuyé.",
      "Préparation et récupération du sportif.",
      "Massage technique des muscles, en profondeur.",
    ],
    href: "/massage-technique-deep-tissue",
    featured: false,
  },
  {
    title: "Massage Bali Pure Détente",
    price: "120",
    duration: "1H30",
    features: [
      "1h30 de massage complet, relaxant et énergisant.",
      "Massage visage et points d'acupression.",
      "Précédé du traditionnel bain de pieds balinais aux sels d'Epsom.",
    ],
    href: "/services-massage/massage-bali-pure-detente",
    featured: false,
  },
  {
    title: "Massage Enfant « Pizza »",
    price: "30",
    duration: "30mn",
    features: [
      "Préconisé pour les jeunes enfants.",
      "Favorise le calme avant d'aller dormir.",
      "Un instant privilégié parent-enfant.",
    ],
    href: "/services-massage/massage-enfant",
    featured: false,
  },
];

const testimonials = [
  {
    name: "Hd hn",
    date: "22/06/2024",
    text: "Super moment de détente, un accueil chaleureux et de bons conseils. Je la recommande et à bientôt ! Encore Merci, je sens de l'amélioration !",
  },
  {
    name: "Ivoa Reis",
    date: "10/03/2024",
    text: "Recommandé à 100 % !! Si je pouvais donner plus de cinq étoiles je le ferai. Une personne bienveillante à l'écoute qui a su me faire relâcher une immense tension physique et psychologique. Merci à toi Françoise ! Tu as un don, un vrai.",
  },
  {
    name: "Imen Kchaou",
    date: "13/01/2024",
    text: "Super moment de détente ! Je recommande à 100 %. Je n'ai jamais lâché prise aussi rapidement. Lieu propre, calme et belle déco, et petite attention à la fin : le thé est offert !",
  },
  {
    name: "Val S",
    date: "25/11/2023",
    text: "N'hésitez surtout pas à tester, à partager, à offrir. Détente assurée, un moment divin ! Merci encore et à bientôt.",
  },
  {
    name: "Nacera Sahli",
    date: "14/06/2023",
    text: "Un superbe massage et un pur moment de détente, j'en avais besoin après 4 mois post-partum. Merci Françoise, très douce, accueil chaleureux et l'endroit est très cosy et reposant. J'y reviendrai.",
  },
  {
    name: "Nadia Tetart",
    date: "30/01/2023",
    text: "Françoise écoute puis explique le déroulement de la séance. C'est le lâcher-prise total : gestes doux ou vigoureux selon vos attentes, dépaysement total avec musique et senteur zen. C'est une perle que je recommande sans hésiter.",
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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-bali-deep pt-28 pb-20 lg:pt-24 lg:pb-0 lg:min-h-[85vh] lg:flex lg:items-center">
        {/* Full-bleed uniform background photo, face pushed right so text stays legible */}
        <Image
          src="/images/hero/hero-main.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bali-deep via-bali-deep/90 to-bali-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bali-deep via-transparent to-bali-deep/40" />
        <div className="absolute inset-0 ambient-glow-soft" />
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-bali-gold/10 hidden lg:block animate-float-slow" />
        <div className="absolute top-32 right-32 w-48 h-48 rounded-full border border-bali-gold/8 hidden lg:block animate-float-slow-delayed" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-bali-sage/15 hidden lg:block animate-float-slow" />

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <div className="text-center lg:text-left max-w-2xl">
            <p className="font-script text-bali-gold-light text-2xl mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: "0ms" }}>
              Votre évasion bien-être
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "120ms" }}>
              Évadez-vous avec{" "}
              <span className="text-bali-gold">Perle de Bali</span>
            </h1>
            <p className="font-body text-bali-sand/80 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "240ms" }}>
              Laissez le stress derrière vous et offrez-vous une relaxation totale avec mes massages, issus de traditions balinaises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{ animationDelay: "360ms" }}>
              <a
                href="tel:+33756139596"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-7 py-3.5 rounded-full shadow-lg shadow-bali-rose-deep/20 hover:shadow-xl hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                07 56 13 95 96
              </a>
              <a
                href="https://wa.me/33756139596"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <Link
                href="/services-massage"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-body font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                Découvrir les soins
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 0 0 20L0 60Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-12 md:py-16 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Sanctuaire</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-center text-bali-deep font-semibold leading-tight mb-6">
            Votre sanctuaire de bien-être
            <br />
            <span className="font-script text-bali-gold font-normal">et de relaxation</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-16 h-px bg-bali-gold/40" />
            <span className="text-bali-gold text-sm">✦</span>
            <span className="w-16 h-px bg-bali-gold/40" />
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-4 font-body text-bali-dark/80 leading-relaxed">
            <p>
              Chez Perle de Bali, chaque massage est bien plus qu'un soin, c'est une véritable invitation à l'évasion. Issus des traditions balinaises, mes soins sont conçus pour vous offrir un moment de pure sérénité, loin du stress quotidien.
            </p>
            <p>
              Laissez-vous transporter par des massages adaptés à vos besoins, où chaque geste est pensé pour libérer vos tensions, revitaliser votre énergie et apaiser votre esprit.
            </p>
            <p className="font-medium text-bali-deep">
              Venez vivre l'expérience Perle de Bali : un voyage sensoriel qui vous reconnecte à vous-même.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-7 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 border-2 border-bali-gold text-bali-gold font-body font-medium px-7 py-3 rounded-full hover:bg-bali-gold hover:text-white transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── CONTACT FORM TOP ── */}
      <section className="py-12 px-6 bg-bali-cream-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Réservation</span>
            <h2 className="font-display text-3xl text-bali-deep font-semibold mt-2 mb-1">Prenez rendez-vous</h2>
            <p className="font-body text-bali-dark/60 text-sm">Réponse sous 24h — ou appelez directement</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              <a
                href="tel:+33756139596"
                className="flex items-center gap-3 p-4 bg-bali-white rounded-xl border border-bali-sand/30 hover:border-bali-gold/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-bali-gold/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-bali-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-bali-dark/50 uppercase tracking-wider">Téléphone</p>
                  <p className="font-body font-semibold text-bali-deep group-hover:text-bali-gold transition-colors">07 56 13 95 96</p>
                </div>
              </a>
              <a
                href="https://wa.me/33756139596"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-bali-white rounded-xl border border-bali-sand/30 hover:border-[#25D366]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-bali-dark/50 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-body font-semibold text-bali-deep group-hover:text-[#25D366] transition-colors">07 56 13 95 96</p>
                </div>
              </a>
              <a
                href="mailto:perledebali@gmail.com"
                className="flex items-center gap-3 p-4 bg-bali-white rounded-xl border border-bali-sand/30 hover:border-bali-gold/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-bali-gold/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-bali-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-bali-dark/50 uppercase tracking-wider">Email</p>
                  <p className="font-body text-sm text-bali-deep group-hover:text-bali-gold transition-colors">perledebali@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 bg-bali-white rounded-xl border border-bali-sand/30">
                <div className="w-10 h-10 rounded-full bg-bali-gold/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-bali-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-bali-dark/50 uppercase tracking-wider">Horaires</p>
                  <p className="font-body text-sm text-bali-dark">Lun–Vend 18h–21h · Sam–Dim 9h–21h</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-bali-deep relative overflow-hidden">
        <div className="absolute inset-0 ambient-glow-soft" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y-0 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 100} className="text-center md:px-4">
                <p className="font-display text-4xl md:text-5xl font-semibold text-bali-gold leading-none mb-2 tabular-nums">
                  <Counter value={stat.value} />
                </p>
                <p className="font-body text-sm text-bali-sand/70 leading-snug capitalize">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-12 md:py-16 px-6 bg-bali-cream-dark">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-4">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Nos soins</span>
          </Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-center text-bali-deep font-semibold mb-3">
            Mes services de bien-être
          </h2>
          <p className="text-center font-body text-bali-dark/70 mb-8 max-w-xl mx-auto">
            Offrez-vous un moment de relaxation ultime avec mes massages issus des traditions balinaises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group bg-bali-white rounded-2xl p-5 shadow-sm card-elevate flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl bg-bali-deep/5 mb-4 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover img-zoom" />
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-body text-xs text-bali-gold font-medium">{s.duration}</span>
                    <span className="font-display text-lg font-semibold text-bali-deep">{s.price}</span>
                  </div>
                  <h3 className="font-display text-lg text-bali-deep font-semibold mb-2 group-hover:text-bali-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-bali-dark/70 leading-relaxed flex-1">{s.description}</p>
                  <span className="mt-3 text-xs font-medium text-bali-gold group-hover:underline">
                    En savoir plus →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services-massage"
              className="inline-flex items-center gap-2 bg-bali-deep text-white font-body font-medium px-7 py-3 rounded-full hover:bg-bali-gold transition-colors mr-3"
            >
              Réservez votre massage
            </Link>
            <Link
              href="/services-massage"
              className="font-body text-sm text-bali-dark/60 hover:text-bali-gold transition-colors underline underline-offset-4"
            >
              Voir tous les soins →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-12 px-6 bg-bali-gold relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-3">
            Réservez votre moment de détente
          </h2>
          <p className="font-body text-white/80 mb-6">Disponible lundi–vendredi 18h–21h · samedi–dimanche 9h–21h</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+33756139596"
              className="inline-flex items-center gap-2 bg-white text-bali-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-bali-deep hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/33756139596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── PRICING ── */}
      <section id="tarifs" className="py-12 md:py-16 px-6 bg-bali-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Prestations</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-center text-bali-deep font-semibold mb-8">
            Tarif des prestations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {pricingItems.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 90} className="h-full">
              <div
                className={`relative pricing-card rounded-2xl p-5 flex flex-col h-full ${
                  item.featured
                    ? "bg-bali-deep text-white shadow-xl ring-2 ring-bali-gold/40"
                    : "bg-bali-white border border-bali-sand/30 shadow-sm"
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bali-gold text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow-sm">
                    Le plus choisi
                  </span>
                )}
                <h3 className={`font-display text-lg font-semibold mb-1 ${item.featured ? "text-bali-gold" : "text-bali-deep"}`}>
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-1 mt-2 mb-3">
                  <span className={`font-display text-3xl font-semibold ${item.featured ? "text-white" : "text-bali-deep"}`}>
                    {item.price}€
                  </span>
                  <span className={`font-body text-sm ${item.featured ? "text-bali-sand/70" : "text-bali-dark/60"}`}>
                    / {item.duration}
                  </span>
                </div>
                <ul className="space-y-2 flex-1 mb-4">
                  {item.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 font-body text-sm leading-snug ${item.featured ? "text-bali-sand/80" : "text-bali-dark/70"}`}>
                      <span className="text-bali-gold mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className={`w-full text-center font-body text-sm font-medium py-2.5 px-4 rounded-full transition-colors ${
                    item.featured
                      ? "bg-bali-gold text-white hover:bg-bali-gold-light"
                      : "border border-bali-gold text-bali-gold hover:bg-bali-gold hover:text-white"
                  }`}
                >
                  Je réserve
                </Link>
              </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/tarifs"
              className="font-body text-sm text-bali-dark/60 hover:text-bali-gold transition-colors underline underline-offset-4"
            >
              Voir tous les tarifs et offres cures →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-12 md:py-16 px-6 bg-bali-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Avis</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-center text-bali-deep font-semibold mb-3">
            Ce que nos clientes disent
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <StarRating />
            <span className="font-body text-sm text-bali-dark/70 font-medium">18 avis Google</span>
          </div>
          <div className="text-center mb-8">
            <a
              href="https://g.page/r/perle-de-bali/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-bali-sand/50 font-body text-sm text-bali-dark/70 px-5 py-2 rounded-full hover:border-bali-gold hover:text-bali-gold transition-colors"
            >
              Écrire un avis
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 90}>
                <div className="bg-bali-white rounded-2xl p-5 shadow-sm border border-bali-sand/20 card-elevate h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-bali-deep/10 flex items-center justify-center font-display text-sm font-semibold text-bali-deep">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-bali-dark">{t.name}</p>
                        <p className="font-body text-xs text-bali-dark/50">{t.date}</p>
                      </div>
                    </div>
                  </div>
                  <StarRating />
                  <p className="font-body text-sm text-bali-dark/75 leading-relaxed mt-3">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM BOTTOM ── */}
      <section className="py-12 px-6 bg-bali-deep relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(186, 127, 127,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold">Contact</span>
            <h2 className="font-display text-3xl text-white font-semibold mt-2 mb-2">
              Une question ? Réservez ici
            </h2>
            <p className="font-body text-bali-sand/70 text-sm">8 rue Jean Jaurès — 94310 Orly</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a href="tel:+33756139596" className="inline-flex items-center gap-2 text-bali-sand/80 hover:text-bali-gold transition-colors font-body text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                07 56 13 95 96
              </a>
              <span className="text-bali-sand/30">|</span>
              <a href="mailto:perledebali@gmail.com" className="text-bali-sand/80 hover:text-bali-gold transition-colors font-body text-sm">
                perledebali@gmail.com
              </a>
              <span className="text-bali-sand/30">|</span>
              <a href="https://www.instagram.com/perle_de_bali" target="_blank" rel="noopener noreferrer" className="text-bali-sand/80 hover:text-bali-gold transition-colors font-body text-sm">
                @perle_de_bali
              </a>
            </div>
          </div>
          <ContactForm dark />
        </div>
      </section>
    </>
  );
}
