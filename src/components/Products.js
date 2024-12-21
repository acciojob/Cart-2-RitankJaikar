import React, { useContext } from "react";
import productList from "../productList";
import CartContex from "../context/CartContex";

export default function Products() {
    const {addToCart} = useContext(CartContex);

    return (
        <div style={{display: "flex", gap: "40px", flexWrap: "wrap"}}>
            {productList.map(product => {
                return (
                    <div key={product.id}>
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                        <button onClick={() => addToCart(product.id)}>Add</button>
                    </div>    
                )
            })}
        </div>
    )
}