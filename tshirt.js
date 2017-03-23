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
addToShoppingCartList('This is working');
let shoppingList = create
productList.addEventListener('click', addToShoppingCartList)


//Save for lateron the right path
// function addShoppingCart (event) {
// let shoppingCartVisable = document.querySelector('#userCart')
// let viewShoppingCart = document.create
// }
