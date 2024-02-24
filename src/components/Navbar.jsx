// import React, { useState } from "react";
import logo from "../assets/logo.png";
// const Navbar = () => {
// const [isLoginHovered, setIsLoginHovered] = useState(false);

//   return (
//     <nav className="flex w-full justify-between items-center px-4 fixed bg-white/90 z-20 ">
//       <div>
//         <img src={logo} alt="TCE" className="mt-1" />
//       </div>
//       <div>
//         <ul className="flex gap-14 items-center">
//           <li className="cursor-pointer">HOME</li>
//           <li className="cursor-pointer">ABOUT</li>
//           <li className="cursor-pointer">EVENTS</li>
//           <li className="cursor-pointer">FAQs</li>
//           <li className="cursor-pointer">CONTACT</li>
// <li className="cursor-pointer">
//   <button
//     className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
//       isLoginHovered ? "hovered" : ""
//     }`}
//     onMouseEnter={() => setIsLoginHovered(true)}
//     onMouseLeave={() => setIsLoginHovered(false)}
//   >
//     Profile
//   </button>
// </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import { api } from "../api/auth";

const Navbar = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);

  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "EVENTS", link: "events" },
    { name: "FAQs", link: "faq" },
    { name: "CONTACT", link: "contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full  top-0 left-0 sticky z-40  ">
      <div className="lg:flex items-center flex  justify-between py-2 bg-[#f6f6fe] lg:px-10 px-9 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-30}
            className=""
          >
            <img src={logo} alt="TCE" />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden flex items-center h-[5vh]"
        >
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
          {open ? (
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-9 absolute lg:static bg-[#f6f6fe] md:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-16 text-xl lg:my-0 my-7 cursor-pointer"
            >
              <Link
                onClick={() => {
                  open ? setOpen(!open) : setOpen(open);
                }}
                to={link.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="  font-semibold text-base tracking-wider"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer ml-0 lg:ml-11">
            <button
              className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                isLoginHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
            >
              Profile
            </button>
            <button
              onClick={() => {
                api
                  .get("auth/logout")
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md ${
                isLoginHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
