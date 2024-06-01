import { createContext, useState } from 'react'

export const selectedContext = createContext('')

export default function SelectedContextProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState([])
  function handleSelectedProduct(select) {
    setSelectedProduct(select)
  }
  const contextValue = {
    selectedProduct,
    setSelectedProduct,
    handleSelectedProduct,
  }

  return (
    <selectedContext.Provider value={contextValue}>
      {children}
    </selectedContext.Provider>
  )
}
