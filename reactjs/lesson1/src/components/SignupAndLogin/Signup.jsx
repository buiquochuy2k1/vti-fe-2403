import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Link } from "react-router-dom";

const Signup = () => {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    //console.log("newValue:", newValue);
    setDate(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.username.value ||
      !e.target.email.value ||
      !e.target.password.value ||
      !date.startDate
    ) {
      alert("You need to type in all fields");
      return;
    }
    if (e.target.password.value !== e.target.confirmpassword.value) {
      alert("Password and Confirm Password are not matched");
      return;
    }

    console.log("-------CREATE ACCOUNT INFORMATION-------------");
    console.log("Username", e.target.username.value);
    console.log("Email", e.target.email.value);
    console.log("Password", e.target.password.value);
    console.log("Date Of Birth", date.startDate);
    console.log("----------------------------------------------");

    alert("Resgister successfully");

    // Reset the form
    setDate({
      startDate: null,
      endDate: null,
    });
    e.target.reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="confirmpassword"
              type="password"
              placeholder="Re Enter your password"
            />
          </div>
          <div className="mb-4">
            <Datepicker
              primaryColor={"fuchsia"}
              value={date}
              onChange={handleValueChange}
              showShortcuts={true}
              asSingle={true}
              displayFormat={"DD/MM/YYYY"}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <span>Back to Home Page</span>
              </Link>
              <Link to={"/login"}>
                <span>Login Now!</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
