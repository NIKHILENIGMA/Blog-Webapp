import React from "react";
import HomeCard from "./HomeCard";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className=" bg-slate-100 h-[200vh] ">
      {/* Image */}
      <div className=" mt-5 rounded-sm">
        <img
          className="object-contain w-[100%] h-[60rem] "
          src="https://images.unsplash.com/photo-1695653422853-3d8f373fb434?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
        />

        <div className=" absolute top-72 z-0 bg-transparent w-full text-white">
          <p className=" text-center font-semibold text-9xl uppercase mb-8 text-white drop-shadow-md">
            Welcome to Blogger
          </p>
          <p className="flex flex-wrap uppercase text-center font-semi text-8xl text-white drop-shadow-xl ">
            Start your Blogging Journey with us
          </p>
          <button className="bg-violet-700 flex flex-wrap uppercase px-5 py-2 rounded mt-3 mx-auto text-center text-xl hover:bg-violet-500 focus:ring-2 focus:ring-violet-500 ">
            Start
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="mt-10">
        <HomeCard />
      </div>
    </div>
  );
}

export default Home;
