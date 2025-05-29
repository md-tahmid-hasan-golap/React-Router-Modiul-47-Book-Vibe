import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 text-green-600 px-3 py-0 rounded-lg"
            : ""
        }
      >
        <li className="m-2">Home</li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 text-green-600 px-3 py-0 rounded-lg"
            : ""
        }
      >
        <li className="m-2">About</li>
      </NavLink>
      <NavLink
        to="/ListedBooks"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 text-green-600 px-3 py-0 rounded-lg"
            : ""
        }
      >
        <li className="m-2">Listed Books</li>
      </NavLink>
      <NavLink
        to="/PagesToRead"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 text-green-600 px-3 py-0 rounded-lg"
            : ""
        }
      >
        <li className="m-2">Pages to Read</li>
      </NavLink>
      <NavLink
        to="/readList"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 text-green-600 px-3 py-0 rounded-lg"
            : ""
        }
      >
        <li className="m-2">ReadList</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-blue-500 font-bold text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3 hidden md:flex">
        <a
          href="#_"
          className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            Sign In
          </span>
        </a>
        <a
          href="#_"
          className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            Sign Up
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
