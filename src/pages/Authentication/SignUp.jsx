import React, { useState } from "react";

import BasicDetailComponent from "../../components/Auth/BasicDetailComponent";
import PaymentComponent from "../../components/Auth/PaymentComponent";
import CollegeDetailComponent from "../../components/Auth/CollegeDetailComponent";
import CreatorComponent from "../../components/Auth/CreatorComponent";

import { SnackbarComponent } from "../../components/SnackbarComponent";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageBack, setMessageBack] = useState("green");

  const button =
    "font-semibold bg-white/50 px-2 py-2 rounded-md tracking-wide hover:bg-black hover:text-white duration-150 mt-4";
  return (
    <div
      className={`flex flex-col h-screen items-center justify-center font-poppins w-full`}
    >
      {currentPage === 0 ? (
        <BasicDetailComponent
          setCurrentPage={setCurrentPage}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          phone={phone}
          fullName={fullName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setPhone={setPhone}
          setFullName={setFullName}
          setMessage={setMessage}
          setOpen={setOpen}
          setMessageBack={setMessageBack}
        />
      ) : currentPage === 1 ? (
        <CollegeDetailComponent
          setCurrentPage={setCurrentPage}
          collegeName={collegeName}
          department={department}
          setCollegeName={setCollegeName}
          setDepartment={setDepartment}
          setMessage={setMessage}
          setOpen={setOpen}
          setMessageBack={setMessageBack}
        />
      ) : currentPage === 2 ? (
        <PaymentComponent
          setCurrentPage={setCurrentPage}
          transactionNumber={transactionNumber}
          setTransactionNumber={setTransactionNumber}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          setOpen={setOpen}
          setMessage={setMessage}
          setMessageBack={setMessageBack}
        />
      ) : (
        <CreatorComponent
          email={email}
          fullName={fullName}
          phone={phone}
          password={password}
          collegeName={collegeName}
          department={department}
          transactionNumber={transactionNumber}
          selectedDepartment={selectedDepartment}
          setOpen={setOpen}
          setMessage={setMessage}
          setMessageBack={setMessageBack}
        />
      )}
      <SnackbarComponent
        open={open}
        message={message}
        messageBack={messageBack}
        setOpen={setOpen}
      />
    </div>
  );
};

export default SignUp;
