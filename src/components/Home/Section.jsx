import { useState } from "react";

const VideoBanner = () => {
  const [showVideo] = useState(true); // Set to true to auto-show the video

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              "Our Goal Is To Change
              <br />
              The Modern World
              <br />
              Become Nature
              <br />
              Friendly"
            </h2>
            <div className="flex bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="w-1 bg-green-500 mr-4 flex-shrink-0"></div>
              <div>
                <p className="text-gray-600 mb-4 ">
                  Our goal is to reshape the modern world by embracing
                  nature-friendly practices. We're committed to driving change
                  with sustainable solutions, fostering a greener future, and
                  making eco-conscious choices that benefit both people and the
                  planet. Join us in this vital journey.
                </p>
                <p className="text-gray-500">
                  How can we meet the growing demand for electricity while
                  protecting our climate and make planet a better place?
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Video Section */}
          <div className="lg:w-1/2 relative">
            {showVideo && (
              <div
                className="relative pt-0 pb-0 h-0"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/dZyQNy3-HjU?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {/* Background globe effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
