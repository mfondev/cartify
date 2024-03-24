import { useState, createContext, useEffect } from 'react'
import React from 'react'

export const categoryContext = createContext('')

// const categories = [
//   'electronics',
//   'jewelery',
//   "men's clothing",
//   "women's clothing",
// ]

export default function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState([])
  const [categoryClicked, setCategoryClicked] = useState('')
  // console.log(categoryClicked)

  const handleClick = (category) => {
    setCategoryClicked(category)
  }

  const BASE_URL = 'https://fakestoreapi.com/products'
  useEffect(() => {
    const getCatgories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/category/${categoryClicked}`)
        const data = await response.json()
        // console.log(data)
        setCategory(data)
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
    }
    getCatgories()
  },[categoryClicked])

  const contextValue = { category, handleClick,categoryClicked }
  return (
    <categoryContext.Provider value={contextValue}>
      {children}
    </categoryContext.Provider>
  )
}
