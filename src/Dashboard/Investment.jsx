import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function Investment({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState("all"); // all, package, downline

  const packages = [
    {
      name: "Solar Starter",
      icon: "✨",
      range: "$25 - $2,499",
      features: [
        { label: "Daily Energy Yield", value: "1.5% - 1.8%" },
        { label: "Duration", value: "150 days" },
        { label: "Total Energy Output", value: "225% - 270%" },
        { label: "Referral Boost", value: "7%" },
        { label: "Binary Power Surge", value: "10%" },
        { label: "Power Capacity", value: "$1,000" },
        { label: "Renewable Principle", value: "50%" },
      ],
    },
    {
      name: "Power Growth",
      icon: "✨",
      range: "$2,500 - $19,999",
      features: [
        { label: "Daily Energy Yield", value: "1.8% - 2.1%" },
        { label: "Duration", value: "140 days" },
        { label: "Total Energy Output", value: "252% - 294%" },
        { label: "Referral Boost", value: "8%" },
        { label: "Binary Power Surge", value: "10%" },
        { label: "Power Capacity", value: "$3,500" },
        { label: "Renewable Principle", value: "60%" },
      ],
    },
    {
      name: "Elite Energy",
      icon: "✨",
      range: "$20,000 - $50,000",
      features: [
        { label: "Daily Energy Yield", value: "2.1% - 2.4%" },
        { label: "Duration", value: "130 days" },
        { label: "Total Energy Output", value: "273% - 312%" },
        { label: "Referral Boost", value: "9%" },
        { label: "Binary Power Surge", value: "10%" },
        { label: "Power Capacity", value: "$7,000" },
        { label: "Renewable Principle", value: "80%" },
      ],
    },
    {
      name: "Solar Mini",
      icon: "✨",
      range: "$10",
      features: [
        { label: "Daily Energy Yield", value: "1.2% - 1.5%" },
        { label: "Duration", value: "110 Days" },
        { label: "Total Energy Output", value: "132% - 165%" },
        { label: "Referral Boost", value: "7%" },
        { label: "Binary Power Surge", value: "10%" },
        { label: "Power Capacity", value: "$500" },
        { label: "Renewable Principle", value: "40%" },
      ],
    },
  ];

  const handlePurchase = (packageName) => {
    // Handle purchase logic here
    console.log(`Purchasing ${packageName}`);
  };

  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-8 border-b">
        {["all", "package", "downline"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-6 font-medium ${
              activeTab === tab
                ? "text-green-500 border-b-2 border-green-500"
                : "text-gray-500"
            }`}
          >
            {tab === "all" && "All Plans"}
            {tab === "package" && "Package Activation"}
            {tab === "downline" && "Downline Activation"}
          </button>
        ))}
      </div>

      {/* Package Cards */}
      {activeTab === "all" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border shadow-lg`}
            >
              <div className="p-6">
                {/* Package Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-full ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <div className="text-3xl">{pkg.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{pkg.name}</h3>
                    <p className="text-2xl font-bold mt-1 text-green-500">
                      {pkg.range}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-full ${
                          isDarkMode ? "bg-gray-700" : "bg-gray-100"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5 text-green-500" />
                      </div>
                      <span className="text-sm">
                        <span className="font-medium">{feature.label}:</span>{" "}
                        <span>{feature.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Button */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handlePurchase(pkg.name)}
                  className="w-full py-4 px-6 rounded-lg flex items-center justify-center gap-3 font-medium bg-green-500 text-white"
                >
                  <span className="flex items-center gap-2">
                    <span>Purchase Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        
        
      )}

      {/* Package Activation Table */}
      {activeTab === "package" && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-4 px-6 text-left font-semibold">SI NO</th>
                <th className="py-4 px-6 text-left font-semibold">PACKAGE</th>
                <th className="py-4 px-6 text-left font-semibold">DAYS</th>
                <th className="py-4 px-6 text-left font-semibold">INVESTED</th>
                <th className="py-4 px-6 text-left font-semibold">
                  INVESTMENT DATE
                </th>
                <th className="py-4 px-6 text-left font-semibold">EXPIRY</th>
                <th className="py-4 px-6 text-left font-semibold">TOKEN</th>
                <th className="py-4 px-6 text-left font-semibold">TYPE</th>
              </tr>
            </thead>
            <tbody className={isDarkMode ? "bg-gray-800" : "bg-white"}>
              <tr>
                <td
                  colSpan="8"
                  className={`py-6 px-6 text-center border-t ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  No Data
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center bg-green-500 text-white py-3 px-6 rounded-lg">
            <span>Showing 1-0 of 0 results</span>
            <div className="space-x-3">
              <button className="px-4 py-2 rounded-lg bg-green-600">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-600">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Downline Activation Table */}
      {activeTab === "downline" && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-4 px-6 text-left font-semibold">SI NO</th>
                <th className="py-4 px-6 text-left font-semibold">USER</th>
                <th className="py-4 px-6 text-left font-semibold">PACKAGE</th>
                <th className="py-4 px-6 text-left font-semibold">DAYS</th>
                <th className="py-4 px-6 text-left font-semibold">INVESTED</th>
                <th className="py-4 px-6 text-left font-semibold">
                  INVESTMENT DATE
                </th>
                <th className="py-4 px-6 text-left font-semibold">EXPIRY</th>
                <th className="py-4 px-6 text-left font-semibold">TOKEN</th>
                <th className="py-4 px-6 text-left font-semibold">TYPE</th>
              </tr>
            </thead>
            <tbody className={isDarkMode ? "bg-gray-800" : "bg-white"}>
              <tr>
                <td
                  colSpan="9"
                  className={`py-6 px-6 text-center border-t ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  No Data
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center bg-green-500 text-white py-3 px-6 rounded-lg">
            <span>Showing 1-0 of 0 results</span>
            <div className="space-x-3">
              <button className="px-4 py-2 rounded-lg bg-green-600">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-600">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
