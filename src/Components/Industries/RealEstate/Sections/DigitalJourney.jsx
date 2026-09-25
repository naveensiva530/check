import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import "../../../HomePage/common.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DigitalJourney({ tagText, headingWords, bottomText, stages = [] }) {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, delay: i * 0.15, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [stages]);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 px-4 md:px-8 bg-white" style={{ fontFamily: "var(--font-primary)" }}>
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 bg-white border border-slate-200 shadow-sm">
            <span style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="italic font-semibold uppercase tracking-widest text-[12px] text-[var(--brand-navy)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {tagText}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-12 text-[var(--brand-navy)] leading-tight">
          {headingWords.map(w => w.text).join(' ')}
        </h2>

        <div className="flex flex-col items-center w-full gap-4 relative">
          {stages.map((stage, idx) => (
            <React.Fragment key={idx}>
              <div 
                ref={el => itemsRef.current[idx * 2] = el}
                className="bg-[var(--bg-light-purple)] py-4 px-8 rounded-full border border-purple-100 shadow-sm w-full sm:w-[400px]"
              >
                <span className="text-[17px] font-bold text-[var(--brand-navy)]">
                  {stage.title}
                </span>
              </div>
              {idx < stages.length - 1 && (
                <div 
                  ref={el => itemsRef.current[idx * 2 + 1] = el}
                  className="text-[var(--accent-orange)]"
                >
                  <ArrowDown size={24} strokeWidth={2.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mt-12 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
          {bottomText}
        </p>
      </div>
    </section>
  );
}
