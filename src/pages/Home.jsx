import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal, { Eyebrow, Btn, SectionHead, usePageMeta } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import { ZodiacGlyph } from "@/components/icons/ZodiacIcons";
import { WhatsAppIcon } from "@/components/icons/ServiceIcons";
import ExpertPortrait from "@/components/ExpertPortrait";
import { waLink } from "@/data/content";
import compass from "@/assets/compass/hero-compass.jpg";

const Spark = ({ size = 10 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" className="shrink-0 text-gold">
    <path d="M6 0 L7.3 4.7 L12 6 L7.3 7.3 L6 12 L4.7 7.3 L0 6 L4.7 4.7 Z" fill="currentColor" />
  </svg>
);

const ZODIAC_POS = [
  { name: "Aries", x: "45%", y: "-2%", s: 30, d: "7.2s", del: "0.2s" },
  { name: "Taurus", x: "78%", y: "6%", s: 25, d: "8.4s", del: "1.1s", hideMobile: true },
  { name: "Gemini", x: "93%", y: "31%", s: 24, d: "9s", del: "0.6s", hideMobile: true },
  { name: "Cancer", x: "86%", y: "62%", s: 29, d: "7.6s", del: "1.6s" },
  { name: "Leo", x: "61%", y: "93%", s: 25, d: "8.8s", del: "0.4s" },
  { name: "Virgo", x: "34%", y: "97%", s: 29, d: "7.4s", del: "1.2s" },
  { name: "Libra", x: "7%", y: "83%", s: 24, d: "9.4s", del: "0.9s", hideMobile: true },
  { name: "Scorpio", x: "-1%", y: "50%", s: 27, d: "8.1s", del: "0.1s" },
  { name: "Sagittarius", x: "2%", y: "20%", s: 25, d: "8.6s", del: "1.4s" },
  { name: "Capricorn", x: "15%", y: "1%", s: 27, d: "7.8s", del: "0.7s" },
  { name: "Aquarius", x: "75%", y: "38%", s: 21, d: "9.2s", del: "0.3s", hideMobile: true },
  { name: "Pisces", x: "12%", y: "36%", s: 21, d: "8.3s", del: "1.8s", hideMobile: true },
];

const HERO_LINES = [
  ["Align your", "space."],
  ["Understand your", "energy."],
  ["Discover your", "direction."],
];

const lineReveal = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.15, delay: 0.45 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  usePageMeta(
    "Vastu Vigya — Vastu, Astrology & Numerology Consultancy, Jaipur",
    "Premium Vastu Shastra, Astrology and Numerology consultancy in Jaipur. Align your space, understand your energy, discover your direction."
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [5, -5]), { stiffness: 55, damping: 18 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 55, damping: 18 });
  const zx = useSpring(useTransform(mx, [-1, 1], [14, -14]), { stiffness: 45, damping: 20 });
  const zy = useSpring(useTransform(my, [-1, 1], [10, -10]), { stiffness: 45, damping: 20 });

  const emblemRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: emblemRef, offset: ["start end", "end start"] });
  const emblemY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section
        className="relative z-10 flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 lg:pt-28"
        onMouseMove={onMove}
        data-testid="hero-section"
      >
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
              <Eyebrow>Vastu Vigya · Jaipur</Eyebrow>
            </motion.div>

            <h1 className="mt-7 font-serif text-[2.55rem] font-medium uppercase leading-[1.06] tracking-[0.045em] text-ivory sm:text-6xl xl:text-[4.3rem]">
              {HERO_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    variants={lineReveal}
                    initial="hidden"
                    animate="show"
                    custom={i}
                  >
                    {line[0]} <em className="gold-text font-semibold italic">{line[1]}</em>
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.15 }}
              className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/60"
            >
              Bringing together the timeless wisdom of Vastu Shastra, Astrology and Numerology to guide you towards
              greater harmony, clarity and balance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-11 flex flex-wrap gap-4"
            >
              <Btn to="/services" testid="hero-cta-services">
                Explore Our Services <ArrowRight size={14} />
              </Btn>
              <Btn href={waLink("Hello, I would like to consult our expert.")} external variant="ghost" testid="hero-cta-expert">
                <WhatsAppIcon size={15} /> Consult Our Expert
              </Btn>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-[580px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
                className="relative aspect-square"
                data-testid="hero-compass"
              >
                <svg className="absolute inset-0 h-full w-full animate-spin-slower text-champagne/35" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                  <circle cx="50" cy="50" r="48.7" stroke="currentColor" strokeWidth="0.3" strokeDasharray="0.5 2.3" />
                </svg>
                <svg className="absolute inset-[4.5%] h-[91%] w-[91%] animate-spin-reverse text-gold/45" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                  <circle cx="50" cy="50" r="48.7" stroke="currentColor" strokeWidth="0.28" />
                  <path d="M50 0.6 V4.6 M50 95.4 V99.4 M0.6 50 H4.6 M95.4 50 H99.4" stroke="currentColor" strokeWidth="0.42" />
                </svg>
                <div className="absolute inset-[31%] rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
                <div className="absolute inset-[12%] overflow-hidden rounded-full">
                  <img
                    src={compass}
                    alt="Antique astronomical compass — the visual identity of Vastu Vigya"
                    className="compass-feather h-full w-full scale-[1.14] object-cover"
                    fetchpriority="high"
                  />
                </div>
              </motion.div>

              <motion.div style={{ x: zx, y: zy }} className="absolute inset-[-15%]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 1.4 }}>
                {ZODIAC_POS.map((z) => (
                  <span
                    key={z.name}
                    className={`float-slow absolute ${z.hideMobile ? "hidden sm:block" : ""}`}
                    style={{ left: z.x, top: z.y, "--float-duration": z.d, "--float-delay": z.del }}
                    data-testid={`zodiac-${z.name.toLowerCase()}`}
                  >
                    <ZodiacGlyph name={z.name} size={z.s} className="text-champagne" />
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex" aria-hidden="true">
          <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-ivory/40">Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-champagne/60 to-transparent" />
        </div>
      </section>

      <Marquee />

      {/* ---------------- ABOUT THE EXPERT ---------------- */}
      <section className="relative z-10 bg-ivory py-24 text-chocolate lg:py-32" data-testid="expert-section">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5" ref={emblemRef}>
            <motion.div style={{ y: emblemY }} className="relative mx-auto w-full max-w-[400px] px-7 py-9">
              <ExpertPortrait />
              <span className="absolute right-0 top-2 text-gold/70"><ZodiacGlyph name="Leo" size={22} /></span>
              <span className="absolute bottom-4 right-8 text-gold/70"><ZodiacGlyph name="Sagittarius" size={20} /></span>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow dark>About the Expert</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.1] text-chocolate sm:text-5xl lg:text-[3.3rem]">
                Guidance Rooted in Knowledge. <em className="italic text-gold">Perspectives Beyond the Ordinary.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-chocolate/75">
                Vastu Vigya is guided by Rajeshwari Madam, who practises Vastu Shastra, Astrology and Numerology not as
                separate sciences, but as one connected language of space, time and energy.
              </p>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-chocolate/75">
                Her approach begins with listening and an in-depth study of the person and the space seeking guidance —
                the chart, the numbers, the directions — before any remedy is suggested. From homes and workplaces to
                names, numbers, logos and visiting cards, every consultation is tailored to the individual or business,
                never generalised.
              </p>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-chocolate/75">
                She is known for Vastu solutions without structural changes or demolition — working with the sixteen
                zones, the five elements and the birth chart (Janam Kundli) to bring balance to a space exactly as it is.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3.5">
                {[
                  "An in-depth study before every recommendation",
                  "Remedies without demolition or structural change",
                  "Vastu, Astrology and Numerology, read as one",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3.5 text-[14px] font-semibold text-chocolate/85">
                    <Spark /> {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.26} className="mt-10">
              <Btn to="/about-us" variant="dark" testid="home-expert-cta">
                Know About Us <ArrowRight size={14} />
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="relative z-10 py-24 lg:py-28" data-testid="testimonials-section">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <SectionHead
            dark
            eyebrow="Testimonials"
            title="What Our Customers Say"
            intro="Words from those we have guided — preserved exactly as they were shared with us."
          />
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section className="relative z-10 bg-ivory py-24 text-chocolate lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Eyebrow dark className="justify-center">
              Begin
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl text-chocolate sm:text-5xl">
              Align your space with <em className="italic text-gold">intention.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-chocolate/65">
              A consultation with Vastu Vigya begins with a conversation — reach out and take the first step towards
              harmony, clarity and balance.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10 flex flex-wrap justify-center gap-4">
            <Btn href={waLink("Hello, I would like to consult our expert.")} external testid="home-cta-expert">
              <WhatsAppIcon size={15} /> Consult Our Expert
            </Btn>
            <Btn to="/contact-us" variant="dark" testid="home-cta-contact">
              Contact Us
            </Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
