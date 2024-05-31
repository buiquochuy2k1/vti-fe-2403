// import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const NavItems = [
    { name: "Home", link: "/" },
    { name: "User List", link: "/users-list" },
    { name: "Login", link: "/login" },
    { name: "Create", link: "/user/create" },
  ];

  return (
    <nav>
      <div className="h-10vh z-50 flex justify-between border-b border-slate-800 px-20 py-4 text-black lg:py-5">
        <div className="flex flex-1 items-center">
          <img className="w-15 h-10" src={Logo} alt="logo" />
        </div>

        <div className="lg: hidden flex-1 items-center justify-end font-normal md:flex lg:flex">
          <div className="flex-10">
            <ul className="mr-16 flex gap-8 text-[18px]">
              {NavItems.map((item, index) => {
                return (
                  <ul key={index}>
                    <li className="cursor-pointer border-b-2 border-slate-900 transition hover:border-green-600 hover:text-green-600">
                      <a href={item.link} className="text-black">
                        {item.name}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>

        <button className="transtion block sm:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu_Fries">
              <path d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
              <path d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
              <path d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
