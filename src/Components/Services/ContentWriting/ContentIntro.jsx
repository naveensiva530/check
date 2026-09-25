import React from 'react';
import { introData } from '../../Services_Provide/ContentWritingData';
import ScrollRevealHeading from '../common/ScrollRevealHeading';
import '../../HomePage/common.css';

const ContentIntro = () => {
  return (
    <section className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="services-eyebrow flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              {introData.tagText}
            </span>
          </div>
          <ScrollRevealHeading maxW="800px" words={introData.headingWords} />
        </div>

        <div className="max-w-[700px] mx-auto text-center mb-8">
          {introData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 mb-4">{para}</p>
          ))}
        </div>

        {introData.bottomText && (
          <div className="text-center">
            <button className="group flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full bg-[var(--brand-navy)] text-white hover:bg-opacity-90 transition-all duration-300 mx-auto">
              {introData.bottomText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentIntro;
