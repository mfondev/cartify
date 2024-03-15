import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import { ProductContextProvider } from './components/product-context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import Modal from './components/Modal'
import SelectedContextProvider from './components/context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <NotFoundPage />,
    // children: [
    //   {
    //     path: ':productId',
    //     element: <Modal />,
    //   },
    // ],
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: ':productId',
    element: <Modal />,
  },
])
function App() {
  return (
    <>
      <ProductContextProvider>
        <SelectedContextProvider>
          <RouterProvider router={router} />
          <Footer />
        </SelectedContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default App
