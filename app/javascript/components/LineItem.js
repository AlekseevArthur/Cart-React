import React, { useState } from "react"

const LineItem = (props) => {
  const [count, setCount] = useState(1)

  const changeCount = (e) => {
    if (e.target.value == '+') {
      setCount(count + 1)
    } else if (e.target.value == '-') {
      if (count - 1 <= 0) return props.deleteLineItem(props.itemId)
      setCount(count - 1)
    }
  }

  return <div className="row border-top border-bottom">
    <div className="row main align-items-center">
      <div className="col-2">
        <img className="img-fluid"
          src={`assets/${props.item.image_url}`} />
      </div>
      <div className="col">
        <div className="row">
          {props.item.name}
        </div>
      </div>
      <div className="col">
        <button onClick={changeCount} value='-'>-</button>
        <span className="border">{count}</span>
        <button onClick={changeCount} value='+'>+</button>
      </div>
      <div className="col">$ {props.item.price}
        <button onClick={() => props.deleteLineItem(props.itemId)} className="close">&#10005;</button></div>
    </div>
  </div>
}

export default LineItem
