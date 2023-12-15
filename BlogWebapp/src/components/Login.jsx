import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Logo, Signup } from "./index";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="w-screen bg-gray-100">
      <div className="h-screen mx-32 ">
        <div className=" h-full flex flex-wrap mx-14">
          <div className="w-1/2 h-[70vh] mt-14 b rounded-md">
            <img
              className=" object-cover overflow-x-auto h-full "
              src="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login Image"
            />
          </div>
          <div className="w-1/2 h-[70vh] mt-14 ">
            <form
              onSubmit={handleSubmit(login)}
              className="bg-white h-full flex flex-wrap justify-center items-center"
            >
              {error && (
                <p className="text-red-500 mt-8 text-center">{error}</p>
              )}

              <div className=" w-full">
                {/* Email Input */}
                <h1 className="text-center text-3xl mt-2 py-5 font-bold uppercase pr-20">
                  User Login
                </h1>
                <Input
                  className=" "
                  label="Email:"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
                {/* Password Input */}
                <Input
                  className=""
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                />

                {/* Password Input */}

                <Button
                  className=" bg-violet-700 flex flex-wrap uppercase px-5 py-2 rounded mt-5  justify-center text-md hover:bg-violet-500 focus:ring-2 focus:ring-violet-500 text-violet-100 w-1/2 ml-24 "
                  type="Submit"
                >
                  Log In
                </Button>
                <div className="text-start  ml-32 mb- w-1/2">
                  <p>
                    Create an account?
                    <Link
                      to="/signup"
                      className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                      {" "}
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
