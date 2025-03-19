import Footer from "../../components/footer/footer";
import Nevbar from "../../components/header/Nevbar";
import React from 'react';

const LegalCompliance = () => {
  return (
    <div className="bg-green-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-green-300">Legal Compliance and Verification</h1>

      {/* Description */}
      <p className="text-lg text-center max-w-2xl mb-8 text-green-100">
        Crown Bankers is fully compliant with the legal regulatory requirements in both the UK and New Zealand. Our
        company is officially registered in those countries, and our credentials can be verified on government-owned
        websites. We are committed to maintaining the highest standards of transparency and integrity in all aspects of
        our operations. Our certificates are issued under the name ‘CROWNQUEST ASSET MANAGEMENT LIMITED’ due to
        regulatory and administrative reasons. This name is used for official purposes and represents the same entity as
        Crown Bankers. Below are our official certificates for both the UK and New Zealand.
      </p>

      {/* Buttons with Flags */}
      <div className="flex space-x-4 mb-8">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">🇬🇧</span> View
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">🇳🇿</span> View
        </button>
      </div>

      {/* SVG Map */}
      <div className="w-full max-w-4xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 500"
          className="w-full h-auto fill-green-700 stroke-green-500 stroke-1"
        >
          {/* Simplified World Map Placeholder */}
          <path
            d="M100,200 Q150,100 200,200 T300,200 Q350,100 400,200 T500,200 Q550,100 600,200 T700,200 Q750,100 800,200 T900,200 Q950,300 900,400 T800,400 Q750,300 700,400 T600,400 Q550,300 500,400 T400,400 Q350,300 300,400 T200,400 Q150,300 100,400 T0,400 Q50,300 100,200 Z"
            fill="currentFill"
            stroke="currentStroke"
          />
          {/* Pin for UK */}
          <circle cx="300" cy="150" r="5" fill="#ffffff" />
          {/* Pin for New Zealand */}
          <circle cx="850" cy="400" r="5" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};

export default LegalCompliance;
