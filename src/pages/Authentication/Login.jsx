import React, { useState } from "react";
import EyeClose from "../../components/EyeClose.jsx";
import EyeOpen from "../../components/EyeOpen.jsx";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/auth.js";
const Login = () => {
  const button =
    "font-semibold bg-white/50 px-5 py-2 rounded-md tracking-wide hover:bg-black hover:text-white duration-150";
  let naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incomplete, setIncomplete] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="bg-white/50   flex flex-col justify-center rounded-xl gap-9 border-2 border-black p-9">
        <h1 className="text-4xl font-bold">TECHUTSAV 2024</h1>
        <h2 className="font-semibold text-3xl text-center">LOGIN</h2>
        <form className="flex flex-col gap-9">
          <div className="flex flex-col gap-5">
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
          </div>
          <div className="flex justify-evenly">
            <Link className={button} to="/">
              Back
            </Link>
            <button
              className={button}
              onClick={async (event) => {
                setLoading(true);
                event.preventDefault();
                if (!password || !email) {
                  setIncomplete(true);
                  return;
                }
                setIncomplete(false);

                if (!emailRegex.test(email)) {
                  setIsValidEmail(!emailRegex.test(email));
                  return;
                }
                setIsValidEmail(!emailRegex.test(email));

                // await axios
                //   .post(
                //     `https://techutsav-auth-backend.onrender.com/auth/login`,
                //     {
                //       email: email,
                //       password: password,
                //     }
                //   )
                //   .then((res) => {
                //     setLoading(false);
                //     setError(false);
                //     naviagte("/");
                //     console.log(res.data);
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //     setLoading(false);
                //     setError(true);
                //   });

                api
                  .post("auth/login", { email, password })
                  .then((res) => {
                    setLoading(false);
                    setError(false);
                    naviagte("/");
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                  });
              }}
            >
              Login
            </button>

            {incomplete && <p className="text-red-500">Complete all details</p>}
            {isValidEmail && <p className="text-red-500">Enter valid mail</p>}
          </div>
          {loading && <p>Submitting ...</p>}
          {error && <p className="text-red-500">Problem in Login </p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
