import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Nevbar from "../../components/header/Nevbar";

export default function ReportsLayout() {
  return (
    <div>
      <Nevbar />
        <Outlet />
      <Footer />
    
    </div>
  );
}
