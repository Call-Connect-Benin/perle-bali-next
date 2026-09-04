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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="sticky top-0 z-50">
      <div
        className={`relative bg-gradient-to-r from-bali-deep via-[#3a2130] to-bali-deep transition-shadow duration-300 ${
          scrolled ? "shadow-xl shadow-black/20" : ""
        }`}
      >
        {/* Subtle scattered ornament dots, echoing the Bali sand theme */}
        <span className="pointer-events-none absolute left-[8%] top-3 w-1 h-1 rounded-full bg-bali-gold/40 hidden md:block" />
        <span className="pointer-events-none absolute right-[14%] top-6 w-1 h-1 rounded-full bg-bali-sand/30 hidden md:block" />
        <span className="pointer-events-none absolute right-[6%] bottom-3 w-1 h-1 rounded-full bg-bali-gold/30 hidden md:block" />

        {/* Top info bar */}
        <div className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2 py-2 text-xs font-body text-bali-sand">
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
              <span className="hidden sm:inline text-bali-sand/60">
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
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-2xl md:text-3xl font-semibold text-white tracking-wide"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Perle de Bali"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 shrink-0"
              priority
            />
            <span>
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 z-50">
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
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white text-xs font-body font-medium tracking-[0.15em] uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
            <button
              className="lg:hidden inline-flex items-center gap-2 rounded-full border border-bali-gold/30 px-3.5 py-2 text-bali-sand hover:border-bali-gold hover:text-bali-gold transition-colors"
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-bali-deep">
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
      </div>
    </header>
  );
}
