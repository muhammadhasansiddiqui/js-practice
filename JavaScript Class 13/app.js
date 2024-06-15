// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 
// var num = 3.45214;
// console.log("��� ~ num:", Math.round(num));
// console.log("��� ~ num:", Math.floor(num));
// console.log("��� ~ num:", Math.ceil(num));

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var  num  = -2.573
// console.log("��� ~ num:", Math.round(num));
// console.log("��� ~ num:", Math.floor(num));
// console.log("��� ~ num:", Math.ceil(num));

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = -4;

// console.log("🚀 ~ num:", Math.abs(num));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// // browser.:
// var num = Math.random();
// console.log("🚀 ~ num :", num );

// var dice = num * 6 + 1;
// console.log("🚀 ~ dice:", dice);

// var result = Math.floor(dice);
// console.log("🚀 ~ result:", result);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var  arr = ["Heads", "Tails"];
// var random = Math.floor(Math.random() * 2);
// var result = arr[random];
// console.log("��� ~ result:", result);


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var num = Math.random();
// var dice = num * 100 + 1;
// var result = Math.floor(dice);
// console.log("��� ~ result:", result);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter your weight");
// console.log("��� ~ weight:", weight);
// var num = parseFloat(weight);
// console.log("��� ~ num:", num);
// var result = num.toFixed(2);
// console.log("��� ~ result:", result);
// var result2 = parseFloat(result);
// console.log("��� ~ result2:", result2);
// var result3 = Math.round(result2);
// console.log("��� ~ result3:", result3);
// if (isNaN(result3)) {
//   console.log("Please enter a valid weight");
// } else {
//   console.log(`Your weight is ${result3} kilograms`);
// }


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log("��� ~ secretNumber:", secretNumber);

















































// var arr =  "1,2,3,4,5";
// console.log("🚀 ~ arr:", arr);
// var newArr = arr
// console.log("🚀 ~ newArr:", newArr);

// math.round

// var num = 1.9;
// console.log("🚀 ~ num:", Math.round(num));
// console.log("🚀 ~ num:", Math.ceil(num));
// console.log("🚀 ~ num:", Math.floor(num));

// var num =["1,2,3,4,5,6,7,8,9,10"];
// console.log("🚀 ~ num:", Math.random(num) - num);

// genrated custror id with name with map .ramdon

// var name = prompt("Enter your name");
// console.log("🚀 ~ name:", name);
// var arr = name.split(" ");
// console.log("🚀 ~ arr:", arr);

// var newArr = arr.map((item) => item[0]);
// console.log("🚀 ~ newArr:", newArr);
// var id = newArr.join("") + Math.floor(Math.random() * 1000);
// console.log("��� ~ id:", id);

// had tail game

// var player1 = prompt("Enter player1 name");
// var player2 = prompt("Enter player2 name");
// var arr = ["Heads", "Tails"];
// var random = Math.floor(Math.random() * 2);
// var result = arr[random];
// if (result === "Heads") {
//   console.log(`${player1} won the toss`);
// } else {
//   console.log(`${player2}won the toss`);
// }
// PASSWORD GENRATER
// var num10 = "0123456789";
// var specailChar = "!@#$%&*";
// var numChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var smallChar = "abcdefghijklmnopqrstuvwxyz";
// var allSplitWork = num10 + specailChar + numChar + smallChar;
// var passwordLength = 8;
// var password = "";
// for (var i = 0; i < passwordLength; i++) {
//   var random = Math.floor(Math.random() * allSplitWork.length);
//   password += allSplitWork[random];
// }
// console.log("🚀 ~ password:", password);


