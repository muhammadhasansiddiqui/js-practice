// for (var i = 0; i < 5; i++) {
//   console.log(i);
// if (i == 2) {
//   break;
// }
// }
// console.log("Outside the loop");


// for (var i = 0; i < 5; i++){ 
// for (var j = 0; j < 5; j++){

//     console.log(i,j);
// }
// }

// for (var i = 0; i < 100000; i++) {
//   console.log(i);
// }

// var userName = prompt("What is your name?");
// var low = userName.toLowerCase();
// console.log(low);


// var userName = prompt("What is your name?");
// var low = userName.toLocaleLowerCase();
// console.log(low);

// var userName = prompt("What is your name?");
// var capitalized = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
// console.log(capitalized);



// var firstName = prompt("What is your first name?"); "hasan siddiqui";  
// var result = "";

// for (var i =0; i < firstName.length; i++) {
//    if (i === 0 ) {
//     result += firstName[i].toUpperCase();
//    }
   
//    else if (firstName[i - 1] === " ") {
//     result += firstName[i].toUpperCase();
//    }
   
//    else {
//     result += firstName[i]
//    }

// }  

// console.log("Name = ",result);



// var student = prompt("Enter your name");
// var result = "";

// for (var i = 0; i < student.length; i++) {

// if (i === 0) {
//     result += student[i].toUpperCase();
// }
// else if ( student[i - 1] === " ") {
//     result += student[i].toUpperCase();
// }
// else {
//     result += student[i];
// }
// }

// console.log(result);
// document.write(result);

// var bornYear = +prompt("Enter your born year");
// var  sal = ""
// var year = new Date().getFullYear();
// var age = year - bornYear;


// if (
//     bornYear === " " ||
//     bornYear === null ||
//     bornYear === undefined ||
//     isNaN(bornYear)
// ) {
//     alert("Please enter your born year");
// }

// document.write("Your age is " + age);



// var names = [["HASAN ","siddiqui"],["zee","mes"]]

// for (var i = 0; i < names.length; i++) {

//     for (var j = 0; j < names[i].length; j++) {

//         console.log(names[i][j]);
//     }
// }

// var names = [ ["Hasan"],["uziar"]];

// for ( var i = 0 ; i < names.length; i++) {

//     for ( var j= 0 ; j < names[j].length; j++){

// console.log (names[i],[j])

//     }

// }

// var para = 
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod dolor.";

//   var para = para.replace(/dolor/g, "$")
//   console.log(para.replaceAll("elit","eat"));
//   console.log(para);
    

// var number = 3.5;
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
