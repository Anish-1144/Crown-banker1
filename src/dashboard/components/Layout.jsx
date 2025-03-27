import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, isSidebarOpen, toggleSidebar, currentPath }) => {
  // Get page title based on current path
  const getPageTitle = () => {
   switch (currentPath) {
     case "/dashboard":
       return "Dashboard";
     case "/dashboard/investment":
       return "Investment";
     case "/dashboard/voucher":
       return "Voucher";
     case "/dashboard/genealogy":
       return "Genealogy";
     case "/dashboard/report":
       return "Report";
     case "/dashboard/support":
       return "Support";
     case "/dashboard/myprofile":
       return "My Profile";
     default:
       return "Dashboard";
   }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar pageTitle={getPageTitle()} toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
