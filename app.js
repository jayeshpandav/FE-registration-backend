const express = require("express");
const { User, validateUser } = require('./models/userSchema');
const connectDatabase = require("./config/db");

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {



  const { error } = validateUser(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }


  try {
    const user = new User(req.body);

    const savedUser = await user.save();




    res
      .status(201)
      .json({ message: "User data saved successfully", user: savedUser });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;
