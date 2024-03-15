import React, { useContext } from 'react'
import classes from './styles/Header.module.css'
import { ProductContext } from './product-context'
import { CheckCircle, XCircle } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { selectedContext } from './context'

export default function Modal() {
  const {selectedProduct,handleSelectedProduct} = useContext(selectedContext)

  const { id, title, price, description, image, category, rating } =
    selectedProduct
  const { rate } = rating || {}
  const { handleAddToCart, getQuantity, addedCart } = useContext(ProductContext)
  const params = useParams()
  console.log(selectedProduct);
console.log(id);
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
              handleSelectedProduct(selectedProduct)
            }}
          >
            <div className={classes['image-container']}>
              <img src={image} alt='' className={classes['modal-image']} />
            </div>
            <div>
              <p>{params.productId}</p>
              <p>Category: {category}</p>
              <h1 className={classes['modal-title']}>{title}</h1>
              <p>${price}</p>
              <p>{description}</p>
              <p>Rating: {rate}</p>
              <div>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className={classes.addToCartBttn}
                >
                  Add to Cart ({getQuantity(selectedProduct.id)})
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
