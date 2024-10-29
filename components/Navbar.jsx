"use client";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getCoreValueImage = (coreValueId) => {
      switch (coreValueId) {
          case 1:
              return "/images/corevalue1.jpg";
          case 2:
              return "/images/corevalue2.jpg";
          default:
              return "/images/my-image.jpg";
      }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    window.open(`/#${id}`, '_blank');
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white w-full border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={200}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </a>
        <div className="flex md:order-2">
          <button
            className="lg:hidden text-gray-500 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`lg:flex ${isOpen ? "flex" : "hidden"} lg:flex-row lg:space-x-8 items-center w-full lg:w-auto md:order-1`}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 w-full lg:w-auto ${
              isOpen ? "items-center justify-center text-center" : ""
            }`}
          >
{NAV_LINKS.map((link) => (
  <li key={link.id} className="w-full relative group">
    <img
      src={getCoreValueImage(link.id)}
      alt={link.title}
      className="absolute left-full ml-4 w-32 h-32 object-cover rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
    />
    <a
      href={`#${link.id}`}
      onClick={(e) => handleClick(e, link.id)}
      className="block py-2 px-3 text-gray-800 text-lg font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 whitespace-nowrap"
    >
      {link.title}
    </a>
    {link.submenu && (
<ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-60 overflow-y-auto z-50">
        {link.submenu.map((item) => (
          <li key={item} className="px-4 py-2 hover:bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    )}
  </li>
))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
