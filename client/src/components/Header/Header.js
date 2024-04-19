import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [wasNavOpen, setWasNavOpen] = useState(false);
  const [navItemClicked, setNavItemClicked] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setWasNavOpen(!nav);
  };

  const handleClicked = () => {
    setNavItemClicked(!navItemClicked);
    setNav(false);
    setWasNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setNav(wasNavOpen);
      } else {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [wasNavOpen]);

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
      <nav className={`${nav && isMobile ? 'fixed top-0 right-0 bottom-0 left-0 bg-white z-50' : 'block'} md:flex md:items-center md:justify-center h-full`}>
        <ul className="hidden md:flex">
          {navItems.map((item, index) => (
            <li key={index} className="p-4 hover:bg-[#CCCCCC] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden m-4">
          <button onClick={handleNav} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-[#CCCCCC] hover:border-[#CCCCCC]">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
            </svg>
          </button>
        </div>
        <div className={`${nav ? "opacity-100 h-auto transition-all duration-500 ease-in" : "opacity-0 h-0"} md:hidden text-center`}>
            <h1 className="w-full text-3xl font-bold">Young King</h1>
            <ul className="mt-5">
              {navItems.map((item, index) => (
                <li key={index} className="mb-3 p-4 hover:bg-[#CCCCCC] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                  <Link to={item.path} onClick={handleClicked}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
      </nav>
    </div>
  );
}