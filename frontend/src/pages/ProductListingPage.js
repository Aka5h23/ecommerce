import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

function ProductListingPage({ products }) {
  return (
    <div>
      <h1>Product Listing</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductListingPage;
