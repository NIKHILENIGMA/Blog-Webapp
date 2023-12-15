import React from "react";

function HomeCards({children}) {
  return (
  <div className="relative bg-green-300 mx-auto my-2">
    <div className="w-[23rem] h-[26rem] px-">
        <img className="h-full" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <button className="absolute top-40 left-28 bg-violet-700 flex flex-wrap uppercase px-5 py-2 rounded mt-3 mx-auto text-center text-md hover:bg-violet-500 focus:ring-2 focus:ring-violet-500 text-violet-100">Technology</button>
    </div>

  </div>);
}

export default HomeCards;
   