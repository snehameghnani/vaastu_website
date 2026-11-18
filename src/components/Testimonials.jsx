import { useEffect, useRef } from "react";
import { QuoteMark } from "./icons/ServiceIcons";
import { TESTIMONIALS } from "@/data/content";

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const st = useRef({ x: 0, half: 0, hover: false, dragging: false, startX: 0, startTx: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const s = st.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      s.half = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    let raf, last = performance.now();
    const loop = (ts) => {
      const dt = Math.min(50, ts - last);
      last = ts;
      if (!s.hover && !s.dragging && !reduced) s.x -= 0.045 * dt;
      if (s.half > 0) {
        if (s.x <= -s.half) s.x += s.half;
        if (s.x > 0) s.x -= s.half;
      }
      track.style.transform = `translate3d(${s.x}px,0,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const down = (e) => {
      s.dragging = true;
      s.startX = e.clientX;
      s.startTx = s.x;
    };
    const move = (e) => {
      if (!s.dragging) return;
      s.x = s.startTx + (e.clientX - s.startX);
    };
    const up = () => {
      s.dragging = false;
    };

    wrap.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      wrap.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      data-testid="testimonial-carousel"
      className="relative z-10 overflow-hidden"
      style={{ touchAction: "pan-y", cursor: "grab" }}
      onMouseEnter={() => (st.current.hover = true)}
      onMouseLeave={() => (st.current.hover = false)}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex" aria-hidden={copy === 1}>
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                data-testid={`testimonial-card-${i}`}
                className="glass-card mr-7 w-[82vw] max-w-[430px] shrink-0 select-none p-9 sm:p-10"
              >
                <QuoteMark size={30} className="text-gold/80" />
                <p className="mt-6 font-serif text-[1.35rem] leading-relaxed text-ivory/90">“{t.text}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 font-serif text-sm tracking-widest text-champagne">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold tracking-[0.14em] text-champagne">{t.name}</span>
                    <span className="mt-0.5 block text-[10px] uppercase tracking-[0.22em] text-ivory/40">Verified Client</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
