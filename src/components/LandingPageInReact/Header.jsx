import React from "react";
import logo from "../assets/logo-bookmark.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav className="container flex items-center py-4 mx-auto">
          <div className="py-1">
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-purple uppercase text-md">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button
              type="button"
              className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase"
            >
              Login
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="text-2xl fa-solid fa-bars" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
