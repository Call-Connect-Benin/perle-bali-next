import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlowerOrnament, ShellOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Soins & Massages – Tous nos services",
  description:
    "Découvrez tous les massages de Perle de Bali à Orly : Bali bien-être, évasion, pure détente, deep tissue, californien, drainage, chi nei tsang, enfant, amincissant.",
};

const services = [
  {
    title: "Massage Bali Bien-être",
    description:
      "Une expérience apaisante qui équilibre votre corps et votre esprit, pour une relaxation totale et un bien-être profond. Massage de la tête aux pieds avec travail sur les points d'acupression.",
    price: "70€",
    duration: "1h",
    href: "/services-massage/massage-bali-bien-etre",
    imagePath: "/images/massages/bali-bien-etre/",
    image: "/images/massages/bali-bien-etre/massage-bali-bien-etre-1.jpg",
  },
  {
    title: "Massage Bali Évasion",
    description:
      "Laissez-vous emporter par un voyage sensoriel unique, conçu pour vous offrir une évasion parfaite. Soin personnalisé en fonction de vos zones à problèmes.",
    price: "90€",
    duration: "1h30",
    href: "/services-massage/massage-bali-evasion",
    imagePath: "/images/massages/bali-evasion/",
    image: "/images/massages/bali-evasion/massage-bali-evasion-1.jpg",
  },
  {
    title: "Massage Bali Pure Détente",
    description:
      "L'expérience premium de Perle de Bali. Précédé du traditionnel bain de pieds balinais aux sels d'Epsom, pour une immersion totale dans la culture du bien-être balinais.",
    price: "120€",
    duration: "1h30",
    href: "/services-massage/massage-bali-pure-detente",
    imagePath: "/images/massages/bali-pure-detente/",
    image: "/images/massages/bali-pure-detente/massage-bali-pure-detente-1.jpg",
    tag: "Premium",
  },
  {
    title: "Massage Deep Tissue",
    description:
      "Massage fortement appuyé pour libérer les tensions profondes. Idéal pour la préparation et la récupération sportive. Utilisation des paumes, poings et coudes.",
    price: "80€",
    duration: "50mn",
    href: "/massage-technique-deep-tissue",
    imagePath: "/images/massages/deep-tissue/",
    image: "/images/massages/deep-tissue/massage-deep-tissue-1.jpg",
    tag: "Sportif",
  },
  {
    title: "Massage Californien",
    description:
      "L'art de la détente enveloppante. Pressions légères et longs effleurages pour une profonde relaxation. Le protocole de relaxation par excellence.",
    price: "70€",
    duration: "50mn",
    href: "/services-massage/massage-californien",
    imagePath: "/images/massages/californien/",
    image: "/images/massages/californien/massage-californien-1.jpg",
  },
  {
    title: "Massage Drainage Manuel",
    description:
      "Technique de drainage superficiel, circulatoire et profond. Améliore la circulation, détoxifie le corps et lutte contre la rétention d'eau.",
    price: "70€",
    duration: "50mn",
    href: "/services-massage/massage-drainage-manuel",
    imagePath: "/images/massages/drainage-manuel/",
    image: "/images/massages/drainage-manuel/massage-drainage-1.jpg",
  },
  {
    title: "Massage Chi Nei Tsang",
    description:
      "Soin holistique qui libère les énergies négatives, lève les blocages et rééquilibre le système digestif. Une profonde transformation intérieure.",
    price: "70€",
    duration: "50mn",
    href: "/services-massage/massage-chi-nei-tsang",
    imagePath: "/images/massages/chi-nei-tsang/",
    image: "/images/massages/chi-nei-tsang/massage-chi-nei-tsang-1.jpg",
  },
  {
    title: "Massage Amincissant & Raffermissant",
    description:
      "Programme de cures (5 ou 10 séances) ciblées sur 2 zones selon vos besoins. Action sur le tissu adipeux pour améliorer la tonicité de la peau.",
    price: "à partir de 350€",
    duration: "Cure 5 × 50mn",
    href: "/services-massage/massage-amincissant-et-raffermissant",
    imagePath: "/images/massages/amincissant-raffermissant/",
    image: "/images/massages/amincissant-raffermissant/massage-amincissant-1.jpg",
    tag: "Cure",
  },
  {
    title: "Massage Enfant « Pizza »",
    description:
      "Moment de partage unique entre parents et enfants. Favorise le calme avant le coucher et apprend aux parents à masser leur enfant.",
    price: "30€",
    duration: "30mn",
    href: "/services-massage/massage-enfant",
    imagePath: "/images/massages/enfant/",
    image: "/images/massages/enfant/massage-enfant-pizza-1.jpg",
  },
];

export default function ServicesMassagePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <FlowerOrnament className="absolute top-8 left-[5%] w-20 h-20 text-bali-gold/40 hidden sm:block animate-float-slow" />
        <ShellOrnament className="absolute bottom-10 right-[5%] w-24 h-16 text-bali-honey/45 hidden sm:block animate-float-slow-delayed" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 40% 60%, rgba(208, 145, 156,0.4) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Soins & Massages</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Nos soins</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">
            Soins & Massages
          </h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Découvrez l'ensemble de mes massages, issus des traditions balinaises et adaptés à vos besoins.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 bg-bali-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-bali-white rounded-2xl overflow-hidden shadow-sm border border-bali-sand/20 card-elevate flex flex-col"
              >
                <div className="w-full aspect-video bg-gradient-to-br from-bali-deep/5 to-bali-gold/10 relative overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover img-zoom" />
                  {s.tag && (
                    <span className="absolute top-3 right-3 font-body text-xs font-semibold bg-bali-gold text-white px-2.5 py-1 rounded-full z-10">
                      {s.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-body text-xs text-bali-gold font-medium">{s.duration}</span>
                    <span className="font-display text-lg font-semibold text-bali-deep">{s.price}</span>
                  </div>
                  <h2 className="font-display text-xl text-bali-deep font-medium mb-2 group-hover:text-bali-green transition-colors">
                    {s.title}
                  </h2>
                  <p className="font-body text-sm text-bali-dark/70 leading-relaxed flex-1">{s.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-bali-gold text-xs font-medium font-body">
                    En savoir plus
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
      <section className="py-16 px-6 bg-bali-deep text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(208, 145, 156,0.5) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-4">
            Vous ne savez pas quel soin choisir ?
          </h2>
          <p className="font-body text-bali-sand/75 mb-8">
            Contactez-moi, je vous aiderai à trouver le massage qui correspond parfaitement à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Me contacter
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-body font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
