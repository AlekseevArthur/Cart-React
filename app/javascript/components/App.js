import React, { useState } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'
import { getProducts } from '../utilities'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

const store = configureStore()

const App = () => {

  let products = getProducts()

  return (
    <Provider store={store}>
      <Cart />
      <hr />
      <ProductList />
    </Provider>)
}

export default App
