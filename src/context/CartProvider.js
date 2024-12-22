import React, { useEffect, useState } from "react";
import CartContex from "./CartContex";
import products from "../productList";

export default function CartProvider({children}) {
    const [cart,  setCart] = /*useState([]);*/ useState([
        {
            id: 1,
            name: "Google Pixel",
            price: 500,
            quantity: 2,
        }
    ]);
    const [totalCart, setTotalCart] = useState(0);

    function addToCart(id) {
        setCart(currCart => {
            let updatedCart;
            if(currCart.some(cartItem => cartItem.id === id)) {
                // Increment the quantity of the existing item
                updatedCart = currCart.map(cartItem => 
                    cartItem.id === id 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                        : cartItem
                );
            }
            else {
                // Add a new item to the cart
                const product = products.find(product => product.id === id);
                updatedCart = [...currCart, {...product, quantity: 1}];
            }
            // Update totalCart after state update
            const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotalCart(total);
            return updatedCart;
        })
    }

    function removeFromCart(id) {
        setCart(currCart => {
            const updatedCart = currCart.map(cartItem => {
                    if(cartItem.id === id) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem;
                }
            )
            .filter(cartItem => cartItem.quantity>0);

            // Update totalCart after state update
            const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotalCart(total);
            return updatedCart;
        })
    }

    function deleteFromCart(id) {
        setCart(currCart => {
            const updatedCart = currCart.filter(cartItem => cartItem.id !==id);
            const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotalCart(total);
            return updatedCart;
        })
    }

    function clearAll() {
        setCart([]);
        setTotalCart(0);
    }

    useEffect(() => {
        const total= cart.reduce((acc, curr) => {
            return acc+curr.price*curr.quantity;
        }, 0);
        setTotalCart(total);
    }, [cart]);

    return(
        <CartContex.Provider value={{cart, setCart, addToCart, removeFromCart, totalCart, clearAll, deleteFromCart}}>
            {children}
        </CartContex.Provider>
    )
}