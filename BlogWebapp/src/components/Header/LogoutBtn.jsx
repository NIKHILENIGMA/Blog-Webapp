import React from "react";
import { useDispatch } from "react-redux";
import authServices from "../../appwrite/auth";
import { logout } from "../../features/auth/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authServices
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error(`Header :: Logout Btn :: failed :: ${error}`);
      });
  };

  return (
  <button
    onClick={logoutHandler}
    className=" bg-black text-white shadow-md px-4 py-2 w-2 h-5 hover:bg-white hover:text-white">
    Logout

  </button>);
}

export default LogoutBtn;
