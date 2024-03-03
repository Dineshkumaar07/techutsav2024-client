import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/auth";

import Typogrpahy from "@mui/material/Typography";

import { useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import MainLoader from "./MainLoader";

function EventDetails() {
  const [isBackHovered, setIsBackHovered] = useState(false);

  const { uniqueName } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);

  const mobileCheck = useMediaQuery("(min-width: 800px)");

  useEffect(() => {
    api
      .post("event/getSingleEvent", { uniqueName: uniqueName })
      .then((result) => {
        if (result.data === null) {
          setError(true);
          setLoading(false);
        } else {
          setData(result.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        //////////console.log(err);
      });
  }, []);

  //////////console.log("MobileCheck: " + mobileCheck);

  if (loading) {
    return <MainLoader />;
  }

  if (err) {
    return <MainLoader />;
  }

  return (
    <div>
      <div
        className={`${
          mobileCheck ? "h-screen" : "h-fit"
        } w-full flex items-center justify-evenly ${
          mobileCheck ? "overflow-hidden" : "overflow-y-scroll"
        } ${!mobileCheck ? "flex-col" : "flex-row"}`}
      >
        <div
          className={`${
            mobileCheck ? "w-[40%]" : "w-full"
          } h-full flex flex-col items-center bg-[#EBEBEB] justify-center relative ${
            mobileCheck ? "pt-0" : "pt-20"
          }`}
        >
          <nav className={`w-full h-[50px] p-3 absolute top-5 left-5`}>
            <Link
              to="/"
              className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                isBackHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsBackHovered(true)}
              onMouseLeave={() => setIsBackHovered(false)}
            >
              Back
            </Link>
          </nav>
          <img
            src={`https://techutsav2024.blob.core.windows.net/eventimages/${uniqueName}.jpg`}
            alt={uniqueName}
            className={`w-[80%] object-contain`}
          />
        </div>
        <div
          className={`${mobileCheck ? "w-[60%]" : "w-full"} ${
            mobileCheck ? "h-screen" : "h-fit"
          } overflow-y-scroll ${!mobileCheck ? "p-8" : "px-12 pb-12"}`}
        >
          <Typogrpahy
            className="sticky top-0 bg-white "
            marginTop={"20px"}
            fontSize={mobileCheck ? "60px" : "40px"}
            fontWeight="bold"
          >
            {data["eventName"]}
          </Typogrpahy>
          <Typogrpahy marginTop={"20px"} fontSize={"20px"}>
            <span className={"font-semibold"}>Department:</span>{" "}
            {data["department"]}
          </Typogrpahy>
          <Typogrpahy marginTop={"20px"} fontSize={"20px"}>
            <span className={"font-semibold"}>Abstract:</span>{" "}
            {data["eventAbstract"]}
          </Typogrpahy>
          <Typogrpahy marginTop={"20px"} fontSize={"20px"}>
            <span className={"font-semibold"}>Timing:</span>{" "}
            {data["eventTiming"]}
          </Typogrpahy>
          <Typogrpahy marginTop={"20px"} fontSize={"20px"}>
            <span className={"font-semibold"}>Queries:</span> {data["incharge"]}
            -{data["inchargeNumber"]}
          </Typogrpahy>
          <Typogrpahy marginTop={"20px"} fontSize={"20px"} fontWeight={"bold"}>
            Description:
          </Typogrpahy>
          <Typogrpahy marginTop={"10px"} className={`whitespace-pre-wrap`}>
            {data["eventDesp"]}
          </Typogrpahy>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
