import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/auth/authSlice";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // {console.log(authService.getCurrentUser);}
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.error(`Error occur :: App :: getCurrentUser :: ${err} `);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-100">
      <div className="w-full block">
        <Header />
        <main>
           <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
