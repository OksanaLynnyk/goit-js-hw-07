const list = document.getElementById('categories');

console.log(`Number of categories: ${list.childElementCount}`);

[...list.children].forEach(item => { 
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
 });
