import { ReactNode } from "react";

import Button from "@mui/material/Button";

type BaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "button";
  variant: "contained" | "outlined";
  startIcon: ReactNode;
  onClick?: () => void;
} & BaseProps;

const TypeButton = (props: ButtonProps) => {
  return (
    <Button
      type={props.type}
      variant={props.variant}
      startIcon={props.startIcon}
      style={{ minWidth: "120.05px" }}
      // onClick={handleClick}
    >
      {props.children}
    </Button>
  );
};

export default TypeButton;
