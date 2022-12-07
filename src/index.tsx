import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import initializeServer from './server/CreateServer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteErrorScreen from './screens/RouteErrorScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

initializeServer()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorScreen />,
    children: [
      {
        path: '/profile/:profileId',
        element: <ProfileScreen />,
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterScreen />,
    errorElement: <RouteErrorScreen />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
