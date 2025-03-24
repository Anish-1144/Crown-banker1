import React, { useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Nevbar from "../../components/header/Nevbar";
// import Contact from "../../components/contact/Contact"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// AboutCEO Component
const Team = () => {
  // Refs for animation
  const titleRef = useRef(null);
  const ceoCardRef = useRef(null);
  const ceoImageRef = useRef(null);
  const ceoInfoRef = useRef(null);

  useEffect(() => {
    // Common animation settings for smoothness
    const defaults = {
      ease: "power3.out", // Smoother easing
      duration: 1.2, // Slightly longer duration for fluidity
    };

    // Title fade-in
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // CEO Card fade-in
    if (ceoCardRef.current) {
      gsap.fromTo(
        ceoCardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          delay: 0.2,
        }
      );
    }

    // CEO Image fade-in with slight scale
    if (ceoImageRef.current) {
      gsap.fromTo(
        ceoImageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          ...defaults,
          delay: 0.4,
        }
      );
    }

    // CEO Info staggered fade-in
    if (ceoInfoRef.current) {
      const infoElements = ceoInfoRef.current.children;
      gsap.fromTo(
        infoElements,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          ...defaults,
          stagger: 0.2,
          delay: 0.6,
        }
      );
    }

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ backgroundImage: `url("../images/backgrounds/4.jpg")` }}>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2
            ref={titleRef}
            className="text-4xl sm:text-4xl font-extrabold text-center mb-12 text-white"
          >
            About Our CEO
          </h2>

          {/* CEO Card */}
          <div
            ref={ceoCardRef}
            className="bg-[#e8f5e9] backdrop-blur-md rounded-lg shadow-2xl flex flex-col md:flex-row items-center p-6 sm:p-8"
          >
            {/* CEO Image */}
            <div ref={ceoImageRef} className="md:w-1/3 mb-6 md:mb-0">
              <img
                src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742820054/2_nzcsii.jpg" // Replace with actual image path
                alt="Adrian Cadiz"
                className="w-full max-w-xs mx-auto rounded-lg shadow-md"
              />
            </div>

            {/* CEO Info */}
            <div
              ref={ceoInfoRef}
              className="md:w-2/3 md:pl-8 text-center md:text-left"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-black-50 mb-4">
                Adrian Cadiz
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Chief Executive Officer
              </h4>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Adrian Cadiz is the dynamic CEO of Crown Bankers, leading the
                company with a strong vision and strategic expertise. A native
                of the UK, Adrian's leadership will drive our operations over
                the next three years, with the option to renew based on his
                continued commitment. Under his guidance, Crown Bankers is
                poised to excel in the financial and technological landscapes,
                shaping a bright future for the company and its stakeholders.
              </p>
              {/* Social Media Links */}
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="#"
                  className="text-green-600 hover:text-green-500 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      {/* <Contact /> */}
    </div>
  );
};

export default Team;
