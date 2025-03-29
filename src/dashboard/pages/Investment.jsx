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
  ChevronDown,
} from "lucide-react";

const Investment = () => {
  const [activeTab, setActiveTab] = useState("plans");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCryptoPopupOpen, setIsCryptoPopupOpen] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

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

  const cryptocurrencies = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      color: "bg-orange-400",
      icon: "https://imgs.search.brave.com/jisgK6auK2h5TE_mO-0n1l648ciEji9RZgVF44Fhp7I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzE2LzY3LzQ0/LzM2MF9GXzIxNjY3/NDQzNl9KVVY0bzFY/cGQyd2RvbVNVNG5F/anZiYW9FMkZ6YzFs/bS5qcGc",
    },
    {
      name: "USDT.TRC20",
      symbol: "USDT",
      color: "bg-teal-600",
      icon: "https://imgs.search.brave.com/ippjo5tP6IC-nWLRBO_kzf_gP7bNcmuwYQqjUPgzzvc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LWFwaS5jaGFu/Z2Vub3cuaW8vdXBs/b2Fkcy91c2R0ZXJj/MjBfNWFlMjE2MThh/YS5zdmc",
    },
    {
      name: "USDT.ERC20",
      symbol: "USDT",
      color: "bg-teal-600",
      icon: "https://imgs.search.brave.com/ippjo5tP6IC-nWLRBO_kzf_gP7bNcmuwYQqjUPgzzvc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LWFwaS5jaGFu/Z2Vub3cuaW8vdXBs/b2Fkcy91c2R0ZXJj/MjBfNWFlMjE2MThh/YS5zdmc",
    },
    {
      name: "USDT.BEP20",
      symbol: "USDT",
      color: "bg-teal-600",
      icon: "https://imgs.search.brave.com/Xgv_YfGb57uFv7jyro39164-W4VGw5Y6CCUdwtHIIMg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzI1/MHBmZS9zdHlsZXMv/Y29tbXVuaXR5SWNv/bl95YXVtc3J4ZmJx/NWQxLnBuZw",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      color: "bg-gray-700",
      icon: "https://imgs.search.brave.com/70qhM02lGNQmPMS24QQBwed6r674qH42l8Q1g8i_TKk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZmL0V0aGVyZXVt/LWljb24tcHVycGxl/LnN2Zw",
    },
    {
      name: "Doge Coin",
      symbol: "DOGE",
      color: "bg-yellow-600",
      icon: "https://imgs.search.brave.com/ZZfzw5nMMPtV4AB0UtXF6PgVRhhvrB7S4iR6dpTo5Xs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJ6/Y3AyL3N0eWxlcy9j/b21tdW5pdHlJY29u/X2dmbHB6b2puZnM2/MjEucG5n",
    },
    {
      name: "Lite Coin",
      symbol: "LTC",
      color: "bg-blue-700",
      icon: "https://imgs.search.brave.com/MmZ_2BnBJoqQlL0oYWG2_ZtQkDJSghldvONHxk8_GKM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzLzNk/YXJ0LzNkYXJ0MTQw/Mi8zZGFydDE0MDIw/MDA5Ni8zMTc2NjA1/Ny1saXRlY29pbi5q/cGc",
    },
    {
      name: "XRP",
      symbol: "XRP",
      color: "bg-black",
      icon: "https://imgs.search.brave.com/92A1eXcLFwYhEKR72ovHdEJiClT17kTKA7FhjSQ4fco/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC94cnAtY3J5/cHRvY3VycmVuY3kt/aWNvbi0yNTZ4MjUz/LTd5MjBzeTVjLnBu/Zw",
    },
    {
      name: "TRON",
      symbol: "TRX",
      color: "bg-red-600",
      icon: "https://imgs.search.brave.com/GWEA9mGRyoj6z77k_qgLto8bSPQEH6WdtISDuUf8xlc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY3J5cHRvLWN1/cnJlbmN5LWFuZC1j/b2luLTIvMjU2L3Ry/b25fdHJuX2NvaW4t/NTEyLnBuZw",
    },
    {
      name: "T",
      symbol: "TRX",
      color: "bg-red-600",
      icon: "https://imgs.search.brave.com/GWEA9mGRyoj6z77k_qgLto8bSPQEH6WdtISDuUf8xlc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY3J5cHRvLWN1/cnJlbmN5LWFuZC1j/b2luLTIvMjU2L3Ry/b25fdHJuX2NvaW4t/NTEyLnBuZw",
    },
    // Added cryptocurrencies
    {
      name: "Binance Coin",
      symbol: "BNB",
      color: "bg-yellow-500",
      icon: "https://imgs.search.brave.com/J5XJ8e2A_XKeQJr5hhxvx35S2jwzrzpz_YND-0EJU2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y2pkb3duZXIvY3J5/cHRvY3VycmVuY3kt/ZmxhdC81MTIvQmlu/YW5jZS1Db2luLUJO/Qi1pY29uLnBuZw",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      color: "bg-blue-500",
      icon: "https://imgs.search.brave.com/MISAphjQnIczMB9_clUSYMsQmEO8l_WepY5LavBzWtM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLWFzc2V0cy5j/b2luYmFzZS5jb20v/ZGEzOWRmZTM2MzJi/ZjdhOWMyNmI1YWZm/OTRmZTcyYmMxYTcw/ODUwYmM0ODhlMGM0/ZDY4YWIzY2Y4N2Rk/YWMyNzdjZDE1NjE0/MjdiOTRhY2I0YjNl/Mzc0NzlhMWY3M2Yx/YzM3ZWQzMTFjMTFh/NzQyZDZlZGY1MTI2/NzJhZWE3YmIvYXNz/ZXRfaWNvbnMvYTU1/MDQ2YmM1M2M1ZGU2/ODZiZjgyYTJkOWQy/ODBiMDA2YmQ4ZDJh/YTFmM2JiYjRlYmEy/OGYwYzY5Yzc1OTdk/YS5wbmc",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      color: "bg-pink-500",
      icon: "https://imgs.search.brave.com/BpGH1mbMxDvc6jQV-kxGOPjNyHnmIeqFsiK9vhLz3vQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLWFzc2V0cy5j/b2luYmFzZS5jb20v/OTk1N2ViZWNkOWY0/ZDZhMmE0Y2Y4Nzc1/NzczNjRlOGM5YmZi/OTM3YzdmODM4NWUx/NTNmYzg3OGU5ZWQz/NzY2YTU2M2NkZDFh/ODA5MDNmNDY1ZjUw/YjRlZGZiNTA4OTI1/MWUwNDVkMzYyYThm/YmU1Yjg4OGI5ZGUx/OGJmY2MwOWEvYXNz/ZXRfaWNvbnMvZjc4/NmQyZjM1NzNmNzdk/Yjg0MWI0MDZiZjYw/N2FjN2RkZmU3MGQ1/MzNhY2M2ZDA1ZjJj/YjNjYjNlYWIxMTky/NS5wbmc",
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      color: "bg-purple-600",
      icon: "https://imgs.search.brave.com/niu_RNrDe4iDXnfIadd-ZyyK9zozr9PIDxqymP3Yn4Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWI2M2QzZTYz/YTUxNzI4MDM1OTU0/MmU4M2ZkZjM4NTNm/NDQ2YTRhMmFkNDc0/NWM3NzYwYjNmYzMx/MTZiMDk0NS9wb2x5/Z29uLnRlY2hub2xv/Z3kv",
    },
    {
      name: "Solana",
      symbol: "SOL",
      color: "bg-green-500",
      icon: "https://imgs.search.brave.com/vA8y8wGcYOsbDE5mHwviKnyY052sS6irnHtcp5PQQAQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1X2hj/czJuL3N0eWxlcy9j/b21tdW5pdHlJY29u/X2o3M3U0ODU2MXk2/ODEucG5n",
    },
    {
      name: "VeChain",
      symbol: "VET",
      color: "bg-blue-600",
      icon: "https://imgs.search.brave.com/VHyYs-rmQ-PYC7mDmG9SGR8h0ajM_-QdoKQZivtL-Vc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzNv/c2pyL3N0eWxlcy9j/b21tdW5pdHlJY29u/X200N2RzZGZtdXVv/OTEucG5n",
    },
    {
      name: "Zilliqa",
      symbol: "ZIL",
      color: "bg-green-600",
      icon: "https://imgs.search.brave.com/5dDPWIKN5C86E8diu0bnO-ZHSbxqQT6AtIVj0OtdXzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWRlbGl2ZXJ5Lm5l/dC80LTVKQzFyM1ZI/QVhwbnJ3V0hCSFJR/L2I4Zjk1MjZlLTky/MTItNGNhNS1mOGQ5/LWM4OTQ5NjA4MzAw/MC9jb2luMTI4.jpeg",
    },
    {
      name: "Bitcoin Cash",
      symbol: "BCH",
      color: "bg-green-400",
      icon: "https://imgs.search.brave.com/rBctwUHsdj_WzShU-HG0sRYcN36PpeMYGmYHvW2Lf4A/rs:fit:40:40:1:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy83/ODAvbGFyZ2UvYml0/Y29pbi1jYXNoLWNp/cmNsZS5wbmc_MTY5/NjUwMTkzMg",
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

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
    setIsCryptoPopupOpen(false);
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
                        className="hover:bg-gray-600 hover:text-white"
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
                <div className="relative mt-1">
                  <button
                    type="button"
                    onClick={() => setIsCryptoPopupOpen(true)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex justify-between items-center"
                  >
                    {selectedCrypto ? (
                      <span className="flex items-center">
                        <span
                          className={`w-6 h-6 rounded-full ${selectedCrypto.color} mr-2 flex items-center justify-center`}
                        >
                          <img
                            src={selectedCrypto.icon}
                            alt={selectedCrypto.name}
                            className="w-4 h-4"
                          />
                        </span>
                        {selectedCrypto.name} ({selectedCrypto.symbol})
                      </span>
                    ) : (
                      "Select cryptocurrency"
                    )}
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Deposit Amount
                </label>
                <input
                  type="number"
                  disabled
                  className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Voucher Amount
                </label>
                <input
                  type="number"
                  disabled
                  className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="0"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Voucher
                </label>
                <select
                  className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="Self"
                >
                  <option value="Self">No option available</option>
                </select>
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

    {/* Cryptocurrency Selection Popup */}
{isCryptoPopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-7xl max-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Select Cryptocurrency
        </h2>
        <button
          onClick={() => setIsCryptoPopupOpen(false)}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="overflow-y-auto flex-grow pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cryptocurrencies.map((crypto, index) => (
            <div
              key={index}
              onClick={() => handleCryptoSelect(crypto)}
              className={`${crypto.color} rounded-xl p-4 cursor-pointer hover:opacity-90 transition-all`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  <img
                    src={crypto.icon}
                    alt={crypto.name}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold">{crypto.name}</h3>
                  <p className="text-white text-opacity-80">
                    {crypto.symbol}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                {/* <div className="relative">
                  <input
                    type="text"
                    placeholder="Amount in USD"
                    className="w-full p-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                  />
                </div> */}
                <button className="w-full rounded-3xl mt-2 py-2 bg-black bg-opacity-30 hover:bg-opacity-40 text-white  font-medium transition-colors">
                  ADD FUND
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Investment;
