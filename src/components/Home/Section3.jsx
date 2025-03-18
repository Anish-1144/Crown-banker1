import { ArrowRight, Globe, Handshake } from "lucide-react";

const BankingHeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch min-h-[600px] ">
      {/* Left Side - Background Image */}
      <div
        className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto bg-cover bg-center blur-sm md:blur-none"
        style={{ backgroundImage: "url('https://picsum.photos/1920/700')" }}
      ></div>

      {/* Right Side - Green Section */}
      <div className="w-full md:w-1/2 bg-green-600 text-white p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        {/* Header */}
        <p className="text-sm flex items-center gap-2">
          <span className="inline-block bg-white text-blue-600 px-2 py-1 rounded-sm text-xs">
            🔍
          </span>
          <span>Explore More,</span>
          <a href="#" className="font-bold underline">
            Find Your Solution →
          </a>
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-tight">
          Take Charge Of Your Financial Future With <br /> Smart & Secure
          Banking!
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          The world of banking and investments is evolving fast, and so are your
          financial needs. Whether you're looking to grow your savings, invest
          wisely, or manage your wealth with confidence, we're here to help.
          With the right financial tools and expert guidance, you can take
          control of your future—without the stress.
        </p>

        {/* Two Columns */}
        <div className="mt-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <Handshake className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-2" />
            <h3 className="font-semibold text-base sm:text-lg">
              Grow Your Wealth, Securely & Smartly
            </h3>
            <p className="text-white text-sm mt-2">
              Your money should work for you! From secure banking to high-yield
              investments, we help you build a solid financial future with
              confidence.
            </p>
          </div>

          <div className="flex-1">
            <Globe className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-2" />
            <h3 className="font-semibold text-base sm:text-lg">
              We’ve Got Your Back—Always!
            </h3>
            <p className="text-white text-sm mt-2">
              Great banking isn’t just about numbers. It’s about trust, support,
              and making sure you always feel valued. Our team is here to guide
              you every step of the way.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 flex items-center gap-2 bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          Request A Quote
        </button>
      </div>
    </div>
  );
};

export default BankingHeroSection;
