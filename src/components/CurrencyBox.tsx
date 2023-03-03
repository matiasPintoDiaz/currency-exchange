import { ReactNode } from "react";

import Box from "@mui/material/Box";

type BoxProps = {
  children: ReactNode;
}

const CurrencyBox = (props: BoxProps ) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
    >
      {props.children}
    </Box>
  );
}


export default CurrencyBox;