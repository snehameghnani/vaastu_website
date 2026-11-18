import { Link } from "react-router-dom";

export const LogoMark = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="29" fill="none" stroke="#A68B5B" strokeWidth="1.6" />
    <circle cx="32" cy="32" r="23.5" fill="none" stroke="#A68B5B" strokeWidth="0.7" strokeDasharray="1 3" opacity="0.7" />
    <path d="M32 8 L36.8 27.2 L56 32 L36.8 36.8 L32 56 L27.2 36.8 L8 32 L27.2 27.2 Z" fill="#D8C5A5" />
    <circle cx="32" cy="32" r="4" fill="#4A3428" stroke="#D8C5A5" strokeWidth="1.1" />
  </svg>
);

export default function Logo({ compact = false }) {
  return (
    <Link to="/" data-testid="logo-link" className="group flex items-center gap-3" aria-label="Vastu Vigya — Home">
      <LogoMark size={compact ? 34 : 42} />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-serif text-[1.15rem] font-medium tracking-[0.08em] text-ivory transition-colors duration-300 group-hover:text-champagne sm:text-[1.45rem]">
          VASTU VIGYA
        </span>
        <span className="eyebrow mt-1.5 text-[8.5px] font-semibold text-gold">
          Vastu · Astrology · Numerology
        </span>
      </span>
    </Link>
  );
}
