"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

const services = [
  "Massage Bali Bien-être (1h – 70€)",
  "Massage Bali Évasion (1h30 – 90€)",
  "Massage Bali Pure Détente (1h30 – 120€)",
  "Massage Deep Tissue (50mn – 80€)",
  "Massage Californien (50mn – 70€)",
  "Massage Chi Nei Tsang (50mn – 70€)",
  "Massage Drainage Manuel (50mn – 70€)",
  "Massage Enfant (30mn – 30€)",
  "Massage Amincissant & Raffermissant (cure)",
  "Carte cadeau",
  "Autre / question générale",
];

const initial = { success: false, message: "" };

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [state, action, pending] = useActionState(sendContactEmail, initial);

  const inputClass = `w-full rounded-xl border px-4 py-3 font-body text-sm outline-none focus:ring-2 transition-colors ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-bali-gold"
      : "bg-bali-white border-bali-sand/40 text-bali-dark placeholder-bali-dark/40 focus:ring-bali-gold"
  }`;

  if (state.success) {
    return (
      <div className={`rounded-2xl p-8 text-center ${dark ? "bg-white/10" : "bg-bali-gold/10 border border-bali-gold/30"}`}>
        <p className="text-2xl mb-2">✓</p>
        <p className={`font-body font-medium ${dark ? "text-white" : "text-bali-deep"}`}>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block font-body text-xs font-medium mb-1 ${dark ? "text-white/70" : "text-bali-dark/60"}`}>
            Prénom & Nom <span className="text-bali-gold">*</span>
          </label>
          <input name="name" type="text" required placeholder="Marie Dupont" className={inputClass} />
        </div>
        <div>
          <label className={`block font-body text-xs font-medium mb-1 ${dark ? "text-white/70" : "text-bali-dark/60"}`}>
            Email <span className="text-bali-gold">*</span>
          </label>
          <input name="email" type="email" required placeholder="marie@email.fr" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block font-body text-xs font-medium mb-1 ${dark ? "text-white/70" : "text-bali-dark/60"}`}>
            Téléphone
          </label>
          <input name="phone" type="tel" placeholder="06 xx xx xx xx" className={inputClass} />
        </div>
        <div>
          <label className={`block font-body text-xs font-medium mb-1 ${dark ? "text-white/70" : "text-bali-dark/60"}`}>
            Soin souhaité
          </label>
          <select name="service" className={inputClass}>
            <option value="">Choisir un soin…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={`block font-body text-xs font-medium mb-1 ${dark ? "text-white/70" : "text-bali-dark/60"}`}>
          Message <span className="text-bali-gold">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Votre message, disponibilités, questions…"
          className={`${inputClass} resize-none`}
        />
      </div>
      {state.message && !state.success && (
        <p className="font-body text-sm text-red-400">{state.message}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body font-semibold py-3.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
