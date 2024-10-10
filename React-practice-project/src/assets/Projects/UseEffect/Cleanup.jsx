import "./useeffect.css";
import { useState, useEffect } from "react";

import React from "react";

export const Cleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Subs On My Social Media</h1>
      <div className="odometer">{count}</div>
      <h3>
        Join us <br /> Realtime Counter
      </h3>
    </>
  );
};
