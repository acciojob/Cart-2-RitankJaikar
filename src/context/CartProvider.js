import React, { useEffect, useState } from "react";
import CartContex from "./CartContex";
import products from "../productList";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Samsung Galaxy S7",
            price: 600,
            quantity: 1,
        },
        {
            id: 2,
            name: "Google Pixel",
            price: 500,
            quantity: 1,
        },
        {
            id: 3,
            name: "Xiaomi Redmi Note 2",
            price: 699.94,
            quantity: 1,
        },
    ]);

    const [totalCart, setTotalCart] = useState(0);
    const [totalItem, setTotalItem] = useState(0);

    // Function to recalculate the total cart amount
    const calculateTotal = (cartItems) => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    // Function to calculate the total number of items in the cart
    const calculateTotalItems = (cartItems) => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    // Add an item to the cart or increment its quantity
    const addToCart = (id) => {
        setCart((currCart) => {
            const updatedCart = currCart.some((cartItem) => cartItem.id === id)
                ? currCart.map((cartItem) =>
                      cartItem.id === id
                          ? { ...cartItem, quantity: cartItem.quantity + 1 }
                          : cartItem
                  )
                : [...currCart, { ...products.find((product) => product.id === id), quantity: 1 }];
            setTotalCart(calculateTotal(updatedCart));
            setTotalItem(calculateTotalItems(updatedCart)); // Update totalItem
            return updatedCart;
        });
    };

    // Decrement the quantity of an item or remove it if quantity reaches 0
    const removeFromCart = (id) => {
        setCart((currCart) => {
            const updatedCart = currCart
                .map((cartItem) =>
                    cartItem.id === id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0);
            setTotalCart(calculateTotal(updatedCart));
            setTotalItem(calculateTotalItems(updatedCart)); // Update totalItem
            return updatedCart;
        });
    };

    // Delete an item from the cart
    const deleteFromCart = (id) => {
        setCart((currCart) => {
            const updatedCart = currCart.filter((cartItem) => cartItem.id !== id);
            setTotalCart(calculateTotal(updatedCart));
            setTotalItem(calculateTotalItems(updatedCart)); // Update totalItem
            return updatedCart;
        });
    };

    // Clear the entire cart
    const clearAll = () => {
        setCart([]);
        setTotalCart(0);
        setTotalItem(0);
    };

    // Ensure `totalCart` and `totalItem` are always updated when `cart` changes
    useEffect(() => {
        setTotalCart(calculateTotal(cart));
        setTotalItem(calculateTotalItems(cart)); // Update totalItem
    }, [cart]);

    return (
        <CartContex.Provider
            value={{
                cart,
                setCart,
                addToCart,
                removeFromCart,
                totalCart,
                clearAll,
                deleteFromCart,
                totalItem,
            }}
        >
            {children}
        </CartContex.Provider>
    );
}
