import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Target, Share2, Sparkles, Layers, TrendingUp } from 'lucide-react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { projectsData } from './projectsData';

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.service === activeFilter);

  const filterTabs = [
    { label: 'All Projects', value: 'All', count: projectsData.length, icon: Layers },
    { label: 'Performance Marketing', value: 'Performance Marketing', count: projectsData.filter(p => p.service === 'Performance Marketing').length, icon: Target },
    { label: 'Social Media', value: 'Social Media', count: projectsData.filter(p => p.service === 'Social Media').length, icon: Share2 }
  ];

  return (
    <section id="projects-showcase" className="w-full py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[13px]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: 'var(--accent-orange, #e08326)',
              }}
            >
              FEATURED CLIENT WORK
            </span>
          </div>

          <ScrollRevealHeading
            words={[
              { text: "Detailed" },
              { text: "Case" },
              { text: "Studies", italic: true },
              { text: "&" },
              { text: "Outcomes." }
            ]}
            justify="center"
          />

          <p className="text-[16px] md:text-[18px] text-slate-600 max-w-2xl mx-auto mt-4 font-medium leading-relaxed">
            Examine how we approach different business models, audience requirements, and channel objectives with tailored execution.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10 p-2 rounded-full bg-slate-100/80 border border-slate-200/80 shadow-inner">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1e2f57] text-white shadow-md shadow-[#1e2f57]/20 scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-mono font-extrabold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="rounded-[32px] bg-slate-50/70 border border-slate-200/80 p-6 md:p-10 lg:p-12 hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
            >
              {/* Ambient Glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{
                  background: project.service === 'Performance Marketing' ? '#f97316' : '#8b5cf6'
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* Left Column: Project Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="text-3xl font-extrabold text-orange-500 font-mono tracking-tight">
                        {project.number}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-800 shadow-sm">
                        {project.service}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                        {project.industry}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1e2f57] mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-orange-600 mb-6">
                      {project.subtitle}
                    </p>

                    {/* Overview */}
                    <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed mb-6">
                      {project.projectOverview}
                    </p>

                    {/* Core Objectives List */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                        <span>Core Objectives</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.coreObjectives?.map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Focus Pillars (Compact List) */}
                    <div className="mb-8 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1e2f57] mb-3">
                        {project.focusTitle}
                      </h4>
                      <div className="space-y-3">
                        {project.focusPillars?.slice(0, 3).map((pillar, i) => (
                          <div key={i} className="text-sm">
                            <span className="font-bold text-slate-900 mr-2">{pillar.title}:</span>
                            <span className="text-slate-600">{pillar.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Takeaway Quote */}
                    <div className="p-4 rounded-xl bg-orange-50/80 border-l-4 border-orange-500 text-sm italic text-slate-800 font-medium mb-6">
                      "{project.takeaway}"
                    </div>
                  </div>

                  {/* External Link Action */}
                  {project.websiteUrl && (
                    <div className="pt-2">
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-slate-800 text-sm font-bold hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm group/btn"
                      >
                        <span>Visit {project.client} Website</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Visual Preview Card */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Visual Image Card */}
                  <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md aspect-[4/3] group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase font-bold tracking-wider opacity-80 mb-1">
                        {project.cardLabel}
                      </div>
                      <div className="text-lg font-bold">
                        {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100">
                      <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                      <span>Project Highlights</span>
                    </div>
                    <div className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Execution Discipline:</span>
                        <span className="font-bold text-[#1e2f57]">{project.service}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Industry:</span>
                        <span className="font-bold text-[#1e2f57]">{project.industry}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Channel Strategy:</span>
                        <span className="font-bold text-[#1e2f57]">Multi-Touchpoint</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Measurement:</span>
                        <span className="font-bold text-emerald-600">Active Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
