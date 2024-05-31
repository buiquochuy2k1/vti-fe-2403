import Footer from "./components/Mainpage/Footer";
import Navbar from "./components/Mainpage/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  console.log(token);
  const navigate = useNavigate();
  return (
    <>
      {token ? (
        <div className="h-screen w-full">
          <Navbar />
          <div className="m-10">
            <Outlet />
          </div>
          <Footer />
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default App;
