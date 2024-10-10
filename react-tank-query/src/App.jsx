import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./Page/Home";
import { Fetchold } from "./Page/Fetchold";
import { FetchRQ } from "./Page/FetchRQ";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "trad", element: <Fetchold /> },
      { path: "RQ", element: <FetchRQ /> },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
