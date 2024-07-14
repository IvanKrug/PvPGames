import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/Store/LandingPage.jsx'
import ErrorPage from './layout/ErrorPage.jsx'
import { Layout } from './layout/Layout.jsx'
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import ShoppingCart from './pages/Store/ShoppingCart.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ProductForm from './pages/Auth/ProductForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "shop",
        element: <ShoppingCart />,

      },
      {
        path: "us",
        element: <AboutUs />,
      },

    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "new",
    element: < ProductForm/>,
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
