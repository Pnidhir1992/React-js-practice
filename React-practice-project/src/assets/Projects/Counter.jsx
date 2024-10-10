import React from "react";
import "./Counter.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="center-div">
        <h1>Use State Hook</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </>
  );
};
