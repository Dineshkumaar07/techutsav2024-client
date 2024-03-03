import React, { useState, useEffect, useRef } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";

import { api } from "../api/auth";
import Footer from "./Footer";

import CardSkeleton from "../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MoreEvents = () => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);
  const scrollUp = useRef(null);
  useEffect(() => {
    scrollUp.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("event/getAll")
      .then((result) => {
        setEventDetails(result.data);
        setLoading(false);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  // const events = [
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  //   {
  //     eventName: "Event",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     images: "https://csi.coep.org.in/csi_logo.png",
  //   },
  // ];

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center w-full gap-6 p-9 relative"
        ref={scrollUp}
      >
        <h1 className="text-5xl font-bold">TECHUTSAV 2024</h1>
        <h2 className="text-4xl font-bold">EVENTS</h2>
        <div className="w-full flex justify-end">
          <Link
            to="/"
            className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  ${
              isSeeMoreHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsSeeMoreHovered(true)}
            onMouseLeave={() => setIsSeeMoreHovered(false)}
          >
            Back
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 place-items-center justify-items-center  w-full ">
          {loading ? (
            <CardSkeleton cards={9} />
          ) : (
            eventDetails.map((event) => (
              <Event
                uniqueName={event.uniqueName}
                eventName={event.eventName}
                eventDescription={event.eventAbstract}
                image={"https://csi.coep.org.in/csi_logo.png"}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoreEvents;
