import { ReactNode } from "react";

import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

type ButtonProps = {
  children: ReactNode
  variant: "contained" | "outlined"
  startIcon: ReactNode
}

const TypeButton = (props: ButtonProps) => {
  return (
    <Button variant={props.variant} startIcon={props.startIcon} style={{minWidth: "120.05px"}}>
      {props.children}
    </Button>
  );
}

export default TypeButton;