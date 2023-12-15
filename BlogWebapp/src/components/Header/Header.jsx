import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LogoutBtn, Logo, Button } from "../index";


export default function Header() {
  const autheStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

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
      name: "Contact",
      slug: "/contact",
      active: !autheStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !autheStatus,
    },
    // {
    //   name: "Sign Up",
    //   slug: "/signup",
    //   active: !autheStatus,
    // },
  ];

  return (
    <header className="sticky top-0 z-50 mx-32 rounded-lg py-3 shadow-lg bg-white ">
      <nav className="flex">
        {/* //Todo add link to logo */}
        <div className="mr-4 mx-2">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <ul className=" w-[70%] flex justify-evenly items-center  ">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <Button
                  onClick={()=>navigate(item.slug)}
                  className="bg-transparent"
                >
                  {item.name}
                </Button>
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

// npm i @tinymce/tinymce-react