"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
      className="hover:text-bali-gold transition-colors underline underline-offset-2"
    >
      Gérer les cookies
    </button>
  );
}
