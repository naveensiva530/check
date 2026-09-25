import React from 'react';
import '../../HomePage/common.css';

const H2 = ({ children }) => (
  <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight mt-14 mb-5 text-[var(--brand-navy)] flex items-center gap-3">
    <span className="w-1.5 h-6 rounded-full bg-[var(--brand-orange)] flex-shrink-0" />
    <span>{children}</span>
  </h2>
);

const P = ({ children }) => <p className="text-[16.5px] font-normal leading-[1.8] text-slate-700 mb-5">{children}</p>;
const UL = ({ items }) => (
  <ul className="space-y-3 mb-7 pl-1">
    {items.map((item) => <li key={item} className="flex items-start gap-3 text-[15.5px] font-medium leading-relaxed text-slate-700"><span className="text-[var(--brand-orange)] text-[16px] font-black leading-none mt-1 select-none flex-shrink-0" aria-hidden="true">✓</span><span>{item}</span></li>)}
  </ul>
);
const NumberedItem = ({ num, title, intro, items }) => (
  <div className="mb-8 p-6 md:p-8 rounded-[22px] border border-purple-200/80 shadow-sm hover:border-[var(--brand-orange)] transition-colors duration-200" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
    <div className="flex items-start gap-4 mb-4"><span className="text-[30px] font-black leading-none flex-shrink-0 text-[var(--brand-orange)]">{num}</span><h3 className="text-[18px] md:text-[20px] font-extrabold leading-snug pt-0.5 text-[var(--brand-navy)]">{title}</h3></div>
    {intro && <P>{intro}</P>}
    {items && <div className="mt-4 bg-white p-5 rounded-xl border border-purple-100"><UL items={items} /></div>}
  </div>
);
const TakeawayBox = ({ title, paragraphs }) => (
  <div className="my-10 p-8 md:p-10 rounded-[24px] border-2 border-purple-200 shadow-sm relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
    <div className="flex items-center gap-2 mb-4"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-purple-200 shadow-sm text-[var(--brand-orange)]">+</span><span className="italic font-semibold uppercase tracking-widest text-[13px] text-[var(--brand-orange)]">KEY TAKEAWAY</span></div>
    <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight mb-5 text-[var(--brand-navy)]">{title}</h2>
    <div className="space-y-4">{paragraphs.map((para) => <p key={para} className="text-[16px] font-medium leading-[1.85] text-slate-700">{para}</p>)}</div>
  </div>
);

const Channel = ({ title, intro, items }) => <><H2>{title}</H2><P>{intro}</P><UL items={items} /></>;
const JourneyStage = ({ title, intro, items }) => (
  <div className="mb-7 rounded-[20px] border border-purple-200/80 bg-[var(--bg-light-purple)] p-6 md:p-7">
    <h3 className="mb-3 text-lg font-extrabold text-[var(--brand-navy)]">{title}</h3>
    <P>{intro}</P>
    {items && <UL items={items} />}
  </div>
);

