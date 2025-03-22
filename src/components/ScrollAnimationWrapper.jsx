"use client";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ScrollAnimationWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const scrollY = useRef(0); // Current scroll position
  const targetY = useRef(0); // Target scroll position
  const isScrolling = useRef(false);
  const rafId = useRef(null); // Store requestAnimationFrame ID

  useEffect(() => {
    // Set ScrollTrigger defaults
    ScrollTrigger.defaults({
      markers: false, // Set to true for debugging
    });

    // Smooth scroll animation loop with optimized lerp
    const updateScroll = () => {
      scrollY.current = gsap.utils.interpolate(
        scrollY.current,
        targetY.current,
        0.1 // Reduced from 0.9 to 0.1 for slower, smoother scrolling
      );

      window.scrollTo({
        top: scrollY.current,
        behavior: "auto",
      });

      // Continue loop if difference is significant
      if (Math.abs(scrollY.current - targetY.current) > 1) {
        rafId.current = requestAnimationFrame(updateScroll);
      } else {
        isScrolling.current = false;
        rafId.current = null;
      }
    };

    // Handle scroll events
    const handleScroll = () => {
      targetY.current = window.scrollY;
      if (!isScrolling.current) {
        isScrolling.current = true;
        rafId.current = requestAnimationFrame(updateScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);
    };
    window.addEventListener("resize", handleResize);

    // Smooth scroll to top on route change
    const refreshScrollTrigger = () => {
      gsap.delayedCall(0.2, () => {
        targetY.current = 0;
        gsap.to(scrollY, {
          current: 0,
          duration: 2.0, // Increased from 1.2 to 2.0 for slower scroll-to-top
          ease: "power3.out",
          onUpdate: () => {
            window.scrollTo({
              top: scrollY.current,
              behavior: "auto",
            });
          },
          onComplete: () => {
            ScrollTrigger.refresh();
            isScrolling.current = false;
          },
        });
      });
    };
    refreshScrollTrigger();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [location.pathname]); // Trigger effect on route change

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollAnimationWrapper;
