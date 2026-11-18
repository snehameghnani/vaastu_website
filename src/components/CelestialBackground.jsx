import { useEffect, useRef } from "react";

export default function CelestialBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    let stars = [], drifts = [], shots = [], clusters = [];
    let lastShot = 0;

    const init = () => {
      const count = Math.min(170, Math.floor((w * h) / 8500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        p: Math.random() * Math.PI * 2,
        s: 0.4 + Math.random() * 1.1,
      }));
      clusters = [];
      for (let c = 0; c < 3; c++) {
        const cx = Math.random() * w, cy = Math.random() * h;
        const pts = Array.from({ length: 5 + Math.floor(Math.random() * 3) }, () => ({
          x: cx + (Math.random() - 0.5) * Math.min(260, w * 0.25),
          y: cy + (Math.random() - 0.5) * Math.min(200, h * 0.25),
        }));
        clusters.push(pts);
      }
      drifts = Array.from({ length: 22 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
        r: Math.random() * 1.5 + 0.6,
        a: Math.random() * 0.22 + 0.07,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const draw = (ts) => {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const tw = reduced ? 0.45 : 0.3 + 0.38 * Math.sin(ts / 1000 * s.s + s.p);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 197, 165, ${Math.max(0.05, tw)})`;
        ctx.fill();
      }

      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(166, 139, 91, 0.11)";
      for (const pts of clusters) {
        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.stroke();
        for (const p of pts) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(216, 197, 165, 0.45)";
          ctx.fill();
        }
      }

      if (!reduced) {
        for (const d of drifts) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < -6) d.x = w + 6;
          if (d.x > w + 6) d.x = -6;
          if (d.y < -6) d.y = h + 6;
          if (d.y > h + 6) d.y = -6;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(214, 189, 142, ${d.a})`;
          ctx.fill();
        }

        if (ts - lastShot > 5500 + Math.random() * 6500 && shots.length < 2) {
          lastShot = ts;
          shots.push({
            x: w * 0.2 + Math.random() * w * 0.6,
            y: Math.random() * h * 0.35,
            vx: -(3.6 + Math.random() * 2.6),
            vy: 2 + Math.random() * 1.4,
            life: 1,
          });
        }
        shots = shots.filter((s) => s.life > 0);
        for (const s of shots) {
          s.x += s.vx * 2.1;
          s.y += s.vy * 2.1;
          s.life -= 0.011;
          const tail = 15;
          const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * tail, s.y - s.vy * tail);
          grad.addColorStop(0, `rgba(232, 214, 178, ${0.75 * s.life})`);
          grad.addColorStop(1, "rgba(232, 214, 178, 0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.vx * tail, s.y - s.vy * tail);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full" style={{ pointerEvents: "none" }} />;
}
