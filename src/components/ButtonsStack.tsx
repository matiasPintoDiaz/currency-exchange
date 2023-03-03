import { ReactNode } from "react";

import Stack from "@mui/material/Stack";

type StackProps = {
  children: ReactNode
  direction: "row" | "column"
  spacing: number
};

const ButtonsStack = (props: StackProps) => {
  return (
    <Stack direction={props.direction} spacing={props.spacing}>
      {props.children}
    </Stack>
  );
};

export default ButtonsStack;
