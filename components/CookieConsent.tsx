"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = {
  essential: true;
  analytics: boolean;
  timestamp: string;
};

const STORAGE_KEY = "perle-bali-cookie-consent";

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const consent: Consent = { essential: true, analytics, timestamp: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // localStorage indisponible (navigation privée stricte) — le bandeau réapparaîtra, sans casser le site.
  }
  // Point d'accroche pour un futur outil de mesure d'audience : celui-ci ne devra
  // se charger que si `consent.analytics` est vrai, en lisant ce même localStorage.
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const reopen = () => {
      setCustomizing(false);
      setVisible(true);
    };
    window.addEventListener("open-cookie-preferences", reopen);
    return () => window.removeEventListener("open-cookie-preferences", reopen);
  }, []);

  function acceptAll() {
    saveConsent(true);
    setVisible(false);
  }

  function rejectAll() {
    saveConsent(false);
    setVisible(false);
  }

  function saveCustom() {
    saveConsent(analyticsChoice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Préférences de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="max-w-3xl mx-auto rounded-2xl bg-bali-white border border-bali-sand/40 shadow-2xl shadow-black/10 overflow-hidden animate-fade-in-up">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-1">
            <span className="text-xl shrink-0" aria-hidden>🍪</span>
            <h2 className="font-display text-xl text-bali-deep">Cookies</h2>
          </div>
          <p className="font-body text-sm text-bali-dark/75 leading-relaxed mb-4">
            Perle de Bali utilise des cookies essentiels au fonctionnement du site, et, avec votre
            accord, des cookies de mesure d&apos;audience pour comprendre comment le site est utilisé.{" "}
            <Link href="/cookie-policy" className="text-bali-gold hover:underline">
              En savoir plus
            </Link>
            .
          </p>

          {customizing && (
            <div className="mb-4 space-y-2 border-t border-bali-sand/30 pt-4">
              <div className="flex items-center justify-between gap-4 p-3 bg-bali-cream rounded-xl">
                <div>
                  <p className="font-body text-sm font-medium text-bali-deep">Cookies essentiels</p>
                  <p className="font-body text-xs text-bali-dark/60">Toujours actifs — nécessaires au fonctionnement du site.</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-bali-sage bg-bali-sage/15 px-2.5 py-1 rounded-full">Actif</span>
              </div>
              <div className="flex items-center justify-between gap-4 p-3 bg-bali-cream rounded-xl">
                <div>
                  <p className="font-body text-sm font-medium text-bali-deep">Mesure d&apos;audience</p>
                  <p className="font-body text-xs text-bali-dark/60">Nous aide à comprendre la fréquentation du site, de façon anonyme.</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsChoice}
                  onClick={() => setAnalyticsChoice((v) => !v)}
                  className={`shrink-0 w-11 h-6 rounded-full transition-colors relative ${
                    analyticsChoice ? "bg-bali-gold" : "bg-bali-sand/60"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      analyticsChoice ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5">
            {customizing ? (
              <button
                type="button"
                onClick={saveCustom}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body text-sm font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Enregistrer mes choix
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body text-sm font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:shadow-bali-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Tout accepter
                </button>
                <button
                  type="button"
                  onClick={() => setCustomizing(true)}
                  className="inline-flex items-center justify-center gap-2 border border-bali-sand/60 text-bali-deep font-body text-sm font-medium px-6 py-2.5 rounded-full hover:border-bali-gold hover:text-bali-gold transition-colors"
                >
                  Personnaliser
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium px-6 py-2.5 rounded-full text-bali-dark/60 hover:text-bali-gold transition-colors"
                >
                  Continuer sans accepter
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
