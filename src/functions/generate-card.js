let block = document.getElementById('items');
const renderBookPage = require("./get&render-book-page");


module.exports = (item) => {
  let card = document.createElement('div');
  let imgDiv = document.createElement('div')
  let img = document.createElement('img')
  let name = document.createElement('p')
  let btn = document.createElement('button')
  let price = document.createElement('p')

  img.src = item.pathToImage;
  img.className = "image";
  card.className = 'col-4';
  card.id = "card"
  imgDiv.className = 'imgDiv'
  name.className = 'name'
  price.className = 'price'
  btn.className = 'btn'
  imgDiv.append(img)
  card.append(imgDiv)
  name.append(item.name)
  price.append(item.price + " ₽")
  btn.append('Купить')
  price.append(btn)
  card.append(name, price)
  block.append(card)

  img.href = '#'
  img.addEventListener('click', () => renderBookPage(item))
}