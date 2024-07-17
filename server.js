const express = require("express");
const bodyParser = require("body-parser");

const notes = [
  {
    id: 34,
    text: "Küche aufräumen",
  },
  {
    id: 5,
    text: "Einkaufen",
  },
  {
    id: 17,
    text: "Wäsche waschen",
  },
];

function getNextId() {
  // iterate over the array and find the highest id used. return this number +1
}

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello from the Notes App" });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const { id } = req.params;

  const note = notes.find((note) => note.id === Number(id));

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: "resource not found" });
  }
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  const newNote = req.body;
  const nextId = getNextId();
  notes.push({
    ...newNote, //spread operator
    id: nextId,
  });
  console.log(notes);
  res.json({ msg: "This is the POST /notes route" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
