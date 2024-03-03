import React, { useState } from "react";
import EventDetails from "./EventDetails";
import { Link } from "react-router-dom";

import EventLogo from "../assets/event-logo.png";

const Event = ({ uniqueName, eventName, eventDescription, image }) => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);

  return (
    <div className="lg:w-full w-5/6 border-2 border-black rounded-md p-7 flex flex-col gap-9 items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-90 aspect-[1/1] text-center">
      <img src={EventLogo} alt="Event" className="w-1/2 md:w-1/3  mb-4" />
      <h1 className="font-bold text-3xl">{eventName}</h1>
      <h1>{eventDescription}</h1>
      <button
        className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  ${
          isSeeMoreHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsSeeMoreHovered(true)}
        onMouseLeave={() => setIsSeeMoreHovered(false)}
      >
        <Link to={`/events/${uniqueName}`}>See More</Link>
      </button>
    </div>
  );
};

export default Event;
