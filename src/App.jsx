import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service";
import Contact from "./pages/Contect";
 import NotFound from "./pages/NotFound";
 import PagesLayout from "./pages/Pages/PagesLayout";
 import Team from "./pages/Pages/Team";
 import BusinessPlan from "./pages/Pages/BusinessPlan";
 import Legal from "./pages/Pages/Legal";
 import ReportsLayout from "./pages/Reports/ReportsLayout";
 import TradeReport from "./pages/Reports/TradeReport";
 import SolarAgreement from "./pages/Reports/SolarPurchaseDoc";
 import TradeView from "./pages/Reports/TradeView";

export default function App() {
  return (
    <div className="">
      {/* <h1 className="text-3xl font-bold underline">Hello World!</h1> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Pages Nested Routes */}
        <Route path="/pages" element={<PagesLayout />}>
          <Route path="team" element={<Team />} />
          <Route path="business-plan" element={<BusinessPlan />} />
          <Route path="legal" element={<Legal />} />
        </Route>

        {/* Reports Nested Routes */}
        <Route path="/reports" element={<ReportsLayout />}>
          <Route path="trade-report" element={<TradeReport />} />
          <Route path="solar-purchase-document" element={<SolarAgreement />} />
          <Route path="trade-view" element={<TradeView />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
