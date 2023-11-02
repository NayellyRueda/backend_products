const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();
const itemRoutes = require("./routes/items");

app.use(cors());

app.use(itemRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listen at http://localhost:${process.env.PORT}`);
});
