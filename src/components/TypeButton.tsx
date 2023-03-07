import { ReactNode } from "react";

import Button from "@mui/material/Button";

type BaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  children: ReactNode;
  tipo: "clear" | "submit" | "clear";
  variant: "contained" | "outlined";
  startIcon: ReactNode;
} & BaseProps;

const TypeButton = (props: ButtonProps) => {
  return (
    <Button
      type={props.tipo}
      variant={props.variant}
      startIcon={props.startIcon}
      style={{ minWidth: "120.05px" }} /* onClick={() => handleClick()} */
    >
      {props.children}
    </Button>
  );
};

export default TypeButton;
