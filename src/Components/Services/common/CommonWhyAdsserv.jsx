import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function CommonWhyAdsserv({ 
  tagText = "WHY ADSSERV", 
  headingWords, 
  paragraphs = [], 
  boldParagraph, 
  points = [], 
  description1, 
  description2,
  variant = "list" // "list" or "grid"
}) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRefs = useRef([]);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (variant === "list") {
        gsap.fromTo(leftRef.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
        gsap.fromTo(rightRefs.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', stagger: 0.06, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      } else {
        gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
        cardRefs.current.forEach((card, i) => {
          if(card) {
             gsap.fromTo(card, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out', delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
          }
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [variant]);

  if (variant === "grid") {
    return (
      <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
          <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>{tagText}</span>
            </div>
            <ScrollRevealHeading maxW="800px" words={headingWords} />
            {description1 && <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">{description1}</p>}
            {description2 && <p className="text-[17px] font-bold mt-4 max-w-[650px]" style={{ color: 'var(--brand-navy)' }}>{description2}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {points.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  {Icon && (
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-md" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                  )}
                  <h3 className="text-[17px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{point.title}</h3>
                  <p className="text-[14px] font-medium leading-relaxed text-slate-600">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary border-b border-gray-100">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
                {tagText}
              </span>
            </div>
            <ScrollRevealHeading words={headingWords} />
          </div>

          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            {paragraphs.map((text, i) => (
              <p key={i} ref={el => rightRefs.current[i] = el}>{text}</p>
            ))}
            {boldParagraph && (
              <p ref={el => rightRefs.current[paragraphs.length] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
                {boldParagraph}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
