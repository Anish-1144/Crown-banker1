"use client";

import { useState } from "react";
import { Ticket, Plus, Search } from "lucide-react";

const Voucher = () => {
  const [activeTab, setActiveTab] = useState("list");

  // Sample voucher data
  const vouchers = [
    {
      id: "DISCOUNT10",
      discount: "10% OFF",
      validUntil: "Dec 31, 2023",
      usage: "0/1",
      status: "Active",
    },
    {
      id: "DISCOUNT20",
      discount: "20% OFF",
      validUntil: "Dec 31, 2023",
      usage: "0/3",
      status: "Expires Soon",
    },
    {
      id: "DISCOUNT30",
      discount: "30% OFF",
      validUntil: "Dec 31, 2023",
      usage: "1/1",
      status: "Used",
    },
    {
      id: "WELCOME50",
      discount: "50% OFF",
      validUntil: "Dec 31, 2023",
      usage: "0/1",
      status: "Active",
    },
    {
      id: "SUMMER25",
      discount: "25% OFF",
      validUntil: "Aug 31, 2023",
      usage: "0/2",
      status: "Expires Soon",
    },
    {
      id: "SPECIAL15",
      discount: "15% OFF",
      validUntil: "Dec 31, 2023",
      usage: "0/1",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
       
      </div>

      {/* Voucher tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("list")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "list"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <Ticket size={16} className="inline mr-2" />
              Vouchers List
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "create"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <Plus size={16} className="inline mr-2" />
              Create Voucher
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "list" && (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search vouchers..."
                    className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>

                <button
                  onClick={() => setActiveTab("create")}
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Voucher
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vouchers.map((voucher) => (
                  <div
                    key={voucher.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-green-700 p-4 text-white">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Ticket className="h-5 w-5 mr-2" />
                          <span className="font-medium">{voucher.id}</span>
                        </div>
                        <span
                          className={`text-sm px-2 py-1 rounded-full font-medium ${
                            voucher.status === "Active"
                              ? "bg-white text-green-600"
                              : voucher.status === "Expires Soon"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {voucher.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Discount
                        </span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {voucher.discount}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Valid until
                        </span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {voucher.validUntil}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Usage
                        </span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {voucher.usage}
                        </span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                          {voucher.status === "Used"
                            ? "View Details"
                            : "Use Voucher"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "create" && (
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Create New Voucher
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Voucher Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., SUMMER2023"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Use uppercase letters and numbers only
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Discount Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Percentage Discount</option>
                      <option>Fixed Amount Discount</option>
                      <option>Free Shipping</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Discount Value
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="10"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500 dark:text-gray-400">
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Maximum Uses
                    </label>
                    <input
                      type="number"
                      placeholder="1"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter a description for this voucher"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="active"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      defaultChecked
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="active"
                      className="font-medium text-gray-700 dark:text-gray-300"
                    >
                      Active
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Enable this voucher immediately after creation
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setActiveTab("list")}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Create Voucher
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Redeem Voucher
          </h3>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter voucher code"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Redeem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
