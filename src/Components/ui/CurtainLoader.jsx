import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../HomePage/common.css";

const EASE_CURVE = [0.44, 0, 0.56, 1];

const TOP_STRIP_DELAYS = [0, 0.2, 0.4, 0.6, 0.7, 0.4, 0.2, 0];
const BOTTOM_STRIP_DELAYS = [0, 0.2, 0.4, 0.6, 0.7, 0.4, 0.2, 0];

export default function CurtainLoader({
  title = "ADS SERV",
  subtitle = "2026",
  backgroundColor = "var(--bg-light-purple, #ddd0f5)",
  sectionColor = "#d4c4f0",
  curtainColor = "var(--bg-light-purple, #ddd0f5)",
  titleColor = "var(--primary-dark, #1e2f57)",
  subtitleColor = "var(--brand-orange, #e08326)",
  duration = 1500, // ms before curtain begins parting
  onComplete,
}) {
  const [stage, setStage] = useState("start"); // "start" | "end" | "done"

  useEffect(() => {
    // Disable body scroll while curtain is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setStage("end");
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [duration]);

  const handleAnimationComplete = () => {
    if (stage === "end") {
      document.body.style.overflow = "";
      setStage("done");
      if (onComplete) onComplete();
    }
  };

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col pointer-events-auto select-none overflow-hidden"
        initial={{ backgroundColor }}
        animate={{
          backgroundColor: stage === "end" ? "rgba(6, 6, 6, 0)" : backgroundColor,
        }}
        transition={{ duration: 0.9, ease: EASE_CURVE }}
      >
        {/* ================= TOP SECTION (50%) ================= */}
        <motion.div
          className="relative w-full h-1/2 overflow-hidden"
          style={{ backgroundColor: sectionColor }}
          initial={{ y: "0%" }}
          animate={{
            y: stage === "end" ? "-100%" : "0%",
          }}
          transition={{ duration: 0.95, ease: EASE_CURVE }}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* 8 Vertical Curtain Columns falling from Top */}
          <div className="absolute inset-0 flex flex-row overflow-hidden">
            {TOP_STRIP_DELAYS.map((delay, index) => (
              <motion.div
                key={`top-strip-${index}`}
                className="flex-1 h-full relative border-r border-[rgba(30,47,87,0.08)] last:border-r-0"
                style={{ backgroundColor: curtainColor }}
                initial={{ y: "-100%", opacity: 0.001 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: index === 1 ? 0.4 : 0.8,
                  delay: delay,
                  ease: EASE_CURVE,
                }}
              />
            ))}
          </div>

          {/* Title Text sitting at bottom horizon edge */}
          <div className="absolute inset-0 flex items-end justify-center pb-2 pointer-events-none z-10">
            <motion.h1
              className="text-center font-normal tracking-tight select-none"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: titleColor,
                fontSize: "clamp(2.75rem, 7.5vw, 6.5rem)",
                lineHeight: 1,
              }}
              initial="hidden"
              animate="visible"
            >
              {title.split("").map((char, i) => (
                <motion.span
                  key={`title-char-${i}`}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0.001, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        damping: 18,
                        stiffness: 160,
                        delay: 0.08 + i * 0.045,
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* ================= BOTTOM SECTION (50%) ================= */}
        <motion.div
          className="relative w-full h-1/2 overflow-hidden"
          style={{ backgroundColor: sectionColor }}
          initial={{ y: "0%" }}
          animate={{
            y: stage === "end" ? "100%" : "0%",
          }}
          transition={{ duration: 0.95, ease: EASE_CURVE }}
        >
          {/* 8 Vertical Curtain Columns rising from Bottom */}
          <div className="absolute inset-0 flex flex-row overflow-hidden">
            {BOTTOM_STRIP_DELAYS.map((delay, index) => (
              <motion.div
                key={`bottom-strip-${index}`}
                className="flex-1 h-full relative border-r border-[rgba(30,47,87,0.08)] last:border-r-0"
                style={{ backgroundColor: curtainColor }}
                initial={{ y: "100%", opacity: 0.001 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: delay,
                  ease: EASE_CURVE,
                }}
              />
            ))}
          </div>

          {/* Subtitle Text sitting at top horizon edge */}
          <div className="absolute inset-0 flex items-start justify-center pt-2 pointer-events-none z-10">
            <motion.p
              className="text-center select-none font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-1.5"
              style={{
                fontFamily: "'Geist', sans-serif",
                color: subtitleColor,
                fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                lineHeight: 1.4,
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="text-[var(--brand-orange)] font-bold text-[14px]"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.12, duration: 0.3 },
                  },
                }}
              >
                +
              </motion.span>
              {subtitle.split("").map((char, i) => (
                <motion.span
                  key={`sub-char-${i}`}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0.001, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        damping: 18,
                        stiffness: 160,
                        delay: 0.15 + i * 0.045,
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
