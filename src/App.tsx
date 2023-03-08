import { useState, useEffect } from "react";
import "./App.css";

import CurrencyBox from "./components/CurrencyBox";
import CurrencyAmount from "./components/CurrencyAmount";
import CurrencySelect from "./components/CurrencySelect";
import TypeButton from "./components/TypeButton";

import ButtonsStack from "./components/ButtonsStack";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Currency Exchange !</h1>
      </div>
      <div className="card"></div>
      <Form />
    </div>
  );
}

export default App;
