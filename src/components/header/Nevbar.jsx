import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Clock,
  MapPin,
  Search,
  ShoppingCart,
  ChevronDown,
  Twitter,
  Youtube,
  Facebook,
  Phone,
  MessageCircle,
} from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import GreenAnimatedButton from "../ui/GreenAnimatedButton";
import RoundButton from "../ui/RoundButton";
import WhiteRoundButton from "../ui/WhiteRoundButton";
import { FiMessageCircle } from "react-icons/fi";

function Nevbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { pathname } = location;

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="w-full ">
      {/* Top bar with contact info */}
      <div className="hidden md:flex items-center justify-between bg-white py-2  md:px-24 border-b border-2 border-gray-300">
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email: crownbankers.com</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon - Fri: 8:00 am - 7:00 pm</span>
          </div>
          <Link
            to="#"
            className="flex items-center gap-2 text-green-500 hover:text-green-600"
          >
            <MapPin className="h-4 w-4" />
            <span>Get Directions</span>
          </Link> */}
        </div>

        <div className="flex items-center space-x-5">
          <Phone className="text-green-500" />

          <div className="text-right">
            <Link
              to="tel:+44 7452237405"
              className="text-xl font-bold text-gray-800"
            >
              +44 7452237405
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="https://www.facebook.com/crownbankersofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#4CAF50] p-1.5 flex items-center justify-center"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-4 w-4 text-white" />
            </Link>
            <Link
              to="https://www.youtube.com/@official-CrownBankers"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#4CAF50] p-1.5 flex items-center justify-center"
            >
              <span className="sr-only">YouTube</span>
              <Youtube className="h-4 w-4 text-white" />
            </Link>
            <Link
              to="https://chat.whatsapp.com/K0pOZclpfH9DsLxvTyeY5q"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#4CAF50] p-1.5 flex items-center justify-center"
            >
              <span className="sr-only">WhatsApp</span>
              <FiMessageCircle className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white text-lg px-4 md:px-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative h-18 w-36">
              <div className="flex items-center">
                <div className="bg-white rounded-md flex items-center justify-center  ">
                  <img
                    src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742818322/logo1_mp91bc.png"
                    alt="logo1"
                    height={300}
                    width={350}
                  />
                </div>
                <div>
                  {/* <div className="text-xs text-gray-500">Invest Owen Risk</div> */}
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex ml-8">
            <ul className="flex space-x-1">
              <li>
                <Link
                  to="/"
                  className={`flex items-center px-4 py-2 ${
                    isActive("/")
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  Home
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`flex items-center px-4 py-2 ${
                    isActive("/services")
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  Services
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className={`flex items-center px-4 py-2 ${
                    isActive("/pages")
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-700 hover:text-green-500"
                  }`}
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      Team
                    </Link>
                    <Link
                      to="/pages/business-plan"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Business Plan
                    </Link>
                    <Link
                      to="/pages/legal"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      legal
                    </Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("projects")}
                  className={`flex items-center px-4 py-2 ${
                    isActive("/reports")
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-700 hover:text-green-500"
                  }`}
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      Trade Report
                    </Link>
                    <Link
                      to="/reports/trade-view"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Trade View
                    </Link>
                    <Link
                      to="/reports/solar-purchase-document"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Solar Purchase Document
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  className={`flex items-center px-4 py-2 ${
                    isActive("/contact")
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex space-x-2">
            <Link to="/login">
              <WhiteRoundButton className="" text="Login" />
            </Link>
            <Link to="/signup">
              <RoundButton className="" text="Sign Up" />
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
        <div className="lg:hidden bg-white pb-6 overflow-y-auto">
          <div className="px-5 pt-4">
            <nav className="grid gap-y-2">
              <Link
                to="/"
                className={`-m-3 p-3 flex items-center rounded-md ${
                  isActive("/")
                    ? "text-green-500 font-medium"
                    : "text-gray-700 hover:text-green-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`-m-3 p-3 flex items-center rounded-md ${
                  isActive("/services")
                    ? "text-green-500 font-medium"
                    : "text-gray-700 hover:text-green-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("mobile-services")}
                  className={`-m-3 p-3 flex items-center rounded-md w-full text-left ${
                    isActive("/pages")
                      ? "text-green-500 font-medium"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  Pages
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-services" && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link
                      to="/pages/team"
                      className={`block px-3 py-2 rounded-md text-base ${
                        isActive("/pages/team")
                          ? "text-green-500 font-medium"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      Team
                    </Link>
                    <Link
                      to="/pages/business-plan"
                      className={`block px-3 py-2 rounded-md text-base ${
                        isActive("/pages/business-plan")
                          ? "text-green-500 font-medium"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      Business Plan
                    </Link>
                    <Link
                      to="/pages/legal"
                      className={`block px-3 py-2 rounded-md text-base ${
                        isActive("/pages/legal")
                          ? "text-green-500 font-medium"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      Legal
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("mobile-projects")}
                  className={`-m-3 p-3 flex items-center rounded-md w-full text-left ${
                    isActive("/reports")
                      ? "text-green-500 font-medium"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  Reports
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-projects" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-projects" && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link
                      to="/reports/trade-report"
                      className={`block px-3 py-2 rounded-md text-base ${
                        isActive("/reports/trade-report")
                          ? "text-green-500 font-medium"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      Trade Report
                    </Link>
                    <Link
                      to="/reports/trade-view"
                      className={`block px-3 py-2 rounded-md text-base ${
                        isActive("/reports/trade-view")
                          ? "text-green-500 font-medium"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      Trade View
                    </Link>
                    <Link
                      to="/reports/solar-purchase-document"
                      className={`block px-3 py-2 rounded-md text-base ${
                        isActive("/reports/solar-purchase-document")
                          ? "text-green-500 font-medium"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      Solar Purchase Document
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`-m-3 p-3 flex items-center rounded-md ${
                  isActive("/contact")
                    ? "text-green-500 font-medium"
                    : "text-gray-700 hover:text-green-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu buttons */}
            <div className="flex space-x-2 pt-2 border-gray-100">
              <Link to="/login" className="flex-1">
                <WhiteRoundButton text="Login" className="w-full" />
              </Link>
              <Link to="/signup" className="flex-1">
                <RoundButton text="Sign Up" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nevbar;
