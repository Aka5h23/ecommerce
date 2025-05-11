import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use Routes instead of Switch
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        {/* Home Page Route */}
        <Route exact path="/" element={<HomePage />} />
        
        {/* Product Listing Page Route */}
        <Route
          path="/products"
          element={<ProductListingPage products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
