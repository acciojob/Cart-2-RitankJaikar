import React, { useContext } from "react";
import CartContex from "../context/CartContex";

export default function Navbar() {
    const {totalCartm, totalItem} = useContext(CartContex);

    return (
        <nav>
            <div>useReducer</div>
            <div id="nav-cart-item-count">{totalItem}</div>
        </nav>
    )
}