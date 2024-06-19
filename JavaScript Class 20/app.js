var pakiatan = {
  karachi: {
    population: 1000,
    size: 2000,
  },
  hyderabad: {
    population: 2000,
    size: 2000,
  },
  islamabad: {
    population: 3000,
    size: 3000,
  },
  lahore: {
    population: 4000,
    size: 4000,
  },
  peshawar: {
    population: 5000,
    size: 5000,
  },

  multan: {
    population: 6000,
    size: 6000,
  },
  faisalabad: {
    population: 7000,
    size: 7000,
  },
  quetta: {
    population: 8000,
    size: 8000,
  },
  gawadar: {
    population: 9000,
    size: 9000,
  },
  khuzdah: {
    population: 10000,
    size: 10000,
  },
  sialkot: {
    population: 11000,
    size: 11000,
  },
  rawalpindi: {
    population: 12000,
    size: 12000,
  },
};
var city = document.getElementById("city").value;

function enter() {
  
  
  console.log("🚀 ~ city:", city);
  
  var cityInfo =document.getElementById("cityInfo")
  cityInfo.innerHTML =`<h1>City: ${city}</h1>
     <p>Population: ${pakiatan[city].population} </p>
     <p>Size: ${pakiatan[city].size}</p>   `;
  console.log("🚀 ~ ity.innerHTM:",city.innerHTM);
}


