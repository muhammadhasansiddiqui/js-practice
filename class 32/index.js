

// function addToCart() {
//     var cartList = document.getElementById("cartList");
//     var bur = document.getElementById("bur").value;
//     var listItem = document.createElement("li");

//     listItem.textContent = ;



//     cartList.appendChild(listItem);
// }


























let cart = [];

function addToCart(item) { const itemObj = { name: item, price: getItemPrice(item) }; cart.push(itemObj); updateCart(); }

function getItemPrice(item) { switch (item) { case 'burger': return 10; case 'pizza': return 15; case 'pasta': return 12; default: return 0; } }

function updateCart() { let total = 0; let cartList = ''; for (let i = 0; i < cart.length; i++) { cartList += <li>${cart[i].name} - $${cart[i].price}</li>; total += cart[i].price; } document.getElementById('cartList').innerHTML = cartList; document.getElementById('total').innerHTML = total; }

