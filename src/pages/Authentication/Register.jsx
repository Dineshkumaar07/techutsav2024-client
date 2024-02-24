import React, { useState } from "react";
import EyeClose from "../../components/EyeClose.jsx";
import EyeOpen from "../../components/EyeOpen.jsx";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/auth.js";

const Register = () => {
  let navigate = useNavigate();
  const button =
    "font-semibold bg-white/50 px-2 py-2 rounded-md tracking-wide hover:bg-black hover:text-white duration-150 mt-4";
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [deptName, setDeptName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [incomplete, setIncomplete] = useState(false);
  const [incomplete2, setIncomplete2] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handlePage1 = () => {
    if (name.length != 0 && email.length != 0 && phoneNumber.length != 0) {
      setIncomplete(false);
      if (name.length <= 5) {
        setIsValidName(!name);
        return;
      } else {
        setIsValidName(true);
      }
      if (!emailRegex.test(email)) {
        setIsValidEmail(false);
        return;
      } else {
        setIsValidEmail(true);
      }
      if (!phoneRegex.test(phoneNumber)) {
        setIsValidPhoneNumber(false);
        return;
      } else {
        setIsValidPhoneNumber(true);
      }
      setPage(page + 1);
    } else {
      setIncomplete(true);
    }
  };

  const handlePage2 = async () => {
    if (
      collegeName.length != 0 &&
      deptName.length != 0 &&
      password.length != 0 &&
      confirmPassword.length != 0
    ) {
      setIncomplete2(false);
      if (password.length < 6) {
        setIsValidPassword(false);
        return;
      } else {
        setIsValidPassword(true);
      }
      if (password !== confirmPassword) {
        setPasswordMismatch(true);
        return;
      } else {
        setPasswordMismatch(false);
      }
      setLoading(true);

      api
        .post(`auth/signup`, {
          email: email,
          fullName: name,
          phoneNumber: phoneNumber,
          collegeName: collegeName,
          department: deptName,
          password: password,
        })
        .then((res) => {
          setLoading(false);
          navigate("/login");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setIncomplete2(true);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center font-poppins ">
      <div className="flex flex-col justify-center items-center gap-5 border-2 border-black rounded-xl p-5">
        <h1 className="text-4xl font-bold">TECHUTSAV 2024</h1>
        <h2 className="font-semibold text-3xl">REGISTRATION</h2>
        <div className="bg-white/50 w-96 h-fit p-7 flex flex-col justify-center rounded-xl relative font-poppins">
          <form className="flex flex-col gap-9">
            {page === 1 && (
              <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="focus:outline-none rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="focus:outline-none rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Phone number"
                    className="focus:outline-none rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </div>
                <div className="flex w-full justify-around">
                  <button
                    className={button}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePage1();
                    }}
                  >
                    Next
                  </button>
                  <Link className={button} type="button" to="/">
                    Back
                  </Link>
                </div>
                {incomplete && (
                  <div className="text-red-500"> Complete all details</div>
                )}
                {!isValidEmail && (
                  <div className="text-red-500">Enter Valid Mail Id</div>
                )}
                {!isValidPhoneNumber && (
                  <div className="text-red-500">Enter Valid Phone number</div>
                )}
                {!isValidName && (
                  <div className="text-red-500">Enter a Valid Name</div>
                )}
              </div>
            )}
            {page === 2 && (
              <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="focus:outline-none rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setCollegeName(event.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="focus:outline-none rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setDeptName(event.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      className="focus:outline-none rounded-lg w-5/6 p-2"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-4"
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    >
                      {passwordVisible ? <EyeClose /> : <EyeOpen />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm password"
                      className="focus:outline-none rounded-lg w-5/6 p-2"
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-4"
                      onClick={() => {
                        setConfirmPasswordVisible(!confirmPasswordVisible);
                      }}
                    >
                      {confirmPasswordVisible ? <EyeClose /> : <EyeOpen />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-around">
                  <button
                    className={button}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePage2();
                    }}
                  >
                    Submit
                  </button>
                  <button
                    className={button}
                    type="button"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    Back
                  </button>
                </div>
                {!isValidPassword && (
                  <p className="text-red-500">Password Min Length 6</p>
                )}
                {passwordMismatch && (
                  <p className="text-red-500">Password dont match</p>
                )}
                {incomplete2 && (
                  <p className="text-red-500">Complete All Details</p>
                )}
              </div>
            )}
          </form>
          {loading && <p className="mt-5">Registering ...</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
