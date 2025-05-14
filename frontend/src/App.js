import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import MyCart from "./pages/MyCart";

function App() {
  const [products, setProducts] = useState([]);

  // Fetch product data when the app loads
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Product Listing Page Route */}
        <Route
          path="/products"
          element={<ProductListingPage products={products} />}
        />
        {/* My Cart Page Route */}
        <Route path="/cart" element={<MyCart />} /> {/* New route for My Cart */}
      </Routes>
    </Router>
  );
}

export default App;
