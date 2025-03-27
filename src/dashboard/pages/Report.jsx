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

  // Sample ROI data
  const roiData = [
    {
      plan: "Basic Plan",
      investment: "$1,000",
      returns: "$1,150",
      roi: "15%",
      period: "30 days",
    },
    {
      plan: "Standard Plan",
      investment: "$5,000",
      returns: "$6,000",
      roi: "20%",
      period: "60 days",
    },
    {
      plan: "Premium Plan",
      investment: "$10,000",
      returns: "$13,000",
      roi: "30%",
      period: "90 days",
    },
    {
      plan: "Elite Plan",
      investment: "$25,000",
      returns: "$35,000",
      roi: "40%",
      period: "180 days",
    },
    {
      plan: "VIP Plan",
      investment: "$50,000",
      returns: "$75,000",
      roi: "50%",
      period: "365 days",
    },
  ];

  // Sample BI data
  const biData = [
    {
      month: "January",
      revenue: "$12,500",
      expenses: "$8,200",
      profit: "$4,300",
      growth: "+5.2%",
    },
    {
      month: "February",
      revenue: "$14,200",
      expenses: "$9,100",
      profit: "$5,100",
      growth: "+18.6%",
    },
    {
      month: "March",
      revenue: "$15,800",
      expenses: "$9,500",
      profit: "$6,300",
      growth: "+23.5%",
    },
    {
      month: "April",
      revenue: "$16,300",
      expenses: "$10,200",
      profit: "$6,100",
      growth: "-3.2%",
    },
    {
      month: "May",
      revenue: "$18,500",
      expenses: "$11,300",
      profit: "$7,200",
      growth: "+18.0%",
    },
  ];

  // Sample RI data
  const riData = [
    {
      date: "2023-06-01",
      source: "Direct Investment",
      amount: "$2,500",
      status: "Completed",
    },
    {
      date: "2023-05-15",
      source: "Referral Bonus",
      amount: "$350",
      status: "Completed",
    },
    {
      date: "2023-05-10",
      source: "Profit Share",
      amount: "$1,200",
      status: "Completed",
    },
    {
      date: "2023-05-05",
      source: "Staking Rewards",
      amount: "$800",
      status: "Completed",
    },
    {
      date: "2023-05-01",
      source: "Affiliate Commission",
      amount: "$450",
      status: "Completed",
    },
  ];

  // Sample Extra Income data
  const extraIncomeData = [
    {
      date: "2023-06-02",
      source: "Referral Bonus",
      amount: "$120",
      level: "Level 1",
    },
    {
      date: "2023-05-28",
      source: "Referral Bonus",
      amount: "$75",
      level: "Level 2",
    },
    {
      date: "2023-05-20",
      source: "Referral Bonus",
      amount: "$50",
      level: "Level 3",
    },
    { date: "2023-05-15", source: "Team Bonus", amount: "$300", level: "N/A" },
    {
      date: "2023-05-10",
      source: "Leadership Bonus",
      amount: "$500",
      level: "N/A",
    },
  ];

  // Sample Withdrawal data
  const withdrawalData = [
    {
      date: "2023-06-01",
      amount: "$1,500",
      method: "Bank Transfer",
      status: "Completed",
      txid: "WD12345",
    },
    {
      date: "2023-05-15",
      amount: "$2,000",
      method: "Bitcoin",
      status: "Completed",
      txid: "WD12346",
    },
    {
      date: "2023-05-01",
      amount: "$1,000",
      method: "Bank Transfer",
      status: "Completed",
      txid: "WD12347",
    },
    {
      date: "2023-04-15",
      amount: "$3,000",
      method: "Ethereum",
      status: "Completed",
      txid: "WD12348",
    },
    {
      date: "2023-04-01",
      amount: "$500",
      method: "USDT",
      status: "Completed",
      txid: "WD12349",
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

          {activeTab === "roi" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Investment Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Investment Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Returns
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      ROI
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Period
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
                        {item.plan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.investment}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
                        {item.returns}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.roi}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.period}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* BI Report */}
           {/* BI Report */}
{activeTab === "bi" && (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Month
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Revenue
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Expenses
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Profit
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Growth
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
              {item.month}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.revenue}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400">
              {item.expenses}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
              {item.profit}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <span
                className={
                  item.growth.startsWith("+")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }
              >
                {item.growth}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{/* RI Report */}
{activeTab === "ri" && (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Source
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {riData.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-600 hover:text-white" // Updated hover class
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              {item.source}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
              {item.amount}
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

{/* Extra Income Report */}
{activeTab === "extra" && (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Source
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Level
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {extraIncomeData.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-600 hover:text-white" // Updated hover class
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              {item.source}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
              {item.amount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.level}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{/* Withdrawal Report */}
{activeTab === "withdrawal" && (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Method
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Transaction ID
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {withdrawalData.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-600 hover:text-white" // Updated hover class
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400 font-medium">
              {item.amount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.method}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
              {item.txid}
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
