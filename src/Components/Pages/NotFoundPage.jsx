import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";
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
        {/* ── BANNER HERO (Matching ContactHero) ─────────────────────────── */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{ height: 'clamp(220px, 35vw, 420px)', marginTop: 'clamp(60px, 10vw, 90px)' }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url("${bgImage}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />

          {/* Decorative blobs */}
          <div className="absolute z-[2]" style={{ top: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(196,181,253,0.18)', filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite' }} />
          <div className="absolute z-[2]" style={{ bottom: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(167,139,250,0.20)', filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse' }} />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <h1
              className="font-extrabold text-white mb-4 tracking-tight leading-tight uppercase"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', textShadow: '0 4px 24px rgba(80,0,180,0.25)' }}
            >
              404 - Page Not Found
            </h1>

            <div
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1"
              style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}
            >
              <Link to="/" className="flex items-center gap-1 sm:gap-1.5 transition-opacity hover:opacity-70" style={{ color: '#fb923c', fontWeight: 700, fontSize: '14px' }}>
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
              <span className="text-[13px] sm:text-[16px] font-semibold" style={{ color: '#1e2f57' }}>404</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '60px' }}>
              <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
            </svg>
          </div>

          <style>{`
            @keyframes floatBlob {
              0%, 100% { transform: scale(1) translate(0, 0); }
              50% { transform: scale(1.08) translate(10px, -10px); }
            }
          `}</style>
        </div>

        {/* ── CONTENT BELOW CURVE ─────────────────────────── */}
        <section className="w-full bg-white pt-12 sm:pt-16 pb-16 sm:pb-24 px-6 md:px-8 font-primary flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
            Oops! You seem to be lost.
          </h2>
          <p className="text-[14px] sm:text-base md:text-lg text-slate-600 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            The page you are looking for might have been moved, renamed, or never existed in the first place.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-white shadow-[0_10px_30px_rgba(224,131,38,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: 'var(--brand-orange, #e08326)', fontSize: '15px' }}
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Go to Home Page</span>
          </Link>

          <div className="mt-8 sm:mt-10 px-5 sm:px-6 py-3 sm:py-4 w-full sm:w-auto max-w-full rounded-xl sm:rounded-2xl border flex items-center justify-center" style={{ backgroundColor: 'var(--bg-light-purple, #f8f6fc)', borderColor: 'rgba(139, 92, 246, 0.15)' }}>
            <p className="text-[13.5px] sm:text-[15px] font-semibold text-slate-700 leading-snug">
              Redirecting automatically to home in <br className="block sm:hidden" />
              <span className="text-[16px] sm:text-[18px] font-bold mx-1" style={{ color: 'var(--accent-orange, #e08326)' }}>{countdown}</span> seconds...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
