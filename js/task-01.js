const itemEL = document.querySelectorAll('.item');
console.log("Number of categories:", itemEL.length);

itemEL.forEach(element => {
const h2 = element.querySelector('h2');
const elementItems = element.querySelectorAll('li');
    
console.log(` - категория: ${h2.textContent} (количество элементов: ${elementItems.length})`);
});

