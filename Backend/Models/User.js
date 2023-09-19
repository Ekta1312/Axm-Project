const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: String, // "user", "vendor", or "admin"
});

const User = mongoose.model("User", userSchema);

module.exports = User;
