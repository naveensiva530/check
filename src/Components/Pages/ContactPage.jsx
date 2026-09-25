import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import ContactHero from '../Contact/ContactHero';
import ContactIntro from '../Contact/ContactIntro';
import ContactOptions from '../Contact/ContactOptions';
import ContactFormSection from '../Contact/ContactFormSection';
import ContactWhyTalk from '../Contact/ContactWhyTalk';
import ContactProcessSteps from '../Contact/ContactProcessSteps';
import ContactServicesGrid from '../Contact/ContactServicesGrid';
import ContactFAQSection from '../Contact/ContactFAQSection';
import ContactFinalCTA from '../Contact/ContactFinalCTA';
import '../HomePage/common.css';

export default function ContactPage() {
  const [preselectedService, setPreselectedService] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = (serviceName) => {
    setPreselectedService(serviceName);
    scrollToForm();
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Page Sections - Exact User Specification Order */}
      <main className="flex-1">
        {/* 1. HERO (Two-column format matching Social Media CommonHero) */}
        <ContactHero
          onScrollToForm={scrollToForm}
          onScrollToServices={scrollToServices}
        />

        {/* 2. INTRODUCTION */}
        <ContactIntro />

        {/* 3. CONTACT OPTIONS */}
        <ContactOptions onSelectOption={handleSelectOption} />

        {/* 4. CONTACT DETAILS & ENQUIRY FORM */}
        <ContactFormSection preselectedService={preselectedService} />

        {/* 5. WHY TALK TO ADSSERV? */}
        <ContactWhyTalk onScrollToForm={scrollToForm} />

        {/* 6. WHAT HAPPENS NEXT (4 Process Steps) */}
        <ContactProcessSteps />

        {/* 7. SERVICES (Not Sure Where To Start? 6 Services Grid) */}
        <ContactServicesGrid />

        {/* 8. FAQ (Contact FAQ) */}
        <ContactFAQSection />

        {/* 9. FINAL CTA (CommonCTA) */}
        <ContactFinalCTA onScrollToForm={scrollToForm} onScrollToServices={scrollToServices} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
