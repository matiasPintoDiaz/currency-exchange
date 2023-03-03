import { ReactNode } from "react";

import Button from "@mui/material/Button";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: "contained" | "outlined"
  startIcon: ReactNode
}

const TypeButton = (props: ButtonProps) => {

  const handleClick = () => {
    console.log('sadasd');
  }

  return (
    <Button variant={props.variant} startIcon={props.startIcon} style={{minWidth: "120.05px"}} onClick={() => handleClick()}>
      {props.children}
    </Button>
  );
}

export default TypeButton;