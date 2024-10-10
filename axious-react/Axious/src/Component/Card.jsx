import React from "react";

export const Card = ({ movieData }) => {
  const { Poster, imdbID } = movieData;

  return (
    <li className="hero-container">
      <div className="main-container">
        <img src={Poster} alt={imdbID} />
      </div>
      <div className="ticket-container">
        <div className="ticket-content">
          <a href={`/movie/${imdbID}`}></a>
          <button className="ticket_buy-againe"> Watch Now</button>
        </div>
      </div>
    </li>
  );
};
