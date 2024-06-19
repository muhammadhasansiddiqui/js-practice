// function student( firstName, lastName, age) {
//     this.firstName =firstName
//     this.lastName = lastName
//     this.age = age

// }
// student.prototype.getFullname  = function () {
//     return `${this.firstName} ${this.lastName} ${this.age}`
// }

// // pakistan Students Names
// // let student = new student('Saeed', 'Amir', 24)

// let student1 = new student('Muhammad', 'Ali', 20)
// let student2 = new student('Hassan', 'Khan', 22)
// let student3 = new student('Saeed', 'Amir', 24)
// let student4 = new student('Mubashar', 'Khan', 26)
// let student5 = new student('Hamza', 'Khan', 28)
// let student6 = new student('Zain', 'Khan', 30)
// let student7 = new student('Uzair', 'Khan', 19)
// let student8 = new student('Usman', 'Khan', 18)
// let student9 = new student('Hamza', 'Khan', 17)
// let student10 = new student('Zain', 'Khan', 16)
// let student11 = new student('Uzair', 'Khan', 15)
// let student12 = new student('Usman', 'Khan', 14)
// console.log(student in student1)

// // Objects:
// // Checking for properties and methods

// console.log(student1)

// var obj = {
//   name: "Saeed",
//   age: 24,
//   gender: "male",
// };


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// // console.log("name" in obj);



// console.log("gender" in obj);

// for (var key in obj) {
//   console.log(key, obj[key]);
// }

// function play() {
//     var db = document.getElementById("dropDown")
//     console.log("🚀 ~ play ~ db:", db.value);
    
// }


// function play() {
//     var gender = document.getElementsByName("gender")
    
// for (let i = 0; i < gender.length; i++) {
//     if (gender[i].checked) {
//         console.log("��� ~ play ~ gender:", gender[i].value);
//     }
//     else{alert 
//         ("Please select your gender")
//     }
    
// }

    // console.log("🚀 ~ play ~ gender:", gender);

    function play() {
        var file = document.getElementById("file")
        var img = document.getElementById("img")
        img.src = URL.createObjectURL(file.files[0])
        // console.log("��� ~ play ~ file:", file.files[0].name);
        // file.innerHTML = file.files[0].name + "<br>"    
      
    }