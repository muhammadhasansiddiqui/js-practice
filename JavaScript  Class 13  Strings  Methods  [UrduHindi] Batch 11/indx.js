// var str = "smit campus"
// console.log(str.length)
// console.log(str.slice(0,5))





// var str = "smit campus";
// console.log(str.lastIndexOf("s"));

// var str = " smit";
// console.log(str.indexOf('work'));

//  var arry = ["smit", "campus", "work"];
//  console.log(arry.indexOf("work"));


// var str ="Hasan";
// console.log(str.slice(2,5));
// console.log(str[2]);
// console.log(str.charAt(2));

// var strPara = "smit campus";
// console.log(strPara.replace("campus" , "Gulshan"));






















// var num = 10 * Math.random();
// console.log(num);

// var num ="12.33214328942"
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(Number(num));
// console.log(+num);

// var num = 12.6786698;
// console.log(num.toString())
// console.log(num.toFixed(20))

function generatePassword() {
    // Get the number input element
    var numberInput = document.getElementById("numberInput");

    // Get the entered number
    var num = parseInt(numberInput.value);

    // Generate a random number based on user input
    var randomNum = Math.floor(Math.random() * num) + 1;

    // Convert the number to a string
    var password = randomNum.toString();

    // Display the generated password on the webpage
    document.getElementById("passwordDisplay").textContent = "Generated Password: " + password;
}
