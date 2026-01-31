// index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" }
  ]);
});

app.listen(3001, () => {
  console.log("Users service running on port 3001");
});