const fs = require('fs');

// Read the first part of the file (component definitions)
const originalContent = fs.readFileSync('src/Components/Blog/articles/SocialMediaStrategyArticle.jsx', 'utf8');

// Find the export default function line
const lines = originalContent.split('\n');
let exportLineIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export default function')) {
    exportLineIndex = i;
    break;
  }
}

// Get the component definitions (before export default)
const componentDefinitions = lines.slice(0, exportLineIndex).join('\n');

// Create the new article content
const newArticleContent = `export default function SocialMediaStrategyArticle() {
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
      <P>
        The strategy should be specific enough to guide daily content decisions while remaining flexible enough to respond to audience behaviour and changing platform conditions.
      </P>
`;