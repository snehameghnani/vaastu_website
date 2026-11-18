import Reveal, { Eyebrow, Btn, usePageMeta } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/ServiceIcons";
import { PLANS, waLink } from "@/data/content";

export default function Plans() {
  usePageMeta(
    "Our Plans | Vastu Vigya",
    "Consultation plans offered by Vastu Vigya — connect directly for detailed inclusions and pricing."
  );

  return (
    <>
      <section className="relative z-10 pb-16 pt-40 lg:pb-20 lg:pt-52">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Our Plans</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Begin with a <em className="gold-text italic">conversation.</em>
            </h1>
            <p className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">
              Our consultation plans are shared exactly as we offer them. For detailed inclusions and pricing, connect
              with us directly — we will guide you to the right plan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24 lg:pb-32" data-testid="plans-section">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
          <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <article
                  className="group border border-champagne/15 bg-chocolate-dark/50 p-4 transition-colors duration-500 hover:border-champagne/45"
                  data-testid={`plan-card-${p.id}`}
                >
                  <div className="overflow-hidden border border-champagne/10">
                    <img
                      src={p.img}
                      alt={`${p.title} — consultation plan details`}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-5">
                    <h2 className="font-serif text-2xl text-ivory">{p.title}</h2>
                    <a
                      href={waLink(`Hello, I would like to know more about ${p.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`plan-enquire-${p.id}`}
                      className="inline-flex items-center gap-2 border border-champagne/35 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-champagne transition-all duration-300 hover:bg-champagne hover:text-chocolate-ink"
                    >
                      <WhatsAppIcon size={13} /> Enquire
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <div className="flex h-full min-h-[280px] flex-col items-start justify-center border border-champagne/10 p-10">
                <span className="font-serif text-3xl italic text-gold">Your plan</span>
                <p className="mt-5 text-[14.5px] leading-relaxed text-ivory/60">
                  Not sure which plan suits you? Speak with us and we will suggest the way forward for your space,
                  name or business.
                </p>
                <div className="mt-8">
                  <Btn href={waLink("Hello, please guide me to the right plan.")} external variant="ghost" testid="plans-cta-expert">
                    <WhatsAppIcon size={15} /> Ask Our Expert
                  </Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
