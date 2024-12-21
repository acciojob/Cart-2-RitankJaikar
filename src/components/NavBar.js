import React, { useContext } from "react";
import cartContext from "../context/cartContex";

export default function Navbar() {
    const {totalCart} = useContext(CartContext);

    return (
        <div>
            <div>Navbar</div>
            Total: {totalCart}
        </div>
    )
}