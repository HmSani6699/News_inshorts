import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Mobile from "../Mobile/Mobile";
import Home from "../Pages/Home/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
import AddPost from "../Pages/Admin/AddPost";
import Dashoboard from "../Pages/Admin/Dashoboard";

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
        path: "dashboard",
        element: <Dashoboard />,
      },
      {
        path: "addPost",
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
