import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Product.module.css'
import { selectedContext } from '../context/context'
import { useEffect, } from 'react'
import { Lock, Heart } from 'phosphor-react'
// import SelectedContextProvider, { selectedContext } from '../context/context'

export default function ProductDetail({ products }) {
  const { handleSelectedProduct, selectedProduct } = useContext(selectedContext)
   const [displayedProducts, setDisplayedProducts] = useState(10)
   const [seeMoreClicked, setSeeMoreClicked] = useState(false)
  // console.log(selectedProduct)
    const handleSeeLess = () => {
      setSeeMoreClicked(false)
      setDisplayedProducts(10)
    }

    const handleSeeMore = () => {
      setSeeMoreClicked(true)
      setDisplayedProducts(displayedProducts + 10)
    }

  return (
    <>
      <div className={classes.header}>
        <h1>NEW ARRIVALS</h1>
        <p>
          Our new arrivals are built to withstand your activities while keeping
          you looking your best!
        </p>
      </div>
      <div className={classes['product-container']}>
        {products.slice(0, displayedProducts).map((product) => (
          <div key={product.id}>
            <Link
              to={`${product.id}`}
              onClick={() => handleSelectedProduct(product)}
            >
              <div className={classes.productContent}>
                <img
                  src={product.image}
                  alt=''
                  className={classes['product-img']}
                />

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
          </div>
        ))}
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
    </>
  )
}
