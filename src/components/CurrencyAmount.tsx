import TextField from "@mui/material/TextField";

type CurrencyMountProps = {
  variant: "standard" | "filled" | "outlined"
}

const CurrencyAmount = (props: CurrencyMountProps) => {
  return <TextField id="outlined-basic" label="Amount" variant={props.variant} />;
}

export default CurrencyAmount;