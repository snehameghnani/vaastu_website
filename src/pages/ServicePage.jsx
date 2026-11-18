import { Link, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal, { Eyebrow, Btn, usePageMeta } from "@/components/Reveal";
import { ServiceIcon, WhatsAppIcon } from "@/components/icons/ServiceIcons";
import { SERVICES, waLink } from "@/data/content";

export default function ServicePage({ slug }) {
  const svc = SERVICES.find((s) => s.slug === slug);
  usePageMeta(svc ? `${svc.title} | Vastu Vigya` : "Vastu Vigya", svc?.excerpt);
  if (!svc) return <Navigate to="/" replace />;

  const idx = SERVICES.indexOf(svc);
  const related = [1, 2, 3].map((k) => SERVICES[(idx + k) % SERVICES.length]);

  return (
    <>
      {/* hero */}
      <section className="relative z-10 pb-20 pt-40 lg:pb-24 lg:pt-52" data-testid="service-hero">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <nav className="eyebrow font-semibold text-ivory/40" aria-label="Breadcrumb">
              <Link to="/" className="transition-colors hover:text-champagne">Home</Link>
              <span className="mx-3 text-gold">·</span>
              <Link to="/services" className="transition-colors hover:text-champagne">Services</Link>
              <span className="mx-3 text-gold">·</span>
              <span className="text-champagne">{svc.title}</span>
            </nav>
            <div className="mt-10 flex h-24 w-24 items-center justify-center rounded-full border border-champagne/30 text-gold" data-testid={`service-icon-${svc.slug}`}>
              <ServiceIcon name={svc.icon} size={42} />
            </div>
            <h1 className="mt-8 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              {svc.title}
            </h1>
            <p className="mt-5 font-serif text-xl italic text-gold">{svc.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* description — original, unaltered */}
      <section className="relative z-10 bg-ivory py-24 text-chocolate lg:py-28" data-testid="service-content">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl lg:ml-[8.333%]">
            {svc.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={`mb-8 text-[16px] leading-loose text-chocolate/80 ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:text-gold"
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

      {/* consultation CTA */}
      <section className="relative z-10 py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Eyebrow className="justify-center">Consult</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl text-ivory sm:text-5xl">
              Discuss your <em className="italic text-gold">{svc.title}</em> consultation.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/55">
              Every consultation begins with a conversation. Reach out directly to Rajeshwari Madam's office at Vastu
              Vigya.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-10 flex flex-wrap justify-center gap-4">
            <Btn href={waLink(`Hello, I would like to consult about ${svc.title}.`)} external testid="service-cta-whatsapp">
              <WhatsAppIcon size={15} /> Consult Our Expert
            </Btn>
            <Btn to="/contact-us" variant="ghost" testid="service-cta-contact">
              Contact Us
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* related services */}
      <section className="relative z-10 border-t border-champagne/10 py-20" data-testid="related-services">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Continue Exploring</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.07}>
                <Link
                  to={`/${r.slug}`}
                  data-testid={`related-service-${r.slug}`}
                  className="group flex h-full items-center gap-5 border-t border-champagne/15 pt-7 transition-colors duration-500 hover:border-champagne/60"
                >
                  <span className="text-gold transition-colors duration-300 group-hover:text-champagne">
                    <ServiceIcon name={r.icon} size={30} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-[1.35rem] text-ivory">{r.title}</span>
                    <span className="mt-1 block text-[13px] italic text-ivory/45">{r.tagline}</span>
                  </span>
                  <ArrowUpRight size={17} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
