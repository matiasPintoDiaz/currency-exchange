import { useState, useEffect } from "react";
import "./App.css";

// TEXTFIELD
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CurrencySelect from './components/CurrencySelect';

import {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies,
} from "./services/data";

function App() {
  const [count, setCount] = useState(0);

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
        <CurrencySelect />
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
        <CurrencySelect />
      </Box>
    </div>
  );
}

export default App;
