import { Link } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Download,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black w-full text-white py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
            <p className="text-gray-300 mb-6">
              Your Gateway to Prosperity. Experience strategic investing,
              innovative solutions, and financial excellence with us.
            </p>
            <p className="font-bold mb-2">Support@Crownbankers.Com</p>
            <div className="flex items-center text-green-500 mb-4">
              <Phone className="mr-2" size={20} />
              <span className="text-lg">+44 7452237405</span>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="mr-2" size={20} />
              <span>London, UK</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
            
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Catalogue */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products Catalogue</h3>
            <Link
              to="/catalogue"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download PDF
            </Link>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            © Copyright 2024, Crown Bankers. All Rights Reserved by CROWNQUEST
            ASSET MANAGEMENT LIMITED.
            <a
              href="https://crownbankers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 ml-1"
            >
              crownbankers.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Facebook size={20} className="text-green-500" />
            </a>
            <a
              href="#"
              className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Youtube size={20} className="text-green-500" />
            </a>
            <a
              href="#"
              className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Twitter size={20} className="text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
