// nUm = 1


// var num = 10;

// let x = 0;
// let y = 1;

// for (let i = 0; i < num; i++) {
    
//     console.log(x);
//     let z = x + y;
//     x = y;
//     y = z;
// }


//NuM = 2   .Factorial Calculation: Write a function to calculate the factorial of a given number


// var  num = prompt("Enter a number") 
// var fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log("Factorial of", num, "is", fact);


// num = 3 Reverse a String: Write a function to reverse a string without using the built-in reverse() function

// var str = "Hello World";
// var rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// console.log(rev);

// num =  4  Palindrome Check: Write a function to check if a given string is a palindrome

// var enterWord = prompt("Enter a word");
// var reverseWord = "";
// for (let i = enterWord.length - 1; i >= 0; i--) {
//     reverseWord += enterWord[i];
// }
// if (enterWord === reverseWord) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }


// num 5 Find the Longest Word: Write a function to find the longest word in a given string

// var str = prompt("Enter a Word");
// str = str.toLocaleUpperCase(); 
// var longestWord = "";
// var words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }

// console.log("The longest word is " + longestWord);

// num 6 Remove Duplicates: Write a function to remove duplicates from an array.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var unique = [];
// for (let i = 0; i < arr.length; i++) {
//     if (unique.indexOf(arr[i]) === -1) {
//         unique.push(arr[i]);
//     }
// }
// console.log(unique);


// num 7  Merge Arrays: Write a function to merge two sorted arrays into a single sorted array

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [1,6, 7, 8, 9, 10];

// var arr3 = arr1.concat(arr2);
// arr3.sort(function (a, b) 
// { return a - b });
// arr3 = [...new Set(arr3)];

// console.log(arr3);


//  NUM 8 Find Prime Numbers: Write a function to find all prime numbers up to a given number n
// var n = prompt("Enter a number");
// for (let i = 2    ; i <= n; i++) {
//     var isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log( "The prime number is " + i);
//     }
// }

// NUM 9 = Caesar Cipher: Write a function to encrypt and decrypt a string using the Caesar Cipher
//  algorithm

var str = "HELLO WORLD ";
var shift = 3;
var encrypted = "";
for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
        char = (char - 65 + shift) % 26 + 65;
    } else if (char >= 97 && char <= 122) {
        char = (char - 97 + shift) % 26 + 97;
    }
    encrypted += String.fromCharCode(char);
}
console.log(encrypted);