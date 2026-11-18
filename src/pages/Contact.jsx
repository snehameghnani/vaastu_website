import { useState } from "react";
import { Check, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Reveal, { Eyebrow, Btn, usePageMeta } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/ServiceIcons";
import {
  ADDRESS_TEXT,
  EMAIL,
  INSTAGRAM_URL,
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/data/content";

const METHODS = [
  { icon: <Phone size={17} />, label: "Call Us", value: PHONE_DISPLAY, href: PHONE_TEL, testid: "contact-call-link" },
  { icon: <WhatsAppIcon size={17} />, label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL, external: true, testid: "contact-whatsapp-link" },
  { icon: <Mail size={17} />, label: "Mail Us", value: EMAIL, href: `mailto:${EMAIL}`, testid: "contact-email-link" },
  { icon: <Instagram size={17} />, label: "Instagram", value: "@vastuvigya", href: INSTAGRAM_URL, external: true, testid: "contact-instagram-link" },
  { icon: <MapPin size={17} />, label: "Visit Us", value: ADDRESS_TEXT, href: MAPS_URL, external: true, testid: "contact-address-link" },
];

const FIELDS = [
  { k: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
  { k: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
  { k: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 ..." },
];

export default function Contact() {
  usePageMeta(
    "Contact Us | Vastu Vigya",
    "Reach Vastu Vigya — call, WhatsApp, email or visit us at VKI Area, Jaipur."
  );

  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = "Please enter a valid email address";
    if (!/^[+\d][\d\s-]{7,14}$/.test(form.mobile.trim())) er.mobile = "Please enter a valid mobile number";
    if (form.message.trim().length < 10) er.message = "Please share a few details (at least 10 characters)";
    return er;
  };

  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const waText = `Namaste, I am ${form.name}.\n\n${form.message}\n\nEmail: ${form.email}\nMobile: ${form.mobile}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(
    `${form.message}\n\nEmail: ${form.email}\nMobile: ${form.mobile}`
  )}`;

  const inputCls = (k) =>
    `w-full border-b bg-transparent py-3 text-[15px] text-chocolate placeholder:text-taupe/60 outline-none transition-colors duration-300 ${
      errors[k] ? "border-red-700" : "border-chocolate/25 focus:border-gold"
    }`;

  return (
    <>
      <section className="relative z-10 pb-16 pt-40 lg:pb-20 lg:pt-52">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Begin a <em className="gold-text italic">conversation.</em>
            </h1>
            <p className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">
              Call, message or visit — every consultation with Vastu Vigya begins with a simple hello.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24" data-testid="contact-section">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:px-10">
          {/* methods */}
          <div>
            {METHODS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <a
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noreferrer" : undefined}
                  data-testid={m.testid}
                  className="group flex items-center gap-6 border-t border-champagne/15 py-7 transition-colors duration-300 last:border-b hover:border-champagne/50"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/25 text-gold transition-all duration-300 group-hover:border-champagne/70 group-hover:text-champagne">
                    {m.icon}
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">{m.label}</span>
                    <span className="mt-1.5 block text-[15.5px] leading-snug text-ivory/85 transition-colors duration-300 group-hover:text-champagne">
                      {m.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* enquiry form */}
          <Reveal delay={0.1}>
            <div className="bg-ivory p-8 text-chocolate shadow-[0_40px_100px_rgba(0,0,0,0.4)] sm:p-10" data-testid="contact-form-card">
              {sent ? (
                <div data-testid="contact-success">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold">
                    <Check size={20} />
                  </span>
                  <h2 className="mt-6 font-serif text-3xl text-chocolate">Almost there.</h2>
                  <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-chocolate/65">
                    Choose how you'd like to reach us — your enquiry is ready to send exactly as you wrote it.
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <Btn href={`https://wa.me/919982355123?text=${encodeURIComponent(waText)}`} external className="w-full" testid="contact-send-whatsapp">
                      <WhatsAppIcon size={15} /> Send on WhatsApp
                    </Btn>
                    <Btn href={mailHref} variant="dark" className="w-full" testid="contact-send-email">
                      <Mail size={15} /> Send via Email
                    </Btn>
                    <Btn href={PHONE_TEL} variant="dark" className="w-full" testid="contact-call-now">
                      <Phone size={15} /> Call Now
                    </Btn>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    data-testid="contact-edit-details"
                    className="mt-7 text-[12px] font-semibold uppercase tracking-[0.2em] text-chocolate/50 underline underline-offset-4 transition-colors hover:text-chocolate"
                  >
                    Edit your details
                  </button>
                </div>
              ) : (
                <>
                  <Eyebrow dark>Enquiry</Eyebrow>
                  <h2 className="mt-5 font-serif text-3xl text-chocolate sm:text-4xl">Have a question?</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-chocolate/60">
                    Share a few details and choose how you'd like to connect — WhatsApp, email or a direct call.
                  </p>
                  <form className="mt-8 space-y-7" onSubmit={submit} noValidate>
                    {FIELDS.map((f) => (
                      <div key={f.k}>
                        <label htmlFor={`contact-${f.k}`} className="eyebrow font-semibold text-chocolate/55">
                          {f.label}
                        </label>
                        <input
                          id={`contact-${f.k}`}
                          type={f.type}
                          value={form[f.k]}
                          onChange={set(f.k)}
                          placeholder={f.placeholder}
                          data-testid={`contact-input-${f.k}`}
                          className={inputCls(f.k)}
                        />
                        {errors[f.k] && (
                          <p className="mt-2 text-[12px] font-semibold text-red-800" data-testid={`contact-error-${f.k}`}>
                            {errors[f.k]}
                          </p>
                        )}
                      </div>
                    ))}
                    <div>
                      <label htmlFor="contact-message" className="eyebrow font-semibold text-chocolate/55">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows="4"
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell us about your space, name or business..."
                        data-testid="contact-input-message"
                        className={`${inputCls("message")} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-2 text-[12px] font-semibold text-red-800" data-testid="contact-error-message">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <Btn onClick={submit} className="w-full" testid="contact-submit-btn">
                      Continue <WhatsAppIcon size={14} />
                    </Btn>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="relative z-10 pb-24 lg:pb-32" data-testid="contact-map">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="border border-champagne/15 p-2">
              <iframe
                title="Vastu Vigya location — Mojika Midas Touch, VKI Area, Jaipur"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[420px] w-full"
                style={{ border: 0, filter: "grayscale(0.35) sepia(0.22) contrast(0.95)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
