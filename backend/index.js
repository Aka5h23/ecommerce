const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "iPhone 15 Pro", price: 1299, description: "Latest iPhone with amazing features." },
    { id: 2, name: "Galaxy S24 Ultra", price: 1199, description: "Samsung flagship with powerful specs." },
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
