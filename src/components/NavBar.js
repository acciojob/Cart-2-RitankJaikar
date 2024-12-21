import React, { useContext } from "react";
import CartContex from "../context/CartContex";

export default function Navbar() {
    const {totalCart} = useContext(CartContex);

    return (
        <div>
            <div>Navbar</div>
            <div id="nav-cart-item-count">Total: {totalCart}</div>
        </div>
    )
}