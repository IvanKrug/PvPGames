import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './components/LandingPage'
import ErrorPage from './components/ErrorPage.jsx'
import { Layout } from './components/Layout.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import AboutUs from './components/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AboutUs />,
      },
      {
        path: "shop",
        element: <ShoppingCart />,

      },
      {
        path: "us",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <LandingPage />,
      }
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
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
