import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Mobile from "../Mobile/Mobile";
import Home from "../Pages/Home/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
import Admin from "../Pages/Admin/Admin";
import AddPost from "../Pages/Admin/AddPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "mobile",
        element: <Mobile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "addPost",
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
