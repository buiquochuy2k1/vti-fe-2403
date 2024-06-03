import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Mainpage/Dashboard";

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
          <Dashboard />
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default App;
