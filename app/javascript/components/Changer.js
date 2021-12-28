import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"


export const Changer = ({ id, count }) => {
    const dispatch = useDispatch()

    const changeCount = (e) => {
        if (e.target.value === '+') {
            dispatch({ type: 'setCount', payload: { id: id, count: count + 1 } })
        } else if (e.target.value === '-') {
            if (count - 1 <= 0) return dispatch({ type: 'delete', payload: id })
            dispatch({ type: 'setCount', payload: { id: id, count: count - 1 } })
        } else {
            if (e.target.value <= 0) return dispatch({ type: 'delete', payload: id })
            dispatch({ type: 'setCount', payload: { id: id, count: e.target.value } })
        }
    }
    return (
        <div className="col">
            <button onClick={changeCount} value='-'>-</button>
            <input onChange={changeCount} style={{ width: '50px' }} value={count} className="border" />
            <button onClick={changeCount} value='+'>+</button>
        </div>
    )
}
