import React from 'react';
import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { useScrollAnimation, fadeUp, slideFrom } from '../Services/SocialMedia/useScrollAnimation';

import heroAsset from '../../assets/Hero_image-removebg-preview.webp';

// Images from different Servicess folders
import imgStrategy from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Digital Strategy.webp';
import imgCreative from '../../assets/Creative.webp';
import imgDigital from '../../assets/Digital.webp';
import imgPerformance from '../../assets/Performance.webp';

const strengths = [
  {
    num: "01",
    title: "Strategy",
    desc: "Find the business problem, audience opportunity, and direction before rushing into execution.",
    image: imgStrategy,
  },
  {
    num: "02",
    title: "Creative",
    desc: "Turn strategy into ideas, stories, content, campaigns, visuals, and experiences that people can understand and remember.",
    image: imgCreative,
  },
  {
    num: "03",
    title: "Digital",
    desc: "Build the websites, social presence, search visibility, campaigns, and digital touchpoints that bring the strategy to life.",
    image: imgDigital,
  },
  {
    num: "04",
    title: "Performance",
    desc: "Use data, testing, measurement, and optimisation to understand what's working and where the next improvement can come from.",
    image: imgPerformance,
  }
];

export default function Strengths() {
  const { sectionRef, ref, refArray } = useScrollAnimation((refs, section) => {
    // Header
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    // Hero image
    if (refs.heroImg) {
      slideFrom([refs.heroImg], 'right', {
        trigger: refs.heroImg,
        start: 'top 82%',
        duration: 0.6,
      });
    }
    // Strength cards
    if (refs.cards && refs.cards[0]) {
      fadeUp(refs.cards, {
        trigger: refs.cards[0],
        start: 'top 85%',
        duration: 0.5,
        stagger: 0.07,
        y: 40,
        scale: 0.96,
      });
    }
  });

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-20 md:py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 relative">

          {/* Left: Text Content */}
          <div ref={ref('eyebrow')} className="flex flex-col max-w-[650px] w-full z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
              >
                WHERE WE BRING VALUE
              </span>
            </div>

            <div ref={ref('heading')}>
              <ScrollRevealHeading
                className="mb-6"
                words={[
                  { text: "Different" },
                  { text: "disciplines.", italic: true },
                  { text: "One" },
                  { text: "connected" },
                  { text: "way" },
                  { text: "of" },
                  { text: "working." }
                ]}
              />
            </div>

            <p
              ref={ref('paragraph')}
              className="text-[16px] md:text-[18px] text-slate-600 font-medium leading-relaxed max-w-[580px]"
            >
              We connect creative, digital, and performance capabilities to deliver unified marketing that works as a whole.
            </p>
          </div>

          {/* Right: Main Graphic */}
          <div ref={ref('heroImg')} className="w-full lg:w-[500px] xl:w-[600px] h-[220px] sm:h-[280px] lg:h-[350px] relative z-10 flex justify-center lg:justify-end">
            <img
              src={heroAsset}
              alt="Connected way of working"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain object-center lg:object-right"
            />
          </div>

        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-slate-200 mb-12"></div>

        {/* Bottom Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {strengths.map((s, idx) => (
            <div
              key={idx}
              ref={refArray('cards')}
              className={`flex flex-col px-2 sm:px-5 group cursor-pointer
                ${idx !== strengths.length - 1 ? 'lg:border-r lg:border-slate-200' : ''}
                ${idx % 2 === 0 ? 'md:border-r md:border-slate-200 lg:border-r' : ''}`}
            >
              {/* Top label */}
              <div className="text-[15px] font-bold mb-6" style={{ color: 'var(--accent-orange, #F5A623)' }}>
                Strength {s.num}
              </div>

              {/* Content row (Image + Text) */}
              <div className="flex flex-col xl:flex-row items-start gap-5">
                {/* 3D Illustration Frame */}
                <div
                  className="w-[100px] h-[100px] rounded-[22px] overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_28px_rgba(110,60,170,0.18)] shadow-[0_6px_20px_rgba(11,31,82,0.08)] border border-purple-100 bg-[#F4ECFC]"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-[20px] font-extrabold mb-2 text-[var(--brand-navy,#0b1f52)] group-hover:text-[var(--accent-orange)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-600 font-medium">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
