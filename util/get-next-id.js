function getNextId(data) {
  //[34, 5, 17];
  return Math.max(...data.map((item) => item.id)) + 1;
}

module.exports = {
  getNextId,
};
