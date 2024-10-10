import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="grid navbar-grid container">
          <NavLink to="/">Nidhir Parmar React-Query</NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/trad">FetchOld</NavLink>
              </li>
              <li>
                <NavLink to="/rq">FetchRQ</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
