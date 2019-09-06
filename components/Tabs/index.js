// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Axios call
// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(res => res.data.topics)
//     .then(res => {
//         // Iterate of array and append elements to target location
//         res.forEach(i => document.querySelector('.topics').append(tabs(i)))
//     })

// Tab element creator
const tabs = (data) => {
    // Create Element
    const createElement = (type, selector = undefined, content = undefined) => {
        const element = document.createElement(type)

        // If class, add
        if (selector) {
            element.classList.add(selector)
        }

        // If content, add
        if (content) {
            element.textContent = content
        }

        return element;
    }

    // variable placeholder for element
    let tab;

    // data conditionals
    if (data) {
        // if data, create element
        tab = createElement('div', 'tab', data);

        // Log data
        console.log(tab);
    }

    return tab;
}
