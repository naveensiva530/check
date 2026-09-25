import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import '../common.css';
import ScrollRevealHeading from '../../Services/common/ScrollRevealHeading';

import startupsImg        from '../../../assets/HomePage/WhoWeWorkWith/Startups.webp';
import growingBizImg      from '../../../assets/HomePage/WhoWeWorkWith/Growing Businesses.webp';
import establishedImg     from '../../../assets/HomePage/WhoWeWorkWith/Established Brands.webp';
import saasImg            from '../../../assets/HomePage/WhoWeWorkWith/SaaS & Technology.webp';
import localBizImg        from '../../../assets/HomePage/WhoWeWorkWith/Local Businesses.webp';
import creatorsImg        from '../../../assets/HomePage/WhoWeWorkWith/Creators & Personal Brands.webp';

const audiences = [
  {
    title: "Startups",
    desc: "Build visibility, positioning, content, and digital foundations without making the brand feel bigger than it really is.",
    image: startupsImg,
  },
  {
    title: "Growing Businesses",
    desc: "Bring more structure to marketing while finding new ways to reach and convert the right audience.",
    image: growingBizImg,
  },
  {
    title: "Established Brands",
    desc: "Refresh digital communication, strengthen relevance, and connect established brand equity with modern audience behaviour.",
    image: establishedImg,
  },
  {
    title: "SaaS & Technology",
    desc: "Turn complex products and technical ideas into clearer stories, stronger experiences, and useful digital journeys.",
    image: saasImg,
  },
  {
    title: "Local Businesses",
    desc: "Build visibility and meaningful connections with the customers who matter in your market.",
    image: localBizImg,
  },
  {
    title: "Creators & Personal Brands",
    desc: "Turn expertise, personality, and audience attention into a stronger digital presence.",
    image: creatorsImg,
  }
];

const StepRow = ({ step, index }) => {
  const isReversed = index % 2 !== 0;

  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <div ref={ref} className="relative w-full flex flex-col md:flex-row gap-5 md:gap-0 items-center py-5 md:py-10 group">
      
      {/* Content Side */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center ${isReversed ? 'md:order-2 md:pl-16 lg:pl-20' : 'md:order-1 md:pr-16 lg:pr-20'}`}>
         {/* Title */}
         <motion.h3 
           className="text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-[1.2] mb-3 md:mb-4 tracking-tight"
           style={{ color: 'var(--text-dark-blue)', opacity, y }}
         >
           {step.title}
         </motion.h3>
         
         {/* Text */}
         <motion.p 
           className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] md:leading-[1.7] font-medium mb-3 md:mb-0"
           style={{ color: 'var(--text-gray)', opacity, y }}
         >
           {step.desc}
         </motion.p>
      </div>
      
      {/* Image Side */}
      <div className={`relative w-full md:w-1/2 flex ${isReversed ? 'md:order-1 justify-end md:pr-12' : 'md:order-2 justify-start md:pl-12'}`}>
         
         {/* Reduced image container width and height */}
         <motion.div 
           className="w-full md:w-[95%] lg:w-full aspect-[16/9] md:aspect-[21/9] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[var(--primary-white)] shadow-lg md:shadow-xl ring-1 ring-[var(--border-gray)]"
           style={{ opacity, y }}
         >
            <img 
              src={step.image} 
              alt={step.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              loading="lazy"
              decoding="async"
            />
         </motion.div>
         
         {/* Decorative line connecting image to center on desktop */}
         {/* We stretch the line to cover the gap to the absolute center */}
         <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-[var(--border-gray)] ${isReversed ? 'right-0 w-12' : 'left-0 w-12'}`}>
            <motion.div 
              className={`w-full h-full bg-[var(--brand-orange)] ${isReversed ? 'origin-right' : 'origin-left'}`}
              style={{ scaleX: scrollYProgress }}
            />
         </div>
      </div>

    </div>
  );
};

export default function WhoWeWorkWith() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section 
      className="w-full pt-14 pb-14 md:pt-24 md:pb-24 relative overflow-hidden"
      style={{ background: "var(--primary-white)", fontFamily: "var(--font-primary)" }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10" ref={containerRef}>
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-start justify-start text-left mb-12 sm:mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[13px] sm:text-[15px] italic font-medium uppercase tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--text-dark-blue)" }}
            >
              BUILT FOR DIFFERENT KINDS OF AMBITION
            </span>
          </div>
          
          <ScrollRevealHeading
            className="mb-4 sm:mb-6"
            words={[
              { text: 'Different' },
              { text: 'businesses.' },
              { text: 'Different', italic: true },
              { text: 'problems.', italic: true },
              { break: true },
              { text: 'Same' },
              { text: 'need' },
              { text: 'for' },
              { text: 'better', italic: true },
              { text: 'marketing.' },
            ]}
            style={{ fontSize: 'clamp(1.55rem, 3.2vw, 3.25rem)' }}
          />
          
          <p 
            className="text-[14px] sm:text-[16px] md:text-[17px] font-medium max-w-[650px] leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            We work with brands and organisations at different stages—from businesses finding their voice to established companies looking for a sharper digital presence.
          </p>
        </div>

        {/* TIMELINE SECTION */}
        <div className="relative w-full">
          
          {/* Central Vertical Line (Desktop) */}
          <div className="hidden md:block absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 w-[2px] bg-[var(--border-gray-light)] z-0">
             <motion.div 
               className="w-full bg-[var(--brand-orange)] origin-top"
               style={{ 
                 height: '100%',
                 scaleY: scrollYProgress 
               }}
             />
             {/* Timeline dot */}
             <motion.div 
               className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--brand-orange)] shadow-[0_0_0_6px_var(--primary-white)]"
               style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
             />
          </div>

          <div className="flex flex-col relative z-10">
            {audiences.map((item, index) => (
              <StepRow key={index} step={item} index={index} />
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 md:mt-24 flex justify-center relative z-20">
          <button className="know-more-btn" onClick={() => navigate('/contact')}>
            <span>Talk About Your Business</span>
            <div className="know-more-icon">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
