import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales – Perle de Bali",
  description: "Mentions légales du site Perle de Bali.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-bali-deep py-16 px-6 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-6">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Mentions légales</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light">Mentions légales</h1>
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
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Éditeur du site</h2>
            <p><strong>Nom :</strong> Perle de Bali – Françoise</p>
            <p><strong>Activité :</strong> Massage bien-être</p>
            <p><strong>Adresse :</strong> 8 rue Jean Jaurès, 94310 Orly</p>
            <p><strong>Téléphone :</strong> <a href="tel:+33756139596" className="text-bali-gold hover:underline">07 56 13 95 96</a></p>
            <p><strong>E-mail :</strong> <a href="mailto:fanfankool94@gmail.com" className="text-bali-gold hover:underline">fanfankool94@gmail.com</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Réalisation du site</h2>
            <p><strong>Concepteur :</strong> <a href="https://lannkin.ca" target="_blank" rel="noopener noreferrer" className="text-bali-gold hover:underline">Lannkin</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Hébergement</h2>
            <p>Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété de Perle de Bali, sauf mention contraire. Toute reproduction totale ou partielle est interdite sans autorisation préalable.</p>
            <p className="mt-2 italic text-sm">NB : Les photos ne sont pas contractuelles.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Données personnelles</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:fanfankool94@gmail.com" className="text-bali-gold hover:underline">fanfankool94@gmail.com</a>.</p>
            <p className="mt-2"><Link href="/politique-de-confidentialite" className="text-bali-gold hover:underline">Consulter notre politique de confidentialité →</Link></p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Cookies</h2>
            <p>Ce site peut utiliser des cookies pour améliorer votre expérience de navigation. <Link href="/cookie-policy" className="text-bali-gold hover:underline">En savoir plus →</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
