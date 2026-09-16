import SeoAiSearchArticle from './SeoAiSearchArticle';
import SocialMediaStrategyArticle from './SocialMediaStrategyArticle';
import DigitalMarketingStrategyArticle from './DigitalMarketingStrategyArticle';

export const articleContentMap = {
  'seo-in-the-age-of-ai-search': SeoAiSearchArticle,
  'why-your-business-needs-a-social-media-strategy': SocialMediaStrategyArticle,
  'how-to-build-a-digital-marketing-strategy': DigitalMarketingStrategyArticle,
};

export function getArticleContent(slug) {
  return articleContentMap[slug] ?? null;
}

export function hasArticleContent(slug) {
  return slug in articleContentMap;
}
