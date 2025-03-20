import React from "react";
import Footer from "../../components/footer/footer";
import Nevbar from "../../components/header/Nevbar";

const LegalCompliance = () => {
  return (
    <div style={{ backgroundImage: `url("../images/backgrounds/4.jpg")` }}>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Legal Compliance and Verification
          </h2>

          {/* Compliance Card */}
          <div className="bg-[#e8f5e9] backdrop-blur-md rounded-lg shadow-2xl p-6 sm:p-8">
            {/* Description */}
            <p className="text-gray-700 text-base md:mx-16 sm:text-xl leading-relaxed mb-6 text-center">
              Crown Bankers is fully compliant with the legal regulatory
              requirements in both the UK and New Zealand. Our company is
              officially registered in those countries, and our credentials can
              be verified on government-owned websites. We are committed to
              maintaining the highest standards of transparency and integrity in
              all aspects of our operations. Our certificates are issued under
              the name ‘CROWNQUEST ASSET MANAGEMENT LIMITED’ due to regulatory
              and administrative reasons. This name is used for official
              purposes and represents the same entity as Crown Bankers. Below
              are our official certificates for both the UK and New Zealand.
            </p>

            {/* Buttons with Flags */}
            <div className="flex justify-center space-x-6 mb-8 md:mx-2 ">
              <img
                src="https://crownbankers.com/assets/img/th-1/uk.png"
                alt=""
                
              />
              <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                <span className="mr-2">🇬🇧</span> View
              </button>
              <img
                src="https://crownbankers.com/assets/img/th-1/new-zealand.png"
                alt=""
                height={5}
                width={80}
              />
              <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                <span className="mr-2">🇳🇿</span> View
              </button>
            </div>

            {/* SVG Map */}
            <div className="w-full max-w-4xl mx-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Blank_world_map_%28green_color%29.svg"
                alt="world map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalCompliance;
