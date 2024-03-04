import React from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "@mui/material";

const Department = ({ name }) => {
  //   const mobileCheck = useMediaQuery();

  return (
    <Link className="w-full" to={`/more-events/${name}`}>
      <div className="border-2 border-black/50 p-9 w-full aspect-square flex items-center justify-center hover:bg-black hover:text-white rounded-lg duration-200 cursor-pointer hover:scale-100 ">
        <h1 className="text-3xl font-bold text-center ">{name}</h1>
      </div>
    </Link>
  );
};

export default Department;
