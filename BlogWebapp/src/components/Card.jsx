import React from "react";
import service from "../appwrite/config";
// import { Link} from "react-router-dom";

function Card({ $id, title, image }) {
  return (
    <div className="bg-green-500 w-full">
      <div className=" w-full">
        <img src={service.getFilePreview(image)} alt={title} />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}

export default Card;
