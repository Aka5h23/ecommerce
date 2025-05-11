import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our E-Commerce Site</h1>
      {/* Use the Link component to navigate to the product listing page */}
      <Link to="/products">
        <Button variant="contained" color="primary">
          Go to Product Listing
        </Button>
      </Link>
    </div>
  );
}

export default HomePage;
