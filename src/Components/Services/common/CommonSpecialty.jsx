import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function CommonSpecialty({ 
  tagText, 
  headingWords, 
  leftContent, // Optional extra content on the left
  rightContent, // Optional fully custom right side content (React Node)
  paragraphs = [], // Standard paragraphs on the right side
  items = [], // Standard bullet items on the right side
  bottomText, // Standard bold bottom text on the right side
  bgColor = "white", // "white" or "purple"
  button // Optional button on the right side
}) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, 
        { opacity: 0, x: -70 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(rightRef.current, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      if (items.length > 0) {
        gsap.fromTo(itemRefs.current, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.04, delay: 0.3, scrollTrigger: { trigger: rightRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [items.length]);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: bgColor === 'purple' ? 'var(--bg-light-purple)' : 'white' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div ref={leftRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className={`flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 ${bgColor === 'purple' ? 'bg-white border border-gray-200 shadow-sm' : ''}`} style={{ background: bgColor === 'purple' ? '' : 'var(--accent-orange)', boxShadow: bgColor === 'purple' ? '' : '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: bgColor === 'purple' ? '#f97316' : '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
                {tagText}
              </span>
            </div>
            
            <ScrollRevealHeading words={headingWords} />
            
            {leftContent}
          </div>

          <div ref={rightRef} className="flex flex-col gap-5">
            {rightContent ? (
              rightContent
            ) : (
              <>
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">{p}</p>
                ))}
                
                {items.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {items.map((item, idx) => (
                      <div key={idx} ref={el => itemRefs.current[idx] = el} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <span className="text-[var(--accent-orange)] font-bold text-lg">•</span>
                        <span className="text-[14px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {bottomText && <p className="font-bold text-[17px] mt-2" style={{ color: 'var(--brand-navy)' }}>{bottomText}</p>}
                
                {button && <div className="mt-2">{button}</div>}
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
