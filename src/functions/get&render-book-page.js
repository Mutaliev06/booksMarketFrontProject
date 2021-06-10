let block = document.getElementById('items');

module.exports = (item) => {
  block.textContent = '';
  fetch(`http://localhost:3006/books/${item._id}`)
  .then(res => res.json())
  .then(data => {
    let card = document.createElement('div');
    let imgDiv = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('p')
    let btn = document.createElement('button')
    let price = document.createElement('p')
    let title = document.createElement('div');
    let review = document.createElement('div')

    img.src = item.pathToImage;
    img.className = "imageGenreClick";
    // card.className = 'col-4';
    // card.id = "card"
    imgDiv.className = 'imgDivGenreClick'
    // name.className = 'name'
    price.className = 'priceGenreClick'
    // btn.className = 'btn'
    imgDiv.append(img)
    imgDiv.append(title)
    card.append(imgDiv)
    title.append(data.title)
    name.append(data.name)
    price.append("Цена: " + data.price + " ₽")
    btn.append('Купить')
    price.append(btn)
    title.prepend(name)
    //card.append(name)
    card.append(price)
    card.append(review)
    block.append(card)
    review.append('Отзывы читателей:')


      fetch(`http://localhost:3006/book/${item._id}/reviews`)
      .then(res => res.json())
      .then(data => {
        data.forEach((item) => {
          const reviewDiv = document.createElement('div')
          const reviewUser = document.createElement('p')
          const reviewText = document.createElement('p')
          reviewDiv.className = 'reviewDiv'
          reviewText.append(item.text)
          reviewUser.append(item.userName)
          review.append(reviewDiv)
          reviewDiv.append(reviewUser, reviewText)
        })

      })

  })
}