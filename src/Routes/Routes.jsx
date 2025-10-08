import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Install from "../Pages/Install";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);
export default router;
