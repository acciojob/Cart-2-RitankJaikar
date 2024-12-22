import React, { useEffect, useState } from "react";
import CartContex from "./CartContex";
import products from "../productList";

export default function CartProvider({children}) {
    const [cart,  setCart] = useState([]);
    // useState([
    //     {
    //         id: 2,
    //         name: "Google Pixel",
    //         price: 500,
    //         quantity: 2,
    //     },
    //     {
    //         id: 3,
    //         name: "Xiaomi Redmi Note 2",
    //         price: 700,
    //         quantity: 1,
    //     }
    // ]);
    const [totalCart, setTotalCart] = useState(0);

    function addToCart(id) {
        setCart(currCart => {
            if(currCart.some(cartItem => cartItem.id === id)) {
                // Increment the quantity of the existing item
                return currCart.map(cartItem => 
                    cartItem.id === id 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                        : cartItem
                );
            }
            else {
                // Add a new item to the cart
                const product = products.find(product => product.id === id);
                return [...currCart, {...product, quantity: 1}];
            }
        })
    }

    function removeFromCart(id) {
        setCart(currCart => {
            return currCart.map(cartItem => {
                    if(cartItem.id === id) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem;
                }
            )
            .filter(cartItem => cartItem.quantity>0);
        })
    }

    function clearAll() {
        setCart([]);
    }

    useEffect(() => {
        const total= cart.reduce((acc, curr) => {
            return acc+curr.price*curr.quantity;
        }, 0);
        setTotalCart(total);
    }, [cart]);

    return(
        <CartContex.Provider value={{cart, setCart, addToCart, removeFromCart, totalCart, clearAll}}>
            {children}
        </CartContex.Provider>
    )
}