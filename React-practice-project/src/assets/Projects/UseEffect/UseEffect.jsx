import "./useeffect.css";

import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [Count, setCount] = useState(0);
  const [name, setName] = useState();

  useEffect(() => {
    document.title = `You clicked ${Count} times`;
  }, [Count]);

  return (
    <>
      <h1>UseEffect Challenge</h1>
      <br />
      <p>
        Count :~ <span> {Count} </span>
      </p>
      <br />
      <p>
        Name :~ <span>{name}</span>
      </p>
      <form>
        <input
          type="text"
          name="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <br />
      <button className="btn" type="submit" onClick={() => setCount(Count + 1)}>
        Increment
      </button>
    </>
  );
};
