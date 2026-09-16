import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../common.css';

export default function FinalCTA() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 relative font-primary overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Eyebrow matching previous format */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="text-[13px] sm:text-[15px] italic font-medium uppercase tracking-wider"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy)' }}
          >
            YOUR NEXT MOVE
          </span>
        </div>
        
        <h2 className="text-[28px] sm:text-[42px] md:text-[60px] font-extrabold leading-[1.08] tracking-tight mb-6 sm:mb-8" style={{ color: 'var(--brand-navy)' }}>
          Have something worth building?
        </h2>
        
        <div className="flex flex-col gap-2 mb-8 sm:mb-12">
          <p className="text-[15px] sm:text-[18px] font-medium leading-relaxed max-w-[600px] mx-auto text-slate-700">
            Tell us what you're working on, what isn't working, or where you want to go next.
          </p>
          <p className="text-[15px] sm:text-[18px] font-medium leading-relaxed max-w-[600px] mx-auto text-slate-700">
            No giant pitch deck required.
          </p>
          <p className="text-[15px] sm:text-[18px] font-medium leading-relaxed max-w-[600px] mx-auto text-slate-700">
            Just start the conversation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[500px] sm:max-w-none">
          {/* Primary CTA */}
          <button
            onClick={() => window.location.href = '/contact'}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-9 py-3.5 sm:py-[18px] bg-[#1e2f57] text-white text-[14px] sm:text-[15px] font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <span>Start a Project</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110" style={{ color: '#1e2f57' }}>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
            </div>
          </button>
          
          {/* Secondary CTA */}
          <button
            onClick={() => window.location.href = '/about'}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-[18px] bg-transparent text-[14px] sm:text-[15px] font-bold rounded-full border-2 transition-all duration-300 cursor-pointer"
            style={{ color: '#1e2f57', borderColor: 'rgba(30, 47, 87, 0.2)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1e2f57'; e.currentTarget.style.backgroundColor = 'rgba(30, 47, 87, 0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(30, 47, 87, 0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <span>Talk to ADSSERV</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
