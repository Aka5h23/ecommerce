import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
