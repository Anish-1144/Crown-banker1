import React from "react";

const SolarAgreement = () => {
  return (
    <div className="bg-white text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-green-300">
        Solar Equipment Purchase Agreement
      </h1>

      {/* Content Container */}
      <div className="bg-green-800 text-green-100 max-w-3xl p-8 rounded-lg shadow-lg">
        {/* Section 1: Commitment to Renewable Energy */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          Crown Bankers’ Commitment to Renewable Energy
        </h2>
        <p className="mb-6">
          At Crown Bankers, our mission is to integrate sustainable energy
          solutions with financial innovation. As part of our ongoing efforts to
          expand our solar energy infrastructure, we are proud to share details
          of a recent purchase agreement with Wuxi Suntek New Energy Technology
          Co., Ltd. This acquisition strengthens our goal of advancing solar
          energy adoption globally.
        </p>

        {/* Section 2: Agreement Summary */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          Agreement Summary
        </h2>
        <p className="mb-4">
          This agreement marks the procurement of key equipment required for the
          expansion of our solar power plants. The purchase includes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            50,000 mono solar panels (400W capacity each) to enhance energy
            production capacity.
          </li>
          <li>
            Inverters, DC cables, batteries, and other necessary components for
            efficient energy storage and distribution.
          </li>
          <li>
            Shipment and delivery arrangements to ensure the timely completion
            of the solar plant’s expansion.
          </li>
        </ul>

        {/* Section 3: Impact on Our Solar Projects */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          Impact on Our Solar Projects
        </h2>
        <p className="mb-6">
          The acquired equipment will contribute significantly to Crown Bankers’
          solar energy projects, including those that will power thousands of
          households and industries globally. This procurement is part of our
          long-term plan to foster green energy initiatives and reduce our
          carbon footprint.
        </p>

        {/* Section 4: Supporting a Sustainable Future */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          Supporting a Sustainable Future
        </h2>
        <p className="mb-6">
          By investing in cutting-edge solar technologies, Crown Bankers is
          driving the shift towards renewable energy. This purchase will help us
          build more efficient solar plants, ensuring sustainable energy supply
          for our growing network of partners and clients.
        </p>

        {/* View Button */}
        <p className="mb-4">
          You can view the detailed purchase document below:
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          View
        </button>
      </div>
    </div>
  );
};

export default SolarAgreement;
