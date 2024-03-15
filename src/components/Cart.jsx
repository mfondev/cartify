import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './product-context'
import Nav from './Nav'
import classes from './styles/Cart.module.css'
import { Link } from 'react-router-dom'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Cart() {
  const {
    addedItems,
    handleRemoveFromCart,
    getQuantity,
    handleIncreaseQuantity,
    handleReduceQuantity,
    getSubTotal
  } = useContext(ProductContext)
  const cart = addedItems.length === 0
  const subtotal = getSubTotal()
  return (
    <>
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
      {!cart ? (
        <div>
          <div className={classes.cart}>
            <h1>Your Cart Items</h1>
            {addedItems.map((item) => {
              return (
                <ul key={item.id} className={classes.cartItem}>
                  <img src={item.image} alt='' />
                  <div className={classes.items}>
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                    <div className={classes.countHandler}>
                      <button
                        onClick={() => {
                          handleReduceQuantity(item.id)
                        }}
                      >
                        -
                      </button>
                      <input
                        type='text'
                        value={getQuantity(item.id)}
                        readOnly
                      />
                      <button onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className={classes.removeCartBttn}
                    >
                      Remove Item
                    </button>
                  </div>
                </ul>
              )
            })}
          </div>
          <div className={classes.checkoutContainer}>
            <div className={classes.checkout}>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <Link to='/'>
                <button>Continue Shopping</button>
              </Link>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className={classes.cartEmpty}>Cart is currently Empty</h1>
      )}
    </>
  )
}
