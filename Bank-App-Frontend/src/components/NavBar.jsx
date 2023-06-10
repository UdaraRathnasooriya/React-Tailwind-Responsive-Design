import React, { Fragment, useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevData) => {
      return !prevData;
    });
  };
  return (
    <Fragment>
      <nav className="flex justify-between py-4 items-center">
        <img src={logo} className="w-[124px] h-[32px]" />
        <ul className=" space-x-8 sm:flex hidden">
          {navLinks.map((nav, index) => {
            return (
              <li key={nav.id} className={`font-poppins cursor-pointer`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-col justify-end items-end  border">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain border"
            onClick={handleToggle}
          />
          <div className={`${toggle ? "flex" : "hidden"} bg-black-gradient absolute top-16 rounded-xl px-2 border`}>
            <ul className="flex flex-col items-end space-y-2 ">
              {navLinks.map((nav, index) => {
                return (
                  <li key={nav.id} className={`font-poppins cursor-pointer`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
