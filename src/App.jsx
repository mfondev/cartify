import Cart from './components/Cart'
import Home ,{loader as EventLoader}from './components/Home'
import { ProductContextProvider } from './context/product-context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import SelectedContextProvider from './context/context'
import Category from './components/Category'
import CategoryContextProvider from './context/categoryContext'
import RootLayout from './pages/RootLayout'
import Items,{loader as itemLoader} from './pages/Items'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: EventLoader
      },
      {
        path: 'cart',
        element: <Cart />,
      },
     
      {
        path: ':productId',
        element: <Items />,
        loader: itemLoader
      },
      {
        path: ':categoryId',
        element: <Items />,
      },
      {
        path: 'category',
        element: <Category />,
        // element: <Smcat />,
        // loader: Sloader
      },
    ],
  },

])
function App() {
  return (
    <>
      <ProductContextProvider>
        <SelectedContextProvider>
          <CategoryContextProvider>
            <RouterProvider router={router} />
          </CategoryContextProvider>
        </SelectedContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default App
