import { useState, useEffect } from "react";

const BankingInfoSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  // Generate a random image from picsum.photos on mount
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000); // Random ID for unique image
    setBackgroundImage(`https://picsum.photos/1920/1080?random=${randomId}`);
  }, []);

  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Content Card */}
      <div className="relative z-10 max-w-md p-6 bg-white rounded-lg shadow-lg mx-6 md:mx-12">
        <p className="text-sm text-green-600 font-semibold mb-2">
          How It Works, Step One
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          We Plan & Deliver, <br /> Effortlessly.
        </h2>
        <p className="text-gray-700 text-base mb-6">
          At Crown Bankers, we collaborate with you to design and implement
          financial solutions that align perfectly with your goals. With access
          to top-tier banking products from trusted institutions, we ensure you
          get the best options without compromise. No stress. No hidden costs.
          Seamless banking, tailored for you.
        </p>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded">
          <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">→</span>
          </span>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default BankingInfoSection;
