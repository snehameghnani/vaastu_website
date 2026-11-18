import { WhatsAppIcon } from "./icons/ServiceIcons";
import { waLink } from "@/data/content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello, I would like to consult our expert.")}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat with Vastu Vigya on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 lg:bottom-8 lg:right-8"
    >
      <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap border border-champagne/0 bg-champagne py-3.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-chocolate-ink opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:max-w-[220px] group-hover:px-5 group-hover:opacity-100 sm:block">
        Consult Our Expert
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-chocolate-ink shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110">
        <span className="wa-ping absolute inset-0 rounded-full border border-champagne/60" aria-hidden="true" />
        <WhatsAppIcon size={24} />
      </span>
    </a>
  );
}
