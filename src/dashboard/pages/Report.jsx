"use client";

import { useState } from "react";
import {
  Download,
  Filter,
  Calendar,
  BarChart,
  PieChart,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const Report = () => {
  const [activeTab, setActiveTab] = useState("roi");

  // Sample report data
  const reports = [
    {
      name: "Monthly Income Statement",
      date: "Jun 01, 2023",
      type: "PDF",
      size: "1.2 MB",
    },
    {
      name: "Quarterly Financial Report",
      date: "Apr 15, 2023",
      type: "XLSX",
      size: "3.5 MB",
    },
    {
      name: "Annual Tax Summary",
      date: "Jan 31, 2023",
      type: "PDF",
      size: "2.8 MB",
    },
    {
      name: "Investment Performance",
      date: "May 10, 2023",
      type: "PDF",
      size: "1.5 MB",
    },
    {
      name: "Expense Breakdown",
      date: "Jun 15, 2023",
      type: "XLSX",
      size: "2.1 MB",
    },
  ];

  // Updated ROI data with new field structure
  const roiData = [
    {
      id: "INV001",
      package: "Basic Plan",
      investmentAmount: "$1,000",
      date: "2023-01-15",
      expiryDate: "2023-02-14",
      roi: "15%",
    },
    {
      id: "INV002",
      package: "Standard Plan",
      investmentAmount: "$5,000",
      date: "2023-02-01",
      expiryDate: "2023-04-01",
      roi: "20%",
    },
    {
      id: "INV003",
      package: "Premium Plan",
      investmentAmount: "$10,000",
      date: "2023-03-10",
      expiryDate: "2023-06-08",
      roi: "30%",
    },
    {
      id: "INV004",
      package: "Elite Plan",
      investmentAmount: "$25,000",
      date: "2023-04-05",
      expiryDate: "2023-10-02",
      roi: "40%",
    },
    {
      id: "INV005",
      package: "VIP Plan",
      investmentAmount: "$50,000",
      date: "2023-05-20",
      expiryDate: "2024-05-19",
      roi: "50%",
    },
  ];

  // Updated BI data with new field structure
  const biData = [
    {
      siNumber: "BI001",
      date: "2023-01-31",
      amount: "$12,500",
      percentage: "8.5%",
      status: "Completed",
    },
    {
      siNumber: "BI002",
      date: "2023-02-28",
      amount: "$14,200",
      percentage: "9.2%",
      status: "Completed",
    },
    {
      siNumber: "BI003",
      date: "2023-03-31",
      amount: "$15,800",
      percentage: "10.3%",
      status: "Completed",
    },
    {
      siNumber: "BI004",
      date: "2023-04-30",
      amount: "$16,300",
      percentage: "7.8%",
      status: "Completed",
    },
    {
      siNumber: "BI005",
      date: "2023-05-31",
      amount: "$18,500",
      percentage: "11.5%",
      status: "Completed",
    },
  ];

  // Updated RI data with new field structure
  const riData = [
    {
      siNumber: "RI001",
      date: "2023-06-01",
      referralUser: "John Smith",
      position: "Left",
      package: "Premium Plan",
      referralAmount: "$500",
    },
    {
      siNumber: "RI002",
      date: "2023-05-15",
      referralUser: "Mary Johnson",
      position: "Right",
      package: "Standard Plan",
      referralAmount: "$250",
    },
    {
      siNumber: "RI003",
      date: "2023-05-10",
      referralUser: "Robert Davis",
      position: "Left",
      package: "Elite Plan",
      referralAmount: "$750",
    },
    {
      siNumber: "RI004",
      date: "2023-05-05",
      referralUser: "Sarah Wilson",
      position: "Right",
      package: "Basic Plan",
      referralAmount: "$100",
    },
    {
      siNumber: "RI005",
      date: "2023-05-01",
      referralUser: "Michael Brown",
      position: "Left",
      package: "VIP Plan",
      referralAmount: "$1,000",
    },
  ];

  // Updated Extra Income data with new field structure
  const extraIncomeData = [
    {
      siNumber: "EI001",
      achievement: "Team Sales Target",
      rewardAmount: "$1,200",
      date: "2023-06-02",
    },
    {
      siNumber: "EI002",
      achievement: "Leadership Bonus",
      rewardAmount: "$750",
      date: "2023-05-28",
    },
    {
      siNumber: "EI003",
      achievement: "Fast Start Bonus",
      rewardAmount: "$500",
      date: "2023-05-20",
    },
    {
      siNumber: "EI004",
      achievement: "Rank Advancement",
      rewardAmount: "$2,000",
      date: "2023-05-15",
    },
    {
      siNumber: "EI005",
      achievement: "Global Pool Share",
      rewardAmount: "$1,500",
      date: "2023-05-10",
    },
  ];

  // Updated Withdrawal data with new field structure
  const withdrawalData = [
    {
      siNumber: "WD001",
      date: "2023-06-01",
      amount: "$1,500",
      charges: "$45",
      withdrawalMethod: "Bank Transfer",
      merchant: "Chase Bank",
      cryptoType: "N/A",
      walletType: "N/A",
      finalAmount: "$1,455",
      status: "Completed",
    },
    {
      siNumber: "WD002",
      date: "2023-05-15",
      amount: "$2,000",
      charges: "$20",
      withdrawalMethod: "Cryptocurrency",
      merchant: "Binance",
      cryptoType: "Bitcoin",
      walletType: "BTC",
      finalAmount: "$1,980",
      status: "Completed",
    },
    {
      siNumber: "WD003",
      date: "2023-05-01",
      amount: "$1,000",
      charges: "$30",
      withdrawalMethod: "Bank Transfer",
      merchant: "Wells Fargo",
      cryptoType: "N/A",
      walletType: "N/A",
      finalAmount: "$970",
      status: "Completed",
    },
    {
      siNumber: "WD004",
      date: "2023-04-15",
      amount: "$3,000",
      charges: "$25",
      withdrawalMethod: "Cryptocurrency",
      merchant: "Coinbase",
      cryptoType: "Ethereum",
      walletType: "ETH",
      finalAmount: "$2,975",
      status: "Completed",
    },
    {
      siNumber: "WD005",
      date: "2023-04-01",
      amount: "$500",
      charges: "$5",
      withdrawalMethod: "Cryptocurrency",
      merchant: "Binance",
      cryptoType: "USDT",
      walletType: "TRC20",
      finalAmount: "$495",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center"></div>

      {/* Report tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("roi")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "roi"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-600"
              }`}
            >
              <TrendingUp size={16} className="inline mr-2" />
              ROI Report
            </button>
            <button
              onClick={() => setActiveTab("bi")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "bi"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-600"
              }`}
            >
              <BarChart size={16} className="inline mr-2" />
              BI Report
            </button>
            <button
              onClick={() => setActiveTab("ri")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "ri"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <PieChart size={16} className="inline mr-2" />
              RI Report
            </button>
            <button
              onClick={() => setActiveTab("extra")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "extra"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <DollarSign size={16} className="inline mr-2" />
              Extra Income Report
            </button>
            <button
              onClick={() => setActiveTab("withdrawal")}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "withdrawal"
                  ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <Download size={16} className="inline mr-2" />
              Withdrawal Report
            </button>
          </nav>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {activeTab === "roi" && "Return on Investment Report"}
              {activeTab === "bi" && "Business Intelligence Report"}
              {activeTab === "ri" && "Revenue Income Report"}
              {activeTab === "extra" && "Extra Income Report"}
              {activeTab === "withdrawal" && "Withdrawal Report"}
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <select className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
                  <option>All Reports</option>
                  <option>Income</option>
                  <option>Expenses</option>
                  <option>Investments</option>
                </select>
                <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <div className="relative">
                <select className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>This Year</option>
                  <option>Last Year</option>
                </select>
                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* ROI Report - Updated with new columns */}
          {activeTab === "roi" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Package
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Investment Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      ROI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {roiData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-600" // Updated hover class
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.package}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.investmentAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.expiryDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.roi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* BI Report - Updated with new columns */}
          {activeTab === "bi" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      SI Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Percentage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {biData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-600 hover:text-white" // Updated hover class
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.siNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.percentage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* RI Report - Updated with new columns */}
          {activeTab === "ri" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      SI Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Referral User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Package
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Referral Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {riData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-600 hover:text-white" // Updated hover class
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.siNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.referralUser}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.package}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.referralAmount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Extra Income Report - Updated with new columns */}
          {activeTab === "extra" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      SI Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Achievement
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Reward Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {extraIncomeData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-600 hover:text-white" // Updated hover class
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.siNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.achievement}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.rewardAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Withdrawal Report - Updated with new columns */}
          {activeTab === "withdrawal" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      SI Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Charges
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Withdrawal Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Merchant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Crypto Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Wallet Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Final Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {withdrawalData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-600 hover:text-white" // Updated hover class
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.siNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400">
                        {item.charges}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.withdrawalMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.merchant}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.cryptoType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.walletType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.finalAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
