import { createStore } from 'redux'
import { lineItemConstructor, getTotalPrice } from "./utilities"


const initialState = {
  products: [],
  totalPrice: 0
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return {
        lineItems: [
          ...state.lineItems,
          lineItemConstructor(action.payload)
        ],
        totalPrice: state.totalPrice + action.payload.price
      }
    }
    case 'delete': {
      let newItems = [...state.lineItems]
      newItems.splice(action.payload, 1)
      return {
        lineItems: newItems,
        totalPrice: getTotalPrice(newItems)
      }
    }
    case 'setCount': {
      const { id, count } = action.payload
      let newState = { ...state }
      newState.lineItems[id].count = count
      newState.totalPrice = getTotalPrice(newState.lineItems)
      return newState
    }
    default:
      return state
  }
}

const configureStore = () => createStore(rootReducer, initialState)

export default configureStore