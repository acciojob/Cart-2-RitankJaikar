import React, { useContext } from "react";
import CartContex from "../context/CartContex";

export default function Cart() {
    const {cart, totalCart, addToCart, removeFromCart} = useContext(CartContex);

    return (
        <div>
            {
                cart.length !== 0 
                ?
                cart.map(item => {
                    return (
                        <div key={item.id}>
                            <div>Name: {item.name}</div>
                            <div>Quantity: {item.quantity}</div>
                            <div>Price: {item.price}</div>
                            <button onClick={() => addToCart(item.id)} id="increment-btn-`id`">+</button>
                            &nbsp;&nbsp;
                            <button onClick={() => removeFromCart(item.id)}>-</button>
                            <br/><br/>
                        </div>
                    )
                })
                :
                <div>Cart is empty</div>
            }
            <br />
            <div>
                Total: {totalCart}
            </div>
        </div>
    )
}