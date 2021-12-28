import { createStore } from 'redux'
import { lineItemConstructor, getTotalPrice } from "./utilities"
import { getProducts } from './utilities'

const initialState = {
  products: getProducts(),
  totalPrice: 0
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      let newProducts = [...state.products]
      newProducts.find(x => x.id == action.payload).inCart = true
      return {
        products: newProducts,
        totalPrice: getTotalPrice(newProducts)
      }
    }
    case 'delete': {
      let newItems = [...state.products]
      let id = action.payload
      newItems.find(x => x.id === id).inCart = false
      return {
        products: newItems,
        totalPrice: getTotalPrice(newItems)
      }
    }
    case 'setCount': {
      const { id, count } = action.payload
      let newState = { ...state }
      newState.products.find(x => x.id === id).count = count
      newState.totalPrice = getTotalPrice(newState.products)
      return {...newState}
    }
    default:
      return state
  }
}

const configureStore = () => createStore(rootReducer, initialState)

export default configureStore