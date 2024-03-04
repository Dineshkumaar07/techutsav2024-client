import React from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
const Department = ({ name }) => {
  //   const mobileCheck = useMediaQuery();

  return (
    <Link className="w-full" to={`/more-events/${name}`}>
      <Paper
        elevation={2}
        className=" p-9 w-full aspect-square flex items-center justify-center hover:bg-black hover:text-white  duration-300   cursor-pointer hover:scale-100 "
      >
        <h1 className="text-3xl font-bold text-center ">{name}</h1>
      </Paper>
    </Link>
  );
};

export default Department;
