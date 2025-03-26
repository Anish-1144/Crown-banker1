import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// imporfrom "./component; // Correct import
import Home from "./pages/Home";
import Services from "./pages/Service";
import Contect from "./pages/Contect"; // Fixed typo from Contect
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
import Dashboard from "./Dashboard/Dashboard";
import Genealogy from "./Dashboard/Genealogy";
import Report from "./Dashboard/Report";
import Vouchers from "./Dashboard/Vouchers";
import Investment from "./Dashboard/Investment";
import DashboardLayout from "./Dashboard/DashboardLayout";
import MyProfile from "./Dashboard/MyProfile";
import Support from "./Dashboard/Support";
// import Sidebar from "./Dashboard/Sidebar";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Routes>
      {/* Apply smooth scrolling to main site pages */}
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
            <Contect />
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

      {/* Reports Nested Routes */}
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

      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        }
      >
        <Route index element={<Dashboard isDarkMode={isDarkMode} />} />
        <Route path="investment" element={<Investment />} />
        <Route path="vouchers" element={<Vouchers />} />
        <Route path="genealogy" element={<Genealogy />} />
        <Route path="report" element={<Report />}>
        <Route path="support" element={<div><Support/></div>} />

          <Route
            path="profile"
            element={<Navigate to="/dashboard/profile" replace />}
          />
        </Route>
        <Route path="profile" element={<MyProfile isDarkMode={isDarkMode} />} />
        <Route path="support" element={<div><Support/></div>} />
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
