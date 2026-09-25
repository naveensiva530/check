import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import ButtonWithIcon from '../ui/button-with-icon';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import bgImage from '../../assets/All the Hero Section bg/Projects.webp';
import '../../Components/HomePage/common.css';

export default function ProjectsHero({ onExploreClick }) {
  return (
    <>
      {/* ── BANNER HERO ─────────────────────────────────────────── */}
      <div className="page-hero-banner relative w-full flex items-center justify-center overflow-hidden">
        <img
          src={bgImage}
          alt="Our Projects"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />
        <div
          className="absolute z-[2] pointer-events-none"
          style={{
            bottom: '10px', right: '12%', width: '200px', height: '200px',
            borderRadius: '50%', background: 'rgba(99,102,241,0.25)',
            filter: 'blur(45px)', animation: 'floatBlob 9s ease-in-out infinite reverse',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1 bg-white">
            <Link to="/" className="uiverse-home-btn">
              <Home strokeWidth={2.5} />
              <p>Home</p>
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[13px] sm:text-[15px] font-semibold text-slate-800">Projects</span>
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '60px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>

        <style>{`
          @keyframes floatBlob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.08) translate(12px, -12px); }
          }
        `}</style>
      </div>

      {/* ── EDITORIAL HERO SECTION (Below Curve) ─────────────────────── */}
      <section className="w-full bg-white pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 md:px-8 font-primary">
        <div className="max-w-[1200px] mx-auto">

          {/* Eyebrow */}
          <div className="services-eyebrow flex items-center gap-2 mb-4 sm:mb-6">
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
              SELECTED CLIENT WORK
            </span>
          </div>

          {/* Heading */}
          <ScrollRevealHeading
            className="mb-6 sm:mb-8"
            words={[
              { text: "Projects" },
              { text: "built" },
              { text: "around" },
              { text: "business", italic: true },
              { text: "goals." }
            ]}
          />

          {/* Dual-Column → stacks on mobile */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[15px] sm:text-[17px] md:text-[20px] text-slate-700 leading-relaxed font-medium">
                A selection of digital marketing projects delivered through AdsServ across{' '}
                <strong className="font-bold" style={{ color: 'var(--brand-navy)' }}>performance marketing</strong>{' '}
                and{' '}
                <strong className="font-bold" style={{ color: 'var(--brand-navy)' }}>social media</strong>,
                working with businesses from different industries and customer segments.
              </p>
            </div>

            {/* Right Column Card */}
            <div
              className="flex-1 lg:max-w-[400px] p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[28px] border flex flex-col justify-between gap-4 sm:gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
              style={{ backgroundColor: 'var(--bg-light-purple)', borderColor: 'rgba(139, 92, 246, 0.15)' }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl font-serif text-[var(--accent-orange)] leading-none select-none">"</span>
                <p className="text-[14px] sm:text-[16px] md:text-[17px] font-semibold leading-relaxed" style={{ color: 'var(--brand-navy)' }}>
                  Every project starts with the business objective, audience and channel — then turns that understanding into focused marketing execution.
                </p>
              </div>

              <div className="pt-2 w-full">
                <ButtonWithIcon
                  onClick={() => {
                    if (onExploreClick) {
                      onExploreClick();
                    } else {
                      const el = document.getElementById('noqu-tam');
                      if (el && window.__lenis) {
                        window.__lenis.scrollTo(el, { offset: -90 });
                      } else if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                  className="w-full justify-center"
                >
                  Explore Work
                </ButtonWithIcon>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
