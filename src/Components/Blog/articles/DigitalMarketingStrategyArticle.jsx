import React from 'react';
import '../../HomePage/common.css';

const H2 = ({ children }) => (
  <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight mt-14 mb-5 text-[var(--brand-navy)] flex items-center gap-3">
    <span className="w-1.5 h-6 rounded-full bg-[var(--brand-orange)] flex-shrink-0" />
    <span>{children}</span>
  </h2>
);

const P = ({ children }) => (
  <p className="text-[16.5px] font-normal leading-[1.8] text-slate-700 mb-5">{children}</p>
);

const UL = ({ items }) => (
  <ul className="space-y-3 mb-7 pl-1">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3 text-[15.5px] font-medium leading-relaxed text-slate-700">
        <span className="text-[var(--brand-orange)] text-[16px] font-black leading-none mt-1 select-none flex-shrink-0">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ShiftBox = ({ from, to }) => (
  <div className="my-8 p-6 md:p-8 rounded-[22px] border border-purple-200/80 border-l-4 border-l-[var(--brand-orange)] shadow-sm" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
    <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-600 mb-2">The Siloed Mistake:</p>
    <div className="bg-white p-4 rounded-xl border border-purple-100 mb-4">
      <p className="text-[16.5px] font-bold italic text-[var(--brand-navy)]">"{from}"</p>
    </div>
    <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-600 mb-2">The Unified Approach:</p>
    <div className="bg-white p-4 rounded-xl border border-purple-100">
      <p className="text-[16.5px] font-bold italic text-[var(--brand-orange)]">"{to}"</p>
    </div>
  </div>
);

const NumberedItem = ({ num, title, intro, items }) => (
  <div className="mb-8 p-6 md:p-8 rounded-[22px] border border-purple-200/80 shadow-sm hover:border-[var(--brand-orange)] transition-colors duration-200" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
    <div className="flex items-start gap-4 mb-4">
      <span className="text-[30px] font-black leading-none flex-shrink-0 text-[var(--brand-orange)]">{num}</span>
      <h3 className="text-[18px] md:text-[20px] font-extrabold leading-snug pt-0.5 text-[var(--brand-navy)]">{title}</h3>
    </div>
    {intro && <P>{intro}</P>}
    {items && (
      <div className="mt-4 bg-white p-5 rounded-xl border border-purple-100">
        <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-600 mb-3">Key Elements:</p>
        <UL items={items} />
      </div>
    )}
  </div>
);

const TakeawayBox = ({ title, paragraphs }) => (
  <div className="my-10 p-8 md:p-10 rounded-[24px] border-2 border-purple-200 shadow-sm relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
    <div className="flex items-center gap-2 mb-4">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-purple-200 shadow-sm flex-shrink-0">
        <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
      </span>
      <span className="italic font-semibold uppercase tracking-widest text-[13px] text-[var(--brand-orange)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        KEY TAKEAWAY
      </span>
    </div>
    <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight mb-5 text-[var(--brand-navy)]">{title}</h2>
    <div className="space-y-4">
      {paragraphs.map((para, i) => (
        <p key={i} className="text-[16px] font-medium leading-[1.85] text-slate-700">{para}</p>
      ))}
    </div>
  </div>
);

export default function DigitalMarketingStrategyArticle() {
  return (
    <article className="max-w-[850px] mx-auto px-4 md:px-8 py-10 font-primary">
      <div className="p-6 md:p-8 rounded-[22px] border border-purple-200/80 mb-10 shadow-sm" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
        <p className="text-[12px] font-bold uppercase tracking-widest text-[var(--brand-orange)] mb-2">Core Article Insight</p>
        <p className="text-[18px] md:text-[20px] font-bold leading-relaxed text-[var(--brand-navy)]">
          SEO, social media, paid advertising, content and your website should not operate as disconnected activities. A connected digital marketing strategy helps each channel support the customer journey and the larger business objective.
        </p>
      </div>

      <H2>Breaking Down Marketing Silos</H2>
      <P>
        In many growing organizations, digital marketing is executed in fragmented compartments. An SEO specialist works on keywords, an agency runs paid search ads, a freelancer schedules Instagram graphics, and a developer maintains the website. Each party optimizes for their isolated KPI, yet overall company revenue remains stagnant.
      </P>
      <P>
        A modern buyer rarely converts in a single touchpoint. They might encounter your brand on social media, research a question on Google, land on an informational article, leave to read customer reviews, and finally return through a branded search ad. When these touchpoints are unified, conversion rates multiply.
      </P>

      <ShiftBox
        from="Running disconnected paid ads, SEO, and social posting in separate silos."
        to="Designing a unified commercial flywheel where search insights guide paid creative and landing pages convert high-intent organic traffic."
      />

      <H2>How to Architect a Connected Strategy</H2>
      <P>
        A resilient digital marketing engine connects every channel around a single source of commercial truth:
      </P>

      <NumberedItem
        num="01"
        title="Establish One Central Value Proposition"
        intro="Conflicting messaging between channels confuses prospective clients. Your core narrative and commercial promise must remain steadfast whether read on an ad copy snippet or an in-depth case study."
        items={[
          'Clarify the exact problem you solve and for whom.',
          'Identify what distinct proprietary approach or insight sets your solution apart.',
          'Audit all customer touchpoints to ensure unified messaging.'
        ]}
      />

      <NumberedItem
        num="02"
        title="Share Intelligence Across All Marketing Channels"
        intro="Your paid advertising search queries should directly inspire your organic SEO editorial calendar, and high-performing organic social hooks should become paid ad assets."
        items={[
          'Feed high-converting paid search queries into long-term organic content pillars.',
          'Repurpose organic content that generated inbound messages into paid retargeting creative.',
          'Share UX and heat-map data from landing pages to improve global website navigation.'
        ]}
      />

      <NumberedItem
        num="03"
        title="Build Conversion-Ready Touchpoints"
        intro="Driving traffic to an unoptimized or slow website is pouring water into a leaky bucket. Every channel requires a frictionless next step."
        items={[
          'Dedicated, mobile-responsive landing pages tailored to specific user intent.',
          'Transparent, value-driven calls to action rather than generic contact forms.',
          'Rapid page load speeds and intuitive, accessible user journeys.'
        ]}
      />

      <NumberedItem
        num="04"
        title="Full-Funnel Lifecycle Attribution"
        intro="Look past vanity click costs and track what channels truly contribute to lifetime client acquisition and commercial revenue."
        items={[
          'First-touch discovery and assisted conversion tracking.',
          'Lead qualification rate by acquisition source.',
          'Customer acquisition cost (CAC) balanced against customer lifetime value (LTV).'
        ]}
      />

      <TakeawayBox
        title="Key Takeaway — Connected Strategy Drives Sustainable Compounding"
        paragraphs={[
          'A business does not need more disconnected tactics; it needs an orchestrated, connected digital marketing system.',
          'When SEO, social media, paid media, and web conversion operate as one synchronized engine, every dollar and hour spent works harder for your business.',
          'At ADSSERV, we architect connected digital growth strategies that eliminate waste and deliver clear, predictable commercial results.'
        ]}
      />
    </article>
  );
}
