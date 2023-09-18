const express = require("express");
const Joi = require("joi");
const userSchema = require("./models/userModel");
const connectDatabase = require("./config/db");

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const User = require("./models/userModel");
    const newUser = new User(value);
    await newUser.save();

    res
      .status(201)
      .json({ message: "User data saved successfully", user: newUser });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;
