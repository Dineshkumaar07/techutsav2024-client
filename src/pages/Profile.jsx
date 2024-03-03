import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/auth";
const Profile = ({ paid }) => {
  const [isLogoutHovered, setLogoutHover] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState("");

  const verifyRequest = () => {
    if (sessionStorage.getItem("paid") === "false" && sessionStorage.getItem("transactionNumber") !== "") {
      return true;
    }
    return false;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 border-2 border-black p-9 rounded-lg items-center">
        <h1 className="text-4xl font-bold">TECHUTSAV 2024</h1>
        <h2 className="font-semibold text-3xl text-center">Profile</h2>
        <div className="flex flex-col gap-4 text-xl">
          <p>
            <span className="font-bold"> Name</span> :
            <span> {sessionStorage.getItem("name")}</span>
          </p>
          <p>
            {" "}
            <span className="font-bold"> Email</span> :
            <span> {sessionStorage.getItem("email")}</span>
          </p>{" "}
          <p>
            {" "}
            <span className="font-bold"> Phone</span> :
            <span> {sessionStorage.getItem("phone")}</span>
          </p>{" "}
          <p>
            {" "}
            <span className="font-bold"> College</span> :
            <span> {sessionStorage.getItem("college")}</span>
          </p>{" "}
          <p>
            {" "}
            <span className="font-bold"> Department</span> :
            <span> {sessionStorage.getItem("department")}</span>
          </p>
          {console.log(sessionStorage.getItem("paid"))}
          {sessionStorage.getItem("paid") === "true" ? (
            <p>
              <span className="font-bold"> Paid</span> :
              <span> {sessionStorage.getItem("paid")} </span>
            </p>
          ) : (
            <div>
              <p>
                {" "}
                <span className="font-bold"> Transaction Id</span> :
                <input
                  type="text"
                  placeholder="Enter Transaction Id"
                  className="focus:outline-none rounded-lg w-5/6 p-2"
                  value={transactionNumber}
                  onChange={(event) => {
                    setTransactionNumber(event.target.value);
                  }}
                />
              </p>
              <button
                className={`px-7 py-1  fill-righ border-2 border-black rounded-md text-center}`}
                onClick={() => {
                  api
                    .put("profile/updateProfile", {
                      email: "",
                      fullName: "",
                      collegeName: "",
                      department: "",
                      phoneNumber: "",
                      password: "",
                      transactionNumber: transactionNumber,
                    })
                    .then((result) => {
                      console.log(result);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Verify
              </button>
              {
                (verifyRequest()) ? "Requested for verification" : ""
              }
            </div>
          )}
        </div>
        <div className="flex justify-evenly w-full">
          <Link
            to="/"
            className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md text-center ${
              isBack ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsBack(true)}
            onMouseLeave={() => setIsBack(false)}
          >
            Back
          </Link>
          <Link
            onClick={() => {
              api
                .get("auth/logout")
                .then((res) => {
                  console.log(res);
                  window.location.reload();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            to="/"
            className={`px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md text-center ${
              isLogoutHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setLogoutHover(true)}
            onMouseLeave={() => setLogoutHover(false)}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
