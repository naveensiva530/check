import React from 'react';
import { Search, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/All the Hero Section bg/FAQ(1).webp';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

export default function FAQHero({ searchQuery, onSearchChange }) {
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    fadeUp([refs.eyebrow, refs.heading, refs.copy, refs.ctas, refs.search], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.1,
    });
  });

  return (
    <>
      {/* ── BANNER HERO ─────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: 'clamp(220px, 35vw, 420px)', marginTop: 'clamp(60px, 10vw, 90px)' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url("${bgImage}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />

        {/* Decorative blobs */}
        <div className="absolute z-[2]" style={{ top: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(196,181,253,0.18)', filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite' }} />
        <div className="absolute z-[2]" style={{ bottom: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(167,139,250,0.20)', filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse' }} />

        {/* Title + breadcrumb */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="font-extrabold text-white mb-4 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}
          >
            FAQ'S
          </h1>
          <div
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1"
            style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}
          >
            <Link to="/" className="flex items-center gap-1 sm:gap-1.5 transition-opacity hover:opacity-70" style={{ color: '#fb923c', fontWeight: 700, fontSize: '14px' }}>
              <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[13px] sm:text-[16px] font-semibold" style={{ color: '#1e2f57' }}>FAQ</span>
          </div>
        </div>

        {/* White curve at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '60px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>

        <style>{`
          @keyframes floatBlob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.08) translate(10px, -10px); }
          }
        `}</style>
      </div>

      {/* ── EDITORIAL CONTENT SECTION (mirrors ContactHero exactly) ── */}
      <section ref={sectionRef} className="w-full bg-white pt-8 sm:pt-16 pb-10 sm:pb-20 px-4 md:px-8 font-primary">
        <div className="max-w-[1200px] mx-auto">

          {/* Eyebrow */}
          <div ref={ref('eyebrow')} className="flex items-center gap-2 mb-4 sm:mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[12px] sm:text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange, #e08326)' }}
            >
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Heading — full width, same as Contact */}
          <div ref={ref('heading')}>
            <ScrollRevealHeading
              className="mb-6 sm:mb-10"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              words={[
                { text: "Questions" },
                { text: "About" },
                { text: "Digital" },
                { text: "Marketing?" },
                { text: "Start" },
                { text: "Here.", italic: true }
              ]}
            />
          </div>

          {/* Two-Column text → stacks on mobile (exactly like ContactHero) */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 mb-10 sm:mb-14">
            <div className="flex-1">
              <p ref={ref('copy')} className="leading-relaxed font-medium text-[14px] sm:text-[16px] md:text-[20px]" style={{ color: '#334155' }}>
                From SEO and social media to paid advertising, websites, branding and content — here are answers to the questions businesses commonly ask before choosing a digital marketing partner.
              </p>
            </div>
            <div className="flex-1">
              <p className="leading-relaxed mb-6 sm:mb-8 text-[13px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>
                If you cannot find what you are looking for, talk to our team and tell us what you are trying to achieve.
              </p>

              {/* CTAs — full width on mobile, exactly like ContactHero */}
              <div ref={ref('ctas')} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <div className="w-full sm:w-auto">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <button
                      className="w-full flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 text-[14px] sm:text-[15px]"
                      style={{ background: 'var(--brand-orange, #e08326)' }}
                    >
                      <span>Ask Our Team</span>
                    </button>
                  </Link>
                </div>
                <Link
                  to="/services"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 font-bold rounded-full border-2 transition-all duration-300 text-[14px] sm:text-[15px]"
                  style={{ color: 'var(--brand-navy, #1e2f57)', borderColor: 'rgba(30,47,87,0.20)', background: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-navy, #1e2f57)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(30,47,87,0.20)'; }}
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Search Box — full width below */}
          <div ref={ref('search')} className="w-full relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl overflow-hidden bg-white border border-gray-100 p-2">
            <div className="relative flex items-center">
              <Search className="absolute left-3 sm:left-4 w-5 h-5 text-orange-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search all questions (e.g. SEO, Instagram, cost)..."
                className="w-full pl-10 sm:pl-13 pr-10 py-3 sm:py-4 bg-gray-50/50 hover:bg-gray-50 focus:bg-white text-slate-800 placeholder:text-slate-400 rounded-xl text-[13px] sm:text-[15px] font-medium outline-none border border-transparent focus:border-orange-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 sm:right-4 text-xs font-bold uppercase tracking-wider bg-gray-200 hover:bg-gray-300 text-slate-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-orange-500 text-left border-t border-gray-100 mt-2 flex items-center justify-between">
                <span>Filter active for: "{searchQuery}"</span>
                <span className="text-slate-400 font-medium text-xs">Click clear to reset</span>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

