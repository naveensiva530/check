import React from 'react';
import { m, LazyMotion, domAnimation } from 'motion/react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

const Pin = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={style}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const defaultCardPositions = [
  { className: 'md:absolute md:top-0 md:left-[10%]' },
  { className: 'md:absolute md:top-[110px] md:right-[10%]' },
  { className: 'md:absolute md:top-[440px] md:left-[10%]' },
  { className: 'md:absolute md:top-[560px] md:right-[8%]' },
  { className: 'md:absolute md:top-[840px] md:left-[10%]' },
  { className: 'md:absolute md:top-[960px] md:right-[8%]' },
  { className: 'md:absolute md:top-[1240px] md:left-[10%]' },
  { className: 'md:absolute md:top-[1360px] md:right-[8%]' },
  { className: 'md:absolute md:top-[1640px] md:left-[10%]' },
  { className: 'md:absolute md:top-[1760px] md:right-[8%]' },
];

const SVG_SEGMENTS = [
  // Card 0 -> Card 1
  "C 450 150, 500 260, 660 260",
  // Card 1 -> Card 2
  "C 800 260, 450 370, 265 450",
  // Card 2 -> Card 3
  "C 265 560, 500 660, 690 660",
  // Card 3 -> Card 4
  "C 855 660, 450 760, 265 840",
  // Card 4 -> Card 5
  "C 265 960, 500 1060, 700 1060",
  // Card 5 -> Card 6
  "C 855 1060, 450 1160, 265 1240",
  // Card 6 -> Card 7
  "C 265 1360, 500 1460, 700 1460",
  // Card 7 -> Card 8
  "C 855 1460, 450 1560, 265 1640",
  // Card 8 -> Card 9
  "C 265 1760, 500 1860, 700 1860",
];

const CANVAS_HEIGHT_MAP = {
  1: 400,
  2: 520,
  3: 820,
  4: 920,
  5: 1220,
  6: 1310,
  7: 1590,
  8: 1710,
};

function getDefaultCanvasHeight(count) {
  if (CANVAS_HEIGHT_MAP[count]) return CANVAS_HEIGHT_MAP[count];
  if (count <= 0) return 400;
  const lastIndex = count - 1;
  const isLeft = lastIndex % 2 === 0;
  const k = Math.floor(lastIndex / 2);
  const lastTop = isLeft ? (k * 400 + 40) : (k * 400 + 160);
  return lastTop + 350;
}

function getDefaultSvgPath(count) {
  if (count <= 1) return "";
  const segments = SVG_SEGMENTS.slice(0, count - 1);
  return `M 265 150 ${segments.join(" ")}`;
}

function MetricCard({ card, position }) {
  return (
    <div
      className={`relative flex-shrink-0 w-[260px] sm:w-[295px] md:w-[295px] transition-transform duration-300 hover:z-30 hover:scale-105 ${card.rotate || ''} ${position?.className || ''}`}
    >
      <div
        className="bg-white p-2 rounded-[25px]"
        style={{ boxShadow: '0 10px 28px rgba(30,47,87,0.10)', border: '1px solid rgba(30,47,87,0.06)' }}
      >
        <div className="flex justify-center mb-5 mt-1">
          <Pin style={{ color: card.pinColor }} />
        </div>

        <div
          className="rounded-[15px] p-5 flex flex-col relative overflow-hidden"
          style={{ background: card.bg, border: `1.5px solid ${card.border}` }}
        >
          <span
            className="text-[36px] font-extrabold mb-3 leading-none"
            style={{
              color: card.text,
              fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
            }}
          >
            {card.num}
          </span>

          {card.goal && (
            <span
              className="text-[11px] font-extrabold uppercase tracking-wider mb-2"
              style={{ color: card.text }}
            >
              {card.goal}
            </span>
          )}

          <h3
            className="text-[18px] font-extrabold leading-tight mb-3"
            style={{ color: 'var(--brand-navy)' }}
          >
            {card.title}
          </h3>

          <p
            className="text-[13px] leading-relaxed font-medium"
            style={{ color: 'var(--text-gray)' }}
          >
            {card.desc}
          </p>

          <div
            className="absolute -bottom-2 -right-2 w-16 h-16 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${card.text} 1.5px, transparent 1.5px)`,
              backgroundSize: '8px 8px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CommonMetrics({
  tagText = "MEASURING PERFORMANCE",
  headingWords,
  description,
  bottomText,
  metrics = [],
  canvasHeight,
  svgPath,
  cardPositions
}) {
  const count = metrics.length;
  const resolvedCanvasHeight = canvasHeight || getDefaultCanvasHeight(count);
  const resolvedSvgPath = svgPath !== undefined ? svgPath : getDefaultSvgPath(count);
  const resolvedCardPositions = cardPositions || defaultCardPositions;

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full relative font-primary py-14 sm:py-20 md:py-24 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>

        <div className="max-w-[1100px] mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-10 sm:mb-16 lg:mb-20">
            <div className="flex flex-col">
              <div className="services-eyebrow flex items-center gap-2 mb-6">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
                >
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
                >
                  {tagText}
                </span>
              </div>
              <ScrollRevealHeading words={headingWords} />
            </div>

            <div className="flex flex-col justify-center">
              {description && (
                <p
                  className="text-[16px] md:text-[18px] font-medium leading-relaxed"
                  style={{ color: 'var(--text-gray)' }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>

          <div className="relative w-full max-w-[900px] mx-auto">
            <style>{`
              @media (min-width: 768px) {
                .ms-pinboard { height: ${resolvedCanvasHeight}px; }
              }
            `}</style>

            {/* Mobile: Vertical Stack. Desktop: pinboard */}
            <div className="md:hidden w-full flex flex-col items-center gap-6 pb-8">
              {metrics.map((card, idx) => (
                <MetricCard key={idx} card={card} />
              ))}
            </div>

            <div className="ms-pinboard relative w-full hidden md:block">

              {resolvedSvgPath && (
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                  viewBox={`0 0 900 ${resolvedCanvasHeight}`}
                  preserveAspectRatio="none"
                  style={{ overflow: 'visible' }}
                >
                  <m.path
                    d={resolvedSvgPath}
                    stroke="rgba(30,47,87,0.15)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    fill="none"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -140 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />
                </svg>
              )}

              {metrics.map((card, idx) => (
                <MetricCard
                  key={idx}
                  card={card}
                  position={resolvedCardPositions[idx] || resolvedCardPositions[resolvedCardPositions.length - 1]}
                />
              ))}
            </div>
          </div>

          {bottomText && (
            <div className="w-full flex justify-center mt-10 sm:mt-16 lg:mt-20">
              <div
                className="max-w-[800px] w-full text-center p-6 sm:p-8 rounded-3xl text-white"
                style={{ background: 'var(--accent-orange)', boxShadow: '0 12px 36px rgba(224,131,38,0.25)' }}
              >
                <p className="text-[15px] sm:text-[18px] md:text-[20px] font-bold leading-relaxed">
                  {bottomText}
                </p>
              </div>
            </div>
          )}

        </div>
      </section>
    </LazyMotion>
  );
}
