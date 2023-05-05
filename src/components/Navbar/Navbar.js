import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navObj = [
    {
      path: "/",
      navText: "Home",
    },
    {
      path: "/phones/",
      navText: "Phones",
    },
    {
      path: "/users/",
      navText: "Users",
    },
  ];
  return (
    <nav className="navbar flex items-center justify-between">
      <div className="logo">
        <h2 className="text-3xl font-semibold ">Server Test</h2>
      </div>
      <ul className="flex">
        {navObj.map((navItem, index) => (
          <li key={index}>
            <NavLink
              to={navItem.path}
              className={"py-4 px-6 font-semibold text-blue-500"}
            >
              {navItem.navText}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
