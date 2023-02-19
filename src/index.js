import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
//page imports
import Root from './routes/root';
import Error from './error-page';
import Services from './routes/services';
import Redirect from './routes/homeRedirect';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Redirect/>,
      },
      {
        path:'/home',
        element: <Home/>
      },
      {
        path: '/services',
        element: <Services/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
