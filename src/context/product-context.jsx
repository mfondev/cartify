import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [addedItems, setAddedItems] = useState([])
  const [addedCart, setAddedCart] = useState(false)


  const handleAddToCart = (item) => {
    setAddedItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (existingItem) => existingItem.id === item.id
      )
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1
        return updatedItems
      } else {
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })

    setAddedCart(true)

    setTimeout(() => {
      setAddedCart(false)
    }, 3000)
  }

  const handleRemoveFromCart = (itemId) => {
    setAddedItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (existingItem) => existingItem.id === itemId
      )
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems]
        updatedItems.splice(existingItemIndex, 1)
        return updatedItems
      } else {
        return prevItems
      }
    })
  }

  const getQuantity = (itemId) => {
    const item = addedItems.find((item) => item.id === itemId)
    return item ? `${item.quantity}` : ''
  }

  const handleIncreaseQuantity = (itemId) => {
    setAddedItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    })
  }

  const handleReduceQuantity = (itemId) => {
    setAddedItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    })
  }

  const getSubTotal = () => {
    return addedItems.reduce((total, item) => {
      return total + item.price * item.quantity
    },0)
  }

  const contextValue = {
    addedItems,
    handleAddToCart,
    handleRemoveFromCart,
    getQuantity,
    addedCart,
    handleIncreaseQuantity,
    handleReduceQuantity,
    getSubTotal,
  }
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}
