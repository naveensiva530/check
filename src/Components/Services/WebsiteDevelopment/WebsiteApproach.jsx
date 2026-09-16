import React, { useEffect, useRef, useState } from 'react';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../../../assets/Our_Approch (2).webp';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the business, audience, objectives, existing website, competitors, and priorities.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Create the sitemap, page hierarchy, content direction, user journeys, and functional requirements.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Develop a visual system and interface that reflects the brand while keeping usability at the centre.',
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Develop responsive pages with clean structure, appropriate functionality, and a strong technical foundation.',
  },
  {
    num: '05',
    title: 'Optimise',
    desc: 'Review performance, mobile usability, accessibility, SEO fundamentals, forms, navigation, and conversion paths.',
  },
  {
    num: '06',
    title: 'Launch',
    desc: 'Test the website across key devices and browsers before taking it live, then monitor after launch.',
  },
];

export default function WebsiteApproach() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const img1Ref = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slides in from left
      gsap.fromTo(
        img1Ref.current,
        { x: -80, opacity: 0, scale: 0.92 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right content slides in from right
      gsap.fromTo(
        rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Floating parallax on image wrapper while scrolling
      gsap.to(imgWrapRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* ── LEFT: GSAP Image ─────────────────────────── */}
        <div
          ref={imgWrapRef}
          className="relative flex-shrink-0 w-full lg:w-[44%] flex justify-center lg:justify-start"
        >
          <img
            ref={img1Ref}
            src={bgImage}
            alt="Website Approach"
            className="w-full max-w-[500px] h-auto object-contain"
            style={{ opacity: 0 }}
          />
        </div>

        {/* ── RIGHT: Content ────────────────────────────────── */}
        <div ref={rightRef} className="flex-1" style={{ opacity: 0 }}>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              STRATEGY BEFORE SCREENS
            </span>
          </div>

          <ScrollRevealHeading
            words={[
              { text: "We" },
              { text: "build" },
              { text: "around" },
              { text: "the" },
              { text: "experience," },
              { text: "not" },
              { text: "just" },
              { text: "the" },
              { text: "layout.", italic: true }
            ]}
          />

          <p className="text-[17px] leading-relaxed text-slate-600 mt-6 mb-10 max-w-xl font-medium">
            Before thinking about colours, animations, or visual effects, we look at the purpose of the website.
            <br /><br />
            Who is visiting? What are they looking for? What needs to convince them? What should they do next?
          </p>

          {/* Accordion Steps */}
          <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border-gray)' }}>
            {steps.map((step, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {/* Number + Title */}
                    <div className="flex items-center gap-4">
                      <span
                        className="font-extrabold flex-shrink-0"
                        style={{
                          fontSize: '15px',
                          color: isOpen ? 'var(--accent-orange)' : 'var(--brand-steel)',
                          fontFamily: "'Playfair Display', Georgia, serif",
                          transition: 'color 0.3s',
                          minWidth: '28px',
                        }}
                      >
                        {step.num}.
                      </span>
                      <span
                        className="font-bold"
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                          color: isOpen ? 'var(--accent-orange)' : 'var(--brand-navy)',
                          transition: 'color 0.3s',
                        }}
                      >
                        {step.title}
                      </span>
                    </div>

                    {/* Arrow icon */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen ? 'var(--accent-orange)' : 'var(--bg-light-purple)',
                        color: isOpen ? '#fff' : 'var(--brand-navy)',
                        transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: 1,
                      }}
                    >
                      ↑
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="leading-relaxed pt-4 pl-10 pb-1"
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-gray)',
                          maxWidth: '480px',
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}