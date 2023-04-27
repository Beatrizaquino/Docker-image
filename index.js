const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Iniciando Docker!!!");
});

app.listen(3000);