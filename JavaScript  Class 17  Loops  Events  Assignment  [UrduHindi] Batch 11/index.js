/* var arr = ["Hasan" ,'Zeeshan' , "Ali" , "Uzair" ] 

for ( var v of arr){
    console.log(v)} */

function submit() {
  var cities = document.getElementsByName("city");
  for (var city of cities) {
    if (city.checked) {
      console.log(city.value);
    }
  }
}
