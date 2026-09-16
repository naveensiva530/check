import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';
import systemVisual from '../../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';

gsap.registerPlugin(ScrollTrigger);

const uses = [
  'Social media content',
  'Paid advertisements',
  'Website videos',
  'Product demonstrations',
  'Reels',
  'Shorts',
  'Stories',
  'UGC-style edits',
  'Campaign variations',
  'Behind-the-scenes content',
];

export default function ContentSystem() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.12, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
      gsap.fromTo(itemRefs.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out', stagger: 0.04, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>VIDEO SHOULDN'T SIT ALONE</span>
            </div>
            <ScrollRevealHeading words={[
              { text: 'One' }, { text: 'shoot' }, { text: 'can' }, { text: 'become' },
              { text: 'an', italic: true }, { text: 'entire' }, { text: 'content' }, { text: 'system.' }
            ]} />

          </div>

          <div ref={rightRef} className="flex flex-col gap-5">
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
              A strong production can create more than one final video.
            </p>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              Depending on the project, footage can be adapted into:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {uses.map((item, idx) => (
                <div key={item} ref={el => itemRefs.current[idx] = el} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-[var(--accent-orange)] font-bold text-lg">•</span>
                  <span className="text-[14px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="font-bold text-[17px] mt-2" style={{ color: 'var(--brand-navy)' }}>
              This makes production more useful across the wider marketing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
