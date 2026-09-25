import React from 'react';
import { Target, Share2, ArrowUpRight } from 'lucide-react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

export default function PortfolioDisciplines() {
  const scrollToProject = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-24 px-4 md:px-8 font-primary relative" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header matching Services CommonWhyAdsserv */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="services-eyebrow flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
            >
              ADSSERV CLIENT PORTFOLIO
            </span>
          </div>

          <ScrollRevealHeading
            words={[
              { text: "Three" },
              { text: "Projects." },
              { text: "Two", italic: true },
              { text: "Core" },
              { text: "Marketing" },
              { text: "Disciplines." }
            ]}
            justify="center"
            maxW="800px"
          />
          
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mt-6">
            The selected AdsServ projects represent work across two different digital marketing functions.
          </p>
        </div>

        {/* Two Core Marketing Disciplines Grid in Services Card Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Discipline 1: Performance Marketing */}
          <div className="bg-white rounded-[28px] p-8 md:p-10 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-light-purple)] text-[var(--accent-orange)] flex items-center justify-center border border-purple-100">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold" style={{ color: 'var(--brand-navy)' }}>
                      PERFORMANCE MARKETING
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-orange)]">
                      2 Client Implementations
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* No Qu TAM */}
                <div
                  onClick={() => scrollToProject('noqu-tam')}
                  className="p-5 rounded-2xl bg-[var(--bg-light-purple)] border border-purple-100/70 hover:border-orange-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold group-hover:text-orange-600 transition-colors flex items-center gap-2" style={{ color: 'var(--brand-navy)' }}>
                      <span>No Qu TAM</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-blue-700 border border-blue-200">
                      SaaS Technology
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    A technology-focused campaign environment where audience targeting, product communication and conversion-oriented execution are central.
                  </p>
                </div>

                {/* Dr. Raman's Nature Cure Foundation */}
                <div
                  onClick={() => scrollToProject('dr-ramans')}
                  className="p-5 rounded-2xl bg-[var(--bg-light-purple)] border border-purple-100/70 hover:border-orange-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold group-hover:text-orange-600 transition-colors flex items-center gap-2" style={{ color: 'var(--brand-navy)' }}>
                      <span>Dr. Raman's Nature Cure Foundation</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-emerald-700 border border-emerald-200">
                      Nature Cure / Wellness
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    A wellness-focused campaign environment where audience relevance, accessible communication and trust play an important role.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="text-[var(--accent-orange)] font-bold text-base">•</span>
              <span>Optimized for intent, measurable acquisition & ROI</span>
            </div>
          </div>

          {/* Discipline 2: Social Media */}
          <div className="bg-white rounded-[28px] p-8 md:p-10 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-light-purple)] text-purple-600 flex items-center justify-center border border-purple-100">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold" style={{ color: 'var(--brand-navy)' }}>
                      SOCIAL MEDIA
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                      1 Client Implementation
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Nu-Tech Associates */}
                <div
                  onClick={() => scrollToProject('nutech-associates')}
                  className="p-5 rounded-2xl bg-[var(--bg-light-purple)] border border-purple-100/70 hover:border-purple-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold group-hover:text-purple-600 transition-colors flex items-center gap-2" style={{ color: 'var(--brand-navy)' }}>
                      <span>Nu-Tech Associates</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-purple-700 border border-purple-200">
                      Professional Services
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-3">
                    A business services environment where presentation, audience trust and regular communication are central to the brand.
                  </p>

                  {/* 5 Content Roles */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-200/40">
                    {["EDUCATE", "INFORM", "ENGAGE", "BUILD TRUST", "REMIND"].map((r, i) => (
                      <span key={i} className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white text-purple-800 border border-purple-100">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="text-purple-600 font-bold text-base">•</span>
              <span>Structured for consistency, brand recall & audience engagement</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
