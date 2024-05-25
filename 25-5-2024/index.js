const e = require("express");

function handlepopup() {
  window.open("home.html", "", (width = "2px"), (hight = "2px"));
}

// function checkInput() {

//     const userInput = document.getElementsByTagName("input")[0];
//     console.log("userInput.value" , userInput.value);

//     if (userInput.value == "admin") {
//         handlepopup();
//         console.log("userInput.value", userInput.value);
//     }

// }

function validateRadios() {
  var radios = document.getElementsByName("r1");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  alert("Please check one.");
  return false;
}



