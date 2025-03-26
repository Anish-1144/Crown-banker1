import { useState, useEffect } from "react";
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

export default function Sidebar({ isDarkMode, isMobile, closeSidebar }) {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      closeSidebar();
    }
  }, [location, isMobile, closeSidebar]);

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
        isOpen ? "w-64" : "w-20"
      } lg:shadow-none shadow-xl`}
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
          {isOpen && (
            <div>
              <h1 className="text-lg font-bold">Crown Banker</h1>
              <p className="text-xs text-gray-400">Investment Platform</p>
            </div>
          )}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`hidden lg:flex p-2 rounded-lg ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              onClick={() => isMobile && closeSidebar()}
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
              {isOpen && <span className="ml-4">{item.name}</span>}
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
              onClick={() => isMobile && closeSidebar()}
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
              {isOpen && <span className="ml-4">{item.name}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
