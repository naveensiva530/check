import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight, Megaphone, UserCog, PersonStanding, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../Components/HomePage/common.css';

import socialMediaImg from '../../assets/Services/Social Media Marketing.webp';
import performanceImg from '../../assets/Services/Performance marketing.webp';
import websiteDevImg from '../../assets/Services/Website Development.webp';
import influencerImg from '../../assets/Services/Influncer Marketing.webp';
import seoImg from '../../assets/Services/SEO.webp';
import videoImg from '../../assets/Services/Video Production.webp';
import brandingImg from '../../assets/Services/Branding Solution.webp';
import consultingImg from '../../assets/Services/Digital consulting.webp';
import contentImg from '../../assets/Services/Content Writing.webp';
import instagramImg from '../../assets/Services/Instragram marketing.webp';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { num: "01", tag: "MARKETING", title: "Social Media\nMarketing", icon: Globe, image: socialMediaImg, desc: "Strategy, content, platform management, and audience engagement.", path: "/services/social-media-marketing" },
  { num: "02", tag: "ADS", title: "Performance\nMarketing", icon: ArrowUpRight, image: performanceImg, desc: "Paid campaigns, creative testing, targeting, optimisation, and conversion-focused execution.", path: "/services/performance-marketing" },
  { num: "03", tag: "WEB", title: "Website\nDevelopment", icon: UserCog, image: websiteDevImg, desc: "Web experiences designed around usability, communication, performance, and conversion.", path: "/services/website-development" },
  { num: "04", tag: "INFLUENCER", title: "Influencer\nMarketing", icon: PersonStanding, image: influencerImg, desc: "Creator partnerships and campaigns designed around relevance and audience fit.", path: "/services/influencer-marketing" },
  { num: "05", tag: "SEO", title: "SEO\nServices", icon: Megaphone, image: seoImg, desc: "Search strategy, technical optimisation, content, authority, and organic visibility.", path: "/services/seo-services" },
  { num: "06", tag: "VIDEO", title: "Video\nProduction", icon: UserCog, image: videoImg, desc: "Visual storytelling for social, campaigns, brands, products, and digital platforms.", path: "/services/video-production" },
  { num: "07", tag: "BRANDING", title: "Branding\nSolutions", icon: Megaphone, image: brandingImg, desc: "Brand identity, visual direction, positioning, and consistent digital expression.", path: "/services/branding-solutions" },
  { num: "08", tag: "CONSULTING", title: "Digital\nConsulting", icon: PersonStanding, image: consultingImg, desc: "Practical guidance for businesses that need clarity around digital strategy and execution.", path: "/services/digital-consulting" },
  { num: "09", tag: "CONTENT", title: "Content\nWriting", icon: Megaphone, image: contentImg, desc: "Useful, persuasive, brand-aligned, and search-aware content.", path: "/services/content-writing" },
  { num: "10", tag: "SOCIAL", title: "Instagram\nMarketing", icon: Globe, image: instagramImg, desc: "Platform-specific strategy and content designed around how people actually use Instagram.", path: "/services/instagram-marketing" }
];

const TOTAL = capabilities.length;

