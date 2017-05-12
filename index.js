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
$('.shopCart').on('click', addToCart);
function add(a,b) {
  return a+b
}
let $prices = [];
function addToCart(){
  if ($prices.length <=7){
  //console.log($(this).parent().parent().parent().next().children().text());
  let $shirt = $(this).parent().parent().parent().next().children('h2.shirt').text();
  let $price = $(this).parent().parent().parent().next().find('span.price').text();
  let $total = $('#total').text();
  console.log($total);


    let $allPrices = parseInt($price)
    $prices.push($allPrices)
    console.log($prices);
    let $li = $shirt + $price;
    let $ul = $('#shoppingCart');
    $ul.append(`<div class="shopItem">${$li}</div>`);
    //let $totalPrice = $price + $price;



  let $totals = $prices.reduce(add, 0);
  console.log($totals);
$('#total').text($totals);

if ($prices.length >= 5){
  let total = $('#total').text()
  let discount = total * .05
  $('#discount').text('discount ' + discount)
  console.log(total,discount)
  let newprice = total - discount
  $('#newprice').text('newprice ' + newprice)
}

}
}

// $('.shopCart').on('click', function() {
//   if ($prices.length >= 5){
//     let total = $('#total').text()
//     let discount = total * .05
//     $('#discount').text('discount ' + discount)
//     console.log(total,discount)
//     let newprice = total - discount
//     $('#newprice').text('newprice ' + newprice)
//   }
// })

// $('.shopCart').on('click', function() {
//   if ($prices.length >=8){
//
//   }
// })




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
