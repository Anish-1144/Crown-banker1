import React, { useState, useEffect } from "react";

function NotFound() {
  const [count, setCount] = useState(5);
  const [showRedirectMessage, setShowRedirectMessage] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Countdown timer for redirect message
    if (count > 0 && showRedirectMessage) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else if (count === 0 && showRedirectMessage) {
      setShowRedirectMessage(false);
      // You could add actual redirection here with: window.location.href = '/';
    }
  }, [count, showRedirectMessage]);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      // Simulate going to home page
      // In a real app, you would use router navigation here
      // e.g., router.push('/') for Next.js
      console.log("Navigating to home page");
      // For demo only, reset animation after 500ms
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  const handleTryAgain = () => {
    // Simulate refreshing the page
    setIsAnimating(true);
    setTimeout(() => {
      console.log("Refreshing the page");
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <div
        className={`transform transition-transform duration-300 ${
          isAnimating ? "scale-95" : "scale-100"
        }`}
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4"></div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {showRedirectMessage && (
          <div className="text-sm text-gray-500 mb-6 animate-pulse">
            Redirecting to homepage in {count} seconds...
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleButtonClick}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
          >
            Go to Homepage
          </button>
          <button
            onClick={handleTryAgain}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
