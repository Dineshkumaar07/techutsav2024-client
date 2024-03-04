import React from "react";
import { Link } from "react-router-dom";
const Department = ({ name }) => {
  return (
    <Link
      className="hover:bg-black hover:text-white rounded-lg duration-200 cursor-pointer hover:scale-100"
      to={`/more-events/${name}`}
    >
      <div className="border-2 border-black/50 p-9 rounded-md w-[300px] h-[300px] flex items-center justify-center ">
        <h1 className="text-5xl font-bold text-center ">{name}</h1>
      </div>
    </Link>
  );
};

export default Department;
