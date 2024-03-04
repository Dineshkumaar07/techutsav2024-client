import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";
import { api } from "../api/auth";
import CardSkeleton from "../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useMediaQuery } from "@mui/material";
import Department from "../components/Department";
import Flagship from "../components/Flagship";

const Events = () => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);
  const check = useMediaQuery("(min-width:750px)");
  const maxCheck = useMediaQuery("(max-width:1024px)");

  const [flagShipEvents, setFlagShipEvents] = useState([]);

  const [flagshipLoading, setFlagshipLoading] = useState(true);

  const departments = ["CSE", "IT", "CSBS", "DS"];

  useEffect(() => {
    setFlagshipLoading(true);
    api
      .get("event/getFlagshipEvents")
      .then((result) => {
        setFlagShipEvents(result.data);
        setFlagshipLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" py-5 px-9 flex flex-col gap-8 ">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 ">EVENTS</h1>
      <div className="w-full justify-start">
        <div className="flex w-full justify-start">
          <h1 className="font-semibold text-xl sm:text-3xl">Workshop</h1>
        </div>
        <div className="w-full mt-5 flex justify-center">
          {flagshipLoading ? (
            <CardSkeleton cards={1} />
          ) : (
            flagShipEvents.map((element) => {
              console.log(element);
              return (
                <div className="flex w-full sm:justify-center">
                  <Flagship
                    uniqueName={element["uniqueName"]}
                    eventName={element["eventName"]}
                    eventDescription={element["eventAbstract"]}
                    image={"https://csi.coep.org.in/csi_logo.png"}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="w-full justify-start">
        <div className="flex w-full justify-start">
          <h1 className="font-semibold text-xl sm:text-3xl">Departments</h1>
        </div>
        <div className=" mt-9 grid sm:grid-cols-2  md:grid-cols-4 gap-9 w-full items-center justify-center ">
          {departments.map((element, i) => {
            return <Department name={departments[i]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
