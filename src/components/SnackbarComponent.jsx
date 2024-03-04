import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SnackbarContent from "@mui/material/SnackbarContent";
import Snackbar from "@mui/material/Snackbar";

export const SnackbarComponent = ({ open, message, messageBack, setOpen }) => {
  const handleClose = (event) => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <SnackbarContent
          message={message}
          sx={{ backgroundColor: messageBack }}
          action={action}
        />
      </Snackbar>
    </div>
  );
}