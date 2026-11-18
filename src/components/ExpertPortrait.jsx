import { ZodiacGlyph } from "./icons/ZodiacIcons";

let portrait = null;
try {
  const ctx = require.context("../assets", true, /^\.\/expert\/.+\.(jpe?g|jpeg|png|webp)$/i);
  const key = ctx.keys()[0];
  if (key) portrait = ctx(key);
} catch (e) {
  portrait = null;
}

export default function ExpertPortrait({ className = "" }) {
  return (
    <div className={`relative ${className}`} data-testid="expert-portrait">
      <div className="absolute -inset-3 border border-gold/30" aria-hidden="true" />
      <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-gold" aria-hidden="true" />
      <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-gold" aria-hidden="true" />

      <div className="relative aspect-[4/5] overflow-hidden border border-champagne/30 bg-chocolate-deep shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
        {portrait ? (
          <img
            src={portrait}
            alt="Rajeshwari Madam — the expert at Vastu Vigya"
            data-testid="expert-portrait-photo"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center px-8 text-center"
            data-testid="expert-portrait-placeholder"
          >
            <span className="gold-text font-serif text-[7.5rem] font-medium leading-none">R</span>
            <span className="eyebrow mt-5 font-semibold text-gold">Rajeshwari Madam</span>
            <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ivory/40">The Expert</span>
            <span className="mt-7 flex items-center gap-3 text-ivory/35">
              <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true" className="text-gold/70">
                <path d="M6 0 L7.3 4.7 L12 6 L7.3 7.3 L6 12 L4.7 7.3 L0 6 L4.7 4.7 Z" fill="currentColor" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.28em]">Photograph coming soon</span>
              <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true" className="text-gold/70">
                <path d="M6 0 L7.3 4.7 L12 6 L7.3 7.3 L6 12 L4.7 7.3 L0 6 L4.7 4.7 Z" fill="currentColor" />
              </svg>
            </span>
          </div>
        )}
        <span className="pointer-events-none absolute inset-4 border border-champagne/15" aria-hidden="true" />
      </div>

      <span className="absolute -left-4 top-10 text-gold/70" aria-hidden="true"><ZodiacGlyph name="Aries" size={22} /></span>
      <span className="absolute -right-4 bottom-16 text-gold/70" aria-hidden="true"><ZodiacGlyph name="Libra" size={22} /></span>
    </div>
  );
}
