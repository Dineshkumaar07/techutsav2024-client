import React, { useState, useEffect, useRef } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";

const MoreEvents = () => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);
  const scrollUp = useRef(null);
  useEffect(() => {
    scrollUp.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const events = [
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
    {
      eventName: "Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      images: "https://csi.coep.org.in/csi_logo.png",
    },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-6 p-9 relative"
      ref={scrollUp}
    >
      <h1 className="text-5xl font-bold">TECHUTSAV 2024</h1>
      <h2 className="text-3xl font-semibold">EVENTS</h2>
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
        {events.map((event) => (
          <Event
            eventName={event.eventName}
            eventDescription={event.description}
            image={event.images}
          />
        ))}
      </div>
      ;
    </div>
  );
};

export default MoreEvents;
