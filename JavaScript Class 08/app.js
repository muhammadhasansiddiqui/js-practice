// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNum = +prompt("Enter a number for table")
// for ( var i = 1; i <=10; i++ ){
//     document.write(tableNum + "x"  + i + "=" + tableNum * i + "<br />")

// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />")
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for (var i = 1; i <= 15; i++) {
//     console.log(i)

// }

// for (var i = 10; i >= 1; i--) {
//     console.log(i)
// }

// var even = 0
// for (var i = 0; i <= 20; i += 2) {
//     console.log(i)
// }

// var odd = 1
// for (var i = 1; i <= 19; i += 2) {
//     console.log(i)
// }

// var Series = 2
// for (var i = 1; i <= 10; i++) {
//     console.log(Series + "k")
//     Series += 2
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var bakreyIteam = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userIteam = prompt("Enter your iteam");
// var flag = false;

// for (var i = 0; i < bakreyIteam.length; i++) {
//   if (bakreyIteam === userIteam) {
//     flag = true;
//     break;
//   }
//   if ((flag = true)) {
//     console.log("Your iteam is found");
//   } else {
//     console.log("Your iteam is not found");
//   }
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var A =  [24, 53, 78, 91, 12]
// var largest = A[0]
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i]
//         console.log(largest)
//     }
   
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var num = [24, 53, 78, 91, 12 ]
// var smallest = num[0]

// for ( var i = 1; i < num.length; i++){
//     if (num[i] < smallest){
//         smallest = num[i]
//         console.log(smallest)
//     }}


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// var num = 1
//  for (var i = 1; i <= 100; i++){
//      if (num % 5 === 0) {
//          console.log(num)
//      }
//      num++
//  }






// 11. Do the above program until a user enters a number
// greater than 100.

// var num = +prompt("Enter a number")
// for (var i = 1; i <= 100; i++){
//     if (num % 5 === 0) {
//         console.log(num)
//     }
//     num++
// }

// 12. Write a program to print the following star pattern.
// *







// var num = +prompt("Enter a number")

// for (var i = 1; i <= 10; i++ ) {if (num === num) {

//  document.write(  num+ ' x ' + i + "=" + num * i + "<br />")}
//  else {
//     document.write("Invalid Number ")
//  }

// }

// var rollNum  = +prompt("Enter your roll number")
// var flag = false

// for ( var i = 0; i <= 100; i++){
// if (rollNum  < 100) {
//     flag = true
//     document.write("Congratulation you are pass")

//     break;
//     }
// if (flag === true) {
//     document.write("Congratulation you are pass")
// }else{
//     document.write("Sorry you are fail")
// }

// // }
// var cites = ["Karachi", "Lahore", "Islamabad", "Peshawar"]
// var cityName =  prompt("Enter your city name")
// var flag = false;

// for (let i = 0; i < cites.length; i++) {
//     if (cityName == cites[i]) {
//         flag = true
//         break;
//     }}
// if (flag == true) {
//     alert("City found")
// }

//     else{
//         alert("City not found")
//     }
