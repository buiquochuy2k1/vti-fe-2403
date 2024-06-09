import InputForm from "../InputForm";
import SelectDropdown from "../SelectDropdown";
import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UserDetail = () => {
  // USER REGISTER

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [phoneNum, setPhoneNum] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");

  const [dob, setDob] = useState({ startDate: null, endDate: null });

  const handleValueChange = (newValue) => {
    setDob(newValue);
  };
  // END OF USER REGISTER

  //OPTIONS FOR CHOOSE
  const NationalityOptions = [
    "None",
    "Brazil",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam",
  ];
  const GenderOptions = ["None", "Male", "Female"];
  // END OF OPTIONS FOR CHOOSE

  const [userDetail, setUserDetail] = useState();
  const userID = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/${userID.id}`,
        );
        setUserDetail(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetail();
  }, [userID.id]);

  useEffect(() => {
    if (userDetail) {
      setFirstName(userDetail.firstName || "");
      setLastName(userDetail.lastName || "");
      setPhoneNum(userDetail.phoneNum || "");
      setNationality(userDetail.nationality || "");
      setGender(userDetail.gender || "");
      setDob({
        startDate: userDetail.birthDay.startDate,
        endDate: userDetail.birthDay.endDate,
      });
    }
  }, [userDetail]);

  const handleCancel = () => {
    navigate("/users-list"); // This will navigate back to the previous page
  };

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
      dob.startDate === null ||
      dob.startDate === "" ||
      dob.endDate === null ||
      dob.endDate === ""
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

  const handleSubmitChange = async (e) => {
    e.preventDefault();
    if (IsValidate()) {
      const updatedUser = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + " " + lastName,
        phoneNum: phoneNum,
        nationality: nationality,
        birthDay: {
          startDate: dob.startDate,
          endDate: dob.endDate,
        },
        gender: gender,
      };
      //console.log(updatedUser);
      axios({
        method: "PUT",
        url: "http://localhost:3000/user/" + userID.id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(updatedUser),
      })
        .then(() => {
          Swal.fire({
            title: "Successfully!",
            text: "Change information success!",
            icon: "success",
          }).then((response) => {
            if (response.isConfirmed) {
              navigate("/users-list");
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
            <h1 className="text-4xl font-normal">Edit Information</h1>
            <p>Edit your information. 👋</p>
          </div>
          <form
            onSubmit={handleSubmitChange}
            className="mt-5 flex flex-col gap-5"
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
                  value={dob}
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
                  title="Gender"
                  options={GenderOptions}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Save Change
            </button>

            <button
              onClick={handleCancel}
              className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-red-500 px-6 py-3 text-base text-white transition hover:border-[#fff]"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
