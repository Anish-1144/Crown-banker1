import { Outlet} from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Nevbar from "../../components/header/Nevbar";

export default function PagesLayout() {
  return (
    <div>
      <Nevbar />
      <Outlet />
      <Footer />
    </div>
  );
}
