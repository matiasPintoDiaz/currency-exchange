import { useState, useEffect } from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies,
} from "../services/data";

export default function CurrencySelect() {
  const [currency, setCurrency] = useState<Object>();
  const [currencySelected, setCurrencySelected] = useState<string>("")

  const handleChange = (event: SelectChangeEvent) => {
    setCurrencySelected(event.target.value);
  };

  useEffect(() => {
    getCurrenciesNames().then(setCurrency);
  }, []);


  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Currency</InputLabel>
      {currency && (
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={currencySelected}
          onChange={handleChange}
          autoWidth
          label="Currency"
        >
          {Object.values(currency).map((currency, index) => (
            <MenuItem key={index} value={currency}>{currency}</MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
}
