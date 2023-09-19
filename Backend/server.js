const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./Routes/auth");
const regRoutes = require("./Routes/register");
const vendorRoutes = require("./Routes/vendorRoutes");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost/library_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", authRoutes);
app.use("/register", regRoutes);
app.use("/vendor", vendorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
