import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Instagram, Mail, MapPin, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./icons/ServiceIcons";
import {
  ADDRESS_TEXT,
  EMAIL,
  EMAIL_MAILTO,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  WHATSAPP_URL,
} from "@/data/content";

const Cell = ({ icon, label, value, href, external, testid, onClick }) => {
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-champagne/25 text-gold transition-colors duration-300 group-hover:border-champagne/60 group-hover:text-champagne">
        {icon}
      </span>
      <span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/40">{label}</span>
        <span className="mt-1 block text-[14px] text-ivory/80 transition-colors duration-300 group-hover:text-champagne">{value}</span>
      </span>
    </>
  );
  const cls = "group flex items-center gap-4 text-left";
  if (onClick)
    return (
      <button type="button" className={cls} data-testid={testid} onClick={onClick}>
        {inner}
      </button>
    );
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cls} data-testid={testid}>
      {inner}
    </a>
  );
};

export default function Footer() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <footer className="relative z-10 border-t border-champagne/10 bg-chocolate-ink">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] lg:gap-10 lg:px-10 lg:py-20">
        <div>
          <Logo />
          <p className="mt-7 max-w-xs text-[14px] leading-relaxed text-ivory/55">
            A premium consultancy uniting the timeless wisdom of Vastu Shastra, Astrology and Numerology — guiding you
            towards harmony, clarity and balance.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-instagram-icon"
            aria-label="Vastu Vigya on Instagram"
            className="mt-7 inline-flex h-11 w-11 items-center justify-center border border-champagne/25 text-gold transition-all duration-300 hover:border-champagne/60 hover:text-champagne"
          >
            <Instagram size={17} />
          </a>
        </div>

        <div>
          <h3 className="eyebrow font-semibold text-gold">Quick Links</h3>
          <ul className="mt-7 space-y-3.5">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about-us" },
              { label: "Our Plans", to: "/our-plans" },
              { label: "Contact Us", to: "/contact-us" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} data-testid={`footer-link-${l.to === "/" ? "home" : l.to.replace("/", "")}`} className="text-[14px] text-ivory/70 transition-colors duration-300 hover:text-champagne">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow font-semibold text-gold">Our Services</h3>
          <ul className="mt-7 space-y-3.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} data-testid={`footer-service-${s.slug}`} className="text-[14px] text-ivory/70 transition-colors duration-300 hover:text-champagne">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow font-semibold text-gold">Get in Touch</h3>
          <div className="mt-7 space-y-6">
            <Cell icon={<Phone size={16} />} label="Call Us" value={PHONE_DISPLAY} onClick={() => setCallOpen(true)} testid="footer-call-btn" />
            <Cell icon={<WhatsAppIcon size={16} />} label="WhatsApp" value={PHONE_DISPLAY} href={WHATSAPP_URL} external testid="footer-whatsapp-link" />
            <Cell icon={<Mail size={16} />} label="Email" value={EMAIL} href={EMAIL_MAILTO} testid="footer-email-link" />
            <Cell icon={<Instagram size={16} />} label="Instagram" value="@vastuvigya" href={INSTAGRAM_URL} external testid="footer-instagram-link" />
            <Cell icon={<MapPin size={16} />} label="Address" value="511, Mojika Midas Touch, VKI Area, Jaipur" href={MAPS_URL} external testid="footer-address-link" />
          </div>
        </div>
      </div>

      <div className="border-t border-champagne/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] tracking-[0.18em] text-ivory/35 sm:flex-row lg:px-10">
          <span data-testid="footer-copyright">© {new Date().getFullYear()} Vastu Vigya. All rights reserved.</span>
          <span className="uppercase">Align your space · Understand your energy · Discover your direction</span>
        </div>
      </div>

      <Dialog open={callOpen} onOpenChange={setCallOpen}>
        <DialogContent
          data-testid="call-modal"
          className="max-w-sm border border-champagne/25 bg-chocolate-dark p-9 text-ivory shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:rounded-none rounded-none"
        >
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl font-medium text-ivory">Call our Vastu Expert</DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-[13px] leading-relaxed text-ivory/55">
            Speak directly with Vastu Vigya for consultations and appointments.
          </p>
          <p className="mt-5 font-serif text-[1.7rem] tracking-wide text-champagne" data-testid="call-modal-number">
            {PHONE_DISPLAY}
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href={PHONE_TEL}
              data-testid="call-modal-dial"
              className="inline-flex flex-1 items-center justify-center gap-2 bg-champagne px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-chocolate-ink transition-colors duration-300 hover:bg-gold hover:text-ivory"
            >
              <Phone size={14} /> Call Now
            </a>
            <button
              type="button"
              data-testid="call-modal-close"
              onClick={() => setCallOpen(false)}
              className="inline-flex items-center justify-center gap-2 border border-champagne/30 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-champagne transition-colors duration-300 hover:bg-champagne/10"
            >
              <X size={14} /> Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
