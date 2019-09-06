// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Axios call
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res => res.data.articles)
    .then(res => cards(res))

// Card element creator
const cards = (data) => {
    // Create Element
    const createElement = (type, selector = undefined, content = undefined, src = undefined) => {
        const element = document.createElement(type)

        // If class, add
        if (selector) {
            element.classList.add(selector)
        }

        // If content, add
        if (content) {
            element.textContent = content
        }

        // If content, add
        if (src) {
            element.src = src
        }

        return element;
    }

    // Card creation
    const createCard = (obj) => {
        if (obj) {
            // div parent for elements
            const card = createElement('div', 'card');

            // Headline div
            const headline = createElement('div', 'headline', obj.headline)

            // Append headline
            card.append(headline);

            // Author div
            const authorDiv = createElement('div', 'author')

            // Img container & img
            const imgContainer = createElement('div', 'img-container')
            const img = createElement('img', undefined, undefined, obj.authorPhoto)

            // Append the img
            imgContainer.append(img)

            // Author span
            const authorSpan = createElement('span', undefined, 'By')
            authorSpan.append(obj.authorName)

            // Append rest in order.
            authorDiv.append(imgContainer)
            card.append(authorDiv)
            card.append(authorSpan)

            // Log data
            console.log(card)

            return document.querySelector('.cards-container').append(card)
        }
    }

    // Loop over all data
    for (let i in data) {

        // All values (array objects)
        const info = data[i];

        // Create a card for each data obj
        info.forEach(index => createCard(index))
    }
}