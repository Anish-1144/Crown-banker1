import React, { useState } from "react";

export default function Support({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState("submit");
  const [department, setDepartment] = useState("");
  const [service, setService] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState(null);

  const ticketData = [
    {
      id: 1,
      siNo: "TCKT-001",
      department: "Admin Support",
      service: "Package Activation",
      subject: "Activation Delay",
      status: "Open",
      lastUpdated: "2025-03-20",
      document: "doc1.pdf",
    },
    {
      id: 2,
      siNo: "TCKT-002",
      department: "Admin Support",
      service: "Account Issue",
      subject: "Login Problem",
      status: "Closed",
      lastUpdated: "2025-03-21",
      document: "doc2.pdf",
    },
    {
      id: 3,
      siNo: "TCKT-003",
      department: "Admin Support",
      service: "Payment Issue",
      subject: "Payment Failed",
      status: "Pending",
      lastUpdated: "2025-03-22",
      document: "doc3.pdf",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    if (!department || !service || !subject || !description) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Submitting ticket:", {
      department,
      service,
      subject,
      description,
      attachment,
    });
    setDepartment("");
    setService("");
    setSubject("");
    setDescription("");
    setAttachment(null);
    alert("Ticket submitted successfully!");
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
            onClick={() => handleTabChange("submit")}
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-semibold border-b-2 transition-colors ${
              activeTab === "submit"
                ? "border-green-500 text-green-500"
                : isDarkMode
                ? "border-transparent text-gray-400 hover:text-green-500"
                : "border-transparent text-gray-500 hover:text-green-500"
            }`}
          >
            Submit Ticket
          </button>
          <button
            onClick={() => handleTabChange("all")}
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-semibold border-b-2 transition-colors ${
              activeTab === "all"
                ? "border-green-500 text-green-500"
                : isDarkMode
                ? "border-transparent text-gray-400 hover:text-green-500"
                : "border-transparent text-gray-500 hover:text-green-500"
            }`}
          >
            All Tickets
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "submit" && (
          <div
            className={`rounded-2xl p-4 sm:p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10 text-white"
                : "bg-white border-gray-200/50 shadow-lg text-black"
            }`}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Submit Ticket
            </h3>
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Select Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-green-400 text-white"
                      : "bg-gray-50/30 border-gray-200 focus:border-green-500 text-black"
                  } focus:ring-1 focus:ring-green-500 focus:outline-none appearance-none`}
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  <option value="Admin Support">Admin Support</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing Support">Billing Support</option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Select Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-green-400 text-white"
                      : "bg-gray-50/30 border-gray-200 focus:border-green-500 text-black"
                  } focus:ring-1 focus:ring-green-500 focus:outline-none appearance-none`}
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="Package Activation">Package Activation</option>
                  <option value="Account Issue">Account Issue</option>
                  <option value="Payment Issue">Payment Issue</option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Write a Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-green-400 text-white placeholder-gray-400"
                      : "bg-gray-50/30 border-gray-200 focus:border-green-500 text-black placeholder-gray-500"
                  } focus:ring-1 focus:ring-green-500 focus:outline-none`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Description
                </label>
                <textarea
                  placeholder="Write description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm h-24 sm:h-32 resize-none ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 focus:border-green-400 text-white placeholder-gray-400"
                      : "bg-gray-50/30 border-gray-200 focus:border-green-500 text-black placeholder-gray-500"
                  } focus:ring-1 focus:ring-green-500 focus:outline-none`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs sm:text-sm font-medium mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Attachment (optional)
                </label>
                <input
                  type="file"
                  onChange={(e) => setAttachment(e.target.files[0])}
                  className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-700/30 border-gray-600 text-white"
                      : "bg-gray-50/30 border-gray-200 text-black"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors backdrop-blur-sm"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === "all" && (
          <div
            className={`rounded-2xl p-4 sm:p-6 backdrop-blur-sm border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700/50 shadow-lg shadow-emerald-900/10 text-white"
                : "bg-white border-gray-200/50 shadow-lg text-black"
            }`}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              All Tickets
            </h3>
            {/* Mobile-friendly table */}
            <div className="space-y-4 sm:overflow-x-auto">
              {/* Desktop Table */}
              <table className="hidden sm:table w-full text-left">
                <thead>
                  <tr
                    className={`${
                      isDarkMode ? "bg-green-500" : "bg-green-500"
                    } text-white`}
                  >
                    <th className="p-3 text-sm font-semibold">SI No</th>
                    <th className="p-3 text-sm font-semibold">Department</th>
                    <th className="p-3 text-sm font-semibold">Service</th>
                    <th className="p-3 text-sm font-semibold">Subject</th>
                    <th className="p-3 text-sm font-semibold">Status</th>
                    <th className="p-3 text-sm font-semibold">
                      Last Updated Date
                    </th>
                    <th className="p-3 text-sm font-semibold">Document</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketData.map((ticket) => (
                    <tr
                      key={ticket.id}
                      className={`border-b ${
                        isDarkMode
                          ? "border-gray-700 hover:bg-gray-700/30 text-white"
                          : "border-gray-200 hover:bg-gray-50 text-black"
                      }`}
                    >
                      <td className="p-3">{ticket.siNo}</td>
                      <td className="p-3">{ticket.department}</td>
                      <td className="p-3">{ticket.service}</td>
                      <td className="p-3">{ticket.subject}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ticket.status === "Open"
                              ? "bg-green-500/20 text-green-400"
                              : ticket.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                      <td className="p-3">{ticket.lastUpdated}</td>
                      <td className="p-3">
                        <a href="#" className="text-green-500 hover:underline">
                          {ticket.document}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Card Layout */}
              <div className="sm:hidden space-y-4">
                {ticketData.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`p-4 rounded-xl border ${
                      isDarkMode
                        ? "bg-gray-700/30 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-200 text-black"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">SI No:</span>
                      <span>{ticket.siNo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Department:</span>
                      <span>{ticket.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Service:</span>
                      <span>{ticket.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Subject:</span>
                      <span>{ticket.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Status:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ticket.status === "Open"
                            ? "bg-green-500/20 text-green-400"
                            : ticket.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Last Updated:</span>
                      <span>{ticket.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Document:</span>
                      <a href="#" className="text-green-500 hover:underline">
                        {ticket.document}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div
              className={`flex flex-col sm:flex-row justify-between items-center mt-4 p-3 rounded-b-2xl ${
                isDarkMode ? "bg-green-500" : "bg-green-500"
              }`}
            >
              <span
                className={`text-xs sm:text-sm mb-2 sm:mb-0 ${
                  isDarkMode ? "text-gray-300" : "text-white"
                }`}
              >
                Showing 1-3 of {ticketData.length} results
              </span>
              <div className="flex space-x-2">
                <button
                  disabled
                  className={`px-3 sm:px-4 py-1 sm:py-2 text-sm rounded-xl ${
                    isDarkMode
                      ? "bg-gray-600 text-gray-400"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  Previous
                </button>
                <button
                  disabled
                  className={`px-3 sm:px-4 py-1 sm:py-2 text-sm rounded-xl ${
                    isDarkMode
                      ? "bg-gray-600 text-gray-400"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
