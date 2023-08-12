var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.parentElement);
console.log(itemList.children);
console.log(itemList.firstElementChild);
console.log(itemList.firstChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.appendChild);
console.log(itemList.setAttribute);


newDiv.setAttribute('title', 'HEllo');
 var newDivText = document.createTextNode('HEllo');
 newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);