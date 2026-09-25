import React from 'react';
import bgImage from '../../assets/All the Hero Section bg/Contact Us.webp';
import CommonHero from '../Services/common/CommonHero';
import ButtonWithIcon from '../ui/button-with-icon';
import { heroData } from './contactData';

export default function ContactHero({ onScrollToServices }) {
  return (
    <CommonHero
      bgImage={bgImage}
      title="Contact ADSSERV"
      breadcrumbText="Contact"
      tagText={heroData.eyebrow}
      button2Text={null}
      headingWords={[
        { text: "Let's" },
        { text: "Talk" },
        { text: "About" },
        { text: "What" },
        { text: "You're" },
        { text: "Building.", italic: true },
      ]}
      description1="Have a new idea, a growth challenge or a digital presence that needs a rethink? Tell us where you are, what you want to achieve and what is getting in the way."
    >
      <div>
        <p className="mb-6 sm:mb-8 text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed text-slate-600">
          We'll start with the right conversation — not a one-size-fits-all solution.
        </p>
        <div className="w-full sm:w-auto">
          <ButtonWithIcon onClick={onScrollToServices} outline className="w-full sm:w-auto justify-center">
            {heroData.secondaryCTA || 'Explore Our Services'}
          </ButtonWithIcon>
        </div>
      </div>
    </CommonHero>
  );
}
