import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu",path: "/menu" },
    { name: "About",path: "/about" },
    { name: "Reservation",path: "/reservation" },
    { name: "Contact",path: "/contact" }
  ];

  return (
    <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold">Young King</h1>
      <nav>
        <ul className="hidden md:flex">
          {navItems.map((item, index) => (
            <li key={index} className="p-4 hover:bg-[#CCCCCC] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          <ul className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {nav ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </ul>
        </div>
      </nav>
    </div>
  );
}