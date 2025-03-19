// import { FaArrowRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Banking & Financial Services",
    description:
      "Reliable banking solutions designed for financial institutions to optimize...",
    icon: "🌞",
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
    title: "Fintech & Digital Payments",
    description:
      "Innovative fintech solutions such as mobile banking, digital wallets, and instant payment...",
    icon: "🏭",
  },
];

const BankingInvestmentSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-24">
      <h3 className="text-green-600  text-3xl font-bold">
        Fostering The Growth Of Financial Innovation
      </h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
        A Leading Provider Of Banking & Investment Solutions
      </h2>
      <p className="text-gray-600 mt-4 max-w-3xl">
        Crown Bankers is focused on delivering modern financial solutions that
        reduce operational costs, enhance banking efficiency, and improve the
        overall financial ecosystem.
      </p>

      <div className="mt-6 flex gap-4 place-items-end">
        <button className="px-6 py-3 border border-black text-black rounded-md flex items-center gap-2">
          Get Started <ArrowRight />
        </button>
        {/* <button className="px-6 py-3 bg-black text-white rounded-md flex items-center gap-2">
          Get Started <ArrowRight />
        </button> */}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center border border-gray-200"
          >
            <div className="text-green-500 text-4xl mb-3">{service.icon}</div>
            <h4 className="font-semibold text-lg text-gray-900">
              {service.title}
            </h4>
            <p className="text-gray-500 text-sm mt-2">{service.description}</p>
            <a
              href="#"
              className="text-green-600 font-semibold flex items-center justify-center mt-4"
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
