//  if 
//  ("karachi" == "karachi"){
//   console.log("Welcome to the city of lights");
//  }

// var userName = prompt("Enter your name");

// if (userName){
//   console.log(userName);

// }
// else{

//     alert("Please enter your name");
// }



// var skills = prompt("Enter your skill");
// var exp    = +prompt("Enter your experience");
// var city   = prompt("Enter your city");

// if ((skills === "js" || exp > 2) && city === "karachi") {
//     console.log("Hire");
// } else {
//     console.log("Not hire");
// }

// var arr = ["hasan", "uzair" , "zeeshan" , "rayyan", "mesum"];

// var arr = ""
// console.log(arr [2]);


// var arr = ["hasan", "uzair" , "zeeshan" , "rayyan", "mesum"];
// arr.push("quid-e-azam" , "fashi")
// console.log(arr);

// var arr = ["hasan", "uzair" , "zeeshan" , "rayyan", "mesum"];
//  arr.unshift("quid-e-azam" , "fashi")
//  arr.shift()
//  console.log(arr);




// var students = ["hasan", "uzair" , "zeeshan" ];
// students.splice(1,0, "rayyan", "mesum")
// console.log(students);

// var students = ["hasan", "uzair" , "zeeshan" , "ali"];
// console.log(students.slice(0, 2));
// console.log(students.slice(2));

// var school = "smit"
// console.log(school.slice(0,2));

// var work = prompt("Enter your work");
// var reverse = "";
 
// for (var i = work.length - 1; i >= 0; i--) {
//       reverse  += work[i];
// }

// if (reverse === work) {
//       console.log(" It's a palindrome");
// }
// else {
//       console.log("It's not a palindrome");
//}

//  var work = prompt("Enter your work");
// var reverse = "";   

// for (var i = work.length - 1; i >= 0; i--) {
//       reverse  += work[i];
// }

// if (reverse === work) {
//       console.log(" It's a palindrome");
// }
// else { 
//       console.log("It's not a palindrome");
// }

// var arr  = [11,22,34,35,12,77,10]
// var min =  arr[0];
// var max =  arr[0];


// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

var arr = [11,12,14,15,16,17,18,19,20];

for (var i = 0; i < arr.length; i++) {
console.log(arr[i]-arr[i + 1]);

}