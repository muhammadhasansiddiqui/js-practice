// let student = {

// name : "hasan",
// age : 20,
// marks : 94.4,
// classDetails : {
//     class : 12,
//     section : "A"
// }

// }

// let { name , age, marks ,classDetails: {class,}} = student;
// console.log("🚀 ~ section:", section);


// console.log("🚀 ~ marks:", marks);
// console.log("🚀 ~ age:", age);
// console.log("🚀 ~ name:", name);


// let student = {

// name : "hasan",
// age : 20,}

// let search = "name";
// let {[search]:a}    = student;
// console.log("🚀 ~ a:", a);


// let studentnameArr =  ["hasan", "ali", "khan"];

// let [a,b,c] = studentnameArr;
// console.log("🚀 ~ a,b,c:", a,b,c);



//Enhanced object literals
// let student = "hasan";
// let age = 20;

// let obj = {
//     student,
//     age
// }
// console.log("🚀 ~ obj:", obj);


// Optional chaining

// let obj = {
//     name: "hasan",
//     age: 20,
//     address: {
//         city: "karachi",
//         country: "pakistan"
//     }
// }
// console.log( obj?.address?.city?.age);


// CallBack


// function abc (cb){
//     setTimeout (function(){
//         console.log("done");
//         cb();
//     }, 2000)
// }


// function callBack(){
    
//     console.log("free ho gya ma ");
    
// }
// abc(callBack);











// Array methods

// let citysArr = ["karachi", "lahore", "islamabad"];
//   citysArr.forEach(function (city, index ,Array) {
//     console.log("��� ~ city:", city,index,Array); ;
//   });

// let newArr = citysArr.map(function (city, index, Array) {
//     return `${city},pakistan`
// });
// console.log("🚀 ~ newArr ~ newArr:", newArr);


// let age =+ prompt("enter your age");
// age = [age];

// let result = age.filter(function (age) {
//     return age >= 18;
// });

// console.log("��� ~ result:", result);

// let cityandpolo = [
//     {
//         city: "karachi",
//         polo: "1000"
//     },
//     {
//         city: "lahore",
//         polo: "500"
//     },
//     {
//         city: "islamabad",
//         polo: "300"
//     }
// ];

// let ans = cityandpolo.filter(function(e){
//     return e.polo  <=  500    ;
// })
// console.log("��� ~ ans:", ans);