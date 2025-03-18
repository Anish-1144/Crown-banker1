import React, { useState, useEffect } from "react";

const Contact = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  // Generate a random image from picsum.photos on mount
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000); // Random ID for unique image
    setBackgroundImage(`https://picsum.photos/1920/1080?random=${randomId}`);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for readability with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-0 flex flex-col md:flex-row w-full max-w-6xl p-4 sm:p-6 lg:p-8 mx-auto">
        {/* Left Section */}
        <div className="md:w-2/5 p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl mb-6 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-green-400 drop-shadow-md">
            Get in Touch with Us
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200 leading-relaxed">
            We’re here to assist you! Share your needs, and we’ll connect you
            with an expert within 24 hours.
          </p>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-300">Send us an email:</p>
              <p className="text-green-300 hover:text-green-200 transition-colors">
                <a href="mailto:support@crownbankers.com">
                  support@crownbankers.com
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-300">Give us a call:</p>
              <p className="text-green-300 hover:text-green-200 transition-colors">
                <a href="tel:+447452237406">+44 7452 237406</a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-300">Follow us:</p>
              <div className="flex space-x-6 mt-4">
                <a
                  href="#"
                  className="text-green-400 hover:text-green-300 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-green-400 hover:text-green-300 transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-green-400 hover:text-green-300 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-3/5 p-6 sm:p-8">
          <div className="bg-white/90 p-6 sm:p-8 rounded-xl shadow-xl border border-green-500/20">
            <form className="space-y-6">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  defaultValue="Adam Smith"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  defaultValue="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  defaultValue="+44 123456789"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  defaultValue="EX Facebook"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your company"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all h-28 sm:h-32"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
