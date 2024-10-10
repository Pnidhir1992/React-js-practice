import React from "react";
import { useLoaderData } from "react-router";
import { Card } from "../components/Ui/Card";
import "./Movie.css";

export const Movie = () => {
  const MovieData = useLoaderData();

  return (
    <>
      <ul className="flex">
        {MovieData &&
          MovieData.Search.map((CurMovie) => {
            // Pass the prop as 'CurMovie'
            return <Card key={CurMovie.imdbID} CurMovie={CurMovie} />;
          })}
      </ul>
    </>
  );
};
