import React, { useState } from "react";
import EventDetails from "./EventDetails";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import EventLogo from "../assets/event-logo.png";

const Flagship = ({ uniqueName, eventName, eventDescription, image }) => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);
  const mobileCheck = useMediaQuery("(min-width: 1350px)");

  return (
    <div
      className={`p-9 md:w-1/2 border-2 border-black rounded-md  flex flex-col gap-9 items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-90 text-center `}
    >
      <img src={EventLogo} alt="Event" className="w-1/2 md:w-1/3  mb-4" />
      <h1 className="font-bold text-3xl">{eventName}</h1>
      <p className=" text-start">{eventDescription}</p>
      <Link
        to={`/events/${uniqueName}`}
        className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  ${
          isSeeMoreHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsSeeMoreHovered(true)}
        onMouseLeave={() => setIsSeeMoreHovered(false)}
      >
        See More
      </Link>
    </div>
  );
};

export default Flagship;
