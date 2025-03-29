import {
  BarChart,
  LineChart,
  PieChart,
  Wallet,
  DollarSign,
  TrendingUp,
  Link,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  const userData = {
    userId: "CROWN-108470",
    name: "john doe",
    balance: "$0.00",
    sponsorEmail: "crownbankersofficial@gmail.com",
    currency: "US Dollar",
    status: "Active",
    referralLinks: {
      left: "https://crownbankers.com/signup?sponsorId=CROWN-108470&position=left",
      right:
        "https://crownbankers.com/signup?sponsorId=CROWN-108470&position=right",
    },
    wallets: {
      roi: "$0.00",
      rb: "$0.00",
      extraIncome: "$0.00",
      coupons: "$0.00",
    },
    totals: {
      investment: "$0.00",
      withdrawal: "$0.00",
    },
    career: {
      currentLevel: 0,
      nextLevel: "1 - Bronze",
      leftBusiness: { current: "$0.00", target: "$10000.00" },
      rightBusiness: { current: "$0.00", target: "$10000.00" },
    },
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    // Add withdrawal logic here
    setIsWithdrawOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Your Balance"
          value={userData.balance}
          change="0%"
          period="Current"
          icon={<DollarSign className="text-green-500" />}
        />
        <StatCard
          title="Total Investment"
          value={userData.totals.investment}
          change="0%"
          period="All time"
          icon={<Wallet className="text-green-500" />}
        />
        <StatCard
          title="Total Withdrawal"
          value={userData.totals.withdrawal}
          change="0%"
          period="All time"
          icon={<TrendingUp className="text-green-500" />}
        />
      </div>
      {/* Wallets section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Wallet Overview
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ROI Wallet
              </p>
              <p className="text-lg font-semibold">{userData.wallets.roi}</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                R&B Wallet
              </p>
              <p className="text-lg font-semibold">{userData.wallets.rb}</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Extra Income Wallet
              </p>
              <p className="text-lg font-semibold">
                {userData.wallets.extraIncome}
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Voucher
              </p>
              <p className="text-lg font-semibold">
                {userData.wallets.coupons}
              </p>
            </div>
            <div className="col-span-2 flex justify-center items-center mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold"
                onClick={() => setIsWithdrawOpen(true)}
              >
                Withdraw
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-semibold ml-4"
                onClick={() => navigate("/dashboard/investment")}
              >
                Reinvest
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Wallet Settings
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                User ID: {userData.userId}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Name: {userData.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Status: {userData.status}
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                Withdrawal Wallet Address (Tether-TRC20)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Wallet Address"
              />
              <p className="text-xs text-gray-500 mt-1">
                *To keep your money safe, this address cannot be changed later
              </p>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
              Update Address
            </button>
          </div>
        </div>
      </div>

      {/* Referral Links and Career Progress in one row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
              <Award className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Career Progress
            </h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Current Level
                </p>
                <p className="text-lg font-semibold">
                  {userData.career.currentLevel}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Next Level
                </p>
                <p className="text-lg font-semibold">
                  {userData.career.nextLevel}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Left Business
                </p>
                <p className="text-lg font-semibold">
                  {userData.career.leftBusiness.current} /{" "}
                  {userData.career.leftBusiness.target}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Right Business
                </p>
                <p className="text-lg font-semibold">
                  {userData.career.rightBusiness.current} /{" "}
                  {userData.career.rightBusiness.target}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Referral Links Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
              <Link className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Referral Links
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Left Link
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 break-all border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  {userData.referralLinks.left}
                </p>
              </div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 ml-4 rounded-md text-sm h-10 w-20"
                onClick={() =>
                  navigator.clipboard.writeText(userData.referralLinks.left)
                }
              >
                Copy
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Right Link
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 break-all border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  {userData.referralLinks.right}
                </p>
              </div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 ml-2 rounded-md text-sm h-10 w-20"
                onClick={() =>
                  navigator.clipboard.writeText(userData.referralLinks.right)
                }
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Career Progress Card */}
      </div>

      {/* Wallets section */}

      {/* Withdraw Popup */}
      {isWithdrawOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Withdraw Funds
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Enter the amount you wish to withdraw from your account. Please
              note that the withdrawal request will be approved within 0 to 8
              hours
            </p>
            <form onSubmit={handleWithdrawSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Select Wallet
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="roi">ROI Wallet</option>
                    {/* Add more wallet options as needed */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Withdrawal Method
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="virtual-card"> Withdrawal Wallet</option>
                    {/* <option value="virtual-card"></option>
                    <option value="virtual-card"></option> */}

                    {/* Add more withdrawal methods as needed */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Enter Amount
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Enter Your Security Pin
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
                    onClick={() => setIsWithdrawOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, period, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {title}
        </h3>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {value}
          </div>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-sm font-medium">{change}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
              {period}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
