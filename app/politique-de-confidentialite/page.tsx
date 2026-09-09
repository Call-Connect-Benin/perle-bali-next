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
          <p>Bienvenue sur le site de Perle de Bali. La protection de vos données personnelles est d’une grande importance pour nous. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site et utilisez nos services.</p>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Informations que nous collectons</h2>
            <p>Nous collectons les types d’informations suivants :</p>
            <div className="mt-4 space-y-3">
              <p><strong>Informations personnelles :</strong> lorsque vous réservez un rendez-vous ou remplissez un formulaire, nous pouvons collecter des informations personnelles telles que votre nom, prénom, adresse e-mail, numéro de téléphone, et toute autre information que vous choisissez de fournir.</p>
              <p><strong>Informations de paiement :</strong> si vous effectuez un paiement en ligne, nous collectons également des données de paiement sécurisées.</p>
              <p><strong>Informations de navigation :</strong> nous collectons des informations sur votre utilisation de notre site, y compris votre adresse IP, votre type de navigateur, vos pages visitées, et la durée de votre visite.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Utilisation de vos informations</h2>
            <p>Nous utilisons vos informations de la manière suivante :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>pour traiter vos réservations et paiements ;</li>
              <li>pour vous contacter en cas de besoin concernant vos réservations ou nos services ;</li>
              <li>pour améliorer notre site et nos services en fonction de vos retours ;</li>
              <li>pour envoyer des newsletters et des offres promotionnelles, si vous avez consenti à les recevoir.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Partage de vos informations</h2>
            <p>Nous ne vendons ni ne louons vos informations personnelles. Nous pouvons partager vos informations avec :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong>Prestataires de services :</strong> des tiers pour traiter les paiements, envoyer des e-mails, ou effectuer d’autres services en notre nom.</li>
              <li><strong>Obligations légales :</strong> lorsque cela est requis par la loi ou pour protéger nos droits.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Protection de vos informations</h2>
            <p>Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre toute perte, vol ou accès non autorisé. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n’est entièrement sûre.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Vos droits</h2>
            <p>Vous avez le droit de :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>accéder à vos informations personnelles que nous détenons ;</li>
              <li>demander la correction de vos informations si elles sont inexactes ;</li>
              <li>demander la suppression de vos informations, sous réserve de certaines exceptions ;</li>
              <li>vous opposer à l’utilisation de vos données personnelles à des fins de marketing.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Modifications de cette politique de confidentialité</h2>
            <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur notre site.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Contact</h2>
            <p>Si vous avez des questions concernant cette politique de confidentialité ou sur l’utilisation de vos informations, veuillez nous contacter à :</p>
            <p className="mt-3 font-semibold text-bali-deep">Perle de Bali</p>
            <p>Adresse : 8 rue Jean Jaurès – 94310 Orly</p>
            <p>Téléphone : <a href="tel:+33756139596" className="text-bali-gold hover:underline">+33 7 56 13 95 96</a></p>
            <p>Email : <a href="mailto:fanfankool94@gmail.com" className="text-bali-gold hover:underline">fanfankool94@gmail.com</a></p>
          </div>

          <div className="pt-4 border-t border-bali-sand/30">
            <p className="text-sm text-bali-dark/60">Voir aussi : <Link href="/mentions-legales" className="text-bali-gold hover:underline">Mentions légales</Link> · <Link href="/conditions-generales-dutilisation" className="text-bali-gold hover:underline">CGU</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
