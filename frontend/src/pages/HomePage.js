import React from "react";
import { Box, Typography, Grid, Paper, Button, Container, Card, CardContent, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Import the images
import product1Image from "../assets/product1.jpg";
import product2Image from "../assets/product2.jpg";
import product3Image from "../assets/product3.jpg";
import heroImage from "../assets/hero-banner.jpg"; // optional background image

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

  const testimonials = [
    { name: "Sarah", feedback: "Amazing service and fast delivery!" },
    { name: "John", feedback: "The headphones are just perfect. Great quality!" },
    { name: "Emily", feedback: "This store is my go-to for electronics!" },
  ];

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      {/* Hero Section */}
      <Paper
        sx={{
          height: 250,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 4,
          mb: 4,
        }}
        elevation={4}
      >
        <Typography variant="h3" fontWeight="bold">
          Shop the Latest Tech
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, maxWidth: 600 }}>
          Discover the best gadgets at unbeatable prices. Limited time offers available now!
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link to="/products">
            <Button variant="contained" color="primary">
              Browse Products
            </Button>
          </Link>
        </Box>
      </Paper>

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

      <Grid container spacing={2} sx={{ mb: 4 }}>
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
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          My Cart
        </Button>
      </Link>

      {/* Testimonials Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3}>
                <CardContent>
                  <Avatar sx={{ mb: 1, bgcolor: "primary.main" }}>
                    {testimonial.name[0]}
                  </Avatar>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional Promo */}
      <Box sx={{ mt: 6, textAlign: "center", p: 4, bgcolor: "#f0f0f0" }}>
        <Typography variant="h6">Get 10% Off Your First Order!</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Subscribe to our newsletter and stay updated.
        </Typography>
        <Button variant="contained" color="success">
          Subscribe Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
