import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Main Site Imports
import Home from "./pages/Home";
import Services from "./pages/Service";
import Contact from "./pages/Contect"; // Fixed typo from previous 'Contect'
import NotFound from "./pages/NotFound";
import PagesLayout from "./pages/Pages/PagesLayout";
import Team from "./pages/Pages/Team";
import BusinessPlan from "./pages/Pages/BusinessPlan";
import Legal from "./pages/Pages/Legal";
import ReportsLayout from "./pages/Reports/ReportsLayout";
import TradeReport from "./pages/Reports/TradeReport";
import SolarAgreement from "./pages/Reports/SolarPurchaseDoc";
import TradeView from "./pages/Reports/TradeView";
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";
import Fqa from "./pages/Fqa";
import Smoothscrolls from "./components/Smoothscrolls";

// Dashboard Imports
import Layout from "./dashboard/components/layout";
import Dashboard from "./dashboard/pages/dashboard";
import Investment from "./dashboard/pages/Investment";
import Vouchers from "./dashboard/pages/Voucher";
import Genealogy from "./dashboard/pages/Genealogy";
import Report from "./dashboard/pages/Report";
import Support from "./dashboard/pages/Support";
import MyProfile from "./dashboard/pages/MyProfile";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if the current path is a dashboard route
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  // Render appropriate layout based on route
  if (isDashboardRoute) {
    return (
      <Layout
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentPath={location.pathname}
      >
        {/* <Smoothscrolls></Smoothscrolls> */}
        <Routes>
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/dashboard/investment" element={<Investment />} />
          <Route path="/dashboard/voucher" element={<Vouchers />} />
          <Route path="/dashboard/genealogy" element={<Genealogy />} />
          <Route path="/dashboard/report" element={<Report />} />
          <Route path="/dashboard/support" element={<Support />} />
          <Route path="/dashboard/myprofile" element={<MyProfile />} />
        </Routes>
      </Layout>
    );
  }

  // Main site routes with smooth scrolling
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Smoothscrolls>
            <Home />
          </Smoothscrolls>
        }
      />
      <Route
        path="/services"
        element={
          <Smoothscrolls>
            <Services />
          </Smoothscrolls>
        }
      />
      <Route
        path="/contact"
        element={
          <Smoothscrolls>
            <Contact />
          </Smoothscrolls>
        }
      />
      <Route
        path="/privacy"
        element={
          <Smoothscrolls>
            <Privacy />
          </Smoothscrolls>
        }
      />
      <Route
        path="/terms"
        element={
          <Smoothscrolls>
            <Term />
          </Smoothscrolls>
        }
      />
      <Route
        path="/faqs"
        element={
          <Smoothscrolls>
            <Fqa />
          </Smoothscrolls>
        }
      />

      <Route
        path="/pages"
        element={
          <Smoothscrolls>
            <PagesLayout />
          </Smoothscrolls>
        }
      >
        <Route path="team" element={<Team />} />
        <Route path="business-plan" element={<BusinessPlan />} />
        <Route path="legal" element={<Legal />} />
      </Route>

      <Route
        path="/reports"
        element={
          <Smoothscrolls>
            <ReportsLayout />
          </Smoothscrolls>
        }
      >
        <Route path="trade-report" element={<TradeReport />} />
        <Route path="solar-purchase-document" element={<SolarAgreement />} />
        <Route path="trade-view" element={<TradeView />} />
      </Route>

      <Route
        path="*"
        element={
          <Smoothscrolls>
            <NotFound />
          </Smoothscrolls>
        }
      />
    </Routes>
  );
}
