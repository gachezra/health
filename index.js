const express = require("express");
const cors = require("cors");
const { startHealthCheckTimer, receiveHealthCheck } = require('./health');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/on', receiveHealthCheck);

app.listen(port, () => {
  console.log("Server Started on Port", port);
  // Start the health check timer after server starts
  startHealthCheckTimer();
});