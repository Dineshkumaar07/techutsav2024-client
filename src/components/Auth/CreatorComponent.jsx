import React, { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import { api } from "../../api/auth";

const CreatorComponent = ({
  email,
  fullName,
  password,
  phone,
  collegeName,
  department,
  transactionNumber,
  selectedDepartment,
  setOpen,
  setMessage,
  setMessageBack,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(email);
    // console.log(password);
    // console.log(fullName);
    // console.log(phone);
    // console.log(collegeName);
    // console.log(department);
    // console.log(transactionNumber);
    // console.log(selectedDepartment);
    api
      .post("auth/signup", {
        email,
        fullName,
        password,
        phoneNumber: phone,
        collegeName,
        department,
        transactionNumber,
        selectedDepartment,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          setOpen("Profile Created");
          navigate("/login");
        } else {
          setOpen(true);
          setMessage("Check your Network connectivity, Try Again!");
          setMessageBack("red");
        }
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
        setMessage("Check your Network connectivity, Try Again!");
        setMessageBack("red");
      });
  }, []);

  return (
    <div>
      <CircularProgress />
    </div>
  );
};

export default CreatorComponent;
