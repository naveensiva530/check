import React from 'react';
import { introData } from './contactData';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

export default function ContactIntro() {
  const words = [
    { text: "A" },
    { text: "good" },
    { text: "project" },
    { text: "starts", italic: true },
    { text: "with" },
    { text: "a" },
    { text: "clear" },
    { text: "conversation." }
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-white font-primary border-b border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        
        {/* Standard Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-6">
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
            {introData.eyebrow}
          </span>
        </div>

        {/* ScrollRevealHeading */}
        <ScrollRevealHeading
          words={words}
          justify="center"
          maxW="800px"
          className="mb-8"
        />

        {/* Accent bar */}
        <div
          className="w-12 h-[3px] opacity-70 rounded-full mb-8"
          style={{ backgroundColor: 'var(--accent-orange, #e08326)' }}
        />

        {/* Body Copy */}
        <div className="text-[16px] md:text-[18px] font-medium leading-relaxed space-y-4 max-w-3xl mx-auto text-slate-600">
          {introData.body.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
