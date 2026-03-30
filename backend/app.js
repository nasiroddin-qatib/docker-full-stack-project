const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
    status: "success"
  });
});

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
