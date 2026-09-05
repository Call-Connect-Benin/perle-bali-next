"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
];

export default function Header() {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const servicesActive =
    pathname.startsWith("/services-massage") || pathname.startsWith("/massage-technique-deep-tissue");
  const linkClass = (active: boolean) =>
    `nav-link-underline flex items-center gap-1.5 whitespace-nowrap py-2 font-body text-xs tracking-[0.2em] uppercase transition-colors ${
      active ? "text-bali-gold" : "text-bali-sand/85 hover:text-bali-gold"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      {/* Floating pill, overlaid on top of the page — never pushes content down,
          so whatever sits behind it is always the actual hero background */}
      <div className="relative max-w-6xl mx-auto rounded-full bg-gradient-to-r from-bali-deep via-[#7A3A57] to-bali-deep shadow-xl shadow-black/30 border border-white/5">
        {/* Subtle scattered ornament dots */}
        <span className="pointer-events-none absolute left-[30%] -top-1.5 w-1 h-1 rounded-full bg-bali-gold/50 hidden md:block" />
        <span className="pointer-events-none absolute right-[22%] -bottom-1.5 w-1 h-1 rounded-full bg-bali-sand/40 hidden md:block" />
        <span className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-bali-gold/40 hidden lg:block" />

        <div className="flex items-center justify-between gap-3 h-16 md:h-[4.5rem] px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 font-display text-lg md:text-xl font-semibold text-white tracking-wide"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Perle de Bali"
              width={40}
              height={40}
              className="w-8 h-8 md:w-9 md:h-9 shrink-0"
              priority
            />
            <span className="hidden sm:inline">
              Perle <span className="font-script text-bali-gold font-medium">de</span> Bali
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={linkClass(servicesActive)}>
                <Link href="/services-massage">Soins &amp; Massages</Link>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3 z-50">
                  <ul className="rounded-2xl border border-bali-gold/20 bg-bali-deep/98 backdrop-blur-md py-2 shadow-2xl">
                    {services.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block px-5 py-2.5 text-xs tracking-wide uppercase text-bali-sand/80 hover:bg-bali-gold/10 hover:text-bali-gold transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-white/10 mx-4 my-1" />
                    <li>
                      <Link
                        href="/services-massage"
                        className="block px-5 py-2.5 text-xs tracking-wide uppercase font-medium text-bali-gold hover:bg-bali-gold/10 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Voir tous les soins →
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/carnet-de-voyages" className={linkClass(isActive("/carnet-de-voyages"))}>
              Blog
            </Link>
            <Link href="/contact" className={linkClass(isActive("/contact"))}>
              Contact
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+33756139596"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-bali-sand/80 hover:text-bali-gold transition-colors"
            >
              <span className="text-bali-gold" aria-hidden>☎</span>
              07 56 13 95 96
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white text-xs font-body font-medium tracking-[0.15em] uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
            <button
              className="lg:hidden inline-flex items-center gap-2 rounded-full border border-bali-gold/30 px-3 py-2 text-bali-sand hover:border-bali-gold hover:text-bali-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — floats below the pill with the same inset */}
      {mobileOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-3 rounded-3xl border border-white/10 bg-bali-deep shadow-xl overflow-hidden">
          <div className="px-4 py-4 flex flex-col gap-1 font-body text-xs tracking-[0.15em] uppercase">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2.5 px-3 rounded transition-colors ${
                  isActive(item.href) ? "text-bali-gold" : "text-bali-sand/85 hover:text-bali-gold"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/services-massage"
              className={`py-2.5 px-3 rounded font-medium transition-colors ${
                servicesActive ? "text-bali-gold" : "text-bali-sand/85 hover:text-bali-gold"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Soins &amp; Massages
            </Link>
            <div className="pl-4 flex flex-col gap-1 normal-case tracking-normal">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="py-2 px-3 rounded text-bali-sand/60 hover:text-bali-gold text-xs transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href="/carnet-de-voyages"
              className={`py-2.5 px-3 rounded transition-colors ${
                isActive("/carnet-de-voyages") ? "text-bali-gold" : "text-bali-sand/85 hover:text-bali-gold"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`py-2.5 px-3 rounded transition-colors ${
                isActive("/contact") ? "text-bali-gold" : "text-bali-sand/85 hover:text-bali-gold"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+33756139596"
              className="py-2.5 px-3 rounded text-bali-sand/85 hover:text-bali-gold transition-colors normal-case tracking-normal"
            >
              07 56 13 95 96
            </a>
            <Link
              href="/contact"
              className="mt-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white text-center py-3 px-5 rounded-full font-medium normal-case tracking-normal"
              onClick={() => setMobileOpen(false)}
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
