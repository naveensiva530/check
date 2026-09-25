import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../../Components/ui/button-with-icon';
import { Home, ChevronRight } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';

export default function CommonHero({
  bgImage,
  title,
  breadcrumbText,
  tagText,
  headingWords,
  description1,
  description2,
  description3,
  button2Text = "Explore Our Services",
  button2Link = "/#services",
  children
}) {
  return (
    <>
      {/* ── BANNER HERO ─────────────────────────────────────────── */}
      <div className="page-hero-banner relative w-full flex items-center justify-center overflow-hidden">
        <img
          src={bgImage}
          alt={title}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />
        <div className="absolute z-[2]" style={{ top: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(196,181,253,0.18)', filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite' }} />
        <div className="absolute z-[2]" style={{ bottom: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(167,139,250,0.20)', filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse' }} />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1"
            style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}
          >
            <Link to="/" className="uiverse-home-btn">
              <Home strokeWidth={2.5} />
              <p>Home</p>
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[13px] sm:text-[15px] font-semibold" style={{ color: '#1e2f57' }}>{breadcrumbText || title}</span>
          </div>
        </div>

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

      {/* ── EDITORIAL CONTENT SECTION ─────────────────────────── */}
      <section className="w-full bg-white pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-16 md:pb-20 px-4 md:px-8" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="services-eyebrow max-w-[1200px] mx-auto">

          {/* Eyebrow */}
          <div className="services-eyebrow flex items-center gap-2 mb-4 sm:mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest text-[12px] sm:text-[13px]" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange, #e08326)' }}>
              {tagText}
            </span>
          </div>

          {children ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <ScrollRevealHeading className="mb-6 sm:mb-8" words={headingWords} />
                {description1 && <p className="leading-relaxed mb-4 text-[14px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>{description1}</p>}
                {description2 && <p className="leading-relaxed mb-4 text-[14px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>{description2}</p>}
                {description3 && <p className="leading-relaxed mb-6 text-[14px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>{description3}</p>}
                {button2Text && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                    <div className="w-full sm:w-auto">
                      <ButtonWithIcon to={button2Link || "/services"} outline={true} className="w-full sm:w-auto justify-center">
                        {button2Text}
                      </ButtonWithIcon>
                    </div>
                  </div>
                )}
              </div>
              {children}
            </div>
          ) : (
            <>
              <ScrollRevealHeading className="mb-6 sm:mb-10" words={headingWords} />

              {/* Two-column copy → stacks on mobile */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 mb-8 sm:mb-12">
                <div className="flex-1">
                  {description1 && (
                    <p className="leading-relaxed font-medium text-[15px] sm:text-[17px] md:text-[20px]" style={{ color: '#334155' }}>
                      {description1}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  {description2 && (
                    <p className="leading-relaxed mb-4 text-[13px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>
                      {description2}
                    </p>
                  )}
                  {description3 && (
                    <p className="leading-relaxed mb-6 sm:mb-10 text-[13px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>
                      {description3}
                    </p>
                  )}
                  {/* Buttons — full width on mobile */}
                  {button2Text && (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                      <div className="w-full sm:w-auto">
                        <ButtonWithIcon to={button2Link || "/services"} outline={true} className="w-full sm:w-auto justify-center">
                          {button2Text}
                        </ButtonWithIcon>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
