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
import AdminRoutes from "../aouthentication/AdminRoutes";
import AddItems from "../pages/dashboard/AddItems";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItem from "../components/UpdateItem";
import Payment from "../pages/dashboard/Payment";


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

      // user routes
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },

      // admin routes
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'allUsers',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      }
    ]
  }
]);