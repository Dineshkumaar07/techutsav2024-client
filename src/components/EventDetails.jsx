import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const scrollUp = useRef(null);

  useEffect(() => {
    scrollUp.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
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
    <div ref={scrollUp}>
      <div
        className={`${
          mobileCheck ? "h-screen" : "h-fit"
        } w-full flex items-center justify-evenly ${
          mobileCheck ? "overflow-hidden" : "overflow-y-scroll"
        } ${!mobileCheck ? "flex-col" : "flex-row"} min-h-screen`}
      >
        <div
          className={`${
            mobileCheck ? "w-[40%]" : "w-full"
          } h-full flex flex-col items-center bg-[#EBEBEB] justify-center relative ${
            mobileCheck ? "pt-0" : "pt-20"
          }`}
        >
          {!mobileCheck && (
            <nav className={`w-full h-[50px] p-3 absolute top-5 left-5`}>
              <button
                onClick={() => navigate(-1)}
                className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                  isBackHovered ? "hovered" : ""
                }`}
                onMouseEnter={() => setIsBackHovered(true)}
                onMouseLeave={() => setIsBackHovered(false)}
              >
                Back
              </button>
            </nav>
          )}
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
          <div className="w-full flex items-center justify-between sticky top-0 bg-white">
            <Typogrpahy
              marginTop={"20px"}
              fontSize={mobileCheck ? "60px" : "40px"}
              fontWeight="bold"
            >
              {data["eventName"]}
            </Typogrpahy>
            {mobileCheck && (
              <button
                onClick={() => navigate(-1)}
                className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                  isBackHovered ? "hovered" : ""
                }`}
                onMouseEnter={() => setIsBackHovered(true)}
                onMouseLeave={() => setIsBackHovered(false)}
              >
                Back
              </button>
            )}
          </div>
          {/* <Typogrpahy
            className="sticky top-0 bg-white "
            marginTop={"20px"}
            fontSize={mobileCheck ? "60px" : "40px"}
            fontWeight="bold"
          >
            {data["eventName"]}
          </Typogrpahy> */}
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
