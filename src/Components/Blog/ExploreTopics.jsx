import React from 'react';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import { topics } from './blogData';
import { Search, PenLine, Share2, Megaphone, Monitor, Palette, BarChart2, Lightbulb } from 'lucide-react';

import seoImg from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import contentImg from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import socialImg from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import perfImg from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import webImg from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import brandImg from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import strategyImg from '../../assets/Servicess/RelatedServices/Digital_consulting-removebg-preview.webp';

// Map blog topics to use the CommonRelatedServices card format (images and icons)
const topicServices = topics.map(topic => {
  let icon = Lightbulb;
  let img = null;
  let href = '#';
  let cta = 'Explore Topic';

  const t = topic.title.toLowerCase();
  
  if (t.includes('seo')) { icon = Search; img = seoImg; }
  else if (t.includes('aeo') || t.includes('ai search')) { icon = Search; img = seoImg; }
  else if (t.includes('social')) { icon = Share2; img = socialImg; }
  else if (t.includes('performance')) { icon = Megaphone; img = perfImg; }
  else if (t.includes('content') || t.includes('copywriting')) { icon = PenLine; img = contentImg; }
  else if (t.includes('website') || t.includes('ux')) { icon = Monitor; img = webImg; }
  else if (t.includes('brand')) { icon = Palette; img = brandImg; }
  else if (t.includes('strategy')) { icon = BarChart2; img = strategyImg; }

  return {
    ...topic,
    icon,
    img,
    href,
    cta
  };
});

export default function ExploreTopics() {
  return (
    <CommonRelatedServices
      tagText="EXPLORE OUR TOPICS"
      headingWords={[
        { text: "What" }, { text: "Are" }, { text: "You" }, { text: "Looking", italic: true },
        { text: "to" }, { text: "Learn?" }
      ]}
      services={topicServices}
    />
  );
}
