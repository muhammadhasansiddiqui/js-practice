// Q num 12


// var arr = ["This" , "is", "my" ,  "cat"];
// console.log("🚀 ~ arr:", arr);
// var arr1 = arr.join(" ");
// console.log("🚀 ~ arr1:", arr1);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<h1>Phone Manufacturers</h1>");
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }

// document.write("</select>");


// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


// var arr = [1, 2, 3, 4, 5];
// var reversedArr = arr.reverse()

// console.log("🚀 ~ arr:", arr);
// console.log("🚀 ~  reversedArr:",  reversedArr);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 4);
// console.log("��� ~ selectedCities:", selectedCities);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// Arrays | JAVASCRIPT

// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color  = ["green" , "red" , "yellow" , "blue" , "pink"];
// var user = +prompt("Enter the position you want to remove the color from", );
// var user1 = +prompt("Enter the number of colors you want to remove");
// color.splice(user , user1);
// console.log(color);