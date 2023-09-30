import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Component/Navbar/Pages/Home/Home.jsx';
import Login from './Component/Navbar/Pages/Login/Login';
 import About from './Component/Navbar/Pages/About/About';
import Regster from './Component/Navbar/Pages/Regster/Regster';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
      path:'/login',
      element:<Login/>
        
      },
      {
        path:'/regster',
        element:<Regster/> 
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
