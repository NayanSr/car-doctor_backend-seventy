import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Main />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);

export default router;
