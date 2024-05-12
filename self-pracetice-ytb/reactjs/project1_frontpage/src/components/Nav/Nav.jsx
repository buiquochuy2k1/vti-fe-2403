/* eslint-disable no-unused-vars */
import React from 'react';

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="">
          <img src="../assets/brand_logo.png" alt="" />
        </div>
        <ul className="flex flex-row items-center justtify-between gap-4 font-medium">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Location</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <button className="bg-red-500 p-2 w-[100px]">Login</button>
      </nav>
    </>
  );
};

export default Nav;
