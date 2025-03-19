import React from "react";

const CryptoCard = () => {
  return (
    <section className="bg-green text-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-24 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-blue-400 text-sm sm:text-base font-semibold uppercase mb-2">
              Crypto Card
            </h2>
            <h1 className="text-4xl sm:text-2xl text-green-500 lg:text-5xl font-bold mb-4">
              Crown Bankers Crypto Card
            </h1>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Unlock the power of your crypto assets with Crown Bankers Crypto
              Card. Choose our Virtual Card for seamless online purchases or the
              Physical Card for $100 spending. Activate a card for the ultimate
              crypto experience, anytime, anywhere.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img
              src="src/assets/images/crypto-card-header.jpg" // Replace with actual image path
              alt="Crown Bankers Crypto Card"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Seamless Online Shopping */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center  border-green-500 border-4 shadow-xl rounded-xl">
            <img
              src="src/assets/images/online-shopping.jpg" // Replace with actual image path
              alt="Seamless Online Shopping"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Seamless Online Shopping
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Instantly create and use your Crown Bankers Virtual Card to access
              hassle-free online purchases. Perfect for everyday use and instant
              crypto-to-fiat purchases.
            </p>
          </div>

          {/* Card 2: Global Spending Power */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center  border-green-500 border-4 shadow-xl rounded-xl">
            <img
              src="src/assets/images/global-spending.jpg" // Replace with actual image path
              alt="Global Spending Power"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Global Spending Power
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Our Physical Card lets you spend effortlessly at over 1 million
              merchants worldwide, both in online and offline. Activate with a
              $100/month spending facility.
            </p>
          </div>

          {/* Card 3: Easy Activation */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center  border-green-500 border-4 shadow-xl rounded-xl">
            <img
              src="src/assets/images/easy-activation.jpg" // Replace with actual image path
              alt="Easy Activation"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Easy Activation
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Get started quickly with our easy activation process. Virtual
              cards are available for $25/month, while physical cards are
              available for $100/month.
            </p>
          </div>

          {/* Card 4: Enhanced Security */}
          <div className="bg-white  p-6 sm:p-8 flex flex-col items-center text-center border-green-500 border-4 shadow-xl rounded-xl">
            <img
              src="src/assets/images/enhanced-security.jpg" // Replace with actual image path
              alt="Enhanced Security"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Enhanced Security
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Enjoy peace of mind with advanced security features on both cards,
              ensuring safe and secure transactions whether you're at home or on
              the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCard;
