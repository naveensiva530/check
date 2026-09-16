import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import Services from '../HomePage/Services/Services';
import '../HomePage/common.css';

export default function ServicesPage() {
  // Ensure the page loads at the top when navigating to it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Reuse the existing Services component from the homepage */}
      <Services />

      <Footer />
    </div>
  );
}

