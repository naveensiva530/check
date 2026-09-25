import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Email() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const formRef = useRef(null);

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'activation' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setLoading(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/connect@adsserv.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Newsletter Subscriber: ${email.trim()}`,
          "Subscriber Email": email.trim(),
          "Subscription Type": "ADSSERV INSIGHTS Newsletter (Homepage)",
          "_template": "table",
          "_captcha": "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus('success');
        setEmail('');
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('activation');
      } else {
        throw new Error(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter submission error:', err);
      if (err.message && err.message.toLowerCase().includes('activation')) {
        setStatus('activation');
      } else {
        setStatus('error');
        setErrorMessage(err.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline slam up animation
      gsap.fromTo(
        headlineRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Form and subtext fade up
      gsap.fromTo(
        formRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-24 md:py-32 font-sans flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">

      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center relative z-10">

        {/* Headline section (Animated together) */}
        <div ref={headlineRef} className="flex flex-col items-center w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[14px] md:text-[15px] italic font-medium uppercase tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy)' }}
            >
              NEWSLETTER
            </span>
          </div>

          {/* Big headline with pill image */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 leading-none tracking-tighter mb-4">
            <span className="text-[26px] sm:text-[44px] md:text-[68px] font-extrabold" style={{ color: '#1e2f57' }}>ADSSERV INSIGHTS</span>
          </div>
        </div>

        {/* Form section (Animated together) */}
        <div ref={formRef} className="flex flex-col items-center w-full px-2 sm:px-0">
          <p className="text-[14px] sm:text-[15px] max-w-lg mb-8 sm:mb-12 leading-relaxed font-medium" style={{ color: 'rgba(30,47,87,0.6)' }}>
            Get clear, practical thinking on digital marketing, platforms, and performance.
          </p>

          {/* Status feedback alerts */}
          {status === 'success' && (
            <div className="w-full max-w-[600px] mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between gap-4 text-left shadow-sm animate-fadeIn">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">Successfully Subscribed!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">Thank you for subscribing to ADSSERV Insights. You'll hear from us soon.</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setStatus(null)}
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline flex-shrink-0 cursor-pointer"
              >
                Done
              </button>
            </div>
          )}

          {status === 'activation' && (
            <div className="w-full max-w-[600px] mb-6 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3.5 text-left shadow-sm animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-amber-950 text-sm">One-Time Activation Needed</p>
                <p className="text-amber-800 leading-relaxed">
                  FormSubmit sent a one-time activation link to <strong>connect@adsserv.in</strong>. Please open that email and click <em>"Activate Form"</em>. Once clicked, all future submissions will deliver instantly!
                </p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="w-full max-w-[600px] mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-center gap-3 text-left shadow-sm animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-xs font-medium text-red-800">{errorMessage || 'Unable to submit right now. Please try again.'}</p>
            </div>
          )}

          {/* Subscribe form */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full max-w-[600px] flex flex-col sm:flex-row items-stretch shadow-xl sm:shadow-2xl overflow-hidden rounded-2xl" 
            style={{ border: '1px solid rgba(30,47,87,0.1)' }}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 px-3 sm:px-6 bg-white py-2 sm:py-0 min-w-0">
              <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e2f57" strokeWidth="2" strokeOpacity="0.4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                required
                disabled={loading}
                className="flex-1 bg-transparent outline-none font-medium text-[13px] sm:text-[14px] py-3.5 sm:py-5 min-w-0 disabled:opacity-50"
                style={{ color: '#1e2f57' }}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-[12px] sm:text-[13px] px-6 sm:px-8 min-h-[44px] py-3.5 sm:py-5 transition-all duration-300 hover:opacity-90 flex-shrink-0 active:scale-95 disabled:opacity-60 cursor-pointer"
              style={{ background: '#1e2f57', color: '#fff' }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#e08326'; }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#1e2f57'; }}>
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-[11px] tracking-wide" style={{ color: 'rgba(30,47,87,0.4)' }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </section>
  );
}
