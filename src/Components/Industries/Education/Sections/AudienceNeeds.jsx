import React, { useEffect, useRef } from 'react';
import "../../../HomePage/common.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AudienceNeeds({ tagText, headingWords, bottomText, audiences = [] }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, i) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, delay: i * 0.1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [audiences]);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 px-4 md:px-8 bg-[var(--bg-light-purple)]" style={{ fontFamily: "var(--font-primary)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 bg-white border border-slate-200 shadow-sm">
              <span style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest text-[12px] text-[var(--brand-navy)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {tagText}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-[var(--brand-navy)] leading-tight">
            {headingWords.map(w => w.text).join(' ')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((audience, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <h3 className="text-xl font-extrabold text-[var(--brand-orange)] mb-6 pb-4 border-b border-gray-100">
                {audience.title}
              </h3>
              <ul className="flex flex-col gap-3 flex-grow">
                {audience.questions.map((q, i) => (
                  <li key={i} className="text-[15px] font-semibold text-slate-700 leading-snug">
                    "{q}"
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center max-w-[800px] mx-auto">
          <p className="text-[18px] md:text-[20px] font-bold text-[var(--brand-navy)]">
            {bottomText}
          </p>
        </div>
      </div>
    </section>
  );
}
