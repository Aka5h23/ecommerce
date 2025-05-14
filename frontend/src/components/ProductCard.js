import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function ProductCard({ title, description, price, image }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography color="text.primary">${price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
