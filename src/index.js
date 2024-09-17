import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import cartReducer from "../src/ducks/cart";
import productReducer from "../src/ducks/products";
import { Provider } from "react-redux";
import App from "./App";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsData from "./data/products";

// Combine the reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

// Corrected store setup
let store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    products: productsData,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
