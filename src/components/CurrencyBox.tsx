import { ReactNode } from "react";

import Box from "@mui/material/Box";

interface BoxProps {
  children: ReactNode;
};

const CurrencyBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      {props.children}
    </Box>
  );
};

export default CurrencyBox;
