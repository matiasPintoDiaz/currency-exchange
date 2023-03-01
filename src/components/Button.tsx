import React from "react";

import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

export default function TypeButton() {
  return (
    <Button variant="outlined" startIcon={<CallMadeIcon />}>
      Convert
    </Button>
  );
}

{
  /* <Button variant="contained" startIcon={<ClearIcon />}>
        Send
      </Button> */
}
