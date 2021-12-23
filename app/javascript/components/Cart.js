import React, { useState } from "react"
import LineItem from "./LineItem"

const Cart = (props) => {

  return <div className="card">
    <div className="row">
      <div className="col cart">
        <div className="title">
          <h4><b>Shopping Cart</b></h4>
        </div>

        {
          props.lineItems.map((item, key) =>
            <LineItem
              item={item}
              itemId={key}
              key={key}
              deleteLineItem={props.deleteLineItem} />
          )
        }

      </div>
    </div>
  </div>

}


export default Cart