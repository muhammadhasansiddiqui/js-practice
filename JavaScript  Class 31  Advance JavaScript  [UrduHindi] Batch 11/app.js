// let students = [
//     { name: "hasan", age: 20 },
//     { name: "raza", age: 22 },
//     { name: "ahmed", age: 21 },
//     { name: "uzair", age: 23 },
//     {name : "fashi",age:18}
//   ];

// let ans = students.filter((student) => {
//     return student.age < 22;
// });
// console.log(ans);
//Array methods

//  find methods

// let students = [
//     { name: "hasan", age: 20 },
//     { name: "raza", age: 22 },
//     { name: "ahmed", age: 21 },
//     { name: "uzair", age: 23 },
//     {name : "fashi",age:18}
//   ];

// let ans = students.findIndex((student) => {
//     return student.age === 22;
// });
// console.log(ans);


// let students = [
//     { name: "hasan", age: 20 },
//     { name: "raza", age: 22 },
//     { name: "ahmed", age: 21 },
//     { name: "uzair", age: 23 },
//     {name : "fashi",age:"18"}
//   ];

// let ans = students.some((student) => {
//     return student.age < 25;
// });
// console.log(ans);


// let students = [
//     { name: "hasan", age: 20 },
//     { name: "raza", age: 22 },
//     { name: "ahmed", age: 21 },
//     { name: "uzair", age: 23 },
//     {name : "fashi",age:"18"}
//   ];

// let ans = students.find((student) => {
//     return student.age < 25;
// });
// console.log(ans);


// let studentsFee = [
//     { name: "hasan", fee: 2000 },
//     { name: "raza", fee: 2200 },
//     { name: "ahmed", fee: 2100 },
//     { name: "uzair", fee: 2300 },
//     {name : "fashi",fee:1800}
//   ];

//   let result = studentsFee.reduce(function (a,v,i) {
//   console.log("🚀 ~ result ~ a:", a ,v.fee);
      
//       return a + v.fee;
      
//     },100)
    
//     console.log("🚀 ~ result ~ result:", result);

// Arrow functions



// let abc = function  (a,b) {
//   return a + b;
  
// }
// console.log(abc(2,5))
// console.log(abc(5,5))

// let abc =   a =>  a + 100;
    

//   console.log(abc(2,5))
//   console.log(abc(5,5))

// let obj = {
//   name: "hasan",
//   age: 20,
//   city: "karachi",
//   getDetails:  ()=> {
//     console.log(`my name is ${} and i am ${this.age} years old and i live in ${this.city}`);
//   },
// };
// obj.getDetails();

// let obj = {
//   name: "hasan",
//   age: 20,
//   city: "karachi",
//   getDetails:  function() {
//     console.log(`my name is ${this.name} and i am ${this.age} years old and i live in ${this.city}`);
//   },
// };
// obj.getDetails();

//Exponentiation Operator

// let a = 3;
// let b = 5;


// let result = a ** b;
// let result = a ** b;
// // console.log("🚀 ~ result:", result);


// let a = 50
// let b = 60
// let c = a+b
// let ans = c.Math.pow(2,3)
// console.log("🚀 ~ ans:", ans);


// let ans = Math.pow(2, 3)
// console.log("🚀 ~ ans:", ans);


// Classes 

// class student {
//   constructor(a,b,c){
//     this.name = "hasan"
//     this.age = 20
//     this.city = "karachi"
//   }
//   };
//     console.log("🚀 ~ student:", new student);

class Student {

 constructor(name,age,city) {
   this.name = name
   this.age = age
   this.city = city
 }
 getName (){
     return name = name
 } 

 }
 let student = new Student("hasan", 20, "karachi")
 console.log(student.name)


