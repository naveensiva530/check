import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButtonWithIcon from '../../../Components/ui/button-with-icon';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

export default function CommonWhatWeDo({
  tagText = "WHAT WE DO",
  headingWords,
  description,
  buttonText = "View More",
  services = [],
  icons = [] // Array of Icon components to render in the phone UI
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrentIdx((prev) => (prev + 1) % services.length), 5000);
    return () => clearInterval(timer);
  }, [isPaused, services.length]);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="w-full py-24 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: 'var(--brand-red-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
                {tagText}
              </span>
            </div>

            <ScrollRevealHeading className="mb-8" words={headingWords} />

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium" style={{ color: 'var(--brand-navy)', opacity: 0.85 }}>
              {description}
            </p>

            <ButtonWithIcon>{buttonText}</ButtonWithIcon>
          </div>

          <div className="w-full lg:w-[420px] flex justify-center flex-shrink-0 relative z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full filter blur-[100px] opacity-30 pointer-events-none" style={{ background: 'var(--brand-red-orange)' }} />

            <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[48px] border-[12px] shadow-2xl overflow-hidden flex flex-col z-10" style={{ borderColor: 'var(--brand-navy)', boxShadow: '0 25px 60px rgba(30,47,87,0.35), inset 0 0 0 2px rgba(255,255,255,0.2)' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              
              {/* Phone Notch */}
              <div className="absolute top-2 inset-x-0 flex justify-center z-50 pointer-events-none">
                <div className="w-28 h-7 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#111] border border-gray-800"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="absolute top-0 inset-x-0 flex justify-between items-center px-6 pt-4 pb-2 text-[12px] font-semibold text-[var(--brand-navy)] z-50 pointer-events-none">
                <span className="tracking-tighter">9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M1 9V7H3V9H1ZM5 9V5H7V9H5ZM9 9V3H11V9H9ZM13 9V1H15V9H13Z"/></svg>
                  <div className="w-5 h-2.5 border border-current rounded-sm p-[1px] relative"><div className="w-full h-full bg-current rounded-[1px]"></div></div>
                </div>
              </div>

              {/* Slider Content */}
              <div className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
                {services.map((svc, idx) => (
                  <div key={idx} className="min-w-full h-full relative bg-white">
                    <div className="absolute top-16 left-5 z-40 bg-white border border-gray-200 text-[var(--brand-navy)] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Service {svc.num || (idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="absolute top-[88px] inset-x-5 bottom-[35%] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center">
                      {svc.img && <img src={svc.img} alt={svc.title} className="w-full h-full object-cover object-center" />}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-[35%] flex flex-col justify-end p-6 pb-12 z-40 bg-white">
                      
                      {icons.length > 0 && (
                        <div className="flex -space-x-1.5 mb-4">
                           {icons.map((IconComp, i) => (
                              <div key={i} className={`w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center ${i === 0 ? 'text-[var(--accent-orange)]' : i === 1 ? 'text-[var(--brand-navy)]' : 'text-[var(--brand-purple,#8b5cf6)]'}`}>
                                <IconComp size={12} strokeWidth={2.5} />
                              </div>
                           ))}
                        </div>
                      )}
                      
                      <h3 className="text-[var(--brand-navy)] text-[26px] font-extrabold mb-2 tracking-tight leading-tight">{svc.title}</h3>
                      <p className="text-gray-600 text-[14px] font-medium leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 z-50 group shadow-lg">
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 z-50 group shadow-lg">
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <div className="absolute bottom-2 inset-x-0 flex justify-center z-50 pointer-events-none">
                <div className="w-32 h-[5px] bg-white/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
