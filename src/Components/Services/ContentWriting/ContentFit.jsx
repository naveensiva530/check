import React from 'react';
import { Globe, Search, Share2, Megaphone, Mail } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

const platforms = [
  { name: 'Website', desc: 'Explain clearly. Build confidence. Drive action.', icon: Globe, color: '#1e2f57' },
  { name: 'Search', desc: 'Answer relevant questions with useful, structured information.', icon: Search, color: '#059669' },
  { name: 'Social', desc: 'Capture attention quickly and give people a reason to engage.', icon: Share2, color: '#E1306C' },
  { name: 'Advertising', desc: 'Communicate the offer quickly and clearly.', icon: Megaphone, color: '#e08326' },
  { name: 'Email', desc: 'Move the relationship forward with relevant, purposeful messaging.', icon: Mail, color: '#6366f1' },
];



export default function ContentFit() {
  return (
    <section className="w-full py-24 bg-white relative font-primary overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="services-eyebrow flex items-center gap-2 mb-6">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0"
              style={{ background: 'var(--accent-orange)' }}
            >
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
            >
              ONE VOICE. DIFFERENT PLATFORMS.
            </span>
          </div>

          <ScrollRevealHeading
            maxW="800px"
            words={[
              { text: "One" },
              { text: "voice." },
              { text: "Different", italic: true },
              { text: "platforms." }
            ]}
          />

          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[750px] mt-8">
            Your brand should still feel like your brand whether someone finds you through Google, reads your website, sees an Instagram post or lands on a campaign page. We adapt the writing to the platform without losing the core message.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 border border-gray-100  flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md mb-5"
                    style={{ backgroundColor: platform.color }}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[18px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>
                    {platform.name}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-600 font-medium">
                    {platform.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
