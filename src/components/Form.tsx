import { useState, useEffect } from "react";

import CurrencyBox from "./CurrencyBox";
import CurrencyAmount from "./CurrencyAmount";
import CurrencySelect from "./CurrencySelect";
import TypeButton from "./TypeButton";

import ButtonsStack from "./ButtonsStack";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies,
} from "../services/data";

export default function form() {
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");

  // SELECT
  const [currency, setCurrency] = useState<Object>();
  const [currencySelected1, setCurrencySelected1] = useState<string>("");
  const [currencyKey1, setCurrencyKey1] = useState<string>("");

  const [currencySelected2, setCurrencySelected2] = useState<string>("");
  const [currencyKey2, setCurrencyKey2] = useState<string>("");

  useEffect(() => {
    getCurrenciesNames().then(setCurrency);
    // console.log('zi', currency);
  }, [currencySelected1]);

  const handleChange1 = (event: SelectChangeEvent) => {
    setCurrencySelected1(event.target.value);

    // select = Euro ---->>> currencyKey = EUR (para fetch)
    if (currency) {
      Object.entries(currency).forEach(([key, value]) => {
        if (value === event.target.value) {
          setCurrencyKey1(key);
        }
      });
    }
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setCurrencySelected2(event.target.value);

    // select = Euro ---->>> currencyKey = EUR (para fetch)
    if (currency) {
      Object.entries(currency).forEach(([key, value]) => {
        if (value === event.target.value) {
          setCurrencyKey2(key);
        }
      });
    }
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    let zi = Number(amount1);
    conversionCurrencies(zi, currencyKey1, currencyKey2);
    console.log("click");
  }

  // TEXTFIELD
  const handleChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount1(event.target.value);
  };
  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount2(event.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <CurrencyBox>
        {/* <CurrencyAmount miFuncion={} variant="outlined" value={amount1}  /> */}
        <TextField
          onChange={handleChangeOne}
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          value={amount1}
        />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel>Currency</InputLabel>
          {currency && (
            <Select
              labelId="currency"
              id="currency-select"
              value={currencySelected1}
              onChange={handleChange1}
              autoWidth
              label="Currency"
            >
              {Object.values(currency).map((currency, index) => (
                <MenuItem key={index} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
        ;
      </CurrencyBox>
      <CurrencyBox>
        {/* <CurrencyAmount miFuncion={} variant="outlined" value={0} /> */}
        <TextField
          onChange={handleChangeTwo}
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          value={amount2}
        />
        {/* <CurrencySelect /> */}
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel>Currency</InputLabel>
          {currency && (
            <Select
              labelId="currency"
              id="currency-select"
              value={currencySelected2}
              onChange={handleChange2}
              autoWidth
              label="Currency"
            >
              {Object.values(currency).map((currency, index) => (
                <MenuItem key={index} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </CurrencyBox>
      <div className="buttons-box">
        <ButtonsStack direction="row" spacing={2} /* className="buttons-box" */>
          <TypeButton variant="contained" startIcon={<CallMadeIcon />}>
            Convert
          </TypeButton>
          <TypeButton variant="outlined" startIcon={<ClearIcon />}>
            Clear
          </TypeButton>
        </ButtonsStack>
      </div>
    </form>
  );
}
