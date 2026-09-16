import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LayoutGroup, motion } from 'framer-motion';
import { TextRotate } from '../../../Components/ui/text-rotate';
import { ConnoisseurStackInteractor } from '../../../Components/ui/connoisseur-stack-interactor.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../common.css';

// Import client project images
import noquTamImg from "../../../assets/HomePage/Project/Noqu TAM.webp";
import nuTechImg from "../../../assets/HomePage/Project/NU-Tech Associates.webp";
import ramesImg from "../../../assets/HomePage/Project/Rames Natural Care.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Projectsection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stackRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stack entrance
      gsap.fromTo(
        stackRef.current,
        { scale: 0.96, opacity: 0, y: 25 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Clicking either the left name or right image navigates directly to that project case study
  const handleProjectClick = (item) => {
    if (item && item.id) {
      navigate(`/projects#${item.id}`);
    } else {
      navigate('/projects');
    }
  };

  const projectItems = [
    {
      id: "noqu-tam",
      num: "01",
      name: "NO QU TAM",
      clipId: "clip-original",
      image: noquTamImg,
      service: "Performance Marketing",
      industry: "SaaS / Workforce Technology"
    },
    {
      id: "nutech-associates",
      num: "02",
      name: "NU-TECH ASSOCIATES",
      clipId: "clip-hexagons",
      image: nuTechImg,
      service: "Social Media",
      industry: "Professional Services"
    },
    {
      id: "dr-ramans",
      num: "03",
      name: "DR. RAMAN'S NATURE CURE",
      clipId: "clip-pixels",
      image: ramesImg,
      service: "Performance Marketing",
      industry: "Nature Cure / Wellness"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full pt-20 md:pt-28 bg-[#fff] relative z-0"
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      <style>{`
        /* Responsive styles matching Process.jsx */
        @media (max-width: 767px) {
          .project-heading-text {
            font-size: clamp(20px, 6vw, 26px) !important;
          }
          .project-text-rotate {
            font-size: clamp(18px, 5vw, 24px) !important;
            padding: 6px 10px !important;
          }
          .project-description {
            font-size: 13px !important;
            padding: 0 12px;
          }
        }
        @media (max-width: 480px) {
          .project-heading-text {
            font-size: clamp(18px, 5.5vw, 22px) !important;
          }
          .project-text-rotate {
            font-size: clamp(16px, 4.5vw, 20px) !important;
            padding: 4px 8px !important;
          }
          .project-description {
            font-size: 12px !important;
          }
        }
      `}</style>

      {/* Top Upward Curve Divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[100px] md:h-[160px] lg:h-[200px]"
        >
          <path
            d="M0,120 Q720,0 1440,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* ── HEADER FORMAT EXACTLY LIKE PROCESS.JSX ── */}
        <div ref={headerRef} className="flex flex-col items-center justify-center gap-3 mb-16 md:mb-20 text-center">
          
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[16px] italic font-medium text-[#1a233a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              CLIENTS WORK
            </span>
          </div>

          {/* Heading with TextRotate (exact Process.jsx structure) */}
          <LayoutGroup>
            <motion.div
              layout
              className="project-heading-text flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-[26px] sm:text-[36px] md:text-[50px] font-extrabold leading-[1.15] tracking-tight text-center flex-wrap"
              style={{ color: 'var(--text-dark)' }}
            >
              <motion.span layout transition={{ type: 'spring', damping: 25, stiffness: 600 }} className="whitespace-nowrap">
                Real Client Projects.
              </motion.span>
              <TextRotate
                texts={['Real Marketing Execution.', 'Targeted Lead Generation.', 'High-Converting Campaigns.']}
                mainClassName="project-text-rotate text-white px-3 sm:px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md text-[24px] sm:text-[34px] md:text-[46px]"
                style={{ background: 'var(--text-dark-blue)' }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 25, stiffness: 600 }}
                rotationInterval={2500}
              />
            </motion.div>
          </LayoutGroup>

          {/* Paragraph description format matching Process.jsx */}
          <div className="project-description text-[14px] sm:text-[15px] text-gray-500 font-medium mt-3 max-w-[760px] text-center leading-relaxed px-4">
            <p className="mb-3 text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
              A selection of digital marketing projects delivered through AdsServ across performance marketing and social media, working with businesses from different industries and customer segments.
            </p>
            <p className="mb-4 text-gray-800 font-bold text-sm sm:text-base italic" style={{ color: 'var(--brand-orange)' }}>
              Every project starts with the business objective, audience and channel — then turns that understanding into focused marketing execution.
            </p>

            {/* Intro text format */}
            <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 text-xs sm:text-sm text-left inline-block max-w-[680px]">
              <p className="font-bold text-gray-800 mb-1.5 text-center sm:text-left">
                Selected Work Through AdsServ
              </p>
              <p className="leading-relaxed mb-2 text-center sm:text-left">
                Digital marketing looks different for every business. A performance marketing campaign may need a completely different approach from a social media engagement strategy. The audience, offer, creative, channel and desired action all influence how the work is executed.
              </p>
              <p className="text-xs font-semibold text-orange-600 text-center sm:text-left">
                Here are selected client projects handled through AdsServ:
              </p>
            </div>
          </div>

          {/* CTA - Uiverse button style with brand colors (exact Process.jsx style) */}
          <button
            className="know-more-btn mt-4 cursor-pointer"
            onClick={() => navigate('/projects')}
          >
            <span>Explore Client Work</span>
            <div className="know-more-icon">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* ── CONNOISSEUR STACK INTERACTOR ── */}
        {/* Clicking both the left side name AND the right side image directly navigates to that project */}
        <div ref={stackRef} className="relative pb-16 md:pb-24">
          <ConnoisseurStackInteractor
            items={projectItems}
            onItemClick={handleProjectClick}
            className="min-h-[480px] md:min-h-[580px]"
          />
        </div>

      </div>
    </section>
  );
}