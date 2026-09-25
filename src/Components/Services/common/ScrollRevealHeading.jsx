import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollRevealWord({ word, index, total, scrollYProgress }) {
  const segment = 1 / Math.max(total, 1);
  const opacity = useTransform(
    scrollYProgress,
    [index * segment, (index + 1) * segment],
    [0.15, 1],
  );

  if (word.italic) {
    return (
      <motion.em
        style={{
          opacity,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
          color: 'var(--accent-orange, #e08326)',
        }}
      >
        {word.text}
      </motion.em>
    );
  }

  return <motion.span style={{ opacity }}>{word.text}</motion.span>;
}

export default function ScrollRevealHeading({ words = [], className = '', style = {}, maxW = '900px', justify = 'flex-start' }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 50%'],
  });
  const animatedWords = words.filter((word) => !word.break);
  let animationIndex = 0;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`} style={{ maxWidth: maxW }}>
      <h2
        className="font-extrabold leading-[1.08] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1"
        style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
          fontFamily: "'Inter', sans-serif",
          color: 'var(--brand-navy, #1e2f57)',
          justifyContent: justify,
          ...style,
        }}
      >
        {words.map((word, index) => {
          if (word.break) return <div key={`br-${index}`} className="w-full basis-full h-0" />;

          const wordIndex = animationIndex++;
          return (
            <ScrollRevealWord
              key={index}
              word={word}
              index={wordIndex}
              total={animatedWords.length}
              scrollYProgress={scrollYProgress}
            />
          );
        })}
      </h2>
    </div>
  );
}
