import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="m-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
