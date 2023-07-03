import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";
import { MyDocument } from "./pages/Home/components";
import { Dashboard } from "./pages/Dashboard";
import Swap from "./pages/Swap/Swap";
import { HomeLayout } from "./components/HomeLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/swap",
        element: <Swap />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
