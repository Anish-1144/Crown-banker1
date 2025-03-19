import React from "react";
import Footer from "../../components/footer/footer";
import Nevbar from "../../components/header/Nevbar";

// AboutCEO Component
const Team = () => {
  return (
    
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900">
          About Our CEO
        </h2>

        {/* CEO Card */}
        <div className="bg-green-500/10 backdrop-blur-md rounded-lg shadow-2xl flex flex-col md:flex-row items-center p-6 sm:p-8">
          {/* CEO Image */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="src/assets/images/ceo.jpg" // Replace with actual image path
              alt="Adrian Cadiz"
              className="w-full max-w-xs mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* CEO Info */}
          <div className="md:w-2/3 md:pl-8 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
              Adrian Cadiz
            </h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Chief Executive Officer
            </h4>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Adrian Cadiz is the dynamic CEO of Crown Bankers, leading the
              company with a strong vision and strategic expertise. A native of
              the UK, Adrian's leadership will drive our operations over the
              next three years, with the option to renew based on his continued
              commitment. Under his guidance, Crown Bankers is poised to excel
              in the financial and technological landscapes, shaping a bright
              future for the company and its stakeholders.
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
      <div>
      
      </div>
    </section>
  );
};


export default Team;
