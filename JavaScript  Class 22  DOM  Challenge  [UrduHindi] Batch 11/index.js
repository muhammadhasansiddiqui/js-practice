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
//     return "yes"
// }else {
//     return "no"
// }}}}


// console.log(isBalanced("{{}}[{}]()")); 
// console.log(isBalanced("({[]}){{{}}}]"));
// console.log(isBalanced("({[]})["));



// function isBalanced(input) {
//     var stack = [];

//     for (var i = 0; i < input.length; i++) {
//         var x = input[i];

//         if (x == "(" || x == "{" || x == "[") {
//             stack.push(x);
//         } else {
//             if (stack.length == 0) {
//                 return "NO";
//             }
//             var check;
//             switch (x) {
//                 case ")":
//                     check = stack.pop();
//                     if (check != "(") {
//                         return "NO";
//                     }
//                     break;
//                 case "}":
//                     check = stack.pop();
//                     if (check != "{") {
//                         return "NO";
//                     }
//                     break;
//                 case "]":
//                     check = stack.pop();
//                     if (check != "[") {
//                         return "NO";
//                     }
//                     break;
//             }
//         }
//     }

//     // Final check to see if the stack is empty
//     if (stack.length == 0) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }

// console.log(isBalanced("[")); // YES
// console.log(isBalanced("({[]}){{{}}}]")); // NO
// console.log(isBalanced("({[)")); // NO


    
// var para1 = document.getElementById("para1");
// var e  = document.getElementsByClassName("h");
// var f = document.getElementsByClassName("one");
// console.log(para1);
// console.log(e);
// console.log(f);



// console.log(document)

// function removeEle() {
//     var para = document.getElementById("para");
//     para.remove();
    
// }
