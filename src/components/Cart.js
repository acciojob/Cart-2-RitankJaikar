import React, { useContext } from "react";
import CartContex from "../context/CartContex";

export default function Cart() {
    const {cart, totalCart, addToCart, removeFromCart, clearAll, deleteFromCart} = useContext(CartContex);

    return (
        <div>
            {
                cart.length !== 0 
                ?
                <div id="cart-items-list">
                   {
                        cart.map(item => {
                            return (
                                <div key={item.id}>
                                    <div>Name: {item.name}</div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div id={`cart-item-price-${item.id}`}>Price: {item.price}</div>
                                    <button onClick={() => addToCart(item.id)} id={`increment-btn-${item.id}`}>+</button>
                                    &nbsp;&nbsp;
                                    <button onClick={() => removeFromCart(item.id)} id={`decrement-btn-${item.id}`}>-</button>
                                    <br />
                                    <button onClick={() => deleteFromCart(item.id)} id={`cart-item-remove-${item.id}`}>Remove</button>
                                    <br/><br/>
                                </div>
                            )
                        })
                    }
                </div>
                :
                <div>Cart is currently empty</div>
            }
            <br />
            <button onClick={clearAll} id="clear-all-cart">Clear Cart</button>
            <br />
            <div id="cart-total-amount">
                Total: {totalCart}
            </div>
        </div>
    )
}