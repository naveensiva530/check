import React from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaMicrosoft,
  FaApple,
  FaAmazon,
  FaAt,
} from 'react-icons/fa6';
import { SiTiktok } from 'react-icons/si';
import '../../../Components/HomePage/common.css';

/* ─── Platform data ─────────────────────────────────────── */
const platforms = [
  {
    name: 'Google Ads',
    handle: '@Adsserv',
    desc: 'Search campaigns built around intent, targeting, messaging, and measurable actions.',
    Icon: FaGoogle,
    color: '#4285F4',
    bg: '#f0f5ff',
    stat: '4B+ searches',
  },
  {
    name: 'Meta Ads',
    handle: 'Adsserv',
    desc: 'Audience targeting and visual creative to create demand and support conversions.',
    Icon: FaFacebookF,
    color: '#1877F2',
    bg: '#f0f5ff',
    stat: '3.9B users',
  },
  {
    name: 'LinkedIn Ads',
    handle: 'Adsserv',
    desc: 'Professional and business audiences where B2B targeting makes sense.',
    Icon: FaLinkedinIn,
    color: '#0A66C2',
    bg: '#f0f7ff',
    stat: '1B users',
  },
  {
    name: 'YouTube Ads',
    handle: 'Adsserv',
    desc: 'Video to build awareness, explain offers, and reach relevant audiences.',
    Icon: FaYoutube,
    color: '#FF0000',
    bg: '#fff5f5',
    stat: '2.7B users',
  },
  {
    name: 'Microsoft Ads',
    handle: 'Adsserv',
    desc: 'Search and display advertising across Bing, Microsoft Audience Network.',
    Icon: FaMicrosoft,
    color: '#00A4EF',
    bg: '#f0f9ff',
    stat: '500M users',
  },
  {
    name: 'TikTok Ads',
    handle: '@Adsserv',
    desc: 'Short-form video advertising for discovery and creator-led campaigns.',
    Icon: SiTiktok,
    color: '#010101',
    bg: '#f5f5f5',
    stat: '1.7B users',
  },
  {
    name: 'X Ads',
    handle: '@Adsserv',
    desc: 'Real-time engagement, trending conversations, and audience building.',
    Icon: FaTwitter,
    color: '#000000',
    bg: '#f5f5f5',
    stat: '550M users',
  },
  {
    name: 'Apple Search Ads',
    handle: 'Adsserv',
    desc: 'App Store advertising for app discovery and mobile user acquisition.',
    Icon: FaApple,
    color: '#000000',
    bg: '#f5f5f5',
    stat: '1.2B devices',
  },
  {
    name: 'Amazon Ads',
    handle: 'Adsserv',
    desc: 'Product advertising for purchase-driven audiences and marketplace sellers.',
    Icon: FaAmazon,
    color: '#FF9900',
    bg: '#fff8f0',
    stat: '310M users',
  },
  {
    name: 'Programmatic Display',
    handle: 'Adsserv',
    desc: 'Display and remarketing across relevant websites and audiences.',
    Icon: FaAt,
    color: '#6366F1',
    bg: '#f5f3ff',
    stat: 'Wide reach',
  },
];

/* ─── Split into two rows ───────────────────────────────── */
const rowA = [...platforms, ...platforms]; // duplicate for seamless loop
const rowB = [...platforms.slice(5), ...platforms.slice(0, 5), ...platforms.slice(5), ...platforms.slice(0, 5)];

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
        className="relative p-6 flex items-start justify-between"
        style={{ background: bg }}
      >
        {/* Platform icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
          style={{ background: color }}
        >
          <Icon size={26} color="#fff" />
        </div>

        {/* Stat badge */}
        <span
          className="text-[12px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border"
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
      <div className="p-6 pt-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[18px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>
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
        <p className="text-[12px] font-semibold mb-3" style={{ color }}>
          {handle}
        </p>
        <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--text-gray)' }}>
          {desc}
        </p>

        {/* Dashed divider */}
        <div className="border-t border-dashed border-slate-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--brand-navy)' }}>
            We manage this
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
export default function PerformanceChannels() {
  return (
    <section className="w-full py-24 bg-white relative font-primary overflow-hidden">

      {/* Header */}
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
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
                CHANNEL STRATEGY
              </span>
            </div>

            <ScrollRevealHeading
              words={[
                { text: "The" },
                { text: "right" },
                { text: "channel", italic: true },
                { text: "depends" },
                { text: "on" },
                { text: "the" },
                { text: "customer" },
                { text: "journey." }
              ]}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 justify-center">
            <p>Different platforms serve different parts of the customer journey.</p>
            <p>From capturing high-intent searches to creating demand and retargeting engaged users, we select the channels that offer the clearest path to your business outcome.</p>
            <p className="font-bold" style={{ color: 'var(--brand-navy)' }}>
              We adapt the channel approach accordingly.
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
