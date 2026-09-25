import React, { useEffect } from 'react';
import { usePopup } from '../../context/PopupContext';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import '../../HomePage/common.css';

// Common Components
import CommonHero from '../../Services/common/CommonHero';
import CommonProblem from '../../Services/common/CommonProblem';
import CommonApproach from '../../Services/common/CommonApproach';
import CommonRelatedServices from '../../Services/common/CommonRelatedServices';
import CommonFAQ from '../../Services/common/CommonFAQ';
import CommonCTA from '../../Services/common/CommonCTA';

// Custom Sections
import RelevantWork from './Sections/RelevantWork';

// Data
import {
  heroData, problemData, approachData, whatWeDoData,
  faqData, ctaData
} from './BeautySalonData';

export default function BeautySalon() {
  const { openPopup } = usePopup();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO */}
      <CommonHero {...heroData} />

      {/* 2. THE CHALLENGE */}
      <CommonProblem {...problemData} variant="fragments" />

      {/* 3. WHAT WE CAN HELP WITH */}
      <CommonRelatedServices {...whatWeDoData} />

      {/* 4. OUR APPROACH */}
      <CommonApproach {...approachData} />

      {/* 5. RELEVANT WORK */}
      <RelevantWork />

      {/* 6. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 7. FINAL CTA */}
      <CommonCTA {...ctaData} button1Action={openPopup} />

      <Footer />
    </div>
  );
}
