import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../../../Components/HomePage/common.css';

// ============================================
// TRANSLATIONS - Extract hardcoded strings for i18n
// ============================================
const TRANSLATIONS = {
  BEFORE_ASKING: 'Before asking:',
  ASK: 'ask:',
  CORE_FOCUS: 'Core Focus:',
  KEY_TAKEAWAY: 'KEY TAKEAWAY',
};

// ============================================
// COMPONENTS
// ============================================

/**
 * Article heading component with brand styling
 * @param {React.ReactNode} children - Heading content
 */
const ArticleHeading = memo(({ children }) => (
  <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mt-14 mb-5 text-[var(--brand-navy)] flex items-center gap-3">
    <span className="w-1.5 h-6 rounded-full bg-[var(--brand-orange)] flex-shrink-0" />
    <span>{children}</span>
  </h2>
));

ArticleHeading.displayName = 'ArticleHeading';

/**
 * Article paragraph component with consistent styling
 * @param {React.ReactNode} children - Paragraph content
 */
const ArticleParagraph = memo(({ children }) => (
  <p className="text-base font-normal leading-[1.8] text-slate-700 mb-5">{children}</p>
));

ArticleParagraph.displayName = 'ArticleParagraph';

/**
 * Article list component with checkmark bullets
 * @param {string[]} items - Array of list items
 */
const ArticleList = memo(({ items = [] }) => (
  <ul className="space-y-3 mb-7 pl-1">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-slate-700">
        <span className="text-[var(--brand-orange)] text-[16px] font-black leading-none mt-1 select-none flex-shrink-0" aria-hidden="true">
          ✓
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
));

ArticleList.displayName = 'ArticleList';

/**
 * Before/After comparison box for perspective shifts
 * @param {string} from - The "before" text
 * @param {string} to - The "after" text
 */
const ShiftBox = memo(({ from, to }) => (
  <div className="my-8 p-6 md:p-8 rounded-[22px] border border-purple-200/80 border-l-4 border-l-[var(--brand-orange)] shadow-sm bg-[var(--bg-light-purple)]">
    <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">{TRANSLATIONS.BEFORE_ASKING}</p>
    <div className="bg-white p-4 rounded-xl border border-purple-100 mb-4">
      <p className="text-base font-bold italic text-[var(--brand-navy)]">"{from}"</p>
    </div>
    <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">{TRANSLATIONS.ASK}</p>
    <div className="bg-white p-4 rounded-xl border border-purple-100">
      <p className="text-base font-bold italic text-[var(--brand-orange)]">"{to}"</p>
    </div>
  </div>
));

ShiftBox.displayName = 'ShiftBox';

/**
 * Numbered step item with icon
 * @param {string} num - Step number
 * @param {string} title - Step title
 * @param {string} desc - Step description
 */
const StepItem = memo(({ num, title, desc }) => (
  <div className="flex gap-4 mb-6">
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-extrabold text-white bg-[var(--brand-navy)] shadow-sm">
      {num}
    </div>
    <div>
      <h4 className="text-sm font-extrabold mb-1 uppercase tracking-wide text-[var(--brand-navy)]">{title}</h4>
      <p className="text-[15px] font-medium leading-relaxed text-slate-700">{desc}</p>
    </div>
  </div>
));

StepItem.displayName = 'StepItem';

/**
 * Numbered content block with core focus items
 * @param {string} num - Item number (e.g., "01")
 * @param {string} title - Item title
 * @param {string} intro - Introduction text
 * @param {string[]} items - Core focus items
 */
const NumberedItem = memo(({ num, title, intro, items }) => (
  <div className="mb-8 p-6 md:p-8 rounded-[22px] border border-purple-200/80 shadow-sm hover:border-[var(--brand-orange)] transition-colors duration-200 bg-[var(--bg-light-purple)]">
    <div className="flex items-start gap-4 mb-4">
      <span className="text-[30px] font-black leading-none flex-shrink-0 text-[var(--brand-orange)]">{num}</span>
      <h3 className="text-[18px] md:text-[20px] font-extrabold leading-snug pt-0.5 text-[var(--brand-navy)]">{title}</h3>
    </div>
    {intro && <ArticleParagraph>{intro}</ArticleParagraph>}
    {items && (
      <div className="mt-4 bg-white p-5 rounded-xl border border-purple-100">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">{TRANSLATIONS.CORE_FOCUS}</p>
        <ArticleList items={items} />
      </div>
    )}
  </div>
));

