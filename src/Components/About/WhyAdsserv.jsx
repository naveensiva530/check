import React, { useEffect, useRef } from 'react';
import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import icon1 from '../../assets/WhyAdsserv/icon1.png';
import icon2 from '../../assets/WhyAdsserv/icon2.png';
import icon3 from '../../assets/WhyAdsserv/icon3.png';
import icon4 from '../../assets/WhyAdsserv/icon4.png';
import icon5 from '../../assets/WhyAdsserv/icon5.png';

const differentiators = [
  {
    num: "01",
    title: "Audience-native thinking",
    desc: "We understand the platforms and digital behaviours shaping modern attention.",
    icon: icon1,
  },
  {
    num: "02",
    title: "Connected services",
    desc: "Strategy, creative, content, technology, and performance work better together.",
    icon: icon2,
  },
  {
    num: "03",
    title: "Business context",
    desc: "Marketing has to make commercial sense, not just look good on a portfolio page.",
    icon: icon3,
  },
  {
    num: "04",
    title: "Practical communication",
    desc: "Clear updates, transparent processes, and straightforward messaging.",
    icon: icon4,
  },
  {
    num: "05",
    title: "Continuous improvement",
    desc: "Launch is not the finish line. We review, learn, and improve learning begins.",
    icon: icon5,
  }
];

export default function WhyAdsserv() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(rightRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Staggered cards
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', stagger: 0.08, delay: 0.25,
          scrollTrigger: { trigger: cardsRef.current[0], start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-14 sm:py-20 md:py-24 relative font-primary overflow-hidden"
      style={{ backgroundColor: 'var(--bg-light-purple, #E8DCFA)' }}
    >
      <div className="max-w-[1340px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-20 items-start">
          <div ref={leftRef} className="lg:col-span-6 flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0"
              >
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
              >
                WHY ADSSERV?
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "Young" },
                { text: "enough", italic: true },
                { text: "to" },
                { text: "see" },
                { text: "what's" },
                { text: "changing." },
                { text: "Focused" },
                { text: "enough" },
                { text: "to" },
                { text: "make" },
                { text: "it" },
                { text: "useful." }
              ]}
            />
          </div>

          <div
            ref={rightRef}
            className="lg:col-span-6 flex flex-col gap-4 text-[15px] md:text-[16px] font-medium leading-relaxed text-slate-700 pt-2 lg:pt-12"
          >
            <p>
              Being Gen Z doesn't automatically make a marketing agency good.
            </p>
            <p className="font-extrabold text-[17px]" style={{ color: 'var(--brand-navy, #0b1f52)' }}>
              What matters is what that perspective produces.
            </p>
            <p>
              At ADSSERV, our audience understanding informs the work, while strategy, creative discipline, technology, and performance thinking keep it grounded.
            </p>
            <p>
              We're interested in what's next — but we don't chase every trend just because it's new.
            </p>
          </div>
        </div>

        {/* 5 Claymorphic Cards matching user's design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="bg-white rounded-[28px] p-6 flex flex-col justify-start transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              style={{
                boxShadow: '0 20px 38px -10px rgba(110, 60, 170, 0.22), 0 2px 6px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Top Row: 3D Squircle Icon + Number Badge */}
              <div className="flex items-center justify-between gap-3">
                <div className="w-[60px] h-[60px] rounded-[18px] overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={diff.icon}
                    alt={diff.title}
                    className="w-full h-full object-contain drop-shadow-sm"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

              </div>



              {/* Title */}
              <h3
                className="text-[18px] md:text-[19px] font-extrabold leading-[1.25] mb-2.5"
                style={{ color: '#0F172A' }}
              >
                {diff.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[13.5px] font-medium leading-[1.65] text-slate-600">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
