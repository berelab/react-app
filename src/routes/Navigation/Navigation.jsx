import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component";

const Navigation = () => {
  return(
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Navigation;