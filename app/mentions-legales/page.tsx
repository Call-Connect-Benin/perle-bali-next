import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales – Perle de Bali",
  description: "Mentions légales du site Perle de Bali.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-bali-deep pt-24 pb-16 px-6 relative overflow-hidden">
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
            <p><strong>Nom :</strong> Françoise NGUYEN TRUNG</p>
            <p><strong>Adresse :</strong> 8 rue Jean Jaurès, 94310 Orly</p>
            <p><strong>Téléphone :</strong> <a href="tel:+33756139596" className="text-bali-gold hover:underline">07 56 13 95 96</a></p>
            <p><strong>Numéro d’inscription au registre du commerce et des sociétés :</strong> RCS Créteil 877 899 203</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Site internet</h2>
            <p>Le site internet est hébergé sur le domaine : <a href="https://www.perle-bali.fr" className="text-bali-gold hover:underline">https://www.perle-bali.fr</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Responsable de la publication</h2>
            <p><strong>Nom :</strong> Françoise NGUYEN TRUNG</p>
            <p><strong>Email :</strong> <a href="mailto:fanfankool@gmail.com" className="text-bali-gold hover:underline">fanfankool@gmail.com</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:+33756139596" className="text-bali-gold hover:underline">07 56 13 95 96</a></p>
            <p><strong>Ville du tribunal de compétence en cas de litige :</strong> Créteil</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Webmaster</h2>
            <p><strong>Nom :</strong> Françoise NGUYEN TRUNG</p>
            <p><strong>Adresse :</strong> 8 rue Jean Jaurès, 94310 Orly, France</p>
            <p><strong>Email :</strong> <a href="mailto:fanfankool@gmail.com" className="text-bali-gold hover:underline">fanfankool@gmail.com</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:+33756139596" className="text-bali-gold hover:underline">07 56 13 95 96</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Hébergement</h2>
            <p><strong>Entreprise :</strong> Ionos SARL</p>
            <p><strong>Adresse :</strong> 7 Place de la Gare, 57200 Sarreguemines, France</p>
            <p><strong>Téléphone :</strong> 09 70 80 89 11</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Présentation et principe</h2>
            <p>Est désigné ci-après : Utilisateur, tout internaute se connectant et utilisant le site susnommé : https://www.perle-bali.fr.</p>
            <p className="mt-3">Françoise Nguyen Trung s’efforce de fournir sur le site https://www.perle-bali.fr les informations les plus précises et à jour possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait garantir l’exactitude, la complétude et l’actualité des informations diffusées sur son site, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. En conséquence, l’internaute devra donc s’assurer de l’exactitude des informations et signaler toutes modifications du site qu’il jugerait utile. Françoise Nguyen Trung n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Accessibilité</h2>
            <p>Le site https://www.perle-bali.fr est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d’impossibilité d’accès au service, Françoise Nguyen Trung s’engage à faire son maximum afin de rétablir l’accès au service. N’étant soumis qu’à une obligation de moyen, Françoise Nguyen Trung ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du service.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Propriété intellectuelle</h2>
            <p>Françoise Nguyen Trung est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, tant sur la structure que sur les textes, images, graphismes, logo, icônes, sons, logiciels…</p>
            <p className="mt-3">Toute reproduction totale ou partielle du site https://www.perle-bali.fr, représentation, modification, publication, adaptation totale ou partielle de l’un quelconque de ces éléments est interdite, sauf autorisation écrite préalable de Françoise Nguyen Trung. À défaut, elle sera considérée comme constitutive d’une contrefaçon et passible de poursuite conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Liens hypertextes et cookies</h2>
            <h3 className="font-body font-semibold text-bali-deep mb-2">Liens hypertexte</h3>
            <p>Le site https://www.perle-bali.fr peut contenir un certain nombre de liens hypertextes vers d’autres sites. Françoise Nguyen Trung ne dispose d’aucun moyen pour contrôler les sites en connexion avec son site internet et ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Françoise Nguyen Trung ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent.</p>
            <p className="mt-3">Si vous naviguez vers un de ces sites, veuillez noter qu’ils possèdent leur propre politique de confidentialité et que notre responsabilité s’arrête au moment où vous quittez notre site.</p>
            <p className="mt-3">Les propriétaires de sites internet tiers ne peuvent mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de Françoise Nguyen Trung qui se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.</p>

            <h3 className="font-body font-semibold text-bali-deep mb-2 mt-6">Cookies</h3>
            <p>L’utilisateur est informé que lors de ses visites sur le site https://www.perle-bali.fr, un ou des cookies sont susceptibles de s’installer automatiquement sur son ordinateur par l’intermédiaire de son logiciel de navigation. Un cookie est un bloc de données qui ne permet pas d’identifier l’utilisateur, mais qui enregistre des informations relatives à la navigation de celui-ci sur le site. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.</p>
            <p className="mt-3">Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l’adresse suivante : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-bali-gold hover:underline">www.cnil.fr</a>.</p>

            <h3 className="font-body font-semibold text-bali-deep mb-2 mt-6">Les cookies tiers</h3>
            <p>Notre site peut contenir des liens vers ou depuis des sites partenaires et d’autres sites tiers. Si vous naviguez vers un de ces sites, veuillez noter qu’ils possèdent leur propre politique de confidentialité et que notre responsabilité s’arrête au moment où vous quittez notre site. Vérifiez les politiques de confidentialité avant de transmettre vos données personnelles à des sites tiers.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Protection des biens et des personnes – gestion des données personnelles</h2>
            <p>Le Client est informé des réglementations concernant la communication marketing, la loi du 21 juin 2014 pour la confiance dans l’Économie Numérique, la Loi Informatique et Liberté du 06 août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

            <h3 className="font-body font-semibold text-bali-deep mb-2 mt-6">Responsables de la collecte des données personnelles</h3>
            <p>Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Françoise Nguyen Trung. https://www.perle-bali.fr est représenté par Françoise Nguyen Trung, son représentant légal.</p>
            <p className="mt-3">En tant que responsable du traitement des données qu’il collecte, https://www.perle-bali.fr s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité. Chaque fois que https://www.perle-bali.fr traite des Données Personnelles, https://www.perle-bali.fr prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles https://www.perle-bali.fr les traite.</p>

            <h3 className="font-body font-semibold text-bali-deep mb-2 mt-6">Finalité des données collectées</h3>
            <p>https://www.perle-bali.fr est susceptible de traiter tout ou partie des données :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>pour permettre la navigation sur le Site et la connexion à l’espace privée par l’utilisateur : données de connexion et d’utilisation du Site ;</li>
              <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, pages visitées ;</li>
              <li>pour améliorer la navigation sur le Site : données de connexion et d’utilisation.</li>
            </ul>
            <p className="mt-3">https://www.perle-bali.fr ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">Limitation de responsabilité</h2>
            <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé…). https://www.perle-bali.fr ne peut pas être tenu responsable des lacunes, erreurs ou dysfonctionnement engendrés.</p>
            <p className="mt-3">Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. Par conséquent, Françoise Nguyen Trung ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.</p>
            <p className="mt-3">Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Françoise Nguyen Trung.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-bali-deep font-medium mb-4">A propos des mentions légales</h2>
            <p>Les mentions légales définies sur cette page s’appliquent à l’ensemble du présent site internet et sont susceptibles d’évoluer sans préavis. L’Utilisateur du site est donc invité à les consulter régulièrement afin d’en prendre connaissance.</p>
          </div>

          <div className="pt-4 border-t border-bali-sand/30">
            <p className="font-semibold text-bali-deep">Perle de Bali</p>
            <p className="text-sm text-bali-dark/60">Massages bien-être</p>
            <p className="text-sm text-bali-dark/60">8 rue Jean Jaurès, 94310 Orly</p>
            <p className="text-sm text-bali-dark/60 mt-2">Voir aussi : <Link href="/politique-de-confidentialite" className="text-bali-gold hover:underline">Politique de confidentialité</Link> · <Link href="/conditions-generales-dutilisation" className="text-bali-gold hover:underline">CGU</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
