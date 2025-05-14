import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import ProductCard from "../components/ProductCard";

// Import the images
import product1Image from "../assets/product1.jpg";
import product2Image from "../assets/product2.jpg";
import product3Image from "../assets/product3.jpg";

const HomePage = () => {
  const featuredProducts = [
    {
      title: "Wireless Headphones",
      description: "Experience crystal clear sound with noise cancellation.",
      price: 99.99,
      image: product1Image,
    },
    {
      title: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: product2Image,
    },
    {
      title: "Gaming Mouse",
      description: "High precision and RGB lighting for serious gamers.",
      price: 59.99,
      image: product3Image,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Our E-Commerce Store!
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mb: 4 }}>
        <Typography variant="h6">Big Summer Sale!</Typography>
        <Typography variant="body1">
          Up to 50% off on selected electronics. Limited time offer!
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Featured Products
      </Typography>

      <Grid container spacing={2}>
        {featuredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>

      {/* Button to navigate to the Product Listing Page */}
      <Link to="/products">
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          View All Products
        </Button>
      </Link>

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

export default HomePage;
