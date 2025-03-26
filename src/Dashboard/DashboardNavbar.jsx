import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { useEffect } from "react";

export default function DashboardNavbar({
  toggleTheme,
  isDarkMode,
  toggleSidebar,
}) {
  const navigate = useNavigate();
  const location = useLocation();
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

  // Mapping of routes to titles and subtitles
  const routeMap = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Let's check your updates today",
    },
    "/dashboard/investment": {
      title: "Investment",
      subtitle: "Manage your investments",
    },
    "/dashboard/vouchers": {
      title: "Vouchers",
      subtitle: "View and claim your vouchers",
    },
    "/dashboard/genealogy": {
      title: "Genealogy",
      subtitle: "Explore your network",
    },
    "/dashboard/report": {
      title: "Report",
      subtitle: "Analyze your performance",
    },
    "/dashboard/support": {
      title: "Support",
      subtitle: "Get help and support",
    },
    "/dashboard/logout": {
      title: "Sign Out",
      subtitle: "Ready to leave?",
    },
    "/dashboard/profile": {
      title: "Profile",
      subtitle: "Manage your account",
    },
  };

  // Determine current title and subtitle based on the route
  const currentRoute = routeMap[location.pathname] || routeMap["/dashboard"];
  const { title, subtitle } = currentRoute;



  const handleNavigate = (path) => {
    navigate(`/dashboard${path}`);
    setIsProfileOpen(false); // Close the dropdown after navigation
  };

  // Improved dark mode classes with more consistent color application
  const darkModeClasses = {
    nav: isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200",
    inputBase: isDarkMode 
      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-green-400" 
      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-green-400",
    subtitle: isDarkMode ? "text-gray-400" : "text-gray-500",
    iconColor: isDarkMode ? "text-gray-400" : "text-gray-500",
    hoverBackground: isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100",
    notificationPopup: isDarkMode 
      ? "bg-gray-800/50 border-gray-700" 
      : "bg-white border-gray-200",
    notificationBorder: isDarkMode ? "border-gray-700" : "border-gray-200",
    notificationUnread: isDarkMode 
      ? "bg-gray-700/50" 
      : "bg-gray-50",
    dropdownBackground: isDarkMode ? "bg-gray-800/50" : "bg-white",
    dropdownHover: isDarkMode 
      ? "hover:bg-gray-700 text-white" 
      : "hover:bg-gray-100 text-gray-800",
    signOutText: isDarkMode ? "text-red-400" : "text-red-600"
  };

  return (
    <nav className={`py-4 px-4 md:px-6 flex items-center justify-between border-b ${darkModeClasses.nav}`}>
      {/* Left side - Dynamic Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className={`lg:hidden p-2 ${darkModeClasses.hoverBackground} rounded-lg`}
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <p className={`text-sm ${darkModeClasses.subtitle} hidden md:block`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right side - Search, Theme, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* Search - Visible on all screens */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`pl-10 pr-4 py-2 rounded-lg border focus:ring-1 focus:ring-green-500 focus:outline-none ${darkModeClasses.inputBase}`}
          />
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${darkModeClasses.iconColor}`}
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 ${darkModeClasses.hoverBackground} rounded-lg hidden md:block`}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-gray-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`p-2 ${darkModeClasses.hoverBackground} rounded-lg relative hidden md:block`}
          >
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notification Popup */}
          {isNotificationOpen && (
            <div
              className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg ${darkModeClasses.notificationPopup} border overflow-hidden z-50`}
            >
              <div
                className={`p-4 border-b ${darkModeClasses.notificationBorder}`}
              >
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b ${darkModeClasses.notificationBorder} ${
                      !notification.isRead ? darkModeClasses.notificationUnread : ""
                    } hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span
                        className={`text-xs ${darkModeClasses.subtitle}`}
                      >
                        {notification.time}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      } mt-1`}
                    >
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className={`p-4 text-center border-t ${darkModeClasses.notificationBorder}`}
              >
                <button className="text-green-500 hover:text-green-600 text-sm font-medium">
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rewards */}
        <button
          className={`p-2 ${darkModeClasses.hoverBackground} rounded-lg hidden md:block`}
        >
          <Gift className="h-5 w-5 text-gray-400" />
        </button>

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
              <p className={`text-xs ${darkModeClasses.subtitle}`}>
                Super Admin
              </p>
            </div>
            <ChevronDown
              className={`h-4 w-4 ${darkModeClasses.iconColor} hidden md:block`}
            />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${darkModeClasses.dropdownBackground} ring-1 ring-black ring-opacity-5 z-50`}
            >
              <div className="py-1">
                <button
                  onClick={() => handleNavigate("/profile")}
                  className={`block w-full text-left px-4 py-2 text-sm ${darkModeClasses.dropdownHover}`}
                >
                  Your Profile
                </button>
                <button
                  onClick={() => handleNavigate("/support")}
                  className={`block w-full text-left px-4 py-2 text-sm ${darkModeClasses.dropdownHover}`}
                >
                  Help/Support
                </button>
                <button
                  onClick={toggleTheme}
                  className={`block w-full text-left px-4 py-2 text-sm md:hidden ${darkModeClasses.dropdownHover}`}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button
                  onClick={() => handleNavigate("/logout")}
                  className={`block w-full text-left px-4 py-2 text-sm ${darkModeClasses.signOutText}`}
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