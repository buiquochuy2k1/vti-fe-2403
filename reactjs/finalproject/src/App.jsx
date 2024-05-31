import Footer from "./components/Mainpage/Footer";
import Navbar from "./components/Mainpage/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <div className="m-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
