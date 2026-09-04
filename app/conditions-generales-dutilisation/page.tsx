import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation – Perle de Bali",
  description: "Conditions générales d'utilisation du site et des services de Perle de Bali.",
};

export default function CGUPage() {
  return (
    <>
      <section className="bg-bali-deep pt-24 pb-16 px-6 relative overflow-hidden dot-field">
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-6">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">CGU</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light leading-tight">
            Conditions générales<br />d'utilisation
          </h1>
          <p className="font-body text-bali-sand/60 text-sm mt-3">Dernière mise à jour : 2 février 2025</p>
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
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">1. Objet</h2>
            <p>Les présentes CGU régissent l'utilisation du site web de Perle de Bali et la réservation de ses services de massage bien-être.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">2. Réservation et annulation</h2>
            <p>Toute réservation est confirmée par téléphone ou e-mail. En cas d'annulation, merci de prévenir au moins 24h à l'avance. En cas d'annulation tardive ou d'absence non prévenue, une indemnité pourra être demandée.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">3. Tarifs et paiement</h2>
            <p>Les tarifs affichés sur le site sont en euros TTC. Le paiement s'effectue en fin de séance, en espèces ou par virement. Les tarifs peuvent être modifiés sans préavis.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">4. Contre-indications</h2>
            <p>Le client est tenu d'informer le praticien de tout problème de santé susceptible de constituer une contre-indication au massage. Perle de Bali se réserve le droit de refuser un soin si la sécurité du client est en jeu.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">5. Responsabilité</h2>
            <p>Les massages proposés sont des soins de bien-être et ne constituent pas des actes médicaux. Perle de Bali décline toute responsabilité en cas d'aggravation d'une pathologie préexistante non signalée.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">6. Cartes cadeaux</h2>
            <p>Les cartes cadeaux sont valables 1 an à compter de leur date d'émission. Elles sont non remboursables et non échangeables contre de l'argent.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">7. Droit applicable</h2>
            <p>Les présentes CGU sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable avant tout recours judiciaire.</p>
          </div>

          <div className="pt-4 border-t border-bali-sand/30">
            <p className="text-sm text-bali-dark/60">Voir aussi : <Link href="/mentions-legales" className="text-bali-gold hover:underline">Mentions légales</Link> · <Link href="/politique-de-confidentialite" className="text-bali-gold hover:underline">Politique de confidentialité</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
