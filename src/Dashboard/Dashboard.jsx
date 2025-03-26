import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FiArrowRight } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Dashboard({ isDarkMode }) {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const userInfo = {
    userId: "CROWN-108470",
    name: "anish",
    balance: "0.00",
    sponsorName: "",
    sponsorEmail: "crownbankersofficial@gmail.com",
    currency: "US Dollar",
    status: "Active",
  };

  const wallets = [
    { name: "ROI Wallet", amount: "$0.00", color: "emerald" },
    { name: "R&B Wallet", amount: "$0.00", color: "emerald" },
    { name: "Extra income wallet", amount: "$0.00", color: "emerald" },
    { name: "Coupons", amount: "$0.00", color: "emerald" },
    { name: "Total Investment", amount: "$0.00", color: "emerald" },
    { name: "Total Withdrawal", amount: "$0.00", color: "emerald" },
  ];

  const handleWithdrawClick = () => {
    setIsWithdrawModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsWithdrawModalOpen(false);
  };

  const handleReinvestClick = () => {
    navigate("/dashboard/vouchers"); // Navigate to /dashboard/vouchers
  };

  return (
    <div className={`p-6 min-h-screen `}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* User Info and Wallets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div
            className={`rounded-2xl p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-100 border-gray-700 text-white shadow-lg" // Dark theme classes
                : "bg-gray-900 border-gray-200 text-black shadow-lg" // Light theme classes
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  User ID
                </p>
                <p className="font-medium">{userInfo.userId}</p>
              </div>
              <div className="space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Name
                </p>
                <p className="font-medium">{userInfo.name}</p>
              </div>
              <div className="space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Your Balance
                </p>
                <p className="font-medium text-emerald-400">
                  ${userInfo.balance}
                </p>
              </div>
              <div className="space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Sponsor Name
                </p>
                <p className="font-medium">{userInfo.sponsorName || "-"}</p>
              </div>
              <div className="col-span-2 space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Sponsor Email
                </p>
                <p className="font-medium truncate">{userInfo.sponsorEmail}</p>
              </div>
              <div className="space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Currency
                </p>
                <p className="font-medium">{userInfo.currency}</p>
              </div>
              <div className="space-y-1">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Status
                </p>
                <p className="font-medium text-emerald-400">
                  {userInfo.status}
                </p>
              </div>
            </div>
          </div>

          {/* Wallets Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10"
                    : "bg-white border-gray-200/50 shadow-lg "
                }`}
              >
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <IoWalletOutline className="text-xl" />
                  <span className="text-sm font-medium">{wallet.name}</span>
                </div>
                <p className="text-xl font-bold">{wallet.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet Update and Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Wallet Update Card */}
          <div
            className={`rounded-2xl p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10"
                : "bg-white border-gray-200/50 shadow-lg "
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">
              Update Wallet Address
            </h3>
            <p
              className={`text-sm mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Please enter your Withdrawal Wallet Address
              (Tether-TRC20[USDT.TRC20])
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Wallet Address"
                className={`w-full p-3 rounded-xl border backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-gray-700/30 border-gray-600 focus:border-emerald-400 text-white placeholder-gray-400"
                    : "bg-gray-50/30 border-gray-200 focus:border-emerald-500"
                } focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
              />
              <button className="w-full py-3 rounded-xl bg-emerald-500/90 hover:bg-emerald-600/90 text-white font-medium transition-colors backdrop-blur-sm">
                Continue
              </button>
              <p className="text-sm text-red-400">
                * To keep your money safe, the address for your cryptocurrency
                wallet can't be changed later. Be careful and don't share
                important details to protect your money.
              </p>
            </div>
          </div>

          {/* Actions and Referral Card */}
          <div
            className={`rounded-2xl p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10"
                : "bg-white border-gray-200/50 shadow-lg "
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleWithdrawClick}
                className="px-6 py-3 rounded-xl bg-emerald-500/90 hover:bg-emerald-600/90 text-white font-medium transition-colors backdrop-blur-sm flex items-center gap-2"
              >
                Withdraw <FiArrowRight />
              </button>
              <button
                onClick={handleReinvestClick}
                className="px-6 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-700/90 text-white font-medium transition-colors backdrop-blur-sm flex items-center gap-2"
              >
                Reinvest <FiArrowRight />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Referral Link</h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className={`text-sm mb-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Left link
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value="https://crownbankers.com/signup?sponsorId=CROWN-10847&position=left"
                        readOnly
                        className={`flex-1 p-3 rounded-xl border backdrop-blur-sm ${
                          isDarkMode
                            ? "bg-gray-700/30 border-gray-600 text-white"
                            : "bg-gray-50/30 border-gray-200"
                        }`}
                      />
                      <button className="px-4 rounded-xl bg-emerald-500/90 hover:bg-emerald-600/90 text-white transition-colors backdrop-blur-sm">
                        Copy link
                      </button>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`text-sm mb-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Right link
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value="https://crownbankers.com/signup?sponsorId=CROWN-10847&position=right"
                        readOnly
                        className={`flex-1 p-3 rounded-xl border backdrop-blur-sm ${
                          isDarkMode
                            ? "bg-gray-700/30 border-gray-600 text-white"
                            : "bg-gray-50/30 border-gray-200"
                        }`}
                      />
                      <button className="px-4 rounded-xl bg-emerald-500/90 hover:bg-emerald-600/90 text-white transition-colors backdrop-blur-sm">
                        Copy link
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10 rounded-lg p-4">
                  My Career : Level 0 -{" "}
                  <span className={isDarkMode ? "text-gray-300" : "text-gray-"}>
                    Next Level: 1 - Bronze
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">●</span>
                      <span>Left Business</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>$0.00</span>
                      <span
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-500"
                        }
                      >
                        Target: $10000.00
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">●</span>
                      <span>Right Business</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>$0.00</span>
                      <span
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-500"
                        }
                      >
                        Target: $10000.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className={`rounded-2xl p-6 w-full max-w-md border ${
              isDarkMode
                ? "bg-gray-800/90 border-gray-700/50 shadow-lg shadow-emerald-900/10"
                : "bg-white border-gray-200/50 shadow-lg"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Withdraw Fund</h3>
              <button onClick={handleCloseModal}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            <p
              className={`text-sm mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Enter the amount you wish to withdraw from your account. Please
              note that the withdrawal request will be approved within 0 to 8
              hours.
            </p>
            <div className="space-y-4">
              {/* Select Wallet */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Select Wallet
                </label>
                <select
                  className={`w-full p-3 rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-emerald-400 text-white"
                      : "bg-gray-50/30 border-gray-200 focus:border-emerald-500"
                  } focus:ring-1 focus:ring-emerald-500 focus:outline-none appearance-none`}
                >
                  <option>ROI Wallet</option>
                  <option>R&B Wallet</option>
                  <option>Extra income wallet</option>
                </select>
              </div>

              {/* Withdrawal Method */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Withdrawal Method
                </label>
                <select
                  className={`w-full p-3 rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-emerald-400 text-white"
                      : "bg-gray-50/30 border-gray-200 focus:border-emerald-500"
                  } focus:ring-1 focus:ring-emerald-500 focus:outline-none appearance-none`}
                >
                  <option>Virtual Card</option>
                  <option>Bank Transfer</option>
                  <option>Crypto Wallet</option>
                </select>
              </div>

              {/* Enter Amount */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Enter Amount
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className={`w-full p-3 rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-emerald-400 text-white placeholder-gray-400"
                      : "bg-gray-50/30 border-gray-200 focus:border-emerald-500"
                  } focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
                />
              </div>

              {/* Enter Security Pin */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Enter Your Security Pin
                </label>
                <input
                  type="password"
                  placeholder="Enter Security Pin"
                  className={`w-full p-3 rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-emerald-400 text-white placeholder-gray-400"
                      : "bg-gray-50/30 border-gray-200 focus:border-emerald-500"
                  } focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
                />
              </div>

              {/* Submit Button */}
              <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors backdrop-blur-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
