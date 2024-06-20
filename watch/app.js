// create a watches web using Object

var watches = {
  rado: {
    name: "rado",
    price: 100,
    color: "black",
    weight: 2,
    // watch img
    img:  "https://www.rado.com/media/catalog/product/c/a/cat_originaldiastar_764_6163_3_511_r12163118_web.png?im=Resize=(800,800),aspect=fit;Crop=(0,0,800,800),gravity=Center,allowExpansion",
  },
  tommy: {
    name: "tommy",
    price: 200,
    color: "white",
    weight: 3,
  },
  timex: {
    name: "timex",
    price: 300,
    color: "blue",
    weight: 4,
  },
  Tudor: {
    name: "Tudor",
    price: 400,
    color: "green",
    weight: 5,
  },
  Casio: {
    name: "Casio",
    price: 500,
    color: "red",
    weight: 6,
  },
  Rolex: {
    name: "Rolex",
    price: 600,
    color: "yellow",
    weight: 7,
  },
  Titan: {
    name: "Titan",
    price: 700,
    color: "black",
    weight: 8,
  },
  Fossil: {
    name: "Fossil",
    price: 800,
    color: "white",
    weight: 9,
  },
  Hamilton: {
    name: "Hamilton",
    price: 900,
    color: "blue",
    weight: 10,
  },
  Seiko: {
    name: "Seiko",
    price: 1000,
    color: "green",
    weight: 11,
  },
};

// get watches name
// show in broswer
var  watches = document.getElementById("watches");
// show img
watches.document = watches.img; 
;