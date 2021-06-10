const generateGenres = require('../generate-genre')

module.exports = function getGenres () {
  fetch('http://localhost:3006/genres/')
  .then(res => res.json())
  .then(data => {
    data.forEach((item) => {
      generateGenres(item);
    })
  })
}