import React from "react";
import Logo1 from "../assets/logo-bookmark-white.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-bookmark-purple py-8 mx-auto">
        <div className="container flex flex-col md:flex-row items-center">
          {/* nav links starts */}
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src={Logo1} alt="logo" />
            <ul className="flex text-white uppercase gap-12 text-xs">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          {/* nav links Ends */}
          {/* social links starts */}
          <div className="flex gap-10 mt-12 md:mt-0">
            <li className="list-none cursor-pointer">
              <i className="fab fa-facebook-square text-white text-2xl" />
            </li>
            <li className="list-none cursor-pointer">
              <i className="fab fa-twitter text-white text-2xl" />
            </li>
            <li className="list-none cursor-pointer">
              <i className="fab fa-instagram text-white text-2xl" />
            </li>
            <li className="list-none cursor-pointer">
              <i className="fab fa-github text-white text-2xl" />
            </li>
            <li className="list-none cursor-pointer">
              <i className="fab fa-linkedin text-white text-2xl" />
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
