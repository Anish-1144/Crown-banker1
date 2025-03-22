import { useEffect, useState } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook for using Lenis smooth scrolling in any component
 * 
 * @param {Object} options - Lenis initialization options
 * @param {number} options.duration - Animation duration in seconds (default: 1.2)
 * @param {Function} options.easing - Easing function for the animation
 * @param {string} options.orientation - Scroll orientation ('vertical' or 'horizontal')
 * @param {string} options.gestureOrientation - Gesture orientation ('vertical' or 'horizontal')
 * @param {boolean} options.smoothWheel - Enable smooth scrolling for mouse wheel
 * @param {boolean} options.smoothTouch - Enable smooth scrolling for touch devices
 * @param {number} options.touchMultiplier - Multiplier for touch-based scrolling
 * @param {boolean} options.infinite - Enable infinite scrolling
 * @returns {Object} The Lenis instance
 */
export function useLenis(options = {}) {
  const [lenis, setLenis] = useState(null);
  
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      ...options,
    });
    
    setLenis(lenisInstance);
    
    // Set up the RAF loop for Lenis
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Check if GSAP's ScrollTrigger is available and integrate with it
    if (typeof window !== 'undefined') {
      const ScrollTrigger = window.ScrollTrigger || 
                          (window.gsap && window.gsap.ScrollTrigger);
      
      if (ScrollTrigger) {
        // Connect Lenis scroll with ScrollTrigger
        lenisInstance.on('scroll', ScrollTrigger.update);
      }
    }
    
    return () => {
      lenisInstance.destroy();
    };
  }, [
    options.duration,
    options.easing,
    options.orientation,
    options.gestureOrientation,
    options.smoothWheel,
    options.smoothTouch,
    options.touchMultiplier,
    options.infinite,
  ]);
  
  return lenis;
}

export default useLenis; 