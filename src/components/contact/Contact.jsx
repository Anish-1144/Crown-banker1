import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div style={{ backgroundImage: `url('/images/backgrounds/4.jpg')` }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rubik:400,500,600,700%7cRoboto:400,500,700&display=swap"
      />
      <div className="container mx-auto px-4 py-12 md:px-24">
        {/* Map Section */}
        <div className="mb-12">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-['Rubik']">
              Our Location
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjUiTiAwwrAwNyczMi43Ilc!5e0!3m2!1sen!2suk!4v1615321234567!5m2!1sen!2suk"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="bg-[#e8f5e9] rounded-lg p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-medium text-gray-800 mb-4 font-['Rubik']">
                  Get in touch with us directly
                </h3>
                <p className="text-gray-600 font-['Roboto']">
                  We are here to help you! Tell us how we can help & we'll be in
                  touch with an expert within the next 24 hours.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4 font-['Rubik']">
                  Send us an email:
                </h3>
                <p className="text-gray-600 font-['Roboto']">
                  support@crownbankers.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4 font-['Rubik']">
                  Give us a call:
                </h3>
                <p className="text-gray-600 font-['Roboto']">+44 7452237405</p>
              </div>
              <button className="bg-[#4CAF50] hover:bg-[#43A047] text-white w-full max-w-[200px] h-12 rounded-md flex items-center justify-center gap-2">
                <ArrowRight className="h-5 w-5" /> Request A Quote
              </button>
            </div>
          </div>
          {/* Right Column - Contact Form */}
          <div className="bg-white border-green-500 border-4 rounded-xl shadow-xl p-6">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 font-['Rubik']">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8 font-['Roboto']">
              We value your inquiries and are committed to providing you with
              the best assistance. Fill out the form, and we'll respond as soon
              as possible.
            </p>
            <div className="border-t border-gray-200 pt-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  />
                </div>
                <textarea
                  placeholder="Additional Details!"
                  className="w-full p-3 border border-gray-300 rounded-md font-['Roboto']"
                  rows={4}
                ></textarea>
                <button className="bg-[#212121] hover:bg-[#000000] text-white px-6 py-3 rounded-md flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" /> Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
