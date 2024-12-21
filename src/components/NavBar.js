import React, { useContext } from "react";
import cartContex from "../context/cartContex";

export default function Navbar() {
    const {totalCart} = useContext(cartContex);

    return (
        <div>
            <div>Navbar</div>
            Total: {totalCart}
        </div>
    )
}