import InputForm from "../InputForm";
import SelectDropdown from "../SelectDropdown";
import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  // USER REGISTER

  const [userID, setUserID] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [phoneNum, setPhoneNum] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");

  const [birthDay, setBirthDay] = useState({
    startDate: null,
    endDate: null,
  });

  const NationalityOptions = [
    "None",
    "Brazil",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam",
  ];
  const GenderOptions = ["None", "Male", "Female"];

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setBirthDay(newValue);
  };

  useEffect(() => {
    setUserID(nanoid(10));
  }, []);

  const Navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in all fields";

    if (firstName === null || firstName === "") {
      isproceed = false;
    }

    if (lastName === null || lastName === "") {
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

    if (
      birthDay.startDate === null ||
      birthDay.startDate === "" ||
      birthDay.endDate === null ||
      birthDay.endDate === ""
    ) {
      isproceed = false;
    }

    if (!isproceed) {
      Swal.fire({
        title: "An error occur!",
        text: errormessage,
        icon: "error",
      });
    }

    return isproceed;
  };

  const handleCreateUser = (e) => {
    let id = userID;
    let fullName = firstName + " " + lastName;
    e.preventDefault();
    let regobj = {
      id,
      fullName,
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
            title: "Successfully!",
            text: "New user has been created!",
            icon: "success",
          }).then((response) => {
            if (response.isConfirmed) {
              Navigate("/users-list");
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
            <h1 className="text-4xl font-normal">Create User</h1>
            <p>Create new information. 🛑</p>
          </div>
          <form
            className="mt-5 flex flex-col gap-5"
            onSubmit={handleCreateUser}
          >
            <div className="flex gap-x-4">
              <div className="grow">
                <InputForm
                  title="First Name"
                  placeholder="Enter your first name"
                  type="text"
                  value={firstName}
                  onChange={setFirstName}
                  isDisabled={false}
                />
              </div>
              <div className="grow">
                <InputForm
                  title="Last Name"
                  placeholder="Enter your last name"
                  type="text"
                  value={lastName}
                  onChange={setLastName}
                  isDisabled={false}
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
                  isDisabled={false}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="grow">
                <SelectDropdown
                  id="selectNationality"
                  title="Nationality"
                  options={NationalityOptions}
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
              <div className="grow">
                <SelectDropdown
                  id="selectIDType"
                  title="ID Type"
                  options={GenderOptions}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Create Now
            </button>
            <Link
              className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-red-500 px-6 py-3 text-center text-base text-white transition hover:border-[#fff]"
              to="/users-list"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
