import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgDiscover from '../../../assets/Servicess/PerformanceStructure/Discovery.webp';
import imgAudit from '../../../assets/Servicess/PerformanceStructure/Audit.webp';
import imgStrategy from '../../../assets/Servicess/PerformanceStructure/Strategy.webp';
import imgBuild from '../../../assets/Servicess/PerformanceStructure/Build.webp';
import imgLaunch from '../../../assets/Servicess/PerformanceStructure/Launch.webp';
import imgOptimise from '../../../assets/Servicess/PerformanceStructure/Optimise.webp';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery", desc: "Understand the business, offer, audience, economics, existing campaigns, and goals.", img: imgDiscover },
  { num: "02", title: "Audit", desc: "Review existing accounts, tracking, campaign structure, creative, landing pages, and performance where available.", img: imgAudit },
  { num: "03", title: "Strategy", desc: "Choose the appropriate channels, audience approach, campaign structure, budget direction, and measurement plan.", img: imgStrategy },
  { num: "04", title: "Build", desc: "Create campaigns, advertisements, targeting, tracking, and supporting assets.", img: imgBuild },
  { num: "05", title: "Launch", desc: "Activate campaigns and monitor initial data carefully.", img: imgLaunch },
  { num: "06", title: "Optimise", desc: "Use evidence to refine targeting, creative, keywords, budgets, bidding, and landing experiences.", img: imgOptimise }
];

export default function PerformanceHowWeWork() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fades + scales in - FASTER
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );

      // Cards: odd from left, even from right — zigzag stagger - FASTER
      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 40, scale: 0.92 },
          {
            opacity: 1, x: 0, y: 0, scale: 1, duration: 0.3, ease: 'power2.out', delay: i * 0.025,
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              THE CAMPAIGN CYCLE
            </span>
          </div>
          <ScrollRevealHeading
            maxW="900px"
            words={[
              { text: "Launch" },
              { text: "is" },
              { text: "the" },
              { text: "beginning,", italic: true },
              { text: "not" },
              { text: "the" },
              { text: "finish." }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className="relative flex bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 gap-3 sm:gap-5 shadow-[0_10px_35px_rgba(139,92,246,0.07)] border border-white/80 hover:shadow-[0_16px_45px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden"
              >
                {/* Numbered purple circle */}


                {/* Image */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-4 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                  <img src={step.img} alt={step.title} className="w-full h-full object-contain drop-shadow-lg" loading="lazy" decoding="async" width="200" height="200" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-end pt-[70px] sm:pt-[90px] md:pt-[110px] w-full pr-[70px] sm:pr-[90px] md:pr-[110px]">

                  <h3 className="text-[20px] sm:text-[24px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                    {step.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13.5px] font-medium leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
