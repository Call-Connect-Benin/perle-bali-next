import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy – Perle de Bali",
  description: "Politique d'utilisation des cookies sur le site Perle de Bali.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-bali-deep pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-6">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Cookie Policy</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light">Cookie Policy</h1>
          <p className="font-body text-bali-sand/60 text-sm mt-3">Dernière mise à jour : 22 décembre 2024</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10 font-body text-bali-dark/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. Il permet de mémoriser des informations sur votre visite.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Cookies utilisés sur ce site</h2>
            <div className="space-y-4">
              <div className="p-4 bg-bali-white rounded-xl border border-bali-sand/20">
                <h3 className="font-body font-semibold text-bali-deep mb-1">Cookies techniques (essentiels)</h3>
                <p className="text-sm text-bali-dark/70">Nécessaires au bon fonctionnement du site. Ils ne collectent aucune donnée personnelle identifiable.</p>
              </div>
              <div className="p-4 bg-bali-white rounded-xl border border-bali-sand/20">
                <h3 className="font-body font-semibold text-bali-deep mb-1">Cookies analytiques</h3>
                <p className="text-sm text-bali-dark/70">Ces cookies permettent de comprendre comment les visiteurs utilisent le site (pages vues, durée de visite). Les données sont anonymisées.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Gestion des cookies</h2>
            <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est déposé. Le refus de cookies peut impacter l'expérience de navigation.</p>
            <p className="mt-2">Guides de configuration : <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-bali-gold hover:underline">Chrome</a>, <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-bali-gold hover:underline">Firefox</a>, <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-bali-gold hover:underline">Safari</a>.</p>
          </div>

          <div className="pt-4 border-t border-bali-sand/30">
            <p className="text-sm text-bali-dark/60">Voir aussi : <Link href="/politique-de-confidentialite" className="text-bali-gold hover:underline">Politique de confidentialité</Link> · <Link href="/mentions-legales" className="text-bali-gold hover:underline">Mentions légales</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
