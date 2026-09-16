import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceCreative() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left heading slides in from left - FASTER
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );

      // Right paragraphs stagger up - FASTER
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out', stagger: 0.03, delay: 0.05,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary border-b border-gray-100">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                AD CREATIVE
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "Good" },
                { text: "targeting" },
                { text: "still" },
                { text: "needs" },
                { text: "a" },
                { text: "message", italic: true },
                { text: "worth" },
                { text: "noticing." }
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p ref={el => paraRefs.current[0] = el}>
              People don't interact with advertisements simply because the targeting is technically correct.
            </p>
            <p ref={el => paraRefs.current[1] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              The creative has to earn attention.
            </p>
            <p ref={el => paraRefs.current[2] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              The message has to make sense.
            </p>
            <p ref={el => paraRefs.current[3] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              The offer has to feel relevant.
            </p>
            <p ref={el => paraRefs.current[4] = el} className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              And the next step has to be clear.
            </p>
            <p ref={el => paraRefs.current[5] = el}>
              We consider the relationship between audience, hook, message, visual, offer, call to action, and landing experience rather than treating ad creative as decoration.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
