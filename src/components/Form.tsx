import { useState } from "react";

import CurrencyBox from "./CurrencyBox";
import CurrencyAmount from "./CurrencyAmount";
import CurrencySelect from "./CurrencySelect";
import TypeButton from "./TypeButton";

import ButtonsStack from "./ButtonsStack";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ClearIcon from "@mui/icons-material/Clear";

export default function form() {
  const [amount1, setAmount1] = useState(1);

  function handleSubmit(event: any){
    event.preventDefault();
    console.log("click");
  };

  return (
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
