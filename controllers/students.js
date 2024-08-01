const students = ["Oleksii", "Mariia", "Natalie", "Henning", "Gladys"];
const getStudents = async (req, res) => {
  res.json(students);
};

const getStudent = async (req, res) => {
  const { index } = req.params;
  res.json(students[index]);
};

module.exports = {
  getStudent,
  getStudents,
};
