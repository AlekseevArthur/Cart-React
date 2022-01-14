import React, { useState } from "react"
import Product from './Product'
import { useSelector } from "react-redux"


const ProductList = () => {
  const products = useSelector(state => [...state.products])

  return <div style={{ display: 'flex' }}>
    {
      products.map((product, key) =>
        <Product
          key={key}
          product={product} />
      )
    }
  </div>
}

export default ProductList
