import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";
import { api } from "../api/auth";
const Events = () => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);

  const [eventDetails, setEventDetails] = useState([]);
  const [flagShipEvents, setFlagShipEvents] = useState([]);

  useEffect(() => {
    api
      .get("event/getFirst")
      .then((result) => {
        setEventDetails(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .get("event/getFlagshipEvents")
      .then((result) => {
        setFlagShipEvents(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 place-items-center justify-items-center w-full mt-5">
          {eventDetails.length === 0 ? (
            <div>Failed to Load Data.. Please Refresh the Page!</div>
          ) : (
            eventDetails.map((element) => {
              console.log(element);
              return (
                <Event
                  uniqueName={element["uniqueName"]}
                  eventName={element["eventName"]}
                  eventDescription={element["eventAbstract"]}
                  image={"https://csi.coep.org.in/csi_logo.png"}
                />
              );
            })
          )}
        </div>
        <div className="flex w-full justify-between sm:px-36 mt-5">
          <h1 className="font-semibold text-3xl ">Flagship Events</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 place-items-center justify-items-center w-full mt-5">
          {flagShipEvents.length === 0 ? (
            <div>Failed to Load Data.. Please Refresh the Page!</div>
          ) : (
            flagShipEvents.map((element) => {
              console.log(element);
              return (
                <Event
                  uniqueName={element["uniqueName"]}
                  eventName={element["eventName"]}
                  eventDescription={element["eventAbstract"]}
                  image={"https://csi.coep.org.in/csi_logo.png"}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
