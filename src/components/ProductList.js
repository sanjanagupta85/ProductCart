import React from "react";
import Product from "./Product.js";
export default function ProductList(props) {
	return(
        props.productList.length >0?
         props.productList.map((product, i) => {
          return (
			<Product product={product}
				key={i}
				incQuantity={props.incQuantity}
				index={i}
				decQuantity={props.decQuantity}
				removeItem={props.removeItem}
			/>);
}):<h1>There is nothing to show!</h1>
)
	}

