const generateCard = require("./functions/generate-card")

module.exports = (item) => {
  let sidebar = document.getElementById('btn_div');
  let ul = document.createElement('ul')
  let li = document.createElement('li');
  let li_a = document.createElement('a')

  ul.className = 'genre_ul'
  li_a.className = 'genre_a'
  //const url = `http://localhost:3006/genres/${item._id}/books`
  li_a.href = '#';
  li_a.append(item.name)
  li.append(li_a)
  ul.append(li)
  sidebar.append(ul)

  li_a.addEventListener('click', () => {
    let block = document.getElementById('items');
    block.textContent = '';
    fetch(`http://localhost:3006/genres/${item._id}/books`)
    .then(res => res.json())
    .then(data => {
      data.forEach((item) => {
        generateCard(item)
      })
    })
  })
}