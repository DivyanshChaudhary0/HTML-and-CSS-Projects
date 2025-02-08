import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './components/Body.jsx';
import AboutPage from './components/AboutPage.jsx';
import SignInPage from './components/Sign_In_Page.jsx';
import CartPage from './components/Cart_Page.jsx';
import SearchPage from './components/SearchPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Offer from './components/Offer.jsx';
import Menu from './components/Menu_Page/Menu.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/search",
        element: <SearchPage/>
      },
      {
        path:"/about",
        element: <AboutPage/>
      },
      {
        path:"/sign_in",
        element:<SignInPage/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
      {
        path:"offers",
        element:<Offer/>
      },
      {
        path: "/menu",
        element:<Body/>
      },
      {
        path: "/restaurants/:id",
        element: <Menu/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
