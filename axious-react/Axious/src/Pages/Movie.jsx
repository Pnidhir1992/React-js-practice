import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Component/Card";
import { getMovie } from "../Services/GetService";

export const Movie = () => {
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.error(error.message);
      console.error(error.response.status);
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <ul className="container grid grid-four--cols">
        {data.map((CurElm) => {
          return <Card key={CurElm.imdbID} movieData={CurElm} />;
        })}
      </ul>
    </>
  );
};
