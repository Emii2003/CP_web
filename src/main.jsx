import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/produtos",
        element:<Produtos/>,
      },
      {
        path:"/produtos/editar/:id",
        element:<EditarProdutos/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
