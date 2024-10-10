import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact, contactData } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie"; // Fix typo in import statement
import { AppLayout } from "./components/layout/AppLayout";
import { Error } from "./Pages/Error";
import { getData } from "./Api/GetData";
import { MovieCardDetails } from "./components/Ui/MovieCardDetails";
import { getMovieData } from "./Api/GetMovies";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie />, loader: getData }, // Fix typo in route path
        {
          path: "/movie/:MovieID",
          element: <MovieCardDetails />,
          loader: getMovieData,
        }, // Fix typo in route path
        { path: "/contact", element: <Contact />, action: contactData }, // Fix typo in route path
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
