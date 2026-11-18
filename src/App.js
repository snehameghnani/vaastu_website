import { Component, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import CelestialBackground from "@/components/CelestialBackground";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ServicesIndex from "@/pages/ServicesIndex";
import ServicePage from "@/pages/ServicePage";
import Plans from "@/pages/Plans";
import Contact from "@/pages/Contact";
import { SERVICES } from "@/data/content";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.error(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-chocolate-deep px-6 text-center">
          <p className="font-serif text-3xl text-champagne">Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
  return null;
};

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SmoothScroll />
        <ScrollManager />
        <div className="relative min-h-screen bg-chocolate-deep">
          <CelestialBackground />
          <div className="grain-overlay" aria-hidden="true" />
          <Cursor />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<ServicesIndex />} />
              {SERVICES.map((s) => (
                <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
              ))}
              <Route path="/our-plans" element={<Plans />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
