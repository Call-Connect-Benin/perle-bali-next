import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité – Perle de Bali",
  description: "Politique de confidentialité et de protection des données personnelles de Perle de Bali.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-bali-deep pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-6">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Politique de confidentialité</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light">Politique de confidentialité</h1>
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
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">1. Responsable du traitement</h2>
            <p>Perle de Bali – Françoise, 8 rue Jean Jaurès, 94310 Orly. E-mail : <a href="mailto:fanfankool94@gmail.com" className="text-bali-gold hover:underline">fanfankool94@gmail.com</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">2. Données collectées</h2>
            <p>Nous collectons uniquement les données nécessaires à la prise de rendez-vous et à la prestation de services :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Informations de santé pertinentes (communiquées volontairement lors de la prise de rdv)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Gérer vos réservations et rendez-vous</li>
              <li>Vous contacter pour confirmer vos séances</li>
              <li>Adapter les soins à vos besoins spécifiques</li>
              <li>Répondre à vos demandes d'information</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">4. Conservation des données</h2>
            <p>Vos données sont conservées pour la durée nécessaire à la réalisation des finalités ci-dessus, et au maximum 3 ans après le dernier contact.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">5. Vos droits (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits : <a href="mailto:fanfankool94@gmail.com" className="text-bali-gold hover:underline">fanfankool94@gmail.com</a>. En cas de litige, vous pouvez saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-bali-gold hover:underline">CNIL</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">6. Cookies</h2>
            <p>Ce site utilise des cookies techniques essentiels au bon fonctionnement. Aucun cookie publicitaire n'est déposé. <Link href="/cookie-policy" className="text-bali-gold hover:underline">Politique cookies →</Link></p>
          </div>

          <div className="pt-4 border-t border-bali-sand/30">
            <p className="text-sm text-bali-dark/60">Voir aussi : <Link href="/mentions-legales" className="text-bali-gold hover:underline">Mentions légales</Link> · <Link href="/conditions-generales-dutilisation" className="text-bali-gold hover:underline">CGU</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
