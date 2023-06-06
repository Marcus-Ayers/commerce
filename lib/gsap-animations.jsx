import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  });
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current && inView && !hasAnimated) {
      gsap.from(animationRef.current, {
        autoAlpha: 0,
        duration: 1,
        rotation: 10,
        x: -10,
        transformOrigin: 'left bottom', // Add this line
        y: 10,
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out',
        stagger: 0.3
      });
      setHasAnimated((prevHasAnimated) => {
        if (!prevHasAnimated) {
          return true;
        }
        return prevHasAnimated;
      });
    } else if (animationRef.current && !inView) {
      gsap.to(animationRef.current, {
        opacity: 1,
        duration: 1
      });
    }
  }, [inView, hasAnimated]);

  const setRefs = (el) => {
    animationRef.current = el;
    ref(el);
  };

  return { ref: setRefs, inView, hasAnimated };
};
export const useScrollAnimationTwo = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current && inView && !hasAnimated) {
      gsap.from(animationRef.current, {
        autoAlpha: 0,
        duration: 1.5,
        transformOrigin: 'bottom',
        y: 100,
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out',
        stagger: 0.3
      });
      setHasAnimated((prevHasAnimated) => {
        if (!prevHasAnimated) {
          return true;
        }
        return prevHasAnimated;
      });
    } else if (animationRef.current && !inView) {
      gsap.to(animationRef.current, {
        opacity: 1,
        duration: 1
      });
    }
  }, [inView, hasAnimated]);

  const setRefs = (el) => {
    animationRef.current = el;
    ref(el);
  };

  return { ref: setRefs, inView, hasAnimated };
};
