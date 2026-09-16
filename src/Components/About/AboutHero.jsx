import { Link } from 'react-router-dom';
import ButtonWithIcon from '../ui/button-with-icon';
import { ArrowUpRight, Home, ChevronRight } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/About Us.webp'; // Reusing this bg for now
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

export default function AboutHero() {
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    if (refs.ctas) {
      fadeUp(refs.ctas, {
        trigger: refs.ctas,
        start: 'top 88%',
        duration: 0.4,
        y: 20,
      });
    }
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

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto mb-6 sm:mb-10">
          <h1
            className="font-extrabold text-white mb-4 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)' }}
          >
            About Us
          </h1>

          {/* Breadcrumb pill */}
          <div className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1 border border-slate-200 bg-white">
            <Link
              to="/"
              className="flex items-center gap-1 sm:gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: 'var(--brand-orange)', fontWeight: 700, fontSize: '14px' }}
            >
              <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[13px] sm:text-[16px] font-semibold" style={{ color: 'var(--brand-navy)' }}>
              About
            </span>
          </div>
        </div>

        {/* Curved white bottom */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '55px', transform: 'scaleX(-1)' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* ── EDITORIAL CONTENT SECTION (Below Curve) ─────────────────────── */}
      <section ref={sectionRef} className="w-full bg-white pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 md:px-8 font-primary">
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
              ABOUT ADSSERV
            </span>
          </div>

          {/* Heading */}
          <div ref={ref('heading')} className="mb-6 sm:mb-10">
            <ScrollRevealHeading
              words={[
                { text: "We" },
                { text: "Build", italic: true },
                { text: "Digital" },
                { text: "Work" },
                { text: "People" },
                { text: "Actually" },
                { text: "Notice" }
              ]}
              maxW="950px"
              style={{ fontSize: 'clamp(1.6rem, 4.2vw, 3.6rem)' }}
            />
          </div>

          {/* Dual-Column → stacks on mobile */}
          <div ref={ref('paragraph')} className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[15px] sm:text-[17px] md:text-[20px] text-slate-700 leading-relaxed font-medium mb-4">
                <strong className="font-bold" style={{ color: 'var(--brand-navy)' }}>ADSSERV</strong> is a Gen Z digital marketing agency built around a simple idea: good marketing should feel relevant to the people it's trying to reach.
              </p>
              <p className="text-[15px] sm:text-[17px] md:text-[20px] text-slate-700 leading-relaxed font-medium">
                We bring together strategy, creative, technology, content, and performance to help brands communicate better and compete in a digital world that moves quickly.
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
                  Good marketing should feel relevant to the people it's trying to reach. We help brands communicate better.
                </p>
              </div>

              <div ref={ref('ctas')} className="pt-2 w-full flex flex-col gap-3">
                <ButtonWithIcon to="/contact" className="w-full justify-center">
                  Let's Work Together
                </ButtonWithIcon>
                <ButtonWithIcon to="/services" outline={true} className="w-full justify-center">
                  Explore Our Services
                </ButtonWithIcon>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
