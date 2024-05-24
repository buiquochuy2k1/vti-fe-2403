import { useEffect } from "react";
import { Link } from "react-router-dom";

import brandLogo from "../../assets/logofunsieszone.png";

const Menu = () => {
  const API_LINK = "https://reqres.in/api/users?page=1";

  const navItems = [
    {
      id: "1",
      title: "Home",
      url: "/",
    },
    {
      id: "2",
      title: "User List",
      url: "user-list",
    },
    {
      id: "3",
      title: "Blog Post",
      url: "blog-post",
    },
    {
      id: "4",
      title: "Contact",
      url: "contact",
    },
  ];

  const buttonItem = [
    {
      id: "1",
      title: "Login",
      url: "login",
      type: "button",
      style:
        "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
    },
    {
      id: "2",
      title: "Sign Up",
      url: "sign-up",
      type: "button",
      style:
        "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_LINK);
        const data = await response.json();
        console.log(data); // Do something with the data
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="margin-auto flex h-[100px] w-full items-center justify-between overflow-hidden bg-[#111827] p-5 text-slate-200">
        <div className="h-[50px] w-[50px] object-none object-center">
          <img src={brandLogo} alt="" />
        </div>

        <ul className="justtify-between flex flex-row items-center gap-7 text-2xl font-medium transition-all ease-in-out">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                className="border-indigo-500 hover:border-b-4"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center">
          {buttonItem.map((item) => {
            return (
              <Link to={item.url} key={item.id}>
                <button className={item.style} type={item.type}>
                  {item.title}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
