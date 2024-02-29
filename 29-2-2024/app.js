var steps = document.getElementById("steps");

function counter() {
  setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    // Format the time with leading zeros
    hours = (hours % 12) || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    milliseconds = milliseconds < 100 ? '0' + milliseconds : milliseconds;

    steps.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }, 10);
}

// Call the counter function to start updating the time
counter();
