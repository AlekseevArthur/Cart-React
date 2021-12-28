import React, { useState } from "react"
import LineItem from "./LineItem"
import { useSelector } from "react-redux"


const Cart = () => {
  const lineItems = useSelector((state) => state.products.filter(pr => pr.inCart))
  const totalPrice = useSelector((state) => state.totalPrice)

  return <div className="card">
    <div className="col cart">
      <h4><b>Shopping Cart</b></h4>
      {
        lineItems.map((item, key) =>
          <LineItem item={item} itemId={key} key={key} />
        )
      }
    </div>
    Total Price: {totalPrice} $
  </div>

}


export default Cart