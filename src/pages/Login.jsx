import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoundButton from "../components/ui/RoundButton";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 ">
      <div className="flex-grow flex py-4">
        {/* Left Column - Form */}
        <div
          className="w-full items-center justify-center md:w-1/2 flex flex-col p-8 md:p-16 
         "
        >
          <div className="mb-8">
            <div className="flex items-center">
              <img
                className="h-24 w-auto"
                src="/images/logo1.png"
                alt="Crown Bankers Logo"
              />
              {/* <span className="ml-2 text-2xl font-bold text-white">BankCo</span> */}
            </div>
          </div>

          <div className="flex-grow flex flex-col px-4 rounded-md justify-center max-w-md border border-green-800 animate- ">
            <div className=" p-4 rounded-t-md">
              <h2 className="text-3xl font-bold text-white ">
                Sign in to Crown Banker.
              </h2>
              <p className="text-white mt-1">Send, spend and save smarter</p>
            </div>

            <div className="bg-gray-900 py-8 ">
              <div className="flex items-center justify-center mb-6">
                {/* <div className="flex-grow border-t border-gray-700"></div> */}

                {/* <div className="flex-grow border-t border-gray-700"></div> */}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <input
                      name="email"
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400"
                      placeholder="Username or email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <input
                      name="password"
                      type="password"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <svg
                        xmlns=""
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        <line x1="4" y1="20" x2="20" y2="4"></line>
                      </svg>
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-green-500 focus:ring-green-500"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 text-sm text-white"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-green-500 hover:text-green-400"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <RoundButton
                    text="Sign in"
                    type="submit"
                    className="w-full py-3 text-sm "
                  />
                  <p className="mt-1 flex  items-center text-base text-gray-300">
                    Create account? {/* Or{" "} */}
                    <Link
                      to="/signup"
                      className="font-medium text-[#4CAF50] hover:text-[#3d9140]"
                    >
                      sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden md:flex md:w-1/2 bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://imgs.search.brave.com/WcifV_h_w633-PcRZo_n5SiaRnNeF77jTglDj7nCvWE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xNDExMTYx/LzEyNzMvaS80NTAv/ZGVwb3NpdHBob3Rv/c18xMjczNjE3MC1z/dG9jay1waG90by1y/ZW5ld2FibGUtZW5l/cmd5LmpwZw"
              alt="Secure Banking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
