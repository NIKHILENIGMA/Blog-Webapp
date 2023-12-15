import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../Logo";

function Footer() {
  return (
    <>
      <div className=" bg-gray-100 w-full h-[40vh] text-black shadow-md flex">
        <div className="  w-[25%] h-full ">
          <div className="bg-transparent px-20 h-full pt-5">
            <h1 className="uppercase py-5 text-start ">Company Name</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quo iusto in adipisci! Mollitia nulla dolorum id
              nesciunt consectetur? Nostrum exercitationem tenetur vel assumenda
              quasi, omnis dolor dolorum ullam blanditiis!
            </p>
          </div>
        </div>
        <div className="w-[25%] h-full">
          <div className="bg-transparent px-20 h-full w-[80%] ml-10 pt-5">
            <h1 className="uppercase py-5 text-start ">PRODUCTS</h1>
            <p className="mt-2">MDBootstrap</p>
            <p className="mt-2">MDWordstrap</p>
            <p className="mt-2">Brand Flow</p>
            <p className="mt-2">Bootstrap Angular</p>
          </div>
        </div>
        <div className=" w-[25%] h-full">
          <div className="bg-transparent px-20 h-full w-[80%] ml-10 pt-5">
            <h1 className="uppercase py-5 text-start ">contacts</h1>
            <p className="mt-2">New York NY 10010, US</p>
            <p className="mt-2">Info@gmai.com</p>
            <p className="mt-2">+01 234 567 88</p>
            <p className="mt-2">+01 234 567 89</p>
          </div>
        </div>
        <div className="w-[25%] h-full">
          <div className="bg-transparent px-20 h-full w-[80%] ml-10 pt-5">
            <h1 className="uppercase py-5 text-start ">contacts</h1>
            <p className="mt-2">New York NY 10010, US</p>
            <p className="mt-2">Info@gmai.com</p>
            <p className="mt-2">+01 234 567 88</p>
            <p className="mt-2">+01 234 567 89</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
