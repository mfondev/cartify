import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import classes from './styles/Product.module.css'
import { Link, Outlet } from 'react-router-dom'
import { Lock, Heart } from 'phosphor-react'
import SelectedContextProvider, { selectedContext } from './context'

export default function Products() {
  const url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState(null)
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

      <div className={classes['product-container']}>
        {products ? (
          products.slice(0, displayedProducts).map((product) => (
            // <Link
            //   className={classes.product}
            //   key={product.id}
            //   onClick={() => handleSelectedProduct(product)}
            //   to={`/${product.id}`}
            // >
            //   <img
            //     src={product.image}
            //     alt=''
            //     className={classes['product-img']}
            //   />
            //   <div className={classes.productInfo}>
            //     <div className={classes['product-text']}>
            //       <h1 className={classes['product-title']}>{product.title}</h1>
            //       <p className={classes.price}>${product.price}</p>
            //     </div>
            //     <Lock size={16} className={classes.lock}/>
            //   </div>
            // </Link>

            <Link
              className={classes.product}
              key={product.id}
              onClick={() => handleSelectedProduct(product)}
              to={`/${product.id}`}
            >
              <div className={classes.productContent}>
                <img
                  src={product.image}
                  alt=''
                  className={classes['product-img']}
                />
                {/* <div className={classes.productInfo}>
                    <h1 className={classes['product-title']}>{product.title}</h1>
                    <p className={classes.price}>${product.price}</p>
                  </div>
                  <Lock size={16} className={classes.lock} /> */}
                <div className={classes.productInfo}>
                  <div className={classes['product-text']}>
                    <h1 className={classes['product-title']}>
                      {product.title}
                    </h1>
                    <p className={classes.price}>${product.price}</p>
                  </div>
                  <div className={classes.lockWrapper}>
                    <Lock className={classes.lock} />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className={classes.errorMessage}>Loading...</p>
        )}
      </div>
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
