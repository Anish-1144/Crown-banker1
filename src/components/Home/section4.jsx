import React from "react";

const CryptoCard = () => {
  return (
    <section className="bg-green text-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-4 md:mx-24 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            {/* <h2 className="text-blue-400 text-sm sm:text-base font-semibold uppercase mb-2">
              Crypto Card
            </h2> */}
            <h1 className="text-xl sm:text-2xl text-[#4CAF50] lg:text-5xl font-bold mb-4">
              Investment Packages and Return
            </h1>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Unlock the power of your crypto assets with Crown Bankers Crypto
              Card. Choose our Investment Plan for seamless services for the
              ultimate crypto experience, anytime, anywhere.
            </p>
          </div>
          <div className="lg:w-1/4">
            {/* <img
              src="/"
              // Replace with actual image path
              alt=""
              className="w-full rounded-lg shadow-lg"
            /> */}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Seamless Online Shopping */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center  border-green-500 border-4 shadow-xl rounded-xl"></div>

          {/* Card 2: Global Spending Power */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center  border-green-500 border-4 shadow-xl rounded-xl"></div>

          {/* Card 3: Easy Activation */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center  border-green-500 border-4 shadow-xl rounded-xl"></div>

          {/* Card 4: Enhanced Security */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center border-green-500 border-4 shadow-xl rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCard;
