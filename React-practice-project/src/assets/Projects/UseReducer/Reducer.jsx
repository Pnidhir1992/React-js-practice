import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    // fixed misspelling here
    return state - 1;
  }
  return state;
};

export const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0); // pass reducer here

  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center">
      <h1>Count: {count}</h1>
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
