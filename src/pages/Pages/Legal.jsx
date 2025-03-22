import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const LegalCompliance = () => {
  // Refs for animation
  const titleRef = useRef(null);
  const complianceCardRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Common animation settings for smoothness
    const defaults = {
      ease: "power3.out",
      duration: 1.2,
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

    // Compliance Card fade-in
    if (complianceCardRef.current) {
      gsap.fromTo(
        complianceCardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          delay: 0.2,
        }
      );
    }

    // Description fade-in
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          delay: 0.4,
        }
      );
    }

    // Buttons fade-in
    if (buttonsRef.current) {
      const buttonElements = buttonsRef.current.children;
      gsap.fromTo(
        buttonElements,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          ...defaults,
          stagger: 0.15,
          delay: 0.6,
        }
      );
    }

    // Map fade-in with scale
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          ...defaults,
          delay: 0.8,
        }
      );
    }

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url("../images/backgrounds/4.jpg")` }}
    >
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl font-extrabold text-center mb-8 md:mb-12 text-white"
          >
            Legal Compliance and Verification
          </h2>

          {/* Compliance Card */}
          <div
            ref={complianceCardRef}
            className="bg-[#e8f5e9] backdrop-blur-md rounded-lg shadow-2xl p-4 sm:p-6 md:p-8"
          >
            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed mb-6 text-center md:mx-8 lg:mx-16"
            >
              Crown Bankers is fully compliant with the legal regulatory
              requirements in both the UK and New Zealand. Our company is
              officially registered in those countries, and our credentials can
              be verified on government-owned websites. We are committed to
              maintaining the highest standards of transparency and integrity in
              all aspects of our operations. Our certificates are issued under
              the name 'CROWNQUEST ASSET MANAGEMENT LIMITED' due to regulatory
              and administrative reasons. This name is used for official
              purposes and represents the same entity as Crown Bankers. Below
              are our official certificates for both the UK and New Zealand.
            </p>

            {/* Buttons with Flags */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://crownbankers.com/assets/img/th-1/uk.png"
                  alt="UK Flag"
                  className="w-16 sm:w-20"
                />
                <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                  <span className="mr-2">🇬🇧</span> View
                </button>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="https://crownbankers.com/assets/img/th-1/new-zealand.png"
                  alt="New Zealand Flag"
                  className="w-16 sm:w-20"
                />
                <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                  <span className="mr-2">🇳🇿</span> View
                </button>
              </div>
            </div>

            {/* SVG Map */}
            <div ref={mapRef} className="w-full max-w-4xl mx-auto px-2 sm:px-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Blank_world_map_%28green_color%29.svg"
                alt="world map"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalCompliance;
