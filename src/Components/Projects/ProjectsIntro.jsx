import React from 'react';
import { Layers, Target, Share2, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

export default function ProjectsIntro({ activeFilter, onFilterChange, projectCounts }) {
  const filterTabs = [
    {
      id: 'All',
      label: 'All Projects',
      count: projectCounts.all,
      icon: Layers,
      activeColor: 'from-[#1e2f57] to-[#293d6d]',
      iconActive: 'text-amber-400',
      iconInactive: 'text-slate-400'
    },
    {
      id: 'Performance Marketing',
      label: 'Performance Marketing',
      count: projectCounts.performance,
      icon: Target,
      activeColor: 'from-[#ea580c] to-[#f97316]',
      iconActive: 'text-white',
      iconInactive: 'text-orange-500'
    },
    {
      id: 'Social Media',
      label: 'Social Media',
      count: projectCounts.social,
      icon: Share2,
      activeColor: 'from-[#7c3aed] to-[#9333ea]',
      iconActive: 'text-white',
      iconInactive: 'text-purple-500'
    }
  ];

  const handleTabClick = (filterId) => {
    onFilterChange(filterId);

    // Smoothly ensure the project case study is brought into comfortable view
    setTimeout(() => {
      const filterBar = document.getElementById('filter-disciplines-bar');
      if (filterBar) {
        const rect = filterBar.getBoundingClientRect();
        if (rect.top < 60 || rect.top > 220) {
          const yOffset = -75;
          const targetY = rect.top + window.pageYOffset + yOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    }, 40);
  };

  return (
    <section id="selected-projects" className="w-full pt-20 md:pt-24 pb-10 md:pb-12 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Intro Header Grid styled exactly like Services CommonProblem (fragments) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="services-eyebrow flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest text-[13px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
              >
                SELECTED WORK THROUGH ADSSERV
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "Digital" },
                { text: "marketing" },
                { text: "looks", italic: true },
                { text: "different" },
                { text: "for" },
                { text: "every" },
                { text: "business." }
              ]}
              maxW="500px"
            />
          </div>

          {/* Right Column: Explanatory Copy & White Feature Card strictly with user content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p className="leading-relaxed">
              A performance marketing campaign may need a completely different approach from a social media engagement strategy. The audience, offer, creative, channel and desired action all influence how the work is executed.
            </p>

            <div className="bg-white p-7 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-orange)] shrink-0" />
                <p className="text-[17px] md:text-[18px] font-bold" style={{ color: 'var(--brand-navy)' }}>
                  Here are selected client projects handled through AdsServ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div id="filter-disciplines-bar" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5 pt-8 border-t border-purple-200/50">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-xs">
              <Filter className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 block">
                Filter By Discipline
              </span>
              <span className="text-[11px] font-medium text-slate-400 block -mt-0.5">
                Explore by marketing specialization
              </span>
            </div>
          </div>

          {/* Segmented Filter Controls */}
          <div className="w-full sm:w-auto">
            {/* Mobile: flat tab row */}
            <div className="flex sm:hidden items-stretch bg-white rounded-2xl border border-purple-100 shadow-[0_4px_20px_rgba(139,92,246,0.08)] overflow-hidden">
              {filterTabs.map((tab, i) => {
                const isActive = activeFilter === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 text-[10px] font-extrabold uppercase tracking-wide transition-all duration-200 relative ${i > 0 ? 'border-l border-purple-100' : ''
                      } ${isActive ? 'text-white' : 'text-slate-500'}`}
                    style={isActive ? {
                      background: tab.id === 'All'
                        ? 'linear-gradient(135deg, #1e2f57, #293d6d)'
                        : tab.id === 'Performance Marketing'
                          ? 'linear-gradient(135deg, #ea580c, #f97316)'
                          : 'linear-gradient(135deg, #7c3aed, #9333ea)'
                    } : {}}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.iconInactive}`} />
                    <span className="leading-tight text-center px-1">{tab.label}</span>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>{tab.count}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop: original pill style */}
            <div className="hidden sm:inline-flex items-center p-1.5 bg-white/95 backdrop-blur-md rounded-full border border-purple-200/80 shadow-[0_4px_24px_rgba(30,47,87,0.08)] gap-1 relative">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className={`group relative flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors duration-200 cursor-pointer select-none whitespace-nowrap ${isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-purple-50/50'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${tab.activeColor} shadow-md shadow-black/10`}
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-transform duration-200 ${isActive ? `${tab.iconActive} scale-110` : `${tab.iconInactive} group-hover:scale-110`
                        }`} />
                      <span>{tab.label}</span>
                    </span>
                    <span className={`relative z-10 text-[11px] px-2 py-0.5 rounded-full font-mono font-bold transition-all duration-200 ${isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-purple-100 group-hover:text-purple-800'
                      }`}>
                      {tab.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
