import Link from "next/link";

export default function MobileBookingBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3">
      <div className="flex gap-2 bg-bali-deep/95 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-black/30 p-1.5">
        <a
          href="tel:+33756139596"
          className="flex-1 inline-flex items-center justify-center gap-2 text-white font-body text-sm font-medium py-2.5 rounded-full hover:bg-white/10 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Appeler
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bali-gold to-bali-rose-deep text-white font-body text-sm font-semibold py-2.5 rounded-full shadow-sm"
        >
          Réserver
        </Link>
      </div>
    </div>
  );
}
