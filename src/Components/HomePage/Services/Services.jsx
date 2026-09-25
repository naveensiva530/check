// src/components/Services.jsx

import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../common.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollRevealHeading from '../../Services/common/ScrollRevealHeading';

// Import all service images from assets/HomePage/Services folder
import socialMediaImg from "../../../assets/HomePage/Services/Social Media Marketing.webp";
import performanceImg from "../../../assets/HomePage/Services/Performance marketing.webp";
import websiteDevImg from "../../../assets/HomePage/Services/Website Development.webp";
import influencerImg from "../../../assets/HomePage/Services/Influncer Marketing.webp";
import seoImg from "../../../assets/HomePage/Services/SEO.webp";
import videoImg from "../../../assets/HomePage/Services/Video Production.webp";
import brandingImg from "../../../assets/Services/Branding Solution.webp";
import consultingImg from "../../../assets/HomePage/Services/Digital consulting.webp";
import contentImg from "../../../assets/HomePage/Services/Content Writing.webp";
import instagramImg from "../../../assets/HomePage/Services/Instragram marketing.webp";

gsap.registerPlugin(ScrollTrigger);

import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Megaphone,
  UserCog,
  PersonStanding,
  Globe,
} from "lucide-react";

const services = [
  {
    num: "01", tag: "MARKETING", title: "Social Media\nMarketing", icon: Globe,
    image: socialMediaImg, desc: "Build a social presence with strategy, content, community, and platform-native creative.", cta: "Explore Social Media Marketing", path: "/services/social-media-marketing"
  },
  {
    num: "02", tag: "ADS", title: "Performance\nMarketing", icon: ArrowUpRight,
    image: performanceImg, desc: "Put paid campaigns, targeting, creative testing, and conversion thinking behind your growth goals.", cta: "Explore Performance Marketing", path: "/services/performance-marketing"
  },
  {
    num: "03", tag: "WEB", title: "Website\nDevelopment", icon: UserCog,
    image: websiteDevImg, desc: "Build websites that look sharp, work smoothly, communicate clearly, and give visitors a reason to take the next step.", cta: "Explore Website Development", path: "/services/website-development"
  },
  {
    num: "04", tag: "INFLUENCER", title: "Influencer\nMarketing", icon: PersonStanding,
    image: influencerImg, desc: "Connect brands with relevant creators and audiences through purposeful creator-led campaigns.", cta: "Explore Influencer Marketing", path: "/services/influencer-marketing"
  },
  {
    num: "05", tag: "SEO", title: "SEO\nServices", icon: Megaphone,
    image: seoImg, desc: "Make your brand easier to discover through search-focused strategy, technical optimisation, content, and authority building.", cta: "Explore SEO Services", path: "/services/seo-services"
  },
  {
    num: "06", tag: "VIDEO", title: "Video\nProduction", icon: UserCog,
    image: videoImg, desc: "Turn ideas, products, people, and stories into visual content built for modern digital platforms.", cta: "Explore Video Production", path: "/services/video-production"
  },
  {
    num: "07", tag: "BRANDING", title: "Branding\nSolutions", icon: Megaphone,
    image: brandingImg, desc: "Create a clearer identity, stronger visual language, and more consistent brand experience.", cta: "Explore Branding Solutions", path: "/services/branding-solutions"
  },
  {
    num: "08", tag: "CONSULTING", title: "Digital\nConsulting", icon: PersonStanding,
    image: consultingImg, desc: "Get practical digital direction when you need clarity on strategy, channels, technology, or growth.", cta: "Explore Digital Consulting", path: "/services/digital-consulting"
  },
  {
    num: "09", tag: "CONTENT", title: "Content\nWriting", icon: Megaphone,
    image: contentImg, desc: "Give your brand useful, persuasive, search-friendly content that sounds like a human wrote it.", cta: "Explore Content Writing", path: "/services/content-writing"
  },
  {
    num: "10", tag: "SOCIAL", title: "Instagram\nMarketing", icon: Globe,
    image: instagramImg, desc: "Build an Instagram presence around content, audience behaviour, creative formats, and platform-specific strategy.", cta: "Explore Instagram Marketing", path: "/services/instagram-marketing"
  }
];

// ─── carousel config ──────────────────────────────────────────
const TOTAL = services.length;

