import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Menu } from "lucide-react";

export default function DashboardLayout() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      }`}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className={`lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } transition-colors`}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen lg:sticky ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 z-40`}
      >
        <Sidebar
          isDarkMode={isDarkMode}
          isMobile={isSidebarOpen} // Dynamic based on sidebar state
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className={`fixed inset-0 z-30 lg:hidden ${
            isDarkMode ? "bg-black bg-opacity-50" : "bg-gray-800 bg-opacity-30"
          }`}
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
          }`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
