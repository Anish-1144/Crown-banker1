import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  Ticket,
  GitBranch,
  FileText,
  LifeBuoy,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      path: "/dashboard/investment",
      label: "Investment",
      icon: <TrendingUp size={20} />,
    },
    {
      path: "/dashboard/voucher",
      label: "Voucher",
      icon: <Ticket size={20} />,
    },
    {
      path: "/dashboard/genealogy",
      label: "Genealogy",
      icon: <GitBranch size={20} />,
    },
    {
      path: "/dashboard/report",
      label: "Report",
      icon: <FileText size={20} />,
    },
  ];

  const bottomNavItems = [
    {
      path: "/dashboard/support",
      label: "Support",
      icon: <LifeBuoy size={20} />,
    },
    { path: "/", label: "Sign Out", icon: <LogOut size={20} /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative z-30 flex flex-col w-64 h-screen transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo and close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center">
            <div className="relative">
              {/* <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full border-2 border-green-500"></div> */}
            </div>
            <img
              className="w-30 h-10"
              src="https://res.cloudinary.com/dygdftjr8/image/upload/v1742818322/logo1_mp91bc.png"
              alt=""
            />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Crown-Banker.
            </span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Menu label */}
        <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
          Menu
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-2 py-2 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-green-50 text-green-600 dark:bg-gray-700 dark:text-green-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom navigation */}
        <div className="p-2 border-t border-gray-200 dark:border-gray-700">
          <ul className="space-y-1">
            {bottomNavItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-green-50 text-green-600 dark:bg-gray-700 dark:text-green-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
