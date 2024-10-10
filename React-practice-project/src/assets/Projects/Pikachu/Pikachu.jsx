import "./pikachu.css";
import React, { useState, useEffect } from "react";

export const Pikachu = () => {
  const [apidata, setApiData] = useState(null); // Set initial state to null
  const [loading, setLoading] = useState(true); // Set initial state to
  const [error, setError] = useState(""); // Set initial state to

  const api = "https://pokeapi.co/api/v2/pokemon/squirtle";
  // Fetch data from the API on component mount and on every state change (step change)

  // Fetch data from the API using the fetch API with promise methods
  //   useEffect(() => {
  //   const fetchData = () => {
  //     fetch(api)
  //       .then((res) => res.json())
  //       .then((data) => setApiData(data))
  //       .then(() => setLoading(false)) // Set loading state to false when data is fetched
  //       .catch((err) => {
  //         console.log(err);
  //         setError("Failed to fetch data"); // Show this if an error occurs
  //         setLoading(false); // Set loading state to false when error occurs
  //         setError(error); // Show this if an error occurs
  //       });
  //   };

  //via async function methods that

  const fetchData = async () => {
    try {
      const res = await fetch(api);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setApiData(data);
      setLoading(false); // Set loading state to false when data is fetched
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data"); // Show this if an error occurs
      setLoading(false); // Set loading state to false when error occurs
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add a loading state or check if apidata is null before rendering the component
  if (loading) {
    return <p>Loading...</p>; // Show this while data is being fetched
  }

  if (error) {
    return <h1>Error :~ {error.message}</h1>; // Show this if an error occurs while fetching data
  }

  return (
    <>
      <div className="container-new">
        <header>
          <h1>Pikachu Project</h1>
          <hr />
        </header>

        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={apidata.sprites.other.dream_world.front_default}
                alt={apidata.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{apidata.name}</h1>
            <div className="colume-three">
              <p className="pokemon-info">
                Height :- <span>{apidata.height}</span>
              </p>
              <p className="pokemon-info">
                Weight :- <span>{apidata.weight}</span>
              </p>
              <p className="pokemon-info">
                Speed :- <span>{apidata.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
