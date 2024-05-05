// var dateOfbakraEid = "Sun, Jun 16, 2024";
// var dateOfbakraEid = new Date(dateOfbakraEid);
// var dateNow = new Date();
// var diff = dateOfbakraEid - dateNow;
// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((diff % (1000 * 60)) / 1000);
// document.getElementById("days").innerHTML = days;
// document.getElementById("hours").innerHTML = hours;
// document.getElementById("minutes").innerHTML = minutes;
// document.getElementById("seconds").innerHTML = seconds;

function updateCountdown() {
    var dateOfBakraEid = new Date("Jun 16, 2024 00:00:00").getTime();
    var now = new Date().getTime();
    var dayOfeid = dateOfBakraEid - now;

    var days = Math.floor(dayOfeid / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dayOfeid % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((dayOfeid % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((dayOfeid % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();