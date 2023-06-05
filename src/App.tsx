import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/Layout";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
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
