import { ReactNode } from "react";

import Button from "@mui/material/Button";

type BaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  children: ReactNode;
  variant: "contained" | "outlined";
  startIcon: ReactNode;
} & BaseProps;

const TypeButton = (props: ButtonProps) => {
  /* const handleClick = () => {
    console.log('sadasd');
  } */

  return (
    <Button
      type="submit"
      variant={props.variant}
      startIcon={props.startIcon}
      style={{ minWidth: "120.05px" }} /* onClick={() => handleClick()} */
    >
      {props.children}
    </Button>
  );
};

export default TypeButton;
