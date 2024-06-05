import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const validateLogin = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      Swal.fire({
        title: "An error occur!",
        text: "Please Enter Valid Username!",
        icon: "error",
      });
    } else if (password === "" || password === null) {
      result = false;
      Swal.fire({
        title: "An error occur!",
        text: "Please Enter Password",
        icon: "error",
      });
    }

    return result;
  };

  const ProcessLogin = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      axios
        .get("http://localhost:3000/account?userName=" + username)
        .then((res) => {
          return res.data;
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            Swal.fire({
              title: "An error occur!",
              text: "Account not found in database",
              icon: "error",
            });
          } else {
            if (resp[0].password == password) {
              localStorage.setItem("username", username);
              localStorage.setItem(
                "userToken",
                "4G02zBeVAt2GMF5aV0P77PeDxoIGKpQhquQkohHcVfQPbVvPkisHs2qAkyq1lcq6",
              );
              usenavigate("/");
            } else {
              Swal.fire({
                title: "An error occur!",
                text: "Your password is incorrect!",
                icon: "error",
              });
            }
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "An error occur!",
            text: "Login Failed due to :" + err.message,
            icon: "error",
          });
        });
    }
  };
  return (
    <>
      <div className="animate__animated animate__zoomIn flex h-screen items-center justify-center text-white">
        <div className=" w-[500px] rounded-3xl bg-gray-800 p-10 shadow-lg">
          <div className="space-y-2 text-center ">
            <h1 className="text-4xl font-normal">Welcome Back</h1>
            <div>
              <p>Glad to see you again 👋</p>
              <p>Login to your account below</p>
            </div>
          </div>
          <form className="mt-5 flex flex-col gap-5" onSubmit={ProcessLogin}>
            <div className="grow">
              <InputForm
                title="Username"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={setUserName}
                isDisabled={false}
              />
            </div>
            <div className="grow">
              <InputForm
                title="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={setPassword}
                isDisabled={false}
              />
            </div>
            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Dont have an account?{" "}
              <span className="text-indigo-500">
                <Link to="/register">Sign up for Free</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
