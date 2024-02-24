import React from "react";
import instagram from "../assets/instagram.png";
import { Link } from "react-router-dom";
const Footer = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "EVENTS", link: "events" },
    { name: "FAQs", link: "faq" },
    { name: "CONTACT", link: "contact" },
  ];
  return (
    <div className="w-full bg-black text-white  flex flex-col overflow-hidden">
      <div className="flex w-full justify-between  md:px-[9rem] md:py-[6rem] px-[3rem] py-[2rem] border-b-2 md:gap-0 gap-7 ">
        <div className="flex flex-col gap-7 ">
          <h1 className="font-bold tarcking-wider text-xl">TECHUTSAV’ 2024</h1>
          <p className="text-xl">THIAGARAJAR COLLEGE OF ENGINEERING, MADURAI</p>
        </div>
        <div className="">
          <h1 className="font-bold tarcking-wider text-2xl mb-5 text-center ">
            JOIN
          </h1>
          <div className="flex md:gap-5 gap-3 h-6">
            <a href="https://www.linkedin.com/school/thiagarajar-college-of-engineering/">
              <img
                className="h-7"
                src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                alt=""
              />
            </a>

            <a href="https://www.instagram.com/tce_madurai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img src={instagram} alt="" className="h-7" />
            </a>
            <a href="https://twitter.com/tceofficialpage">
              <img
                className="h-7"
                src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center my-5">
        <p>@Copyright 2024. Made by TCE</p>
      </div>
    </div>
  );
};

export default Footer;
