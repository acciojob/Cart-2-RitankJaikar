import React, { useState } from "react";
import './../styles/App.css';
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./NavBar";

const App = () => {

  return (
    <div>
        <Navbar />
        <br /><br />
        <h2>Products:-</h2>
        <Products />
        <br/><br/><br/><br/>
        <h2>Cart:-</h2>
        <Cart />
    </div>
  )
}

export default App;