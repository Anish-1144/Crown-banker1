import { GitBranch, Users, UserPlus } from "lucide-react";
import { useState } from "react";

const Genealogy = () => {
  const [activeTab, setActiveTab] = useState("Referral");

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "Referral"
              ? "border-b-2 border-green-500 text-green-500"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("Referral")}
        >
          Referral
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "Binary Tree"
              ? "border-b-2 border-green-500 text-green-500"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("Binary Tree")}
        >
          Binary Tree
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "Referral" && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
            Referral
          </h3>

          {/* Search Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search User's ID
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Search User's ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search User's Country
              </label>
              <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>Select...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search User's Email Verification
              </label>
              <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>Select...</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mb-6  max-w-xs">
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Submit
            </button>
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Reset
            </button>
          </div>

          {/* Referral Details Table */}
          <div>
            <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">
              Referral Details
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-300">
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">USER</th>
                    <th className="px-4 py-2">COUNTRY / PHONE</th>
                    <th className="px-4 py-2">POSITION</th>
                    <th className="px-4 py-2">REGISTERED ON</th>
                    <th className="px-4 py-2">STATUS</th>
                    <th className="px-4 py-2">INVESTMENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td colSpan="7" className="px-4 py-4 text-center">
                      No Data
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Showing 0-0 of 0 results
              </span>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Binary Tree" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <Users className="text-green-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Total Network
                </h3>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                247
              </div>
              <div className="flex items-center mt-1">
                <span className="text-green-500 text-sm font-medium">+12</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                  from last month
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <UserPlus className="text-green-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Direct Referrals
                </h3>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                18
              </div>
              <div className="flex items-center mt-1">
                <span className="text-green-500 text-sm font-medium">+3</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                  from last month
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <GitBranch className="text-green-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Network Depth
                </h3>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                5 Levels
              </div>
              <div className="flex items-center mt-1">
                <span className="text-green-500 text-sm font-medium">+1</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                  from last month
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                Network Structure
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This page is under development. Check back soon for your
                complete network visualization.
              </p>

              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg mb-2">
                      JD
                    </div>
                    <div className="text-sm font-medium text-gray-800 dark:text-white mb-6">
                      John Doe (You)
                    </div>

                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mb-4"></div>

                    <div className="grid grid-cols-3 gap-8 w-full">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium text-sm mb-2">
                            U{item}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
                            User {item}
                          </div>

                          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 my-2"></div>

                          <div className="flex justify-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs">
                              {item * 2}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs">
                              {item * 3}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  View Full Network
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Genealogy;
