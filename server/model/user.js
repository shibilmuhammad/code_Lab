const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:String,
  bio: String,
  title: String,
  email : String,
  password : String,
  avatar: String,
  publisher_id : String,
  status : String
})
  const users = mongoose.model("users", userSchema);
  module.exports = users;