import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal, { Eyebrow, SectionHead, usePageMeta } from "@/components/Reveal";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { SERVICES } from "@/data/content";

export default function ServicesIndex() {
  usePageMeta(
    "Our Services | Vastu Vigya",
    "Vastu, Astrology, Mobile Numerology, Name Numerology, Logo Analysis, Wall Clock & Analysis, Visiting Card Designing & Analysis and Cowrie Prediction."
  );

  return (
    <>
      <section className="relative z-10 pb-16 pt-40 lg:pb-20 lg:pt-52">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Our Services</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Eight sciences, <em className="gold-text italic">one direction.</em>
            </h1>
            <p className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">
              Each of our services has its own dedicated page. Choose a science to explore it exactly as we practise it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24 lg:pb-32" data-testid="services-index">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <SectionHead
            dark
            eyebrow="Explore"
            title={
              <>
                Eight sciences. <em className="italic text-gold">One direction.</em>
              </>
            }
            intro="Every service has its own dedicated page — described exactly as we practise it, without embellishment."
          />
          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.07}>
                <Link
                  to={`/${s.slug}`}
                  data-testid={`services-index-${s.slug}`}
                  className="group block h-full border-t border-champagne/15 pt-8 transition-colors duration-500 hover:border-champagne/60"
                >
                  <span className="inline-flex text-gold transition-all duration-500 group-hover:text-champagne group-hover:drop-shadow-[0_0_10px_rgba(216,197,165,0.5)]">
                    <ServiceIcon name={s.icon} size={34} />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.55rem] leading-snug text-ivory">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ivory/55">{s.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.24em] text-gold transition-colors duration-300 group-hover:text-champagne">
                    Explore <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
