const categories = document.querySelector('#categories')

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)})
