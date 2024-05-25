var count = 5;
var ref;

function abc() {
    var car = document.getElementById("car");
  
    count += 5;
    if (count > window.innerWidth) {
        count = -car.width; 
    }

    car.style.left = count + "px";
}

function start() {
    if (!ref) {
        ref = setInterval(abc, 10); 
    }
}

function stop() {
    clearInterval(ref);
    ref = null; }
