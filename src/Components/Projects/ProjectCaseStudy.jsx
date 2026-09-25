import React from 'react';
import { ExternalLink, ArrowRight, Sparkles, BookOpen, Bell, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import '../../Components/HomePage/common.css';

import icon1 from '../../assets/WhyAdsserv/icon1.png';
import icon2 from '../../assets/WhyAdsserv/icon2.png';
import icon3 from '../../assets/WhyAdsserv/icon3.png';
import icon4 from '../../assets/WhyAdsserv/icon4.png';
import icon5 from '../../assets/WhyAdsserv/icon5.png';

const whyAdsservIcons = [icon1, icon2, icon3, icon4, icon5];

export default function ProjectCaseStudy({ project, isLast }) {
  const getRoleIcon = (iconName) => {
    switch (iconName) {
      case "BookOpen": return <BookOpen className="w-4 h-4 text-blue-500" />;
      case "Bell": return <Bell className="w-4 h-4 text-amber-500" />;
      case "MessageSquareHeart": return <MessageSquareHeart className="w-4 h-4 text-pink-500" />;
      case "ShieldCheck": return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      case "Sparkles": return <Sparkles className="w-4 h-4 text-purple-500" />;
      default: return <Sparkles className="w-4 h-4 text-orange-500" />;
    }
  };

  return (
    <article
      id={project.id}
      className={`w-full pt-12 md:pt-16 pb-20 md:pb-24 font-primary bg-white ${
        !isLast ? 'border-b border-gray-100' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* ── TOP HEADER / META BAR ─────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span
              className="text-3xl md:text-4xl font-extrabold font-mono tracking-tight"
              style={{ color: 'var(--accent-orange)' }}
            >
              {project.number}
            </span>
            <span className="text-gray-300 font-light text-2xl">/</span>
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-500">
              PROJECT {project.number}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Service Badge */}
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--bg-light-purple)] text-[var(--brand-navy)] border border-purple-100">
              {project.service}
            </span>

            {/* Industry Badge */}
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-50 text-slate-700 border border-gray-200">
              {project.industry}
            </span>
          </div>
        </div>

        {/* ── PROJECT HERO BANNER & INTRO GRID ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          {/* Left Column: Title, Subtitle, Short Description, Overview */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <h2
                className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3"
                style={{ color: 'var(--brand-navy)' }}
              >
                {project.title}
              </h2>
              <p
                className="text-xl md:text-2xl font-semibold italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
              >
                {project.subtitle}
              </p>
            </div>

            {/* Short Description in Services Callout */}
            <div
              className="p-6 rounded-[24px] border"
              style={{
                backgroundColor: 'var(--bg-light-purple)',
                borderColor: 'rgba(139, 92, 246, 0.15)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]" />
                <span className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Short Description
                </span>
              </div>
              <p className="text-slate-800 text-[15px] md:text-[16px] font-medium leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Project Overview */}
            <div className="space-y-3 pt-2">
              <div className="services-eyebrow flex items-center gap-2">
                <span
                  className="flex items-center justify-center w-4 h-4 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent-orange)' }}
                >
                  <span style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest text-xs"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
                >
                  PROJECT OVERVIEW
                </span>
              </div>
              <div className="text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed space-y-3">
                {project.projectOverview.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Project Specifications Card with Prominent Elevated Shadow */}
          <div className="lg:col-span-5 relative z-20">
            <div
              className="bg-white p-7 md:p-8 rounded-[30px] border border-slate-100 transition-all duration-400 ease-out hover:-translate-y-1.5"
              style={{
                boxShadow: '0 25px 50px -12px rgba(30, 47, 87, 0.18), 0 10px 24px -6px rgba(30, 47, 87, 0.10), 0 0 0 1px rgba(30, 47, 87, 0.05)'
              }}
            >
              <div className="services-eyebrow flex items-center gap-2 mb-6">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent-orange)' }}
                >
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest text-[12px] md:text-[13px]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
                >
                  PROJECT SPECIFICATIONS
                </span>
              </div>

              <div className="space-y-4 text-sm divide-y divide-gray-100">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500 font-medium">Client</span>
                  <span className="font-bold text-slate-900" style={{ color: 'var(--brand-navy)' }}>{project.client}</span>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-500 font-medium">
                    {project.website ? "Website" : "Reference"}
                  </span>
                  {project.websiteUrl ? (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold flex items-center gap-1.5 hover:underline"
                      style={{ color: 'var(--accent-orange)' }}
                    >
                      <span>{project.website}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-700">{project.reference}</span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-500 font-medium">Industry</span>
                  <span className="font-semibold text-slate-700">{project.industry}</span>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-500 font-medium">Project Type</span>
                  <span className="font-semibold text-slate-700">{project.projectType}</span>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-500 font-medium">AdsServ Service</span>
                  <span className="font-bold" style={{ color: 'var(--accent-orange)' }}>{project.service}</span>
                </div>
              </div>

              {/* Decorative image showcase with HomePage Project WebP */}
              {project.image && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="relative rounded-[22px] overflow-hidden border border-slate-100 shadow-md group bg-slate-50 aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3.5">
                      <span className="text-xs font-bold text-white tracking-wide drop-shadow-sm">
                        {project.cardLabel}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── SECTION: OBJECTIVE & CORE OBJECTIVES ─────────────────── */}
        <div
          className="rounded-[28px] p-8 md:p-10 border mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
          style={{
            backgroundColor: 'var(--bg-light-purple)',
            borderColor: 'rgba(139, 92, 246, 0.15)'
          }}
        >
          <div className="max-w-3xl mb-8">
            <div className="services-eyebrow flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest text-[13px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
              >
                OBJECTIVE
              </span>
            </div>
            <p className="text-[17px] md:text-[19px] font-bold leading-relaxed" style={{ color: 'var(--brand-navy)' }}>
              {project.objectiveLead}
            </p>
          </div>

          {/* Core Objectives Cards */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
              Core Objectives
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {project.coreObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-orange-200 transition-colors"
                >
                  <span className="text-[var(--accent-orange)] font-bold text-[18px] leading-none mt-0.5">•</span>
                  <span className="text-[14px] md:text-[15px] font-semibold text-slate-800 leading-snug">
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION: FOCUS PILLARS (CommonWhyAdsserv 5-card grid style) ────── */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="services-eyebrow flex items-center gap-2 mb-4">
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
                DISCIPLINE FOCUS
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: 'var(--brand-navy)' }}
            >
              {project.focusTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {project.focusPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-[56px] h-[56px] rounded-[18px] overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105 mb-4">
                    <img
                      src={whyAdsservIcons[idx % whyAdsservIcons.length]}
                      alt={pillar.title}
                      className="w-full h-full object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-[16px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>
                    {pillar.title}
                  </h4>
                  <p className="text-[13.5px] font-medium leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SPECIAL SECTION: CONTENT DIRECTION (For Project 02 Nu-Tech) ── */}
        {project.contentRoles && (
          <div
            className="rounded-[28px] p-8 md:p-10 border mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
            style={{
              backgroundColor: 'var(--bg-light-purple)',
              borderColor: 'rgba(139, 92, 246, 0.15)'
            }}
          >
            <div className="max-w-2xl mb-8">
              <div className="services-eyebrow flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                  <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest text-[13px]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
                >
                  CONTENT DIRECTION
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
                style={{ color: 'var(--brand-navy)' }}
              >
                Content Roles
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {project.contentRoles.map((roleItem, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[var(--bg-light-purple)] flex items-center justify-center">
                      {getRoleIcon(roleItem.icon)}
                    </div>
                    <span
                      className="text-xs font-extrabold uppercase tracking-wider"
                      style={{ color: 'var(--accent-orange)' }}
                    >
                      {roleItem.role}
                    </span>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-600 font-medium leading-relaxed">
                    {roleItem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SECTION: VISUAL FLOW FUNNEL (Services Stepper Card) ──────── */}
        <div
          className="rounded-[28px] p-8 md:p-10 mb-16 border shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
          style={{
            backgroundColor: 'var(--bg-light-purple)',
            borderColor: 'rgba(139, 92, 246, 0.15)'
          }}
        >
          <div className="mb-8 max-w-3xl">
            <div className="services-eyebrow flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest text-[13px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
              >
                {project.flowTitle}
              </span>
            </div>
            <p className="text-[16px] md:text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>
              {project.flowSubtitle}
            </p>
          </div>

          {/* Connected Flow Steps with hidden scrollbar */}
          <div
            className="no-scrollbar flex flex-col md:flex-row items-stretch justify-between gap-2.5 overflow-x-auto pb-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {project.flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 min-w-[115px] bg-white rounded-2xl p-3.5 md:p-4 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-200 transition-all">
                  <div>
                    <span className="text-sm font-bold block leading-snug" style={{ color: 'var(--brand-navy)' }}>
                      {step.label}
                    </span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {step.highlight}
                    </span>
                  </div>
                </div>

                {/* Arrow divider */}
                {idx < project.flowSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-1 shrink-0" style={{ color: 'var(--accent-orange)' }}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── SPECIAL SECTION: CAMPAIGN THINKING (For Project 01 No Qu TAM) ── */}
        {project.specialInsight && (
          <div className="bg-white rounded-[28px] p-8 md:p-10 border border-orange-200/80 mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div className="max-w-3xl mb-6">
              <div className="services-eyebrow flex items-center gap-2 mb-4">
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
                  {project.specialInsight.tag}
                </span>
              </div>
              <h3
                className="text-xl md:text-2xl font-extrabold mb-2"
                style={{ color: 'var(--brand-navy)' }}
              >
                "{project.specialInsight.quote}"
              </h3>
            </div>

            {/* Formula pills */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
              {project.specialInsight.formula.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className="px-4 py-2.5 rounded-xl text-sm font-bold shadow-xs border"
                    style={{
                      backgroundColor: 'var(--bg-light-purple)',
                      borderColor: 'rgba(139, 92, 246, 0.15)',
                      color: 'var(--brand-navy)'
                    }}
                  >
                    {item}
                  </div>
                  {idx < project.specialInsight.formula.length - 1 && (
                    <span className="text-[var(--accent-orange)] font-extrabold text-lg">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm font-semibold text-slate-700 italic">
              {project.specialInsight.note}
            </p>
          </div>
        )}

        {/* ── PROJECT TAKEAWAY CALLOUT ──────────────────────────────── */}
        <div
          className="p-6 md:p-8 rounded-[24px] border-l-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{
            backgroundColor: 'var(--bg-light-purple)',
            borderColor: 'var(--accent-orange)'
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]" />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--accent-orange)' }}
              >
                PROJECT TAKEAWAY
              </span>
            </div>
            <p className="font-semibold text-base md:text-lg leading-relaxed" style={{ color: 'var(--brand-navy)' }}>
              "{project.takeaway}"
            </p>
          </div>
        </div>

      </div>
    </article>
  );
}
