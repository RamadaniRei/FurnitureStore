import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Shopping Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
