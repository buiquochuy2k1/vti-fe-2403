import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import SelectDropdown from "./SelectDropdown";
import Datepicker from "react-tailwindcss-datepicker";
import Swal from "sweetalert2";
import axios from "axios";
import { nanoid } from "nanoid";

const SignupPage = () => {
  // USER REGISTER

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDay, setBirthDay] = useState({
    startDate: null,
    endDate: null,
  });

  // END OF USER REGISTER

  const GenderOptions = ["None", "Male", "Female", "Other"];

  const NationalityOptions = [
    "None",
    "Brazil",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam",
  ];

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in all fields";

    if (userName === null || userName === "") {
      isproceed = false;
    }

    if (email === null || email === "") {
      isproceed = false;
    }

    if (password === null || password === "") {
      isproceed = false;
    }

    if (phoneNum === null || phoneNum === "") {
      isproceed = false;
    }

    if (gender === null || gender === "" || gender === "None") {
      isproceed = false;
    }

    if (nationality === null || nationality === "" || nationality === "None") {
      isproceed = false;
    }

    if (confirmPassword === null || confirmPassword === "") {
      isproceed = false;
    }

    if (confirmPassword !== password) {
      isproceed = false;
      errormessage = "Password and Confirm Password not match";
    }

    if (!isproceed) {
      Swal.fire({
        title: "An error occur!",
        text: errormessage,
        icon: "error",
      });
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        console.log("Đã check đuôi email là @test.com");
      } else {
        isproceed = false;
        Swal.fire({
          title: "An error occur!",
          text: "Please enter the valid email",
          icon: "error",
        });
      }
    }
    return isproceed;
  };

  const handleValueChange = (newValue) => {
    setBirthDay(newValue);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    let regobj = {
      id,
      userName,
      email,
      password,
      confirmPassword,
      phoneNum,
      birthDay,
      nationality,
      gender,
    };
    if (IsValidate()) {
      // console.log(regobj);
      axios({
        method: "POST",
        url: "http://localhost:3000/user",
        data: JSON.stringify(regobj),
      })
        .then(() => {
          Swal.fire({
            title: "Registered successfully!",
            text: "You can login now",
            icon: "success",
          }).then((response) => {
            if (response.isConfirmed) {
              navigate("/login");
            }
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "An error occur!",
            text: "Failed :" + err.message,
            icon: "error",
          });
        });
    }
  };

  return (
    <>
      <div className="animate__animated animate__zoomIn flex h-screen items-center justify-center text-white ">
        <div className=" w-[850px] rounded-3xl bg-gray-800 p-10 shadow-lg">
          <div className="space-y-2">
            <h1 className="text-4xl font-normal">Sign Up</h1>
            <p>
              Enter your detail below to create your account and get started. 👋
            </p>
          </div>
          <form onSubmit={handlesubmit} className="mt-5 flex flex-col gap-5">
            <div className="flex gap-x-4">
              <div className="grow">
                <InputForm
                  title="Username"
                  placeholder="Enter your username"
                  type="text"
                  value={userName.trim().toLowerCase()}
                  onChange={setUserName}
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Email"
                  placeholder="Enter your email"
                  type="text"
                  value={email}
                  onChange={setEmail}
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
                  value={birthDay}
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
                  value={phoneNum}
                  onChange={setPhoneNum}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="grow">
                <SelectDropdown
                  id="select"
                  title="Nationality"
                  options={NationalityOptions}
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
              <div className="grow">
                <SelectDropdown
                  id="select1"
                  title="Gender"
                  options={GenderOptions}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="grow">
                <InputForm
                  title="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                />
              </div>
            </div>

            <fieldset>
              <legend className="sr-only">Checkbox variants</legend>

              <div className="mb-4 flex items-center">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label
                  htmlFor="checkbox-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label
                  htmlFor="checkbox-3"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I am 18 years or older
                </label>
              </div>
            </fieldset>

            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Confirm Account
            </button>
          </form>

          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <span className="text-indigo-500">
                <a href="/login">Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
