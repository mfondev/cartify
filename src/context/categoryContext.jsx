import { useState, createContext, useEffect } from 'react'
import React from 'react'

export const categoryContext = createContext('')

export default function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState([])
  const [categoryClicked, setCategoryClicked] = useState('')

  const handleClick = (category) => {
    setCategoryClicked(category)
  }

  const BASE_URL = 'https://fakestoreapi.com/products'
  useEffect(() => {
    const getCatgories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/category/${categoryClicked}`)
        const data = await response.json()
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
