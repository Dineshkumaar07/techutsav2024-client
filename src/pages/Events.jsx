import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";
import { api } from "../api/auth";
import CardSkeleton from "../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useMediaQuery } from "@mui/material";
import Department from "../components/Department";

const Events = () => {
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);
  const check = useMediaQuery("(min-width:750px)");
  const maxCheck = useMediaQuery("(max-width:1024px)");

  const [flagShipEvents, setFlagShipEvents] = useState([]);

  const [loading, setLoading] = useState(true);
  const [flagshipLoading, setFlagshipLoading] = useState(true);

  const departments = ["CSE", "IT", "CSBS", "DS"];

  return (
    <div className=" py-5 px-9 flex flex-col gap-8 ">
      <h1 className="text-6xl sm:text-9xl font-bold text-black/40 ">EVENTS</h1>
      <div>
        <div className="flex w-full justify-between sm:px-36 ">
          <h1 className="font-semibold text-xl sm:text-3xl">Departments</h1>
        </div>
        <div className=" flex gap-9 w-full mt-9 items-center justify-center">
          {departments.map((element, i) => {
            return <Department name={departments[i]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
