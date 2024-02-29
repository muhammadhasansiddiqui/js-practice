
document.write =(
    "<h1>Hello World</h1>"

    + "<h2>Hello World</h2>"
    + "<h3>Hello World</h3>"
    + "<h4>Hello World</h4>"

)


var steps = document.getElementById("steps");

function counter() {
  var hours = new Date().getHours();
  var minute = new Date().getMinutes();
  var second = new Date().getSeconds();
  var miliSecond = 0;
    setInterval(function () {
    miliSecond++;
    if (miliSecond == 100) {
      miliSecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    steps.innerHTML = `${(hours % 12) || 12}:${minute}:${second}:${miliSecond}`;
  }, 10);
}

function blinkText() {
  if (steps.style.display == "none") {
    steps.style.display = "";
  } else {
    steps.style.display = "none";
  }
}