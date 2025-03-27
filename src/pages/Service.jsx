import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nevbar from "../components/header/Nevbar";
import Footer from "../components/footer/Footer";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef(null);
  const solarRef = useRef(null);
  const evRef = useRef(null);
  const forbesRef = useRef(null);
  const binaryBonusRef = useRef(null); // Add ref for Binary Bonus section
  const extraIncomeRef = useRef(null);
  const connectRef = useRef(null);
  // const cryptoRef = useRef(null); // Uncomment if you want to include the crypto section

  useEffect(() => {
    // Common animation settings for smoothness
    const defaults = {
      ease: "power3.out",
      duration: 1.2,
    };

    // Hero fade-in on load (no scroll trigger)
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Solar Section staggered fade-in for child elements
    if (solarRef.current) {
      gsap.fromTo(
        solarRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          stagger: 0.25,
          scrollTrigger: {
            trigger: solarRef.current,
            start: "top 85%",
            end: "bottom 30%",
            scrub: 0.5,
          },
        }
      );
    }

    // Electric Vehicles Section fade-in
    if (evRef.current) {
      gsap.fromTo(
        evRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          scrollTrigger: {
            trigger: evRef.current,
            start: "top 85%",
            end: "bottom 30%",
            scrub: 0.5,
          },
        }
      );
    }

    // Forbes Section staggered fade-in for child elements
    if (forbesRef.current) {
      gsap.fromTo(
        forbesRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ...defaults,
          stagger: 0.25,
          scrollTrigger: {
            trigger: forbesRef.current,
            start: "top 85%",
            end: "bottom 30%",
            scrub: 0.5,
          },
        }
      );
    }

    // Binary Bonus Section Animation
    if (binaryBonusRef.current) {
      const title = binaryBonusRef.current.querySelector(".binary-title");
      const paragraphs =
        binaryBonusRef.current.querySelectorAll(".binary-text");
      const image = binaryBonusRef.current.querySelector(".binary-image");

      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: binaryBonusRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: binaryBonusRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image,
        {
          opacity: 0,
          scale: 0.9,
          rotate: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: binaryBonusRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Extra Income Opportunities Section Animation
    if (extraIncomeRef.current) {
      const header = extraIncomeRef.current.querySelector(".header-content");
      const referralSection =
        extraIncomeRef.current.querySelector(".referral-section");
      const binarySection =
        extraIncomeRef.current.querySelector(".binary-section");

      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        [referralSection, binarySection],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: referralSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Connect Section Animation
    if (connectRef.current) {
      const title = connectRef.current.querySelector("h2");
      const description = connectRef.current.querySelector("p");
      const contactItems = connectRef.current.querySelectorAll(".contact-item");
      const image = connectRef.current.querySelector(".image-container");

      gsap.fromTo(
        [title, description],
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: connectRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contactItems,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: connectRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: connectRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Uncomment and add animation for Crypto Section if needed
    // if (cryptoRef.current) {
    //   gsap.fromTo(
    //     cryptoRef.current,
    //     { opacity: 0, y: 60 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       ...defaults,
    //       scrollTrigger: {
    //         trigger: cryptoRef.current,
    //         start: "top 85%",
    //         end: "bottom 30%",
    //         scrub: 0.5,
    //       },
    //     }
    //   );
    // }

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <Nevbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-cover bg-center text-white py-16 sm:py-20 lg:py-24 h-full inset-0 bg-green/50"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dygdftjr8/image/upload/v1742815719/electric-vehicle-charging-night_jfiyhy.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bethany mb-6 text-white">
              Ride the Wave to Financial Freedom with Crown Bankers
            </h1>
            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mx-auto">
              At Crown Bankers, we're dedicated to helping you capitalize on the
              most exciting investment opportunities in today's market. Our
              platform simplifies investing in high-growth sectors, ensuring
              your portfolio benefits from cutting-edge advancements. Explore
              the sectors we focus on.
            </p>
          </div>
        </div>
      </section>

      {/* Solar Sector Section */}
      <section ref={solarRef} className="py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-[#4CAF50]">
          Why Invest in the Best with Crown Bankers
        </h2>
        <div className="max-w-7xl mx-auto md:mx-24">
          <div className="flex flex-col lg:flex-row lg:items-left lg:gap-12 ">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-left mb-4">
                    <i className="fas fa-trending-up text-2xl text-[#4CAF50] mr-3"></i>
                    <h3 className="text-xl font-bold text-gray-800">
                      High Growth Potential
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    The global solar energy market is projected to reach $1.3
                    trillion by 2027, driven by growing environmental concerns
                    and the affordability of solar installations.
                  </p>
                </div>
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-[#4CAF50] mr-3"></i>
                    <h3 className="text-xl font-bold text-gray-800">
                      Sustainable Future
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Solar energy is a clean, renewable resource with immense
                    potential to power homes, businesses, and communities,
                    contributing to a more sustainable future for generations.
                  </p>
                </div>
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-[#4CAF50] mr-3"></i>
                    <h3 className="text-xl font-bold text-gray-800">
                      Technological Advancements
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We invest in companies at the forefront of solar technology,
                    including high-efficiency solar panels and innovative
                    solutions for installation, operation, and maintenance.
                  </p>
                </div>
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-[#4CAF50] mr-3"></i>
                    <h3 className="text-xl font-bold text-gray-800">
                      Expert Guidance
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Crown Bankers' dedicated professionals meticulously research
                    and diversify portfolios in promising solar companies,
                    ensuring informed and profitable investments without needing
                    to be a solar expert.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742822995/2-Renewable_energy_sources.width-600_pufyyq.webp" // Replace with actual image path
                alt="Solar Sector"
                className="w-full rounded-lg shadow-lg border border-[#4CAF50]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Electric Vehicles Section */}
      <section
        ref={evRef}
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundImage: `url("../images/backgrounds/4.jpg")` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mx-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-white">
            Charge Up Your Portfolio: The Electrifying EV Revolution
          </h2>
          <div className="bg-white backdrop-blur-md rounded-lg shadow-2xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742815841/electric-car-charging-city-park-autumn-sunset_ogtide.png" // Replace with actual image path
                  alt="Electric Vehicles"
                  className="w-full rounded-lg shadow-lg border border-[#4CAF50]/30"
                />
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Why Electric Vehicles?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-trending-up text-2xl text-[#4CAF50] mr-3"></i>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Rapid Adoption
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      The global EV market is expected to hit $1.8 trillion by
                      2030.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-cog text-2xl text-[#4CAF50] mr-3"></i>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Clean Future
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      EVs are leading the shift towards sustainable
                      transportation.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Our Approach
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-trending-up text-2xl text-[#4CAF50] mr-3"></i>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Comprehensive Investments
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      From Tesla and General Motors to innovative battery tech
                      companies.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-cog text-2xl text-[#4CAF50] mr-3"></i>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Infrastructure Focus
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Investing in charging solutions and ecosystem providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forbes Top 500 Section */}
      <section ref={forbesRef} className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mx-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-[#4CAF50]">
            Invest in the Best with Crown Bankers
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Forbes Top 500 Companies
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-8">
                Crown Bankers strategically invests in the Forbes Global 500,
                including industry giants like Apple, Amazon, and Microsoft.
                This approach ensures
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-[#4CAF50] mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Stability and Growth
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Leveraging established titans to mitigate risk and secure
                    steady returns.
                  </p>
                </div>
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-[#4CAF50] mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Diverse Market Exposure
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Capitalizing on diverse industry sectors for balanced
                    investment opportunities.
                  </p>
                </div>
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-[#4CAF50] mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Innovation Integration
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Investing in companies leading technological advancements
                    for long-term growth.
                  </p>
                </div>
                <div className="bg-[#4CAF50]/5 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-[#4CAF50] mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Global Economic Impact
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Participating in a significant portion of the global
                    economy's revenue generation.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742812051/85f1175cfb48fa3a74dfea6e01c2e404_ko29xs.jpg" // Replace with actual image path
                alt="Forbes Top 500"
                className="w-full rounded-lg shadow-lg border border-[#4CAF50]/30"
              />
              <div className="text-center mt-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  Join Crown Bankers Today!
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  Benefit from our strategic approach to Forbes 500 investments
                  and unlock your investment potential.
                </p>
                <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg hover:bg-[#3d8b40] transition-all font-semibold shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Income Opportunities Section */}
      <section
        ref={extraIncomeRef}
        className="py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: `url('./images/backgrounds/4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="header-content pt-8 pb-12 md:pb-16 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
              Extra Income Opportunities at Crown Bankers
            </h1>
          </div>

          {/* Referral Bonus Section */}
          <section className="referral-section max-w-7xl mx-auto py-8 relative text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4 items-center">
              <div className="bg-white/5 backdrop-blur-sm relative order-2 md:order-1 flex justify-center rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                {/* Decorative elements - only visible on larger screens */}
                <div className="absolute -top-12 left-1/4 hidden md:block">
                  <div className="w-6 h-6 text-[#4CAF50]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-1/4 left-1/4 -translate-x-full hidden md:block">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="absolute -bottom-8 right-1/4 hidden md:block">
                  <div className="w-8 h-8 text-orange-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Main illustration */}
                <div className="relative z-10 p-2 sm:p-4 bg-white">
                  <img
                    src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742803595/card4_qpbykl.png"
                    width={400}
                    height={450}
                    alt="Referral bonus illustration"
                    className="relative z-10 object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2 flex flex-col justify-center pl-0 md:pl-6 lg:pl-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Referral bonus
                </h2>
                <div className="space-y-3 sm:space-y-5 text-gray-200 text-base sm:text-lg md:text-xl">
                  <p>
                    At Crown Bankers, we value the power of community and shared
                    success. Our Referral Bonus program is designed to reward
                    your efforts in bringing new investors into our network.
                  </p>
                  <p>
                    By referring others, you not only help them unlock financial
                    growth but also earn a bonus of 7% to 9% as a thank-you for
                    growing our investment family. Together, we can achieve
                    more!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Decorative arrow */}
          {/* <div className="flex justify-center my-8 sm:my-12">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-gray-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div> */}

          {/* Binary Bonus Section */}
          <section
            ref={binaryBonusRef}
            className="binary-section max-w-7xl mx-auto py-12 relative bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center pr-0 md:pr-6 lg:pr-8">
                <h2 className="binary-title text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900 font-bold">
                  Binary bonus
                </h2>
                <div className="space-y-6">
                  <p className="binary-text text-gray-700 text-lg leading-relaxed">
                    Binary Bonus at Crown bankers: The Binary Bonus at Crown
                    Bankers is a rewarding incentive designed for members who
                    introduce new investors to our investment ecosystem. This
                    bonus follows a binary structure, where each member has two
                    positions—one on the left and one on the right. Earnings are
                    calculated based on the lesser leg's total investment. .
                  </p>
                  {/* <li className="relative pl-5"> */}
                  {/* <span className="absolute left-0 text-green-500"></span> */}
                  {/* For example, in the image: */}
                  <ul className="list-none pl-5 mt-1 ">
                    <li className="relative pl-5 text-black">
                      <span className="absolute left-0">•</span>
                      The left business volume is $2,800.
                    </li>
                    <li className="relative pl-5 text-black">
                      <span className="absolute left-0 text-green-500">•</span>
                      The right business volume is $4,650.
                    </li>
                    <li className="relative pl-5 text-black">
                      <span className="absolute left-0 text-green-500">•</span>
                      The binary bonus is calculated based on the lesser leg
                      volume, which is $2,800.
                    </li>
                    <li className="relative pl-5 text-black">
                      <span className="absolute left-0 text-green-500">•</span>
                      Assuming a 10% binary bonus rate, the bonus earned would
                      be $280.
                    </li>
                    <li className="relative pl-5 text-black ">
                      <span className="absolute left-0 text-green-500">•</span>
                      This structure allows members to maximize their earnings
                      by strategically growing both sides of their network.
                    </li>
                  </ul>
                  {/* </li> */}
                </div>
              </div>

              <div className="binary-image relative flex justify-center transform transition-all duration-500">
                <div className="relative z-10 bg-gradient-to-br from-white/80 to-gray-100/90 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                  <img
                    src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742973175/2_14_tim2ok.png"
                    width={450}
                    height={450}
                    alt="Binary bonus illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 right-10 w-20 h-20 bg-[#4CAF50]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 left-10 w-32 h-32 bg-[#4CAF50]/5 rounded-full blur-xl"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mx-24">
          <img
            src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742810209/cards_hj8jca.png"
            alt="Crown Bankers"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Connect Section */}
      <section
        ref={connectRef}
        className="relative py-20 "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dygdftjr8/image/upload/v1742807676/4_tbowdb.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mx-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="image-container relative">
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 bg-white/10 backdrop-blur-sm">
                <img
                  src="https://i.pinimg.com/736x/1d/d4/6b/1dd46bd74455060421afa16922e1e7a9.jpg"
                  alt="Modern office space"
                  className="w-full h-[400px] object-cover opacity-90"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8 text-[#4CAF50] bg-green-50 border-xl shadow-xl rounded-2xl p-8">
              <h2 className="text-4xl md:text-6xl font-bold  leading-tight font-bethany">
                We always want to connect our clients
              </h2>

              <p className="text-[#4CAF50] text-lg">
                AI accessible and beneficial for organizations, and we look
                forward to partnering with businesses to achieve their AI goals.
              </p>

              <div className="space-y-6">
                {/* Website */}
                <div className="contact-item flex items-center space-x-4 text-[#4CAF50] group">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#4CAF50] text-sm">Website</p>
                    <a
                      href="https://crownbankers.com/"
                      className="text-[#4CAF50] hover:text-green-200 transition-colors duration-300"
                    >
                      https://crownbankers.com/
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-item flex items-center space-x-4 text-[#4CAF50] group">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#4CAF50] text-sm">Email</p>
                    <a
                      href="mailto:support@crownbankers.com"
                      className="text-[#4CAF50] hover:text-green-200 transition-colors duration-300"
                    >
                      support@crownbankers.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item flex items-center space-x-4 text-[#4CAF50] group">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#4CAF50] text-sm">Phone</p>
                    <a
                      href="tel:+44 7452237405"
                      className="text-[#4CAF50] hover:text-green-200 transition-colors duration-300"
                    >
                      +44 7452237405
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
