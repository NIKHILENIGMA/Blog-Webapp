import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className=" shadow-ls sticky z-50 top-0">
      {/* NavBar */}
      <nav className=" border-gray-800 px-2 lg:px-6 py-2.5">
        <div className="bg-white flex flex-wrap items-center mx-auto max-w-screen-xl rounded-md shadow-lg">
          {/* Logo Image */}
          <Link to="/" className="flex items-center">
            <img
              className=" h-16 rounded-xl"
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
              alt="Logo"
            />
          </Link>

          <div className="bg-white w-[75%] h-14 flex items-center justify-center ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Blog"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>

              </li>
            </ul>
          </div>

          <div className="h-10  w-32 flex ">
            <button className= " text-black w-1/2 flex justify-center items-center rounded-lg hover:bg-black  hover:text-blue-200 hover:shadow-lg">Login</button>
            
          </div>
        </div>
      </nav>
    </header>
  );
}
