import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

const MyCart = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>

      <Typography variant="body1" gutterBottom>
        Your cart is currently empty. Add some products to your cart.
      </Typography>

      {/* Button to navigate to the checkout (For now, it just displays a message) */}
      <Link to="/checkout">
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Go to Checkout
        </Button>
      </Link>
    </Box>
  );
};

export default MyCart;
