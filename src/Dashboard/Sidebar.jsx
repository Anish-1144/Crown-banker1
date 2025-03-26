import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Wallet,
  Ticket,
  Network,
  FileText,
  LogOut,
  HelpCircle,
} from "lucide-react";

export default function Sidebar({ isDarkMode, isSidebarOpen, toggleSidebar }) {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
    { path: "/dashboard/investment", name: "Investment", icon: Wallet },
    { path: "/dashboard/vouchers", name: "Vouchers", icon: Ticket },
    { path: "/dashboard/genealogy", name: "Genealogy", icon: Network },
    { path: "/dashboard/report", name: "Report", icon: FileText },
  ];

  const bottomItems = [
    { path: "/dashboard/support", name: "Support", icon: HelpCircle },
    { path: "/dashboard/logout", name: "Sign Out", icon: LogOut },
  ];

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } h-screen flex flex-col transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      } shadow-xl md:shadow-none`}
    >
      {/* Logo Section with Menu Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <Link to="/" className="flex items-center gap-3 min-w-max">
          <div
            className={`w-10 h-10 rounded-lg bg-transparent flex items-center justify-center font-bold text-white`}
          >
            <img
              src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742818322/logo1_mp91bc.png"
              alt="logo1"
            />
          </div>
          {isSidebarOpen && (
            <div>
              <h1 className="text-lg font-bold">Crown Banker</h1>
              <p className="text-xs text-gray-400">Investment Platform</p>
            </div>
          )}
        </Link>
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-lg ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Main Menu Items */}
      <div className="flex-1 py-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => window.innerWidth < 768 && toggleSidebar()} // Close on mobile after click
              className={`flex items-center px-6 py-3 transition-colors ${
                isActive
                  ? isDarkMode
                    ? "bg-gray-700 text-green-500"
                    : "bg-gray-100 text-green-600"
                  : isDarkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={20} className={isActive ? "text-green-500" : ""} />
              {isSidebarOpen && <span className="ml-4">{item.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* Bottom Menu Items */}
      <div className="border-t border-gray-700">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => window.innerWidth < 768 && toggleSidebar()} // Close on mobile after click
              className={`flex items-center px-6 py-3 transition-colors ${
                isActive
                  ? isDarkMode
                    ? "bg-gray-700 text-green-500"
                    : "bg-gray-100 text-green-600"
                  : isDarkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={20} className={isActive ? "text-green-500" : ""} />
              {isSidebarOpen && <span className="ml-4">{item.name}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
