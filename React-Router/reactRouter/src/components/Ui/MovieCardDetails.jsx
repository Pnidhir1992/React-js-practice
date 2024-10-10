import React from "react";
import { useLoaderData } from "react-router";
import "./Movie-Card.css";
import { NavLink } from "react-router-dom";

export const MovieCardDetails = () => {
  const MovieData = useLoaderData();
  console.log(MovieData);

  const {
    Actors,
    BoxOffice,
    Country,
    Genre,
    Released,
    Plot,
    Poster,
    imdbID,
    Title,
  } = MovieData;

  return (
    <div className="grid">
      <img src={Poster} alt={Title} />
      <div className="new-grid">
        <h2>{Title}</h2>
        <p>{BoxOffice}</p>
        <p>{Country}</p>
        <span>{Genre}</span> <span>{Released}</span> <span>{imdbID}</span>
        <h4>{Actors}</h4>
        <p className="text-new">{Plot}</p>
        <div className="flex-new-now">
          <NavLink to="/movie">Go Back</NavLink>
          <NavLink to="/">Go Home</NavLink>
          <NavLink to="/">Download Now</NavLink>
        </div>
      </div>
    </div>
  );
};
