import React, { useCallback, useState } from 'react'
import classes from './Modal.module.css'
import { XCircle } from 'phosphor-react'
import { useContext } from 'react'
import { ProductContext } from './product-context'
import {CheckCircle} from 'phosphor-react';

export default function Modal({ setOpenModal, onSelect, product }) {
  const { id, title, price, description, image, category, rating } = product
  const { rate } = rating
  const { handleAddToCart, getQuantity, addedCart } = useContext(ProductContext)

 
  return (
    <>
      <div className={classes['modal-overlay']}>
        {addedCart && (
          <div className={classes.successMessage}>
            <CheckCircle size={32} />
            Added Successfully
          </div>
        )}

        <div className={classes['modal-content']}>
          <div
            key={id}
            className={classes['modal-item']}
            onClick={() => {
              onSelect(product)
            }}
          >
            <div className={classes['image-container']}>
              <img src={image} alt='' className={classes['modal-image']} />
            </div>
            <div>
              <p>Category: {category}</p>
              <h1 className={classes['modal-title']}>{title}</h1>
              <p>${price}</p>
              <p>{description}</p>
              <p>Rating: {rate}</p>
              <div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={classes.addToCartBttn}
                >
                  Add to Cart ({getQuantity(product.id)})
                </button>
              </div>
            </div>
          </div>
          <button
            className={classes['close-button']}
            onClick={() => setOpenModal(false)}
          >
            <XCircle size={32} />
          </button>
          {/* {addedCart && <p className={classes.successMessage}>Added Successfully</p>} */}
        </div>
      </div>
    </>
  )
}
