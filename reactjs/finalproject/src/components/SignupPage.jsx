import InputForm from "./InputForm";
import SelectDropdown from "./SelectDropdown";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const SignupPage = () => {
  const NationalityOptions = [
    "Brazil",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam",
  ];
  const IDType = ["User", "Admin"];

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <>
      <div className="animate__animated animate__fadeInDown flex h-screen items-center justify-center text-white ">
        <div className=" w-[850px] rounded-3xl bg-gray-800 p-10 shadow-lg">
          <div className="space-y-2">
            <h1 className="text-4xl font-normal">Sign Up</h1>
            <p>
              Enter your detail below to create your account and get started. 👋
            </p>
          </div>
          <form className="mt-5 flex flex-col gap-5">
            <div className="flex gap-x-4">
              <div className="grow">
                <InputForm
                  title="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  // value={email}
                  // onChange={setEmail}
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Email"
                  placeholder="Enter your email"
                  type="text"
                  // value={password}
                  // onChange={setPassword}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="grow">
                <label
                  htmlFor="Date Of Birth"
                  className="block text-sm font-semibold text-white"
                >
                  Date Of Birth
                </label>
                <Datepicker
                  inputClassName="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  containerClassName="relative max-w-xl"
                  asSingle={true}
                  primaryColor={"fuchsia"}
                  value={value}
                  onChange={handleValueChange}
                  displayFormat={"DD/MM/YYYY"}
                  showShortcuts={true}
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Phone Number"
                  placeholder="Type your phone number"
                  type="number"
                  //value={userPhoneNum}
                  //onChange={setUserPhoneNum}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="grow">
                <SelectDropdown
                  title="Nationality"
                  options={NationalityOptions}
                  //value={gender}
                  //onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="grow">
                <SelectDropdown
                  title="ID Type"
                  options={IDType}
                  //value={gender}
                  //onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="grow">
                <InputForm
                  title="Password"
                  placeholder="Enter your password"
                  type="password"
                  // value={email}
                  // onChange={setEmail}
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                  // value={password}
                  // onChange={setPassword}
                />
              </div>
            </div>

            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Confirm Account
            </button>
          </form>

          <div className="mt-4 text-center">
            <p>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;