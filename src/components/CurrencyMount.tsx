import TextField from "@mui/material/TextField";

type CurrencyMountProps = {
  variant: "standard" | "filled" | "outlined"
}

const CurrencyMount = (props: CurrencyMountProps) => {
  return <TextField id="outlined-basic" label="From" variant={props.variant} />;
}

export default CurrencyMount;