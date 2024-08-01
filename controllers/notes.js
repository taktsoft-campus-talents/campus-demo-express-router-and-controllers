const notes = [
  {
    id: 34,
    text: "Küche aufräumen!",
    category: "cleaning",
  },
  {
    id: 5,
    text: "Kartoffeln kaufen",
    category: "shopping",
  },
  {
    id: 17,
    text: "Wäsche waschen",
    category: "cleaning",
  },
  {
    id: 16,
    text: "Obst kaufen",
    category: "shopping",
  },
];

const getNotes = async (req, res) => {
  res.json(notes);
};

const getNote = (req, res) => {
  const { id } = req.params;

  const note = notes.find((note) => note.id === Number(id));

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: "resource not found" });
  }
};

const createNote = (req, res) => {
  console.log(req.body);

  // req.body contains the new note object WITHOUT id
  const newNote = req.body;

  // we calculate a new id based on the current content of our notes array
  const nextId = getNextId(notes);

  // We create a new object based on the properties in newNote PLUS the new id
  const noteToReturn = {
    ...newNote, //spread operator
    id: nextId,
  };

  // We push the new object into the notes array (later we will add this to a database)
  notes.push(noteToReturn);

  // We return the new note object to the client
  res.json(noteToReturn);
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  console.log("id", id);

  const index = notes.findIndex((note) => note.id === Number(id));

  if (index > -1) {
    notes.splice(index, 1);
    res.json({ msg: `Element with id=${id} successfully deleted` });
  } else {
    res.status(404).json({ msg: "resource not found" });
  }
};

const updateNote = (req, res) => {
  const { id } = req.params;
  const { text, category } = req.body;
  const index = notes.findIndex((note) => note.id === Number(id));

  if (index > -1) {
    notes[index].text = text;
    notes[index].category = category;
    res.json(notes[index]);
  } else {
    res.status(404).json({ msg: "resource not found" });
  }
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
};
