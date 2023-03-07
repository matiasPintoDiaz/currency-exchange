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

import Button from "@mui/material/Button";

import {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies,
} from "../services/data";

export default function form() {
  // TEXTFIELD
  const [amount, setAmount] = useState({
    amount1: "1",
    amount2: "",
  });

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, [event.target.name]: event.target.value });
  };

  // SELECT
  const [currency, setCurrency] = useState<Object>();

  const [currencYSelected, setCurrencYSelected] = useState({
    currencySelected1: "",
    currencySelected2: "",
  });

  const [currencyKey, setCurrencyKey] = useState({
    currencySelected1: "",
    currencySelected2: "",
  });

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrencYSelected({
      ...currencYSelected,
      [event.target.name]: event.target.value,
    });

    if (currency) {
      Object.entries(currency).forEach(([key, value]) => {
        if (value === event.target.value) {
          setCurrencyKey({ ...currencyKey, [event.target.name]: key });
        }
      });
    }
  };

  useEffect(() => {
    getCurrenciesNames().then(setCurrency);
  }, [currencYSelected]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let amountToConvert = Number(amount.amount1);
    const response = await conversionCurrencies(
      amountToConvert,
      currencyKey.currencySelected1,
      currencyKey.currencySelected2
    );

    setAmount({ ...amount, amount2: response.toString() });
  };

  const handleClick = () => {
    // event.preventDefault();
    setAmount({ ...amount, amount2: "" });
    setCurrencYSelected({
      ...currencYSelected,
      currencySelected1: "",
      currencySelected2: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <CurrencyBox>
          {/* <CurrencyAmount miFuncion={} variant="outlined" value={amount1}  /> */}
          <TextField
            id="Amount-1"
            label="Amount"
            variant="outlined"
            name="amount1"
            value={amount.amount1}
            onChange={handleChangeAmount}
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel>Currency</InputLabel>
            {currency && (
              <Select
                id="currency-select"
                label="Currency"
                labelId="currency"
                name="currencySelected1"
                value={currencYSelected.currencySelected1}
                onChange={handleChangeCurrency}
                autoWidth
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
        <CurrencyBox>
          {/* <CurrencyAmount miFuncion={} variant="outlined" value={0} /> */}
          <TextField
            id="Amount-2"
            label="Amount"
            variant="outlined"
            name="amount2"
            value={amount.amount2}
            // onChange={}
          />
          {/* <CurrencySelect /> */}
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel>Currency</InputLabel>
            {currency && (
              <Select
                id="currency-select"
                label="Currency"
                labelId="currency"
                name="currencySelected2"
                value={currencYSelected.currencySelected2}
                onChange={handleChangeCurrency}
                autoWidth
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
          <ButtonsStack
            direction="row"
            spacing={2} /* className="buttons-box" */
          >
            <TypeButton
              type="submit"
              variant="contained"
              startIcon={<CallMadeIcon />}
            >
              Convert
            </TypeButton>
            <Button
              type="button"
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={handleClick}
            >
              Clear
            </Button>
          </ButtonsStack>
        </div>
      </form>
    </>
  );
}
