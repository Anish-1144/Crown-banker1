import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GreenAnimatedButton = ({
  text,
  type = "button",
  onClick,
  className = "",
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    // GSAP hover animation
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 15px rgba(76, 175, 80, 0.5)",
        borderWidth: "2px",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 0 rgba(76, 175, 80, 0)",
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
      className={`relative px-6 py-3 text-white bg-[#4CAF50] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#3d9140] focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2 border border-[#6abe6e] ${className}`}
    >
      {text}
    </button>
  );
};

export default GreenAnimatedButton;
