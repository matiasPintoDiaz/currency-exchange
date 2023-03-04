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

const CurrencySelect = () => {
  const [currency, setCurrency] = useState<Object>();
  const [currencySelected, setCurrencySelected] = useState<string>("");
  const [currencyKey, setCurrencyKey] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrencySelected(event.target.value);

    // select = Euro ---->>> currencyKey = EUR (para fetch)
    if(currency){
      Object.entries(currency).forEach(([key, value]) => {
        if (value === event.target.value) {
          setCurrencyKey(key);
        }
      });
    }
    // console.log('fuera de if: ', currencyKey);
  };

  useEffect(() => {
    getCurrenciesNames().then(setCurrency);
    // console.log('zi', currency);
  }, [ , currencySelected]);


  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel>Currency</InputLabel>
      {currency && (
        <Select
          labelId="currency"
          id="currency-select"
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

export default CurrencySelect;