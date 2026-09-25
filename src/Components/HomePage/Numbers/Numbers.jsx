import React, { useEffect, useRef } from 'react';
import '../common.css';
import { useInView, animate } from 'framer-motion';
import ScrollRevealHeading from '../../Services/common/ScrollRevealHeading';

const stats = [
  { value: 50, suffix: "+", label: "Projects / campaigns delivered" },
  { value: 10, suffix: "+", label: "Brands or businesses served" },
  { value: 5, suffix: "M+", label: "Relevant audience reach / impressions" },
  { value: 98, suffix: "%", label: "Verified result or outcome" },
];

function Counter({ from = 0, to, suffix, duration = 2.2, start = false }) {
  const nodeRef = useRef(null);
  const localInView = useInView(nodeRef, { once: true, amount: 0.05 });
  const hasAnimated = useRef(false);

  const shouldStart = start || localInView;

  useEffect(() => {
    if (shouldStart && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [shouldStart, from, to, suffix, duration]);

  return (
    <span ref={nodeRef} style={{ display: 'inline-block' }}>
      {from}{suffix}
    </span>
  );
}

export default function Numbers() {
  const sectionRef = useRef(null);
  const statsGridRef = useRef(null);
  // amount: 0.05 ensures numbers trigger as soon as section or grid appears on mobile
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const isGridInView = useInView(statsGridRef, { once: true, amount: 0.05 });
  const startCounters = isSectionInView || isGridInView;

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 relative font-primary"
      style={{ backgroundColor: 'var(--bg-light-purple)' }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-10 sm:gap-12 lg:gap-20 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Eyebrow matching the requested format */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="text-[13px] sm:text-[14px] md:text-[15px] italic font-medium uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy)' }}
              >
                PROOF, NOT NOISE
              </span>
            </div>
            
            <ScrollRevealHeading
              className="mb-4 sm:mb-8"
              words={[
                { text: 'Show' },
                { text: 'the', italic: true },
                { text: 'work.', italic: true },
                { break: true },
                { text: 'Then' },
                { text: 'show' },
                { text: 'the' },
                { text: 'numbers.' },
              ]}
              style={{ fontSize: 'clamp(1.55rem, 3vw, 3rem)', color: 'var(--brand-navy)' }}
            />
            
            <p className="text-[14px] sm:text-[16px] font-medium leading-relaxed mb-3 sm:mb-4 text-slate-700">
              The strongest numbers are the ones we can explain.
            </p>
            <p className="text-[14px] sm:text-[16px] font-medium leading-relaxed text-slate-700">
              Instead of filling the page with impressive-looking statistics, we use verified project, campaign, audience, traffic, engagement, lead, or business results where the data genuinely exists.
            </p>
          </div>

          <div
            ref={statsGridRef}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col border-l-2 pl-5 sm:pl-6 py-1 sm:py-2 transition-colors duration-500 hover:border-[#f97316]"
                style={{ borderColor: 'rgba(30, 47, 87, 0.2)' }}
              >
                <div
                  className="text-[38px] sm:text-[48px] md:text-[60px] font-extrabold mb-1 sm:mb-2 leading-none"
                  style={{ color: 'var(--brand-navy)' }}
                >
                  <Counter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                    start={startCounters}
                  />
                </div>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-slate-600 pr-2 sm:pr-4">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
