var randomValue = "sjgegewdugewqruwqr32481@@@@#"

for (var i = 0; i < 10; i++) {
    var randomNumer =Math.round(Math.random () * randomValue.length ) ;
    console.log(randomValue[randomNumer]);
}
