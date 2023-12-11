import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
import { LogoutBtn, Logo } from "../index";

export default function Header() {
  const autheStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Blog",
      slug: "/blog",
      active: true,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !autheStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !autheStatus,
    },
  ];

  return (
    <header className=" py-3 shadow-md bg-gray-300 ">
      <nav className="flex">
        //Todo add link to logo
        <div className="mr-4">Logo</div>
        <ul className=" flex ml-auto">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                // onClick={} //Todo use slug navigate
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {autheStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
