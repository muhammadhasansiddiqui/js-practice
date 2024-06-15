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
