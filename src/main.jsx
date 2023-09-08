import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Ajuda from './routes/Ajuda/index.jsx'
import Error from './routes/Error/index.jsx'
import Login from './routes/Login/index.jsx'
import Cadastro from './routes/Cadastro/index.jsx'
import Modals from './routes/Modals/index.jsx'
import Sobre from './routes/Sobre/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/ajuda",
        element: <Ajuda/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/modals",
        element: <Modals/>
      },
      {
        path: "/sobre",
        element: <Sobre/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
