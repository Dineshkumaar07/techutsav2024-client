import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/meet.json";
import { Link as Alink } from "react-scroll";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import "../css/button.css";

const Home = ({ authenticated }) => {
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const mobileCheck = useMediaQuery("(min-width:900px)");
  const mobileCheck1 = useMediaQuery("(min-width:600px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`w-full ${
        mobileCheck
          ? "h-[90vh] flex items-center justify-center px-9 "
          : "flex px-10  items-center py-6"
      }   bg-[#f6f6fe] `}
    >
      <div className="flex flex-col gap-4  justify-center bg-[#f6f6fe] z-30">
        <p className="font-semibold text-xl lg:text-3xl">
          THIAGARAJAR COLLEGE OF ENGINEERING PRESENTS
        </p>
        <h1 className="font-bold lg:text-7xl   text-4xl">TECHUTSAV’ 2024</h1>
        <p className="lg:text-5xl text-3xl">On 13th March</p>
        <p className="text-xl">
          Decoding the Digital: Unveiling the future of tech.
        </p>
        {authenticated ? (
          <div className="flex gap-9 mt-6 flex-col ">
            <p className="text-2xl font-semibold">
              Welcome, {sessionStorage.getItem("name")}
            </p>
            <div className="flex gap-5 flex-col md:flex-row">
              <Alink
                to="events"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  text-center cursor-pointer ${
                  isExploreHovered ? "hovered" : ""
                }`}
                onMouseEnter={() => setIsExploreHovered(true)}
                onMouseLeave={() => setIsExploreHovered(false)}
              >
                Explore
              </Alink>
              <Link
                to="/profile"
                className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  text-center ${
                  isProfileHovered ? "hovered" : ""
                }`}
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 mt-4 sm:mt-8">
            {" "}
            <Link
              to="/register"
              className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                isRegisterHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsRegisterHovered(true)}
              onMouseLeave={() => setIsRegisterHovered(false)}
            >
              Register
            </Link>
            <Link
              to="/login"
              className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                isLoginHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
      <div
        className={` bg-[#f6f6fe] z-30  ${
          mobileCheck1 ? "w-[400px]" : "hidden"
        }`}
      >
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Home;
