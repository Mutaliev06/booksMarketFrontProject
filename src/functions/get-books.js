const generateCard = require('./generate-card');

module.exports = function getBooks() {
  fetch('http://localhost:3006/')
  .then(res => res.json())
  .then(data => {
    data.forEach((item) => {
      generateCard(item);
    })
  })
}
