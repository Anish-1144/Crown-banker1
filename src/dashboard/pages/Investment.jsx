"use client";

import { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  BarChart,
  Users,
  ChevronRight,
  Plus,
  X,
} from "lucide-react";

const Investment = () => {
  const [activeTab, setActiveTab] = useState("plans");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  const plans = [
    {
      image:
        "https://res.cloudinary.com/dygdftjr8/image/upload/v1742887535/1_12_jpiwyg.png",
    },
    {
      image:
        "https://res.cloudinary.com/dygdftjr8/image/upload/v1742811539/cards2_x8jow0.png",
    },
    {
      image:
        "https://res.cloudinary.com/dygdftjr8/image/upload/v1742811539/cards1_ugv0p4.png",
    },
  ];

  const downlineActivations = [
    {
      id: "DL-1234",
      username: "john_doe",
      plan: "Basic Plan",
      amount: "$300",
      date: "2023-06-01",
      commission: "$15",
      level: "Level 1",
    },
    {
      id: "DL-1235",
      username: "jane_smith",
      plan: "Standard Plan",
      amount: "$1,500",
      date: "2023-05-20",
      commission: "$105",
      level: "Level 1",
    },
    {
      id: "DL-1236",
      username: "robert_johnson",
      plan: "Basic Plan",
      amount: "$500",
      date: "2023-05-15",
      commission: "$25",
      level: "Level 2",
    },
    {
      id: "DL-1237",
      username: "sarah_williams",
      plan: "Premium Plan",
      amount: "$6,000",
      date: "2023-05-10",
      commission: "$600",
      level: "Level 1",
    },
    {
      id: "DL-1238",
      username: "michael_brown",
      plan: "Standard Plan",
      amount: "$2,000",
      date: "2023-05-05",
      commission: "$70",
      level: "Level 2",
    },
  ];

  const handlePurchaseClick = (index) => {
    setSelectedPlanIndex(index);
    setIsPopupOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsPopupOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary cards remain unchanged */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
              <TrendingUp className="text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Total Investments
            </h3>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            $124,500.00
          </div>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-sm font-medium">+12.5%</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
              from last month
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
              <DollarSign className="text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Monthly Returns
            </h3>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            $2,340.00
          </div>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-sm font-medium">+5.2%</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
              from last month
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
              <BarChart className="text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Portfolio Growth
            </h3>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            18.7%
          </div>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-sm font-medium">+2.3%</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
              from last year
            </span>
          </div>
        </div>
      </div>

      {/* Investment tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("plans")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "plans"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <TrendingUp size={16} className="inline mr-2" />
              All Plans
            </button>
            <button
              onClick={() => setActiveTab("activation")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "activation"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <DollarSign size={16} className="inline mr-2" />
              Package Activation
            </button>
            <button
              onClick={() => setActiveTab("downline")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "downline"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <Users size={16} className="inline mr-2" />
              Downline Activation
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* All Plans with Purchase Buttons */}
          {activeTab === "plans" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <img
                    src={plan.image}
                    alt={`Plan ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <button
                      onClick={() => handlePurchaseClick(index)}
                      className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Package Activation */}
          {activeTab === "activation" && (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Your Active Investments
                </h3>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors inline-flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  New Investment
                </button>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 py-10">
                No active investments found. Start by selecting a plan!
              </div>
            </div>
          )}

          {/* Downline Activation */}
          {activeTab === "downline" && (
  <div>
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Downline Investments
      </h3>
      <div className="relative">
        <select className="pl-4 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
          <option>All Levels</option>
          <option>Level 1</option>
          <option>Level 2</option>
          <option>Level 3</option>
        </select>
        <ChevronRight className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 rotate-90" />
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Plan
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Commission
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Level
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {downlineActivations.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-600 hover:text-white" // Updated hover class
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {item.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {item.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {item.plan}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {item.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {item.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                {item.commission}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.level === "Level 1"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      : item.level === "Level 2"
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                      : "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                  }`}
                >
                  {item.level}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
          
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Purchase Plan 
              </h2>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Package Type
                </label>
                <select
                  className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="Self"
                >
                  <option value="Self">Self</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Cryptocurrency
                </label>
                <select className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">Select...</option>
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="USDT">Tether (USDT)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Investment Amount
                </label>
                <input
                  type="number"
                  className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="0"
                  min="0"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="useVoucher"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 dark:border-gray-600 rounded"
                />
                <label
                  htmlFor="useVoucher"
                  className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  Use Voucher
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investment;
