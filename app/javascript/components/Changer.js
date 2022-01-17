import React from 'react'
import { useDispatch } from 'react-redux'


export const Changer = ({ id, count }) => {
  const dispatch = useDispatch()

  const minusHandle = () => {
    if (count - 1 != 0) 
    dispatch({ type: 'setCount', payload: { id: id, count: count - 1 } })
  }

  const plusHandle = () => {
    dispatch({ type: 'setCount', payload: { id: id, count: count + 1 } })
  }

  const inputHandle = e => {
    if (e.target.value <= 0) return dispatch({ type: 'setCount', payload: { id: id, count: 1 } })
    dispatch({ type: 'setCount', payload: { id: id, count: e.target.value } })
  }

  return (
    <div className="col">
      <button onClick={minusHandle} value='-'>-</button>
      <input
        type='number'
        onChange={inputHandle}
        style={{ width: '50px' }}
        value={count}
      />
      <button onClick={plusHandle} value='+'>+</button>
    </div>
  )
}

