import { useState, useEffect } from "react";
import "./App.css";

import CurrencyBox from "./components/CurrencyBox";
import CurrencyAmount from "./components/CurrencyAmount";
import CurrencySelect from "./components/CurrencySelect";
import TypeButton from "./components/TypeButton";

import ButtonsStack from "./components/ButtonsStack";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

import {
  getCurrenciesNames,
  allCurrenciesFromOneCurrency,
  conversionCurrencies,
} from "./services/data";

function App() {
  const [count, setCount] = useState(0);
  const [amount1, setAmount1] = useState(1);

  function handleSubmit(event){
    event.preventDefault();
    console.log("click");
  };

  return (
    <div className="App">
      <div>
        <h1>Currency Exchange !</h1>
      </div>
      <div className="card"></div>
      <form action="" onSubmit={handleSubmit}>
        <CurrencyBox>
          <CurrencyAmount variant="outlined" value={amount1} />
          <CurrencySelect />
        </CurrencyBox>
        <CurrencyBox>
          <CurrencyAmount variant="outlined" value={0} />
          <CurrencySelect />
        </CurrencyBox>
        <div className="buttons-box">
          <ButtonsStack
            direction="row"
            spacing={2} /* className="buttons-box" */
          >
            <TypeButton
              variant="contained"
              startIcon={<CallMadeIcon />}
            >
              Convert
            </TypeButton>
            <TypeButton
              variant="outlined"
              startIcon={<ClearIcon />}
            >
              Clear
            </TypeButton>
          </ButtonsStack>
        </div>
      </form>
    </div>
  );
}

export default App;
