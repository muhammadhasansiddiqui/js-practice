// Variable Scoping


// var  a = "hasan";
// a   = "siddiqui";
// console.log("🚀 ~ a:", a);


// let  a = "hasan";
// a   = "siddiqui";
// console.log("🚀 ~ a:", a);


// const a = "hasan";
// a   = "siddiqui";
// console.log("🚀 ~ a:", a);

// var  a = "hasan";
// var a ="siddiqui"
// console.log("🚀 ~ a:", a);


// let a = "hasan";
// let a ="siddiqui"
// console.log("🚀 ~ a:", a);

// const a = "hasan";
// const a ="siddiqui";
// console.log("��� ~ a:", a);
// const a = "hasan";
// a = "siddiqui";
// console.log("🚀 ~ a:", a);

// let a = "hasan";
//  let a = "siddiqui";
//  console.log("🚀 ~ a:", a);



// const a=[]
// a[0]="smit"
// console.log("��� ~ a:", a)

// console.log("🚀 ~ a:", a);
// var a = "hasan"

// console.log("🚀 ~ a:", a);
// let a = "hasan"


// cesronas  acesronas

// setTimeout(() => {
    
//     console.log("��� ~ a:");
// }, 1000);


// console.log("��� ~ b:");


// for (i = 0  ; i < 5; i++) {
// console.log(i);
// setTimeout(() => {
//     console.log(i);
// }, 1000);
// }


// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// } 
// console.log("��� ~ i:", i);


//Destructuring
// // Define the Person object

// let Student = {
//     name: "hasan",
//     email: "hasan@email.com",
// }

// const { name, email } = Student;
// console.log("🚀 ~ email:", email);
// console.log("🚀 ~ name:", name);

//  let Student = {
//          name: "hasan",
//          email: "hasan@email.com",
//     }

//     let sea = "name";
//     let { [sea]: name, email } = Student;
//     console.log("��� ~ email:", email);
//     console.log("��� ~ name:", name);


// let Student = {
//               name: "hasan",
//              email: "hasan@email.com",
//          }

//          let {name , email,time="9to11" } = Student
//          console.log("🚀 ~ time:", time);
//          console.log("🚀 ~ email:", email);
//          console.log("🚀 ~ name:", name);
         



// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Destructure the person object
// const { name, age, city } = person;

// console.log("name:", name);
// console.log("age:", age);
// console.log("city:", city);

// // Define the numbers array
// const numbers = [1, 2, 3, 4, 5];

// // Destructure the numbers array
// const [first, second, ...rest] = numbers;

// console.log("first:", first);
// console.log("second:", second);
// console.log("rest:", rest);

// // Destructure with renaming
// const { name: fullName, age: personAge, city: personCity } = person;

// console.log("fullName:", fullName);
// console.log("age:", personAge);
// console.log("city:", personCity);

// // Reuse the same array destructuring example
// const [firstNum, secondNum, ...restNums] = numbers;

// console.log("firstNum:", firstNum);
// console.log("secondNum:", secondNum);
// console.log("restNums:", restNums);


// let arr = ["hasan" , "siddiqi",335];
// let [a,b,c]=arr;
// console.log("🚀 ~ c:", c);
// console.log("🚀 ~ b:", b);
// console.log("🚀 ~ a:", a);


// function foo (a = 'saylani',...rest){
//     console.log(rest);
// }
// foo("smit","hasan","etc");

// let arr = ["hasan"]
// let arr2 = ["siddiqui"]
// let arr3 = [...arr, ...arr2]
// console.log("🚀 ~ arr3:", arr3);
