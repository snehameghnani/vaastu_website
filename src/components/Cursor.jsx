import { useEffect, useRef } from "react";

export default function Cursor() {
  const el = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !el.current) return;

    const root = document.documentElement;
    root.classList.add("cursor-active");
    const node = el.current;

    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, rot = 0, raf = 0;
    let shown = false;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        node.classList.add("is-visible");
      }
      const t = e.target;
      const interactive = t && t.closest && t.closest("a, button, [role='button'], input, textarea, select, label, summary");
      node.classList.toggle("is-hover", !!interactive);
    };

    const loop = () => {
      const dx = tx - x;
      x += dx * 0.2;
      y += (ty - y) * 0.2;
      rot = Math.max(-30, Math.min(30, (rot + dx * 0.32) * 0.88));
      node.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      root.classList.remove("cursor-active");
    };
  }, []);

  return (
    <div ref={el} className="compass-cursor" data-testid="compass-cursor" aria-hidden="true">
      <svg width="30" height="30" viewBox="0 0 30 30">
        <path d="M15 2.5 L18.2 15 H11.8 Z" fill="#B03A2E" />
        <path d="M15 27.5 L18.2 15 H11.8 Z" fill="#F4EFE7" />
        <path d="M15 2.5 L16.6 15 H15 Z" fill="#D05A48" opacity="0.9" />
        <circle cx="15" cy="15" r="2.2" fill="#A68B5B" stroke="#D8C5A5" strokeWidth="0.7" />
      </svg>
    </div>
  );
}
