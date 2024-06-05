import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, deleteUser } from "../../store/userReducer";
import Swal from "sweetalert2";

const UserList = () => {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserList()); // Gọi action lấy danh sách user
  }, []);

  const handleDeleteUser = (id) => () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id)); // Gọi action xóa user
        Swal.fire({
          title: "Deleted!",
          text: "ID has been deleted.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getUserList()); // Load lại bảng sau khi xóa
          }
        });
      }
    });
  };

  ///PAGINATION SETTINGS
  const [currentPage, setCurrentPage] = useState(1);
  const itemPersPage = 5;
  const indexOfLastItem = currentPage * itemPersPage;
  const indexOfFirstItem = indexOfLastItem - itemPersPage;
  const currentItems = userList?.slice(indexOfFirstItem, indexOfLastItem);
  const numbersPage = Math.ceil(userList?.length / itemPersPage);
  const numbers = [...Array(numbersPage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage < numbersPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeToClickPage = (num) => {
    setCurrentPage(num);
  };

  //END OF PAGINATION SETTINGS
  return (
    <>
      <div className="animate__animated  animate__fadeIn relative overflow-x-auto bg-gray-800 shadow-md sm:rounded-lg">
        <button
          onClick={() => {
            Navigate("/user/create");
          }}
          className=" group relative m-5 flex h-10 w-40 cursor-pointer items-center overflow-hidden rounded-lg border border-red-500 bg-red-500 hover:bg-red-500 active:border-red-500 active:bg-red-500"
        >
          <span className="ml-8 transform font-semibold text-white transition-all duration-300 group-hover:translate-x-20">
            Add User
          </span>
          <span className="absolute right-0 flex h-full w-10 transform items-center justify-center rounded-lg bg-red-500 transition-all duration-300 group-hover:w-full group-hover:translate-x-0">
            <svg
              className="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Full Name
                  <a href="#">
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Date of Birth
                  <a href="#">
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Gender
                  <a href="#">
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Phone Number
                  <a href="#">
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Nationality
                  <a href="#">
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((user, index) => (
              <tr
                key={index}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {user?.id}
                </th>
                <td className="px-6 py-4">{user?.fullName}</td>
                <td className="px-6 py-4">{user?.birthDay.startDate}</td>
                <td className="px-6 py-4">{user?.gender}</td>
                <td className="px-6 py-4">{user?.phoneNum}</td>
                <td className="px-6 py-4">{user?.nationality}</td>
                <td className="flex items-center gap-5 px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    to={`user/${user?.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                    onClick={handleDeleteUser(user?.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex-column flex flex-wrap items-center justify-between p-4 md:flex-row"
          aria-label="Table navigation"
        >
          <span className="mb-4 block w-full text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {indexOfFirstItem + 1}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {userList?.length}
            </span>{" "}
            users
          </span>
          <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
            <li>
              <a
                onClick={prevPage}
                className="ms-0 flex h-8 cursor-pointer items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {numbers.map((number, index) => (
              <li key={index}>
                <a
                  onClick={() => changeToClickPage(number)}
                  className="flex h-8 cursor-pointer items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                >
                  {number}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={nextPage}
                className="flex h-8 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default UserList;
