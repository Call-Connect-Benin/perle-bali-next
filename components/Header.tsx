"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { label: "Massage Bali Bien-être", href: "/services-massage/massage-bali-bien-etre" },
  { label: "Massage Bali Évasion", href: "/services-massage/massage-bali-evasion" },
  { label: "Massage Bali Pure Détente", href: "/services-massage/massage-bali-pure-detente" },
  { label: "Massage Deep Tissue", href: "/massage-technique-deep-tissue" },
  { label: "Massage Enfant", href: "/services-massage/massage-enfant" },
  { label: "Massage Chi Nei Tsang", href: "/services-massage/massage-chi-nei-tsang" },
  { label: "Massage Californien", href: "/services-massage/massage-californien" },
  { label: "Massage Drainage Manuel", href: "/services-massage/massage-drainage-manuel" },
  { label: "Massage Amincissant", href: "/services-massage/massage-amincissant-et-raffermissant" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-bali-deep text-bali-sand text-xs font-body">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:perledebali@gmail.com"
              className="hover:text-bali-gold transition-colors flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              perledebali@gmail.com
            </a>
            <a
              href="tel:+33756139596"
              className="hover:text-bali-gold transition-colors flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07 56 13 95 96
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-bali-sand/70">
              Lun–Vend : 18h–21h &nbsp;|&nbsp; Sam–Dim : 9h–21h
            </span>
            <a
              href="https://wa.me/33756139596"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bali-gold transition-colors flex items-center gap-1"
              aria-label="WhatsApp Perle de Bali"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/perle_de_bali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bali-gold transition-colors flex items-center gap-1"
              aria-label="Instagram Perle de Bali"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @perle_de_bali
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-bali-white border-b border-bali-sand/40 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl font-semibold text-bali-deep tracking-wide"
          >
            Perle de Bali
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 font-body text-sm text-bali-dark">
            <li>
              <Link href="/" className="hover:text-bali-gold transition-colors py-2">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-bali-gold transition-colors py-2">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-bali-gold transition-colors py-2">
                À propos
              </Link>
            </li>

            {/* Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-bali-gold transition-colors py-2">
                <Link href="/services-massage">Soins & Massages</Link>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-bali-white shadow-xl border border-bali-sand/30 rounded-lg overflow-hidden z-50">
                  <div className="py-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-2.5 text-sm text-bali-dark hover:bg-bali-cream hover:text-bali-gold transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                    <div className="border-t border-bali-sand/30 mx-4 my-1" />
                    <Link
                      href="/services-massage"
                      className="block px-5 py-2.5 text-sm font-medium text-bali-gold hover:bg-bali-cream transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Voir tous les soins →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link href="/carnet-de-voyages" className="hover:text-bali-gold transition-colors py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-bali-gold transition-colors py-2">
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-bali-gold text-white text-sm font-body font-medium px-5 py-2.5 rounded-full hover:bg-bali-deep transition-colors duration-300"
            >
              Obtenez un devis
            </Link>
            <button
              className="lg:hidden p-2 text-bali-deep"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-bali-sand/30 bg-bali-white">
            <div className="px-4 py-4 flex flex-col gap-1 font-body text-sm">
              <Link href="/" className="py-2 px-3 rounded hover:bg-bali-cream hover:text-bali-gold" onClick={() => setMobileOpen(false)}>Accueil</Link>
              <Link href="/tarifs" className="py-2 px-3 rounded hover:bg-bali-cream hover:text-bali-gold" onClick={() => setMobileOpen(false)}>Tarifs</Link>
              <Link href="/a-propos" className="py-2 px-3 rounded hover:bg-bali-cream hover:text-bali-gold" onClick={() => setMobileOpen(false)}>À propos</Link>
              <Link href="/services-massage" className="py-2 px-3 rounded hover:bg-bali-cream hover:text-bali-gold font-medium" onClick={() => setMobileOpen(false)}>Soins & Massages</Link>
              <div className="pl-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="py-2 px-3 rounded text-bali-dark/80 hover:bg-bali-cream hover:text-bali-gold text-xs"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link href="/carnet-de-voyages" className="py-2 px-3 rounded hover:bg-bali-cream hover:text-bali-gold" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className="py-2 px-3 rounded hover:bg-bali-cream hover:text-bali-gold" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link
                href="/contact"
                className="mt-2 bg-bali-gold text-white text-center py-3 px-5 rounded-full font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Obtenez un devis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
