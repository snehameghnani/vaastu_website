import { ArrowRight } from "lucide-react";
import Reveal, { Eyebrow, Btn, usePageMeta } from "@/components/Reveal";
import { ElementIcon, WhatsAppIcon } from "@/components/icons/ServiceIcons";
import ExpertPortrait from "@/components/ExpertPortrait";
import { waLink } from "@/data/content";

const ELEMENTS = [
  { name: "Earth", d: "Stability and grounding — the solid foundation of a space." },
  { name: "Water", d: "Flow and clarity — the way energy moves through a space." },
  { name: "Fire", d: "Energy and drive — the light and vigour of a space." },
  { name: "Air", d: "Movement and renewal — the breath of a space." },
  { name: "Space", d: "Expansion and connection — the field that holds it all together." },
];

const PHILOSOPHY = [
  {
    n: "01",
    t: "Placement & Orientation",
    d: "The placement and orientation of a building, and the materials used in its construction, are believed to shape the flow of energy within the space.",
  },
  {
    n: "02",
    t: "Colour & Light",
    d: "Beyond the physical layout, Vastu considers colour, light and design elements — warm, vibrant tones in the south and west are believed to promote energy, while cool, calming colours suit the north and east.",
  },
  {
    n: "03",
    t: "Arrangement of Objects",
    d: "These principles extend to the furniture and objects within a space. Placing certain objects in specific locations is believed to promote harmony and balance for all who occupy the space.",
  },
];

export default function About() {
  usePageMeta(
    "About Us | Vastu Vigya",
    "The philosophy of Vastu Shastra — harmony between built environments and the natural world — and the approach of Vastu Vigya, Jaipur."
  );

  return (
    <>
      {/* hero */}
      <section className="relative z-10 pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>About Us</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              The science of harmony, <em className="gold-text italic">the art of living well.</em>
            </h1>
            <p className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">
              Vastu Vigya unites ancient knowledge of space, planets and numbers with a thoughtful, personalised
              approach to modern living and business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* about vastu vigya */}
      <section className="relative z-10 bg-ivory py-24 text-chocolate lg:py-32" data-testid="about-content">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow dark>About Vastu Vigya</Eyebrow>
              <p className="mt-6 font-serif text-2xl italic leading-snug text-chocolate/70">
                “A powerful tool for creating a harmonious, balanced environment.”
              </p>
            </div>
          </div>
          <div className="max-w-3xl lg:col-span-8">
            {[
              "Vastu Shastra is an ancient Indian system of architecture and design, rooted in harmony and balance with the natural world. Following its principles is believed to bring prosperity, good health and overall well-being — in the home, at work and in relationships.",
              "Its origins trace back to the Vedic period in India, where it developed as a way of creating buildings and spaces in harmony with the natural environment. Vastu holds that the earth is composed of five elements — earth, water, fire, air and space — and that these elements can have a profound impact on the energy and vibrancy of a space.",
              "According to Vastu Vigya, the placement and orientation of a building, as well as the materials used in its construction, can have a major impact on the energy flow within. It is believed that the north and east sides of a building should be left open to allow the flow of positive energy, while the south and west sides should be solid to protect against negative energy.",
              "Beyond the physical layout, Vastu also focuses on the use of colour, light and other design elements to create a harmonious and balanced environment. Warm, vibrant colours on the south and west sides of a space are believed to promote energy and positivity, while cool and calming colours are better suited to the north and east.",
              "While these principles are often applied to the design and construction of buildings, they can equally be applied to the arrangement of furniture and objects within a space — placing certain objects in specific locations is believed to promote harmony and balance, supporting the overall well-being of those who occupy the space.",
              "Vastu Vigya is, above all, a tool for creating a space filled with positive energy and vibrancy — one that supports you on your journey towards happiness and fulfilment.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p
                  className={`mb-7 text-[15.5px] leading-loose text-chocolate/80 ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.4rem] first-letter:leading-[0.85] first-letter:text-gold"
                      : ""
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* philosophy */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>The Philosophy</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
              Understanding how space shapes <em className="italic text-gold">well-being.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="border-t border-champagne/15 pt-8">
                  <span className="font-serif text-lg italic text-gold">{p.n}</span>
                  <h3 className="mt-4 font-serif text-2xl text-ivory">{p.t}</h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ivory/55">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* five elements */}
      <section className="relative z-10 bg-ivory py-24 text-chocolate lg:py-32" data-testid="five-elements">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow dark>The Five Elements</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-chocolate sm:text-5xl">
              Earth, water, fire, air and space.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-chocolate/65">
              Vastu is based on the belief that the earth is made up of five elements — and that their balance can
              bring prosperity, health and happiness to a person's life.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {ELEMENTS.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.06}>
                <div className="border-t border-chocolate/15 pt-7">
                  <span className="inline-flex text-gold">
                    <ElementIcon name={e.name} size={36} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-chocolate">{e.name}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-chocolate/60">{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* expert */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>The Expert</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
                Rajeshwari Madam — <em className="italic text-gold">guidance rooted in knowledge.</em>
              </h2>
              <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-ivory/60">
                Rajeshwari Madam practises Vastu, Astrology and Numerology as one connected discipline. Every
                consultation begins with an in-depth study of the person and the space seeking guidance, before any
                remedy is recommended.
              </p>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ivory/60">
                She provides Vastu solutions without structural changes or demolition — working with the five elements,
                the sixteen zones and the birth chart (Janam Kundli) — for homes, workplaces, names, numbers, logos and
                visiting cards, for both individuals and businesses.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-4">
              <Btn href={waLink("Hello, I would like to book a consultation.")} external testid="about-cta-expert">
                <WhatsAppIcon size={15} /> Book a Consultation
              </Btn>
              <Btn to="/services" variant="ghost" testid="about-cta-services">
                Explore Services <ArrowRight size={14} />
              </Btn>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="mx-auto w-full max-w-[340px]">
              <ExpertPortrait />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
