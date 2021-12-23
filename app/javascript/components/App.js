import React, { useState } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

const App = (props) => {
  const [lineItems, setItems] = useState([])

  const addToCart = (product) => {
    setItems([...lineItems, lineItemConstructor(product)])
    changeButtonActive(product.id)
  }

  const [productButtons, setButtons] = useState(props.products.map(productButtonConstructor))

  const changeButtonActive = (id) => {
    let newState = [...productButtons]
    let index = productButtons.findIndex(x => x.id == id)
    newState[index].active = !newState[index].active
    setButtons(newState)
  }

  const deleteLineItem = (itemId) => {
    let newItems = [...lineItems]
    let item = newItems.splice(itemId, 1)
    setItems(newItems)
    changeButtonActive(item[0].id)
  }

  return <div>
    <Cart deleteLineItem={deleteLineItem} lineItems={lineItems} />
    <hr />
    <ProductList
      addToCart={addToCart}
      products={props.products}
      buttons={productButtons} />
  </div>
}


const lineItemConstructor = (product) => {
  return ({
    id: product.id,
    price: product.price,
    count: 1,
    name: product.name,
    image_url: product.image_url
  })
}

const productButtonConstructor = (product) => {
  return ({
    id: product.id,
    active: true
  })
}

export default App
