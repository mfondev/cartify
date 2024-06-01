import React from 'react'
import Product from './Product'
import { useLoaderData, json } from 'react-router-dom'

export default function Items() {
  const data = useLoaderData()
  return (
    <>
      <Product items={data} />
    </>
  )
}

export const loader = async ({ params }) => {
  const eventId = params.productId
  const url = `https://fakestoreapi.com/products/${eventId}`
  const response = await fetch(url)
  if (!response.ok) {
    throw json(
      {
        message: 'could not fetch products id ',
      },
      { status: 500 }
    )
    } else {
      return response
  }
}
