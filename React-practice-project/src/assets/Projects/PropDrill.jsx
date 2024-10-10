import React from "react";
import "./propdrill.css";

export const PropDrill = () => {
  return (
    <div>
      <h1>Prop Drilling</h1>
      <p>This is a child component A</p>
      <ChildComponent data="react" />
    </div>
  );
};

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component B</h2>
      <GrandChildComponent data={props.data} />
    </div>
  );
};

const GrandChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component C </h2>
      <GrandgrandchildComponent data={props.data} />
    </div>
  );
};

const GrandgrandchildComponent = (props) => {
  return (
    <div>
      <h2>Child Component D {props.data} i got data from parent</h2>
    </div>
  );
};
