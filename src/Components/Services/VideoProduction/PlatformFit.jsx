import React from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { FaInstagram, FaTiktok, FaYoutube, FaGlobe, FaBullhorn } from 'react-icons/fa6';
import '../../../Components/HomePage/common.css';

/* ─── Platform data ─────────────────────────────────────── */
const platforms = [
  {
    name: 'Instagram',
    handle: '@Adsserv',
    desc: 'Short-form storytelling, Reels, product content, brand moments, and social-first creative.',
    Icon: FaInstagram,
    color: '#E1306C',
    bg: '#fff0f5',
    stat: 'Social-first',
  },
  {
    name: 'TikTok',
    handle: '@Adsserv',
    desc: 'Fast hooks, native-feeling storytelling, trends where relevant, creator-led concepts, and concise narratives.',
    Icon: FaTiktok,
    color: '#010101',
    bg: '#f5f5f5',
    stat: 'Discovery',
  },
  {
    name: 'YouTube',
    handle: 'Adsserv',
    desc: 'Longer-form storytelling, explainers, product demonstrations, brand content, and Shorts.',
    Icon: FaYoutube,
    color: '#FF0000',
    bg: '#fff5f5',
    stat: 'Watch time',
  },
  {
    name: 'Websites',
    handle: 'Adsserv',
    desc: 'Hero videos, product demonstrations, explainers, testimonials, and visual storytelling that support the website experience.',
    Icon: FaGlobe,
    color: '#1e2f57',
    bg: '#f0f5ff',
    stat: 'Owned media',
  },
  {
    name: 'Paid Media',
    handle: '@Adsserv',
    desc: 'Creative variations designed around advertising placements, audiences, messages, and testing requirements.',
    Icon: FaBullhorn,
    color: '#e08326',
    bg: '#fff7ed',
    stat: 'Campaigns',
  },
];

/* ─── Split into two rows ───────────────────────────────── */
const rowA = [...platforms, ...platforms, ...platforms, ...platforms]; // duplicate for seamless loop
const rowB = [...platforms.slice(2), ...platforms.slice(0, 2), ...platforms.slice(2), ...platforms.slice(0, 2), ...platforms, ...platforms];

/* ─── Individual Card ───────────────────────────────────── */
function PlatformCard({ platform }) {
  const { name, handle, desc, Icon, color, bg, stat } = platform;
  return (
    <div
      className="relative flex-shrink-0 w-[240px] sm:w-[270px] md:w-[300px] rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden"
      style={{ boxShadow: '0 4px 20px rgba(30,47,87,0.06)' }}
    >
      {/* Top section with icon */}
      <div
        className="relative p-4 sm:p-5 md:p-6 flex items-start justify-between"
        style={{ background: bg }}
      >
        {/* Platform icon */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-md"
          style={{ background: color }}
        >
          <Icon size={18} color="#fff" />
        </div>

        {/* Stat badge */}
        <span
          className="text-[10px] sm:text-[11px] md:text-[12px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider border"
          style={{
            color: 'var(--brand-navy)',
            borderColor: 'rgba(30,47,87,0.12)',
            background: '#fff',
          }}
        >
          {stat}
        </span>

        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 -z-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      </div>

      {/* Bottom content */}
      <div className="p-4 pt-3 sm:p-5 sm:pt-4 md:p-6 md:pt-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>
            {name}
          </h3>
          {/* Verified dot */}
          <span
            className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0"
            style={{ background: color, fontSize: '9px', fontWeight: 900 }}
          >
            ✓
          </span>
        </div>
        <p className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold mb-2 sm:mb-3" style={{ color }}>
          {handle}
        </p>
        <p className="text-[11px] sm:text-[12px] md:text-[13.5px] leading-relaxed" style={{ color: 'var(--text-gray)' }}>
          {desc}
        </p>

        {/* Dashed divider */}
        <div className="border-t border-dashed border-slate-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--brand-navy)' }}>
            We produce this
          </span>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: color }}
          >
            <span className="text-white font-black" style={{ fontSize: '10px' }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────── */
export default function PlatformFit() {
  return (
    <section className="w-full py-24 bg-white relative font-primary overflow-hidden">
      {/* Header */}
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
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
                ONE VIDEO DOESN'T ALWAYS FIT EVERYWHERE
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "The" }, { text: "platform" }, { text: "changes" }, { text: "the" },
                { text: "way", italic: true }, { text: "the" }, { text: "story" }, { text: "is" }, { text: "told." }
              ]}
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 justify-center">
            <p>A strong video has to earn attention quickly and fit the platform where it will be watched.</p>
            <p className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              ADSSERV shapes the edit, pacing, and format around the channel — not a one-size-fits-all cut.
            </p>
          </div>
        </div>
      </div>

      {/* ── Marquee Row A — scrolls LEFT ─────────────── */}
      <div
        className="relative overflow-hidden mb-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'marqueeLeft 25s linear infinite',
          }}
        >
          {rowA.map((p, i) => (
            <PlatformCard key={i} platform={p} />
          ))}
        </div>
      </div>

      {/* ── Marquee Row B — scrolls RIGHT ────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'marqueeRight 30s linear infinite',
          }}
        >
          {rowB.map((p, i) => (
            <PlatformCard key={i} platform={p} />
          ))}
        </div>
      </div>

      {/* Keyframes injected inline */}
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
