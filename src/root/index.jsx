import React from "react";
import HomePage from "../pages/Home/index.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Root() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/homepage", element: <HomePage /> },
      ],
      future: {
        v7_startTransition: true,
        v7_fetcherPersist: true,
      },
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default Root;
