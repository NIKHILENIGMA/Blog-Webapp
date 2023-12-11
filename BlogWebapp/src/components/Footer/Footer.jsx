import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../Logo";

function Footer() {
  return (
    <>
      <div className=" bg-black w-full h-[40vh] text-white shadow-md flex">
        <div className=" bg-red-400 w-[25%] h-full ">
          <div className="bg-green-700 px-20 h-full">
            <h1 className="uppercase py-5 text-start ">Company Name</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quo iusto in adipisci! Mollitia nulla dolorum id
              nesciunt consectetur? Nostrum exercitationem tenetur vel assumenda
              quasi, omnis dolor dolorum ullam blanditiis!
            </p>
          </div>
        </div>
        <div className="bg-blue-400 w-[25%] h-full">
          <div className="bg-blue-800 px-20 h-full w-[80%] ml-10">
            <h1 className="uppercase py-5 text-start ">PRODUCTS</h1>
            <Link>

            </Link>
          </div>
        </div>
        <div className="bg-green-400 w-[25%] h-full"></div>
        <div className="bg-indigo-400 w-[25%] h-full"></div>
      </div>
    </>
  );
}

export default Footer;
