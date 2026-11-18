import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { ServiceIcon, WhatsAppIcon } from "./icons/ServiceIcons";
import { NAV_LINKS, SERVICES, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/content";

const linkCls = ({ isActive }) =>
  `text-[11.5px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
    isActive ? "text-champagne" : "text-ivory/65 hover:text-champagne"
  }`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
  const [mSvc, setMSvc] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSvc(false);
    setMSvc(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-champagne/10 bg-chocolate-ink/85 py-3 backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Logo compact={scrolled} />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative" onMouseEnter={() => setSvc(true)} onMouseLeave={() => setSvc(false)}>
                  <NavLink to={item.to} className={linkCls} data-testid="nav-services">
                    <span className="flex items-center gap-1.5">
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-300 ${svc ? "rotate-180" : ""}`} />
                    </span>
                  </NavLink>
                  <AnimatePresence>
                    {svc && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-5"
                      >
                        <div className="border border-champagne/15 bg-chocolate-ink/95 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                          {SERVICES.map((s, i) => (
                            <Link
                              key={s.slug}
                              to={`/${s.slug}`}
                              data-testid={`service-link-${s.slug}`}
                              className="group flex items-center gap-4 px-4 py-3 transition-colors duration-200 hover:bg-champagne/5"
                            >
                              <span className="text-gold transition-colors duration-200 group-hover:text-champagne">
                                <ServiceIcon name={s.icon} size={20} />
                              </span>
                              <span className="flex-1 font-serif text-lg text-ivory/85 group-hover:text-champagne">{s.title}</span>
                              <ArrowUpRight size={14} className="text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} end={item.to === "/"} className={linkCls} data-testid={`nav-${item.to === "/" ? "home" : item.to.replace("/", "")}`}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={waLink("Hello, I would like to consult our expert.")}
              target="_blank"
              rel="noreferrer"
              data-testid="nav-cta-expert"
              className="hidden items-center gap-2.5 border border-champagne/40 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-champagne transition-all duration-300 hover:bg-champagne hover:text-chocolate-ink xl:inline-flex"
            >
              <WhatsAppIcon size={15} />
              Consult Our Expert
            </a>
            {open ? (
              <button
                type="button"
                data-testid="nav-menu-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-colors duration-300 hover:bg-champagne/10 lg:hidden"
              >
                <X size={21} strokeWidth={1.6} />
              </button>
            ) : (
              <button
                type="button"
                data-testid="nav-hamburger"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
              >
                <span className="h-px w-7 bg-champagne transition-all duration-300" />
                <span className="h-px w-7 bg-champagne transition-all duration-300" />
              </button>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col overflow-y-auto bg-chocolate-ink lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-1 flex-col justify-center px-8 pb-10 pt-8">
              {NAV_LINKS.map((item, i) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      data-testid="mobile-services-toggle"
                      onClick={() => setMSvc(!mSvc)}
                      className="flex w-full items-center justify-between border-b border-champagne/10 py-4 text-left font-serif text-3xl text-ivory"
                    >
                      Services
                      <ChevronDown size={20} className={`text-gold transition-transform duration-300 ${mSvc ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mSvc && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/${s.slug}`}
                              data-testid={`mobile-service-link-${s.slug}`}
                              className="flex items-center gap-4 border-b border-champagne/5 py-3.5 pl-4 text-[15px] text-ivory/70"
                            >
                              <span className="text-gold"><ServiceIcon name={s.icon} size={18} /></span>
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.to}
                      data-testid={`mobile-nav-${item.to === "/" ? "home" : item.to.replace("/", "")}`}
                      className="block border-b border-champagne/10 py-4 font-serif text-3xl text-ivory"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 px-8 pb-12">
              <a
                href={PHONE_TEL}
                data-testid="mobile-menu-call"
                className="flex items-center justify-center gap-2 border border-champagne/30 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-champagne"
              >
                <Phone size={14} /> Call Now
              </a>
              <a
                href={waLink("Hello, I would like to consult our expert.")}
                target="_blank"
                rel="noreferrer"
                data-testid="mobile-menu-whatsapp"
                className="flex items-center justify-center gap-2 bg-champagne py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-chocolate-ink"
              >
                <WhatsAppIcon size={14} /> WhatsApp
              </a>
              <p className="col-span-2 pt-2 text-center text-[11px] tracking-[0.2em] text-ivory/40">{PHONE_DISPLAY}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
