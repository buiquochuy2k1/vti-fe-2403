import InputForm from "../InputForm";
import SelectDropdown from "../SelectDropdown";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Link } from "react-router-dom";

const UserDetail = () => {
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
      <div className="animate__animated animate__zoomIn flex h-screen items-center justify-center text-white ">
        <div className=" w-[850px] rounded-3xl bg-gray-800 p-10 shadow-lg">
          <div className="space-y-2">
            <h1 className="text-4xl font-normal">Edit Information</h1>
            <p>Edit your information. 👋</p>
          </div>
          <form className="mt-5 flex flex-col gap-5">
            <div className="flex gap-x-4">
              <div className="grow">
                <InputForm
                  title="ID"
                  placeholder="Your ID"
                  type="disabled"
                  disabled
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Full Name"
                  placeholder="Edit your full name"
                  type="text"
                  // value={email}
                  // onChange={setEmail}
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
                  id="selectNationality"
                  title="Nationality"
                  options={NationalityOptions}
                  //value={gender}
                  //onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="grow">
                <SelectDropdown
                  id="selectIDType"
                  title="ID Type"
                  options={IDType}
                  //value={gender}
                  //onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Save Change
            </button>

            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-red-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              <Link to="/users-list">Cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
