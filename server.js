const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from Express");
});

app.get("/notes", (req, res) => {
  res.send("Hello world from the /notes route!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
