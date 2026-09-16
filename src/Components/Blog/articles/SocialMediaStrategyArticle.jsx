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
    <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-600 mb-2">Before asking:</p>
    <div className="bg-white p-4 rounded-xl border border-purple-100 mb-4">
      <p className="text-[16.5px] font-bold italic text-[var(--brand-navy)]">"{from}"</p>
    </div>
    <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-600 mb-2">ask:</p>
    <div className="bg-white p-4 rounded-xl border border-purple-100">
      <p className="text-[16.5px] font-bold italic text-[var(--brand-orange)]">"{to}"</p>
    </div>
  </div>
);

const StepItem = ({ num, title, desc }) => (
  <div className="flex gap-4 mb-6">
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-extrabold text-white bg-[var(--brand-navy)] shadow-sm">
      {num}
    </div>
    <div>
      <h4 className="text-[15.5px] font-extrabold mb-1 uppercase tracking-wide text-[var(--brand-navy)]">{title}</h4>
      <p className="text-[15px] font-medium leading-relaxed text-slate-700">{desc}</p>
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
        <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-600 mb-3">Core Focus:</p>
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

export default function SocialMediaStrategyArticle() {
  return (
    <article className="max-w-[860px] mx-auto px-5 md:px-8 py-10">
      <P>
        Posting regularly does not automatically create business growth.
        A business can publish every day, collect likes and views, and still struggle to generate meaningful enquiries or sales.
        The difference often comes down to strategy.
      </P>
      <P>
        Effective social media marketing is not simply about deciding what to post tomorrow. It is about understanding your audience, defining what the business wants to achieve, choosing the right platforms, creating content with a purpose and measuring what actually happens.
        When these elements work together, social media becomes more than a publishing channel. It becomes part of the wider customer journey.
      </P>

      <ShiftBox
        from="What should we post?"
        to="What are we trying to achieve?"
      />

      <H2>Why Posting More Is Not Always the Answer</H2>
      <P>
        It is easy to assume that more content means better results.
        But publishing more posts does not necessarily mean:
      </P>
      <UL items={[
        'reaching the right audience',
        'building stronger brand awareness',
        'generating qualified enquiries',
        'creating customer trust',
        'increasing website traffic',
        'improving conversions'
      ]} />
      <P>
        A business can have a busy social media profile without having a clear reason behind its activity.
        Before asking what to post, ask what the business is trying to achieve. That simple change can completely improve the way a social media strategy is built.
      </P>

      <H2>What Is a Social Media Strategy?</H2>
      <P>
        A social media strategy is a structured plan that connects social media activity with business objectives.
        It defines:
      </P>
      <UL items={[
        'who the business wants to reach',
        'what the audience cares about',
        'which platforms matter',
        'what the brand should communicate',
        'what content should be created',
        'how often content should be published',
        'how engagement should be managed',
        'how paid and organic activity can work together',
        'how results will be measured'
      ]} />

      <H2>The High Cost of Content Without Purpose</H2>
      <P>
        Many businesses fall into the trap of measuring social media success purely by activity. They ask: "Are we posting every day?" or "Did we schedule our three posts for the week?" But high publishing frequency without strategic alignment simply exhausts teams without creating commercial traction.
      </P>
      <P>
        When social output is disconnected from commercial goals, content becomes generic filler. Audiences sense when a brand posts merely for the sake of the algorithm rather than offering genuine perspective, utility, or entertainment.
      </P>

      <ShiftBox
        from="We need to post something every single day to stay active."
        to="We need content designed to build recognition, cultivate intent, and support qualified customer acquisition."
      />

      <H2>Four Pillars of a Strategic Social Framework</H2>
      <P>
        Moving from random posting to a structured engine requires clarity across four fundamental dimensions:
      </P>

      <NumberedItem
        num="01"
        title="Audience Understanding Beyond Basic Demographics"
        intro="Age, gender, and job title are baseline filters. Strategic social content speaks directly to the specific anxieties, ambitions, and mental shortcuts your buyers navigate daily."
        items={[
          'What questions do your customers debate before committing to a provider?',
          'What misconceptions exist in your category that your content can decisively clarify?',
          'What kind of proof makes your business instantly credible in the first 3 seconds of a video or graphic?'
        ]}
      />

      <NumberedItem
        num="02"
        title="Platform-Native Storytelling & Craft"
        intro="A video that converts on LinkedIn will often look jarring on TikTok or Instagram Reels. Each channel requires respectful formatting tailored to how people naturally browse."
        items={[
          'Short-form vertical video tailored for rapid hook clarity and real-time retention.',
          'Carousels and visual breakdowns designed for saves, references, and shares.',
          'Text-first conversational thought leadership built for executive engagement.'
        ]}
      />

      <NumberedItem
        num="03"
        title="A Clear Content Architecture"
        intro="Balanced content buckets prevent an account from feeling like a relentless sales pitch or a detached entertainment meme page."
        items={[
          'Authority Content: In-depth breakdowns, case results, and methodological proof.',
          'Relatability Content: Brand point of view, cultural perspective, and company values.',
          'Conversion Content: Clear invitations for consultation, audits, and discovery calls.'
        ]}
      />

      <NumberedItem
        num="04"
        title="Measurable Business Attribution"
        intro="Vanity metrics like likes and impressions feel validating, but qualified pipeline and assisted conversions keep businesses growing."
        items={[
          'Tracking inbound enquiries mentioning specific social assets or series.',
          'Evaluating profile clicks, direct messages, and content saves as high-intent signals.',
          'Connecting organic social authority with paid ad efficiency.'
        ]}
      />

      <TakeawayBox
        title="Key Takeaway — Make Social Media Work for Your Bottom Line"
        paragraphs={[
          'Social media marketing is not a chore to complete; it is a direct channel to your target market’s attention and trust.',
          'Stop focusing purely on volume. Start focusing on strategic relevance, category leadership, and measurable commercial impact.',
          'At ADSSERV, we build social systems that turn passive followers into engaged advocates and paying clients.'
        ]}
      />
    </article>
  );
}
