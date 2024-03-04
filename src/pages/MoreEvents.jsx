import React, { useState, useEffect, useRef } from "react";
import Event from "../components/Event";
import { Link } from "react-router-dom";
import { api } from "../api/auth";
import Footer from "./Footer";
import CardSkeleton from "../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";

const MoreEvents = () => {
  const originalNames = [
    "All",
    "Computer Science and Engineering",
    "Information Technology",
    "Computer Science and Business Systems",
    "Applied Mathematics and Computational Science",
  ];
  const { departmentName } = useParams();
  const options = ["All", "CSE", "IT", "CSBS", "DS"];
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);
  const scrollUp = useRef(null);
  useEffect(() => {
    scrollUp.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  //Toggle
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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

  useEffect(() => {
    api
      .post("event/getSpecificEvents", {
        departmentName: originalNames[options.indexOf(departmentName)],
      })
      .then((result) => {
        setEventDetails(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedIndex]);

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center w-full gap-6 p-9 relative min-h-screen"
        ref={scrollUp}
      >
        <h1 className="text-5xl font-bold">TECHUTSAV 2024</h1>
        <h2 className="text-4xl font-bold">EVENTS</h2>
        <div className="w-full flex justify-end">
          {/* <div className="border-2 border-black rounded-lg mr-9">
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
          </div> */}
          <Link
            to="/"
            className={` px-7 py-1  fill-right  hover:text-white border-2 border-black rounded-md  ${
              isSeeMoreHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsSeeMoreHovered(true)}
            onMouseLeave={() => setIsSeeMoreHovered(false)}
          >
            Back
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 place-items-center justify-items-center w-full ">
          {loading ? (
            <CardSkeleton cards={3} />
          ) : (
            eventDetails.map((event) => (
              <Event
                uniqueName={event.uniqueName}
                eventName={event.eventName}
                eventDescription={event.eventAbstract}
                image={"https://csi.coep.org.in/csi_logo.png"}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoreEvents;
