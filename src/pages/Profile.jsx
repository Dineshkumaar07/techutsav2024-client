import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/auth";
import animationData from "../lotties/profile.json";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Lottie from "react-lottie";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useMediaQuery } from "@mui/material";
import Footer from "./Footer";
import MainLoader from "../components/MainLoader";

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import { SnackbarComponent } from "../components/SnackbarComponent";

const Profile = () => {
  const options = ["Not Selected", "CSE", "IT", "CSBS", "DS"];
  const original = [
    "",
    "Computer Science and Engineering",
    "Information Technology",
    "Computer Science and Business Systems",
    "Applied Mathematics and Computational Science",
  ];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageBack, setMessageBack] = useState("green");

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    console.log(options[index]);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const status = api
      .get("profile/getProfile")
      .then((res) => {
        setVerifyLoading(false);
        console.log(res);
        sessionStorage.setItem("name", res.data[0].fullName);
        sessionStorage.setItem("email", res.data[0].email);
        sessionStorage.setItem("phone", res.data[0].phoneNumber);
        sessionStorage.setItem("college", res.data[0].collegeName);
        sessionStorage.setItem("department", res.data[0].department);
        sessionStorage.setItem("paid", res.data[0].paid);
        sessionStorage.setItem(
          "transactionNumber",
          res.data[0].transactionNumber
        );
        sessionStorage.setItem(
          "selectedDepartment",
          res.data[0].selectedDepartment
        );
        setTransactionNumber(res.data[0].transactionNumber);
        if (res.data[0].transactionNumber.length !== 0) {
          setDisabledState(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        // console.log("Not Authenticated");
        window.location.replace("/login");
      });
  }, [verify]);
  const [isLogoutHovered, setLogoutHover] = useState(false);
  const [isVerifyHovered, setVerifyHovered] = useState(false);
  const [isVerifyLoading, setVerifyLoading] = useState(false);

  const [isBack, setIsBack] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState("");
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);

  const [disabledState, setDisabledState] = useState(false);

  const mobileCheck = useMediaQuery("(min-width: 900px)");

  const verifyRequest = () => {
    if (sessionStorage.getItem("paid") === "true") {
      return "Payment Successful";
    } else if (
      sessionStorage.getItem("paid") === "false" &&
      sessionStorage.getItem("transactionNumber") !== ""
    ) {
      return "Requested for Verification";
    }
    return "Not Verified";
  };

  const displayButton = () => {
    if (!mobileCheck && verifyRequest() === "Payment Successful") {
      return true;
    }
    return false;
  };

  const defaultOptions = {
    controls: false,
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loading) {
    return <MainLoader />;
  }
  //Toggle

  return (
    <div>
      <div
        className={`w-full ${mobileCheck ? "h-screen" : "h-fit"} flex ${
          mobileCheck ? "flex-row" : "flex-col"
        } justify-center items-center relative mb-10 overflow-x-hidden`}
      >
        <div
          className={`${
            mobileCheck ? "w-[50%]" : "w-[90%]"
          } h-full flex flex-col items-center justify-center`}
        >
          <nav className={`w-full h-[50px] absolute top-5 left-5`}>
            <Link
              to="/"
              className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md fixed md:block bg-white z-30  ${
                isSeeMoreHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsSeeMoreHovered(true)}
              onMouseLeave={() => setIsSeeMoreHovered(false)}
            >
              Back
            </Link>
          </nav>
          <div className={`flex items-start flex-col gap-8 mt-5`}>
            <h1
              className={`${mobileCheck ? "text-8xl" : "text-4xl"} font-black ${
                mobileCheck ? "mt-0" : "mt-10"
              }`}
            >
              PROFILE
            </h1>
            {!mobileCheck && (
              <Lottie
                options={defaultOptions}
                className={`w-[400px] aspect-[1/1] border rounded-[50%] p-10`}
              />
            )}
            <table className="table-auto  ">
              <tbody>
                <tr>
                  <td className={`font-semibold text-lg`}>Name:</td>{" "}
                  {sessionStorage.getItem("name")}
                </tr>
                <tr>
                  <td className={`font-semibold text-lg`}>Department:</td>{" "}
                  {sessionStorage.getItem("department")}
                </tr>
                <tr>
                  <td className={`font-semibold text-lg`}>College:</td>{" "}
                  {sessionStorage.getItem("college")}
                </tr>
                <tr>
                  <td className={`font-semibold text-lg`}>Phone:</td>{" "}
                  {sessionStorage.getItem("phone")}
                </tr>
                <tr>
                  <td className={`font-semibold text-lg`}>Email:</td>{" "}
                  {sessionStorage.getItem("email")}
                </tr>
                <tr>
                  <td className={`font-semibold  text-lg`}>Payment Status:</td>{" "}
                  {verifyRequest()}
                </tr>
                <tr>
                  <td className={`font-semibold pr-9 text-lg`}>
                    Interested Department:{" "}
                  </td>
                  {disabledState ? (
                    <>
                      {sessionStorage.getItem("selectedDepartment")}
                    </>
                  ) : (
                    <div className="border-2 w-full rounded-lg inline py-2 ">
                      <React.Fragment>
                        <ButtonGroup
                          variant="outline"
                          ref={anchorRef}
                          aria-label="Button group with a nested menu"
                        >
                          <Button onClick={handleClick}>
                            {options[selectedIndex]}
                          </Button>
                          <Button
                            size="small"
                            aria-controls={
                              open ? "split-button-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                          >
                            <ArrowDropDownIcon />
                          </Button>
                        </ButtonGroup>
                        <Popper
                          sx={{
                            zIndex: 1,
                          }}
                          open={open}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin:
                                  placement === "bottom"
                                    ? "center top"
                                    : "center bottom",
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList
                                    id="split-button-menu"
                                    autoFocusItem
                                  >
                                    {options.map((option, index) => (
                                      <MenuItem
                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) =>
                                          handleMenuItemClick(event, index)
                                        }
                                      >
                                        {option}
                                      </MenuItem>
                                    ))}
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                      </React.Fragment>
                    </div>
                  )}
                </tr>
              </tbody>
            </table>

            <p className="font-semibold">
              ** Workshop can be attended irrespective of the selected
              department
            </p>
            {mobileCheck && (
              <div>
                <button
                  to="/login"
                  onClick={() => {
                    api
                      .get("auth/logout")
                      .then((res) => {
                        //console.log(res);
                        sessionStorage.removeItem("name");
                        sessionStorage.removeItem("email");
                        sessionStorage.removeItem("college");
                        sessionStorage.removeItem("paid");
                        sessionStorage.removeItem("department");
                        sessionStorage.removeItem("transactionNumber");
                        sessionStorage.removeItem("phone");
                        window.location.replace("/");
                      })
                      .catch((err) => {
                        //console.log(err);
                      });
                  }}
                  className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  md:block ${
                    isLogoutHovered ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setLogoutHover(true)}
                  onMouseLeave={() => setLogoutHover(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${
            mobileCheck ? "w-[50%]" : "w-[90%]"
          } h-full flex flex-col items-center justify-center`}
        >
          {mobileCheck && (
            <div className="h-[400px]">
              <Lottie options={defaultOptions} />
            </div>
          )}
          {!(verifyRequest() === "Payment Successful") && (
            <div>
              <div className={`text-1xl mt-3 flex items-center font-bold`}>
                ** For Payment Details Download this file{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <Button
                  sx={{ marginLeft: "10px" }}
                  onClick={() => {
                    window.open(
                      "https://techutsav2024.blob.core.windows.net/eventdetails/Techutsav2024Paymentprocess.pdf"
                    );
                  }}
                >
                  <CloudDownloadIcon />
                </Button>
              </div>
              <div className={`mt-3`}>
                <p>Please Enter your Transaction Number after Payment</p>
                <input
                  type="text"
                  className={`mt-5 h-[30px] p-5 min-w-[200px] border`}
                  placeholder="Transaction Number"
                  value={transactionNumber}
                  disabled={disabledState}
                  onChange={(event) => {
                    setTransactionNumber(event.target.value);
                  }}
                />
              </div>
              <div
                className={`flex items-end flex-row justify-center gap-3 mt-5`}
              >
                <button
                  to="/login"
                  onClick={() => {
                    if (selectedIndex === 0) {
                      setSnackbarOpen(true);
                      setMessage("Select Any one Department");
                      setMessageBack("red");
                    } else if (transactionNumber.length === 0) {
                      setSnackbarOpen(true);
                      setMessage("Enter your Transaction Number");
                      setMessageBack("red");
                    } else {
                      setVerifyLoading(true);
                      setMessage("Submitting...");
                      setMessageBack("green");
                      api
                        .put("profile/updateProfile", {
                          transactionNumber: transactionNumber,
                          fullName: sessionStorage.getItem("name"),
                          email: sessionStorage.getItem("email"),
                          selectedDepartment: original[selectedIndex],
                        })
                        .then((result) => {
                          setVerify(!verify);
                          setMessage("Submitted");
                          setMessageBack("green");
                          //console.log(result);
                        })
                        .catch((err) => {
                          //console.log(err);
                        });
                    }
                    //console.log(transactionNumber);
                  }}
                  className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  md:block ${
                    isVerifyHovered ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setVerifyHovered(true)}
                  onMouseLeave={() => setVerifyHovered(false)}
                >
                  Verify{" "}
                </button>
                {isVerifyLoading && (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                )}

                {!mobileCheck && (
                  <div>
                    <button
                      to="/login"
                      onClick={() => {
                        api
                          .get("auth/logout")
                          .then((res) => {
                            //console.log(res);
                            sessionStorage.removeItem("name");
                            sessionStorage.removeItem("email");
                            sessionStorage.removeItem("college");
                            sessionStorage.removeItem("paid");
                            sessionStorage.removeItem("department");
                            sessionStorage.removeItem("transactionNumber");
                            sessionStorage.removeItem("phone");
                            window.location.replace("/");
                          })
                          .catch((err) => {
                            //console.log(err);
                          });
                      }}
                      className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  md:block ${
                        isLogoutHovered ? "hovered" : ""
                      }`}
                      onMouseEnter={() => setLogoutHover(true)}
                      onMouseLeave={() => setLogoutHover(false)}
                    >
                      Logout
                    </button>
                    <Link
                      to="/"
                      className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md fixed md:block ${
                        isSeeMoreHovered ? "hovered" : ""
                      }`}
                      onMouseEnter={() => setIsSeeMoreHovered(true)}
                      onMouseLeave={() => setIsSeeMoreHovered(false)}
                    >
                      Back
                    </Link>
                  </div>
                )}
              </div>
              {verifyRequest() === "Requested for Verification" && (
                <p className={`max-w-[400px] mt-[20px] text-[#FF1717]`}>
                  Your Verification request has been sent. Please wait for the
                  admin to update your profile. If the profile is not updated
                  within 36 Hours please contact using the number provided on
                  the site.
                </p>
              )}
            </div>
          )}
          {displayButton() && (
            <div className="w-full mt-5">
              <button
                to="/login"
                onClick={() => {
                  api
                    .get("auth/logout")
                    .then((res) => {
                      //console.log(res);
                      sessionStorage.removeItem("name");
                      sessionStorage.removeItem("email");
                      sessionStorage.removeItem("college");
                      sessionStorage.removeItem("paid");
                      sessionStorage.removeItem("department");
                      sessionStorage.removeItem("transactionNumber");
                      sessionStorage.removeItem("phone");
                      window.location.replace("/");
                    })
                    .catch((err) => {
                      //console.log(err);
                    });
                }}
                className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  md:block ${
                  isLogoutHovered ? "hovered" : ""
                }`}
                onMouseEnter={() => setLogoutHover(true)}
                onMouseLeave={() => setLogoutHover(false)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <SnackbarComponent
        open={snackbarOpen}
        message={message}
        messageBack={messageBack}
        setOpen={setSnackbarOpen}
      />
      <Footer />
    </div>
  );

  // return (
  //   <div className="w-full h-screen flex justify-center items-center">
  //     <div className="flex flex-col gap-5 border-2 border-black p-9 rounded-lg items-center">
  //       <h1 className="text-4xl font-bold">TECHUTSAV 2024</h1>
  //       <h2 className="font-semibold text-3xl text-center">Profile</h2>
  //       <div className="flex flex-col gap-4 text-xl">
  //         <p>
  //           <span className="font-bold"> Name</span> :
  //           <span> {sessionStorage.getItem("name")}</span>
  //         </p>
  //         <p>
  //           {" "}
  //           <span className="font-bold"> Email</span> :
  //           <span> {sessionStorage.getItem("email")}</span>
  //         </p>{" "}
  //         <p>
  //           {" "}
  //           <span className="font-bold"> Phone</span> :
  //           <span> {sessionStorage.getItem("phone")}</span>
  //         </p>{" "}
  //         <p>
  //           {" "}
  //           <span className="font-bold"> College</span> :
  //           <span> {sessionStorage.getItem("college")}</span>
  //         </p>{" "}
  //         <p>
  //           {" "}
  //           <span className="font-bold"> Department</span> :
  //           <span> {sessionStorage.getItem("department")}</span>
  //         </p>
  //         {//console.log(sessionStorage.getItem("paid"))}
  //         {sessionStorage.getItem("paid") === "true" ? (
  //           <p>
  //             <span className="font-bold"> Paid</span> :
  //             <span> {sessionStorage.getItem("paid")} </span>
  //           </p>
  //         ) : (
  //           <div>
  //             <p>
  //               {" "}
  //               <span className="font-bold"> Transaction Id</span> :
  //               <input
  //                 type="text"
  //                 placeholder="Enter Transaction Id"
  //                 className="focus:outline-none rounded-lg w-5/6 p-2"
  //                 value={transactionNumber}
  //                 onChange={(event) => {
  //                   setTransactionNumber(event.target.value);
  //                 }}
  //               />
  //             </p>
  //             <button
  //               className={`px-7 py-1  fill-righ border-2 border-black rounded-md text-center}`}
  //             >
  //               Verify
  //             </button>
  //             {
  //               (verifyRequest()) ? "Requested for verification" : ""
  //             }
  //           </div>
  //         )}
  //       </div>
  //       <div className="flex justify-evenly w-full">
  //         <Link
  //           to="/"
  //           className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md text-center ${
  //             isBack ? "hovered" : ""
  //           }`}
  //           onMouseEnter={() => setIsBack(true)}
  //           onMouseLeave={() => setIsBack(false)}
  //         >
  //           Back
  //         </Link>
  //         <Link
  //           onClick={() => {
  //             api
  //               .get("auth/logout")
  //               .then((res) => {
  //                 //console.log(res);
  //                 window.location.reload();
  //               })
  //               .catch((err) => {
  //                 //console.log(err);
  //               });
  //           }}
  //           to="/"
  //           className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md text-center ${
  //             isLogoutHovered ? "hovered" : ""
  //           }`}
  //           onMouseEnter={() => setLogoutHover(true)}
  //           onMouseLeave={() => setLogoutHover(false)}
  //         >
  //           Logout
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Profile;
