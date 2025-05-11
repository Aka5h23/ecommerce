const express = require("express");
//const cors = require("cors");
const app = express();

//app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express2!" });
  //res.send("Hello");
});

app.get("/api/products", (req, res) => {
    res.json([
      { id: 1, name: "iPhone 15 Pro", price: 1299 },
      { id: 2, name: "Galaxy S24 Ultra", price: 1199 },
    ]);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
