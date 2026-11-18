import { MARQUEE_WORDS } from "@/data/content";

const Star4 = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true" className="shrink-0 text-gold">
    <path d="M6 0 L7.3 4.7 L12 6 L7.3 7.3 L6 12 L4.7 7.3 L0 6 L4.7 4.7 Z" fill="currentColor" />
  </svg>
);

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-champagne/10 bg-chocolate-deep/70 py-6" aria-hidden="true">
      <div className="marquee-track flex w-max items-center" style={{ "--marquee-duration": "80s" }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {MARQUEE_WORDS.map((word, i) => (
              <span key={i} className="flex items-center">
                <span className="whitespace-nowrap px-9 font-serif text-2xl italic text-champagne/55 md:text-[1.7rem]">{word}</span>
                <Star4 />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
