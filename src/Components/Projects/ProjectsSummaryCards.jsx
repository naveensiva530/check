import React from 'react';
import { Target, Share2, ArrowUpRight } from 'lucide-react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

const projects = [
  {
    id: 'noqu-tam',
    number: '01',
    name: 'No Qu TAM',
    category: 'Performance Marketing',
    tag: 'Technology · B2B',
    tagColor: { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
    desc: 'Product-focused paid marketing built around audience relevance, clear communication and conversion intent.',
    gradient: 'from-[#1e2f57] to-[#2e4a8f]',
    accentColor: '#e08326',
    icon: Target,
  },
  {
    id: 'dr-ramans',
    number: '02',
    name: "Dr. Raman's Nature Cure Foundation",
    category: 'Performance Marketing',
    tag: 'Wellness',
    tagColor: { bg: '#ecfdf5', text: '#065f46', border: '#6ee7b7' },
    desc: 'Audience-focused paid marketing built around awareness, relevance, trust and enquiry.',
    gradient: 'from-[#ea580c] to-[#f97316]',
    accentColor: '#fff',
    icon: Target,
  },
  {
    id: 'nutech-associates',
    number: '03',
    name: 'Nu-Tech Associates',
    category: 'Social Media',
    tag: 'Professional Services',
    tagColor: { bg: '#f5f3ff', text: '#5b21b6', border: '#ddd6fe' },
    desc: 'Structured social media presence built around professional presentation, brand awareness and consistent audience communication.',
    gradient: 'from-[#7c3aed] to-[#9333ea]',
    accentColor: '#fff',
    icon: Share2,
  },
];

export default function ProjectsSummaryCards() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 border-b border-gray-100 font-primary">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <div className="services-eyebrow flex items-center gap-2 mb-4">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange, #e08326)' }}
            >
              DISCIPLINE DIRECTORY
            </span>
          </div>
          <ScrollRevealHeading
            words={[
              { text: "Projects" }, { text: "Organized" }, { text: "By", italic: true },
              { text: "Marketing" }, { text: "Function." }
            ]}
            maxW="800px"
          />
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => scrollTo(project.id)}
                className="group cursor-pointer rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-400 flex flex-col"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-6 flex items-start justify-between relative overflow-hidden`}>
                  {/* Big faded number */}
                  <span
                    className="absolute -bottom-4 -right-2 text-[80px] font-black leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.10)' }}
                  >
                    {project.number}
                  </span>

                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 block mb-2">
                      Project {project.number}
                    </span>
                    <h4 className="text-[18px] sm:text-[20px] font-extrabold leading-snug text-white max-w-[200px]">
                      {project.name}
                    </h4>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: project.tagColor.bg,
                        color: project.tagColor.text,
                        borderColor: project.tagColor.border
                      }}
                    >
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-[14px] text-slate-600 leading-relaxed font-medium flex-1 mb-5">
                    {project.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[12px] font-bold group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--accent-orange)' }}>
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
