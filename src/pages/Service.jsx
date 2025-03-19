import React from "react";
import Nevbar from "../components/header/Nevbar";
import Footer from "../components/footer/Footer";

const Services = () => {
  return (
    <div className="bg-gray-50">
      <Nevbar />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: `url('https://picsum.photos/1920/701')`, // Replace with actual image path
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-green-950/70"></div>
        <div className="relative max-w-6xl  ">
          <div className="text-left px-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-green-100">
              Ride the Wave to Financial Freedom with Crown Bankers
            </h1>
            <p className="text-green-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-900">
            Why Invest in the Solar Sector with Crown Bankers
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-600 mr-3"></i>
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
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-600 mr-3"></i>
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
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-600 mr-3"></i>
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
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-600 mr-3"></i>
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
                src="src/assets/images/content-image-2.jpg" // Replace with actual image path
                alt="Solar Sector"
                className="w-full rounded-lg shadow-lg border border-green-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Electric Vehicles Section */}
      <section className="bg-green-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-green-100">
            Charge Up Your Portfolio: The Electrifying EV Revolution
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
              <img
                src="src/assets/images/content-image-2.jpg" // Replace with actual image path
                alt="Electric Vehicles"
                className="w-full rounded-lg shadow-lg border border-green-500/30"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-300 mb-6">
                Why Electric Vehicles?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Rapid Adoption
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    The global EV market is expected to hit $1.8 trillion by
                    2030.
                  </p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Clean Future
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    EVs are leading the shift towards sustainable
                    transportation.
                  </p>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-green-300 mb-6">
                Our Approach
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Comprehensive Investments
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    From Tesla and General Motors to innovative battery tech
                    companies.
                  </p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Infrastructure Focus
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    Investing in charging solutions and ecosystem providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forbes Top 500 Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-900">
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
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Stability and Growth
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Leveraging established titans to mitigate risk and secure
                    steady returns.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Diverse Market Exposure
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Capitalizing on diverse industry sectors for balanced
                    investment opportunities.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Innovation Integration
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Investing in companies leading technological advancements
                    for long-term growth.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-600 mr-3"></i>
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
              <div className="text-center mt-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  Join Crown Bankers Today!
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  Benefit from our strategic approach to Forbes 500 investments
                  and unlock your investment potential.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="src/assets/images/content-image-2.jpg" // Replace with actual image path
                alt="Forbes Top 500"
                className="w-full rounded-lg shadow-lg border border-green-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cryptocurrency Section */}
      <section className="bg-green-950 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-green-100">
            Embracing Crypto: Crown Bankers' Strategic Approach
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
              <img
                src="src/assets/images/content-image-2.jpg" // Replace with actual image path
                alt="Cryptocurrency"
                className="w-full rounded-lg shadow-lg border border-green-500/30"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <p className="text-green-200 text-base sm:text-lg mb-8">
                At Crown Bankers, we integrate cryptocurrency investments
                alongside traditional ones. With meticulous research, we
                identify promising crypto assets to diversify portfolios and
                achieve high returns. From Bitcoin to DeFi projects, we navigate
                this frontier, aiming to harness blockchain's disruptive
                potential while offering innovative investment opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Comprehensive Research
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    We conduct thorough research to identify promising crypto
                    assets, ensuring informed investment decisions.
                  </p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Diversification
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    Crypto investments are integrated with traditional
                    portfolios to mitigate risk and maximize returns.
                  </p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trending-up text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      Innovation and Disruption
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    Investing in blockchain technology and DeFi projects to
                    capitalize on their transformative potential.
                  </p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-cog text-2xl text-green-400 mr-3"></i>
                    <h4 className="text-lg font-semibold text-green-200">
                      High Returns
                    </h4>
                  </div>
                  <p className="text-green-400 text-sm sm:text-base">
                    Aim to achieve high returns through strategic allocation and
                    proactive management in the crypto space.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-300 mb-4">
                  Explore Crypto Opportunities with Crown Bankers!
                </h3>
                <p className="text-green-200 text-base sm:text-lg mb-6">
                  Join us to leverage the potential of cryptocurrency
                  investments in your portfolio.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Income Opportunities Section */}
     
      <Footer />
    </div>
  );
};

export default Services;
