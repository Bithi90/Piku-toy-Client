import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Categories/Categories";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Layout/Details";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        element: <Categories></Categories>,
        loader: ({ params }) => fetch(`https://piku-toy-server.vercel.app/categories/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'addToy',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: 'myToy',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'allToy',
        element: <AllToys></AllToys>
      },
      
     
    ]
  },
  {
    path: 'toy',
    element: <Details></Details>,
    children: [
      {
        path: ':id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://piku-toy-server.vercel.app/toy/${params.id}`)

      }
      
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);