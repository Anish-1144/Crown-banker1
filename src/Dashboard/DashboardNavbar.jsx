import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Sun,
  Moon,
  Bell,
  Mail,
  Gift,
  ChevronDown,
  Menu,
  MessageSquare,
  User,
} from "lucide-react";

export default function DashboardNavbar({
  toggleTheme,
  isDarkMode,
  toggleSidebar,
}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New Investment",
      message: "Your investment of $1000 has been confirmed",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Voucher Claimed",
      message: "Your voucher CB123 has been successfully claimed",
      time: "5 hours ago",
      isRead: false,
    },
    {
      id: 3,
      title: "Welcome!",
      message: "Welcome to Crown Banker Investment Platform",
      time: "1 day ago",
      isRead: true,
    },
  ];

  const handleNavigate = (path) => {
    navigate(`/dashboard${path}`);
    setIsProfileOpen(false); // Close the dropdown after navigation
  };

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } py-4 px-4 md:px-6 flex items-center justify-between border-b ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      {/* Left side - Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-700 rounded-lg"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-400 hidden md:block">
            Let's check your update today
          </p>
        </div>
      </div>

      {/* Right side - Search, Theme, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* Search - Hidden on mobile */}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          } rounded-lg hidden md:block`}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`p-2 ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            } rounded-lg relative hidden md:block`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notification Popup */}
          {isNotificationOpen && (
            <div
              className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border overflow-hidden z-50`}
            >
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b ${
                      isDarkMode ? "border-gray-700" : "border-gray-200"
                    } ${
                      !notification.isRead
                        ? isDarkMode
                          ? "bg-gray-700/50"
                          : "bg-gray-50"
                        : ""
                    } hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center border-t border-gray-200">
                <button className="text-green-500 hover:text-green-600 text-sm font-medium">
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rewards */}

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 ml-4"
          >
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pravatar.cc/100"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <p className="font-medium">John Doe</p>
              <p className="text-gray-400 text-xs">Super Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400 hidden md:block" />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } ring-1 ring-black ring-opacity-5 z-50`}
            >
              <div className="py-1">
                <button
                  onClick={() => handleNavigate("/profile")}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                >
                  Your Profile
                </button>
                <button
                  onClick={() => handleNavigate("/support")}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                >
                  Help/Support
                </button>
                <button
                  onClick={toggleTheme}
                  className={`block w-full text-left px-4 py-2 text-sm md:hidden ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button
                  onClick={() => handleNavigate("/logout")}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    isDarkMode
                      ? "hover:bg-gray-700 text-red-400"
                      : "hover:bg-gray-100 text-red-600"
                  }`}
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
