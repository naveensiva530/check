import React from 'react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

// Client logos from HomePage/clients
import logoTam from '../../assets/HomePage/clients/client7.webp';
import logoNuTech from '../../assets/HomePage/clients/client13.webp';
import logoRamans from '../../assets/HomePage/clients/client6.webp';

export default function ProjectsDemonstrate() {
  const cards = [
    {
      project: "No Qu TAM",
      focus: "Performance Marketing",
      logo: logoTam,
      text: "The communication needs to explain a business solution and connect it with relevant decision-makers."
    },
    {
      project: "Nu-Tech Associates",
      focus: "Social Media",
      logo: logoNuTech,
      text: "The communication needs to maintain professional presentation, awareness and consistent brand visibility."
    },
    {
      project: "Dr. Raman's Nature Cure Foundation",
      focus: "Performance Marketing",
      logo: logoRamans,
      text: "The communication needs to be approachable, audience-relevant and trust-oriented."
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 border-b border-gray-100 font-primary">
      <div className="max-w-[1200px] mx-auto">

        {/* Header in Services Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="services-eyebrow flex items-center justify-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
            >
              WHAT THESE PROJECTS DEMONSTRATE
            </span>
          </div>

          <ScrollRevealHeading
            words={[
              { text: "Different" },
              { text: "Businesses" },
              { text: "Need", italic: true },
              { text: "Different" },
              { text: "Marketing" },
              { text: "Approaches." }
            ]}
            justify="center"
            maxW="850px"
          />

          <p className="text-slate-600 text-base md:text-lg mt-6 leading-relaxed font-medium">
            There is no universal template in digital marketing. Each sector demands its own tone of voice, channel priority, trust building mechanism, and conversion mechanism.
          </p>
        </div>

        {/* 3 Industry Demonstration Cards with Client Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[28px] shadow-[0_15px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between group"
              style={{ backgroundColor: 'var( --bg-light-purple, #ddd0f5)' }}
            >
              <div>
                {/* Client Logo */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={item.logo}
                      alt={item.project}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold mb-1" style={{ color: 'var(--brand-navy)' }}>
                  {item.project}
                </h3>

                <div className="text-[11px] font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-orange)' }}>
                  Focus: {item.focus}
                </div>

                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
