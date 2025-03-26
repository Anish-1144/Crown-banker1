import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Vouchers({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState("create");
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const navigate = useNavigate();

  const voucherData = [
    {
      id: 1,
      voucherCode: "VCHR-001",
      amount: "$100.00",
      wallet: "ROI Wallet",
      date: "2025-03-20",
      status: "Active",
    },
    {
      id: 2,
      voucherCode: "VCHR-002",
      amount: "$50.00",
      wallet: "R&B Wallet",
      date: "2025-03-21",
      status: "Pending",
    },
    {
      id: 3,
      voucherCode: "VCHR-003",
      amount: "$200.00",
      wallet: "Extra Income Wallet",
      date: "2025-03-22",
      status: "Expired",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGenerateVoucher = (e) => {
    e.preventDefault();
    if (!amount || !wallet) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Generating voucher:", { amount, wallet });
    setAmount("");
    setWallet("");
    alert("Voucher generated successfully!");
  };

  return (
    <div
      className={`p-4 sm:p-6 min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Tabs */}
        <div
          className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <button
            onClick={() => handleTabChange("create")}
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-semibold border-b-2 transition-colors ${
              activeTab === "create"
                ? "border-green-500 text-green-500"
                : isDarkMode
                ? "border-transparent text-gray-400 hover:text-green-500"
                : "border-transparent text-gray-500 hover:text-green-500"
            }`}
          >
            Create Voucher
          </button>
          <button
            onClick={() => handleTabChange("list")}
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-semibold border-b-2 transition-colors ${
              activeTab === "list"
                ? "border-green-500 text-green-500"
                : isDarkMode
                ? "border-transparent text-gray-400 hover:text-green-500"
                : "border-transparent text-gray-500 hover:text-green-500"
            }`}
          >
            Voucher List
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "create" && (
          <div
            className={`rounded-2xl p-4 sm:p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10 text-white"
                : "bg-white border-gray-200/50 shadow-lg text-black"
            }`}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Generate Voucher Card
            </h3>
            <form onSubmit={handleGenerateVoucher} className="space-y-4">
              {/* Enter Amount */}
              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Enter Amount
                </label>
                <input
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-green-400 text-white placeholder-gray-400"
                      : "bg-gray-50/30 border-gray-200 focus:border-green-500 text-black placeholder-gray-500"
                  } focus:ring-1 focus:ring-green-500 focus:outline-none`}
                />
              </div>

              {/* Select Wallet */}
              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Select Wallet
                </label>
                <select
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-green-400 text-white"
                      : "bg-gray-50/30 border-gray-200 focus:border-green-500 text-black"
                  } focus:ring-1 focus:ring-green-500 focus:outline-none appearance-none`}
                >
                  <option value="" disabled>
                    Select Wallet
                  </option>
                  <option value="ROI Wallet">ROI Wallet</option>
                  <option value="R&B Wallet">R&B Wallet</option>
                  <option value="Extra Income Wallet">
                    Extra Income Wallet
                  </option>
                </select>
              </div>

              {/* Generate Voucher Button */}
              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors backdrop-blur-sm"
              >
                Generate Voucher
              </button>
            </form>
          </div>
        )}

        {activeTab === "list" && (
          <div
            className={`rounded-2xl p-4 sm:p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10 text-white"
                : "bg-white border-gray-200/50 shadow-lg text-black"
            }`}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Voucher List
            </h3>
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr
                    className={`${
                      isDarkMode ? "bg-gray-700/50" : "bg-gray-100"
                    } ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    <th className="p-3 text-sm font-semibold">Voucher Code</th>
                    <th className="p-3 text-sm font-semibold">Amount</th>
                    <th className="p-3 text-sm font-semibold">Wallet</th>
                    <th className="p-3 text-sm font-semibold">Date</th>
                    <th className="p-3 text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {voucherData.map((voucher) => (
                    <tr
                      key={voucher.id}
                      className={`border-b ${
                        isDarkMode
                          ? "border-gray-700 hover:bg-gray-700/30 text-white"
                          : "border-gray-200 hover:bg-gray-50 text-black"
                      }`}
                    >
                      <td className="p-3">{voucher.voucherCode}</td>
                      <td className="p-3">{voucher.amount}</td>
                      <td className="p-3">{voucher.wallet}</td>
                      <td className="p-3">{voucher.date}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            voucher.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : voucher.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {voucher.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="sm:hidden space-y-4">
              {voucherData.map((voucher) => (
                <div
                  key={voucher.id}
                  className={`p-4 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-200 text-black"
                  }`}
                >
                  <div className="flex justify-between py-1 text-sm">
                    <span className="font-semibold">Voucher Code:</span>
                    <span>{voucher.voucherCode}</span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="font-semibold">Amount:</span>
                    <span>{voucher.amount}</span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="font-semibold">Wallet:</span>
                    <span>{voucher.wallet}</span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="font-semibold">Date:</span>
                    <span>{voucher.date}</span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="font-semibold">Status:</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        voucher.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : voucher.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {voucher.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
