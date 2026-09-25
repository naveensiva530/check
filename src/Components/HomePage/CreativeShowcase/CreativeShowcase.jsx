import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../common.css';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import creativeImg from '../../../assets/HomePage/CreativeShowcase/Creative_site.webp';
import ScrollRevealHeading from '../../Services/common/ScrollRevealHeading';

const categories = [
  { title: "Social Content", desc: "Platform-native content built around audience behaviour." },
  { title: "Video", desc: "Short-form and campaign-focused visual storytelling." },
  { title: "Campaign Creative", desc: "Creative systems designed to support launches, promotions, awareness, and growth." },
  { title: "Branding", desc: "Visual identities and digital brand experiences that create recognition." },
];

export default function CreativeShowcase() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const navigate = useNavigate();

  return (
    <section className="w-full pt-14 sm:pt-20 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 lg:items-start pt-6 sm:pt-10">
          
          {/* Left Column: Content & Accordion */}
          <div className="flex flex-col pb-12 sm:pb-20 lg:pb-32">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="text-[13px] sm:text-[14px] italic font-medium uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--text-dark-blue)' }}
              >
                THE CREATIVE SIDE
              </span>
            </div>

            {/* H2 */}
            <ScrollRevealHeading
              className="mb-4"
              words={[
                { text: 'Make' },
                { text: 'people', italic: true },
                { text: 'stop', italic: true },
                { break: true },
                { text: 'scrolling.' },
              ]}
              style={{ fontSize: 'clamp(1.55rem, 3vw, 2.65rem)' }}
            />

            {/* Copy */}
            <p className="text-[14px] sm:text-[14.5px] font-medium leading-relaxed mb-6 sm:mb-8" style={{ color: 'var(--text-gray)' }}>
              From social content and short-form video to campaign creative and brand systems, we build digital work designed to earn attention without begging for it.
            </p>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {categories.map((cat, i) => {
                const isOpen = openIndex === i;
                return (
                  <div 
                    key={i} 
                    className="bg-white rounded-[20px] p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] cursor-pointer transition-all duration-300 border border-gray-100"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isOpen ? 'bg-[var(--accent-orange)] text-white' : 'bg-[#1a233a] text-white'
                        }`}
                      >
                        {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                      </div>
                      <h3 
                        className={`text-[15px] font-bold transition-colors duration-300 ${
                          isOpen ? 'text-[var(--accent-orange)]' : 'text-[#1a233a]'
                        }`}
                      >
                        {cat.title}
                      </h3>
                    </div>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[13.5px] font-medium text-gray-500 pl-10 leading-relaxed pb-1">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                className="know-more-btn mt-2 cursor-pointer"
                onClick={() => navigate('/projects')}
              >
                <span>See Our Creative Work</span>
                <div className="know-more-icon">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="relative w-full mt-8 lg:mt-0 flex justify-center lg:justify-end items-end h-full">
            <img 
              src={creativeImg} 
              alt="Creative Digital Work" 
              loading="lazy"
              decoding="async"
              className="w-full max-w-[600px] lg:max-w-none lg:w-[145%] h-auto object-contain transform lg:scale-[1.15] lg:translate-x-[15%] lg:translate-y-[-5%]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
