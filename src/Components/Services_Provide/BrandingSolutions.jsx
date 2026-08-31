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
  whyAdsservData, faqData, relatedServicesData, ctaData
} from './BrandingSolutionsData';

// Custom component for the specialty sections
function BrandBoard({ variant = 'strategy' }) {
  const palettes = {
    strategy: ['#1e2f57', '#e08326', '#8b5cf6', '#f1f5f9'],
    visual: ['#1e2f57', '#6366f1', '#a78bfa', '#e0e7ff'],
    logo: ['#111827', '#ffffff', '#e08326', '#cbd5e1'],
    guidelines: ['#1e2f57', '#475569', '#94a3b8', '#f8fafc'],
    digital: ['#e08326', '#1e2f57', '#8b5cf6', '#fef3c7'],
    rebrand: ['#64748b', '#1e2f57', '#e08326', '#f1f5f9'],
  };
  const colors = palettes[variant] || palettes.strategy;

  return (
    <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-[340px]">
      <div className="flex gap-2 mb-5">
        {colors.map((c, i) => (
          <div key={i} className="flex-1 h-10 rounded-lg" style={{ background: c, border: c === '#ffffff' || c === '#f8fafc' || c === '#f1f5f9' ? '1px solid #e2e8f0' : 'none' }} />
        ))}
      </div>
      <div className="border-t border-dashed border-gray-200 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Type</p>
        <p className="text-[28px] font-extrabold leading-none mb-1" style={{ color: 'var(--brand-navy)', fontFamily: "'Playfair Display', Georgia, serif" }}>Brand</p>
        <p className="text-[13px] font-medium text-slate-500">Inter · Regular · Medium · Bold</p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: 'var(--brand-navy)' }}>A</div>
        <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full w-2/3 rounded-full" style={{ background: 'var(--accent-orange)' }} />
        </div>
      </div>
    </div>
  );
}

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
        leftContent={<BrandBoard variant="strategy" />}
        paragraphs={["Visual identity becomes much stronger when it has a clear reason behind it.", "We consider questions such as:"]}
        items={["Who are you trying to reach?", "What problem do you solve?", "Why should people choose you?", "What do competitors already own?", "What should people remember about you?", "How should the brand feel when someone encounters it?"]}
        bottomText="The answers create a foundation for the visual work rather than leaving design decisions to personal preference alone."
        bgColor="white"
      />

      <CommonSpecialty 
        tagText="MAKE IT LOOK LIKE YOU"
        headingWords={[{ text: "Consistency" }, { text: "makes" }, { text: "recognition", italic: true }, { text: "easier." }]}
        leftContent={<BrandBoard variant="visual" />}
        paragraphs={["A strong visual identity creates a repeatable set of decisions around colour, typography, imagery, composition, graphic elements, and visual tone.", "The goal isn't to make every asset identical.", "It is to make different assets feel unmistakably connected."]}
        bgColor="purple"
      />
      
      <CommonSpecialty 
        tagText="ONE MARK. MANY USES."
        headingWords={[{ text: "A" }, { text: "logo" }, { text: "needs" }, { text: "to" }, { text: "survive", italic: true }, { text: "outside" }, { text: "the" }, { text: "presentation" }, { text: "deck." }]}
        leftContent={<BrandBoard variant="logo" />}
        paragraphs={["We consider where the logo will actually appear — websites, social profiles, advertisements, documents, presentations, mobile screens, print materials, and other brand touchpoints.", "That means the identity needs to remain clear at different sizes and in different contexts.", "A logo is an entry point to the brand. It shouldn't have to carry the entire brand by itself."]}
        bgColor="white"
      />
      
      <CommonSpecialty 
        tagText="MAKE CONSISTENCY EASIER"
        headingWords={[{ text: "Your" }, { text: "brand" }, { text: "shouldn't" }, { text: "change" }, { text: "every", italic: true }, { text: "time" }, { text: "someone" }, { text: "opens" }, { text: "Canva." }]}
        leftContent={<BrandBoard variant="guidelines" />}
        paragraphs={["Brand guidelines give your team a practical reference for using the identity consistently.", "Depending on the project, guidelines can cover:"]}
        items={["Logo usage", "Colour palette", "Typography", "Visual style", "Photography direction", "Graphic elements", "Layout principles", "Social media usage", "Tone of voice", "Messaging principles"]}
        bottomText="The goal is simple: make the right brand decision easier to repeat."
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
