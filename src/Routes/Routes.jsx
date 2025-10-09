import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Install from "../Pages/Install";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AppDetail from "../Pages/AppDetail";
import Spinner from "../Components/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/install",
        element: <Install />,
      },
      {
        path: "/apps/:id",
        element: <AppDetail />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
export default router;
