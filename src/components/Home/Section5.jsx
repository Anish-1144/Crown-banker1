import { useState, useEffect } from "react";

const QuoteRequestSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  // Generate a random image from picsum.photos on mount
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000); // Random ID for unique image
    setBackgroundImage(`https://picsum.photos/1920/1080?random=${randomId}`);
  }, []);

  return (
    <div
      className="bg-gray-100"
      style={{ backgroundImage: `url('/images/backgrounds/4.jpg')` }}
    >
      <section className="relative flex flex-col md:flex-row items-stretch min-h-[400px] sm:min-h-[300px] md:min-h-[400px] py-6 sm:py-12 mx-4 sm: md:mx-24">
        {/* Left Side - Blurred Background with Text */}
        <div
          className="w-full md:w-1/2 h-[150px] sm:h-[200px] md:h-auto bg-cover bg-center flex items-center justify-center shadow-xl rounded-xl "
          style={{
            backgroundImage: `url(https://www.nexteraenergyresources.com/content/dam/neer/us/en/images/white-pine-solar.jpg)`,
          }}
        ></div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-center shadow-xl rounded-xl">
          <h3 className="text-lg sm:text-xl text-[#4CAF50] md:text-5xl font-bold mb-4 sm:mb-6">
            Calculate Your Earnings
          </h3>
          <form className="space-y-3 sm:space-y-4">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Phone and Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  placeholder="Address"
                />
              </div>
            </div>

            {/* System Data */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                System Data
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <select className="block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base">
                    <option>System installer?</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div>
                  <select className="block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base">
                    <option>Solar system type?</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div>
                  <select className="block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base">
                    <option>Monthly electric usage?</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div>
                  <select className="block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base">
                    <option>Solar panels placed?</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div>
                  <select className="block w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm sm:text-base">
                    <option>Materials on your roof?</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact-method"
                    value="all"
                    className="h-3 sm:h-4 w-3 sm:w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    defaultChecked
                  />
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-700">
                    All
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact-method"
                    value="email"
                    className="h-3 sm:h-4 w-3 sm:w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-700">
                    Email
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact-method"
                    value="phone"
                    className="h-3 sm:h-4 w-3 sm:w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-700">
                    Phone
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              Submit Request
            </button>

            {/* Footer Text */}
            <p className="text-xs text-gray-500 text-center mt-2 sm:mt-4">
              Receive an accurate quote within 3-5 days when you fill out the
              form on this page.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default QuoteRequestSection;
