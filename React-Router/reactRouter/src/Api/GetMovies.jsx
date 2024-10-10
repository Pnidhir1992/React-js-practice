import React from "react";

// Function to fetch movie data
export const getMovieData = async ({ params }) => {
  console.log("your params data is :", params);

  const id = params.MovieID; // Your movie ID
  const apiKey = import.meta.env.VITE_API_KEY;

  // Check if the movie ID is provided
  if (!id) {
    console.error("No movieID provided!");
    return null; // Return null if no movieID is provided
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`
    );

    // Check if the response is successful
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return null; // Return null if the response is not ok
    }

    const data = await response.json(); // Parse the JSON response

    // Check if the OMDb response indicates an error
    if (data.Response === "False") {
      console.error("OMDb Error:", data.Error);
      return null; // Return null if there was an error from OMDb
    }

    return data; // Return the movie data
  } catch (error) {
    console.error("Fetch error:", error); // Log any fetch errors
    return null; // Return null if an error occurs
  }
};
