import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from '../common/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';
import { whatWeHelpSolveData } from '../../Services_Provide/DigitalConsultingData';

gsap.registerPlugin(ScrollTrigger);

const WhatWeHelpSolve = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' },
        }
      );
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const { tagText, headingWords, description, objectives } = whatWeHelpSolveData;

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: 'var(--brand-red-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              {tagText}
            </span>
          </div>
          <ScrollRevealHeading maxW="800px" words={headingWords} />
          <p
            className="text-[16px] md:text-[18px] leading-relaxed mt-6 max-w-2xl mx-auto font-medium"
            style={{ color: 'var(--brand-navy)', opacity: 0.7 }}
          >
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="bg-white rounded-[28px] p-8 border border-gray-100 "
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}
                  >
                    <Icon size={22} strokeWidth={2.5} />
                  </div>

                </div>
                {item.label && (
                  <span className="text-[12px] font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--accent-orange)' }}>
                    {item.label}
                  </span>
                )}
                <h3 className="text-[22px] font-extrabold mb-3 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                  {item.title}
                </h3>
                <p className="text-[15px] font-medium leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelpSolve;