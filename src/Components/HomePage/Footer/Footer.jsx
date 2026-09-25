import React, { useRef, useEffect } from "react";
import { ArrowUp, ChevronRight } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import ButtonWithIcon from "../../ui/button-with-icon";
import { usePopup } from "../../context/PopupContext";
import "../common.css";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Social Media Marketing", path: "/services/social-media-marketing" },
  { label: "Performance Marketing", path: "/services/performance-marketing" },
  { label: "Website Development", path: "/services/website-development" },
  { label: "Influencer Marketing", path: "/services/influencer-marketing" },
  { label: "SEO Services", path: "/services/seo-services" },
  { label: "Video Production", path: "/services/video-production" },
  { label: "Branding Solutions", path: "/services/branding-solutions" },
  { label: "Digital Consulting", path: "/services/digital-consulting" },
  { label: "Content Writing", path: "/services/content-writing" },
  { label: "Instagram Marketing", path: "/services/instagram-marketing" },
];



const linkStyle = { color: "rgba(255,255,255,0.7)", textDecoration: "none" };
const linkHoverIn = (e) => (e.currentTarget.style.color = "var(--accent-orange)");
const linkHoverOut = (e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)");

export default function Footer() {
  const { openPopup } = usePopup();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative" style={{ fontFamily: "var(--font-primary)" }}>
      {/* ── MAIN FOOTER ─────────────────────────────────────────────── */}
      <div
        className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
        style={{ background: "var(--text-dark-blue)", color: "#fff" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-5" style={{ background: "var(--accent-orange)" }} />
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 relative z-10">

          {/* ── Col 1: Brand (Span 4) ── */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">ADSSERV</span>
            </div>

            <p className="text-[14px] sm:text-[14.5px] font-medium leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              ADSSERV is a Gen Z digital marketing agency helping brands grow through social media, SEO, paid advertising, websites, branding, content, creators, and digital strategy.
            </p>

            <div className="mt-2 sm:mt-4">
              <ButtonWithIcon onClick={openPopup}>Start a Project</ButtonWithIcon>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-1 mt-1" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px" }}>
              <a
                href="mailto:connect@adsserv.in"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                onMouseEnter={linkHoverIn}
                onMouseLeave={linkHoverOut}
              >
                connect@adsserv.in
              </a>
              <span>Tamil Nadu, India</span>
            </div>
          </div>

          {/* ── Col 2: Quick Links (Span 2) ── */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] sm:text-[17px] font-bold mb-4 sm:mb-5 text-white">Quick Links</h3>
            <div className="w-8 h-[3px] mb-5 sm:mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 group min-h-[44px] py-1"
                    style={linkStyle}
                    onMouseEnter={linkHoverIn}
                    onMouseLeave={linkHoverOut}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services (Span 4) ── */}
          <div className="lg:col-span-4">
            <h3 className="text-[16px] sm:text-[17px] font-bold mb-4 sm:mb-5 text-white">Services</h3>
            <div className="w-8 h-[3px] mb-5 sm:mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
              {servicesLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 group min-h-[44px] py-1"
                    style={linkStyle}
                    onMouseEnter={linkHoverIn}
                    onMouseLeave={linkHoverOut}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ── Col 4: Industries (Span 2) ── */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] sm:text-[17px] font-bold mb-4 sm:mb-5 text-white">Industries</h3>
            <div className="w-8 h-[3px] mb-5 sm:mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="flex flex-col gap-1">
              {[
                { name: "Health Care", path: "/industries/health-care" },
                { name: "Real Estate", path: "/industries/real-estate" },
                { name: "Education", path: "/industries/education" },
                { name: "IT-Tech / SaaS", path: "/industries/it-tech-saas" },
                { name: "Beauty & Salon", path: "/industries/beauty-salon" },
              ].map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 group min-h-[44px] py-1"
                    style={linkStyle}
                    onMouseEnter={linkHoverIn}
                    onMouseLeave={linkHoverOut}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="max-w-[1200px] mx-auto mt-12 sm:mt-20 mb-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── BOTTOM STRIP ────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--accent-orange)" }}>
        {/* Back to top */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg group cursor-pointer"
            style={{ background: "var(--text-dark-blue)", border: "2px solid var(--accent-orange)", color: "#fff" }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div
          className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-5 md:py-5 flex flex-col md:flex-row items-center justify-between text-[13px] sm:text-[14.5px] font-medium text-center md:text-left"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          <p>&copy; 2026 <span className="font-bold">ADSSERV.</span> All rights reserved. | Website developed by <span className="font-bold">ADSSERV</span></p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-3 md:mt-0">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:underline transition-all min-h-[44px] flex items-center" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} className="hover:underline transition-all min-h-[44px] flex items-center" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Terms &amp; Conditions</Link>
            <Link to="/refund-cancellation" onClick={() => window.scrollTo(0, 0)} className="hover:underline transition-all min-h-[44px] flex items-center" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Refund &amp; Cancellation Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}


