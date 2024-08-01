require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/students");
const notesRoutes = require("./routes/notes");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello from the Notes App" });
});

// Notes Domain
app.use("/notes", notesRoutes);

// Students domain
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
