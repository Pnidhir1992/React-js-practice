import React from "react";
import { NavLink } from "react-router-dom";
import "./card.css";

export const Card = ({ CurMovie }) => {
  // Destructure the properties from 'CurMovie'
  const { Poster, Title, Year, imdbID } = CurMovie;

  return (
    <>
      <li>
        <img src={Poster} alt={Title} />
        <h6>{Title}</h6>
        <p className="p">{Year}</p>
        <NavLink to={`/movie/${imdbID}`} className="btn-new">
          Know More
        </NavLink>
      </li>
    </>
  );
};
