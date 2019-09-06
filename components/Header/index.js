// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const header = () => {
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
    
    // Header
    const header = createElement('header', 'header')

    // Span
    const span = createElement('span', 'date', 'SMARCH 28, 2019')
    const span2 = createElement('span', 'temp', '98°')

    // H1
    const h1 = createElement('h1', undefined, 'Lambda Times')

    // Append
    header.append(span)
    header.append(h1)
    header.append(span2)

    // Log data
    console.log(header)

    return header
}

// Grab target and
document.querySelector('.header-container').append(header());