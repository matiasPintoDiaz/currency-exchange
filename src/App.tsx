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

// 3. Arreglar funcionalidad de botón CLEAR.
// 4. Una vez todo funcionando, empezar a mover funcionalidad a los componentes propios de cada uno.

// 5. Mostrar en texto la conversión realizada y/o mostrar el equivalente (1 a 1).