import TextField from "@mui/material/TextField";

type CurrencyMountProps = {
  variant: "standard" | "filled" | "outlined"
  value: number
}

const CurrencyAmount = (props: CurrencyMountProps) => {
  return <TextField id="outlined-basic" label="Amount" variant={props.variant} value={props.value} />;
}

export default CurrencyAmount;