NumberedItem.displayName = 'NumberedItem';

/**
 * Highlighted key takeaway box
 * @param {string} title - Takeaway title
 * @param {string[]} paragraphs - Takeaway content paragraphs
 */
const TakeawayBox = memo(({ title, paragraphs }) => (
  <div className="my-10 p-8 md:p-10 rounded-[24px] border-2 border-purple-200 shadow-sm relative overflow-hidden bg-[var(--bg-light-purple)]">
    <div className="flex items-center gap-2 mb-4">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-purple-200 shadow-sm flex-shrink-0">
        <span className="text-[var(--brand-orange)] text-xs font-bold leading-none" aria-hidden="true">
          +
        </span>
      </span>
      <span className="italic font-semibold uppercase tracking-widest text-[13px] text-[var(--brand-orange)]" style={{ fontFamily: "'Instrument Serif', serif" }}>
        {TRANSLATIONS.KEY_TAKEAWAY}
      </span>
    </div>
    <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-5 text-[var(--brand-navy)]">{title}</h2>
    <div className="space-y-4">
      {paragraphs.map((para, index) => (
        <p key={`para-${index}`} className="text-base font-medium leading-[1.85] text-slate-700">
          {para}
        </p>
      ))}
    </div>
  </div>
));

TakeawayBox.displayName = 'TakeawayBox';

// ============================================
// PROPTYPES
// ============================================

ArticleHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

ArticleParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

ArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

ShiftBox.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

