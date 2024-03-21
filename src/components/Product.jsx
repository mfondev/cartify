import React, {useContext } from 'react'
import { useEffect, useState } from 'react'
import classes from './styles/Product.module.css'
import Modal from './Modal'
import { Link, Outlet } from 'react-router-dom'
import SelectedContextProvider, { selectedContext } from './context'

export default function Products() {
  const url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [displayedProducts, setDisplayedProducts] = useState(10)
  const [seeMoreClicked, setSeeMoreClicked] = useState(false)
  const [error, setError] = useState([])
  const { handleSelectedProduct } = useContext(selectedContext)


  const handleSeeLess = () => {
    setSeeMoreClicked(false)
    setDisplayedProducts(10)
  }

  const handleSeeMore = () => {
    setSeeMoreClicked(true)
    setDisplayedProducts(displayedProducts + 10)
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`This is the Status: ${res.status}`)
        }
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching data:', error.message)
        setError(error.message)
      }
    }
    getData()
  }, [])

  return (
    <SelectedContextProvider>
      <div className={classes.header}>
        <h1>NEW ARRIVALS</h1>
        <p>
          Our new arrivals are built to withstand your activities while keeping
          you looking your best!
        </p>
      </div>
      {/* <h1>Featured Product</h1> */}

      {/* <div className={classes['image-container']}> */}
        <div className={classes['product-container']}>
          {products ? (
            products.slice(0, displayedProducts).map((product) => (
              // console.log(product),
              <Link
                className={classes.link}
                key={product.id}
                onClick={() => handleSelectedProduct(product)}
                to={`/${product.id}`}
              >
                <div className={classes.product}>
                  <img
                    src={product.image}
                    alt=''
                    className={classes['product-img']}
                  />
                  {/* <div> */}
                    <h1 className={classes['product-title']}>{product.title}</h1>
                    <p className={classes.price}>${product.price}</p>
                  {/* </div> */}
                </div>
              </Link>
            ))
          ) : (
            <p className={classes.errorMessage}>Loading...</p>
          )}
        </div>
      {/* </div> */}
      {(products ?? []).length > displayedProducts && !seeMoreClicked && (
        <div className={classes.centerButton}>
          <button className={classes.seeMoreBttn} onClick={handleSeeMore}>
            see all
          </button>
        </div>
      )}

      {seeMoreClicked && (
        <div className={classes.centerButton}>
          <button className={classes.seeMoreBttn} onClick={handleSeeLess}>
            see less
          </button>
        </div>
      )}
    </SelectedContextProvider>
  )
}
