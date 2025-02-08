
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Footer from './Components/Footer.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about",
    element: <Footer/>
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
