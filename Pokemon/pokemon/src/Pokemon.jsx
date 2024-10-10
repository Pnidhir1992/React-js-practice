import React, { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailResponce = await Promise.all(detailedPokemonData);
      console.log("Detailed Response", detailResponce);
      setPokemon(detailResponce);
      SetLoading(false);
    } catch (error) {
      console.error("Error fetching pokemon data", error);
      SetLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h2 className="center-div">Loading...</h2>; // Show loading spinner here while fetching data.  // replace h2 with your own loading component.  // Note: This is just a simple example and you might want to implement a more advanced loading state management.  // Also, consider using a more efficient data fetching method like pagination or infinite scrolling for large datasets.  // For now, let's keep it simple.  // Also, make sure to handle errors properly to prevent your app from crashing.  // In a real-world application, you would likely want to use a state management library like Redux or MobX to manage the state.  // Note: This code assumes you have a PokemonCard component that displays the pokemon details.  // Replace it with your own component if needed.  // Also, consider using a more efficient way to render the Pokemon cards, such as using a virtualized list library like React-window or react-virtualized.  // For
  }

  //serch function

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return (
      <h2 className="center-div">
        Error fetching data, please try again later. {error.message}
      </h2>
    ); // Show an error message here if there was an error fetching data.  // Replace h2 with your own error component.  // Note: This is just a simple example and you might want to implement a more advanced error state management.  // Also, consider using a more efficient error handling method, such as displaying an error message to the user instead of crashing the app.  // For now, let's keep it simple.  // Also, make sure to handle errors properly to prevent your app from crashing.  // In a real-world application, you would likely want to use a state management library like Redux or MobX to manage the state.  // Note: This code assumes you have a PokemonCard component that displays the pokemon details.  // Replace it with your own component if needed.  // Also, consider using a more efficient way to render the
  }

  return (
    <>
      <header>
        <h1>Let's Catch Pokémo</h1>
      </header>

      <div className="pokemon-search">
        <input
          type="text"
          autoComplete="off"
          placeholder="Serch Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <ul className="cards">
          {searchData.map((curPokemon) => {
            return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />;
          })}
        </ul>
      </div>
    </>
  );
};
