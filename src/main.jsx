import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'
import Error from './routes/Error/index.jsx'
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    Children[
      {
        path:"/home",
        element:<home/>,
      },
      {
        path:"/produtos",
        element:<produtos/>,
      }
      {
        path:"/produtos/editar/:id",
        element:<EditarProdutos/>,
      }
    ]
  }
])

//  ReactDOM.createRoot(document.getElementById('root')).render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>,
//  )
