// var para = document.getElementById("para");
// console.log(para.attributes)

const { Button } = require("actions-on-google");

// para.setAttribute("class","para110");

function post() {
  var input = document.getElementById("text").value;

  console.log("🚀 ~ post ~ input:", input);
  var output = document.getElementById("output");
  output.innerHTML = input;
}

// background change
function red() {
  var red = (document.body.style.backgroundColor = "red");
}

function blue() {
  var blue = (document.body.style.backgroundColor = "blue");
}

function orange() {
  var orange = (document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=400')");
}

function white() {
  var white = (document.body.style.backgroundColor = "lightblue");
}

function grey() {
  var grey = (document.body.style.backgroundColor = "grey");
}

// image change
