const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    trim: true, // Remove leading/trailing spaces
  },
  phone: {
    type: String,
    required: true,
    maxLength: [10, "Phone Number must contain 10 characters only"],
    trim: true,
  },
  first_name: String,
  middleName: String,
  last_name: String,
  year: String,
  div: String,
  roll_no: String,
  department: String,
  expectation: String,
  payment_id: String,
  reciept_img: Buffer,
  trId: String,
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
