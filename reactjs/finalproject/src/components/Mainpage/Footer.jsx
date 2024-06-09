import logo from "../../assets/footer_logo.png";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <>
      <footer className="z-50 bg-gray-800 px-20 py-5 text-white">
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="w-full space-y-5 lg:w-96">
            <img className="mb-3" src={logo} alt="" />

            <span>
              Cras incident lobotids feudist makes viramas sagittas eu valuta.
            </span>
            <div className="flex gap-3">
              <FaFacebookF className="h-10 w-10 cursor-pointer border-4 border-slate-800 p-2" />
              <FaTwitter className="h-10 w-10 cursor-pointer border-4 border-slate-800 p-2" />
              <FaLinkedin className="h-10 w-10 cursor-pointer border-4 border-slate-800 p-2" />
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <p>RESOURCES</p>
            {footerItems.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="ml-5 flex items-center justify-start text-slate-400"
                >
                  <FaDotCircle />
                  <li className="ml-2 cursor-pointer border-b-2 border-slate-900 transition hover:border-green-600 hover:text-green-600">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <p className="block text-center text-slate-500">
          Copyright © RESTINA 2024. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
