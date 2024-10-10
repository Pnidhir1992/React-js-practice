import React from "react";
import { useState } from "react";
import "./Toggelbtn.css";

export const ToggelBtn = () => {
  const [ison, setIson] = useState(true);

  const HanddelToggelSitch = () => {
    setIson(!ison);
  };

  return (
    <>
      <div
        className="Outer-later"
        style={{ backgroundColor: ison ? "#adff2f" : "#ffffff" }}
        onClick={HanddelToggelSitch}
      >
        <div className={`inner-div ${ison ? "on" : "off"}`}>
          <span className="State">{ison ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  );
};