export default function Services() {
  const [cardsPerView, setCardsPerView] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 4;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CLONE_COUNT = cardsPerView;
  const EXT_LEN = TOTAL + CLONE_COUNT * 2;

  const extendedCards = [
    ...services.slice(-CLONE_COUNT).map((s, i) => ({ ...s, _key: `cs${i}` })),
    ...services.map((s) => ({ ...s, _key: s.num })),
    ...services.slice(0, CLONE_COUNT).map((s, i) => ({ ...s, _key: `ce${i}` })),
  ];

  const [idx, setIdx] = useState(CLONE_COUNT);
  const [animated, setAnimated] = useState(true);
  const [hoveredKey, setHoveredKey] = useState(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      next();
    } else if (diff < -45) {
      prev();
    }
  };

  const handleExploreAllServices = () => {
    window.dispatchEvent(new CustomEvent("open-services-menu"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Bug fix: only react to the track's own "transform" transition end ──
  const handleTransitionEnd = useCallback((e) => {
    if (e.target !== trackRef.current) return;
    if (e.propertyName !== "transform") return;

    setAnimated(false);
    setIdx((prev) => {
      if (prev >= TOTAL + CLONE_COUNT) return prev - TOTAL;
      if (prev < CLONE_COUNT) return prev + TOTAL;
      return prev;
    });
  }, [CLONE_COUNT]);

  useEffect(() => {
    if (!animated) {
      let raf1 = requestAnimationFrame(() => {
        let raf2 = requestAnimationFrame(() => setAnimated(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [animated]);

  const next = () => setIdx((p) => p + 1);
  const prev = () => setIdx((p) => p - 1);

  const translateX = `calc(-${idx} / ${EXT_LEN} * 100%)`;

  // Scroll-triggered entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading block slides up
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Carousel fades + scales in
      gsap.fromTo(
        carouselRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-40 lg:pb-64 px-4 pt-32 md:pt-40"
      style={{ background: "var(--bg-light-purple)", fontFamily: "var(--font-primary)" }}
    >
      <div className="relative mx-auto max-w-7xl z-20">

        {/* ── TOP BAR: heading + responsive arrows ── */}
        <div ref={headingRef} className="relative mb-10 sm:mb-14 flex flex-col items-start justify-start text-left">
          <div className="w-full flex items-center justify-between gap-4 mb-3">
            {/* Eyebrow — ⊕ icon + italic Playfair serif */}
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="text-[13px] sm:text-[16px] italic font-medium text-[#1a233a]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                OUR CAPABILITIES
              </span>
            </div>

            {/* ARROWS — responsive size and tap targets */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              <button
                onClick={prev}
                aria-label="Previous service"
                className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 cursor-pointer"
                style={{ border: "1px solid var(--border-gray)", background: "var(--primary-white)", color: "var(--text-dark-blue)" }}
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next service"
                className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 cursor-pointer"
                style={{ background: "var(--accent-orange)", color: "#fff" }}
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* title */}
          <ScrollRevealHeading
            className=""
            words={[
              { text: 'Everything' },
              { text: 'your' },
              { text: 'digital', italic: true },
              { text: 'presence', italic: true },
              { text: 'needs.' },
              { break: true },
              { text: 'Nothing' },
              { text: 'it' },
              { text: "doesn't." },
            ]}
            style={{ fontSize: 'clamp(1.55rem, 3vw, 2.9rem)' }}
          />

          {/* subtitle */}
          <p
            className="text-[13px] sm:text-[15px] font-medium mt-3 max-w-[560px] leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            Different businesses need different combinations of digital marketing. Start with the problem, then build the right solution around it.
          </p>
        </div>

        {/* ── CAROUSEL VIEWPORT ─────────────────────────── */}
        <div
          ref={carouselRef}
          style={{ overflow: "hidden", paddingTop: "2.5rem", marginTop: "-2.5rem", touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/*
            Track width = EXT_LEN / cardsPerView × 100% of viewport
          */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              alignItems: "stretch",
              width: `calc(${EXT_LEN} / ${cardsPerView} * 100%)`,
              transform: `translateX(${translateX})`,
              transition: animated ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              willChange: "transform",
            }}
          >
            {extendedCards.map((s) => {
              const Icon = s.icon;
              const isHovered = hoveredKey === s._key;

              return (
                <div
                  key={s._key}
                  className="services-card-item group relative flex-shrink-0 px-4 flex flex-col cursor-pointer"
                  style={{
                    width: `calc(100% / ${EXT_LEN})`,
                    transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                    transition: "transform 0.22s ease",
                  }}
                  onMouseEnter={() => setHoveredKey(s._key)}
                  onMouseLeave={() => setHoveredKey(null)}
                  onClick={() => navigate(s.path)}
                >
                  {/* FLOATING ICON */}
                  <div
                    className="absolute -top-6 left-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
                    style={{
                      // Default: orange bg, white icon
                      // Hover:   white bg, orange icon
                      background: isHovered ? "#fff" : "var(--accent-orange)",
                      transform: `translateX(-50%) scale(${isHovered ? 1.12 : 1})`,
                      transition: "background 0.22s ease, transform 0.22s ease",
                      boxShadow: isHovered ? "0 8px 24px rgba(224,131,38,0.35)" : undefined,
                    }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{
                        color: isHovered ? "var(--accent-orange)" : "#fff",
                        transition: "color 0.22s ease",
                      }}
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className="relative overflow-hidden border shadow-2xl rounded-tl-[150px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] flex flex-col flex-1"
                    style={{
                      background: isHovered ? "var(--text-dark-blue)" : "var(--primary-white)",
                      border: isHovered ? "1px solid transparent" : "1px solid var(--border-gray-light)",
                      transition: "background 0.22s ease, border 0.22s ease, box-shadow 0.22s ease",
                      boxShadow: isHovered ? "0 25px 60px rgba(26,26,64,0.35)" : undefined,
                    }}
                  >
                    {/* CONTENT */}
                    <div className="p-6 pt-10">
                      <div
                        className="text-right text-5xl font-bold"
                        style={{
                          color: isHovered ? "var(--accent-orange)" : "var(--text-gray)",
                          transition: "color 0.22s ease",
                        }}
                      >
                        {s.num}
                      </div>
                      <p
                        className="mt-6 text-xs font-semibold uppercase tracking-[3px]"
                        style={{
                          color: isHovered ? "rgba(255,255,255,0.65)" : "var(--text-gray)",
                          transition: "color 0.22s ease",
                        }}
                      >
                        {s.tag}
                      </p>
                      <h3
                        className="mt-3 whitespace-pre-line text-2xl font-bold leading-snug"
                        style={{
                          color: isHovered ? "#fff" : "var(--text-dark-blue)",
                          transition: "color 0.22s ease",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="mt-3 text-[13px] leading-relaxed font-medium"
                        style={{
                          color: isHovered ? "rgba(255,255,255,0.8)" : "var(--text-gray)",
                          transition: "color 0.22s ease",
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>

                    {/* IMAGE — fills remaining card space */}
                    <div className="relative mt-4 flex-1" style={{ minHeight: 0 }}>
                      <div className="relative overflow-hidden rounded-tr-[150px] h-full">
                        <img
                          src={s.image}
                          alt={s.title.replace("\n", " ")}
                          loading="lazy"
                          decoding="async"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            transform: isHovered ? "scale(1.1)" : "scale(1)",
                            transition: "transform 0.4s ease",
                          }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: isHovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.1)",
                            transition: "background 0.22s ease",
                          }}
                        />
                        <button
                          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center shadow-lg rounded-[20px] transition-all duration-300 hover:rotate-45 hover:scale-110"
                          style={{ background: "var(--accent-orange)", color: "#fff" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(s.path);
                          }}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* GLOW */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.25s ease" }}
                    >
                      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full blur-3xl" style={{ background: "rgba(255,107,157,0.15)" }} />
                      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full blur-3xl" style={{ background: "rgba(224,131,38,0.2)" }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore All Services — below carousel */}
        <div className="flex justify-center mt-12">
          <button
            className="know-more-btn"
            onClick={handleExploreAllServices}
          >
            <span>Explore All Services</span>
            <div className="know-more-icon">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </button>
        </div>

      </div>

      {/* ── Bottom Arch Curve ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[80px] md:h-[130px]"
        >
          <path d="M0,130 Q720,-10 1440,130 L1440,130 L0,130 Z" fill="#ffffff" />
        </svg>
      </div>

    </section>
  );
}
