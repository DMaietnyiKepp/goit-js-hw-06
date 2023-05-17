const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`)
})