import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [fr, setFr] = useState(1);
  const [to, setTo] = useState(1);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="converter-form">
        <Input
          label="Amount"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />

        <div className="row">
          <Select
            label="From"
            items={units}
            onChange={(e) => {
              setFr(Number(e.target.value));
            }}
          />
          <Select
            label="To"
            items={units}
            onChange={(e) => {
              setTo(Number(e.target.value));
            }}
          />

          <button onClick={() => setResult((amount * fr) / to)}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
