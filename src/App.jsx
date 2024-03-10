import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import { ProductContextProvider } from './components/product-context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </ProductContextProvider>
    </>
  )
}

export default App
