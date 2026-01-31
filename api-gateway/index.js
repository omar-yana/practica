// index.js
const express = require("express");
const axios = require("axios");
const app = express();


app.get("/users", async (req, res) => {
  const response = await axios.get("http://users-service:3001/users");
  res.json(response.data);
});


app.get("/courses", async (req, res) => {
  const response = await axios.get("http://academic-service:3002/courses");
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
