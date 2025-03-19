import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Clock,
  MapPin,
  Search,
  ShoppingCart,
  ChevronDown,
  Twitter,
  Instagram,
  Facebook,
  Phone,
} from "lucide-react";

function Nevbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
const toggleDropdown = (menu) => {
  if (activeDropdown === menu) {
    setActiveDropdown(null);
  } else {
    setActiveDropdown(menu);
  }
};
  return (
    <header className="w-full ">
      {/* Top bar with contact info */}
      <div className="hidden md:flex items-center justify-between bg-white py-2  md:px-24 border-b">
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email: crownbankers.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon - Fri: 8:00 am - 7:00 pm</span>
          </div>
          <Link
            to="#"
            className="flex items-center gap-2 text-green-500 hover:text-green-600"
          >
            <MapPin className="h-4 w-4" />
            <span>Get Directions</span>
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          <Phone className="text-green-500" />

          <div className="text-right">
            <Link to="tel:55654541" className="text-xl font-bold text-gray-800">
              55 654 541 17
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="#"
              className="rounded-full bg-gray-800 p-1.5 flex items-center justify-center"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-4 w-4 text-white" />
            </Link>
            <Link
              to="#"
              className="rounded-full bg-gray-800 p-1.5 flex items-center justify-center"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-4 w-4 text-white" />
            </Link>
            <Link
              to="#"
              className="rounded-full bg-gray-800 p-1.5 flex items-center justify-center"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-4 px-4 md:px-24 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative h-14 w-48">
              <div className="flex items-center">
                <div className="bg-green-500 h-12 w-12 rounded-md flex items-center justify-center mr-3">
                  logo
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">
                    Crown-Banker
                  </div>
                  <div className="text-xs text-gray-500">Invest Owen Risk</div>
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex ml-8">
            <ul className="flex space-x-1">
              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-green-500 border-b-2 border-green-500"
                >
                  Home
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-green-500"
                >
                  Services
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-green-500"
                >
                  Pages
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48 z-10">
                    <Link
                      to="/pages/team"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    >
                      Team
                    </Link>
                    <Link
                      to="/pages/business-plan"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    >
                      Business Plan
                    </Link>
                    <Link
                      to="/pages/legal"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    >
                      legal
                    </Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("projects")}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-green-500"
                >
                  Reports
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "projects" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "projects" && (
                  <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48 z-10">
                    <Link
                      to="/reports/trade-report"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    >
                      Trade Report
                    </Link>
                    <Link
                      to="/reports/trade-view"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    >
                      Trade View
                    </Link>
                    <Link
                      to="/reports/solar-purchase-document"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    >
                      Solar Purchase Document
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-green-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex space-x-2">
            <Link
              to="#"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
            >
              Login
            </Link>
            <Link
              to="#"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Sign In
            </Link>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------*/}
        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 pt-2 pb-4 border-t">
          <div className="flex flex-col space-y-3">
            <Link
              to="#"
              className="flex items-center justify-between py-2 text-green-500 border-b border-gray-100"
            >
              <span>Home</span>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-between py-2 text-gray-700 border-b border-gray-100"
            >
              <span>Service</span>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </Link>

            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleDropdown("mobile-services")}
                className="flex items-center justify-between w-full py-2 text-gray-700"
              >
                <span>Pages</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "mobile-services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-services" && (
                <div className="pl-4 py-2 space-y-2">
                  <Link
                    to="/pages/team"
                    className="block py-1 text-gray-600 hover:text-green-500"
                  >
                    Team
                  </Link>
                  <Link
                    to="/pages/business-plan"
                    className="block py-1 text-gray-600 hover:text-green-500"
                  >
                    Business Plan
                  </Link>
                  <Link
                    to="/pages/legal"
                    className="block py-1 text-gray-600 hover:text-green-500"
                  >
                    Legal
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleDropdown("mobile-projects")}
                className="flex items-center justify-between w-full py-2 text-gray-700"
              >
                <span>Reports</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "mobile-projects" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-projects" && (
                <div className="pl-4 py-2 space-y-2">
                  <Link
                    to="/reports/trade-report"
                    className="block py-1 text-gray-600 hover:text-green-500"
                  >
                    Trade Report
                  </Link>
                  <Link
                    to="/reports/trade-view"
                    className="block py-1 text-gray-600 hover:text-green-500"
                  >
                    Trade View
                  </Link>
                  <Link
                    to="/reports/solar-purchase-document"
                    className="block py-1 text-gray-600 hover:text-green-500"
                  >
                    Solar Purchase Document
                  </Link>
                </div>
              )}
            </div>

           
            <Link
              to="/contact"
              className="py-2 text-gray-700 border-b border-gray-100"
            >
              Contact Us
            </Link>

            <div className="flex space-x-2 pt-2">
              <Link
                to="#"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex-1 text-center"
              >
                Login
              </Link>
              <Link
                to="#"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex-1 text-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nevbar
