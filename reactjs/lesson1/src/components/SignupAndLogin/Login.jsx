// import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.email.value || !e.target.password.value) {
      alert("You need to type in all fields");
      return;
    }

    console.log("-------ACCOUNT INFORMATION-------------");
    console.log("Email", e.target.email.value);
    console.log("Password", e.target.password.value);
    console.log("----------------------------------------------");

    e.target.reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>
            <div className="mt-6"></div>
            <div className="flex items-center justify-between">
              <Link to={"/forgot-pass"}>
                <span>Forgot Password</span>
              </Link>
              <Link to={"/sign-up"}>
                <span>Sign Up Now!</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
