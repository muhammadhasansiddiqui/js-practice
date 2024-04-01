var city = ["karachi", "lahore", "islamabad", "multan"];
var flag = false;

for (var i = 0; i < city.length; i++) {
    if (city[i] === "multan") {
        flag = true;
        break;
    }

}

if (flag) { 
    console.log("Welcome to the city of lights");
} else {
    console.log("You are not welcome here");
}
