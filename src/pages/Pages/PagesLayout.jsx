import { Outlet} from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nevbar from "../../components/header/Nevbar";

export default function PagesLayout() {
  return (
    <div>
      <Nevbar />
      <Footer />
      <Outlet />
    </div>
  );
}
