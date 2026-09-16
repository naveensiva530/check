import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Exact Projects Components
import ProjectsHero from '../Projects/ProjectsHero';
import ProjectsIntro from '../Projects/ProjectsIntro';
import ProjectCaseStudy from '../Projects/ProjectCaseStudy';
import PortfolioDisciplines from '../Projects/PortfolioDisciplines';
import ProjectsDemonstrate from '../Projects/ProjectsDemonstrate';
import MarketingApproach from '../Projects/MarketingApproach';
import ProjectsSummaryCards from '../Projects/ProjectsSummaryCards';
import ProjectsFinalCTA from '../Projects/ProjectsFinalCTA';

// Data
import { projectsData } from '../Projects/projectsData';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.service === activeFilter);

  const projectCounts = {
    all: projectsData.length,
    performance: projectsData.filter(p => p.service === 'Performance Marketing').length,
    social: projectsData.filter(p => p.service === 'Social Media').length,
  };

  const handleExploreClick = () => {
    const el = document.getElementById('selected-projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* 1. HERO */}
      <ProjectsHero onExploreClick={handleExploreClick} />

      {/* 2. INTRO */}
      <ProjectsIntro
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projectCounts={projectCounts}
      />

      {/* 3. CASE STUDIES (PROJECT 01: No Qu TAM, PROJECT 02: Nu-Tech Associates, PROJECT 03: Dr. Raman's Nature Cure Foundation) */}
      <div id="projects-list" className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
            }}
            exit={{
              opacity: 0,
              y: -8,
              filter: 'blur(2px)',
              transition: { duration: 0.14, ease: 'easeIn' }
            }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCaseStudy
                key={project.id}
                project={project}
                isLast={index === filteredProjects.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. ADSSERV CLIENT PORTFOLIO (Three Projects. Two Core Marketing Disciplines.) */}
      <PortfolioDisciplines />

      {/* 5. WHAT THESE PROJECTS DEMONSTRATE (Different Businesses Need Different Marketing Approaches) */}
      <ProjectsDemonstrate />

      {/* 6. MY MARKETING APPROACH (Start With the Objective) */}
      <MarketingApproach />

      {/* 7. PERFORMANCE MARKETING PROJECTS & SOCIAL MEDIA PROJECT DIRECTORY */}
      <ProjectsSummaryCards />

      {/* 8. FINAL CTA (Have a Business That Needs Better Digital Marketing?) */}
      <ProjectsFinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
