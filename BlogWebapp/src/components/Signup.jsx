import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) dispatch(login(userData));
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-slate-100 w-full h-screen mt-10">
      <div className=" h-[80vh] mx-32 flex flex-wrap">
        <div className=" w-[55%] h-full">
          <img
            className=" object-cover h-full"
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-white w-[45%] h-full">
          <h1 className=" text-center text-3xl mt-2 py-5">SIGN UP</h1>
          <div className="bg-transparent ">
            {error && <p className="text-red-500 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(create)}>
              <div className=" py-8 flex flex-col">
                <Input
                  label="Full Name:"
                  placeholder=" Your Full name"
                  {...register("firstName", {
                    required: true,
                  })}
                />
                <Input
                  label="Email:"
                  placeholder=" Your Email: "
                  type="email"
                  {...register("firstName", {
                    required: true,
                  })}
                />
                <Input
                  label="Password :"
                  placeholder=" Your Password"
                  type="password"
                  {...register("Password", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />

                <Button
                  className="bg-violet-700 flex flex-wrap uppercase px-5 py-2 rounded mt-5  justify-center text-md hover:bg-violet-500 focus:ring-2 focus:ring-violet-500 text-violet-100 w-1/2 ml-24"
                  type="submit"
                >
                  Create Account
                </Button>
              </div>
            </form>
            <div className="text-start  ml-32 mb- w-1/2">
              <p>
                Have an account?
                <Link
                  to="/login"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
