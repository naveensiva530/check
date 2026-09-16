import React from 'react';
import { ArrowUpRight, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/All the Hero Section bg/Contact Us.webp';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import ButtonWithIcon from '../ui/button-with-icon';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';
import { heroData } from './contactData';

export default function ContactHero({ onScrollToForm, onScrollToServices }) {
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    fadeUp([refs.eyebrow, refs.heading, refs.copy, refs.ctas, refs.highlights], {
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
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />

        {/* Decorative blobs */}
        <div className="absolute z-[2]" style={{ top: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(196,181,253,0.18)', filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite' }} />
        <div className="absolute z-[2]" style={{ bottom: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(167,139,250,0.20)', filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse' }} />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="font-extrabold text-white mb-4 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}
          >
            CONTACT US
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
            <span className="text-[13px] sm:text-[16px] font-semibold" style={{ color: '#1e2f57' }}>Contact</span>
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

      {/* ── EDITORIAL CONTENT SECTION ─────────────────────────────────── */}
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
              {heroData.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <div ref={ref('heading')}>
            <ScrollRevealHeading
              className="mb-6 sm:mb-10"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              words={[
                { text: "Let's" },
                { text: "Talk" },
                { text: "About" },
                { text: "What" },
                { text: "You're" },
                { text: "Building.", italic: true }
              ]}
            />
          </div>

          {/* Two-Column → stacks on mobile */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 mb-10 sm:mb-14">
            <div className="flex-1">
              <p ref={ref('copy')} className="leading-relaxed font-medium text-[14px] sm:text-[16px] md:text-[20px]" style={{ color: '#334155' }}>
                Have a new idea, a growth challenge or a digital presence that needs a rethink? Tell us where you are, what you want to achieve and what is getting in the way.
              </p>
            </div>
            <div className="flex-1">
              <p className="leading-relaxed mb-6 sm:mb-8 text-[13px] sm:text-[15px] md:text-[17px]" style={{ color: '#475569' }}>
                We'll start with the right conversation — not a one-size-fits-all solution.
              </p>

              {/* CTAs — full width on mobile */}
              <div ref={ref('ctas')} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <div className="w-full sm:w-auto">
                  <ButtonWithIcon onClick={onScrollToForm} className="w-full sm:w-auto justify-center">
                    {heroData.primaryCTA || "Start a Conversation"}
                  </ButtonWithIcon>
                </div>
                <button
                  onClick={onScrollToServices}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 font-bold rounded-full border-2 transition-all duration-300 text-[14px] sm:text-[15px]"
                  style={{ color: 'var(--brand-navy, #1e2f57)', borderColor: 'rgba(30,47,87,0.20)', fontSize: '15px', background: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-navy, #1e2f57)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(30,47,87,0.20)'; }}
                >
                  <span>{heroData.secondaryCTA || "Explore Our Services"}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
