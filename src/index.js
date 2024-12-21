import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import cartProvider from "./context/cartProvider";



ReactDOM.render(
    <cartProvider>
        <App />
    </cartProvider>
    , document.getElementById("root")
);
