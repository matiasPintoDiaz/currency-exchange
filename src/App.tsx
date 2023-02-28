import { useState, useEffect } from "react";
import "./App.css";

// TEXTFIELD
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// SELECT
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies,
} from "./services/data";

function App() {
  const [count, setCount] = useState(0);

  // SELECT
  const [currency, setCurrency] = useState<Array<string> | null>();
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };
  let currenciesNames: Array<string> = [];

  useEffect(() => {
    getCurrenciesNames().then(setCurrency);
    console.log(currency);
    // currenciesNames = Object.values(currency);
    // console.log("<ii", currenciesNames);
    // currenciesNames.map((currency) => console.log(currency));
  }, [count]);

  return (
    <div className="App">
      <div>
        <h1>Currency Exchange !</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="From" variant="outlined" />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Currency
          </InputLabel>
          {currency && (
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={""}
              onChange={handleChange}
              // onChange={currency => currency && setCurrency(currency)}
              autoWidth
              label="Currency"
            >
              {currency.map((currency) => (
                <MenuItem value={currency}>{currency}</MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="To" variant="outlined" />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Currency
          </InputLabel>
          {/* <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={currency}
            onChange={handleChange}
            autoWidth
            label="Currency"
          >
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select> */}
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
