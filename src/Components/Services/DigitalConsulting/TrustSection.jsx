import React from 'react';
import { trustData } from '../../Services_Provide/DigitalConsultingData';
import ScrollRevealHeading from '../common/ScrollRevealHeading';
import '../../HomePage/common.css';

const TrustSection = () => {
  return (
    <section className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="services-eyebrow flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              {trustData.tagText}
            </span>
          </div>
          <ScrollRevealHeading maxW="800px" words={trustData.headingWords} />
        </div>

        <div className="max-w-[700px] mx-auto text-center mb-12">
          {trustData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 mb-4">{para}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustData.proofCards.map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[var(--bg-light-purple)] border border-white text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-orange)] flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{idx + 1}</span>
              </div>
              <h4 className="font-bold text-[var(--brand-navy)] mb-2">{card.title}</h4>
              <p className="text-sm text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
