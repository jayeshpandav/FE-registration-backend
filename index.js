const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/db");

// Handeling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down Server due to uncaught exception");
  process.exit(1);
});

// config

dotenv.config({ path: "config/.env" });

// connecting database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is listening`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
