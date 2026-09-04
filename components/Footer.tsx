import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { LeafOrnament, ShellOrnament } from "@/components/Ornaments";

const serviceLinks = [
  { label: "Massage Bali Bien-être", href: "/services-massage/massage-bali-bien-etre" },
  { label: "Massage Bali Évasion", href: "/services-massage/massage-bali-evasion" },
  { label: "Massage Bali Pure Détente", href: "/services-massage/massage-bali-pure-detente" },
  { label: "Massage Deep Tissue", href: "/massage-technique-deep-tissue" },
  { label: "Massage Enfant", href: "/services-massage/massage-enfant" },
  { label: "Massage Amincissant", href: "/services-massage/massage-amincissant-et-raffermissant" },
  { label: "Massage Chi Nei Tsang", href: "/services-massage/massage-chi-nei-tsang" },
  { label: "Massage Drainage Manuel", href: "/services-massage/massage-drainage-manuel" },
  { label: "Massage Californien", href: "/services-massage/massage-californien" },
];

const infoLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Carte cadeau", href: "/carte-cadeau" },
  { label: "Carnet de voyages", href: "/carnet-de-voyages" },
  { label: "Déontologie", href: "/deontologie" },
  { label: "Liens suggérés", href: "/liens-suggeres" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Conditions générales", href: "/conditions-generales-dutilisation" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bali-deep text-bali-sand overflow-hidden">
      <div className="absolute inset-0 ambient-glow-soft" />
      <LeafOrnament className="absolute top-4 right-[3%] w-28 h-28 text-bali-sage/35 hidden sm:block animate-float-slow" />
      <ShellOrnament className="absolute bottom-4 left-[4%] w-20 h-14 text-bali-gold/35 hidden sm:block animate-float-slow-delayed" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-display text-2xl font-semibold text-white">
              <Image
                src="/images/logo/logo.png"
                alt="Perle de Bali"
                width={40}
                height={40}
                className="w-9 h-9 shrink-0"
              />
              Perle de Bali
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-bali-sand/80 font-body">
              Votre havre de paix et de relaxation, spécialisé dans des massages issus des traditions balinaises et adaptés à vos besoins.
            </p>
            <p className="mt-3 text-xs text-bali-sand/50 font-body italic">
              NB : Les photos ne sont pas contractuelles.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/perle_de_bali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-bali-sand/30 flex items-center justify-center hover:border-bali-gold hover:text-bali-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-medium text-white mb-5">Nos services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bali-sand/75 hover:text-bali-gold transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos & blog */}
          <div>
            <h3 className="font-display text-lg font-medium text-white mb-5">À propos</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bali-sand/75 hover:text-bali-gold transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-display text-base font-medium text-white mb-3">Légal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-bali-sand/60 hover:text-bali-gold transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-medium text-white mb-5">Contactez-moi</h3>
            <ul className="space-y-3 font-body">
              <li>
                <a
                  href="tel:+33756139596"
                  className="flex items-start gap-3 text-sm text-bali-sand/80 hover:text-bali-gold transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07 56 13 95 96
                </a>
              </li>
              <li>
                <a
                  href="mailto:perledebali@gmail.com"
                  className="flex items-start gap-3 text-sm text-bali-sand/80 hover:text-bali-gold transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  perledebali@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33756139596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-bali-sand/80 hover:text-bali-gold transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp : 07 56 13 95 96
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-bali-sand/80">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>8 rue Jean Jaurès<br />94310 Orly</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-bali-sand/80">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Lun–Vend : 18h–21h<br />Sam–Dim : 9h–21h</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white text-sm font-body font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Réserver une séance
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bali-sand/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-bali-sand/50 font-body">
          <p>© {new Date().getFullYear()} Perle de Bali. Tous droits réservés.</p>
          <p>
            Réalisé par{" "}
            <a href="https://lannkin.ca" className="hover:text-bali-gold transition-colors" target="_blank" rel="noopener noreferrer">
              Lannkin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
