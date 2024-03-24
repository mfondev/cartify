import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import { ProductContextProvider } from './components/product-context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import Modal from './components/Modal'
import SelectedContextProvider from './components/context'
import Category from './components/Category'
// import { categoryContext } from './components/Categories'
import CategoryContextProvider from './components/categoryContext'

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
  {
    path: '/category',
    element: <Category />,
  },
])
function App() {
  return (
    <>
      <ProductContextProvider>
        <SelectedContextProvider>
          <CategoryContextProvider>
            <RouterProvider router={router} />
            <Footer />
          </CategoryContextProvider>
        </SelectedContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default App
