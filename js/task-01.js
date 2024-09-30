const categories = document.querySelector('#categories')
console.log(`Number of categories: ${categories.children.length}`)
const categoryItemArr = [...categories.children];

categoryItemArr.forEach(item => 
    console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.childElementCount}`))
