import React, { useState } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";
const Events = () => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);

  return (
    <div className=" py-5 px-9 flex flex-col gap-8 ">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 ">EVENTS</h1>
      <div>
        <div className="flex w-full justify-between sm:px-36 ">
          <h1 className="font-semibold text-xl sm:text-3xl">Contests</h1>
          <Link
            to="/more-events"
            className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
              isSeeMoreHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsSeeMoreHovered(true)}
            onMouseLeave={() => setIsSeeMoreHovered(false)}
          >
            See More
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center my-9 ">
          <Event
            eventName={"Blind Coding"}
            eventDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
            image={"https://csi.coep.org.in/csi_logo.png"}
          />
          <Event
            eventName={"Blind Coding"}
            eventDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
            image={"https://csi.coep.org.in/csi_logo.png"}
          />
          <Event
            eventName={"Blind Coding"}
            eventDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
            image={"https://csi.coep.org.in/csi_logo.png"}
          />
        </div>
        <div className="flex w-full justify-between sm:px-36 ">
          <h1 className="font-semibold text-3xl ">Flagship Events</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center my-9 ">
          {" "}
          <Event
            eventName={"Blind Coding"}
            eventDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
            image={"https://csi.coep.org.in/csi_logo.png"}
          />
          <Event
            eventName={"Blind Coding"}
            eventDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
            image={"https://csi.coep.org.in/csi_logo.png"}
          />
          <Event
            eventName={"Blind Coding"}
            eventDescription={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
            image={"https://csi.coep.org.in/csi_logo.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
