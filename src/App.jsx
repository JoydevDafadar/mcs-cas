import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import OneCA from "./Pages/OneCA";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCa } from "./features/caSlice";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/ca/:id",
      element: <OneCA></OneCA>,
    },
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCa());
  }, [dispatch]);


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
