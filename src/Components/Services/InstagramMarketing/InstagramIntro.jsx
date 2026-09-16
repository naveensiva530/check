import React from 'react';
import { introData } from '../../Services_Provide/InstagramMarketingData';
import ScrollRevealHeading from '../common/ScrollRevealHeading';
import '../../HomePage/common.css';

const InstagramIntro = () => {
  return (
    <section className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              {introData.tagText}
            </span>
          </div>
          <ScrollRevealHeading maxW="800px" words={introData.headingWords} />
        </div>

        <div className="max-w-[700px] mx-auto text-center">
          {introData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 mb-4">{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramIntro;