// Iterators & For..of



// Generators


// function* generatorFunction() {
//   console.log("This will be executed first.");
//   yield "Hello, ";
//   console.log("I will be printed after the pause");
//   yield "World!";
// }
// const generatorObject = generatorFunction();
// console.log(generatorObject.next().value);


// function* generator(i) {
//   yield i;
//   yield i + 10;
//   yield i + 20;
//   yield i + 30;
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// Higher-order function
// function higherOrderFunction(callback) {
//   console.log("This is the higher-order function.");
//   callback();
// }
// function callbackFunction() {
//   console.log("This is the callback function.");
// }
// higherOrderFunction(callbackFunction);



//  let pakisatn = (karachi) =>  {
//   console.log("i am in pakistan");
//   karachi();
// }

// function karachi(){
//   console.log("i am in karachi");
// }
// pakistan(karachi);




// Ternary Operator
// let age = 18;
// let isAdult = (age >= 18) ? true : false;
// console.log("🚀 ~ isAdult:", isAdult);






























// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// // ui with inner html 


// const container = document.getElementById("container");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => {
//     json.forEach((product) => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       const image = document.createElement("img");
//       image.src = product.image;
//       image.alt = product.title;

//       const title = document.createElement("h3");
//       title.textContent = product.title;

//       const price = document.createElement("p");
//       price.textContent = `$${product.price}`;

//       card.appendChild(image);
//       card.appendChild(title);
//       card.appendChild(price);

//       container.appendChild(card);
//     });
//   });

