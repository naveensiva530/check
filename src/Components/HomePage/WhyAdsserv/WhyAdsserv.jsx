import React from 'react';
import { Zap, Target, Layers, Briefcase, MessageSquare, RefreshCw } from 'lucide-react';
import '../common.css';
import ScrollRevealHeading from '../../Services/common/ScrollRevealHeading';

import imgGenZ        from '../../../assets/HomePage/WhyAdsserv/Gen_Z_thinking.webp';
import imgCreative    from '../../../assets/HomePage/WhyAdsserv/Creative_meets_performance.webp';
import imgPlatform    from '../../../assets/HomePage/WhyAdsserv/Platform-native_execution.webp';
import imgBusiness    from '../../../assets/HomePage/WhyAdsserv/Business-aware_marketing.webp';
import imgClarity     from '../../../assets/HomePage/WhyAdsserv/Less_jargon._More_clarity.webp';
import imgLearning    from '../../../assets/HomePage/WhyAdsserv/Always_learning.webp';

const differences = [
  { title: "Gen Z thinking", desc: "We understand how modern audiences discover, consume, share, ignore, and respond to digital content.", icon: Zap, color: "#e08326", img: imgGenZ },
  { title: "Creative meets performance", desc: "Ideas matter. So do the numbers. We bring creative execution and measurable thinking into the same conversation.", icon: Target, color: "#7c3aed", img: imgCreative },
  { title: "Platform-native execution", desc: "Content should fit the environment it appears in—not look like one idea copied ten times.", icon: Layers, color: "#3a7eb7", img: imgPlatform },
  { title: "Business-aware marketing", desc: "Attention is useful only when it connects to something meaningful for the business.", icon: Briefcase, color: "#1a7974", img: imgBusiness },
  { title: "Less jargon. More clarity.", desc: "You shouldn't need a marketing dictionary to understand what your agency is doing.", icon: MessageSquare, color: "#d97c23", img: imgClarity },
  { title: "Always learning", desc: "Platforms change. Audiences change. Markets change. Good digital work keeps learning.", icon: RefreshCw, color: "#c6538c", img: imgLearning },
];

const DifferenceCard = ({ title, desc, color, Icon, img }) => {
  return (
    <div 
      className="rounded-2xl border bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group p-6"
      style={{ borderColor: 'rgba(0,0,0,0.06)' }}
    >
      <div className="relative">
        {/* Icon-format Image Container */}
        {img ? (
          <div 
            className="w-14 h-14 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 overflow-hidden"
            style={{ backgroundColor: `${color}15` }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <div 
            className="w-14 h-14 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}15`, color: color }}
          >
            <Icon size={24} strokeWidth={2.5} />
          </div>
        )}

        {/* Text Content */}
        <div className="mt-5 space-y-2">
          <h3 
            className="text-base font-bold transition-colors duration-300 group-hover:text-[var(--brand-orange)]" 
            style={{ color: 'var(--text-dark-blue)' }}
          >
            {title}
          </h3>
          <p 
            className="font-medium leading-relaxed line-clamp-3" 
            style={{ color: 'var(--text-gray)', fontSize: '13.5px' }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function WhyAdsserv() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 relative bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Intro */}
        <div className="flex flex-col items-start justify-start text-left mb-10 sm:mb-16 max-w-[800px]">
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[13px] sm:text-[15px] italic font-medium uppercase tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--text-dark-blue)' }}
            >
              THE DIFFERENCE
            </span>
          </div>

          <ScrollRevealHeading
            className="mb-6"
            words={[
              { text: "We'd" },
              { text: 'rather' },
              { text: 'be', italic: true },
              { text: 'useful', italic: true },
              { break: true },
              { text: 'than' },
              { text: 'sound' },
              { text: 'impressive.' },
            ]}
            style={{ fontSize: 'clamp(1.55rem, 3.2vw, 3.25rem)' }}
          />

          <div className="text-[15px] sm:text-[17px] font-medium leading-relaxed" style={{ color: '#546b8d' }}>
            <p className="mb-2">
              There are enough agencies that promise everything, use the same words, and make every business sound like a "market leader." That's not particularly interesting.
            </p>
            <p>
              ADSSERV takes a different approach: understand the audience, understand the platform, understand the business problem, then make the work earn its place.
            </p>
          </div>
        </div>

        {/* Integration Card Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {differences.map((diff, i) => (
            <DifferenceCard 
              key={i}
              title={diff.title}
              desc={diff.desc}
              color={diff.color}
              Icon={diff.icon}
              img={diff.img}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
