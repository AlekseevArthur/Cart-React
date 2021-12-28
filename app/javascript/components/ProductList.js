import React, { useState } from "react"
import Product from './Product'

const ProductList = ({products}) => {
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
