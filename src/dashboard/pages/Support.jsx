"use client";

import { useState } from "react";
import {
  MessageSquare,
  HelpCircle,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  ChevronRight,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const Support = () => {
  const [activeTab, setActiveTab] = useState("new");

  // Sample ticket data
  const tickets = [
    {
      id: "TKT-1234",
      subject: "Payment not received",
      status: "open",
      date: "2023-05-15",
      lastUpdate: "2023-05-16",
      messages: 3,
      priority: "High",
    },
    {
      id: "TKT-1235",
      subject: "Account verification issue",
      status: "closed",
      date: "2023-05-10",
      lastUpdate: "2023-05-12",
      messages: 5,
      priority: "Medium",
    },
    {
      id: "TKT-1236",
      subject: "How to withdraw funds?",
      status: "pending",
      date: "2023-05-08",
      lastUpdate: "2023-05-09",
      messages: 2,
      priority: "Low",
    },
    {
      id: "TKT-1237",
      subject: "Investment plan questions",
      status: "open",
      date: "2023-05-18",
      lastUpdate: "2023-05-19",
      messages: 1,
      priority: "Medium",
    },
    {
      id: "TKT-1238",
      subject: "Referral bonus not credited",
      status: "pending",
      date: "2023-05-14",
      lastUpdate: "2023-05-15",
      messages: 4,
      priority: "High",
    },
  ];

  // Sample FAQ data
//   const faqs = [
//     {
//       question: "How do I reset my password?",
//       answer:
//         "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password.",
//     },
//     {
//       question: "How long does KYC verification take?",
//       answer:
//         "KYC verification typically takes 24-48 hours to process once all required documents are submitted correctly.",
//     },
//     {
//       question: "What payment methods are accepted?",
//       answer:
//         "We accept credit/debit cards, bank transfers, and various cryptocurrencies including Bitcoin, Ethereum, and USDT.",
//     },
//     {
//       question: "How do I withdraw my earnings?",
//       answer:
//         "Go to the Withdrawal section, select your preferred payment method, enter the amount you wish to withdraw, and follow the prompts to complete the process.",
//     },
//   ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main support content */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-6">
              <h2 className="text-2xl font-bold text-white">Support </h2>
              <p className="text-green-100">
                Get help with your account and services
              </p>

              {/* Search bar */}
            
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("new")}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "new"
                      ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  New Ticket
                </button>
                <button
                  onClick={() => setActiveTab("previous")}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "previous"
                      ? "border-b-2 border-green-500 text-green-600 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <HelpCircle size={16} className="inline mr-2" />
                  My Tickets
                </button>
               
              </nav>
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === "new" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Submit a New Support Ticket
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Brief description of your issue"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Category
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Account Issues</option>
                        <option>Payment Problems</option>
                        <option>Technical Support</option>
                        <option>Feature Request</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Priority
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Please provide as much detail as possible about your issue"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Attachments (Optional)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 dark:text-gray-400">
                            <label className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-green-600 dark:text-green-400 hover:text-green-500 focus-within:outline-none">
                              <span>Upload files</span>
                              <input type="file" multiple className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            PNG, JPG, PDF up to 10MB each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "previous" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Your Support Tickets
                    </h3>

                    <div className="relative">
                      <select className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
                        <option>All Tickets</option>
                        <option>Open Tickets</option>
                        <option>Pending Tickets</option>
                        <option>Closed Tickets</option>
                      </select>
                      <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Ticket ID
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Subject
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Priority
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {tickets.map((ticket) => (
                          <tr
                            key={ticket.id}
                            className="hover:bg-gray-50 dark:hover:bg-gray-750"
                          >
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                              {ticket.id}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                              {ticket.subject}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  ticket.status === "open"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                    : ticket.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {ticket.status === "open" && (
                                  <CheckCircle
                                    size={12}
                                    className="inline mr-1"
                                  />
                                )}
                                {ticket.status === "pending" && (
                                  <Clock size={12} className="inline mr-1" />
                                )}
                                {ticket.status === "closed" && (
                                  <XCircle size={12} className="inline mr-1" />
                                )}
                                {ticket.status.charAt(0).toUpperCase() +
                                  ticket.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  ticket.priority === "High"
                                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                    : ticket.priority === "Medium"
                                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                }`}
                              >
                                {ticket.priority}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {ticket.date}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mr-3">
                                View
                              </button>
                              {ticket.status !== "closed" && (
                                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                                  Close
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {tickets.length === 0 && (
                    <div className="text-center py-8">
                      <HelpCircle size={48} className="mx-auto text-gray-400" />
                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                        You don't have any support tickets yet.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "faq" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-50 dark:bg-gray-750 px-4 py-3 flex justify-between items-center cursor-pointer">
                          <h4 className="font-medium text-gray-700 dark:text-gray-300">
                            {faq.question}
                          </h4>
                          <ChevronRight size={18} className="text-gray-400" />
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-gray-600 dark:text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                      Can't find what you're looking for? Submit a new support
                      ticket.
                    </p>
                    <button
                      onClick={() => setActiveTab("new")}
                      className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Create New Ticket
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact info card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone size={18} className="text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Support
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +44 7452237405
                  </p>
                 
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail size={18} className="text-green-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Support
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Website: crownbankers.com
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    24/7 response time
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  {/* <Globe size={18} className="text-green-500" /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Support status */}
        </div>
      </div>
    </div>
  );
};

export default Support;
