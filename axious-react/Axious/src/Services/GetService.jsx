import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMovie = () => {
  return api.get("?s=Fast&Furious&page=1&apikey=b9c44da");
};
