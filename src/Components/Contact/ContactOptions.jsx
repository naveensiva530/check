import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Rocket, TrendingUp, HelpCircle, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const contactOptionsList = [
  {
    id: "project",
    step: "01",
    badge: "Specific Scope",
    icon: Rocket,
    title: "Start a Project",
    desc: "Have a specific project, timeline, or marketing deliverable already in mind?",
    highlights: [
      "Targeted scope & milestones",
      "Fast turnaround timeline",
      "Fixed or flexible budget model"
    ],
    cta: "Tell Us About Your Project",
    presetService: "Website Development",
    featured: false,
  },
  {
    id: "growth",
    step: "02",
    badge: "Most Popular",
    icon: TrendingUp,
    title: "Discuss Your Growth",
    desc: "Looking for a high-impact multi-channel strategy, lead generation, or ongoing marketing engine?",
    highlights: [
      "Full-funnel digital strategy",
      "Dedicated multi-discipline team",
      "Data-backed ROI & continuous growth"
    ],
    cta: "Discuss Your Goals",
    presetService: "Performance Marketing",
    featured: true,
  },
  {
    id: "question",
    step: "03",
    badge: "Advisory",
    icon: HelpCircle,
    title: "Ask a Question",
    desc: "Not sure which service or channel is right for your business? Let's have an honest discussion.",
    highlights: [
      "Zero sales pressure or lock-in",
      "Direct answers from strategists",
      "Clear recommendation & guidance"
    ],
    cta: "Ask Our Team",
    presetService: "Digital Consulting",
    featured: false,
  }
];

export default function ContactOptions({ onSelectOption }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRefs.current.length > 0) {
        gsap.fromTo(
          cardRefs.current,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 78%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = [
    { text: "Choose" },
    { text: "the" },
    { text: "way" },
    { text: "that" },
    { text: "works" },
    { text: "for", italic: true },
    { text: "you.", italic: true }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 md:py-28 bg-white font-primary border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Header Block with Hero Section format */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(30,47,87,0.08)' }}
            >
              <span style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[12px] sm:text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy, #1e2f57)' }}
            >
              WAYS TO CONNECT
            </span>
          </div>

          {/* ScrollRevealHeading (Hero Section format) */}
          <ScrollRevealHeading
            words={headingWords}
            justify="center"
            maxW="850px"
            className="mx-auto mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
          />

          {/* Supporting Subtitle */}
          <p className="text-[15px] sm:text-[17px] font-medium leading-relaxed text-slate-500 max-w-xl mx-auto">
            Select the starting point that best matches where you are — from scoping a project to planning long-term growth.
          </p>
        </div>

        {/* 3 Option Cards - Exclusively styled with var(--bg-light-purple, #ddd0f5) and white */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {contactOptionsList.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                ref={el => cardRefs.current[idx] = el}
                onClick={() => onSelectOption && onSelectOption(card.presetService)}
                className={`relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden ${card.featured
                  ? 'border-2 border-white shadow-[0_14px_38px_rgba(110,60,170,0.18)] hover:shadow-[0_24px_50px_rgba(110,60,170,0.26)] hover:-translate-y-2'
                  : 'border border-white/60 hover:border-white shadow-[0_8px_24px_rgba(110,60,170,0.10)] hover:shadow-[0_20px_42px_rgba(110,60,170,0.18)] hover:-translate-y-1.5'
                  }`}
                style={{ backgroundColor: 'var(--bg-light-purple, #ddd0f5)' }}
              >
                <div>
                  {/* Top Row: White Icon Container */}
                  <div className="mb-7">
                    <div
                      className="w-13 h-13 rounded-2xl bg-white text-[#1e2f57] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[22px] sm:text-[24px] font-extrabold tracking-tight leading-snug mb-3 text-[#1e2f57]"
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed text-slate-700 mb-6">
                    {card.desc}
                  </p>

                  {/* Value Bullet Points with White Check Badges */}
                  <ul className="space-y-2.5 mb-8 pt-2">
                    {card.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-[#1e2f57]">
                        <span className="w-4.5 h-4.5 rounded-full flex items-center justify-center bg-white text-[#1e2f57] shadow-xs flex-shrink-0">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Row with White Circle Button */}
                <div className="pt-5 border-t border-[#1e2f57]/15 flex items-center justify-between mt-auto">
                  <span
                    className="font-extrabold text-[14.5px] sm:text-[15px] text-[#1e2f57] group-hover:translate-x-1 transition-transform duration-200"
                  >
                    {card.cta}
                  </span>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-white text-[#1e2f57] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:shadow-md"
                  >
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
