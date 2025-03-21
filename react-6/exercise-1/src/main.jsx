import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Nav';
import Page2 from '../Page-2';



const router = createBrowserRouter([
  // insert your path here
  {
   path: "/",
   element: (
    <>
    <h1>Hey!</h1>
      {/* <Navbar /> */}
      <App />
    </>
  ),
  },

  {
    path: "/page-2",
    element: (
      <>
        <Navbar />
        <Page2 />
      </>
    ),
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
