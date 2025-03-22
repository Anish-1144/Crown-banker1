import { Routes, Route } from "react-router-dom";
// imporfrom "./component; // Correct import
import Home from "./pages/Home";
import Services from "./pages/Service";
import Contact from "./pages/Contect"; // Fixed typo from Contect
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

export default function App() {
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
