import React from "react";
import { FiSearch, FiCalendar, FiFilter, FiPlus } from "react-icons/fi";
import { BiMoney, BiLineChart } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400 text-sm">Let's check your update today</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>
          <button className="p-2 text-xl text-gray-400 hover:text-white">
            K
          </button>
          <button className="p-2 text-xl text-gray-400 hover:text-white">
            🌞
          </button>
          <div className="relative">
            <button className="p-2 text-xl text-gray-400 hover:text-white">
              🔔
            </button>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </div>
          <button className="p-2 text-xl text-gray-400 hover:text-white">
            💬
          </button>
          <button className="p-2 text-xl text-gray-400 hover:text-white">
            🎁
          </button>
          <div className="flex items-center gap-2 ml-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pravatar.cc/100"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-gray-400 text-xs">Super Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-1">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-900 flex items-center justify-center">
                <BiMoney className="text-green-500" />
              </div>
              <span>Total earnings</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                👤
              </div>
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-xs">
                $
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">$7,245.00</h2>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-sm">
              ↑ 3.5% from last week
            </span>
            <div className="h-10 flex-grow">
              <BiLineChart className="text-green-500 w-full h-full" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 col-span-1">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-900 flex items-center justify-center">
                <BiMoney className="text-green-500" />
              </div>
              <span>Total Spending</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                👤
              </div>
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-xs">
                $
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">$7,245.00</h2>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-sm">
              ↑ 3.5% from last week
            </span>
            <div className="h-10 flex-grow">
              <BiLineChart className="text-green-500 w-full h-full" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 col-span-1">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-900 flex items-center justify-center">
                <BiMoney className="text-green-500" />
              </div>
              <span>Spending Goal</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                👤
              </div>
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-xs">
                $
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">$7,245.00</h2>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-sm">
              ↑ 3.5% from last week
            </span>
            <div className="h-10 flex-grow">
              <BiLineChart className="text-green-500 w-full h-full" />
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-1">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold">My Wallet</h3>
            <button className="text-gray-400">⋮</button>
          </div>
          <div className="bg-red-600 rounded-xl p-4 h-40 relative flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="h-10 w-10">
                <div className="h-6 w-10 bg-yellow-400 rounded-sm"></div>
              </div>
              <div className="text-right">
                <span className="text-sm">BankCo.</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs">Balance:</span>
                <span className="text-xs">👁️</span>
              </div>
              <div className="text-xl font-bold">$24,098.00</div>
              <div className="text-right text-sm">VISA</div>
            </div>
          </div>
        </div>

        {/* Revenue Flow Chart */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-2 row-span-1">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold">Revenue Flow</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <span className="text-sm">Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Signed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                <span className="text-sm">Lost</span>
              </div>
              <button className="flex items-center gap-1 text-sm bg-gray-700 px-3 py-1 rounded-lg">
                <span>Jan 10 - Jan 16</span>
                <span>▼</span>
              </button>
            </div>
          </div>

          {/* Placeholder for chart */}
          <div className="h-60 flex items-end justify-between">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month, index) => (
              <div
                key={month}
                className="flex flex-col items-center gap-2 w-full"
              >
                <div
                  className="w-4/5 bg-gray-700 rounded-sm"
                  style={{ height: `${Math.random() * 80 + 20}px` }}
                ></div>
                <span className="text-xs text-gray-400">{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency Donut Chart */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-2 row-span-1">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold">Efficiency</h3>
            <button className="flex items-center gap-1 text-sm bg-gray-700 px-3 py-1 rounded-lg">
              <span>Monthly</span>
              <span>▼</span>
            </button>
          </div>

          <div className="flex h-60">
            {/* Placeholder for donut chart */}
            <div className="w-1/2 flex items-center justify-center">
              <div className="relative h-40 w-40 rounded-full border-8 border-gray-700">
                <div
                  className="absolute top-0 left-0 h-full w-full rounded-full border-t-8 border-r-8 border-green-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                ></div>
                <div
                  className="absolute top-0 left-0 h-full w-full rounded-full border-b-8 border-l-8 border: yellow-400"
                  style={{
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                  }}
                ></div>
                <div className="absolute inset-4 rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-gray-900"></div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="w-1/2 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">$5,230</span>
                  <span className="text-green-500">↑</span>
                </div>
                <p className="text-gray-400">Arrival</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">$6,230</span>
                  <span className="text-green-500">↑</span>
                </div>
                <p className="text-gray-400">Spending</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Goal</span>
                </div>
                <div className="text-right text-xs">13%</div>

                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <span className="text-xs">Spending</span>
                </div>
                <div className="text-right text-xs">28%</div>

                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <span className="text-xs">Others</span>
                </div>
                <div className="text-right text-xs">59%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Transfer */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-1">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold">Quick Transfer</h3>
          </div>

          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-12 rounded-md bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-xs">
                💳
              </div>
              <span>Debit</span>
            </div>
            <button className="flex items-center gap-1 text-sm bg-gray-700 px-3 py-1 rounded-lg">
              <span>$10,431</span>
              <span>▼</span>
            </button>
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-400 mb-2 block">
              Enter amount
            </label>
            <div className="flex border border-gray-700 rounded-lg p-2">
              <span className="text-lg">$</span>
              <input
                type="text"
                className="bg-transparent border-none focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              <div className="h-8 w-8 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>

        {/* Team Chat */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-1">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold">Team Chat</h3>
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-gray-800"></div>
              <div className="h-8 w-8 rounded-full bg-red-500 border-2 border-gray-800"></div>
              <button className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs ml-1">
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex gap-3 items-start">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm">Hi. What can I help you with?</p>
                <p className="text-xs text-gray-400 mt-1">8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-gray-800 rounded-xl p-5 col-span-4">
          <div className="mb-6">
            <div className="relative mb-6">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or others..."
                className="bg-gray-900 rounded-lg pl-10 pr-4 py-3 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-700"
              />
            </div>

            <div className="flex justify-between">
              <div className="grid grid-cols-4 gap-4 w-full">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Location</h4>
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-sm">State or province</span>
                    <span>▼</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Amount Spent</h4>
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-sm">State or province</span>
                    <span>▼</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">
                    Transaction list Date
                  </h4>
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-sm">State or province</span>
                    <FiCalendar />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">
                    Type of transaction
                  </h4>
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-sm">State or province</span>
                    <span>▼</span>
                  </div>
                </div>
              </div>
              <button className="ml-4 flex items-center gap-2 text-sm bg-green-900 text-green-500 px-4 py-2 rounded-lg self-end">
                <FiFilter />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