StepItem.propTypes = {
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

NumberedItem.propTypes = {
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

TakeawayBox.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**
 * Social Media Strategy Article Component
 * Renders a complete blog article about social media strategy
 * Uses memoized sub-components for optimal performance
 */
export default function SocialMediaStrategyArticle() {
  return (
    <article className="max-w-[860px] mx-auto px-5 md:px-8 py-10">
      <ArticleParagraph>
        Posting regularly does not automatically create business growth.
        A business can publish every day, collect likes and views, and still struggle to generate meaningful enquiries or sales.
        The difference often comes down to strategy.
      </ArticleParagraph>

      <ArticleParagraph>
        Effective social media marketing is not simply about deciding what to post tomorrow. It is about understanding your audience, defining what the business wants to achieve, choosing the right platforms, creating content with a purpose and measuring what actually happens.
        When these elements work together, social media becomes more than a publishing channel. It becomes part of the wider customer journey.
      </ArticleParagraph>

      <ArticleHeading>Why Posting More Is Not Always the Answer</ArticleHeading>
      <ArticleParagraph>
        It is easy to assume that more content means better results.
        But publishing more posts does not necessarily mean:
      </ArticleParagraph>

      <ArticleList
        items={[
          'reaching the right audience',
          'building stronger brand awareness',
          'generating qualified enquiries',
          'creating customer trust',
          'increasing website traffic',
          'improving conversions',
        ]}
      />

      <ArticleParagraph>
        A business can have a busy social media profile without having a clear reason behind its activity.
        Before asking:
      </ArticleParagraph>
      <ShiftBox from="What should we post?" to="What are we trying to achieve?" />
      <ArticleParagraph>That simple change can completely improve the way a social media strategy is built.</ArticleParagraph>

      <ArticleHeading>What Is a Social Media Strategy?</ArticleHeading>
      <ArticleParagraph>
        A social media strategy is a structured plan that connects social media activity with business objectives.
        It defines:
      </ArticleParagraph>

      <ArticleList
        items={[
          'who the business wants to reach',
          'what the audience cares about',
          'which platforms matter',
          'what the brand should communicate',
          'what content should be created',
          'how often content should be published',
          'how engagement should be managed',
          'how paid and organic activity can work together',
          'how results will be measured',
        ]}
      />
      <ArticleParagraph>
        The strategy should be specific enough to guide daily content decisions while remaining flexible enough to respond to audience behaviour and changing platform conditions.
      </ArticleParagraph>

      <ArticleHeading>Start with the Business Objective</ArticleHeading>
      <ArticleParagraph>
        Social media should support a real business goal. A single business may have several objectives, but they should be prioritised rather than treated as equally important.
      </ArticleParagraph>
      <NumberedItem num="01" title="Brand Awareness" intro="Increase visibility among a relevant target audience." />
      <NumberedItem num="02" title="Engagement" intro="Build meaningful interaction and stronger relationships with potential customers." />
      <NumberedItem num="03" title="Website Traffic" intro="Bring relevant users to important pages, resources or campaigns." />
      <NumberedItem num="04" title="Lead Generation" intro="Encourage potential customers to enquire, book, register or request information." />
      <NumberedItem num="05" title="Sales" intro="Support customers through the decision-making journey and encourage purchases." />
      <NumberedItem num="06" title="Customer Retention" intro="Keep existing customers informed, engaged and connected with the brand." />

      <ArticleHeading>Know Who You Are Talking To</ArticleHeading>
      <ArticleParagraph>Great social content starts with audience understanding. A business should know more than basic demographics. Consider:</ArticleParagraph>
      <ArticleList items={[
        'What problem does the audience have?',
        'What are they trying to achieve?',
        'What questions do they ask?',
        'What objections stop them from buying?',
        'What information do they need before making a decision?',
        'Which platforms do they actually use?',
        'What type of content do they find useful?',
        'What makes them trust a business?',
      ]} />
      <ArticleParagraph>The better you understand these questions, the easier it becomes to create content that feels relevant rather than promotional.</ArticleParagraph>

      <ArticleHeading>Choose Platforms Based on the Audience</ArticleHeading>
      <ArticleParagraph>Being active on every platform is not automatically a good strategy. The right platforms depend on the audience, business objective, content format and available resources.</ArticleParagraph>
      <div className="my-6 rounded-xl border border-purple-200 bg-[var(--bg-light-purple)] px-5 py-4 text-center font-extrabold text-[var(--brand-navy)]">
        Audience + Business Objective + Content Format + Resources
      </div>
      <ArticleParagraph>For some businesses, Instagram may be important for visual discovery and brand building. For others, LinkedIn may be more valuable for professional audiences and B2B communication. Some businesses may benefit from Facebook communities, YouTube video content, or other relevant platforms.</ArticleParagraph>
      <ArticleParagraph>The objective is not to be everywhere. The objective is to be where the right audience is most likely to notice, engage with and act on your content.</ArticleParagraph>

      <ArticleHeading>Build Content with Different Purposes</ArticleHeading>
      <ArticleParagraph>A strong social media strategy should not make every post feel like an advertisement. Different content should perform different jobs.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Educational Content</h3>
      <ArticleParagraph>Help your audience understand something useful through tips, guides, explanations, industry insights, common mistakes and how-to content.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Problem-Solving Content</h3>
      <ArticleParagraph>Address the problems your customers experience. Show that the business understands the situation and can provide useful direction.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Brand Content</h3>
      <ArticleParagraph>Show the people, values, approach and personality behind the business. This helps audiences understand the organisation beyond its products or services.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Proof Content</h3>
      <ArticleParagraph>Demonstrate genuine evidence of capability through case studies, customer experiences, project examples, results, testimonials and demonstrations. Only use genuine evidence.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Engagement Content</h3>
      <ArticleParagraph>Create opportunities for people to participate through questions, polls, opinions, discussions, interactive stories and relevant community conversations. Engagement should have a purpose, not exist only to increase a vanity metric.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Conversion Content</h3>
      <ArticleParagraph>When appropriate, make the next step clear: book a consultation, request information, explore a service, visit the website, download a resource or contact the business. Not every post needs a sales CTA.</ArticleParagraph>

      <ArticleHeading>Use a Content Mix</ArticleHeading>
      <ArticleParagraph>A healthy content strategy contains a mixture of purposes rather than repeating the same promotional message.</ArticleParagraph>
      <div className="my-6 rounded-xl border border-purple-200 bg-[var(--bg-light-purple)] px-5 py-4 text-center font-extrabold text-[var(--brand-navy)]">
        Discover → Learn → Engage → Trust → Consider → Act
      </div>
      <ArticleParagraph>A person who has never heard of your business may need educational content first. Someone comparing providers may need proof, expertise and clear service information. Someone ready to enquire may need a simple and direct next step. Social media can support every stage.</ArticleParagraph>

      <ArticleHeading>Create Content Pillars</ArticleHeading>
      <ArticleParagraph>Content pillars help prevent a social media account from becoming random. For example, a digital marketing business could use:</ArticleParagraph>
      <NumberedItem num="01" title="Education" intro="Practical digital marketing knowledge." />
      <NumberedItem num="02" title="Industry Insights" intro="Important changes, trends and observations." />
      <NumberedItem num="03" title="Expertise" intro="The company's approach, knowledge and perspective." />
      <NumberedItem num="04" title="Proof" intro="Genuine projects, case studies and outcomes." />
      <NumberedItem num="05" title="Brand" intro="People, culture, values and behind-the-scenes content." />
      <NumberedItem num="06" title="Services" intro="Useful explanations of how the business can help." />
      <ArticleParagraph>These pillars provide structure while still leaving room for creativity.</ArticleParagraph>

      <ArticleHeading>Create Content for the Platform</ArticleHeading>
      <ArticleParagraph>The same message does not always need to be published in exactly the same format everywhere. A LinkedIn post may work best as a professional insight. An Instagram post may work better as a carousel or visual explanation. A short-form video may communicate an idea faster than a long caption.</ArticleParagraph>
      <ArticleParagraph>The core message can remain consistent while the execution changes according to the platform. One strategy does not mean one format.</ArticleParagraph>

      <ArticleHeading>Quality Matters More Than Content Volume</ArticleHeading>
      <ArticleParagraph>Publishing ten weak posts is not automatically better than publishing three useful ones. Before publishing, ask:</ArticleParagraph>
      <ArticleList items={[
        'Is this relevant to our audience?',
        'Does it provide value?',
        'Is the message clear?',
        'Does it sound like our brand?',
        'Is the creative strong enough to stop the scroll?',
        'Does it support an actual objective?',
        'What should the audience do next?',
      ]} />
      <ArticleParagraph>If the answer is unclear, the content probably needs improvement before publication.</ArticleParagraph>

      <ArticleHeading>Social Media and SEO Can Support Each Other</ArticleHeading>
      <ArticleParagraph>Social media and SEO are different channels, but they can contribute to a connected digital strategy. A useful social post can introduce an idea. That idea can lead someone to a detailed website article. The article can answer deeper questions. The website can then guide the visitor toward a relevant service or enquiry.</ArticleParagraph>
      <div className="my-6 rounded-xl border border-purple-200 bg-[var(--bg-light-purple)] px-5 py-4 text-center font-extrabold text-[var(--brand-navy)]">
        Social Content → Website Content → Trust → Service → Conversion
      </div>
      <ArticleParagraph>Social media can support content distribution, brand discovery and audience engagement alongside the broader search strategy.</ArticleParagraph>

      <ArticleHeading>Organic and Paid Social Media</ArticleHeading>
      <ArticleParagraph>Organic and paid social should not always be treated as completely separate activities. Organic content can help a business understand:</ArticleParagraph>
      <ArticleList items={[
        'which topics attract attention',
        'which messages generate engagement',
        'which formats resonate',
        'which audiences respond',
      ]} />
      <ArticleParagraph>Paid campaigns can then be used when there is a clear reason to amplify reach, target specific audiences or support a defined conversion objective.</ArticleParagraph>
      <ShiftBox from="Should we use organic or paid?" to="Which approach best supports this particular objective?" />

      <ArticleHeading>Measure What Actually Matters</ArticleHeading>
      <ArticleParagraph>Follower count can provide context, but it should not be the only success metric. The right metric depends on the objective.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Awareness</h3>
      <ArticleList items={['reach', 'impressions', 'video views', 'relevant audience growth']} />
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Engagement</h3>
      <ArticleList items={['meaningful comments', 'shares', 'saves', 'interactions']} />
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Traffic</h3>
      <ArticleList items={['website sessions', 'landing-page visits', 'engaged sessions']} />
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Leads</h3>
      <ArticleList items={['form submissions', 'enquiries', 'calls', 'qualified conversations']} />
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Business Outcomes</h3>
      <ArticleList items={['qualified leads', 'opportunities', 'customers', 'revenue where measurable']} />

      <ArticleHeading>Common Social Media Mistakes</ArticleHeading>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Posting Without a Strategy</h3>
      <ArticleParagraph>Creating content simply because the calendar says something needs to be posted.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Talking Only About the Business</h3>
      <ArticleParagraph>Constantly promoting products and services without giving the audience useful information.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Chasing Every Trend</h3>
      <ArticleParagraph>Not every viral format is relevant to every brand. A trend should support the brand and audience rather than distract from them.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Ignoring Comments and Messages</h3>
      <ArticleParagraph>Social media is a communication channel. Publishing content but ignoring genuine conversations can create a poor customer experience.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Measuring Vanity Metrics Only</h3>
      <ArticleParagraph>A large follower count does not automatically mean a successful marketing programme.</ArticleParagraph>
      <h3 className="text-lg font-extrabold text-[var(--brand-navy)] mb-2">Using the Same Content Everywhere</h3>
      <ArticleParagraph>Copying and pasting identical content across every platform can make communication feel disconnected from the audience.</ArticleParagraph>

      <ArticleHeading>A Simple Social Media Strategy Framework</ArticleHeading>
      <ArticleParagraph>If you are starting from scratch, use this process:</ArticleParagraph>
      <StepItem num="01" title="Define the Objective" desc="Choose the business outcome you want social media to support." />
      <StepItem num="02" title="Define the Audience" desc="Understand who you want to reach and what matters to them." />
      <StepItem num="03" title="Select the Platforms" desc="Prioritise platforms based on audience and objective." />
      <StepItem num="04" title="Build Content Pillars" desc="Define the subjects and themes your brand should consistently communicate." />
      <StepItem num="05" title="Create a Content Plan" desc="Decide what will be published, where, when and why." />
      <StepItem num="06" title="Publish and Engage" desc="Post consistently and actively participate in relevant conversations." />
      <StepItem num="07" title="Measure and Improve" desc="Review performance, identify patterns and refine the strategy." />
      <ArticleParagraph>A social media strategy should evolve as you learn more about your audience.</ArticleParagraph>

      <ArticleHeading>The Goal Is Not More Content</ArticleHeading>
      <ArticleParagraph>The real goal is more meaningful impact. A successful social media presence should help the right people:</ArticleParagraph>
      <ArticleList items={[
        'Discover your brand.',
        'Understand what you offer.',
        'Learn from your expertise.',
        'Trust your business.',
        'Consider your solution.',
        'Take the next step.',
      ]} />
      <ArticleParagraph>That is why strategy matters.</ArticleParagraph>

      <TakeawayBox
        title="Stop Asking ‘What Should We Post?’ Start Asking ‘Why Are We Posting It?’"
        paragraphs={[
          'Social media works better when every important activity has a reason behind it.',
          'Define the objective. Understand the audience. Choose the right platforms. Build useful content pillars. Create content for the customer journey. Measure meaningful outcomes.',
          'Then continuously improve based on what the data and audience behaviour tell you. You do not need to post simply for the sake of posting. You need a social media strategy that connects content, audience, brand and business objectives.',
        ]}
      />
    </article>
  );
}
