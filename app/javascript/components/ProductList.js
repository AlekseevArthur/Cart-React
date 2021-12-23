import React, { useState } from "react"
import Product from './Product'

const ProductList = (props) => {

  return <div style={{ display: 'flex' }}>
    {
      props.products.map((product, key) =>
        <Product
          addToCart={props.addToCart}
          key={key}
          product={product}
          button={props.buttons.find(x => x.id == product.id)} />
      )
    }
  </div>
}

export default ProductList
