function makePink (event) {
    colorDiv = event.target;
    var selectedColorDiv = colorDiv.parentElement.previousElementSibling;
    selectedColorDiv.className = 'color';
    selectedColorDiv.classList.add('pink');
    var shirtFront = colorDiv.closest(".graphics").querySelector(".front img");
    shirtFront.src = './shirts/pink-front.png';
    var shirtBack = colorDiv.closest(".graphics").querySelector(".back img");
    shirtBack.src = './shirts/pink-back.png';
  }
  let pink = document.querySelector('li .pink');
  pink.addEventListener('click', makePink);



//Shopping Cart

//add  products to the Shopping Cart
$('#shopCart').on('click', addToCart);


function addToCart(){
  console.log($(this).parent().next().text('clicked'));
  let shirt = $('.shirt');
  let price = $('.price')
}



// let itemClicked = $('.shirt .buttons li:last-child');
// itemClicked.addEventListener('click', shoppingCartClicked);
// console.log(itemClicked);
// let product = document.querySelector('.product-name');
// let price = document.querySelector('.text strong');
// let shoppingCartList = document.querySelectorAll('#shoppingCart li');
// let total = document.querySelector('span#total');
// let shirtColor = document.querySelectorAll('i.blue.purple')
// let combinedTotal = price + price;
//
//
// function shoppingCartClicked (){
// shoppingCartList[0].textContent = product.textContent + shirtColor.innerText +  price.textContent;
// total.textContent = price.textContent;
//
// // console.log(price.innerText);
// console.log(shirtColor);
//
// }
