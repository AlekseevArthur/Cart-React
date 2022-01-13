import React from 'react'
import { useDispatch } from "react-redux"


export const Changer = ({ id, count }) => {
  const dispatch = useDispatch()

  const changeCount = (e) => {
    if (e.target.value === '+') {
      dispatch({ type: 'setCount', payload: { id: id, count: count + 1 } })
    } else if (e.target.value === '-') {
      if (count - 1 <= 0) return dispatch({ type: 'setCount', payload: { id: id, count: 1 } })
      dispatch({ type: 'setCount', payload: { id: id, count: count - 1 } })
    } else {
      if (e.target.value <= 0) return dispatch({ type: 'setCount', payload: { id: id, count: 1 } })
      validateNumberField(e.target.value)
        ? dispatch({ type: 'setCount', payload: { id: id, count: e.target.value } })
        : null
    }
  }
  
  return (
    <div className="col">
      <button onClick={changeCount} value='-'>-</button>
      <input
        type='number'
        onChange={changeCount}
        style={{ width: '50px' }}
        value={count}
        className="border" />
      <button onClick={changeCount} value='+'>+</button>
    </div>
  )
}
const validateNumberField = myNumber => {
  return myNumber.match(/^[0-9]+$/) != null;
};
