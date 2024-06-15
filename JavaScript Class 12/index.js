// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var firstName = prompt("Enter your first name:");
// console.log("Your Word LenghtIs " + firstName.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var result = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("<h1>" + "Index of 'n': " + result + "</h1>" );

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var result = word.lastIndexOf("l");
// document.write("String: " + word + "<br>");
// document.write("<h1>" + "Index of 'l': " + result + "</h1>" );

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// var message = "hasan and zee and uzair and zee";

// var newMessage = message.replaceAll("and", "&");
// document.write("Message: " + message + "<br>");
// document.write("After replacement: " + newMessage);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var value = "472";
// console.log("🚀 ~ value:", typeof value);

// value = +"472"
// console.log( typeof value);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var prompt = prompt("Enter a word");
// var word = prompt.toUpperCase();
// console.log(word);

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var prompt = prompt("Enter a word");
// var word = prompt
//   .toLowerCase()
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");
//   console.log(word);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// console.log(count);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 12.09
// var newNum = num.toString().replace('.','')
// console.log("🚀 ~ newNum:", newNum);



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var username = prompt("Enter your username:");
// var specialChars = ["@", ".", ",", "!","$"];
// var hasSpecialChar = false;
// for (var i = 0; i < username.length; i++) {
//   if (specialChars.indexOf(username[i]) !== -1) {
//     console.log("🚀 ~ specialChars.indexOf(username[i]:", specialChars.indexOf(username[i]));
    
//     hasSpecialChar = true;
//     break;
//   }
// }
// if (hasSpecialChar) {
//   alert("Invalid username. Please enter a valid username.");
// } else {
//   alert("Welcome, " + username + "!");
// }



// 14. Write a program to define a variable a. Take input from
// user to a. If a is divisible by 2, print “even” else print
// “odd”.

// var num = +prompt("Enter a number:");
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// 15. Write a program to take a user input and store username
// in a variable. If the username contains digits, prompt the
// user to enter a valid username.

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// var items = ["cake", "apple pie", "cookie", "chips", "patties"]; 
// var searchItem = prompt("Enter an item to search:");
// var found = false;
// for (var i = 0; i < items.length; i++) {
//   if (items[i].toLowerCase() === searchItem.toLowerCase()) {
//     found = true;
//     break;
//   }
//   console.log("🚀 ~ items[i]:", items[i]);
//   if (found === true) {
//     console.log("Item found in the list.");
//   } else {
//     console.log("Item not found in the list.");
//   }
// }   


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// 17. Write a program to display the last character of a user
// input.
// var input = prompt("Enter a string:");
// var lastChar = input.charAt(input.length - 1);
// console.log("The last character of the input string is: " + lastChar);

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var arr = university.split("");
// console.log("🚀 ~ arr :", arr );

// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }



// 18. Write a program to find the sum of squares of first 20
// natural numbers. (e.g.: 1^2 + 2^2 + 3^2 + ... + 20^2)

// var sum = 0;
// for (var i = 1; i <= 20; i++) {
//   sum += Math.pow(i, 2);
// }
// console.log("The sum of squares of the first 20 natural numbers is: " + sum);

// 19. Write a program to find the sum of cubes of first 10
// natural numbers. (e.g.: 1^3 + 2^3 + 3^3 + ... + 10^3)

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   sum += Math.pow(i, 3);
// }











// var str = "hasan zee uzair";

// // console.log(result)
// var word = str.split(" ");
// for (var i = 0; i < word.length; i++) {

//     var result = word[i][0].toUpperCase() + word[i].slice(1) ;
//     console.log(result)
// }

// var para = "wellcome to karachi"
// var resulr = para.indexOf("to");
// console.log("🚀 ~ resulr:", resulr);
// var resulr = para.charAt("10");
// console.log("🚀 ~ resulr:", resulr);

// // var str = "hasan zee uzair zee";
// var word = str.replaceAll("zee","zeeshan");
// console.log("🚀 ~ word:", word);
