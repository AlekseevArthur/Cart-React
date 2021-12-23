import React, { useState } from "react"

const Product = (props) => {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img
				style={{ minHeight: '250px' }}
				src={`/assets/${props.product.image_url}`}
				className="card-img-top"
				alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.name}</h5>
				<p className="card-text">{props.product.price} $</p>
				{props.button.active ?
					<button onClick={() =>
						props.addToCart(props.product)}
						className="btn btn-primary">Add to cart
					</button> :
					<button className="btn btn-secondary">Added</button>}
			</div>
		</div>
	)

}

export default Product