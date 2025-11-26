const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("HEllo HEll");
});

app.listen(PORT, () => {
  console.log(`Server working on port: ${PORT}`);
});
