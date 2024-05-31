import { useState } from "react";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Identifier = {
    key: "userToken",
    value: "4G02zBeVAt2GMF5aV0P77PeDxoIGKpQhquQkohHcVfQPbVvPkisHs2qAkyq1lcq6",
  };

  const accounts = [
    {
      email: email,
      password: password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accounts[0].email === "" || accounts[0].password === "") {
      Swal.fire({
        title: "An error occur!",
        text: "Please fill in all fields!",
        icon: "error",
      });
    } else if (
      accounts[0].email === "admin" ||
      accounts[0].password === "admin"
    ) {
      Swal.fire({
        title: "Welcome back!",
        icon: "success",
      });
      console.log("Login success!");
      console.log(Identifier.key, Identifier.value);
    } else {
      Swal.fire({
        title: "An error occur!",
        text: "Invalid email or password!",
        icon: "error",
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
          <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grow">
              <InputForm
                title="Email"
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={setEmail}
              />
            </div>
            <div className="grow">
              <InputForm
                title="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={setPassword}
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
                <Link to="/register">
                  <a href="">Sign up for Free</a>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
