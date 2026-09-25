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
        gsap.fromTo(leftRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } });
        gsap.fromTo(rightRefs.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out', stagger: 0.04, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } });
      } else {
        gsap.fromTo(headingRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } });
        cardRefs.current.forEach((card, i) => {
          if(card) {
             gsap.fromTo(card, { opacity: 0, y: 25, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out', delay: i * 0.05, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
          }
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [variant]);

  if (variant === "grid") {
    return (
      <section ref={sectionRef} className="w-full py-14 sm:py-20 md:py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
          <div ref={headingRef} className={`flex flex-col items-center text-center ${points && points.length > 0 ? 'mb-16' : ''}`}>
            <div className="services-eyebrow flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>{tagText}</span>
            </div>
            <ScrollRevealHeading maxW="800px" justify="center" words={headingWords} />
            {paragraphs.length > 0 && (
              <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[750px] mt-8">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            )}
            {description1 && <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[700px] mt-8">{description1}</p>}
            {description2 && <p className="text-[17px] font-bold mt-4 max-w-[650px]" style={{ color: 'var(--brand-navy)' }}>{description2}</p>}
          </div>
          {points && points.length > 0 && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${points.length === 5 ? 'lg:grid-cols-5' : points.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-5`}>
              {points.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div key={idx} ref={el => cardRefs.current[idx] = el} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
                    {point.tag && (
                      <span
                        className="text-[10.5px] font-extrabold uppercase tracking-[0.12em] px-2.5 py-1 rounded-md mb-4"
                        style={{
                          color: 'var(--accent-orange, #e08326)',
                          backgroundColor: 'rgba(224,131,38,0.10)',
                        }}
                      >
                        {point.tag}
                      </span>
                    )}
                    {Icon && (
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-md" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}>
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                    )}
                    <h3 className="text-[17px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{point.title}</h3>
                    {point.tag && (
                      <div className="w-10 h-[2px] mb-3" style={{ backgroundColor: 'var(--accent-orange, #e08326)' }}></div>
                    )}
                    <p className="text-[13.5px] md:text-[14px] font-medium leading-relaxed text-slate-600">{point.desc}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-20 md:py-24 bg-white relative font-primary border-b border-gray-100">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftRef} className="flex flex-col">
            <div className="services-eyebrow flex items-center gap-2 mb-6">
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
