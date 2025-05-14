import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Button } from '@mui/material';   // Import Button from MUI


const ProductListingPage = ({ products }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Product Listings
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              title={product.name}
              description={product.description || "No description available."}
              price={product.price}
              image={product.image || "/path/to/default/image.jpg"}
            />
          </Grid>
        ))}
      </Grid>
      {/* Button to navigate to the My Cart Page */}
      <Link to="/cart">
        <Button
            variant="outlined"
            color="secondary"
            sx={{
            position: 'absolute',  // Use absolute positioning
            top: 20,               // Distance from the top
            right: 20,             // Distance from the right
            }}
        >
            My Cart
        </Button>
        </Link>
    </Box>
  );
};

export default ProductListingPage;