export default function Capabilities() {
  const navigate = useNavigate();
  const [cardsPerView, setCardsPerView] = useState(() => {
    if (typeof window !== 'undefined') {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CLONE_COUNT = cardsPerView;
  const EXT_LEN = TOTAL + CLONE_COUNT * 2;

  const extendedCards = [
    ...capabilities.slice(-CLONE_COUNT).map((s, i) => ({ ...s, _key: `cs${i}` })),
    ...capabilities.map((s) => ({ ...s, _key: s.num })),
    ...capabilities.slice(0, CLONE_COUNT).map((s, i) => ({ ...s, _key: `ce${i}` })),
  ];

  const [idx, setIdx] = useState(CLONE_COUNT);
  const [animated, setAnimated] = useState(true);
  const [hoveredKey, setHoveredKey] = useState(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) next();
    else if (diff < -45) prev();
  };

  const handleTransitionEnd = useCallback((e) => {
    if (e.target !== trackRef.current) return;
    if (e.propertyName !== 'transform') return;
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo(
        carouselRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-capabilities"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden pb-40 lg:pb-64 px-4 pt-32 md:pt-40"
      style={{ background: 'var(--bg-light-purple)', fontFamily: 'var(--font-primary)' }}
    >
      <div className="relative mx-auto max-w-7xl z-20">

        {/* ── TOP BAR: eyebrow + heading + paragraph + arrows ── */}
        {/* ── TOP BAR: heading + responsive arrows ── */}
        <div ref={headingRef} className="relative mb-10 sm:mb-14 flex flex-col items-start justify-start text-left">
          <div className="w-full flex items-center justify-between gap-4 mb-3">
            {/* Eyebrow — ⊕ icon + italic Playfair serif */}
            <div className="about-eyebrow flex items-center gap-2">
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
          <h2
            className="text-[26px] sm:text-[38px] md:text-[46px] font-extrabold leading-[1.15] tracking-tight max-w-[700px]"
            style={{ color: "var(--text-dark-blue)" }}
          >
            From first impression to next action.
          </h2>

          {/* subtitle */}
          <p
            className="text-[13px] sm:text-[15px] font-medium mt-3 max-w-[560px] leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            ADSSERV brings multiple digital capabilities together so brands can solve connected problems without having to treat every part of their digital presence as a separate project.
          </p>
        </div>

        {/* ── CAROUSEL VIEWPORT ────────────────── */}
        <div
          ref={carouselRef}
          style={{ overflow: 'hidden', paddingTop: '2.5rem', marginTop: '-2.5rem', touchAction: 'pan-y' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              width: `calc(${EXT_LEN} / ${cardsPerView} * 100%)`,
              transform: `translateX(${translateX})`,
              transition: animated ? 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              willChange: 'transform',
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
                    transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={() => setHoveredKey(s._key)}
                  onMouseLeave={() => setHoveredKey(null)}
                  onClick={() => {
                    if (isSwiping.current) return;
                    navigate(s.path);
                    window.scrollTo(0, 0);
                  }}
                >
                  {/* FLOATING ICON */}
                  <div
                    className="absolute -top-6 left-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
                    style={{
                      background: isHovered ? '#fff' : 'var(--accent-orange)',
                      transform: `translateX(-50%) scale(${isHovered ? 1.12 : 1})`,
                      transition: 'background 0.4s ease, transform 0.4s ease',
                      boxShadow: isHovered ? '0 8px 24px rgba(224,131,38,0.35)' : undefined,
                    }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{
                        color: isHovered ? 'var(--accent-orange)' : '#fff',
                        transition: 'color 0.4s ease',
                      }}
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className="relative overflow-hidden border shadow-2xl rounded-tl-[150px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] flex flex-col flex-1"
                    style={{
                      background: isHovered ? 'var(--text-dark-blue, #1a2f57)' : 'var(--primary-white, #ffffff)',
                      border: isHovered ? '1px solid transparent' : '1px solid var(--border-gray-light, rgba(11,31,82,0.08))',
                      transition: 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease',
                      boxShadow: isHovered ? '0 25px 60px rgba(26,26,64,0.35)' : undefined,
                    }}
                  >
                    {/* CONTENT */}
                    <div className="p-6 pt-10">
                      <div
                        className="text-right text-5xl font-bold"
                        style={{
                          color: isHovered ? 'var(--accent-orange, #e08326)' : 'var(--text-gray, #94a3b8)',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        {s.num}
                      </div>
                      <p
                        className="mt-6 text-xs font-semibold uppercase tracking-[3px]"
                        style={{
                          color: isHovered ? 'rgba(255,255,255,0.65)' : 'var(--text-gray, #64748b)',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        {s.tag}
                      </p>
                      <h3
                        className="mt-3 whitespace-pre-line text-2xl font-bold leading-snug"
                        style={{
                          color: isHovered ? '#fff' : 'var(--text-dark-blue, #1a2f57)',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="mt-3 text-[13px] leading-relaxed font-medium"
                        style={{
                          color: isHovered ? 'rgba(255,255,255,0.8)' : 'var(--text-gray, #475569)',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div className="relative mt-4 flex-1" style={{ minHeight: 0 }}>
                      <div className="relative overflow-hidden rounded-tr-[150px] h-full">
                        <img
                          src={s.image}
                          alt={s.title.replace('\n', ' ')}
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.7s ease',
                          }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: isHovered ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.1)',
                            transition: 'background 0.4s ease',
                          }}
                        />
                        <div
                          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center shadow-lg rounded-[20px] transition-all duration-300 group-hover:rotate-45 group-hover:scale-110"
                          style={{ background: 'var(--accent-orange)', color: '#fff' }}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* GLOW */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.5s ease' }}
                    >
                      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full blur-3xl" style={{ background: 'rgba(255,107,157,0.15)' }} />
                      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full blur-3xl" style={{ background: 'rgba(224,131,38,0.2)' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore All Services */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center mt-12 w-full">
          <div className="w-full sm:w-auto">
            <Link to="/services" className="know-more-btn w-full sm:w-auto justify-center">
              <span>Explore All Services</span>
              <div className="know-more-icon">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
