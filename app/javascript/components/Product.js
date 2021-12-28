import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Changer } from "./Changer"

const Product = ({ product }) => {
	const dispatch = useDispatch()
	
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img
				style={{ minHeight: '250px' }}
				src={`/assets/${product.image_url}`}
				className="card-img-top"
				alt="..." />
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				<p className="card-text">{product.price} $</p>
				<Changer id={product.id} count={product.count} />
				<button onClick={() =>
					dispatch({ type: 'add', payload: product.id })}
					className="btn btn-primary">Add to cart
				</button>
			</div>
		</div>
	)
}

export default Product