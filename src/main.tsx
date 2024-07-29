import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/Contact",
    element: <div>Contact us</div>,
  },
  {
    path: "/app",
    element: <div><App /></div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router={router} />
)
