import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { TextRotate } from '../../../Components/ui/text-rotate';
import '../common.css';

import healthImg from "../../../assets/HomePage/Industries/Health Care.webp";
import realEstateImg from "../../../assets/HomePage/Industries/Real Estate.webp";
import educationImg from "../../../assets/HomePage/Industries/Education care.webp";
import saasImg from "../../../assets/Services/IT-SAAS.webp";
import beautyImg from "../../../assets/HomePage/Industries/Beauty & Salon.webp";

const industries = [
  {
    category: "Healthcare Marketing",
    title: "Health Care",
    subtitle: "Building trust in a sensitive space.",
    image: healthImg,

  },
  {
    category: "Property Marketing",
    title: "Real Estate",
    subtitle: "Turning properties into digital stories.",
    image: realEstateImg,

  },
  {
    category: "Education Marketing",
    title: "Education",
    subtitle: "Connecting institutions with students.",
    image: educationImg,

  },
  {
    category: "Tech Marketing",
    title: "IT-Tech / SaaS",
    subtitle: "Making technology easy to choose.",
    image: saasImg,

  },
  {
    category: "Lifestyle Marketing",
    title: "Beauty & Salon",
    subtitle: "Visual brands that command attention.",
    image: beautyImg,

  },
];

export default function Industries() {
  return (
    <section
      className="w-full pt-20 pb-32 relative overflow-hidden"
      style={{ background: 'var(--bg-light-purple)', fontFamily: 'var(--font-primary)' }}
    >
      {/* Top Curve Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px]" style={{ display: 'block' }}>
          <path d="M0,0 L1440,0 L1440,0 Q720,120 0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="w-full px-[10px] relative z-20">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3 mb-20 text-center">
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[16px] italic font-medium text-[#1a233a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              INDUSTRY EXPERIENCE
            </span>
          </div>

          <LayoutGroup>
            <motion.div
              layout
              className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-[36px] md:text-[50px] font-extrabold leading-[1.1] tracking-tight text-center flex-wrap"
              style={{ color: 'var(--text-dark-blue)' }}
            >
              <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }} className="whitespace-nowrap">
                Context changes
              </motion.span>
              <TextRotate
                texts={['everything. ✦', 'the approach.', 'the audience.', 'the message.', 'the outcome.']}
                mainClassName="text-white px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md"
                style={{ background: 'var(--text-dark-blue)' }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.div>
          </LayoutGroup>

          <p
            className="text-[15px] font-medium mt-4 max-w-[680px] leading-relaxed"
            style={{ color: 'var(--text-gray)' }}
          >
            A marketing idea that works for a beauty brand may make no sense for a healthcare business. We adapt the strategy to the audience, buying journey, competition, and communication requirements of the industry.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-4 lg:gap-3 xl:gap-5 mb-8 overflow-x-auto" style={{ scrollbarWidth: 'none', paddingTop: '20px' }}>
          {industries.map((item, index) => {
            // Middle card (index 2) is tallest, cards taper outward
            const heights = ['260px', '300px', '340px', '300px', '260px'];
            const cardHeight = heights[index] || '280px';

            return (
              <motion.a
                key={index}
                href={item.path}
                className="flex flex-col items-center group relative z-10 hover:z-20"
                style={{ textDecoration: 'none', flex: '1 1 0', maxWidth: '220px', minWidth: '160px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Oval Image Card */}
                <div
                  style={{
                    width: '100%',
                    height: cardHeight,
                    borderRadius: '120px',
                    overflow: 'hidden',
                    backgroundColor: '#E8DCFA',
                    position: 'relative',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(139, 92, 246, 0.22)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.12)';
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Subtle purple overlay at bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, rgba(196, 168, 237, 0.5), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Text Below */}
                <div className="flex flex-col items-center text-center mt-6 px-2 w-full">
                  <span
                    className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.12em] mb-2"
                    style={{ color: 'var(--brand-orange)' }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="text-[18px] md:text-[20px] font-extrabold mb-2 leading-tight"
                    style={{ color: 'var(--text-dark-blue)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[12.5px] md:text-[13px] font-medium leading-relaxed max-w-[180px]"
                    style={{ color: 'var(--text-gray)' }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
