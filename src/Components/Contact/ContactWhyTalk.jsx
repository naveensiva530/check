import React, { useEffect, useRef } from 'react';
import { ArrowRight, HelpCircle, Target, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { whyTalkData } from './contactData';
import '../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const startingPoints = [
  {
    icon: HelpCircle,
    color: 'var(--accent-orange, #e08326)',
    bg: 'rgba(224, 131, 38, 0.10)',
    title: 'The Problem',
    desc: 'You know what’s not working — low conversions, weak organic traffic, or campaigns burning budget.'
  },
  {
    icon: Target,
    color: 'var(--brand-navy, #1e2f57)',
    bg: 'rgba(30, 47, 87, 0.08)',
    title: 'The Goal',
    desc: 'You have a clear objective — scaling qualified leads, launching a product, or expanding market reach.'
  },
  {
    icon: Sparkles,
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.10)',
    title: 'The Direction',
    desc: 'You feel your brand has more potential and need a coherent, structured digital marketing roadmap.'
  }
];

const journeySteps = ['Understand Situation', 'Identify Opportunity', 'Determine Direction', 'Next Steps'];

export default function ContactWhyTalk({ onScrollToForm }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardRefs = useRef([]);
  const pillRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content header fade up
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Staggered starting points cards
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Journey steps entrance
      if (pillRefs.current.length > 0) {
        gsap.fromTo(
          pillRefs.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillRefs.current[0],
              start: 'top 88%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = [
    { text: "You" },
    { text: "don’t" },
    { text: "need" },
    { text: "to" },
    { text: "have" },
    { text: "everything,", italic: true },
    { text: "figured" },
    { text: "out." }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-18 sm:py-24 md:py-28 bg-white font-primary relative overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1050px] w-full mx-auto px-4 md:px-8 text-center relative z-10">
        
        {/* Header Block */}
        <div ref={contentRef}>
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(30,47,87,0.08)' }}
            >
              <span style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy, #1e2f57)' }}
            >
              {whyTalkData.eyebrow}
            </span>
          </div>

          {/* Centered ScrollRevealHeading */}
          <ScrollRevealHeading
            justify="center"
            maxW="850px"
            className="mx-auto mb-8"
            words={headingWords}
          />

          {/* Lead Paragraph */}
          <p className="text-[16px] md:text-[18px] font-medium leading-[1.8] text-slate-600 mb-4 max-w-[760px] mx-auto">
            You do not need a complete marketing plan before contacting us. If you know the problem you are trying to solve, the goal you want to reach or simply feel that your current digital presence is not working as it should, that is enough to start.
          </p>

          {/* Bold Anchor Takeaway */}
          <p
            className="text-[17px] md:text-[19px] font-bold leading-relaxed mb-12 max-w-[700px] mx-auto"
            style={{ color: 'var(--brand-navy, #1e2f57)' }}
          >
            We use the conversation to understand the situation, identify the opportunity and determine the most sensible next step.
          </p>
        </div>

        {/* 3 Starting Point Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto text-left mb-12">
          {startingPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className="rounded-[28px] p-7 sm:p-8 border border-white/60 hover:border-white shadow-[0_8px_24px_rgba(110,60,170,0.10)] hover:shadow-[0_20px_42px_rgba(110,60,170,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                style={{ backgroundColor: 'var(--bg-light-purple, #ddd0f5)' }}
              >
                <div>
                  <div
                    className="w-13 h-13 rounded-2xl bg-white text-[#1e2f57] flex items-center justify-center shadow-sm mb-6 transition-transform duration-300 group-hover:scale-105"
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <h3
                    className="text-[19px] sm:text-[20px] font-extrabold mb-2.5 text-[#1e2f57]"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14.5px] font-medium leading-relaxed text-[#334155]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connected Journey Step Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0 mb-12">
          {journeySteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                ref={el => pillRefs.current[idx] = el}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm"
              >
                <span
                  className="text-[13px] sm:text-[14px] font-extrabold"
                  style={{ color: 'var(--brand-navy, #1e2f57)' }}
                >
                  {step}
                </span>
              </div>
              {idx < journeySteps.length - 1 && (
                <span className="hidden md:inline text-[var(--accent-orange)] font-bold text-lg mx-2.5">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-3 px-9 py-4 bg-[var(--accent-orange)] hover:bg-[#cf741c] text-white font-bold text-[15px] rounded-full shadow-[0_10px_25px_rgba(224,131,38,0.30)] hover:shadow-[0_16px_32px_rgba(224,131,38,0.40)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
          >
            <span>Start Your Discussion Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
