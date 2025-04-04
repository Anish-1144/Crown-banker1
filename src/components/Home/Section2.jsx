// import { FaArrowRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import WhiteRoundButton from "../ui/WhiteRoundButton";
import { Link, useLocation } from "react-router-dom";


const services = [
  {
    title: " EV Investments & Infrastructure GrowthStrategic",
    description:
      " Investment opportunities in the booming EV sector, including charging networks, battery technology, and smart mobility…",
    icon: "🚗",
  },
  {
    title: "Investment & Wealth Management",
    description:
      "Comprehensive wealth management services that help clients maximize returns...",
    icon: "📡",
  },
  {
    title: "Crypto & Blockchain Solutions",
    description:
      "Blockchain-powered financial systems that ensure secure transactions, smart...",
    icon: "🔗",
  },
  {
    title: "Solar Energy Investments & Green Returns",
    description:
      " Profitable investment avenues in solar energy, from large-scale solar farms to innovative renewable tech solutions…",
    icon: "☀️",
  },
];

const BankingInvestmentSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-24">
      <h3 className="text-[#4CAF50] text-5xl font-bold">
        Fostering The Growth Of Financial Innovation
      </h3>
      <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 mt-2">
        A Leading Provider Of Banking & Investment Solutions
      </h2>
      <p className="text-gray-600 mt-4 max-w-3xl">
        Crown Bankers is focused on delivering modern financial solutions that
        reduce operational costs, enhance banking efficiency, and improve the
        overall financial ecosystem.
      </p>

      <div className="mt-6 flex gap-4 place-items-end">
        <Link to="/login">
          <WhiteRoundButton className="" text="Get Start ->" />
        </Link>
        {/* <button className="px-6 py-3 bg-black text-white rounded-md flex items-center gap-2">
          Get Started <ArrowRight />
        </button> */}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-green-50  shadow-xl p-6 rounded-lg text-center border-4 border-[#4CAF50] hover:bg-[#4CAF50] group"
          >
            <div className="text-green-500 text-4xl mb-3 group-hover:text-white">
              {service.icon}
            </div>
            <h4 className="font-semibold text-lg text-gray-900 group-hover:text-white">
              {service.title}
            </h4>
            <p className="text-gray-500 text-sm mt-2 group-hover:text-white">
              {service.description}
            </p>
            <a
              href="/Services"
              className="text-green-600 font-semibold flex items-center justify-center mt-4 group-hover:text-white"
            >
              <span>Explore More</span>
              <ArrowRight className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankingInvestmentSection;
