import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation – Perle de Bali",
  description: "Conditions générales d'utilisation du site et des services de Perle de Bali.",
};

export default function CGUPage() {
  return (
    <>
      <section className="bg-bali-deep pt-24 pb-16 px-6 relative overflow-hidden">
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
          <p>Bienvenue sur le site de « Perle de Bali ». En accédant à ce site, vous acceptez de respecter les présentes Conditions Générales d’Utilisation (CGU). Si vous n’acceptez pas ces conditions, merci de ne pas utiliser mon site.</p>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Présentation de l’entreprise</h2>
            <p>« Perle de Bali » est un établissement spécialisé dans les massages de bien-être et de relaxation issus des traditions balinaises, situé à 8 rue Jean Jaurès – 94310 Orly. Je mets à votre disposition divers services destinés à améliorer votre détente et votre bien-être.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Accès au site</h2>
            <p>L’accès à notre site est gratuit. Cependant, certaines sections peuvent nécessiter une inscription ou la création d’un compte. Vous vous engagez à fournir des informations exactes et à jour lors de votre inscription.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Propriété intellectuelle</h2>
            <p>Le contenu de notre site (textes, images, logos, etc.) est protégé par les lois sur la propriété intellectuelle. Toute reproduction, même partielle, sans autorisation préalable est strictement interdite.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Responsabilité</h2>
            <p>Les informations fournies sur notre site le sont à titre indicatif. « Perle de Bali » ne peut être tenue responsable des éventuelles erreurs ou omissions dans les informations diffusées. Nous nous réservons le droit de modifier nos services et tarifs à tout moment.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Données personnelles</h2>
            <p>La sécurité de vos données personnelles est importante pour moi. Je m’engage à protéger votre vie privée conformément à ma <Link href="/politique-de-confidentialite" className="text-bali-gold hover:underline">Politique de Confidentialité</Link>. En utilisant mon site, vous consentez à la collecte et au traitement de vos données dans les conditions énoncées.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Liens hypertextes</h2>
            <p>Mon site peut contenir des liens vers d’autres sites internet. « Perle de Bali » n’assume aucune responsabilité concernant le contenu de ces sites externes et je vous encourage à lire attentivement leurs propres conditions d’utilisation.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Droit applicable</h2>
            <p>Les présentes CGU sont régies par le droit français. Tout litige relatif à l’utilisation de mon site sera soumis aux tribunaux compétents.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Modifications des CGU</h2>
            <p>Je me réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de ces changements via le site. Il est donc conseillé de consulter régulièrement cette page.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Contact</h2>
            <p>Pour toute question relative aux présentes CGU, vous pouvez me contacter par e-mail à <a href="mailto:perledebali@gmail.com" className="text-bali-gold hover:underline">perledebali@gmail.com</a> ou par téléphone au <a href="tel:+33756139596" className="text-bali-gold hover:underline">+33 7 56 13 95 96</a>.</p>
          </div>

          <div className="pt-4 border-t border-bali-sand/30">
            <p className="text-sm text-bali-dark/60">Voir aussi : <Link href="/mentions-legales" className="text-bali-gold hover:underline">Mentions légales</Link> · <Link href="/politique-de-confidentialite" className="text-bali-gold hover:underline">Politique de confidentialité</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
