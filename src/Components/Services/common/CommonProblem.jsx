import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function CommonProblem({
  tagText = "THE REAL PROBLEM",
  headingWords,
  paragraphs = [], // Intro paragraphs (if variant = fragments)
  items = [], // the bullet points
  bottomText1,
  bottomText2,
  variant = "fragments", // "fragments" (single card), "painPoints" (multiple cards), or "cards" (card grid)
  cards = [] // Card array with title and desc for variant = "cards"
}) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardRef = useRef(null);
  const itemRefs = useRef([]);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.3, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' } });

      if (variant === "fragments") {
        gsap.fromTo(rightRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' } });
        gsap.fromTo(cardRef.current, { opacity: 0, scale: 0.92, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'back.out(1.4)', delay: 0.15, scrollTrigger: { trigger: cardRef.current, start: 'top 88%', toggleActions: 'play none none none' } });
        gsap.fromTo(itemRefs.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out', stagger: 0.04, delay: 0.2, scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
        if (finalRef.current) {
          gsap.fromTo(finalRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out', delay: 0.5, scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
        }
      } else {
        gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' } });
        gsap.fromTo(itemRefs.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out', stagger: 0.04, delay: 0.15, scrollTrigger: { trigger: rightRef.current, start: 'top 88%', toggleActions: 'play none none none' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [variant]);

  return (
    <section ref={sectionRef} className={`common-problem-section w-full py-14 sm:py-20 md:py-24 relative font-primary ${variant === 'fragments' ? '' : 'bg-white'}`} style={{ backgroundColor: variant === 'fragments' ? 'var(--bg-light-purple)' : 'transparent' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className={`common-problem-grid grid grid-cols-1 ${variant === 'fragments' ? 'lg:grid-cols-12' : 'lg:grid-cols-2'} gap-12 lg:gap-16 items-start`}>
          <div ref={leftRef} className={`${variant === 'fragments' ? 'lg:col-span-5' : ''} flex flex-col justify-start`}>
            <div className="services-eyebrow flex items-center gap-2 mb-6">
              <span className={`flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 ${variant === 'fragments' ? 'bg-white border border-gray-200 shadow-sm' : ''}`} style={{ background: variant === 'fragments' ? '' : 'var(--accent-orange)', boxShadow: variant === 'fragments' ? '' : '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: variant === 'fragments' ? '#f97316' : '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
                {tagText}
              </span>
            </div>
            <ScrollRevealHeading words={headingWords} />
          </div>

          <div ref={rightRef} className={`${variant === 'fragments' ? 'lg:col-span-7' : ''} flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700`}>
            {variant === "fragments" && paragraphs.length > 0 && paragraphs.map((p, i) => <p key={i}>{p}</p>)}

            {variant === "fragments" && (items.length > 0 || bottomText1) ? (
              <div ref={cardRef} className="common-problem-card bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mt-2">
                <ul className="flex flex-col gap-4">
                  {items.map((item, idx) => (
                    <li key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3">
                      <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                      <span className="text-[17px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                {bottomText1 && <p className="mt-6 text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>{bottomText1}</p>}
              </div>
            ) : variant === "cards" ? (
              <>
                {paragraphs.length > 0 && paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cards.map((card, idx) => (
                    <div key={idx} ref={el => itemRefs.current[idx] = el} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-orange)] flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <h3 className="text-[18px] font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>{card.title}</h3>
                      <p className="text-[14px] font-medium leading-relaxed text-slate-600">{card.desc}</p>
                    </div>
                  ))}
                </div>
                {bottomText1 && <p className="text-[17px] font-bold mt-4" style={{ color: 'var(--brand-navy)' }}>{bottomText1}</p>}
              </>
            ) : (
              <>
                {items.map((item, idx) => (
                  <div key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3 bg-[var(--bg-light-purple)] p-5 rounded-xl">
                    <span className="text-[var(--accent-orange)] font-bold text-lg mt-0.5">•</span>
                    <span className="text-[16px] font-semibold leading-relaxed" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                  </div>
                ))}
              </>
            )}

            {variant === "fragments" && bottomText2 && (
              <p ref={finalRef} className="font-bold" style={{ color: 'var(--brand-navy)' }}>{bottomText2}</p>
            )}

            {variant === "painPoints" && (
              <>
                {bottomText1 && <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 mt-2">{bottomText1}</p>}
                {bottomText2 && <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>{bottomText2}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
