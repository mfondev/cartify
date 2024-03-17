import React, { useContext } from 'react'
import classes from './styles/Modal.module.css'
import { ProductContext } from './product-context'
import { CheckCircle, XCircle } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { selectedContext } from './context'
import Nav from './Nav'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Modal() {
  const { selectedProduct, handleSelectedProduct } = useContext(selectedContext)
  const { id, title, price, description, image, category, rating } =
    selectedProduct
  const { rate } = rating || {}
  const { handleAddToCart, getQuantity, addedCart } = useContext(ProductContext)
  const params = useParams()
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
      {/*  */}
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
            <p className={classes.info}>Description</p>
            <p className={classes.desc}>{description}</p>
            <p>
              <span className={classes.info}>Rating:</span> {rate}
            </p>
            <div>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className={classes.addToCartBttn}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>

        {/* {addedCart && <p className={classes.successMessage}>Added Successfully</p>} */}
      </div>
    </>
  )
}
