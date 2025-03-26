import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Menu } from "lucide-react";

export default function DashboardLayout() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode to match the image
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to true for desktop

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`} // Dark: bg-gray-900, Light: bg-gray-100
    >
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className={`md:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg ${
          isDarkMode
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-green-400 text-white hover:bg-green-500"
        } transition-colors`} // Use green accents to match the image
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 h-screen md:sticky z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`} // Simplified visibility logic
      >
        <Sidebar
          isDarkMode={isDarkMode}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className={`fixed inset-0 z-30 md:hidden ${
            isDarkMode ? "bg-black bg-opacity-50" : "bg-gray-800 bg-opacity-30"
          }`} // Overlay for mobile
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <DashboardNavbar
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`flex-1 overflow-y-auto p-4 md:p-6 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
          }`} // Match main container background
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
