import React from 'react'
import { useEffect, useState } from 'react'
import classes from './Product.module.css'
import Modal from './Modal'
// import Backdrop from '@material-ui/core/Backdrop'
// import CircularProgress from '@material-ui/core/CircularProgress'
// import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles'
// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }))

export default function Products() {
  // const classStyle = useStyles()
  const url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState([])
  const [openModal, setOpenModal] = useState(false)
  // const [error,setError] =  useState()
  const [displayedProducts, setDisplayedProducts] = useState(10)

  function handleSelectedProduct(select) {
    setSelectedProduct(select)
    setOpenModal(true)
  }

  const handleSeeMore = () => {
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
        setError(error)
        console.error('Error fetching data:', error.message)
      }
    }
    getData()
  }, [])

  return (
    <>
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          onSelect={handleSelectedProduct}
          product={selectedProduct}
        />
      )}

      <div className={classes.header}>
        <h1>NEW ARRIVALS</h1>
        <p>
          Our new arrivals are built to withstand your activities while keeping
          you looking your best!
        </p>
      </div>
      <div className={classes['image-container']}>
        <div className={classes['product-container']}>
          {products ? (
            products.slice(0, displayedProducts).map((product) => (
              <div
                className={classes['product-container']}
                key={product.id}
                onClick={() => handleSelectedProduct(product)}
              >
                <div className={classes.product}>
                  <img
                    src={product.image}
                    alt=''
                    className={classes['product-img']}
                  />
                  <h1 className={classes['product-title']}>{product.title}</h1>
                  <p className={classes.price}>${product.price}</p>
                </div>
              </div>
            ))
          ) : (<p>Loading...</p>
            // <Backdrop className={classStyle.backdrop} open>
            //   <CircularProgress color='inherit' />
            // </Backdrop>
          )}
        </div>
      </div>
      {(products ?? []).length > displayedProducts && (
        <div className={classes.centerButton}><button className={classes.seeMoreBttn} onClick={handleSeeMore}>See More</button></div>
      )}
    </>
  )
}
