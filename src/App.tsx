import { useState, useEffect } from "react";
import "./App.css";

import CurrencyBox from "./components/CurrencyBox";
import CurrencyAmount from "./components/CurrencyAmount";
import CurrencySelect from "./components/CurrencySelect";
import TypeButton from "./components/TypeButton";

import ButtonsStack from "./components/ButtonsStack";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

function App() {
  const [count, setCount] = useState(0);

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
          <CurrencyAmount variant="outlined" />
          <CurrencySelect />
        </CurrencyBox>
        <CurrencyBox>
          <CurrencyAmount variant="outlined" />
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
