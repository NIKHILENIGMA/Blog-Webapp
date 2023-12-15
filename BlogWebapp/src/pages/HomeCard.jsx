import HomeCards from "../components/HomeCards";
import React from "react";

function HomeCard({title}) {
  return (
  <div className="flex mt-5">
    <HomeCards  />
    <HomeCards  />
    <HomeCards />
  </div>);
}

export default HomeCard;
