import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function CommonWhoThisIsFor({
  tagText = "WHO THIS IS FOR",
  headingWords,
  paragraphs = [],
  listItems = [],
  bottomText,
  rightContent // A React node to be rendered on the right side
}) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardRef = useRef(null);
  const itemRefs = useRef([]);
  const finalRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 100, scale: 0.92 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      if (listItems.length > 0) {
        gsap.fromTo(itemRefs.current,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
        );
        gsap.fromTo(cardRef.current,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.4)', delay: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
        );
      }
      if (paragraphs.length > 0) {
        gsap.fromTo(paraRefs.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', stagger: 0.06, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
        );
      }
      if (finalRef.current) {
        gsap.fromTo(finalRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.85, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [listItems.length, paragraphs.length]);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-white, #ffffff)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div ref={leftRef} className="flex flex-col">
            <div className="services-eyebrow flex items-center gap-2 mb-4 justify-start">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
                {tagText}
              </span>
            </div>
            <ScrollRevealHeading justify="start" words={headingWords} />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <div className="flex flex-col gap-3 text-[16px] md:text-[18px] font-medium leading-[1.7] text-slate-700 max-w-[550px]">
              {paragraphs.length > 0 && paragraphs.map((p, idx) => (
                <p key={idx} ref={el => paraRefs.current[idx] = el}>{p}</p>
              ))}

              {listItems.length > 0 && (
                <div ref={cardRef} className="bg-[var(--bg-light-purple)] p-6 rounded-2xl border border-white shadow-sm my-2">
                  <ul className="flex flex-col gap-3">
                    {listItems.map((a, idx) => (
                      <li key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-start gap-3">
                        <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5">•</span>
                        <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {bottomText && (
                <p ref={finalRef} className="font-bold mt-2" style={{ color: 'var(--brand-navy)' }}>
                  {bottomText}
                </p>
              )}
            </div>
          </div>

          <div ref={rightRef} className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
             {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
}
