import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./views/ErrorPage/ErrorPage.tsx";
import { PokemonDetails } from "./views/PokemonDetails/PokemonDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
