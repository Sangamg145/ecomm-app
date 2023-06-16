import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
// import auth from "./store/action/auth";
// import { useDispatch } from "react-redux";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <div>Error 404 not found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(auth.getUser());
  // }, []);
  return <RouterProvider router={router} />;
}

export default App;
