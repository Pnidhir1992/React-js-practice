import React from "react";

export const getData = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=Fast&Furious&page=1&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json(); // await here
    return data;
  } catch (error) {
    console.log(error);
  }
};
