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
        className="relative bg-cover bg-center text-white py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: `url('https://picsum.photos/1920/701')`, // Replace with actual image path
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-6xl mx-4 md:mx-24">
          <div className="text-left ">
            <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              Ride the Wave to Financial Freedom with Crown Bankers
            </h1>
            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
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
                src="https://imgs.search.brave.com/TGc9Pk38S-grks2We7TRzp6yKpS8MwAudBpfEtOQgfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLmZv/b2xjZG4uY29tL21l/ZGlhL2R1YnMvaW1h/Z2VzLzItUmVuZXdh/YmxlX2VuZXJneV9z/b3VyY2VzLndpZHRo/LTYwMC5qcGc" // Replace with actual image path
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
                  src="https://imgs.search.brave.com/PyoJckDKSp1mzkN6DT-ZWDQgUlqney7hpsMaNYN1kvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIy/LWdtYy1odW1tZXIt/ZXYtZWRpdGlvbi0x/LXBpY2t1cC0xMDEt/MTY1Nzg5MTY0NS5q/cGc_Y3JvcD0wLjY0/MXh3OjAuNTQxeGg7/MC4yMjh4dywwLjIy/N3hoJnJlc2l6ZT05/ODA6Kg" // Replace with actual image path
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
                src="https://imgs.search.brave.com/PyoJckDKSp1mzkN6DT-ZWDQgUlqney7hpsMaNYN1kvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIy/LWdtYy1odW1tZXIt/ZXYtZWRpdGlvbi0x/LXBpY2t1cC0xMDEt/MTY1Nzg5MTY0NS5q/cGc_Y3JvcD0wLjY0/MXh3OjAuNTQxeGg7/MC4yMjh4dywwLjIy/N3hoJnJlc2l6ZT05/ODA6Kg" // Replace with actual image path
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

      {/* Crown Bankers Extra Income Opportunities Section */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: `url('./images/backgrounds/4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-8 pb-12 md:pb-16 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
              Extra Income Opportunities at Crown Bankers
            </h1>
          </div>

          {/* Referral Bonus Section */}
          <section className="max-w-7xl mx-auto py-8 relative text-white">
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
                <div className="relative z-10 p-2 sm:p-4">
                  <img
                    src="https://crownbankers.com/assets/img/th-1/refrral.png"
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
          <div className="flex justify-center my-8 sm:my-12">
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
          </div>

          {/* Binary Bonus Section */}
          <section className="max-w-7xl mx-auto px-0 py-8 sm:py-12 bg-white/90 backdrop-blur-md text-gray-800 rounded-xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4 items-center px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center pr-0 md:pr-6 lg:pr-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Binary bonus
                </h2>
                <div className="space-y-3 sm:space-y-5 text-gray-700 text-base sm:text-lg md:text-xl">
                  <p>
                    Binary Bonus at Crown bankers: The Binary Bonus at our
                    company a rewarding incentive designed for members who bring
                    new investors into our dynamic investment ecosystem. This
                    bonus operates on a binary structure, where each member
                    possesses a left and a right leg.
                  </p>
                  <p>
                    Let's say an investor on the left side contributes $15,000,
                    and another on the right side invests $20,000. The binary
                    bonus is calculated based on the lesser leg volume, which is
                    $15,000 in this case. Assuming a 10% binary bonus rate, the
                    bonus earned would be $1,500.
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center transform transition-all duration-300 hover:scale-[1.02]">
                {/* Decorative elements - only visible on larger screens */}
                <div className="absolute top-0 right-0 hidden md:block">
                  <div className="w-6 h-6 text-gray-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L4 4L6 20L12 14L20 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Main illustration */}
                <div className="relative z-10 bg-gray-100/50 rounded-lg p-2 sm:p-4">
                  <img
                    src="https://crownbankers.com/assets/img/th-1/refrral.png"
                    width={450}
                    height={450}
                    alt="Binary bonus illustration"
                    className="relative z-10 object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
