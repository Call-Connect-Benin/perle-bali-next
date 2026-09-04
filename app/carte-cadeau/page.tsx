import type { Metadata } from "next";
import Link from "next/link";
import { SandScatter, ShellOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Carte Cadeau – Offrez un moment de bien-être",
  description:
    "Offrez une carte cadeau Perle de Bali : un moment de détente et de bien-être balinais à Orly (94). Le cadeau parfait pour vos proches.",
};

const giftOptions = [
  {
    title: "Massage Bali Bien-être",
    price: "70€",
    duration: "1h",
    href: "/services-massage/massage-bali-bien-etre",
  },
  {
    title: "Massage Bali Évasion",
    price: "90€",
    duration: "1h30",
    href: "/services-massage/massage-bali-evasion",
  },
  {
    title: "Massage Bali Pure Détente",
    price: "120€",
    duration: "1h30",
    href: "/services-massage/massage-bali-pure-detente",
  },
  {
    title: "Massage Deep Tissue",
    price: "80€",
    duration: "50mn",
    href: "/massage-technique-deep-tissue",
  },
  {
    title: "Massage Californien",
    price: "70€",
    duration: "50mn",
    href: "/services-massage/massage-californien",
  },
  {
    title: "Montant libre",
    price: "Sur mesure",
    duration: "Selon choix",
    href: "/contact",
  },
];

export default function CarteKCadeauPage() {
  return (
    <>
      <section className="bg-bali-deep pt-28 pb-20 px-6 relative overflow-hidden">
        <SandScatter className="absolute top-10 left-[10%] w-32 h-8 text-bali-sand/55 hidden sm:block animate-float-slow" />
        <ShellOrnament className="absolute bottom-6 right-[4%] w-24 h-16 text-bali-honey/50 hidden sm:block animate-float-slow-delayed" />
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(107, 145, 114,0.5) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-bali-sand/50 mb-8">
            <Link href="/" className="hover:text-bali-gold">Accueil</Link>
            <span>›</span>
            <span className="text-bali-sand/80">Carte cadeau</span>
          </nav>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-4">Offrir le bien-être</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-6">
            Carte Cadeau<br />
            <span className="text-bali-gold">Perle de Bali</span>
          </h1>
          <p className="font-body text-bali-sand/75 text-lg max-w-xl mx-auto">
            Le cadeau parfait pour offrir un moment de sérénité à une personne que vous aimez.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0 40L1440 40L1440 0C1200 25 960 40 720 30C480 20 240 0 0 15L0 40Z" fill="#FDF8F6" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-bali-deep font-light mb-4">Choisissez votre carte cadeau</h2>
            <p className="font-body text-bali-dark/70 max-w-xl mx-auto">
              Contactez-moi pour commander votre carte cadeau. Je vous l'enverrai par e-mail ou vous la remettrai en main propre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {giftOptions.map((opt) => (
              <div
                key={opt.title}
                className="pricing-card bg-bali-white rounded-2xl p-6 shadow-sm border border-bali-sand/30 flex flex-col"
              >
                <div className="w-full aspect-[3/2] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #3D2430 0%, #6B9172 100%)" }}>
                  <div className="text-center text-white">
                    <p className="font-display text-3xl font-semibold text-bali-gold">{opt.price}</p>
                    <p className="font-body text-xs text-white/70 mt-1">{opt.duration}</p>
                  </div>
                </div>
                <h3 className="font-display text-xl text-bali-deep font-medium mb-4">{opt.title}</h3>
                <Link
                  href="/contact"
                  className="mt-auto w-full text-center font-body text-sm font-medium py-2.5 px-4 rounded-full border border-bali-gold text-bali-gold hover:bg-bali-gold hover:text-white transition-colors"
                >
                  Offrir ce soin
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-bali-deep text-white rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(107, 145, 114,0.5) 0%, transparent 65%)" }} />
            <div className="relative">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bali-gold mb-3">Comment ça marche ?</p>
              <h3 className="font-display text-3xl text-white font-light mb-6">En 3 étapes simples</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { step: "1", title: "Contactez-moi", desc: "Par téléphone ou e-mail, indiquez le soin souhaité." },
                  { step: "2", title: "Recevez la carte", desc: "Je vous envoie votre carte cadeau personnalisée." },
                  { step: "3", title: "Offrez le bonheur", desc: "La personne réserve sa séance à sa convenance." },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-bali-gold text-white font-display text-lg font-semibold flex items-center justify-center mx-auto mb-3">
                      {s.step}
                    </div>
                    <h4 className="font-display text-lg text-white font-medium mb-1">{s.title}</h4>
                    <p className="font-body text-sm text-bali-sand/70">{s.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Commander une carte cadeau
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
