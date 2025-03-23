import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedButton = ({ text, type = "button", onClick, className = "" }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    // GSAP hover animation
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
        borderWidth: "2px",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
        borderWidth: "1px",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`relative px-6 py-3 text-white bg-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-blue-400 ${className}`}
    >
      {text}
    </button>
  );
};

export default AnimatedButton;
