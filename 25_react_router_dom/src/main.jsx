import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import CreatePost from './components/CreatePost.jsx';

const router = createBrowserRouter([
  // Normal routing
  {path: "/", element: <App />},
  {path: "/create-post", element: <CreatePost />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
