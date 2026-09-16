import React, { useEffect, useRef } from 'react';
import { processSteps } from './contactData';
import { MessageSquare, Search, PhoneCall, Sparkles } from 'lucide-react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const stepsConfig = [
  {
    phase: "Phase 01",
    icon: MessageSquare,
  },
  {
    phase: "Phase 02",
    icon: Search,
  },
  {
    phase: "Phase 03",
    icon: PhoneCall,
  },
  {
    phase: "Phase 04",
    icon: Sparkles,
  }
];

export default function ContactProcessSteps() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards staggered entrance
      cardRefs.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 35, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.45,
              ease: 'power3.out',
              delay: i * 0.08,
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = [
    { text: "From" },
    { text: "first" },
    { text: "message" },
    { text: "to" },
    { text: "clear", italic: true },
    { text: "direction.", italic: true }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-18 sm:py-24 md:py-28 bg-white font-primary relative overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 relative z-10">

        {/* Header Block */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          {/* Standard Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
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
              The Next Step
            </span>
          </div>

          <ScrollRevealHeading
            justify="center"
            maxW="850px"
            className="mx-auto mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            words={headingWords}
          />

          <p className="text-[15px] sm:text-[17px] font-medium leading-relaxed text-slate-500 max-w-xl mx-auto">
            A transparent 4-step process from your initial message to a clear, actionable marketing roadmap.
          </p>
        </div>

        {/* 4 Steps Process Grid styled with var(--bg-light-purple, #ddd0f5) and white */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 relative">
          {processSteps.map((step, idx) => {
            const cfg = stepsConfig[idx] || stepsConfig[0];
            const Icon = cfg.icon;

            return (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className="rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-white/60 hover:border-white shadow-[0_8px_24px_rgba(110,60,170,0.10)] hover:shadow-[0_20px_45px_rgba(110,60,170,0.20)] hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden"
                style={{ backgroundColor: 'var(--bg-light-purple, #ddd0f5)' }}
              >
                <div>
                  {/* Top Row: White Icon Container + White Step Badge */}
                  <div className="flex items-center justify-between mb-7">
                    <div
                      className="w-13 h-13 rounded-2xl bg-white text-[#1e2f57] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-extrabold font-mono uppercase tracking-wider bg-white text-[#1e2f57] shadow-xs"
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[20px] sm:text-[22px] font-extrabold tracking-tight mb-3 text-[#1e2f57] leading-snug"
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[14.5px] font-medium leading-relaxed text-[#334155]">
                    {step.description}
                  </p>
                </div>


              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
