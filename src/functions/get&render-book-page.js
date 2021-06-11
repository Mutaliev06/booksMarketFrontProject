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
    const reviewInput = document.createElement('div')
    const nameInput = document.createElement('input')
    const textInput = document.createElement('input')
    const btnInput = document.createElement('input')
    const createInput = document.createElement('div')
    const form = document.createElement('form')

    form.append(nameInput, textInput, btnInput)
    reviewInput.append('Оставить отзыв:')
    reviewInput.append(createInput)
    reviewInput.append()
    createInput.append(form)


    review.append(reviewInput, 'Отзывы читателей:')
    reviewInput.className = 'reviewInput'
    createInput.className = 'createInput'
    nameInput.placeholder = 'Введите имя'
    textInput.placeholder = 'Введите отзыв'
    form.method = 'post'
    form.action = `#`
    btnInput.type = 'submit'
    btnInput.value = 'добавить'
    nameInput.name = 'userName'
    textInput.name = 'text'
    btnInput.addEventListener('click', (e) => {
      e.preventDefault()
      fetch(`http://localhost:3006/book/${item._id}/reviews`,{
        method: "post",
        headers: {
          'Content-Type': 'application/json', // отправляемые данные
        },
        body: JSON.stringify({
          userName: nameInput.value,
          text: textInput.value
        })
      })
      .then(res => res.json())
      .then(item => {
        const reviewDiv = document.createElement('div')
        const reviewUser = document.createElement('p')
        const reviewText = document.createElement('p')
        reviewDiv.className = 'reviewDiv'
        reviewText.append(item.text)
        reviewUser.append(item.userName)
        reviewDiv.append(reviewUser, reviewText)

        review.append(reviewDiv)

        nameInput.value = ''
        textInput.value = ''

      })
      // методом пост отправить данные на сервер (фетч)
      //после получения новых данных создаем новый див и вставляем туда комментарий
    })

    console.log(item._id)


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