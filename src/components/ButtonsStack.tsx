import { ReactNode } from "react";

import Stack from "@mui/material/Stack";

type StackProps = {
  children: ReactNode;
};

const ButtonsStack = (props: StackProps) => {
  return (
    <Stack direction="row" spacing={2}>
      {props.children}
    </Stack>
  );
};

export default ButtonsStack;
