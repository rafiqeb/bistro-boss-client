import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Menu from "../pages/menu/Menu";
import OrderFood from "../pages/orderFood/OrderFood";
import Login from "../aouthentication/Login";
import Register from "../aouthentication/Register";
import PrivateRoute from "../aouthentication/PrivateRoute";
import Secret from "../pages/Secret";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/dashboard/Cart";
import AllUsers from "../pages/dashboard/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <OrderFood></OrderFood>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin routes
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);