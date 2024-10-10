import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//to Get Data from api
export const getMethodData = () => {
  return Api.get("/posts");
};

//to Delete Data from api

export const deleteMethodData = (id) => {
  return Api.delete(`/posts/${id}`);
};

export const postMethodData = (post) => {
  return Api.post("/posts", post);
};

export const putMethodData = (id, post) => {
  return Api.put(`/posts/${id}`, post);
};
