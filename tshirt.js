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


//  function myShirtSize(event) {
  //  let "" = document.querySelector();
//  }






//var shirtSize = document.querySelector(".shirt-sizes");

//for (i = 0; i < shirtSize.length; i++) {
//  shirtSize[i].innerHTML = "javascriptRocks";
//}

//pickShirt.addEvntListener('click', pickShirt); }

//function myShirtSize (){
//console.log(myShirtSize);




//function myfunction() {

//}
//.shirt-sizes.addEvntListener ('click');

//var element = document.querySelector('.item-name');
//element.textContent = "L";
//console.log (element)


//document.querySelector(".shirt-sizes")
//document.querySelector(".item-name")
