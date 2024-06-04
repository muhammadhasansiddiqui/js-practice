
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .than ((json)) => {

//     var foods = json.products;

//     for (var count = 0; count < foods.length; count++) {
//         box.innerHTML += `
//         <div class="box">
//             <div class="img-box">
//                 <img src="${foods[count].images[0]}" alt="">
//             </div>
//             <div class="bottom">
//                 <p>${foods[count].title}</p>
//                 <h2>$ ${foods[count].price}</h2>
//                 <button>Add to Cart</button>
//             </div>
//         </div>
//         `;}
//     )};



fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((json) => {

    var foods = json.products;
    var box = document.getElementById('products'); // replace 'pr' with the actual id of your box element

    for (var count = 0; count < foods.length; count++) {
        box.innerHTML += `
        <div class="box">
            <div class="img-box">
                <img src="${foods[count].images[0]}" width="250px" hight="170px">
            </div>
            <div class="bottom">
                <p>${foods[count].title}</p>
                <h2>$ ${foods[count].price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
    }
});
