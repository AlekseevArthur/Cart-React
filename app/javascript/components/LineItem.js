import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Changer } from "./Changer"


const LineItem = ({ item }) => {
  const dispatch = useDispatch()

  return <div className="row border-top border-bottom">
    <div className="row main align-items-center">
      <div className="col-2">
        <img className="img-fluid"
          src={`assets/${item.image_url}`} />
      </div>
      <div className="col">
        <div className="row">
          {item.name}
        </div>
      </div>
      <Changer id={item.id} count={item.count} />
      <div className="col">$ {item.price * item.count}
        <button onClick={() => dispatch({ type: 'delete', payload: item.id })} className="close">&#10005;</button></div>
    </div>
  </div>
}

export default LineItem
