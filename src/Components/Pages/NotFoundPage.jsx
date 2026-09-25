import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";
import CommonHero from "../Services/common/CommonHero";
import bgImage from '../../assets/All the Hero Section bg/404.webp';

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      navigate("/");
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#ffffff]">
      <Navbar />

      <main className="flex-1">
        {/* ── EXACT HERO FORMAT (Matching Social Media Service Hero) ── */}
        <CommonHero
          bgImage={bgImage}
          title="404 - Page Not Found"
          breadcrumbText="404 Error"
          tagText="PAGE NOT FOUND • ERROR 404"
          headingWords={[
            { text: "The" },
            { text: "Page", italic: true },
            { text: "You're" },
            { text: "Looking" },
            { text: "For", italic: true },
            { text: "Doesn't" },
            { text: "Exist." },
          ]}
          description1="The page or URL you are attempting to reach might have been moved, renamed, removed, or never existed in the first place."
          description2="Don't worry — you can head back to our homepage, explore our digital marketing services, or let our automated timer redirect you safely."
          button2Text="Return to Homepage"
          button2Link="/"
        />

        {/* ── AUTOMATIC REDIRECT NOTIFICATION BAR ── */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 sm:pb-20 -mt-2">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border shadow-sm"
            style={{
              backgroundColor: 'var(--bg-light-purple, #f8f6fc)',
              borderColor: 'rgba(139, 92, 246, 0.18)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f97316]"></span>
              </span>
              <p className="text-[14px] sm:text-[15px] font-semibold text-slate-800 m-0">
                Redirecting automatically to homepage in{" "}
                <span className="text-[17px] font-bold text-[#f97316]">{countdown}s</span>
              </p>
            </div>
            <Link
              to="/"
              className="text-[14px] font-bold text-[#1e2f57] hover:text-[#f97316] transition-colors underline underline-offset-4"
            >
              Go to Homepage Now →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
