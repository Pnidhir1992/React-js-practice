import React from "react";
import "./Increement.css";
import { useState } from "react";

export const Increement = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const Countincress = () => {
    setCount(count + step);
  };

  const DecreementCount = () => {
    setCount(count - step);
  };

  const ResteCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="center-div-increement">
        <h1>Use State Challange</h1>
        <p>
          Count :~ <span>{count}</span>
        </p>
        <div>
          <label>
            Step :~
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value) || 0)}
            />
          </label>
        </div>
        <div className="btn-group">
          <button onClick={Countincress} disabled={count >= 100}>
            Increement
          </button>
          <button onClick={DecreementCount} disabled={count <= 0}>
            Decreement
          </button>
          <button onClick={ResteCount}>Reset Count</button>
        </div>
      </div>
    </>
  );
};
