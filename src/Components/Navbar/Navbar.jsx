import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, X, Menu } from "lucide-react";
import logo from "../../assets/logo.png";

const serviceLinks = [
  { label: "Social Media Marketing", path: "/services/social-media-marketing" },
  { label: "Performance Marketing", path: "/services/performance-marketing" },
  { label: "Website Development", path: "/services/website-development" },
  { label: "Influencer Marketing", path: "/services/influencer-marketing" },
  { label: "SEO Services", path: "/services/seo-services" },
  { label: "Video Production", path: "/services/video-production" },
  { label: "Branding Solutions", path: "/services/branding-solutions" },
  { label: "Digital Consulting", path: "/services/digital-consulting" },
  { label: "Content Writing", path: "/services/content-writing" },
  { label: "Instagram Marketing", path: "/services/instagram-marketing" },
];

const Navbar = () => {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "BLOG"];

  const location = useLocation();

  // Map menu label -> route path
  const routeMap = {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    PROJECTS: "/projects",
    BLOG: "/blog",
    FAQ: "/faq",
    CONTACT: "/contact",
  };

  // Returns true if the current path matches this menu item
  const isActive = (item) => {
    const path = routeMap[item];
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    // Match exact path or any sub-route
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolledServicesOpen, setScrolledServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const scrolledServicesRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const scrolledLeaveTimerRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);

    const handleOpenServices = () => {
      clearTimeout(leaveTimerRef.current);
      clearTimeout(scrolledLeaveTimerRef.current);
      setServicesOpen(true);
      setScrolledServicesOpen(true);
    };

    const handleClickOutside = (e) => {
      const megaMenu = document.getElementById("navbar-mega-menu");
      const isServicesBtn = servicesRef.current?.contains(e.target) || scrolledServicesRef.current?.contains(e.target);
      const isExploreBtn = e.target.closest?.(".know-more-btn");
      if (megaMenu && !megaMenu.contains(e.target) && !isServicesBtn && !isExploreBtn) {
        setServicesOpen(false);
        setScrolledServicesOpen(false);
      }
    };

    window.addEventListener("open-services-menu", handleOpenServices);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-services-menu", handleOpenServices);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServicesEnter = () => {
    clearTimeout(leaveTimerRef.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    leaveTimerRef.current = setTimeout(() => setServicesOpen(false), 180);
  };
  const handleScrolledServicesEnter = () => {
    clearTimeout(scrolledLeaveTimerRef.current);
    setScrolledServicesOpen(true);
  };
  const handleScrolledServicesLeave = () => {
    scrolledLeaveTimerRef.current = setTimeout(() => setScrolledServicesOpen(false), 180);
  };

  // Renders a simple clean vertical dropdown below the SERVICES button
  const renderServicesDropdown = (isOpen, onMouseEnter, onMouseLeave, onClose, positionStyle = {}) => (
    <div
      id="navbar-services-dropdown"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        top: "calc(100% + 10px)",
        left: "50%",
        transform: isOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
        minWidth: "220px",
        background: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        padding: "8px 0",
        zIndex: 99999,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        border: "1px solid rgba(0,0,0,0.06)",
        boxSizing: "border-box",
        ...positionStyle,
      }}
    >
      {/* Small arrow tip */}
      <div style={{
        position: "absolute",
        top: "-6px",
        left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
        width: "12px",
        height: "12px",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "none",
        borderRight: "none",
        borderRadius: "2px",
      }} />
      {serviceLinks.map((s, i) => (
        <Link
          key={i}
          to={s.path}
          onClick={() => { onClose(); window.scrollTo(0, 0); }}
          style={{ textDecoration: "none", display: "block" }}
          className="group"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "9px 18px",
              transition: "background 0.18s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#fff7f0"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#ff6b35",
              flexShrink: 0,
              transition: "transform 0.2s",
            }} className="group-hover:scale-125" />
            <span style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#374151",
              whiteSpace: "nowrap",
              transition: "color 0.18s ease",
            }}
            className="group-hover:!text-[#ff6b35]"
            >
              {s.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        .search-input-field::placeholder { color: #4b5563; font-weight: 400; }
        .mega-menu-link {
          position: relative; color: #374151; font-weight: 600; font-size: 16px;
          transition: color 0.3s; display: inline-block; padding: 8px 0;
        }
        .mega-menu-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0%;
          height: 2px; background-color: #ff6b35; transition: width 0.3s ease;
        }
        .mega-menu-link:hover { color: #ff6b35; }
        .mega-menu-link:hover::after { width: 100%; }
      `}</style>

      {/* ── Search Popup Overlay ── */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
          background: "rgba(0,0,0,0.6)", zIndex: 100000,
          opacity: isSearchOpen ? 1 : 0,
          pointerEvents: isSearchOpen ? "auto" : "none",
          transition: "opacity 0.6s ease",
        }}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full h-auto min-h-[280px] md:min-h-[350px] bg-white relative shadow-xl flex flex-col items-center"
          style={{
            transform: isSearchOpen ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        >
          <div className="w-full px-4 sm:px-8 md:px-12 py-5 sm:py-7 flex justify-between items-center box-border">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#ff6b35] rounded-xl flex justify-center items-center p-1.5 flex-shrink-0">
                <img src={logo} alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-lg sm:text-2xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: "'Segoe UI', sans-serif" }}>ADSSERV</span>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-gray-600 hover:text-[#ff6b35] transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-7 h-7 sm:w-9 sm:h-9" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-8 py-6 sm:py-10">
            <div className="w-full max-w-[900px] relative">
              <input
                type="text"
                className="search-input-field w-full border-0 border-b-2 border-gray-300 text-xl sm:text-3xl md:text-4xl text-gray-900 pr-12 sm:pr-16 py-3 sm:py-4 outline-none bg-transparent font-medium transition-colors"
                placeholder="Type Words Then Enter"
                style={{ fontFamily: "'Segoe UI', sans-serif" }}
                onFocus={(e) => e.target.style.borderColor = "#ff6b35"}
                onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
              />
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff6b35] absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile & Tablet Header Bar (Visible on < 1024px) ── */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-[70px] bg-white/95 backdrop-blur-md z-[9999] border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 shadow-sm box-border">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <div className="w-[42px] h-[42px] rounded-lg bg-white shadow-sm border border-gray-100 p-1 flex items-center justify-center flex-shrink-0">
            <img src={logo} alt="ADS SERV Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-[20px] font-black tracking-tight text-[#111827]" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            ADSSERV
          </span>
        </Link>

        {/* Right actions: Search + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open Search"
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-95 transition-colors border-none bg-transparent cursor-pointer"
          >
            <Search size={20} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="w-11 h-11 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-[#111827] active:scale-95 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Slide-Over Drawer Overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 z-[100000] backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* ── Mobile Slide-Over Drawer Content ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-[100001] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out box-border ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#ff6b35] p-1 flex items-center justify-center flex-shrink-0">
              <img src={logo} alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span className="text-lg font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: "'Segoe UI', sans-serif" }}>ADS SERV</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 border-none cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Menu Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {menuItems.map((item, index) => {
            const active = isActive(item);
            if (item === "SERVICES") {
              return (
                <div key={index} className="border-b border-gray-100 pb-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`text-lg font-bold transition-colors border-none bg-transparent cursor-pointer p-0 text-left ${active ? "text-[#7c3aed]" : "text-gray-800 hover:text-[#ff6b35]"
                        }`}
                    >
                      {item}
                    </button>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 text-gray-500 hover:text-gray-800 border-none bg-transparent cursor-pointer"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#ff6b35]" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Accordion Sub-services */}
                  {mobileServicesOpen && (
                    <div className="mt-3 pl-3 space-y-3 border-l-2 border-orange-200 animate-fadeIn">
                      {serviceLinks.map((s, si) => (
                        <Link
                          key={si}
                          to={s.path}
                          onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                          style={{ textDecoration: "none" }}
                          className="flex items-center gap-2 text-[14px] font-medium text-gray-600 hover:text-[#ff6b35] transition-colors py-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] flex-shrink-0" />
                          <span>{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={index} className="border-b border-gray-100 pb-3">
                <Link
                  to={routeMap[item] || "/"}
                  onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                  style={{ textDecoration: "none" }}
                  className={`block text-lg font-bold transition-colors ${active ? "text-[#7c3aed]" : "text-gray-800 hover:text-[#ff6b35]"
                    }`}
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3">
          <Link
            to="/contact"
            onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
            style={{ textDecoration: "none" }}
            className="w-full flex items-center justify-center py-3.5 px-6 rounded-full bg-[#111827] text-white font-bold text-[15px] shadow-md hover:bg-[#ff6b35] transition-colors"
          >
            Start a Project
          </Link>
          <p className="text-center text-xs text-gray-400 font-medium m-0">
            hello@adsserv.com • Tamil Nadu, India
          </p>
        </div>
      </div>

      {/* ── Scrolled Full-Width Navbar (Desktop Only: lg:flex) ── */}
      <div
        className="hidden lg:flex"
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "90px",
          background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", zIndex: 9999,
          alignItems: "center", justifyContent: "space-between",
          padding: "0 40px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transform: isScrolled ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)", boxSizing: "border-box"
        }}
      >
        {/* Scrolled Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
          <img src={logo} alt="Logo" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
          <span style={{ fontSize: "24px", fontWeight: "900", letterSpacing: "1px", background: "linear-gradient(90deg, #7c3aed, #ff6b35)", WebkitBackgroundClip: "text", color: "transparent", fontFamily: "'Segoe UI', sans-serif" }}>
            ADS SERV
          </span>
        </div>

        {/* Scrolled Menu Items */}
        <ul style={{ display: "flex", alignItems: "center", gap: "38px", listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map((item, index) => {
            const active = isActive(item);
            return (
              <li key={index}
                ref={item === "SERVICES" ? scrolledServicesRef : null}
                onMouseEnter={item === "SERVICES" ? handleScrolledServicesEnter : undefined}
                onMouseLeave={item === "SERVICES" ? handleScrolledServicesLeave : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  fontSize: "15px", fontWeight: active ? "700" : "600",
                  color: active ? "#7c3aed" : "#374151",
                  cursor: "pointer", position: "relative", paddingBottom: "6px",
                  transition: "color 0.3s ease"
                }}
              >
                {item === "HOME" ? (
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "ABOUT" ? (
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "SERVICES" ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setScrolledServicesOpen(!scrolledServicesOpen);
                      }}
                      style={{ color: "inherit", display: "flex", alignItems: "center", gap: "4px", background: "transparent", border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
                    >
                      {item}
                      <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: scrolledServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </button>
                    {renderServicesDropdown(
                      scrolledServicesOpen,
                      () => { clearTimeout(scrolledLeaveTimerRef.current); setScrolledServicesOpen(true); },
                      () => { scrolledLeaveTimerRef.current = setTimeout(() => setScrolledServicesOpen(false), 180); },
                      () => setScrolledServicesOpen(false)
                    )}
                  </>
                ) : item === "PROJECTS" ? (
                  <Link to="/projects" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "BLOG" ? (
                  <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "FAQ" ? (
                  <Link to="/faq" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "CONTACT" ? (
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : (
                  <>{item}</>
                )}
                {active && (
                  <span style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "#7c3aed", borderRadius: "10px" }} />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Area: CTA */}
        <div style={{ display: "flex", alignItems: "center", borderLeft: "1px solid #d1d5db", paddingLeft: "24px" }}>
          <Link to="/contact" style={{ background: "#111827", color: "#ffffff", padding: "10px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none", transition: "background 0.3s ease" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#ff6b35"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#111827"}
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* ── Fixed Header (Desktop Only: lg:flex) ── */}
      <header
        className="hidden lg:flex"
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "90px",
          background: "transparent", zIndex: 9999, alignItems: "center",
        }}
      >
        {/* ── Dark Logo Section ── */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, height: "100%", width: "320px",
            background: "#070716", clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)",
            display: "flex", alignItems: "center", paddingLeft: "28px", zIndex: 10001,
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", cursor: "pointer" }}>
            <div
              style={{ width: "62px", height: "62px", borderRadius: "10px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "4px", boxSizing: "border-box" }}>
              <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <span
              style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", letterSpacing: "1px", whiteSpace: "nowrap", fontFamily: "'Segoe UI', sans-serif" }}>
              ADS SERV
            </span>
          </div>
        </div>

        {/* ── White Navbar Bar ── */}
        <div
          style={{
            position: "absolute", top: "12px", left: "250px", right: "12px", height: "66px",
            background: "#ffffff", borderRadius: "50px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 32px 0 70px", boxSizing: "border-box", zIndex: 10000,
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            overflow: "visible",
          }}
        >
          {/* Menu Items */}
          <ul style={{ display: "flex", alignItems: "center", gap: "38px", listStyle: "none", margin: 0, padding: 0 }}>
            {menuItems.map((item, index) => {
              const active = isActive(item);
              return (
                <li
                  key={index}
                  ref={item === "SERVICES" ? servicesRef : null}
                  onMouseEnter={item === "SERVICES" ? handleServicesEnter : undefined}
                  onMouseLeave={item === "SERVICES" ? handleServicesLeave : undefined}
                  style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    fontSize: "15px", fontWeight: active ? "700" : "500",
                    color: active ? "#7c3aed" : "#374151",
                    cursor: "pointer", position: "relative", paddingBottom: "6px",
                  }}
                >
                  {item === "HOME" ? (
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "ABOUT" ? (
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "SERVICES" ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesOpen(!servicesOpen);
                        }}
                        style={{ color: "inherit", display: "flex", alignItems: "center", gap: "4px", background: "transparent", border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
                      >
                        {item}
                        <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                      {renderServicesDropdown(
                        servicesOpen,
                        () => { clearTimeout(leaveTimerRef.current); setServicesOpen(true); },
                        () => { leaveTimerRef.current = setTimeout(() => setServicesOpen(false), 180); },
                        () => setServicesOpen(false)
                      )}
                    </>
                  ) : item === "PROJECTS" ? (
                    <Link to="/projects" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "BLOG" ? (
                    <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "FAQ" ? (
                    <Link to="/faq" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : item === "CONTACT" ? (
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                  ) : (
                    <>{item}</>
                  )}
                  {active && (
                    <span style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "#7c3aed", borderRadius: "10px" }} />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Area: CTA */}
          <div
            style={{ display: "flex", alignItems: "center", borderLeft: "1px solid #d1d5db", paddingLeft: "24px" }}>
            <Link to="/contact"
              style={{ background: "#111827", color: "#ffffff", padding: "10px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#ff6b35"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#111827"}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </header>

    </>
  );
};

export default Navbar;