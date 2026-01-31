// index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/courses", (req, res) => {
  res.json([
    { id: 1, name: "Arquitectura de Software" },
    { id: 2, name: "DevSecOps" }
  ]);
});

app.listen(3002, () => {
  console.log("Academic service running on port 3002");
});