export default function DigitalMarketingStrategyArticle() {
  return (
    <article className="max-w-[850px] mx-auto px-4 md:px-8 py-10 font-primary">
      <P>Digital marketing becomes difficult when every channel is treated as a separate activity. SEO has one plan. Social media has another. Paid advertising runs independently. Email campaigns follow a different schedule. Content is created without considering where it will be distributed. The result can be a lot of marketing activity without a connected customer journey.</P>
      <P>A stronger approach is to build a digital marketing strategy in which every important channel has a clear role and works toward shared business objectives. SEO can help people discover the business. Content can help them understand a problem and evaluate solutions. Social media can distribute ideas and build engagement. Paid campaigns can reach defined audiences and support specific objectives. Email can nurture relationships. Analytics can show what is working and where improvements are needed.</P>
      <P>The goal is not simply to use more channels. The goal is to make the channels work together.</P>

      <H2>What Is an Integrated Digital Marketing Strategy?</H2>
      <P>An integrated digital marketing strategy is a structured approach that connects different digital channels, messages, content and campaigns around common business objectives. Instead of planning each channel independently, the strategy considers the entire customer journey.</P>
      <P>That means asking:</P>
      <UL items={['Who are we trying to reach?', 'What problem are they trying to solve?', 'How do they discover businesses like ours?', 'What information do they need?', 'Which channels influence their decision?', 'What action do we want them to take?', 'How will we measure the result?']} />
      <P>This creates a more connected approach to digital marketing.</P>

      <H2>Start with Business Goals</H2>
      <P>A digital marketing strategy should begin with the business, not the marketing channels. Before deciding whether to increase SEO, social media or advertising activity, define what the business actually wants to achieve.</P>
      <NumberedItem num="01" title="Brand Awareness" intro="Increase visibility among a relevant target audience." />
      <NumberedItem num="02" title="Website Traffic" intro="Attract qualified visitors to important pages and resources." />
      <NumberedItem num="03" title="Lead Generation" intro="Generate enquiries, registrations, consultations or other relevant actions." />
      <NumberedItem num="04" title="Sales" intro="Support customers through the buying journey and increase conversions." />
      <NumberedItem num="05" title="Customer Retention" intro="Build stronger relationships with existing customers." />
      <NumberedItem num="06" title="Market Expansion" intro="Reach new audiences, locations, industries or customer segments." />
      <P>The marketing strategy should then connect channel activity to these objectives.</P>

      <H2>Understand Your Audience and Customer Journey</H2>
      <P>Different customers can enter the buying journey at different points. Someone may first discover a brand through a Google search. Another person may see a LinkedIn post. Someone else may click a paid advertisement. Another prospect may arrive through a recommendation or email campaign. These people may need different information before taking action.</P>
      <P>A useful customer journey can be understood as:</P>
      <p className="rounded-xl bg-[var(--bg-light-purple)] p-5 mb-6 text-center text-lg font-bold text-[var(--brand-navy)]">Discover <span className="text-[var(--brand-orange)]">→</span> Explore <span className="text-[var(--brand-orange)]">→</span> Evaluate <span className="text-[var(--brand-orange)]">→</span> Trust <span className="text-[var(--brand-orange)]">→</span> Convert <span className="text-[var(--brand-orange)]">→</span> Retain</p>
      <P>Your digital strategy should support each stage rather than focusing only on the final conversion.</P>

      <H2>Map the Customer Journey</H2>
      <JourneyStage title="Discover" intro="The customer becomes aware of a problem, need or opportunity." items={['SEO', 'Social media', 'Paid advertising', 'Video', 'Digital PR', 'Referrals', 'Content']} />
      <JourneyStage title="Explore" intro="The customer begins looking for information. They may search Google, read articles, watch videos, compare services, visit social profiles or review websites. At this stage, useful educational content becomes important." />
      <JourneyStage title="Evaluate" intro="The customer begins comparing possible solutions. Your website needs to provide enough information to support an informed decision." items={['Service details', 'Pricing information', 'Case studies', 'Testimonials and reviews', 'Demonstrations', 'Expertise', 'FAQs']} />
      <JourneyStage title="Trust" intro="The customer needs confidence before taking action." items={['Useful content', 'Clear expertise', 'Genuine testimonials', 'Case studies', 'Transparent information', 'Professional branding', 'Strong website experience']} />
      <JourneyStage title="Convert" intro="The visitor takes the desired action. The conversion process should be simple and clear." items={['Submit a form', 'Make a call', 'Send a WhatsApp message', 'Book a consultation', 'Request a quote', 'Make a purchase']} />
      <JourneyStage title="Retain" intro="The relationship does not end after conversion. Email marketing, social media, useful content, customer communication and ongoing service can support retention and advocacy." />

      <H2>Give Every Channel a Clear Role</H2>
      <P>One of the biggest problems in digital marketing is expecting every channel to do everything. Instead, define the role of each channel.</P>
      <Channel title="SEO" intro="SEO helps your business become discoverable when people actively search for relevant information, products or services. It should connect search intent with useful website content." items={['Organic visibility', 'Relevant traffic', 'Topical authority', 'Website discovery', 'Long-term search demand']} />
      <Channel title="Content Marketing" intro="Content helps answer questions, explain problems and demonstrate expertise. Its purpose should be more than simply producing a large number of pages." items={['Blog articles', 'Guides', 'Case studies', 'Landing-page content', 'Videos', 'Resources and reports', 'FAQs']} />
      <Channel title="Social Media Marketing" intro="The exact role of social media depends on the audience and business objective." items={['Build awareness', 'Distribute content', 'Engage audiences', 'Strengthen brand presence', 'Communicate expertise', 'Support campaigns', 'Develop communities']} />
      <Channel title="Paid Advertising" intro="Paid advertising can provide targeted reach and support specific campaigns. Paid activity should have a defined objective and measurable outcome." items={['Search advertising', 'Social advertising', 'Remarketing', 'Lead-generation campaigns', 'Product campaigns', 'Event promotion']} />
      <Channel title="Email Marketing" intro="Email can help businesses maintain relationships beyond the initial website visit. Give people a reason to continue opening and engaging with your messages." items={['Lead nurturing', 'Customer communication', 'Content distribution', 'Product or service updates', 'Retention', 'Re-engagement']} />
      <Channel title="Digital PR and Brand Authority" intro="Digital PR can help increase visibility, credibility and awareness through relevant external exposure. Quality and relevance matter more than simply collecting links or mentions." items={['Expert commentary', 'Industry publications', 'Partnerships', 'Digital media coverage', 'Thought leadership', 'Relevant mentions']} />

      <H2>The Website Is the Central Experience</H2>
      <P>Your digital channels may generate attention, but the website often becomes the place where people evaluate the business.</P>
      <p className="rounded-xl bg-[var(--bg-light-purple)] p-5 mb-6 text-center text-lg font-bold text-[var(--brand-navy)]">Traffic <span className="text-[var(--brand-orange)]">→</span> Information <span className="text-[var(--brand-orange)]">→</span> Trust <span className="text-[var(--brand-orange)]">→</span> Action</p>
      <P>A website should make it easy for visitors to understand who you are, what you offer, who you help, why your solution matters, why they should trust you and what they should do next. Driving more traffic to a confusing website does not solve the underlying problem.</P>

      <H2>Build One Content Strategy, Not Separate Content Silos</H2>
      <P>A single strong idea can often support multiple channels. For example, an in-depth article about a customer problem could become:</P>
      <UL items={['A blog article', 'LinkedIn posts', 'Social media carousels', 'Short-form videos', 'Email content', 'Sales enablement material', 'FAQ content', 'Campaign messaging']} />
      <P>This does not mean copying the same content everywhere. Instead, adapt the core idea to the audience and format of each channel.</P>

      <H2>Connect SEO and Content</H2>
      <P>SEO should influence what content is created. Content should answer genuine questions and satisfy real search intent. A useful process is:</P>
      <p className="rounded-xl bg-[var(--bg-light-purple)] p-5 mb-6 text-center font-bold leading-loose text-[var(--brand-navy)]">Keyword Research <span className="text-[var(--brand-orange)]">→</span> Search Intent <span className="text-[var(--brand-orange)]">→</span> Content Brief <span className="text-[var(--brand-orange)]">→</span> Creation <span className="text-[var(--brand-orange)]">→</span> Optimisation <span className="text-[var(--brand-orange)]">→</span> Linking <span className="text-[var(--brand-orange)]">→</span> Distribution <span className="text-[var(--brand-orange)]">→</span> Measurement</p>
      <P>This makes SEO part of the content strategy rather than something added after writing.</P>

      <H2>Connect Social Media and Content</H2>
      <P>Content should not simply be published on the website and forgotten. Social media can help distribute useful ideas to audiences that may not discover an article through search immediately.</P>
      <UL items={['Blog article → LinkedIn insight → Social carousel → Short video → Website visit → Service exploration']} />
      <P>The exact journey will vary by audience and platform.</P>

      <H2>Connect Paid and Organic Marketing</H2>
      <P>Paid and organic marketing can complement each other. Organic activity can build long-term visibility and provide insights into topics and audiences. Paid campaigns can provide targeted reach and support specific business objectives. A connected strategy can use both where appropriate.</P>
      <P>The goal is not to choose a channel simply because it is popular. The goal is to choose the right combination for the objective.</P>

      <H2>Use Data to Connect the Channels</H2>
      <P>A connected strategy requires connected measurement. You should understand:</P>
      <UL items={['Where visitors come from', 'Which pages they view', 'What content they engage with', 'Which CTAs they click', 'Which forms they submit', 'Which enquiries become qualified leads', 'Which channels contribute to conversions']} />
      <P>This requires consistent tracking and clear definitions.</P>

      <H2>Do Not Measure Every Channel in Isolation</H2>
      <P>A customer may discover your brand through organic search, read a blog article, follow the company on social media, return through a paid campaign, visit a service page and submit an enquiry. Looking at only the final click can hide important parts of the customer journey. Attribution should therefore be interpreted carefully rather than assuming one channel deserves all the credit.</P>

      <H2>Define Your Key Performance Indicators</H2>
      <P>Different objectives require different KPIs. Ultimately, connect marketing activity to qualified leads, opportunities, customers and revenue.</P>
      <NumberedItem num="01" title="Awareness" items={['Reach and impressions', 'Relevant audience growth', 'Branded search activity']} />
      <NumberedItem num="02" title="Organic Search" items={['Relevant organic traffic', 'Search visibility', 'Rankings for target topics', 'Engaged organic sessions', 'Organic conversions']} />
      <NumberedItem num="03" title="Content" items={['Engaged users', 'Scroll depth', 'Content interactions', 'Returning visitors', 'Assisted journeys']} />
      <NumberedItem num="04" title="Social Media" items={['Meaningful engagement', 'Shares and saves', 'Website visits', 'Leads']} />
      <NumberedItem num="05" title="Paid Advertising" items={['Clicks and conversion rate', 'Cost per conversion', 'Qualified leads', 'Return on ad spend where appropriate']} />
      <NumberedItem num="06" title="Email" items={['Delivery', 'Opens where reliable and appropriate', 'Clicks and conversions', 'Unsubscribes', 'Revenue or leads where measurable']} />

      <H2>Common Digital Marketing Mistakes</H2>
      <UL items={['Using every channel without a strategy: being present everywhere does not automatically create better results.', 'Changing strategy every week: marketing needs consistent measurement and enough time to identify meaningful patterns.', 'Creating content without a purpose: a high volume of content does not automatically create business value.', 'Focusing only on traffic: relevant traffic and meaningful actions matter more.', 'Ignoring the website experience: marketing cannot compensate indefinitely for a poor website experience.', 'Running paid campaigns without tracking: without reliable conversion tracking, it is difficult to understand what the campaign generated.', 'Measuring vanity metrics: large numbers can look impressive without representing meaningful business progress.', 'Treating marketing and sales as separate: marketing-generated leads need a clear path into sales and customer acquisition processes.']} />

      <H2>Build a Digital Marketing Strategy Step by Step</H2>
      <NumberedItem num="01" title="Define the Business Objective" intro="Start with the outcome the business needs." />
      <NumberedItem num="02" title="Identify the Target Audience" intro="Understand the people you want to attract, their problems, motivations and decision process." />
      <NumberedItem num="03" title="Map the Customer Journey" intro="Identify how people discover, evaluate, trust and choose your business." />
      <NumberedItem num="04" title="Audit Your Current Digital Presence" items={['Website', 'SEO', 'Content', 'Social media', 'Paid advertising', 'Email', 'Analytics', 'Conversion paths', 'Competitors']} />
      <NumberedItem num="05" title="Select the Right Channels" intro="Choose channels based on Audience + Objective + Resources + Opportunity, not because every competitor is using them." />
      <NumberedItem num="06" title="Build the Content Strategy" items={['Customer problems', 'Search intent', 'Buying questions', 'Expertise', 'Products and services', 'Proof', 'Customer journey stages']} />
      <NumberedItem num="07" title="Create Campaigns That Connect" intro="Coordinate relevant messaging across channels." items={['Objective', 'Audience', 'Core message', 'Content', 'Landing page', 'CTA', 'Tracking', 'Measurement plan']} />
      <NumberedItem num="08" title="Implement Tracking" items={['Website', 'Forms and calls', 'WhatsApp', 'Campaigns', 'Organic traffic', 'Social activity', 'Conversions']} />
      <NumberedItem num="09" title="Launch and Learn" intro="Do not expect the first version to be perfect. Monitor what worked, where users dropped off, which content performed, which audiences responded and which channels contributed to outcomes." />
      <NumberedItem num="10" title="Optimise Continuously" intro="Use evidence to improve strategy, content, campaigns, user experience, conversion and measurement. Then repeat the process." />

      <H2>The Role of a Digital Marketing Audit</H2>
      <P>Before investing heavily in new campaigns, understand the current situation. A useful audit reviews:</P>
      <UL items={['Website: structure, UX, conversion paths and technical performance.', 'SEO: technical SEO, content, search visibility, keywords and internal linking.', 'Content: quality, relevance, search intent and content gaps.', 'Social media: positioning, content, engagement and consistency.', 'Paid media: campaign structure, targeting, creative, landing pages and conversion tracking.', 'Analytics: tracking quality, attribution and reporting.', 'Competitors: positioning, visibility, content and channel opportunities.']} />
      <P>An audit helps identify priorities before resources are allocated.</P>

      <H2>Build a System, Not a Collection of Activities</H2>
      <P>The strongest digital marketing strategies connect the parts. Think of the system as:</P>
      <p className="rounded-xl bg-[var(--bg-light-purple)] p-5 mb-6 text-center font-bold leading-loose text-[var(--brand-navy)]">Audience → Business Objective → Strategy → Channels → Content → Website Experience → Conversion → Measurement → Optimisation</p>
      <P>Each stage influences the next.</P>

      <H2>Digital Marketing Should Support the Whole Customer Journey</H2>
      <P>A customer does not think in terms of your marketing department's channel structure. They simply want to find, understand, compare, trust and act. Your strategy should reflect that reality. When SEO, content, social media, paid advertising, email and the website support the same customer journey, the overall experience becomes more coherent.</P>

      <TakeawayBox title="Stop Managing Channels. Start Building a Connected Digital Marketing System." paragraphs={[
        'A successful digital marketing strategy is not about doing everything. It is about doing the right things for the right audience at the right stage of the customer journey.',
        'Start with business objectives. Understand your audience. Map the customer journey. Give each channel a clear role. Build useful content. Connect campaigns. Track meaningful actions. Use data to improve.',
        'When every part works toward the same goal, digital marketing becomes more than a collection of individual activities. It becomes a connected system designed to help people discover, understand, trust and choose your business.'
      ]} />
    </article>
  );
}
