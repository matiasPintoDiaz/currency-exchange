import { useState, useEffect } from "react";
import "./App.css";

import CurrencyBox from "./components/CurrencyBox";
import CurrencyMount from "./components/CurrencyMount";
import CurrencySelect from "./components/CurrencySelect";
import ConvertButton from "./components/ConvertButton";

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
      <div className="card"></div>
      <CurrencyBox>
        <CurrencyMount />
        <CurrencySelect />
      </CurrencyBox>
      <CurrencyBox>
        <CurrencyMount />
        <CurrencySelect />
      </CurrencyBox>
      <div className="buttons-box">
        <ConvertButton />
      </div>
    </div>
  );
}

export default App;
