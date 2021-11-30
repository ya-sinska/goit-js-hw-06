const itemEL = document.querySelectorAll('.item');
console.log("Number of categories:", itemEL.length);


itemEL.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);

    console.log("Elements:", element.lastElementChild.children.length);
});
