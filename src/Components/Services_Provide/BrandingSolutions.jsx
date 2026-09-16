import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonApproach from '../Services/common/CommonApproach';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonSpecialty from '../Services/common/CommonSpecialty';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';
import BrandingStages from '../Services/BrandingSolutions/BrandingStages';

// Import data
import {
  heroData, problemData, approachData, whatWeBuildData, marketingData,
  digitalBrandingData, rebrandingData, whyAdsservData, faqData, relatedServicesData, ctaData,
  imgStrategy, imgLogo, imgVisual, imgGuidelines, imgSocialMedia, imgCampaignIdentity
} from './BrandingSolutionsData';

export default function BrandingSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />

      <CommonProblem {...problemData} variant="fragments" />

      <CommonApproach {...approachData} />

      <CommonWhatWeDo {...whatWeBuildData} />

      {/* Brand Specialty Sections */}
      <CommonSpecialty
        tagText="START WITH THE WHY"
        headingWords={[{ text: "Before" }, { text: "deciding" }, { text: "what" }, { text: "the" }, { text: "brand" }, { text: "should" }, { text: "look", italic: true }, { text: "like," }, { text: "decide" }, { text: "what" }, { text: "it" }, { text: "should" }, { text: "mean." }]}

        paragraphs={["Visual identity becomes much stronger when it has a clear reason behind it.", "We consider questions such as:"]}
        items={["Who are you trying to reach?", "What problem do you solve?", "Why should people choose you?", "What do competitors already own?", "What should people remember about you?", "How should the brand feel when someone encounters it?"]}
        bottomText="The answers create a foundation for the visual work rather than leaving design decisions to personal preference alone."
        bgColor="white"
      />

      <CommonSpecialty
        tagText="MAKE IT LOOK LIKE YOU"
        headingWords={[{ text: "Consistency" }, { text: "makes" }, { text: "recognition", italic: true }, { text: "easier." }]}

        paragraphs={["A strong visual identity creates a repeatable set of decisions around colour, typography, imagery, composition, graphic elements, and visual tone.", "The goal isn't to make every asset identical.", "It is to make different assets feel unmistakably connected."]}
        bgColor="purple"
      />

      <CommonSpecialty
        tagText="ONE MARK. MANY USES."
        headingWords={[{ text: "A" }, { text: "logo" }, { text: "needs" }, { text: "to" }, { text: "survive", italic: true }, { text: "outside" }, { text: "the" }, { text: "presentation" }, { text: "deck." }]}

        paragraphs={["We consider where the logo will actually appear — websites, social profiles, advertisements, documents, presentations, mobile screens, print materials, and other brand touchpoints.", "That means the identity needs to remain clear at different sizes and in different contexts.", "A logo is an entry point to the brand. It shouldn't have to carry the entire brand by itself."]}
        bgColor="white"
      />

      <CommonSpecialty
        tagText="MAKE CONSISTENCY EASIER"
        headingWords={[{ text: "Your" }, { text: "brand" }, { text: "shouldn't" }, { text: "change" }, { text: "every", italic: true }, { text: "time" }, { text: "someone" }, { text: "opens" }, { text: "Canva." }]}

        paragraphs={["Brand guidelines give your team a practical reference for using the identity consistently.", "Depending on the project, guidelines can cover:"]}
        items={["Logo usage", "Colour palette", "Typography", "Visual style", "Photography direction", "Graphic elements", "Layout principles", "Social media usage", "Tone of voice", "Messaging principles"]}
        bottomText="The goal is simple: make the right brand decision easier to repeat."
        bgColor="purple"
      />

      {/* Branding for Digital Section */}
      <CommonSpecialty
        tagText={digitalBrandingData.tagText}
        headingWords={digitalBrandingData.headingWords}

        paragraphs={digitalBrandingData.paragraphs}
        items={digitalBrandingData.items}
        bottomText={digitalBrandingData.bottomText}
        bgColor="white"
      />

      {/* Rebranding Section */}
      <CommonSpecialty
        tagText={rebrandingData.tagText}
        headingWords={rebrandingData.headingWords}

        paragraphs={rebrandingData.paragraphs}
        bgColor="purple"
      />

      <BrandingStages />

      <CommonWhyAdsserv {...marketingData} variant="grid" />

      <CommonWhyAdsserv {...whyAdsservData} variant="list" />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
