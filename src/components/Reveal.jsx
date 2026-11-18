import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", description);
    }
  }, [title, description]);
};

const Reveal = ({ children, delay = 0, y = 30, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;

export const Eyebrow = ({ children, dark = false, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <span
      className="inline-block h-px w-12"
      style={{ background: dark ? "rgba(166,139,91,0.7)" : "rgba(74,52,40,0.45)" }}
    />
    <span className="eyebrow font-semibold text-gold">{children}</span>
  </div>
);

const GOLD =
  "group inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-champagne text-chocolate-ink hover:bg-gold hover:text-ivory hover:shadow-[0_14px_44px_rgba(166,139,91,0.35)]";
const GHOST =
  "group inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-champagne/40 text-champagne hover:border-champagne hover:bg-champagne/10 hover:text-ivory";
const GHOST_DARK =
  "group inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-chocolate/35 text-chocolate hover:bg-chocolate hover:text-ivory";

export const Btn = ({ to, href, onClick, children, testid, className = "", variant = "gold", external = false }) => {
  const cls = (variant === "gold" ? GOLD : variant === "ghost" ? GHOST : GHOST_DARK) + ` ${className}`;
  if (to)
    return (
      <Link to={to} className={cls} data-testid={testid} onClick={onClick}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cls} data-testid={testid} onClick={onClick}>
        {children}
      </a>
    );
  return (
    <button type="button" className={cls} data-testid={testid} onClick={onClick}>
      {children}
    </button>
  );
};

export const SectionHead = ({ eyebrow, title, dark = false, intro, className = "" }) => (
  <div className={`grid gap-8 lg:grid-cols-12 lg:items-end ${className}`}>
    <Reveal className="lg:col-span-7">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem] ${dark ? "text-ivory" : "text-chocolate"}`}>
        {title}
      </h2>
    </Reveal>
    {intro && (
      <Reveal delay={0.12} className="lg:col-span-5">
        <p className={`max-w-md text-[15px] leading-relaxed lg:ml-auto ${dark ? "text-ivory/60" : "text-chocolate/65"}`}>{intro}</p>
      </Reveal>
    )}
  </div>
);
