import React from "react";

import Paper from "@mui/material/Paper";
import { SnackbarComponent } from "../SnackbarComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import { Link, useNavigate } from "react-router-dom";
import { button } from "../../constants/registerationConstants";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const PaymentComponent = ({
  setCurrentPage,
  transactionNumber,
  setTransactionNumber,
  selectedDepartment,
  setSelectedDepartment,
  setOpen,
  setMessage,
  setMessageBack,
}) => {
  const options = ["Not Selected", "CSE", "IT", "CSBS", "DS"];
  const original = [
    "",
    "Computer Science and Engineering",
    "Information Technology",
    "Computer Science and Business Systems",
    "Applied Mathematics and Computational Science",
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const anchorRef = React.useRef(null);
  const [open, Open] = React.useState(false);
  const handleClick = () => {
    setSelectedDepartment(original[selectedIndex]);
  };
  const handleMenuItemClick = (event, index) => {
    // console.log(options[index]);
    setSelectedIndex(index);
    setSelectedDepartment(original[selectedIndex]);
    Open(false);
  };

  const handleToggle = () => {
    Open((Open) => !Open);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    Open(false);
  };

  const handleSubmit = () => {
    if (selectedIndex === 0) {
      setOpen(true);
      setMessage("Please select a Department");
      setMessageBack("red");
    } else if (transactionNumber.length === 0) {
      setOpen(true);
      setMessage("Please enter your transaction number");
      setMessageBack("red");
    } else {
      setSelectedDepartment(original[selectedIndex]);
      setOpen(true);
      setMessage("Submitting..");
      setMessageBack("green");
      setCurrentPage(3);
    }
  }

  return (
    <Paper
      elevation={2}
      className="flex flex-col justify-center items-center gap-5 rounded-xl p-5"
    >
      <h1 className="text-4xl font-bold">TECHUTSAV 2024</h1>
      <h2 className="font-semibold text-3xl">PAYMENT VERIFICATION</h2>
      <div className="bg-white/50 w-100 h-fit p-7 flex flex-col justify-center rounded-xl relative font-poppins">
        <form className="flex flex-col gap-9 items-start">
          <div className="flex gap-3 items-center justify-evenly">
            <h2>Enter the Preferred Department</h2>
            <React.Fragment>
              <ButtonGroup
                variant="outline"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
              >
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
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
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
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
          <div className="text-[15px] text-red-500">
            <p>Note:</p>
            <p>
              ** You can only attend the events of the above selected department
            </p>
            <p>
              ** Workshop can be attended irrespective of the selected
              department
            </p>
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
          </div>
          <div className="flex flex-col gap-3 w-full items-center">
            <div className="flex flex-col gap-3 w-full items-start">
              <label
                htmlFor=""
                className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
              >
                Transaction Number
              </label>
              <input
                type="text"
                placeholder="Enter your transaction number"
                className="focus:outline-none rounded-lg w-5/6 p-2"
                value={transactionNumber}
                onChange={(event) => {
                  setTransactionNumber(event.target.value);
                }}
              />
            </div>
            <div className="flex max-w-[300px] w-full justify-around items-center">
              <button
                className={button}
                onClick={() => {
                  setCurrentPage(1);
                }}
              >
                Back
              </button>
              <button
                className={button}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default PaymentComponent;
