// // var input = "{[()]}";
// // var arr = [];

// // const e = require("express");

// // for (var i = 0; i < input.length; i++) {
// //     if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
// //         arr.push(input[i]);
// //     }
    

// // }
// // console.log(arr);
    
    

// function isBalanced(input) {
//     var stack = [];

//     for (var i = 0; i < input.length; i++) {
// var x = input [i];

// if  (x == "(" || x == "{" || x == "[") {
//     stack.push(x);
// }

// else {
//     if (stack.length == 0) {
//         return  "NO";
//     }
//     var check;
//     switch (x) {
//         case ")":
//             check = stack.pop();
//             if (check == "{" || check == "[") {
//                 return "NO";
//             }
//             break;
//         case "}":
//             check = stack.pop();
//             if (check == "(" || check == "[") {
//                 return "NO";
//             }
//             break;
//         case "]":
//             check = stack.pop();
//             if (check == "(" || check == "{") {
//                 return "NO";
//             }
//             break;
//     }
// if (stack.length) {
//     return "NO"
// }else {
//     return "YES"
// }}}}


// console.log(isBalanced("{[()]}")); 
// console.log(isBalanced("({[]})]"));
// console.log(isBalanced("({[]})["));

    


    

