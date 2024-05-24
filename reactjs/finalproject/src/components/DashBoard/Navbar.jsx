const Navbar = () => {
  const NavItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/" },
    { id: 3, name: "Services", link: "/" },
    { id: 4, name: "Contact", link: "/" },
  ];
  return (
    <>
      <nav className="mx-auto flex justify-between bg-gray-800 p-4 text-white">
        <div>
          <a href="/" className="text-xl font-bold text-white">
            Logo
          </a>
        </div>
        <div className="flex items-center justify-center">
          {NavItems.map((item) => {
            return (
              <ul key={item.id}>
                <li className="mx-2 text-xl font-bold transition-all duration-150 ease-in-out hover:border-b-4 hover:border-indigo-600">
                  <a href={item.link} className="text-white">
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="space-x-2">
          <button className="w-[80px] rounded-lg bg-indigo-600 p-2">
            Login
          </button>
          <button className="w-[80px] rounded-lg bg-green-600 p-2">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
