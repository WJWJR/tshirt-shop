let mouseClick = document.querySelector("body");
mouseClick.addEventListener("click", logEvent);
function logEvent() {
  console.log(event);
}

// This works
//let myShirtSize = document.querySelector("p.shirt-sizes");
//myShirtSize.addEventListener("click", changeSizeShirt);
//function changeSizeShirt() {
//  alert("This fucking works");
//}

// SHIRT SIZES ARRAY
function theseShirtsAre () {
  let thisSetofShirts = document.querySelector('p.item-name');
  thisSetofShirts.textContent = event.target.childNodes[0].data;
  /*Put the shirt on the */
}
let shirts = document.querySelectorAll('p.shirt-sizes')
for (let i = 0; i < shirts.length; i++) {
  let shirt = shirts[i];
  shirt.addEventListener('click', theseShirtsAre)
}

//SHIRT COLORS ARRAY
function theSelectedColorShirt (event) {
let theseColoredShirts = document.querySelector('.selectedColor');
  //let theseColoredShirts = document.querySelector('i.fa.fa-stop');
  theseColoredShirts.classList.add(event.target.classList[2]);
  console.log (theseColoredShirts);
  console.log(event.target.classList[2]);
  /*Add what "i" is in the DOM tree */
}
let coloredShirts = document.querySelectorAll('.dropset')
for (let i = 0; i < coloredShirts.length; i++) {
  let coloredshirt = coloredShirts[i];
  coloredshirt.addEventListener('click', theSelectedColorShirt)
}


// SHOPPING CART SECTION
function addToShoppingCartList (test){
  let productList = document.querySelector('ul');
  console.log(test);
}
// addToShoppingCartList('This is working');
// //let shoppingList = ;
// productList.addEventListener('click', addToShoppingCartList)

let itemClicked = document.querySelector('#userCart.item');
itemClicked.addEventListener('click', shoppingCartClicked);
let product = document.querySelector('.product-name');
let price = document.querySelector('.price');
let shoppingCartList = document.querySelectorAll('#shoppingCart li');
let total = document.querySelector('span#total');
let shirtColor = document.querySelectorAll('i.blue.purple')
let combinedTotal = price + price;


function shoppingCartClicked (){
shoppingCartList[0].textContent = product.textContent + shirtColor.innerText +  price.textContent;
total.textContent = price.textContent;

// console.log(price.innerText);
console.log(shirtColor);

}


//Save for lateron the right path
// function addShoppingCart (event) {
// let shoppingCartVisable = document.querySelector('#userCart')
// let viewShoppingCart = document.create
// }
