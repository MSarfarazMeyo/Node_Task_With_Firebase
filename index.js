const express = require("express");
const app = express();
const productRoutes = require("./src/routes/productRoutes");

app.use(express.json());

app.use("/api/products", productRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
