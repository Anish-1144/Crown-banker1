import { useState } from "react";

export default function Report({ isDarkMode }) {
  const [activeReport, setActiveReport] = useState("withdrawal");

  const reports = {
    withdrawal: {
      headers: [
        "SI NO",
        "DATE",
        "AMOUNT",
        "CHARGES",
        "WITHDRAWAL METHOD",
        "MERCHANT",
        "CRYPTO TYPE",
        "WALLET TYPE",
        "FINAL AMOUNT",
        "STATUS",
      ],
      data: [],
    },
    roi: {
      headers: [
        "ID",
        "PACKAGE",
        "INVESTED AMOUNT",
        "DATE",
        "EXPIRY DATE",
        "ROI",
      ],
      data: [],
    },
    bi: {
      headers: ["SI NO", "DATE", "AMOUNT", "PERCENTAGE", "STATUS"],
      data: [],
    },
    careerReward: {
      headers: ["SI NO", "ACHIEVEMENT", "REWARD AMOUNT($)", "DATE"],
      data: [],
    },
    referral: {
      headers: [
        "SI NO",
        "DATE",
        "REFERRAL USER",
        "POSITION",
        "PACKAGE",
        "REFERRAL AMOUNT",
      ],
      data: [],
    },
  };

  return (
    <div
      className={`p-4 sm:p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-transparent text-white"
      }`}
    >
      {/* Report Type Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
        <button
          onClick={() => setActiveReport("withdrawal")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeReport === "withdrawal"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          Withdrawal Report
        </button>
        <button
          onClick={() => setActiveReport("roi")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeReport === "roi"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          ROI Report
        </button>
        <button
          onClick={() => setActiveReport("bi")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeReport === "bi"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          BI Report
        </button>
        <button
          onClick={() => setActiveReport("careerReward")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeReport === "careerReward"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          Career Reward Report
        </button>
        <button
          onClick={() => setActiveReport("referral")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeReport === "referral"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          Referral Report
        </button>
      </div>

      {/* Report Content */}
      <div className="space-y-4">
        <h2
          className={`text-lg sm:text-xl font-semibold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {activeReport.charAt(0).toUpperCase() + activeReport.slice(1)} Report
        </h2>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table
            className={`min-w-full border-collapse ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <thead>
              <tr className="bg-green-500 text-white">
                {reports[activeReport].headers.map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-4 text-left font-semibold whitespace-nowrap text-sm sm:text-base"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={isDarkMode ? "bg-gray-800" : "bg-white"}>
              {reports[activeReport].data.length === 0 ? (
                <tr>
                  <td
                    colSpan={reports[activeReport].headers.length}
                    className={`py-4 px-4 text-center border-t ${
                      isDarkMode
                        ? "border-gray-700 text-gray-400"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    No Data
                  </td>
                </tr>
              ) : (
                reports[activeReport].data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`py-3 px-4 border-t whitespace-nowrap text-sm sm:text-base ${
                          isDarkMode ? "border-gray-700" : "border-gray-200"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="sm:hidden space-y-4">
          {reports[activeReport].data.length === 0 ? (
            <div
              className={`p-4 text-center rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 text-gray-400 border-gray-700"
                  : "bg-white text-gray-500 border-gray-200"
              } border`}
            >
              No Data
            </div>
          ) : (
            reports[activeReport].data.map((row, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-200 text-gray-800"
                }`}
              >
                {Object.entries(row).map(([key, value], cellIndex) => (
                  <div
                    key={cellIndex}
                    className="flex justify-between py-1 text-sm"
                  >
                    <span className="font-semibold">
                      {reports[activeReport].headers[cellIndex]}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center mt-4 p-3 rounded-lg bg-green-500 text-white`}
        >
          <span className="text-xs sm:text-sm mb-2 sm:mb-0">
            Showing 1-0 of 0 results
          </span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm rounded hover:bg-green-600 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 text-sm rounded hover:bg-green-600 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
