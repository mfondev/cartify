import React, { useContext, useEffect } from 'react'
import classes from './styles/Modal.module.css'
import { ProductContext } from './product-context'
import { CheckCircle, Star, Truck } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { selectedContext } from './context'
import Nav from './Nav'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Modal() {
  const { selectedProduct, handleSelectedProduct } = useContext(selectedContext)
  const { handleAddToCart, addedCart } = useContext(ProductContext)
  const { id, title, price, description, image, category, rating } =
    selectedProduct
  const { rate } = rating || {}
  // const params = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {addedCart && (
        <div className={classes.successMessage}>
          <CheckCircle size={32} />
          <p>Added Successfully</p>
        </div>
      )}
      <div>
        <div className={classes.top}>
          <p>
            New Season Coming! Discount 10% for all products! Check out now{' '}
            <span className={classes.time}>
              {hour}:{String(minute).padStart(2, '0')}
            </span>
          </p>
        </div>
        <Nav />
      </div>
      <div className={classes.productContent}>
        <div
          key={id}
          className={classes.productItem}
          onClick={() => {
            handleSelectedProduct(selectedProduct)
          }}
        >
          <img src={image} alt='' className={classes.productImage} />

          <div className={classes.productDesc}>
            <p className={classes.category}>{category}</p>
            <h1 className={classes['modal-title']}>{title}</h1>
            <p className={classes.price}>${price}</p>
            <div>
              <Star size={16} weight='fill' />
              <Star size={16} weight='fill' />
              <Star size={16} weight='fill' />
              <Star size={16} weight='fill' />
              <Star size={16} weight='thin' />
            </div>
            <p className={classes.info}>Description</p>
            <p className={classes.desc}>{description}</p>
            <p>
              <span className={classes.info}>Rating:</span> {rate}
            </p>
            <div>
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className={classes.addToCartBttn}
              // disabled={add}
            >
              ADD TO CART
            </button>
            </div>
            <p className={classes.delivery}>
              <Truck size={16} weight='fill' />
                Free delivery on orders over $200.0
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
