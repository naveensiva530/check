import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable scroll animation hook using GSAP + ScrollTrigger.
 * Returns { sectionRef, refs } where refs is a function to assign element refs by key.
 *
 * @param {Function} animateFn - receives (ctx, refs, sectionEl) and should define GSAP animations
 */
export function useScrollAnimation(animateFn) {
  const sectionRef = useRef(null);
  const refsMap = useRef({});
  const animateRef = useRef(animateFn);

  const ref = (key) => (el) => {
    if (el) refsMap.current[key] = el;
  };

  const refArray = (key) => (el) => {
    if (!refsMap.current[key]) refsMap.current[key] = [];
    if (el && !refsMap.current[key].includes(el)) {
      refsMap.current[key].push(el);
    }
  };

  useEffect(() => {
    animateRef.current = animateFn;
  }, [animateFn]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateRef.current(refsMap.current, sectionRef.current);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return { sectionRef, ref, refArray };
}

/**
 * Fade up animation helper - OPTIMIZED FOR SPEED
 */
export function fadeUp(targets, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: options.y ?? 50, scale: options.scale ?? 1 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: options.duration ?? 0.5,
      ease: options.ease ?? 'power2.out',
      stagger: options.stagger ?? 0,
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger,
        start: options.start ?? 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  );
}

/**
 * Slide from side animation helper - OPTIMIZED FOR SPEED
 */
export function slideFrom(targets, direction = 'left', options = {}) {
  const xFrom = direction === 'left' ? -60 : 60;
  return gsap.fromTo(
    targets,
    { opacity: 0, x: xFrom, scale: options.scale ?? 1 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: options.duration ?? 0.5,
      ease: options.ease ?? 'power2.out',
      stagger: options.stagger ?? 0,
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger,
        start: options.start ?? 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  );
}

/**
 * Scale in animation helper - OPTIMIZED FOR SPEED
 */
export function scaleIn(targets, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, scale: options.from ?? 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: options.duration ?? 0.5,
      ease: options.ease ?? 'back.out(1.2)',
      stagger: options.stagger ?? 0,
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger,
        start: options.start ?? 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  );
}


