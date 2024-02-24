import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/meet.json";
import { Link } from "react-router-dom";
import "../css/button.css";

const Home = () => {
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-[90vh] flex flex-col relative items-center justify-evenly sm:flex-row px-9 sm:px-0 md:px-9  sm:mt-0 bg-[#f6f6fe] ">
      <div className="flex flex-col gap-4  justify-center bg-[#f6f6fe] z-30">
        <p className="font-semibold text-xl md:text-3xl">
          THIAGARAJAR COLLEGE OF ENGINEERING PRESENTS
        </p>
        <h1 className="font-bold md:text-5xl lg:text-8xl  text-4xl">
          TECHUTSAV’ 2024
        </h1>
        <p className="text-xl">
          Decoding the Digital: Unveiling the future of tech.
        </p>
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
      </div>
      <div className="sm:w-1/3 w-[350px] sm:mt-0 bg-[#f6f6fe] z-30">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Home;
