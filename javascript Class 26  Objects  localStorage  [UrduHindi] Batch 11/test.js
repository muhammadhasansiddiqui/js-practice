var cars = {

honda: {


    model: "civic",
    year: 2018,
    color: "red",
},

toyota: {

    model: "camry",
    year: 2017,
    color: "blue",
},

suzuki: {

    model: "swift",
    year: 2019,
    color: "green",
}

}



var comapny = document.getElementById("comapny");
var model = document.getElementById("model");


for (var key in cars) {

    
    comapny.innerHTML += ` option value="${key}"> ${key} </option> `;
}

function filterCar(){

    for (var key in cars [comapny.value]) {

      
    }
}

function filterCar() {
    console.log(comapny.value)
}